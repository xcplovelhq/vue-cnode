<template>
  <div id="app">
    <div class="g-header">
        <mu-appbar :title="title" titleClass="center">
            <mu-icon-button icon="navigate_before" slot="left" @click="historyBack" />
            <mu-icon-menu icon="expand_more" slot="right" :anchorOrigin="leftBottom">
                <mu-menu-item title="菜单 1"/>
                <mu-menu-item title="菜单 2"/>
                <mu-menu-item title="菜单 3"/>
                <mu-menu-item title="菜单 4"/>
                <mu-menu-item title="菜单 5"/>
            </mu-icon-menu>
        </mu-appbar>
    </div>
    <transition :name="transitionName">
        <keep-alive>
            <router-view class="child-view"></router-view>
        </keep-alive>
    </transition>
  </div>
</template>

<script>
import axios from 'axios'


export default {
    name: 'app',
    data: function(){
        return {
            bottomNav: 'all',
            transitionName: 'slide-left',
            leftBottom:{"vertical":"bottom","horizontal":"left"}
        }
    },
    computed: {
        title (){
            return this.$store.getters.getTitle
        }
    },
    methods: {
        getTitle (val) {
            this.bottomNav = val;
        },
        historyBack(){
            window.history.go(-1)
        }
    },
    watch:{
        '$route' (to, from) {
            const toDepth = to.path.split('/').length
            const fromDepth = from.path.split('/').length
            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        }
    }
}
</script>

<style lang="scss">
    .g-header{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        .center{
            text-align: center;
        }
        .mu-appbar{
            background: #00aff0;
        }
    }
    .child-view{
        position: absolute;
        left: 0;
        top: 56px;
        bottom: 0px;
        width: 100%;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        background: #fff;
        transition: all .8s cubic-bezier(.55,0,.1,1);
    }
    .slide-left-enter, .slide-right-leave-active {
      opacity: 0;
      -webkit-transform: translate(50px, 0);
      transform: translate(50px, 0);
    }
    .slide-left-leave-active, .slide-right-enter {
      opacity: 0;
      -webkit-transform: translate(-50px, 0);
      transform: translate(-50px, 0);
    }
</style>
