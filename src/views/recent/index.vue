<template lang="html">
    <div class="g-recentList">
        <UserItemList :topicList="getRecentList"></UserItemList>
    </div>
</template>

<script>
import UserItemList from '../../components/UserItemList.vue'
export default {
    data (){
        return {

        }
    },
    created(){

    },
    computed:{
        getRecentList(){
            if(this.$route.name === "topicList"){
                return this.$store.state.userInfo.recent_topics
            }else{
                return this.$store.state.userInfo.recent_replies
            }
        }
    },
    components: {
        'UserItemList': UserItemList
    }
}
</script>

<style lang="css">

</style>
