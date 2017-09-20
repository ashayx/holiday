<template>
    <div class="page3-4">

        <div class="p3-4-person">
            <img src="../assets/p3-4/p3-4-person.png" alt="">
        </div>

        <div class="p3-4-word-1">
            <img src="../assets/p3-4/p3-4-word-1.png" alt="">
        </div>

        <div class="p3-4-word-2">
            <img src="../assets/p3-4/p3-4-word-2.png" alt="">
        </div>

        <div class="p3-4-word-3">
            <img src="../assets/p3-4/p3-4-word-3.png" alt="">
        </div>

        <div class="p3-4-word-4">
            <img src="../assets/p3-4/p3-4-word-4.png" alt="">
        </div>

    </div>
</template>

<script>
export default {
    name: 'page3-4',
    data() {
        return {

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page3-4 {
    width: 100%;
    height: 100%;
    position: relative;
    display: none;
    background: url(../assets/p3-4/p3-4-bg.png) 0 0 no-repeat;
    background-size: 100% 100%;
}

img {
    width: 100%;
}

.p3-4-person {
    position: absolute;
    bottom: 0;
    left: 25%;
    width: 50%;
    animation-delay: 0.5s;
}

.p3-4-word-1 {
    position: absolute;
    top: 17%;
    left: 30%;
    width: 40%;
    animation-delay: 1s;
}

.p3-4-word-2{
    position: absolute;
    top: 26%;
    left: 10%;
    width: 80%;
    animation-delay: 1.5s;
}

.p3-4-word-3 {
    position: absolute;
    top: 33%;
    left: 20%;
    width: 60%;
    animation-delay: 2s;
}

.p3-4-word-4 {
    position: absolute;
    top: 40%;
    left: 20%;
    width: 60%;
    animation-delay: 2.5s;
}



</style>
