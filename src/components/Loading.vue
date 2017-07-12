<template lang="html">
    <div class="g-loading">
        <div class="m-loading">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>

<script>

export default {

}

</script>

<style lang="css">
.g-loading{
    position: absolute;
    left: 0;
    top: 0px;
    bottom: 56px;
    width: 100%;
    background: #fff;
    z-index: 1000;
}
.m-loading{
    width: 80px;
    height: 40px;
    margin: 0 auto;
    margin-top:100px;
}
.m-loading span{
    display: inline-block;
    width: 8px;
    height: 100%;
    border-radius: 4px;
    background: lightgreen;
    -webkit-animation: load 1s ease infinite;
}
@-webkit-keyframes load{
    0%,100%{
        height: 40px;
        background: lightgreen;
    }
    50%{
        height: 70px;
        margin: -15px 0;
        background: lightblue;
    }
}
.m-loading span:nth-child(2){
    -webkit-animation-delay:0.2s;
}
.m-loading span:nth-child(3){
    -webkit-animation-delay:0.4s;
}
.m-loading span:nth-child(4){
    -webkit-animation-delay:0.6s;
}
.m-loading span:nth-child(5){
    -webkit-animation-delay:0.8s;
}

</style>
