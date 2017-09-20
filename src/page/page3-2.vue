<template>
    <div class="page3-2">

        <div class="p3-2-person">
            <img src="../assets/p3-2/p3-2-person.png" alt="">
        </div>

        <div class="p3-2-word">
            <img src="../assets/p3-2/p3-2-word.png" alt="">
        </div>

    </div>
</template>

<script>
export default {
    name: 'page3-2',
    data() {
        return {

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page3-2 {
    width: 100%;
    height: 100%;
    position: relative;
    display: none;
    background: url(../assets/p3-2/p3-2-bg.png) 0 0 no-repeat;
    background-size: 100% 100%;
    /* animation-duration: 0.2s; */
}

img {
    width: 100%;
}

.p3-2-person {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80%;
    animation-delay: 0.5s;

}

.p3-2-word {
    position: absolute;
    bottom: 55%;
    right: 0;
    width: 55%;
    animation-delay: 1.5s;
}
</style>
