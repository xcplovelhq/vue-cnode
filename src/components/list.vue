<template lang="html">
    <div class="m-list" v-on:scroll="getScroll" ref="setScrollTop">
        <mu-list>
            <mu-list-item v-for="(v,index) in list" :key="v" tag="a" :to="'/topic/' + v.id">
                <div class="m-title"><TopTips :tab="v.tab" :good="v.good" :top="v.top"></TopTips>{{v.title}}</div>
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
        <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
    </div>
</template>

<script>
import TopTips from './TopTips.vue'
export default {
    props: {
        list: {
            type: Array,
        },
        loading:{
            type: Boolean
        },
        scrollTop:{
            type: Number
        }
    },
    data: function () {
        return {
            // data: [],
            num: 1,
            scroller:null,
        }
    },
    mounted (){
        this.scroller = this.$el
    },
    beforeUpdate(){
        this.$refs.setScrollTop.scrollTop = this.scrollTop
    },
    methods:{
        loadMore: function(){
            this.$emit('scroll')
        },
        getScroll (e){
            this.$emit('getScroll',e.target.scrollTop)
        },
    },
    components:{
        'TopTips':TopTips,
    }
}
</script>

<style lang="scss">
    .m-list{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        bottom: 56px;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
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
