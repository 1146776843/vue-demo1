'use strict';
import Vue from 'vue';

// 引入自己的vue文件开始
import App from './app.vue';
import Home from './components/home/home.vue';
import Member from './components/member/member.vue';
import Search from './components/search/search.vue';
import Shopcart from './components/shopcart/shopcart.vue';
import NewsList from './components/news/newsList.vue';
import NewsDetail from './components/news/newsDetail.vue';
import PhotoShare from './components/photo/photoShare.vue';
import PhotoDetail from './components/photo/photoDetail.vue';
import GoodsList from './components/goods/goodsList.vue';
import GoodsDetail from './components/goods/goodsDetail.vue';
import MySwipe from './components/common/mySwipe.vue';
import GoodsComment from './components/goods/goodsComment.vue';
// 引入路由对象
import VueRouter from 'vue-router';
// VueRouter安装插件
Vue.use(VueRouter);
// Vue.use('api/', VueRouter);

// MUI:引入mui的模式
import './static/vendor/mui/dist/css/mui.css';
// 引入mint-ui
import Mint from 'mint-ui';
// Mint:引入css
import 'mint-ui/lib/style.css';

// 全局样式
import './static/css/global.css';
// Mint安装插件
Vue.use(Mint);


// 引入Axios from 'axios';
import Axios from 'axios';
// 挂载原型
Vue.prototype.$axios = Axios;
Axios.defaults.baseURL = 'http://localhost:8080/';
// 引入自己的vue文件结尾

Axios.interceptors.request.use(function(config) {
    // 显示图标
    Mint.Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
    });
    return config;
});
Axios.interceptors.response.use(function(config) {
    // 隐藏图标
    Mint.Indicator.close();
    // 获取到config中的data，进行加工
    return config;
});
// Moment:引入moment
import Moment from 'moment';

// 引入vue-preview
import VuePreview from 'vue-preview';
Vue.use(VuePreview);

// 引入全局组件需要的组件对象开始
import NavBar from './components/common/navBar.vue';
import Comment from './components/common/comment.vue';
// 引入全局组件需要的组件对象结束

// 定义成全局过滤器或全局组件开始
Vue.filter('convertDate', function(value) {
    return Moment(value).format('YYYY-MM-DD');
});
Vue.component('navBar', NavBar); //使用最好以nav-bar
Vue.component('comment', Comment); //使用要以comment
Vue.component('mySwipe', MySwipe); //使用要以my-swipe

// 定义成全局过滤器或全局组件结束

// VueRouter:创建对象并配置路由规则
let router = new VueRouter({
    linkActiveClass: 'mui-active',
    routes: [
        // VueRouter:配置路由规则
        { path: '/', redirect: { name: 'home' } }, //重定向
        { name: 'home', path: '/home', component: Home }, //首页
        { name: 'member', path: '/member', component: Member }, //会员
        { name: 'search', path: '/search', component: Search }, //搜索
        { name: 'shopcart', path: '/shopcart', component: Shopcart }, //购物车
        { name: 'news.list', path: '/news/list', component: NewsList }, //新闻列表
        { name: 'news.detail', path: '/news/detail', component: NewsDetail }, //新闻详情
        { name: 'photo.share', path: '/photo/share', component: PhotoShare }, //图文分享
        { name: 'photo.detail', path: '/photo/detail', component: PhotoDetail }, //图片详情
        { name: 'goods.list', path: '/goods/list', component: GoodsList }, //商品列表
        { name: 'goods.detail', path: '/goods/detail', component: GoodsDetail }, //商品详情
        { name: 'goods.comment', path: '/goods/comment', component: GoodsComment }, //商品评论
        { name: 'goods.pictureInfo', path: '/goods/pictureInfo', component: NewsDetail }, //图文介绍
    ]
})



//new Vue 启动
new Vue({
    el: '#app',
    router,
    render: c => c(App),
})
