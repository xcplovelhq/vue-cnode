import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const API = "https://cnodejs.org/api/v1"

const store = new Vuex.Store({
    state: {
        title: "all",
        scrollTop: 0,
        topicsList: [],
        details:{},
        userInfo:{}
    },
    mutations: {
        getTitle (state,data){
            state.title = data;
        },
        getScroll (state,data){
            state.scrollTop = data
        },
        getTopicsList (state, data){
            state.topicsList = data
        },
        getDetails(state, data){
            state.details = data;
        },
        getUserInfo(state, data){
            state.userInfo = data;
        }
    },
    actions: {
        async GetTopicsList(context, params){
            let data = {}
            try {
                data = await axios.get( API + "/topics",
                    {
                        params:{
                            page: params.num,
                            limit: 20,
                            tab: params.bottomNav,
                            mdrender: "false",
                        }
                    }
                )
            } catch (err) {
                console.log("err", err)
            }
            if(data.data.success){
                context.commit("getTopicsList", data.data.data);
                return data.data.data
            }else{
                return ""
            }
        },
        async GETDetails(context, params){
            let data = {};
            try {
                data = await axios.get( API + "/topic/" + params.id)
            } catch (err) {
                console.log("err", err)
            }
            if(data.data.success){
                context.commit("getDetails", data.data.data)
                return data.data.data
            }else{
                return ""
            }
        },
        async GETUserInfo(context, params){
            let data = {};
            try {
                data = await axios.get( API + "/user/" + params.loginname)
            } catch (err) {
                console.log("err", err);
            }
            if(data.data.success){
                context.commit("getUserInfo", data.data.data)
                return data.data.data
            }
        },
        async accessToken(context, params){
            let data = {}
            try {
                data = await axios.post( API + "/accesstoken", {
                    accesstoken: params.token
                })
            } catch (err) {
                console.log("错误的accessToken")
            }
            if(data.data.success){
                console.log(data)
                return data.data
            }
        },
        async newTopics(context, params){
            console.log(params)
            let data = {}
            try {
                data = await axios.post( API + "/topics" , {
                    accesstoken: params.token,
                    title: params.title,
                    tab: "dev",
                    content: params.content
                })
            } catch (err) {
                console.log("newTopics is ERROR" + err)
            }
            if(data.data.success){
                return data.data
            }
        },
    },
    getters: {
        getTitle: state => {
            if(state.title === "all"){
                return "全部"
            }else if(state.title === "good"){
                return "精华"
            }else if(state.title === "share"){
                return "分享"
            }else if(state.title === "ask"){
                return "问答"
            }else if(state.title === "job"){
                return "招聘"
            }else{
                return state.title
            }
        },
    }
})
export default store
