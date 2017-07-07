import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        title: "全部",
        topicsList: [],
    },
    mutations: {
        getTitle (){

        },
        getTopicsList (state, data){
            data.forEach((v) => {
                state.topicsList.push(v)
            })
            // state.topicsList = data
        }
    },
    actions: {
        async GetTopicsList(context, params){
            let data = {}
            console.log(params)
            try {
                data = await axios.get("https://cnodejs.org/api/v1/topics",
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
                return data.data.data
            }
        }
    },
    getters: {

    }
})
export default store
