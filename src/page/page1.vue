<template>
    <div class="page1" >
       <div class="p1-ballon-1" @click="previewShow = true">
            <img src="../assets/p6/p6-balloon-1.png" >
            <div class="p1-gestrue">
                <img src="../assets/p1/p1-openvideo.png" alt="">
            </div>
        </div>
        <div class="p1-ballon-2">
            <img src="../assets/p6/p6-balloon-1.png" >
        </div>
        <div class="p1-ballon-3">
            <img src="../assets/p6/p6-balloon-1.png" >
        </div>
        <div class="p1-ballon-4">
            <img src="../assets/p6/p6-balloon-1.png" >
        </div>
        <div class="p1-ballon-5">
            <img src="../assets/p6/p6-balloon-1.png" >
        </div>
        <div class="p1-ballon-6">
            <img src="../assets/p6/p6-balloon-1.png" >
        </div>
        <div class="p1-button" >
            <img src="../assets/p1/p1-button.png" alt="">
        </div>
        <div class="p1-word">
            <img src="../assets/p6/p6-word.png" >
        </div>
        
        <!-- 相册 -->
        <!-- <div class="page5-3" v-show="previewShow">
            <div class="page5-close"></div>
            <ul id="fonglezen_ddpic">
                <li class="p1"><img src="../assets/p1/p1-bg.png" class="goimg"></li>
                <li class="p2"><img src="../assets/p2/p2-bg.png" class="goimg"></li>
                <li class="p3"><img src="../assets/p3/p3-bg.png" class="goimg"></li>
            </ul>
        </div> -->

    </div>
</template>

<script>
export default {
    name: 'page1',
    data() {
        return {
            baseSrc: [],
            imgUrls: [],
            imgCount: 0,
            previewShow: false,

        }
    },
  
}
</script>

<style scoped>
.page1 {
    width: 100%;
    height: 100%;
    position: relative;
    background: url(../assets/p1/p1-bg.png) 0 0 no-repeat;
    background-size: 100% 100%;
}

img {
    width: 100%;
}

.p1-word {
    position: absolute;
    top: 20%;
    left: 20%;
    width: 60%;
    animation-duration: 1s;
    animation-delay: 0.3s;
    display: none;
}

.p1-ballon-1 {
    position: absolute;
    bottom: 25%;
    left: 30%;
    width: 40%;
    animation-duration: 6s;
    display: none;
}
.p1-gestrue {
    position: absolute;
    bottom: 45%;
    left: 0;
    width: 120%;
    display: none;
    animation-duration: 2s;
}
.p1-ballon-2 {
    position: absolute;
    top: 10%;
    left: 10%;
    width: 20%;
    animation-delay: 1s;
    animation-duration: 6s;
    display: none;
}

.p1-ballon-3 {
    position: absolute;
    bottom: 50%;
    left: 80%;
    width: 20%;
    animation-delay: 1.8s;
    animation-duration: 6s;
    display: none;
}

.p1-ballon-4 {
    position: absolute;
    bottom: 40%;
    left: 10%;
    width: 15%;
    animation-delay: 1s;
    display: none;
    animation-duration: 8s;
}

.p1-ballon-5 {
    position: absolute;
    top: 20%;
    left: 82%;
    width: 10%;
    display: none;
    animation-duration: 8s;
}

.p1-ballon-6 {
    position: absolute;
    top: 0;
    left: 45%;
    width: 10%;
    display: none;
    animation-duration: 8s;
}


.p1-button {
    position: absolute;
    bottom: 15%;
    left: 20%;
    width: 60%;
    display: none;
    animation-delay: 0.8s;
}



</style>
