<template lang="html">
    <div class="g-list">
        <Loading v-if="isLoading"></Loading>
        <List :list="list" v-on:scroll="scroll" :loading="loading" v-on:getScroll="getScroll" :scrollTop="scrollTop"></List>
        <mu-paper>
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
import List from '../../components/List.vue'
import Loading from '../../components/Loading.vue'
export default {
    data: function () {
        return {
            list: [],
            scroller: null,
            isLoading: false,
            loading: false,
            bottomNavColor: 'all',
            scrollTop: 0,
            params:{
                num: 1,
                bottomNav: 'all',
            }
        }
    },
    mounted (){
        this.scroller = this.$el;

    },
    beforeRouteEnter (to, from, next){
        let self = this;
        next( vm => {
            vm.scrollTop = vm.$store.state.scrollTop+1;
            vm.$store.commit("getTitle",vm.params.bottomNav)
        })
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
            this.$store.commit("getTitle",val)
            this.getScroll(0)
        },
        scroll(){
            this.params.num+= 1;
            this.loading = true;
            this.$store.dispatch("GetTopicsList",this.params).then((data) => {
                data.forEach((v) =>{
                    this.list.push(v);
                })
                this.loading = false;
            })
        },
        getScroll(e){
            this.$store.commit("getScroll",e)
            this.scrollTop = e
        },
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
        Loading:Loading
    }
}
</script>

<style lang="scss">
    .g-list{
        height: auto;
        bottom: 0px;
        .mu-paper{
            position: absolute;
            left: 0;
            bottom: 0px;
            width: 100%;
            .mu-bottom-nav{
                background: #00aff0;
            }
        }
    }
</style>
