<template>
  <div class="m_recommend">
    <h3>— 您可能喜欢 —</h3>
    <div class="g_links">
      <a @click="ha('/1',item)" v-for="(item,index) in list" :key="index">
        <img alt :src="'https://img2.yidejia.com/'+item.img_name" />
        <footer>
          <h4>{{item.goods_name}}</h4>
          <em>{{item.price}}</em>
        </footer>
      </a>
    </div>
  </div>
</template>
<script>
export default {
    props:{
        list:{
            type:Object
        }
    },
    methods:{
       ha(a,item){
          this.$router.push({
            path:a,
            query:{
            'item':item
          }
          })
        
      }
    }
};
</script>
<style>
 .m_recommend h3 {
    font-size: .65rem;
    line-height: 1.5rem;
    color: #828282;
    text-align: center
}

 .m_recommend .g_links {
    margin-top: -.25rem
}

 .m_recommend .g_links a {
    margin-top: 1rem;
    border: 1px solid #e4e4e4;
    width: 48%;
    background: #fff
}

 .m_recommend .g_links a:nth-child(odd) {
    float: left;
    border-left: 0
}

 .m_recommend .g_links a:nth-child(2n) {
    float: right;
    border-right: 0
}

 .m_recommend .g_links a img {
    width: 100%;
    display: block
}

 .m_recommend .g_links a footer {
    padding: .25rem
}

 .m_recommend .g_links a footer h4 {
    height: 2rem;
    font-size: .6rem;
    color: #828282;
    overflow: hidden
}

 .m_recommend .g_links a footer em {
    color: #ec5196
}
</style>