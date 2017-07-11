<template lang="html">
    <ul class="g-replyList">
        <li v-for="(replies, index) in replies">
            <div class="m-title">
                <router-link :to="'/user/' + replies.author.loginname" class="m-img"><img :src="replies.author.avatar_url" alt=""></router-link>
                <router-link :to="'/user/' + replies.author.loginname" class="m-name">{{ replies.author.loginname }}</router-link>
                <a href="javascript:;" class="m-time">{{ index+1 }}楼●<timeago :since="replies.create_at"></timeago></a>
            </div>
            <div class="m-content">
                <div v-html="replies.content"></div>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        replies:{
            type: Array
        }
    }
}
</script>

<style lang="scss">
.g-replyList{
    li{
        border-bottom: 1px solid #f0f0f0;
    }
    .m-title{
        .m-img{
            img{
                width: 30px;
            }
        }
        .m-name{
            font-size:12px;
            color: #333;
        }
        .m-time{
            font-size: 12px;
            color: #00aff0;
        }
    }
    .m-content{

    }
}
</style>
