<template>
        <div class="home">
           
            <div class="loading" style="background:#eee;">
                <div class="loader13 loader">
                    <div class="loader-13">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
          
            <swiper :options="swiperOption" class="swiper-box" ref="mySwiper" >
                <!-- 第一页 -->
                <swiper-slide class="swiper-item stop-swiping">
                    <page1></page1>
                </swiper-slide>
                <!-- 第二页 -->
                <swiper-slide class="swiper-item">
                    <page2></page2>
                </swiper-slide>
                <!-- 第三页 -->
                <swiper-slide class="swiper-item">
                    <page3></page3>
                </swiper-slide>

                <swiper-slide class="swiper-item">
                    <page3_1></page3_1>
                </swiper-slide>
                
                <swiper-slide class="swiper-item">
                    <page3_2></page3_2>
                </swiper-slide>
                
                <swiper-slide class="swiper-item">
                    <page3_3></page3_3>
                </swiper-slide>
                
                <swiper-slide class="swiper-item ">
                    <page3_4></page3_4>
                </swiper-slide>

                <!-- 第四页 -->
                <swiper-slide class="swiper-item stop-swiping">
                    <page4></page4>
                </swiper-slide>
                <!-- 第五页 -->
                <swiper-slide class="swiper-item stop-swiping">
                    <page5></page5>
                </swiper-slide>
                <!-- 第六页 -->
                <swiper-slide class="swiper-item stop-swiping">
                    <page6></page6>
                </swiper-slide>
                <div class="swiper-pagination swiper-pagination-main" slot="pagination"></div>
            </swiper>
        </div>
</template>


<script>
import '../css/pace-theme-big-counter.css'
import '../js/pace.min.js'

import page1 from '@/page/page1'
import page2 from '@/page/page2'
import page3 from '@/page/page3'

import page3_1 from '@/page/page3-1'
import page3_2 from '@/page/page3-2'
import page3_3 from '@/page/page3-3'
import page3_4 from '@/page/page3-4'

import page4 from '@/page/page4'
import page5 from '@/page/page5'
import page6 from '@/page/page6'


export default {
    data() {
        return {
            swiperOption: {
                noSwipingClass: 'stop-swiping',
                // allowSwipeToPrev: false, // 禁止向上切换
                pagination: '.swiper-pagination-main',
                direction: 'vertical',
                slidesPerView: 1,
                speed: 800,
                paginationClickable: true,
                spaceBetween: 0,
                mousewheelControl: true,
                effect: 'fade',
                onSlideChangeEnd: function(swiper) {
                    switch (swiper.activeIndex) {
                        case 0:
                            //第一页动画
                            $('.p1-word').addClass('animated  fadeInUp').css('display', 'block')
                            $('.p1-ballon-1').addClass('animated  zoomInUp').css('display', 'block')
                            $('.p1-ballon-2').addClass('animated  zoomInUp').css('display', 'block')
                            $('.p1-ballon-3').addClass('animated  zoomInUp').css('display', 'block')
                            $('.p1-ballon-4').addClass('animated  float infinite').css('display', 'block')
                            $('.p1-ballon-5').addClass('animated  float infinite').css('display', 'block')
                            $('.p1-ballon-6').addClass('animated  float infinite').css('display', 'block')
                            $('.p1-share').addClass('animated  bounceInDown').css('display', 'block')
                            break;
                        case 1:
                            //第二页动画
                            // $('.page2').css('display', 'block')
                            // $('.page2').addClass('animated  fadeIn')
                            $('.p2-words-1').addClass('animated  jackInTheBox').css('display', 'block')
                            $('.p2-words-2').addClass('animated  fadeInUp').css('display', 'block')
                            $('.p2-animal-1').addClass('animated  bounceInRight').css('display', 'block')
                            $('.p2-animal-2').addClass('animated  bounceIn').css('display', 'block')
                            $('.p2-animal-3').addClass('animated  bounceIn').css('display', 'block')
                            
                            break;
                        case 2:
                            //第三页动画
                            // $('.page3').css('display', 'block')
                            // $('.page3').addClass('animated  fadeIn')
                            $('.p3-word').addClass('animated  fadeInUp').css('display', 'block')
                            $('.p3-cloud-1,.p3-cloud-4').addClass('animated  fadeOutLeft')
                            $('.p3-cloud-2').addClass('animated  fadeOutUp')
                            $('.p3-cloud-3').addClass('animated  fadeOutRight')
                            $('.p3-cloud-5').addClass('animated  fadeOutDown')
                            $('.yy').css('animation','lineMove 2s ease-out  infinite')
                            break;
                        case 3:
                            //第3-1页动画
                            // $('.page3-1').css('display', 'block')
                            // $('.page3-1').addClass('animated  fadeIn')
                            $('.p3-1-word').addClass('animated  fadeInUp').css('display', 'block')
                            $('.p3-1-person').addClass('animated  fadeIn').css('display', 'block')
                            $('.p3-1-cloud-1,.p3-1-cloud-4').addClass('animated  fadeOutLeft')
                            $('.p3-1-cloud-2').addClass('animated  fadeOutUp')
                            $('.p3-1-cloud-3').addClass('animated  fadeOutRight')
                            $('.p3-1-cloud-5').addClass('animated  fadeOutDown')
                            break;
                        case 4:
                            //第3-2页动画
                            // $('.page3-2').css('display', 'block')
                            // $('.page3-2').addClass('animated  fadeIn')
                            $('.p3-2-word').addClass('animated  fadeInUp').css('display', 'block')
                            $('.p3-2-person').addClass('animated  fadeIn').css('display', 'block')
                            $('.p3-2-cloud-1,.p3-2-cloud-4').addClass('animated  fadeOutLeft')
                            $('.p3-2-cloud-2').addClass('animated  fadeOutUp')
                            $('.p3-2-cloud-3').addClass('animated  fadeOutRight')
                            $('.p3-2-cloud-5').addClass('animated  fadeOutDown')
                            break;
                        case 5:
                            //第3-3页动画
                            // $('.page3-3').css('display', 'block')
                            // $('.page3-3').addClass('animated  fadeIn')
                            $('.p3-3-word').addClass('animated  fadeInUp').css('display', 'block')
                            $('.p3-3-person').addClass('animated  fadeIn').css('display', 'block')
                            break;
                        case 6:
                            //第3-4页动画
                            // $('.page3-4').css('display', 'block')
                            // $('.page3-4').addClass('animated  fadeIn')
                            $('.p3-4-word-1').addClass('animated  fadeInUp').css('display', 'block')
                            $('.p3-4-word-2').addClass('animated  fadeInUp').css('display', 'block')
                            $('.p3-4-word-3').addClass('animated  fadeInUp').css('display', 'block')
                            $('.p3-4-word-4').addClass('animated  fadeInUp').css('display', 'block')
                            $('.p3-4-person').addClass('animated  fadeIn').css('display', 'block')
                            break;
                        case 7:
                            //第四页动画
                            // $('.page4').css('display', 'block')
                            // $('.page4').addClass('animated  fadeIn')
                            $('.p4-person-1').addClass('animated  shrink').css('display', 'block')
                            $('.p4-person-2').addClass('animated  fadeIn').css('display', 'block')
                            setTimeout(function() {
                                $('.p4-person-2').css('display', 'block')
                                $('.p4-click').css('display', 'block')
                            },1000)
                            break;
                        case 8:
                            //第五页动画
                            $('.p5-1-dialog1').addClass('animated  fadeInUp').css('display', 'block')
                            $('.p5-1-dialog2').addClass('animated  fadeInUp').css('display', 'block')
                            $('.p5-1-ballon').addClass('animated  zoomInUp').css('display', 'block')
                            setTimeout(function() {
                                $('.p5-1-click').addClass('animated  pulse infinite').css('display', 'block')
                                
                            }, 6000)
                            break;
                        case 9:
                            //第六页动画，尾页
                            $('.p6-word').addClass('animated  fadeInUp').css('display', 'block')
                            $('.p6-ballon-1').addClass('animated  zoomInUp').css('display', 'block')
                            $('.p6-ballon-2').addClass('animated  zoomInUp').css('display', 'block')
                            $('.p6-ballon-3').addClass('animated  zoomInUp').css('display', 'block')
                            $('.p6-ballon-4').addClass('animated  float infinite').css('display', 'block')
                            $('.p6-ballon-5').addClass('animated  float infinite').css('display', 'block')
                            $('.p6-ballon-6').addClass('animated  float infinite').css('display', 'block')
                            $('.p6-share').addClass('animated  rubberBand').css('display', 'block')
                            setTimeout(function() {
                                $('.p6-ballon-1,.p6-ballon-2,.p6-ballon-3').css({ 'animation-name': 'float', 'animation-iteration-count': 'infinite' })
                            }, 6000)
                            break;
                    }
                } 
            }
        }
    },
    created() {
        this.loading()
        // console.log('创建')
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    },
    mounted() {
        // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
       let _this = this
        $('body').on('touchmove', function(event) {
            event.preventDefault();
        })

        // 第一页跳转
        $('.p1-button').on('touchstart', function() {
            _this.swiper.slideTo(1, 800, function() {
                // 第二页动画
                $('.page2').css('display', 'block')
                $('.page2').addClass('animated  fadeIn')
                $('.p2-words-1').addClass('animated  jackInTheBox')
                $('.p2-words-2').addClass('animated  fadeInUp')
                $('.p2-animal-1').addClass('animated  bounceInRight')
                $('.p2-animal-2').addClass('animated  bounceIn')
                $('.p2-animal-3').addClass('animated  bounceIn')
            })
        })
        //第四页关闭视频跳转
        $('.exit').on('touchstart', function() {
            $('.page4 section').css('visibility', 'hidden')
             _this.swiper.slideTo(8, 800, function(){
             })
        })
        // 第五页相册关闭
        $('.page5-close').on('touchstart', function() {
            _this.swiper.slideTo(9, 800, function() {
                // 进入第六页动画，尾页
                $('.p6-word').addClass('animated  fadeInUp').css('display', 'block')
                $('.p6-ballon-1').addClass('animated  zoomInUp').css('display', 'block')
                $('.p6-ballon-2').addClass('animated  zoomInUp').css('display', 'block')
                $('.p6-ballon-3').addClass('animated  zoomInUp').css('display', 'block')
                $('.p6-ballon-4').addClass('animated  float infinite').css('display', 'block')
                $('.p6-ballon-5').addClass('animated  float infinite').css('display', 'block')
                $('.p6-ballon-6').addClass('animated  float infinite').css('display', 'block')
                $('.p6-share').addClass('animated  rubberBand').css('display', 'block')
                setTimeout(function() {
                    $('.p6-ballon-1,.p6-ballon-2,.p6-ballon-3').css({ 'animation-name': 'float', 'animation-iteration-count': 'infinite' })
                }, 6000)
            })
        })
       
    },
 
    methods: {
        loading() {
            // let that = this
            $('.swiper-box').css('display', 'none')
            Pace.on('done', function() {
                Pace.stop()

                $('.loading').css('display', 'none')
                $('.swiper-box').css('display', 'block')
                console.log('加载完成')
                // 第一页动画开始
                $('.p1-word').addClass('animated  fadeInUp').css('display', 'block')
                
                $('.p1-ballon-1').addClass('animated  zoomInUp').css('display', 'block')
                $('.p1-ballon-2').addClass('animated  zoomInUp').css('display', 'block')
                $('.p1-ballon-3').addClass('animated  zoomInUp').css('display', 'block')
                $('.p1-ballon-4').addClass('animated  float infinite').css('display', 'block')
                $('.p1-ballon-5').addClass('animated  float infinite').css('display', 'block')
                $('.p1-ballon-6').addClass('animated  float infinite').css('display', 'block')
                setTimeout(function() {
                    $('.p1-ballon-1,.p1-ballon-2,.p1-ballon-3').css({'animation-name':'float','animation-iteration-count':'infinite'})
                    $('.p1-gestrue').addClass('animated  pulse infinite').css('display', 'block')
                    $('.p1-button').addClass('animated  jackInTheBox').css('display', 'block')
                },6000)
            })
        }   
    },
    components: {
        page1,
        page2,
        page3,
        page3_1,
        page3_2,
        page3_3,
        page3_4,
        page4,
        page5,
        page6,
    }
}
</script>

<style >
* {
    margin: 0;
    padding: 0;
}

html,
body,
#app {
    position: relative;
    height: 100%;
    width: 100%;
}

body {
    background: #eee;
}
.home {
    width: 100%;
    height: 100%;
    position: relative;
}
.loading {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
}

.loader {
    width: 60%;
    height: 10rem;
    position: absolute;
    top: 30%;
    left: 20%;
}

.swiper-box {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    position: absolute;
    top: 0;
    left: 0;
    /* display: none; */
}

.swiper-item {
    height: 100%;
    text-align: center;
    font-size: 18px;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}



</style>