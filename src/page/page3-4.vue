<template>
    <div class="page3-4">
        
        <div class="star">
            <div class="star1 animated pulse infinite"></div>
            <div class="star2 animated pulse infinite"></div>
            <div class="star3 animated pulse infinite"></div>
            <div class="star4 animated pulse infinite"></div>
            <div class="star5 animated pulse infinite"></div>
            <div class="star6 animated pulse infinite"></div>
        </div>

        <div class="p3-4-person">
            <img src="../assets/p3-3/p3-3-person.png" alt="">
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

        <div class="p3-4-arrow animated float infinite">
            <img src="../assets/p2/arrow.png" >
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
    /* display: none; */
    background: url(../assets/p3-3/p3-3-bg.png) 0 0 no-repeat;
    background-size: 100% 100%;
}

img {
    width: 100%;
}

.p3-4-person {
    position: absolute;
    display: none;
    bottom: 0;
    left: 25%;
    width: 50%;
    animation-delay: 0.5s;
}

.p3-4-word-1 {
    position: absolute;
    display: none;
    top: 17%;
    left: 30%;
    width: 40%;
    animation-delay: 1s;
}

.p3-4-word-2{
    position: absolute;
    display: none;
    top: 26%;
    left: 10%;
    width: 80%;
    animation-delay: 1.5s;
}

.p3-4-word-3 {
    position: absolute;
    display: none;
    top: 33%;
    left: 20%;
    width: 60%;
    animation-delay: 2s;
}

.p3-4-word-4 {
    position: absolute;
    display: none;
    top: 40%;
    left: 20%;
    width: 60%;
    animation-delay: 2.5s;
}

.p3-4-arrow {
    position: absolute;
    display: none;
    bottom: 5%;
    left: 45%;
    width: 10%;
    animation-delay: 1s;
    animation-duration: 1.25s;
}

.star1 {
    position: absolute;
    left: 20%;
    top: 50%;
    width: 3rem;
    height: 3rem;
    background: url(../assets/p4/p4-star-1.png) 0 0 no-repeat;
    background-size: 100% 100%;
}

.star2 {
    position: absolute;
    top: 30%;
    left: 45%;
    width: 3rem;
    height: 3rem;
    background: url(../assets/p4/p4-star-1.png) 0 0 no-repeat;
    background-size: 100% 100%;
}

.star3 {
    position: absolute;
    left: 62%;
    top: 40%;
    width: 2rem;
    height: 2rem;
    background: url(../assets/p4/p4-star-2.png) 0 0 no-repeat;
    background-size: 100% 100%;
}

.star4 {
    position: absolute;
    right: 50%;
    top: 10%;
    width: 1.8rem;
    height: 1.8rem;
    background: url(../assets/p4/p4-star-3.png) 0 0 no-repeat;
    background-size: 100% 100%;
}

.star5 {
    position: absolute;
    left: 5%;
    top: 33%;
    width: 2.5rem;
    height: 2.5rem;
    background: url(../assets/p4/p4-star-2.png) 0 0 no-repeat;
    background-size: 100% 100%;
}

.star6 {
    position: absolute;
    left: 15%;
    top: 5%;
    width: 1.5rem;
    height: 1.5rem;
    background: url(../assets/p4/p4-star-2.png) 0 0 no-repeat;
    background-size: 100% 100%;
}



</style>
