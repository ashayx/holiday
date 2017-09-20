<template>
    <div class="page3-1">

        <div class="p3-1-person">
            <img src="../assets/p3-1/p3-1-person.png" alt="">
        </div>

        <div class="p3-1-word">
            <img src="../assets/p3-1/p3-1-word.png" alt="">
        </div>
       

    </div>
</template>

<script>
export default {
    name: 'page3-1',
    data() {
        return {

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page3-1 {
    width: 100%;
    height: 100%;
    position: relative;
    display: none;
    /* animation-duration: 0.2s; */
    background: url(../assets/p3-1/p3-1-bg.png) 0 0 no-repeat;
    background-size: 100% 100%;
}

img {
    width: 100%;
}

.p3-1-person {
    position: absolute;
    bottom: 0;
    left: 25%;
    width: 50%;
    animation-delay: 0.5s;
}

.p3-1-word{
    position: absolute;
    bottom: 55%;
    left: 0;
    width: 55%;
    animation-delay: 1.5s;
}




</style>
