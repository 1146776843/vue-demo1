<template>
    <div class="tmpl">
        <nav-bar title="图片详情"></nav-bar>
        <div class="photo-title">
            <p v-text="imageinfo.title"></p>
            <span>发起日期：{{imageinfo.add_time|convertDate}}</span>
            <span>{{imageinfo.click}}次浏览</span>
            <span>分类：民生经济</span>
        </div>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <!-- <li v-for="(img,index) in imgs"  :key="index"  class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"> -->
            <!-- <img :src="img.src"> -->
            <!-- <img class="preview-img" :src="img.src" height="100" @click="$preview.open(index, imgs)"> -->
            <div class="thumbs">
                <vue-preview :slides="thumbImgList"></vue-preview>
            </div>
            <!--  </li> -->
        </ul>
        <div class="photo-desc">
            <p v-html="imageinfo.content"></p>
        </div>
        <!-- 使用评论子组件 -->
        <comment :cid="pid"></comment>
    </div>
</template>
<script>
export default {
    data() {
        return {
            imgs: [], //存放缩略图
            imageinfo: {}, //存放详情数据对象
            pid: this.$route.query.id, //记录当前图片id
            thumbImgList: [],
            gg: "",
        }
    }, created() {
        // 1:获取路由参数
        let pid = this.$route.query.id;

        // 发起请求
        this.$axios.get('src/getimageInfo.json').then(res => {
            this.imageinfo = res.data.message[pid];

        }).catch(err => {
            console.log(err);
        });
        // 缩略图
        this.$axios.get('src/getthumimages.json').then(res => {
            // this.imgs=res.data.message;
            let pid = this.$route.query.id;

            // console.log(this.pid);
            res.data.message.forEach(ele => {
                ele.w = 300; //缩略图显示的宽
                ele.h = 200;
                ele.msrc = ele.src;

            });
            // console.log(res.data.message[pid]['src']);
            this.thumbImgList.push(res.data.message[pid]);
            // console.log(res.data.message[pid]);
        }).catch(err => {
            console.log(err);
        });
    }
}
</script>
<style scoped>
li {
    list-style: none;
}

ul {
    margin: 0;
    padding: 0;
}

.photo-title {
    margin-top: 10px;
    overflow: hidden;
}

.photo-title,
.photo-desc {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding-bottom: 5px;
    margin-bottom: 5px;
    padding-left: 5px;
}

.photo-title p {
    color: #13c2f7;
    font-size: 20px;
    font-weight: bold;
}

.photo-title span {
    margin-right: 20px;
}

.mui-table-view.mui-grid-view.mui-grid-9 {
    background-color: white;
    border: 0;
}

.mui-table-view.mui-grid-view.mui-grid-9 li {
    border: 0;
}

.photo-desc p {
    font-size: 18px;
}

.mui-table-view-cell.mui-media.mui-col-xs-4.mui-col-sm-3 {
    padding: 2 2;
}

.thumbs {
    display: flex;
    width: 100%;
    height: 23%;
    padding-top: 7%;
    padding-left: 10%;
}

.thumbs img {
    margin-left: 400px;
}

.thumbs >div {
    width: 100%;
}

.thumbs .my-gallery {
    display: flex;
    flex-wrap: wrap;
}

.thumbs .my-gallery figure {
    margin: 0 120px 40px 0;
    box-shadow: 0 0 10px #ccc;
}

.thumbs .my-gallery figure img {
    width: 100%;
    vertical-aglin: middle;
}
</style>
