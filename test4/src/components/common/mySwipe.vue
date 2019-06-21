<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(img,index) in imgs" :key="index">
                <a><img :src="img.src"></a>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
export default {
    data() {
            return {
                imgs: [],
            }
        }, props: ['url'],
        created() {
            this.$axios.get(this.url).then(res => {
                this.imgs = res.data.message;
            })
        }
}
</script>
<style scoped>
.mint-swipe {
    max-height: 40%;
    max-width: 100%;
}

.mint-swipe img {
    height: 100%;
    width: 100%;
}
</style>
