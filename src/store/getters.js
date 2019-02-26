
// 1、getter 也就类似于组件中抽离出的公共计算属性，项目下的所有组件均可调用。
// 2、在组件中最方便的就是通过辅助函数 ...mapGetters 注入到组件的computed属性里，在dom中调用渲染即可
export default {
    handleString: state => {
        return state.address.substring(0,3);
    },
    handleStringByParam: state => num => {
        return state.address.substring(0,num);
    }
}