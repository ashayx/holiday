<template>
    <div class="page3-3">

        <div class="p3-3-person">
            <img src="../assets/p3-3/p3-3-person.png" alt="">
        </div>

        <div class="p3-3-word">
            <img src="../assets/p3-3/p3-3-word.png" alt="">
        </div>

    </div>
</template>

<script>
export default {
    name: 'page3-3',
    data() {
        return {

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page3-3 {
    width: 100%;
    height: 100%;
    position: relative;
    /* display: none; */
    background: url(../assets/p3-3/p3-3-bg.png) 0 0 no-repeat;
    background-size: 100% 100%;
}

img {
    width: 100%;
}

.p3-3-person {
    position: absolute;
    display: none;
    bottom: 0;
    left: 35%;
    width: 50%;
    animation-delay: 0.5s;
}

.p3-3-word {
    position: absolute;
    display: none;
    bottom: 45%;
    left: 0;
    width: 55%;
    animation-delay: 1.5s;
}
</style>
