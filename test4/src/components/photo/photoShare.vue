<template>
    <div class="tmpl">
        <nav-bar title="图文分享"></nav-bar>
        <!-- 引入返回导航 -->
        <div class="photo-header">
            <ul>
                <li v-for="category in categorys" :key="category.id">
                    <a href="javascript:;" @click="loadImg(category.id)">{{category.title}}</a>
                </li>
            </ul>
        </div>
        <div class="photo-list">
            <ul>
                <li v-for="img in imgs" :key="img.id">
                    <router-link :to="{name:'photo.detail',query:{id:img.id}}">
                        <img v-lazy="img.img_url" />
                        <p>
                            <span v-text="img.title"></span>
                            <br/>
                            <span v-text="img.zhaiyao"></span>
                        </p>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
            return {
                categorys: [],
                imgs: [],
            }
        }, created() {
            // 发起请求
            this.$axios.get('./src/getimgcategory.json').then(res => {
                this.categorys = res.data.message;
                // 将全局添加到数组的第一个unshift
                this.categorys.unshift({
                    id: 0,
                    title: "全部"
                });
            }).catch(err => {
                console.log(err);
            });
            this.loadImg(0);
            // 以下代码等同于这一行
            // this.loadImg(0);//该代码替换了下面的请求代码，做了函数封装 

            // 将0作为参数，获取全部图片数据
            this.$axios.get('./src/getimages.json').then(res => {
                this.imgs = res.data.message;
            }).catch(err => {
                console.log(err);
            })
        },
        methods: {

            loadImg(id) {
                // console.log(id);
                this.$axios.get('./src/getimages.json').then(res => {
                    // this.imgs=[];
                    if (id == 0) {
                        this.imgs = res.data.message;
                    } else if (id == 1) {
                        this.imgs = res.data.message;
                        this.imgs.splice(1, 3);
                    } else if (id == 2) {
                        this.imgs = res.data.message;
                        this.imgs.splice(0, 1);
                        this.imgs.splice(1, 2);
                    } else if (id == 3) {
                        this.imgs = res.data.message;
                        this.imgs.splice(0, 2);
                        this.imgs.splice(1, 1);
                    } else if (id == 4) {
                        this.imgs = res.data.message;
                        this.imgs.splice(0, 3);
                    }
                    // this.imgs = res.data.message;
                    console.log(this.imgs);

                    // console.log(res.data.message[id]);
                }).catch(e => {
                    console.log(e);
                })
            }
        }
}
</script>
<style scoped>
.photo-header li {
    list-style: none;
    display: inline-block;
    margin-left: 10px;
    height: 30px;
}

.photo-header ul {
    /*强制不换行*/
    white-space: nowrap;
    overflow-x: auto;
    padding-left: 0px;
    margin: 5;
}


/*下面的图片*/

.photo-list li {
    list-style: none;
    position: relative;
}

.photo-list li img {
    width: 100%;
    height: 230px;
    vertical-align: top;
}

.photo-list ul {
    padding-left: 0px;
    margin: 0;
}

.photo-list p {
    position: absolute;
    bottom: 0px;
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
    margin-bottom: 0px;
}

.photo-list p span:nth-child(1) {
    font-weight: bold;
    font-size: 16px;
}


/*图片懒加载的样式*/

image[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;
}
</style>
