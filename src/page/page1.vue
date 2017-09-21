<template>
    <div class="page1" >
       <div class="p1-ballon-1" @click="previewShow = true">
            <img src="../assets/p6/p6-balloon-1.png" >
            <div class="p1-gestrue">
                <img src="../assets/p1/p1-openvideo.png" alt="">
            </div>
        </div>
        <div class="p1-ballon-2">
            <img src="../assets/p6/p6-balloon-1.png" >
        </div>
        <div class="p1-ballon-3">
            <img src="../assets/p6/p6-balloon-2.png" >
        </div>
        <div class="p1-ballon-4">
            <img src="../assets/p6/p6-balloon-2.png" >
        </div>
        <div class="p1-ballon-5">
            <img src="../assets/p6/p6-balloon-3.png" >
        </div>
        <div class="p1-ballon-6">
            <img src="../assets/p6/p6-balloon-3.png" >
        </div>
        <div class="p1-button" >
            <img src="../assets/p1/p1-button.png" alt="">
        </div>
        <div class="p1-word">
            <img src="../assets/p6/p6-word.png" >
        </div>
        
        <!-- 相册 -->
        <div class="p1-photo" v-show="previewShow">
            <div class="page1-close" @click="previewShow = false">
                <img src="../assets/p5/p5-close.png" alt="">
            </div>
            <ul id="showOhterPhoto">
                <li class="p1"><img src="../assets/p1/p1-bg.png" class="goimg"></li>
                <li class="p2"><img src="../assets/p2/p2-bg.png" class="goimg"></li>
                <li class="p3"><img src="../assets/p3/p3-bg.png" class="goimg"></li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
    name: 'page1',
    data() {
        return {
            baseSrc: [],
            imgUrls: [],
            imgCount: 0,
            previewShow: false,

        }
    },
     mounted() {
        $.fn.fonglezenDDpic = function() {

            var actions = {
                stopDefault: function(e) {	//阻止浏览器默认事件方法：
                    var e = e || window.event;
                    if (e.preventDefault) {
                        e.preventDefault();
                    } else {
                        e.returnValue = false;
                    }
                },

            };


            var flzpic = {
                windowHeight: window.innerHeight,
                fonglezen_ddpic: this,
                flz_dpli: this.find('li'),
                flz_dplen: this.find('li').length,
                pstartX: 0,
                pstartY: 0,
                pmoveX: 0,
                pmoveY: 0,
                pendX: 0,
                pendY: 0,
                shownext: function() {
                    flzpic.flz_dpli = flzpic.fonglezen_ddpic.find('li');


                    flzpic.flz_dpli.eq(1).find('img').attr('class', 'backinit');
                    flzpic.flz_dpli.eq(2).find('img').attr('class', 'backinit1');


                    setTimeout(function() {

                        flzpic.flz_dpli.find('img').attr('class', '');
                        flzpic.flz_dpli.attr('class', '');

                        //move first li to last li
                        var firstLI = flzpic.flz_dpli.eq(0).html();
                        
                        flzpic.flz_dpli.eq(0).remove();
                        // 这里有模板的问题
                        // flzpic.fonglezen_ddpic.append('<li data-v-571bb0b2>' + firstLI + '</li>');
                        flzpic.fonglezen_ddpic.append(flzpic.flz_dpli.eq(0));

                    }, 500);
                },

            };

            flzpic.fonglezen_ddpic.on('touchstart', 'li', function(e) {
                var e = e || window.event;

                var touch = event.targetTouches[0];
                flzpic.pstartX = touch.pageX;
                flzpic.pstartY = touch.pageY;


                flzpic.pmoveX = 0;
                flzpic.pmoveY = 0;

            });

            flzpic.fonglezen_ddpic.on('touchmove', 'li', function(e) {
                var e = e || window.event;
                actions.stopDefault(e);

                var touch = event.touches[0];
                flzpic.pendX = touch.pageX;
                flzpic.pendY = touch.pageY;

                flzpic.pmoveX = flzpic.pendX - flzpic.pstartX;
                flzpic.pmoveY = flzpic.pendY - flzpic.pstartY;
            });

            // 计算左右滑动
            flzpic.fonglezen_ddpic.on('touchend', 'li', function(e) {
                var e = e || window.event;
                flzpic.flz_dpli = flzpic.fonglezen_ddpic.find('li');

                if (Math.abs(flzpic.pmoveY) < flzpic.windowHeight * 0.1 && flzpic.pmoveX < 0) {
                    console.log('zuo')
                    flzpic.flz_dpli.eq(0).attr('class', 'hideToleft');
                    flzpic.shownext();
                } else if (Math.abs(flzpic.pmoveY) < flzpic.windowHeight * 0.1 && flzpic.pmoveX > 0) {
                    flzpic.flz_dpli.eq(0).attr('class', 'hideToright');
                    flzpic.shownext();
                }
            });
        };


        $('#showOhterPhoto').fonglezenDDpic();
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

img {
    width: 100%;
}

.p1-word {
    position: absolute;
    top: 20%;
    left: 20%;
    width: 60%;
    animation-duration: 1s;
    animation-delay: 0.3s;
    display: none;
}

.p1-ballon-1 {
    position: absolute;
    bottom: 25%;
    left: 30%;
    width: 40%;
    animation-duration: 6s;
    display: none;
}
.p1-gestrue {
    position: absolute;
    bottom: 45%;
    left: 0;
    width: 120%;
    display: none;
    animation-duration: 2s;
}
.p1-ballon-2 {
    position: absolute;
    top: 10%;
    left: 10%;
    width: 20%;
    animation-delay: 1s;
    animation-duration: 6s;
    display: none;
}

.p1-ballon-3 {
    position: absolute;
    bottom: 50%;
    left: 80%;
    width: 20%;
    animation-delay: 1.8s;
    animation-duration: 6s;
    display: none;
}

.p1-ballon-4 {
    position: absolute;
    bottom: 40%;
    left: 10%;
    width: 15%;
    animation-delay: 1s;
    display: none;
    animation-duration: 8s;
}

.p1-ballon-5 {
    position: absolute;
    top: 20%;
    left: 82%;
    width: 10%;
    display: none;
    animation-duration: 8s;
}

.p1-ballon-6 {
    position: absolute;
    top: 0;
    left: 45%;
    width: 10%;
    display: none;
    animation-duration: 8s;
}


.p1-button {
    position: absolute;
    bottom: 15%;
    left: 20%;
    width: 60%;
    display: none;
    animation-delay: 0.8s;
}

/* photo */

.p1-photo {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 3;
}

.page1-close {
     width: 10%;
    position: absolute;
    top: 5%;
    right: 5%;
}


   /* fontlezen_ddpic begin */
   /* 相册样式 */

   

   #showOhterPhoto {
       width: 80%;
       height: 80%;
       position: absolute;
       z-index: 25;
       top: 50%;
       left: 50%;
       margin-left: -40%;
       margin-top: -10rem;
   }

   #showOhterPhoto li {
       position: absolute;
       left: 0;
       top: 0;
       text-align: center;
       width: 247px;
       height: 413px;
       box-sizing: border-box;
   }

   #showOhterPhoto li img {
       width: 100%;
       height: 100%;
       border: 3px solid #fff;
   }

   @keyframes goimg {
       from {
           opacity: 0;
           transform: scale(1.5, 1.5) rotateZ(40deg) translateY(100px) translateX(300px);
           tranform-origin: 0 100%;
       }
       to {
           opacity: 1;
       }
   }

   #showOhterPhoto li {
       z-index: 5;
   }

   #showOhterPhoto li:nth-child(1) {
       z-index: 10;
   }

   #showOhterPhoto li:nth-child(2) {
       z-index: 9;
   }

   #showOhterPhoto li:nth-child(3) {
       z-index: 8;
   }

   #showOhterPhoto li:nth-child(4) {
       z-index: 7;
   }



   #showOhterPhoto li img {
       -webkit-transform: rotateZ(12deg);
       transform: rotateZ(12deg);
       z-index: 5;
       -webkit-backface-visibility: hidden;
       -moz-backface-visibility: hidden;
       -ms-backface-visibility: hidden;
       backface-visibility: hidden;
       -webkit-perspective: 1000;
       -moz-perspective: 1000;
       -ms-perspective: 1000;
       perspective: 1000;
   }

   #showOhterPhoto li:nth-child(1) img {
       -webkit-transform: rotateZ(0deg);
       transform: rotateZ(0deg);
       z-index: 10;
   }

   #showOhterPhoto li:nth-child(1) .goimg {
       -webkit-animation: goimg 0.6s;
       -webkit-animation-fill-mode: both;
       -webkit-animation-delay: 2s;
       animation: goimg 0.6s;
       animation-fill-mode: both;
       animation-delay: 2s;
   }

   #showOhterPhoto li:nth-child(2) img {
       -webkit-transform: rotateZ(3deg);
       transform: rotateZ(3deg);
       z-index: 9;
   }

   #showOhterPhoto li:nth-child(2) .goimg {
       -webkit-animation: goimg 0.6s;
       -webkit-animation-fill-mode: both;
       -webkit-animation-delay: 1.5s;
       animation: goimg 0.6s;
       animation-fill-mode: both;
       animation-delay: 1.5s;
   }

   #showOhterPhoto li:nth-child(3) img {
       -webkit-transform: rotateZ(6deg);
       transform: rotateZ(6deg);
       z-index: 8;
   }

   #showOhterPhoto li:nth-child(3) .goimg {
       -webkit-animation: goimg 0.6s;
       -webkit-animation-fill-mode: both;
       -webkit-animation-delay: 1s;
       animation: goimg 0.6s;
       animation-fill-mode: both;
       animation-delay: 1s;
   }




   @keyframes hideToright {
       from {
           opacity: 1;
           transform: translate3d(0, 0, 0) scale(1);
       }
       to {
           opacity: 0;
           transform: translate3d(100%, 0, 0) scale(0.5);
       }
   }

   .hideToright {
       -webkit-animation: hideToright 0.5s;
       -webkit-animation-fill-mode: both;
       animation: hideToright 0.5s;
       animation-fill-mode: both;
   }



   @keyframes hideToleft {
       from {
           opacity: 1;
           transform: translate3d(0, 0, 0) scale(1);
       }
       to {
           opacity: 0;
           transform: translate3d(-100%, 0, 0) scale(0.5);
       }
   }

   .hideToleft {
       -webkit-animation: hideToleft 0.5s;
       -webkit-animation-fill-mode: both;
       animation: hideToleft 0.5s;
       animation-fill-mode: both;
   }



   @keyframes backinit {
       from {
           transform: rotateZ(3deg);
       }
       to {
           transform: rotateZ(0deg);
       }
   }

   #showOhterPhoto li:nth-child(2) .backinit {
       -webkit-animation: backinit 0.5s;
       -webkit-animation-fill-mode: both;
       animation: backinit 0.5s;
       animation-fill-mode: both;
       -webkit-animation-delay: 0;
       animation-delay: 0;
   }


   @keyframes backinit1 {
       from {
           transform: rotateZ(6deg);
       }
       to {
           transform: rotateZ(3deg);
       }
   }

   #showOhterPhoto li:nth-child(3) .backinit1 {
       -webkit-animation: backinit1 0.5s;
       -webkit-animation-fill-mode: both;
       animation: backinit1 0.5s;
       animation-fill-mode: both;
       -webkit-animation-delay: 0.15s;
       animation-delay: 0.15s;
   }


</style>
