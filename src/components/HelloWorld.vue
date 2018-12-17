<template>
  <div class="hello">
    <div class="compotents">
      <h6>1、Vue .sync父子组件传值测试</h6>
      <Child :listen.sync="obj"></Child>
    </div>
    <div class="transition">
      <h6>2、Vue transition动画测试</h6>
      <button @click="show">组件弹窗测试</button>
      <Popup :showPop.sync="isShow"></Popup>
    </div>
    <div class="router">
      <h6>3、Vue 嵌套路由测试</h6>
      <ul class="nav clearfix">
        <li>
          <router-link to="home">首页</router-link>
        </li>
        <li>
          <router-link to="news">新闻</router-link>
        </li>
        <li>
          <router-link to="message">公告</router-link>
        </li>
        <li>
          <router-link to="/detail">详情</router-link>
        </li>
      </ul>
      <router-view></router-view>
      <router-view name="a"></router-view>
    </div>
  </div>
</template>

<script>
import Child from "./child.vue";
import Popup from "./popup.vue";
export default {
  name: "HelloWorld",
  components: {
    Child,
    Popup
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      obj: { value: "1111", type: 555 },
      isShow: false
    };
  },
  methods: {
    show() {
      this.isShow = !this.isShow;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello{
  padding:10px;
  flex:1 1 auto;
  border:1px solid blue;
  margin-left:10px;
}
.nav {
  li {
    float: left;
    padding: 0 10px;
  }
}
ul {
  list-style-type: none;
  padding: 0;
}
</style>
