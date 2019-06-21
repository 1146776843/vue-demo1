<template>
    <div>
        <!-- 轮播图 -->
        <my-swipe :url="lunboUrl"></my-swipe>
        <!--  <mt-swipe :auto="4000">
            <mt-swipe-item>
                <img src="../../static/img/v13.jpg" />
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../../static/img/v14.jpg" />
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../../static/img/v15.jpg" />
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../../static/img/v16.jpg" />
            </mt-swipe-item>
        </mt-swipe> -->
        <!-- 九宫格 -->
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link :to="{name:'news.list'}">
                        <span class="mui-icon mui-icon-home"></span>
                        <div class="mui-media-body">新闻资讯</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link :to="{name:'photo.share'}">
                        <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                        <div class="mui-media-body">图文分享</div>
                    </router-link  >
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link :to="{name:'goods.list'}">
                        <span class="mui-icon mui-icon-chatbubble"></span>
                        <div class="mui-media-body">商品展示</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                        <span class="mui-icon mui-icon-location"></span>
                        <div class="mui-media-body">留言反馈</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                        <span class="mui-icon mui-icon-search"></span>
                        <div class="mui-media-body">搜索咨询</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                        <span class="mui-icon mui-icon-phone"></span>
                        <div class="mui-media-body">联系我们</div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import lunbodata from '../../data.json';
export default {
    data() {
        return {
            imgs: [],
            lunboUrl:'src/data.json',//轮播图url传递到子组件
        }
    }, created() {
        //发起请求
        this.$axios.get('src/data.json')
            .then(res => {
                console.log(res.data.message);
                this.imgs = res.data.message;
            })
    }

}
</script>
<style scoped>

/*九宫格样式*/

.mui-table-view.mui-grid-view.mui-grid-9 {
    background-color: white;
    border: 0;
    margin-top: 0px;
}

.mui-table-view.mui-grid-view.mui-grid-9 li {
    border: 0;
}


/*九宫格清除字体图标*/

.mui-icon-home:before,
.mui-icon-email:before,
.mui-icon-chatbubble:before,
.mui-icon-location:before,
.mui-icon-search:before,
.mui-icon-phone:before {
    content: '';
}


/*九宫格背景图片*/

.mui-icon-home {
    background-image: url('../../static/img/news.png');
    background-repeat: round;
}

.mui-icon-email {
    background-image: url('../../static/img/picShare.png');
    background-repeat: round;
}

.mui-icon-chatbubble {
    background-image: url('../../static/img/goodShow.png');
    background-repeat: round;
}

.mui-icon-location {
    background-image: url('../../static/img/feedback.png');
    background-repeat: round;
}

.mui-icon-search {
    background-image: url('../../static/img/search.png');
    background-repeat: round;
}

.mui-icon-phone {
    background-image: url('../../static/img/callme.png');
    background-repeat: round;
}


/*九宫格图标宽高*/

.mui-icon {
    height: 50px;
    width: 50px;
}
</style>
