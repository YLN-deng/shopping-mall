<template>
    <div id="main-tab-bar">
        <tab-bar>
            <tab-bar-item path="/home" activeColor="deeppink">
                <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
                <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
                <div slot="item-text">首页</div>
            </tab-bar-item>
            <tab-bar-item path="/category" activeColor="deeppink">
                <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
                <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
                <div slot="item-text">分类</div>
            </tab-bar-item>
            <tab-bar-item path="/cart" activeColor="deeppink">
                <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
                <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
                <div slot="item-text">购物车</div>
            </tab-bar-item>
            <tab-bar-item path="/profile" activeColor="deeppink">
                <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
                <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
                <div slot="item-text">我的</div>
            </tab-bar-item>
        </tab-bar>
    </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'

export default {
  components: { TabBar, TabBarItem },
    name: 'MainTabBar'
}
</script>

<style scoped>
    
</style>