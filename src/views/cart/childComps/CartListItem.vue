<template>
  <div id="shop-item">
    <div class="item-selector">
      <CheckButton :is-checked="product.checked" @click.native="checkClick">
      </CheckButton>
    </div>
    <div class="item-img">
      <img :src="'http://' + product.image" alt="商品图片" />
    </div>
    <div class="item-info">
      <div class="item-title">{{ product.title }}</div>
      <div class="item-desc">{{ product.desc }}</div>
      <div class="info-bottom">
        <div class="item-price left">￥{{ product.price }}</div>
        <div class="item-count right">x{{ product.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton.vue";

export default {
  name: "CartListItem",
  components: {
    CheckButton,
  },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    checkClick() {
      this.product.checked = !this.product.checked;
    },
  },
};
</script>

<style scoped>
 #shop-item {
    width: 100%;
    display: flex;
    font-size: 24px;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }

  .item-selector {
      width: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
  }

  .item-title,.item-desc {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
  }

  .item-img img {
      width: 67px;
      height: 100px;
      display: block;
      border-radius: 5px;
      margin-left: 3px;
  }

  .item-info {
      font-size: 18px;
      color: #333;
      padding: 5px 10px;
      position: relative;
      overflow: hidden;
  }

  .item-info .item-desc {
      font-size: 14px;
      color: #666;
      margin-top: 15px;
  }

  .info-bottom {
      margin-top: 10px;
      position: absolute;
      bottom: 10px;
      left: 10px;
      right: 10px;
  }

  .info-bottom .item-price {
      color: orangered;
  }
</style>