<template>
    <div class="page4">
        
        <div class="p4-person-1">
            <img src="../assets/p3-3/p3-3-person.png" alt="">
        </div>
        <div class="p4-person-2">
            <img src="../assets/p4/p4-person.png" alt="">
        </div>
        <div class="p4-click animated pulse infinite">
            <img src="../assets/p4/p4-click.png" alt="">
        </div>
        <div class="star">
            <div class="starCtrl star1 animated pulse infinite" ></div>
            <div class="starCtrl star2 animated pulse infinite" ></div>
            <div class="starCtrl star3 animated pulse infinite" ></div>
            <div class="starCtrl star4 animated pulse infinite" ></div>
            <div class="starCtrl star5 animated pulse infinite" ></div>
            <div class="starCtrl star6 animated pulse infinite" ></div>
        </div>

        <section style="visibility:hidden">

            <!-- S loading 动画，对应的样式在 src/css/loading.scss -->
            <div id="o2_loading" class="video-loading">
                <div class="btns">
                    <a class=" begin btn-play"></a>
                    <!-- <a class=" exit"></a> -->
                </div>
            </div>
            <!-- E loading -->

            <!-- S 主体内容 -->
            <div id="o2_main" class="main">
                <div class="wrapper">

                    <video id="video" class="video" preload="auto" playsinline :src="playVideo" width="1" height="1" type="video/mp4"></video>

                </div>
                <div class="btns control">
                    <!-- <a class=" exit"></a> -->
                    <a class="btn continue">继续</a>
                    <!-- 跳过退出 -->
                    <a class="btn skip exit">跳过</a> 
                </div>
                <div class="poster"></div>
            </div>
            <!-- E 主体内容 -->

            <!-- S KV 页 -->
            <div id="o2_end" class="end hide">
                <div class="btns">
                    <a class="btn replay ">再看一次</a>
                    <!-- <a class=" exit"></a> -->
                </div>
            </div>
            <!-- E KV 页 -->

            <!-- <div class="tip"></div> -->
        </section>

    </div>
</template>
<script>

import '@/css/package.css'
// import '@/js/zepto'
import '@/js/detect'
import '@/js/fx'
import '@/js/fx_methods'
import makeVideoPlayableInline from 'iphone-inline-video'
export default {
    data() {
        return {
            playVideo: './static/video.mp4',
            videoUrl: [
                './static/video.mp4',
                // 'http://wqs.jd.com/promote/superfestival/superfestival.mp4',
                // 'http://file.ih5.cn/v3/files/2079800/20170915/f833a527.mp4',
            ]
        }
    },
    methods: {
        getVideoUrl() {
            // 随机播放视频
            let len = this.videoUrl.length
            // console.log(len)
            let key = Math.floor(Math.random() * len)
            // console.log(key)
            this.playVideo = this.videoUrl[key]
            $('section').css('visibility', 'visible')

        }
    },
    mounted() {
        var $tip = $('.tip')
        // console.log($)
        // console.log($tip)
        /**
         * 判断微信里 TBS 的版本
         */
        var ua = window.navigator.userAgent
        var TBS = ua.match(/TBS\/([\d.]+)/)
        var TBS_V0 = '036849' // TBS >=036849 支持 x5-video-player-type
        var TBS_V1 = '036900' // TBS >=036900 正确支持 x5videoenterfullscreen，036849 <= TBS < 036900 支持的 x5videoxxxx 事件是反的
        var QQB = ua.match(/MQQBrowser\/([\d.]+)/)
        var QQB_V0 = '7.1' // MQQBrowser >=7.1 支持 x5-video-player-type
        var QQB_V1 = '7.2' // MQQBrowser >=7.2 正确支持 x5videoenterfullscreen，7.1 <= TBS < 7.2 支持的 x5videoxxxx 事件是反的
        var tbs = {}
        if (TBS) {
            tbs.isTBS = true
            tbs.isRightEvent = TBS[1] >= TBS_V1
            if (TBS[1] >= TBS_V0) {
                useH5Play()
            }
        } else if (QQB) {
            tbs.isTBS = true
            tbs.isRightEvent = QQB[1] >= QQB_V1
            if (QQB[1] >= QQB_V0) {
                useH5Play()
            }
        }
        if (TBS) {
            $tip.append('TBS: ' + TBS[0] + ' | ' + TBS[1] + '<br>')
        } else {
            $tip.append('TBS: ' + TBS + '<br>')
        }
        if (QQB) {
            $tip.append('MQQBrowser: ' + QQB[0] + ' | ' + QQB[1] + '<br>')
        } else {
            $tip.append('MQQBrowser: ' + QQB + '<br>')
        }
        function useH5Play() {
            $('#video').attr('x5-video-player-type', 'h5')
            $('#video').attr('x5-video-player-fullscreen', 'true')
        }
        /**
         * video
         */
        var video = {}
        video.el = document.getElementById('video')
        // console.log(video.el)
        video.$el = $(video.el)
        // console.log(video.$el)
        video.$main = $('.main')
        video.$wrapper = $('.main .wrapper')
        video.$poster = $('.main .poster')
        video.$skipBtn = $('.main .skip')
        video.$continueBtn = $('.main .continue')
        video.isCanPlay = false
        video.isFirst = true
        video.show = function() {
            video.isFirst = false
            video.$el.addClass('show')
            video.$main.show()
            video.$el.fadeIn()
            video.$poster.fadeOut()
        }
        video.start = function() {
            video.$poster.show()
            video.el.play()
            if (video.isCanPlay) {
                video.show()
            }
        }
        // console.log(video.el)
        video.el.addEventListener('timeupdate', function(e) {
            if (video.el.currentTime > 3) {
                video.$skipBtn.show()
            }
            if (video.isFirst) {
                video.show()
            }
            video.isCanPlay = true
        })
        video.el.addEventListener('ended', function(e) {
            video.$main.fadeOut()
            end.enter()
        })
        // 处理 iOS 的兼容性
        if ($.os.ios) {
            makeVideoPlayableInline(video.el)
        }
        // 处理 tbs/QQBrowser 的兼容性
        if (tbs.isTBS) {
            video.el.addEventListener("x5videoenterfullscreen", function() {
                $tip.append("x5video enter fullscreen<br>");
                if (tbs.isRightEvent) {
                    video.$skipBtn.hide()
                    video.$continueBtn.hide()
                } else {
                    video.$skipBtn.show()
                    video.$continueBtn.show()
                }
            })
            video.el.addEventListener("x5videoexitfullscreen", function() {
                $tip.append("x5video exit fullscreen<br>");
                if (tbs.isRightEvent) {
                    video.$skipBtn.show()
                    video.$continueBtn.show()
                } else {
                    video.$skipBtn.hide()
                    video.$continueBtn.hide()
                }
            })
        }
        /**
         * end
         */
        var end = {}
        end.$ = $('#o2_end')
        end.enter = function() {
            $('.end').removeClass('hide')
        }
        end.leave = function() {
            $('.end').addClass('hide')
        }
        /**
         * event bind
         */
        // $('body').on('touchstart', function(e) {
        //     e.preventDefault()
        // })
        // 开始播放
        // $('.begin').on('touchstart', function() {
        //     $('.video-loading').hide()
        //     $('.main').show()
        //     video.start()
        // })
        $('.starCtrl').on('touchstart', function() {
            $('.page4 section').css('visibility', 'visible')
            aud.pause()
            $('#music').css({
                'background': "url('./static/musicoff.png')",
                'background-size': '100% 100%',
                'animation': 'null'
            })
            // 视频播放
            $('.video-loading').hide()
            $('.main').show()
            video.start()
        })
        $('.skip').on('touchstart', function() {
            end.enter()
            video.el.pause()
            video.el.currentTime = '0'
            $('.main').hide()
        })
        $('.continue').on('touchstart', function() {
            video.el.play()
        })
        $('.replay').on('touchstart', function() {
            end.leave()
            $('.main').show()
            video.start()
        })
        // 计算 wrapper 的 margin-top 值，视频以宽度为基准居中播放
        function handleResize() {
            var sWidth = 85
            var sHeight = 48
            var width = window.innerWidth
            var height = window.innerHeight
            // var marginTop = height - (width * sHeight) / sWidth
            // marginTop = Math.round(marginTop)
            // if (marginTop < -2) {
            //     video.$wrapper.css('marginTop', marginTop / 2 + 'px')
            // } else {
            //     video.$wrapper.css('marginTop', '0')
            // }
            // var marginTop = 45%
            video.$wrapper.css('marginTop', '45%')
        }
        handleResize()
        window.addEventListener('resize', function() {
            handleResize()
        })
    }
}
</script>


<style scoped>
.page4 {
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
.p4-click {
    position: absolute;
    left: 50%;
    top: 30%;
    width: 20%;
    height: 20%;
    display: none;
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



.p4-person-1 {
    position: absolute;
    bottom: 0;
    left: 35%;
    width: 50%;
    animation-delay: 0.3s;
}

.p4-person-2 {
    position: absolute;
    display: none;
    bottom: 0;
    left: 4%;
    width: 81%;
    animation-delay: 1s;
}
.btn-play {
    display: inline-block;
    width: 3rem;
    height: 3rem;
    position: absolute;
    top: 45%;
    left: 45%;
    background: url(../assets/p4/play.png) 0 0 no-repeat;
    background-size: 100% 100%;
}
/* .exit {
   display: inline-block;
    width: 3rem;
    height: 3rem;
    position: absolute;
    top: 10%;
    right: 10%;
    background: url(../assets/p4/close.png) 0 0 no-repeat;
    background-size: 100% 100%; 
} */
</style>