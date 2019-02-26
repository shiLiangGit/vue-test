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
    <hr/>
    <h5>{{address}}</h5>
    <p>{{latitude}}</p>
    <h5>{{handleString}}</h5>
    {{doneTodosCount}}
    <h4>来玩下git分支</h4>
  </div>
</template>

<script>
import {mapState, mapMutations, mapGetters} from 'vuex';
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
  computed: {

    // store.state 注入方式
    // ...为对象展开运算符
    // 用法 1：mapState辅助函数（传递字符串数组）
    ...mapState([
      'latitude'
    ]),
    ...mapState(['longitude']),
    // 用法 2：mapState辅助函数
    ...mapState({
      address: state => state.address
    }),
    // 用法 3：mapState辅助函数(类似于设置别名)
    ...mapState({
      address: 'address'
    }),

    // store.getter 的注入方式
    // 用法1、mapGetter 辅助函数注入调用
    ...mapGetters([
      'handleString'
    ]),
    // 用法2、通过 this.$store.getter 赋值给自定义的计算属性
    doneTodosCount () {
      return this.$store.getters.handleStringByParam(5)
    }
  },
  methods: {
    ...mapMutations([
      "RECORD_ADDRESS"
    ]),
    show() {
      this.isShow = !this.isShow;
      let latitude = "东经62度";
      let longitude = "北纬106度";
      this.RECORD_ADDRESS({latitude,longitude});
      console.log(this.latitude)
      console.log(this.longitude)
    }
  },
  created(){
    console.log(this.latitude);
    console.log(this.address);
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
