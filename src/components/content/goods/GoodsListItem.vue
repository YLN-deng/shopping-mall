<!-- 商品卡片 -->
<template>
  <div class="goods-item" @click="itemClick">
    <img v-lazy="showImage" alt="" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">￥{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    showImage() {
      return (
        (this.goodsItem.show && this.goodsItem.show.img) ||
        this.goodsItem.image ||
        this.goodsItem.img
      );
    },
  },
  methods: {
    itemClick() {
      let goid;
      goid = this.goodsItem.iid || this.goodsList.iid;
      if (
        !this.$route.path.indexOf("/home") ||
        !this.$route.path.indexOf("/category")
      ) {
        this.$router.push("/detail/" + goid);
      }
    },
  },
};
</script>

<style scoped>
.goods-item {
  width: 48%;
  padding-bottom: 40px;
  position: relative;
}
.goods-item:nth-last-child(2) {
  margin-bottom: 50px;
}
.goods-item:nth-last-child(1) {
  margin-bottom: 50px;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  /*
      多余部分变成...
    */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>