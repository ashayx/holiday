<template>
    <div class="container">
        <div class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <label class="weui-label">图片上传</label>
                </div>
                <div class="weui-cell__bd">
                    <div class="image-upload-container">
                        <span class="image-container" v-for="(src,index) in baseSrc">
                            <img :src="src" v-show="src" class="images" @click="preview(index)">
                            <i @click="delImg(index)">-</i>
                        </span>
                        <span class="add-btn-container">
                            <input type="file" accept="image/*" @change="imgUpload" id="file-input">
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 大图预览 -->
        <div class="swiper-container" v-show="previewShow">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="img in baseSrc" @click="previewShow = false">
                    <img :data-src="img" class="swiper-lazy">
                    <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </div>
            </div>
            <p class="return-tips">轻触返回</p>
            <div class="swiper-pagination swiper-pagination-white"></div>
        </div>
    </div>
</template>

<script>
import weui from '@/js/weui'
import lrz from '@/js/lrz.bundle'

export default {
    data() {
        return {
            baseSrc: [],
            imgUrls: [],
            imgCount: 0,
            previewShow: false
        }
    },
    methods: {
        preview(imgIndex) {
            this.previewShow = true;
            let index = imgIndex;
            setTimeout(() => {
                var swiper = new Swiper('.swiper-container', {
                    pagination: '.swiper-pagination',
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    initialSlide: index,
                    paginationClickable: true,
                    preloadImages: false,
                    lazyLoading: true,
                    zoom: true,
                    zoomToggle: false
                });
            }, 300)
        },
        delImg(index) {
            this.baseSrc.splice(index, 1)
            this.imgUrls.splice(index, 1)
        },
        imgUpload(e) {
            var _this = this
            _this.imgCount++;
            if (_this.imgCount > 9) {
                weui.alert('只能上传9张图片哦！')
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
            })
                .then(function(rst) {
                    // 处理成功会执行
                    _this.baseSrc.push(rst.base64);
                    $.post('/api/1/picture?method=upload', {
                        content: rst.base64,
                        encode: 'base64'
                    }, function(response) {
                        var response = JSON.parse(response)
                        if (response.errcode == 0) {
                            _this.imgUrls.push(response.data.img_path);
                            loading.hide()
                        } else {
                            weui.alert('图片传输失败，请重试')
                        }
                    });
                })
                .catch(function(err) {
                    console.log(err);
                })
                .always(function() { });
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

