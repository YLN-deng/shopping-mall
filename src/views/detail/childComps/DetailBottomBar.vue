<template>
  <div class="detail-bottom-bar">
    <div class="left">
      <div @click="toast">
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div @click="toast">
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div @click="toast">
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy" @click="toast">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addToCart() {
      this.$emit("addCart");
    },
    toast() {
      this.$toast.show();
    }
  },
};
</script>

<style scoped>
.detail-bottom-bar {
  background-color: #fff;
  height: 49px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  text-align: center;
  z-index: 12;
}

.left {
  width: 50%;
}
.left,
.right {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.left .icon {
  display: block;
  width: 24px;
  height: 24px;
  margin-left: 3px;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}
.left .shop {
  background-position: 0 57px;
}
.left .service {
  background-position: 0 107px;
}
.text {
  font-size: 14px;
}
.cart {
  position: absolute;
  height: 49px;
  width: 94px;
  background-color: #fff737;
  text-align: center;
  color: #666;
  font-size: 16px;
  line-height: 49px;
  right: 94px;
}
.buy {
  position: absolute;
  height: 49px;
  width: 94px;
  background-color: var(--color-tint);
  text-align: center;
  color: #fff;
  font-size: 16px;
  line-height: 49px;
  right: 0;
}
</style>
