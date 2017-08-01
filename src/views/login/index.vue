<template lang="html">
    <div class="g-login">
        <mu-text-field label="Access Token" labelFloat fullWidth v-model="value"/>
        <mu-raised-button label="登录" fullWidth @click="getToken"/>
        <mu-popup  :overlay="false" popupClass="popup-err" :open="topPopup">
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
                        console.log(r)
                    }else{
                        this.popText = r
                    }
                    console.log(r);
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
