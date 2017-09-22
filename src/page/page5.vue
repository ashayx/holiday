<template>
    <div class="page5">
        <!-- 上传 -->
        <div v-show="openPageTwo" class="page5-1">
            <div class="p5-1-dialog1">
                <img src="../assets/p5/p5-dialog-1.png" alt="">
            </div>
            <div class="p5-1-dialog2">
                <img src="../assets/p5/p5-dialog-2.png" alt="">
            </div>
            <div class="p5-1-ballon">
                <img src="../assets/p5/p5-1-ballon1.png" alt="" style="width:80%;">
                <input type="file" accept="image/*"  @change="imgUpload" id="file-input">
            </div>
            <div class="p5-1-click">
                <img src="../assets/p5/p5-click.png" alt="">
            </div>
        </div>
        <!-- 点击浏览相册 -->
        <div class="page5-2" >
            <div class="p5-2-ballon1" @click="previewShow = true">
                <img src="../assets/p5/p5-2-ballon1.png" alt="" style="width:80%;">
                <div class="p5-2-photo">
                    <img :src="imgUrls[0]" alt="">
                </div>
            </div>
            <div class="p5-2-ballon2" @click="previewShow = true">
                <img src="../assets/p5/p5-2-ballon2.png" alt="" style="width:80%;">
                <div class="p5-2-photo">
                    <img :src="imgUrls[1]" alt="">
                </div>
            </div>
            <div class="p5-2-ballon3" @click="previewShow = true">
                <img src="../assets/p5/p5-2-ballon3.png" alt="" style="width:80%;">
                <div class="p5-2-photo">
                    <img :src="imgUrls[2]" alt="">
                </div>
            </div>
        </div>
        <!-- 相册 -->
        <div class="page5-3" v-show="previewShow">
            <div class="page5-close">
                <img src="../assets/p5/p5-close.png" alt="">
            </div>
            <ul id="fonglezen_ddpic">
                <li class="p1"><img :src="imgUrls[0]" class="goimg"></li>
                <li class="p2"><img :src="imgUrls[1]" class="goimg"></li>
                <li class="p3"><img :src="imgUrls[2]" class="goimg"></li>
            </ul>
        </div>

    </div>
</template>

<script>
import weui from 'weui.js'
import lrz from 'lrz'

export default {
    name: 'page5',
    data() {
        return {
            baseSrc: [],
            imgUrls: [],
            imgCount: 0,
            previewShow: false,

        }
    },
    methods: {

        imgUpload(e) {
            
            // console.log(e)
            var _this = this
            _this.imgCount++;
            if (_this.imgCount > 3) {
                weui.alert('只能上传3张图片哦！')
                return
            }
            if (e.target.files[0]) {
                var loading = weui.loading('图片上传中...')
            } else {
                return
            }
            lrz(e.target.files[0], {
                width: 500,
                height: 500,
                quality: 0.7
            }).then(function(rst) {
                // 处理成功会执行
                _this.baseSrc.push(rst.base64)
                // console.log(rst)

                $.post('http://h5.sjzzimu.com/weixinUpload/uploadImage.action', {
                    base: rst.base64,
                    // encode: 'base64',
                }, function(response) {
                    console.log(response)
                    _this.imgUrls.push(response);
                    loading.hide()
                    console.log(_this.imgUrls)

                    if (_this.imgCount === 3) {
                        

                        let postImg = _this.imgUrls
                        // 上传相册的路径和openid
                        $.post('http://h5.sjzzimu.com/crazyDayServ/weekday/crazy_addPic.do', {
                            openid: myuserOpenid,
                
                            ypic_url: postImg[0],
                            hpic_url: postImg[1],
                            lpic_url: postImg[2],
                        }, function(response) {
                            console.log(response)
                            console.log('上传openid')

                            yundaoWx.share_title = "我的最野假期";
                            yundaoWx.share_desc = "让梦想和假期一起飞翔！";
                            yundaoWx.share_link = "http://h5.sjzzimu.com/holiday/index.html?fromId=" + myuserOpenid;
                            yundaoWx.share_imgUrl = "http://h5.sjzzimu.com/xiaozhao/images/min.png";
                            yundaoWx.share();

                        }) 
                        
                        
                        
                    }
                })
            })
        }
    },
    computed: {
        openPageTwo: function() {
            if (this.imgUrls.length < 3) {
                return true
            } else {
                // 跳转5-2 ，添加动画
                $('.p5-2-ballon1').addClass('animated  zoomInUp').css('display', 'block')
                $('.p5-2-ballon2').addClass('animated  zoomInUp').css('display', 'block')
                $('.p5-2-ballon3').addClass('animated  zoomInUp').css('display', 'block')
                setTimeout(function() {
                    $('.p5-2-ballon1,.p5-2-ballon2,.p5-2-ballon3').css({ 'animation-name': 'float', 'animation-iteration-count': 'infinite' })
                }, 6000)
                return false
            }
        }
    },
    mounted() {
        //  console.log(swiper)
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
                        // console.log(flzpic.flz_dpli.find('img'))
                        flzpic.flz_dpli.attr('class', '');

                        //move first li to last li
                        var firstLI = flzpic.flz_dpli.eq(0).html();

                        flzpic.flz_dpli.eq(0).remove();
                        // 这里有模板的问题
                        // flzpic.fonglezen_ddpic.append('<li data-v-57540eb6>' + firstLI + '</li>');
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
                    flzpic.flz_dpli.eq(0).attr('class', 'hideToleft');
                    flzpic.shownext();
                } else if (Math.abs(flzpic.pmoveY) < flzpic.windowHeight * 0.1 && flzpic.pmoveX > 0) {
                    flzpic.flz_dpli.eq(0).attr('class', 'hideToright');
                    flzpic.shownext();
                }
            });
        };


        $('#fonglezen_ddpic').fonglezenDDpic();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .page5 {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .page5-1 {
        width: 100%;
        height: 100%;
        position: relative;
        background: url(../assets/p5/p5-bg.png) 0 0 no-repeat;
        background-size: 100% 100%;
        z-index: 1;
    }

    .page5-2 {
        width: 100%;
        height: 100%;
        position: absolute;
        background: url(../assets/p5/p5-1-bg.png) 0 0 no-repeat;
        background-size: 100% 100%;
        z-index: 2;
    }
    .page5-3 {
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        position: absolute;
        background:rgba(0, 0, 0, 0.8);
        z-index:3;
    }
    .p5-1-ballon {
        position: absolute;
        left: 50%;
        top: 30%;
        height: 50%;
        width: 80%;
        height: auto;
        margin-left: -40%;
        display: none;
        animation-duration: 6s;
    }
    #file-input {
        position: absolute;
        left: 10%;
        top: 0;
        width: 80%;
        height: 65%;
        opacity: 0;
        z-index: 10;
    }
    .p5-1-dialog1 {
        position: absolute;
        top: 10%;
        left: 20%;
        width: 60%;
        display: none; 
        animation-delay: 0.3s; 
    }
   
    .p5-1-dialog2 {
        position: absolute;
        top: 20%;
        left: 20%;
        width: 60%;
        display: none;  
        animation-delay: 0.8s; 
    }
    .p5-1-click {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 30%;
        display: none;
    }
    .p5-1-dialog1 img,.p5-1-dialog2 img,.p5-1-click img{
        width: 100%;  
    }
    .p5-2-ballon1 {
        position: absolute;
        display: none;
        animation-duration: 4s;
        top: 20%;
        left: 10%;
        width: 40%;
    }
    .p5-2-ballon2 {
        position: absolute;
        display: none;
        animation-duration: 5s;
        top: 10%;
        right: 10%;
        width: 40%;
    }
    .p5-2-ballon3 {
        position: absolute;
        display: none;
        animation-duration: 3s;
        top: 50%;
        left: 20%;
        width: 60%;
    }
    .p5-2-photo {
        position: absolute;
        bottom: -20%;
        left: 35%;
        width: 30%;
        height: 30%;

    }
    .p5-2-photo img{
        width: 100%;
        height: 100%;
    }
    /* fontlezen_ddpic begin */

    ul,
    li {
        list-style-type: none;
    }



    /* fontlezen_ddpic begin */
    /* 相册样式 */
    .page5-close {
        width: 10%;
        position: absolute;
        top: 5%;
        right: 5%;
    }
    .page5-close img{
        width: 100%;
    }
    #fonglezen_ddpic {
        width: 80%;
        height: 80%;
        position: absolute;
        z-index: 25;
        top: 50%;
        left: 50%;
        margin-left: -40%;
        margin-top: -10rem;
    }

    #fonglezen_ddpic li {
        position: absolute;
        left: 0;
        top: 0;
        text-align: center;
        width: 247px;
        height: 413px;
        box-sizing: border-box;
    }

    #fonglezen_ddpic li img {
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

    #fonglezen_ddpic li {
        z-index: 5;
    }

    #fonglezen_ddpic li:nth-child(1) {
        z-index: 10;
    }

    #fonglezen_ddpic li:nth-child(2) {
        z-index: 9;
    }

    #fonglezen_ddpic li:nth-child(3) {
        z-index: 8;
    }

    #fonglezen_ddpic li:nth-child(4) {
        z-index: 7;
    }



    #fonglezen_ddpic li img {
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

    #fonglezen_ddpic li:nth-child(1) img {
        -webkit-transform: rotateZ(0deg);
        transform: rotateZ(0deg);
        z-index: 10;
    }

    #fonglezen_ddpic li:nth-child(1) .goimg {
        -webkit-animation: goimg 0.6s;
        -webkit-animation-fill-mode: both;
        -webkit-animation-delay: 2s;
        animation: goimg 0.6s;
        animation-fill-mode: both;
        animation-delay: 2s;
    }

    #fonglezen_ddpic li:nth-child(2) img {
        -webkit-transform: rotateZ(3deg);
        transform: rotateZ(3deg);
        z-index: 9;
    }

    #fonglezen_ddpic li:nth-child(2) .goimg {
        -webkit-animation: goimg 0.6s;
        -webkit-animation-fill-mode: both;
        -webkit-animation-delay: 1.5s;
        animation: goimg 0.6s;
        animation-fill-mode: both;
        animation-delay: 1.5s;
    }

    #fonglezen_ddpic li:nth-child(3) img {
        -webkit-transform: rotateZ(6deg);
        transform: rotateZ(6deg);
        z-index: 8;
    }

    #fonglezen_ddpic li:nth-child(3) .goimg {
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

    #fonglezen_ddpic li:nth-child(2) .backinit {
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

    #fonglezen_ddpic li:nth-child(3) .backinit1 {
        -webkit-animation: backinit1 0.5s;
        -webkit-animation-fill-mode: both;
        animation: backinit1 0.5s;
        animation-fill-mode: both;
        -webkit-animation-delay: 0.15s;
        animation-delay: 0.15s;
    }


    /* fontlezen_ddpic begin */
</style>
