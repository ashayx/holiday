<template>

    <div class="page6">
        
        <div class="p6-ballon-1">
            <img src="../assets/p6/p6-balloon-1.png" >
        </div>
        <div class="p6-ballon-2">
            <img src="../assets/p6/p6-balloon-2.png" >
        </div>
        <div class="p6-ballon-3">
            <img src="../assets/p6/p6-balloon-2.png" >
        </div>
        <div class="p6-ballon-4">
            <img src="../assets/p6/p6-balloon-3.png" >
        </div>
        <div class="p6-ballon-5">
            <img src="../assets/p6/p6-balloon-3.png" >
        </div>
        <div class="p6-ballon-6">
            <img src="../assets/p6/p6-balloon-1.png" >
        </div>
        <div class="p6-share" @click="shareLayer">
            <img src="../assets/p6/p6-button.png" alt="">
        </div>
        <div class="p6-layer" @click="shareLayer" v-show="isshareLayer">
            <img src="../assets/p6/p6-layer.png" alt="" >
        </div>
        <div class="p6-word">
            <img src="../assets/p6/p6-word.png" >
        </div>
    </div>

</template>

<script>
export default {
    name: 'page6',
    data() {
        return {
           isshareLayer:false

        }
    },
    methods: {
        shareLayer() {
            this.isshareLayer = !this.isshareLayer
        }
    }

}
</script>

<style scoped>
.page6 {
    width: 100%;
    height: 100%;
    position: relative;
    background: url(../assets/p6/p6-bg.png) 0 0 no-repeat;
    background-size: 100% 100%;
}
img {
    width: 100%;
}
.p6-word {
    position: absolute;
    top: 20%;
    left: 20%;
    width: 60%;
    animation-duration: 1s;
    animation-delay: 0.3s;
    display: none;
}
.p6-ballon-1 {
    position: absolute;
    bottom: 25%;
    left: 30%;
    width: 40%;
    animation-duration: 6s;
    display: none;
}

.p6-ballon-2 {
    position: absolute;
    top: 10%;
    left: 10%;
    width: 20%;
    animation-delay: 1s;
    animation-duration: 6s;
    display: none;
}

.p6-ballon-3 {
    position: absolute;
    bottom: 50%;
    left: 80%;
    width: 20%;
    animation-delay: 1.8s;
    animation-duration: 6s;
    display: none;
}

.p6-ballon-4 {
    position: absolute;
    bottom: 40%;
    left: 10%;
    width: 15%;
    animation-delay: 1s;
    display: none;
    animation-duration: 8s;
}

.p6-ballon-5 {
    position: absolute;
    top: 20%;
    left: 82%;
    width: 10%;
    display: none;
    animation-duration: 8s;
}

.p6-ballon-6 {
    position: absolute;
    top: 0;
    left: 45%;
    width: 10%;
    display: none;
    animation-duration: 8s;
}


.p6-share {
    position: absolute;
    bottom: 15%;
    left: 20%;
    width: 60%;
    display: none;
    animation-delay: 0.8s;
}
.p6-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.p6-layer img {
    width: 100%;
    height: 100%;
}
</style>
