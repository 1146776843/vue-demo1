<template>
    <div class="tmpl">

        <nav-bar title="新闻列表"></nav-bar>

        <!-- MUI图文列表 -->
        <ul class="mui-table-view">
            <li v-for="news in newsList" :key="news.id" class="mui-table-view-cell mui-media">
                <router-link :to="{name:'news.detail',query:{id:news.id}}">
                    <img :src="news.img_url" class="mui-media-object mui-pull-left" />
                    <div class="mui-media-body">
                        <span v-text="news.title"></span>
                        <div class="news-desc">
                            <p>点击数:{{news.click}}</p>
                            <p>发表时间:{{news.add_time |convertDate}}</p>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                newsList:[],//新闻列表数据
            }
        },created(){
            // 发起请求
            this.$axios.get('./src/getnewslist.json').then(res=>{
                this.newsList=res.data.message; 
            }).catch(err=>{
                console.log(err);
            })
        }
    }
</script>
<style scoped>
.mui-media-body p{
    color:#0bb0f5;
}
.news-desc p:nth-child(1){
    float:left;
}
.news-desc p:nth-child(2){
    float:right; 
}
</style>