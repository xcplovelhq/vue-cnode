<template lang="html">
    <div class="g-details">
        <Loading v-if="isLoading"></Loading>
        <div class="m-title">
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
        // this.getData();
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
    .m-title{
        padding: 10px;
        font-size: 20px;
    }
    .m-tips{
        padding: 0 10px;
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
            h3{
                font-size: 24.5px;
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
        }
    }
}

</style>
