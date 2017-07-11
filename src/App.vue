<template>
  <div id="app">
    <div class="g-header">
        <mu-appbar :title="title" titleClass="center">
          <mu-icon-button icon="navigate_before" slot="left" @click="historyBack" />
          <mu-icon-button icon="expand_more" slot="right"/>
        </mu-appbar>
    </div>
    <transition :name="transitionName">
        <router-view class="child-view"></router-view>
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
            transitionName: 'slide-left'
        }
    },
    computed: {
        title (){
            if(this.bottomNav === "all"){
                return "全部"
            }else if(this.bottomNav === "good"){
                return "精华"
            }else if(this.bottomNav === "share"){
                return "分享"
            }else if(this.bottomNav === "ask"){
                return "问答"
            }else if(this.bottomNav === "job"){
                return "招聘"
            }
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
            console.log("dsads");
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
