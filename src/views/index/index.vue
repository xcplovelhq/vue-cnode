<template lang="html">
    <div class="">
        <div class="g-loading" v-if="isLoading">
            <div class="m-loading">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <List :list="list" v-on:scroll="scroll"></List>
        <mu-paper style="max-width: 376px; ">
            <mu-bottom-nav :value="params.bottomNav" shift @change="handleChange($event)">
                <mu-bottom-nav-item value="all" title="全部" icon="menu"/>
                <mu-bottom-nav-item value="good" title="精华" icon="thumb_up"/>
                <mu-bottom-nav-item value="share" title="分享" icon="share"/>
                <mu-bottom-nav-item value="ask" title="问答" icon="question_answer"/>
                <mu-bottom-nav-item value="job" title="招聘" icon="people"/>
            </mu-bottom-nav>
        </mu-paper>
    </div>
</template>

<script>
import axios from 'axios'
import List from '../../components/list.vue'
export default {
    data: function () {
        return {
            list: [],
            scroller: null,
            isLoading: false,
            params:{
                num: 1,
                bottomNav: 'all',
                bottomNavColor: 'all'
            }
        }
    },
    mounted (){
        this.scroller = this.$el
    },
    methods: {
        handleChange (val) {
            this.isLoading = true;
            this.params.bottomNav = val;
            this.params.title = val;
            this.$store.dispatch("GetTopicsList",this.params).then((data) => {
                this.list = data;
                this.isLoading = false;
            })
        },
        scroll(){
            this.isLoading = true;
            this.params.num+= 1;
            this.$store.dispatch("GetTopicsList",this.params).then((data) => {
                this.list = data;
                this.isLoading = false;
            })
        }
    },
    created: function() {
        this.isLoading = true;
        this.$store.dispatch("GetTopicsList",this.params).then((data) => {
            this.list = data;
            this.isLoading = false;
        })
    },
    components:{
        List:List,
    }
}
</script>

<style lang="scss">
    .m-list{
        position: absolute;
        top: 56px;
        left: 0;
        bottom: 56px;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        background: #fff;
        ul{
            margin: 0;
            padding-left: 0;
        }
        li{
            padding: 10px 13px;
            border-bottom: 1px solid #d5dbdb;
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
