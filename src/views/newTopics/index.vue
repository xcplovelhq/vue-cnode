<template lang="html">
    <div class="g-newTopics">
        <mu-text-field label="请输入标题" labelClass="m-title" v-model="title" :errorText="errTitle" @blur="testingTitle"  fullWidth labelFloat  />
        <mu-text-field label="多行文本输入" v-model="content" multiLine :rows="15" :errorText="errContent" :rowsMax="6" @blur="testingContent" fullWidth labelFloat/>
        <mu-raised-button label="发布" fullWidth @click="setTopics"/>
    </div>
</template>

<script>

export default {
    data (){
        return {
            title: "",
            content: "",
            errTitle: "",
            errContent: ""
        }
    },
    methods:{
        setTopics(){
            let params = {
                token: window.localStorage.token,
                title: this.title,
                content: this.content
            }
            if(this.testing("all")){
                this.$store.dispatch("newTopics",params).then((r) => {
                    console.log(r);
                }).catch((err) => {
                    console.log(err)
                })
            }

        },
        testingTitle(){
            this.testing("title");
        },
        testingContent(){
            this.testing("content");
        },
        testing(type){
            if(this.title === "" && type === "title" || type === "all"){
                this.errTitle = "一定要输入标题喔";
            }else{
                this.errTitle = "";
            }
            if(this.content === "" && type === "content" || type === "all"){
                this.errContent = "一定要输入文本喔";
            }else{
                this.errContent = "";
            }
        }
    }
}

</script>

<style lang="scss">

.g-newTopics{
    padding: 10px;
}

</style>
