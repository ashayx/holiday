<template>
    <div class="page2">
        <div class="p2-words-1">
            <img src="../assets/p2/p2-words-1.png" alt="">
        </div>
        
        <div class="p2-words-2">
            <img src="../assets/p2/p2-words-2.png" alt="">
        </div>

    </div>
</template>

<script>
export default {
    name: 'page2',
    data() {
        return {
            
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page2 {
    width: 100%;
    height: 100%;
    position: relative;
    display: none;
    background: url(../assets/p2/p2-bg.png) 0 0 no-repeat;
    background-size: 100% 100%;
}
img {
    width: 100%;
}
.p2-words-1 {
    position: absolute;
    top: 30%;
    left: 10%;
    width: 80%;
    animation-delay: 0.5s;
}

.p2-words-2 {
    position: absolute;
    top: 55%;
    left: 20%;
    width: 60%;
    animation-delay: 1.5s;
}

</style>
