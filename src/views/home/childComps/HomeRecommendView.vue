<!-- 推荐 -->
<template>
    <div class="recommend">
        <div class="recommend-item" v-for="(item,index) in recommends" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'HomeRecommendView',
    props: {
        recommends: {  //获取home-swiper组件传入的recommends
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>
<style scoped>
    .recommend {
        display: flex;
        text-align: center;
        font-size: 12px;
        padding: 15px 0 20px 0;
        border-bottom: 8px solid #eee;
    }

    .recommend-item {
        flex: 1;
    }

    .recommend-item img {
        width: 65px;
        height: 65px;
        margin-bottom: 10px;
    }
</style>