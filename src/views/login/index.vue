<template lang="html">
    <div class="g-login">
        <mu-text-field label="Access Token" labelFloat fullWidth v-model="value"/>
        <mu-raised-button label="登录" fullWidth @click="getToken"/>
        <mu-popup :overlay="false" popupClass="popup-err" :open="topPopup">
            {{ popText }}
        </mu-popup>
    </div>
</template>

<script>

export default {
    data (){
        return {
            value: "",
            topPopup: false,
            popText: "请输入Access token"
        }
    },
    methods:{
        getToken(){
            if(this.value === ""){
                this.topPopup = true;
                setTimeout( () => {
                    this.topPopup = false
                },2000)
            }else{
                this.$store.dispatch("accessToken",{token:this.value}).then((r) => {
                    if(r.success){
                        this.popText = "验证成功"
                        this.topPopup = true;
                        setTimeout( () => {
                            this.topPopup = false
                        },2000)
                        window.localStorage.token = this.value
                        this.$router.push("/newTopics")
                    }
                }).catch((err) =>{
                    this.popText = "错误的accessToken"
                    this.topPopup = true;
                    setTimeout( () => {
                        this.topPopup = false
                    },2000)
                });
            }
        }
    },

}

</script>

<style lang="scss">
    .g-login{
        padding: 10px;
    }
    .popup-err{
        position: absolute;
        left: 50%;
        top: 50%;
        padding: 10px 20px;
        border-radius: 10px;
        font-size: 14px;
        color: #fff;
        max-width: 375px;
        background: #000;
    }
</style>
