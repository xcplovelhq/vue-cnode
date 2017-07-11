<template lang="html">
    <div class="g-list">
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
    .g-list{
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
