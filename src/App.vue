<template>
  <div id="app">
    <div class="g-header">
        <mu-appbar :title="title" titleClass="center">
          <mu-icon-button icon="menu" slot="left" label="左边弹出"/>
          <mu-icon-button icon="expand_more" slot="right"/>
        </mu-appbar>
    </div>
    <transition>
        <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'app',
    data: function(){
        return {
            leftPopup: false,
            bottomNav: 'all',
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
        }
    },
}
</script>

<style lang="scss">

    .g-header{
        .center{
            text-align: center;
        }
    }
    .m-pop-left {
      display: flex;
      width: 50%;
      max-width: 375px;
      height: 100%;
      align-items: center;
      padding: 24px;
      background: #fff;
    }
    .mu-paper{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
    }
</style>
