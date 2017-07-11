import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const API = "https://cnodejs.org/api/v1"

const store = new Vuex.Store({
    state: {
        title: "全部",
        topicsList: [],
        details:{},
        userInfo:{}
    },
    mutations: {
        getTitle (){

        },
        getTopicsList (state, data){
            data.forEach((v) => {
                state.topicsList.push(v)
            })
            // state.topicsList = data
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
                        page: params.num,
                        limit: 20,
                        tab: params.bottomNav,
                        mdrender: "false",
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
        }
    },
    getters: {

    }
})
export default store
