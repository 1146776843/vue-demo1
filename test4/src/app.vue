<template>
    <div>
        <!-- 头部内容 -->
        <mt-header title="信息管理系统"></mt-header>
        <transition name="router" mode="out-in">
            <router-view></router-view>
        </transition>
        <!-- 底部内容 -->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" :to="{name:'home'}">
                <span class="mui-icon icon-shouye1"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" :to="{name:'member'}">
                <span class="mui-icon icon-diamond"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item" :to="{name:'shopcart'}">
                <span class="mui-icon icon-gouwucheman"><span class="mui-badge">{{pickNum}}</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" :to="{name:'search'}">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">查找</span>
            </router-link>
        </nav>
    </div>
</template>
<script>
import connect from './components/common/connect.js';
// 引入prodTools
import prodTools from './components/common/prodTools.js';
export default {
    data() {
        return {
            pickNum: prodTools.getTotalCount()
        }
    }, created() {
        connect.$on('addShopcart', num => {
            // 接收到goodsDetail
            console.log("父接收到了");
            this.pickNum = this.pickNum + num;
            // this.pickNum+=num;
        })
    }
}
</script>
<style scoped>
.router_entry-active,
.router-leave-active {
    transition: opacity .5s
}

.router-enter,
.router-leave-to {
    opacity: 0;
}
</style>
