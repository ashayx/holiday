<template>
    <div class="page1" >
       <img src="../assets/p1/p1-balloon.png" alt="" style="width:100%;">
    </div>
</template>

<script>
export default {
    name: 'page1',
    data() {
        return {
            msg: 'page1'
        }
    }
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

</style>
