<template>
  <div id="main">
    <zxlt></zxlt>
    <!--类别分类-->
    <div class="container">
      <!-- 头部区域插件 -->
      <div class="leftnav">
        <!-- 左边导航栏 -->
        <ul>
          <li :key="index"
              @click="nu=index"
              v-for="(item,index) in list"
              :class="{white:nu === index}">
            <a>{{item.name}}</a>
          </li>
        </ul>
      </div>
      <item :num="list[nu]"
            :nu1="nu"></item>
    </div>
  </div>
</template>
<script>
import item from "./cstlistitem";
import zxlt from './zxl-t'
export default {
  components: {
    item,
    zxlt
  },
  data() {
    return {
      list: [],
      nu: 0
    };
  },
  created() {
    // 获取数据
    this.$axios
      .get("/index.php?api=index.index.getItems&_=1570672873913")
      .then(res => {
        this.list = res.data.response;
      });
  }
};
</script>
<style  lang="scss" scoped>
body {
  background:#ededed;
}
.imgbox {
  height: 9.599375rem;
  background-image: white !important;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 4.9825rem;
    height: 4.9825rem;
    border-radius: 50%;
  }
}
// 大盒子区域
.container {
  margin-top: 39px;
  // 头部搜索框
  // 左边导航栏
  .leftnav {
    float: left;
    width: 5.165625rem;
    height: 52.375rem;
    > ul {
      text-align: center;
      > li {
        border-bottom: 1px solid #e4e4e4;
        .active {
          background: white;
        }
        > a {
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          height: 3.726875rem;
          width: 5.165625rem;
          line-height: 91px;
          text-align: center;
          font-size: 1rem;
          color: #a0a0a0;
        }
      }
    }
  }
}
.white {
  background: white;
}
</style>