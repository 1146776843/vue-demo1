<template>
    <div class="tmpl">
        <nav-bar :title="title"></nav-bar>
        <div class="news-title">
            <p v-text="newsDetail.title"></p>
            <div>
                <span>点击数:{{newsDetail.click}}</span>
                <span>分类:民生经济</span>
                <span>添加时间:{{newsDetail.add_time | convertDate}}</span>
            </div>
        </div>
        <div class="news-content" v-html="newsDetail.content"></div>
    </div>
</template>
<script>
export default {
    data() {
            return {
                newsDetail: [],
                title: '', //标题
            }
        },
        created() {
            // 获取路由参数
            let id = this.$route.query.id;
            // 拼接路由参数成为后台请求的URL
            this.$axios.get('src/getnews.json').then(res => {
                // 相应回来渲染页面                     
                this.newsDetail = res.data.message[id]; //数据就一个数据，所以直接取0下标
            }).catch(err => {
                console.log(err);
            })
        },
        beforeRouteEnter(to, from, next) {
            let myTitle = '';
            if (from.name === 'news.list') {
                //新闻
                myTitle = '新闻详情';
            } else if (from.name === 'goods.detail') {
                //商品详情过来
                myTitle = '图文介绍';
            }
            // 一定调用next,不然就没有任何效果
            next(vm => {
                // 通过 'vm' 访问组件实例
                vm.title = myTitle;
            })
        }
}
</script>
<style scoped>
.news-title p {
    color: #0a87f8;
    font-size: 20px;
    font-weight: bold;
}

.news-title span {
    margin-right: 30px;
}

.news-title {
    margin-top: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}


/*主题文章的左右距离*/

.news-content {
    padding: 10px 5px;
}
</style>
