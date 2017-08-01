<template lang="html">
    <div class="g-details">
        <Loading v-if="isLoading" class="g-loading"></Loading>
        <div class="g-title">
            <TopTips :tab="detail.tab" :good="detail.good" :top="detail.top"></TopTips>{{ detail.title }}
        </div>
        <div class="m-tips">
            <span>●发布于<timeago :since="detail.create_at"></timeago></span>
            <span>●作者{{ detail.author.loginname }}</span>
            <span>●{{ detail.visit_count }}多次浏览</span>
            <span>●最后一次编辑是<timeago :since="detail.last_reply_at"></timeago></span>
            <span>●来自 <TopTips :tab="detail.tab" :good="detail.good" :top="detail.top" :type="'showTxt'"></TopTips></span>
        </div>
        <div class="m-content">
            <div v-html="detail.content"></div>
        </div>
        <div class="m-replyList">
            <ReplyList :replies="detail.replies"></ReplyList>
        </div>
    </div>
</template>

<script>
import TopTips from '../../components/TopTips.vue'
import ReplyList from '../../components/ReplyList.vue'
import Loading from '../../components/Loading.vue'
export default {
    data(){
        return {
            detail: {
                author:{}
            },
            isLoading: false,
        }
    },
    created(){

    },
    beforeRouteEnter (to, from, next){
        next( vm => {
            vm.getData();
        })
    },
    methods:{
        getData (){
            this.isLoading = true;
            this.$store.dispatch("GETDetails",{id:this.$route.params.id}).then((data) =>{
                this.detail = data;
                this.isLoading = false;
            })
            this.$store.commit("getTitle","详情")
        }
    },
    components:{
        'TopTips':TopTips,
        'ReplyList':ReplyList,
        'Loading':Loading
    }
}

</script>

<style lang="scss">
.g-details{
    background: #fff;
    .g-loading{
        height: 100%;
    }
    .g-title{
        padding: 10px;
        font-size: 20px;
    }
    .m-tips{
        padding: 0 10px 10px;
        border-bottom: 1px solid #f0f0f0;
    }
    .m-content{
        padding: 10px;
        .markdown-text{
            h1,h2,h3,h4,h5{
                margin: 30px 0 15px;
                border-bottom: 1px solid #eee;
            }
            h1{
                font-size: 32.5px;
            }
            h2{
                font-size: 26px;
            }
            h3{
                font-size: 24.5px;
            }
            h4{
                font-size: 17.5px;
            }
            p{
                white-space: pre-wrap;
                word-wrap: break-word;
                font-size: 15px;
                line-height: 1.7em;
                overflow: auto;
            }
            blockquote {
                padding: 0 0 0 15px;
                margin: 10px 0 20px;
                border-left: 5px solid #eee;
            }
            ul{
                padding: 0;
                margin: 0 0 10px 25px;
                li{
                    font-size: 14px;
                    line-height: 2em;
                    list-style: disc;
                }
            }
            a{
                color: #00aff0;
            }
            img{
                width: 100%;
            }
            table{
                padding: 0;
                border-collapse: collapse;
                border-spacing: 0;
                font: inherit;
                tr{
                    border-top: 1px solid #ccc;
                    background-color: #fff;
                    margin: 0;
                    padding: 0;
                    th{
                        border: 1px solid #ccc;
                        text-align: left;
                        margin: 0;
                        padding: 6px 13px;
                    }
                    td{
                        border: 1px solid #ccc;
                        text-align: left;
                        margin: 0;
                        padding: 6px 13px;
                    }
                }
            }
            .prettyprint{
                    font-size: 14px;
                    border-radius: 0;
                    padding: 0 15px;
                    border: none;
                    margin: 20px 0;
                    border-width: 1px 0;
                    background: #f7f7f7;
                    -moz-tab-size: 4;
                    tab-size: 4;
            }
        }
    }
}

</style>
