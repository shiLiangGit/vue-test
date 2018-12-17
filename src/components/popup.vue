<template>
    <transition name="pop">
        <div class="popup" v-show="showPop">
            <span @click="close">我是弹窗测试组件哦！</span>
        </div>
    </transition>
</template>
<script>
export default {
    props:['showPop'],
    data(){
        return{
            
        }
    },
    methods:{
        close(){
            this.$emit("update:showPop",false);
        }
    }
}
</script>
<style>
    .popup{
        background:rgba(0,0,0,0.6);
        color: blue;
        transition:all 3s;
    }
    .pop-enter,.pop-leave-to{
        opacity: 0;
        transform:translate(0,-100px);
        color: red;
        background: rgba(0,0,0,0);
    }
    .pop-enter-to,.pop-leave{
        opacity: 1;
        transform:translate(0,0);
    }
</style>


