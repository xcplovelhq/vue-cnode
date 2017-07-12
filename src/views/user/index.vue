<template lang="html">
    <div class="g-user">
        <div class="m-title">
            <div class="m-img">
                <img :src="user.avatar_url" alt="">
            </div>
            <h3 class="m-name">{{ user.loginname }}</h3>
            <p class="m-time">注册时间：<timeago :since="user.create_at"></timeago></p>
        </div>
        <div class="m-tab">
            <mu-tabs :value="activeTab" @change="handleTabChange" lineClass="m-line">
               <mu-tab value="tab1" title="最近创建的话题" titleClass="m-tabTxt"/>
               <mu-tab value="tab2" title="最近参与的话题" titleClass="m-tabTxt"/>
            </mu-tabs>
        </div>
        <div v-if="activeTab === 'tab1'" class="m-recent">
            <UserItemList :topicList="user.recent_topics" :index="5"></UserItemList>
            <router-link :to="'/user/' + user.loginname + '/topic'" class="m-btn">查看更多&gt;&gt;</router-link>
        </div>
        <div v-if="activeTab === 'tab2'" class="m-recent">
            <UserItemList :topicList="user.recent_replies" :index="5"></UserItemList>
            <router-link :to="'/user/' + user.loginname + '/replies'" class="m-btn">查看更多&gt;&gt;</router-link>
        </div>
    </div>
</template>

<script>
import UserItemList from '../../components/UserItemList.vue'

export default {
    data (){
        return {
            user:{},
            activeTab: 'tab1'
        }
    },
    created(){

    },
    beforeRouteEnter (to, from, next){
        next( vm => {
            vm.getData();
        })
    },
    methods: {
        handleTabChange (val) {
            this.activeTab = val
        },
        getData (){
            this.$store.dispatch("GETUserInfo", {loginname : this.$route.params.loginname}).then((data) =>{
                this.user = data
            })
            this.$store.commit("getTitle","个人信息")
        }
    },
    components: {
        'UserItemList': UserItemList
    }
}
</script>

<style lang="scss">
.g-user{
    background: #fff;
    .m-title{
        padding: 50px 0 30px;
        .m-name{
            font-size: 20px;
            color: #333;
            text-align: center;
        }
        .m-time{
            font-size: 14px;
            color: #333;
            text-align: center;
        }
        .m-img{
            width: 80px;
            margin: 0 auto;
            border-radius: 50%;
            text-align: center;
            overflow: hidden;
            border: 1px solid #f0f0f0;
            img{
                width: 100%;
                vertical-align: top;
            }
        }
    }
    .m-tab{
        .mu-tabs{
            background: #fff;
        }
        .m-tabTxt{
            color: #00aff0;
        }
        .m-line{
            background: #00aff0;
        }
    }
    .m-recent{
        .m-btn{
            display: inline-block;
            padding: 5px 10px;
            font-size: 14px;
            color: #00aff0;
        }
    }
}
</style>
