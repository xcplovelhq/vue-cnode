<template lang="html">
    <div class="m-list">
        <mu-list>
            <mu-list-item v-for="(v,index) in list" :key="v" tag="li">
                <div class="m-title"><span :class="[v.top ? 'z-ding': '']">{{getType(v.tab)}}</span>{{v.title}}</div>
                <div class="m-box">
                    <mu-flexbox>
                        <mu-flexbox-item class="flex-demo m-left" grow="0">
                            <div class="m-img">
                              <img :src="v.author.avatar_url" alt="">
                            </div>
                        </mu-flexbox-item>
                        <mu-flexbox-item class="flex-demo m-txt" shrink="1">
                            <h3>{{ v.author.loginname}}</h3>
                            <p><timeago :since="v.create_at"></timeago></p>
                        </mu-flexbox-item>
                        <mu-flexbox-item class="flex-demo m-txt m-right" shrink="1">
                            <h3><span>{{v.reply_count}} </span>/{{v.visit_count}}</h3>
                            <p><timeago :since="v.last_reply_at"></timeago></p>
                        </mu-flexbox-item>
                    </mu-flexbox>
                </div>
            </mu-list-item>
        </mu-list>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    props: {
        list: {
            type: Array,
        },
    },
    data: function () {
        return {
            // data: [],
            num: 1,
            scroller:null,
            loading:false
        }
    },
    mounted (){
        this.scroller = this.$el
    },
    methods:{
        loadMore: function(){
            this.$emit('scroll')
        },
        getType: function(tab){
            if(tab == "share"){
                return "分享"
            }else if(tab == "ask"){
                return "问答"
            }else if(tab == "job"){
                return "招聘"
            }
        },
    }
}
</script>

<style lang="scss">
    .m-list{
        position: absolute;
        top: 56px;
        left: 0;
        bottom: 56px;
        width: 100%;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        background: #fff;
        ul{
            margin: 0;
            padding-left: 0;
        }
        .mu-item{
            padding: 10px 13px;
            border-bottom: 1px solid #d5dbdb;
            transition: all 1s;
            .m-title{
                width: 100%;
                font-size: 16px;
                color: #333;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                span{
                    display: inline-block;
                    margin-right: 10px;
                    padding: 3px 5px;
                    font-size: 12px;
                    color: #999;
                    border-radius: 6px;
                    background: #e5e5e5;
                    &.z-ding{
                        color: #fff;
                        background: #80bd01;
                    }
                }
            }
            .m-box{
                display: flex;
                margin-top: 10px;
                .m-left{
                    width: 40px;
                }
                .m-img{
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: #ccc;
                    overflow: hidden;
                    img{
                      width: 40px;
                      height: 40px;
                    }
                }
                .m-txt{
                    h3{
                        font-size: 14px;
                        color: #34495e;
                        span{
                            font-weight: bold;
                            color: #80bd01;
                        }
                    }
                    p{
                        font-size: 14px;
                        color: #34495e;
                    }
                }
                .m-right{
                    text-align: right;
                }
            }
        }
    }
</style>
