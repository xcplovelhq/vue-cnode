<template lang="html">
    <span :class="getTypeClass">{{ getType }}</span>
</template>

<script>
export default {
    props: ['tab','good','top','type'],
    data(){
        return {

        }
    },
    computed: {
        getType(){
            if(this.top && !this.type){
                return "置顶"
            }else if(this.tab === "all"){
                return "全部"
            }else if(this.tab === "good" || this.good){
                return "精华"
            }else if(this.tab === "share"){
                return "分享"
            }else if(this.tab === "ask"){
                return "问答"
            }else if(this.tab === "job"){
                return "招聘"
            }

        },
        getTypeClass(){
            if(this.type == "showTxt"){
                return ""
            }else if(this.top || this.good){
                return "m-topTip z-good"
            }else{
                return "m-topTip"
            }
        }
    }
}
</script>

<style lang="scss">
    .m-topTip{
        display: inline-block;
        margin-right: 10px;
        padding: 3px 5px;
        font-size: 12px;
        color: #999;
        border-radius: 6px;
        background: #e5e5e5;
        vertical-align: middle;
        &.z-good{
            color: #fff;
            background: #80bd01;
        }
    }
</style>
