<template lang="html">
    <ul class="g-problem">
        <li v-for="(list,index) in topicList" v-if="index < isIndex">
            <div class="m-img"><img :src="list.author.avatar_url" alt=""></div>
            <div class="m-name">{{ list.author.loginname }}</div>
            <div class="m-title">{{ list.title }}</div>
            <div class="m-time"><timeago :since="list.last_reply_at"></timeago></div>
        </li>
    </ul>
</template>

<script>

export default {
    props:{
        topicList:{
            type: Array,
        },
        index:{
            type: Number,
        }
    },
    computed:{
        isIndex(){
            if(this.index){
                return "5"
            }
        }
    }
}

</script>

<style lang="scss">
.g-problem{
    li{
        display: flex;
        padding: 10px;
        font-size: 14px;
        color: #333;
        border-bottom: 1px solid #f0f0f0;
        .m-img{
            width: 30px;
            height: 30px;
            img{
                width: 100%;
            }
        }
        .m-name{
            width: 50px;
            padding-left: 10px;
            line-height: 30px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
        .m-title{
            width: 200px;
            color: #00aff0;
            line-height: 30px;
            padding: 0 0 0 20px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
        .m-time{
            flex: 1;
            line-height: 30px;
            text-align: right;
        }
    }
}
</style>
