<template>

    <div class="page6">
        <div class="ballon-1">
            <img src="../assets/p6/p6-balloon-1.png" alt="" style="width:80%">
        </div>
        <div class="p6-share" @click="shareLayer">
            <img src="../assets/p6/p6-button.png" alt="">
        </div>
        <div class="p6-layer" @click="shareLayer" v-show="isshareLayer">
            <img src="../assets/p6/p6-layer.png" alt="" >
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
.p6-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

}
.p6-layer img{
    width: 100%;
    height: 100%;
}
</style>
