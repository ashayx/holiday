<template>
    <div class="page3-1">

        <div class="p3-1-person">
            <img src="../assets/p3-1/p3-1-person.png" alt="">
        </div>

        <div class="p3-1-word">
            <img src="../assets/p3-1/p3-1-word.png" alt="">
        </div>
        
        <div class="p3-1-cloud-1">
            <img src="../assets/p3/p3-cloud-1.png" alt="">
        </div>
        <div class="p3-1-cloud-2">
            <img src="../assets/p3/p3-cloud-2.png" alt="">
        </div>

        <div class="p3-1-cloud-3">
            <img src="../assets/p3/p3-cloud-3.png" alt="">
        </div>

        <div class="p3-1-cloud-4">
            <img src="../assets/p3/p3-cloud-4.png" alt="">
        </div>

        <div class="p3-1-cloud-5">
            <img src="../assets/p3/p3-cloud-5.png" alt="">
        </div>

        <div class="p3-1-arrow animated float infinite">
            <img src="../assets/p2/arrow.png" >
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
    /* display: none; */
    /* animation-duration: 0.2s; */
    background: url(../assets/p3-1/p3-1-bg.png) 0 0 no-repeat;
    background-size: 100% 100%;
}

img {
    width: 100%;
}

.p3-1-person {
    position: absolute;
    display: none;
    bottom: 0;
    left: 25%;
    width: 50%;
    animation-delay: 0.5s;
}

.p3-1-word{
    position: absolute;
    display: none;
    bottom: 55%;
    left: 0;
    width: 55%;
    animation-delay: 1.5s;
}


.p3-1-cloud-1 {
    position: absolute;
    opacity: 0.9;
    top: -20%;
    left: -20%;
    width: 80%;
    animation-duration: 10s;
}

.p3-1-cloud-2 {
    position: absolute;
    opacity: 0.9;
    top: -20%;
    left: -10%;
    width: 100%;
    animation-duration: 10s;
}


.p3-1-cloud-3 {
    position: absolute;
    opacity: 0.9;
    top: -10%;
    right: -20%;
    width: 100%;
    animation-duration: 10s;
}

.p3-1-cloud-4 {
    position: absolute;
    opacity: 0.9;
    bottom: 0;
    left: -10%;
    width: 40%;
    animation-duration: 10s;
}

.p3-1-cloud-5 {
    position: absolute;
    opacity: 0.9;
    bottom: -15%;
    right: -40%;
    width: 80%;
    animation-duration: 10s;
}

.p3-1-arrow {
    position: absolute;
    display: none;
    bottom: 5%;
    left: 45%;
    width: 10%; 
    animation-delay: 1s;
    animation-duration: 1.25s;   
}



</style>
