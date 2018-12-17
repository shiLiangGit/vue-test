<template>
    <div class="navbar">{{nav}}</div>
</template>
<script>
export default {
    data(){
        return {
            nav:"侧边栏组件"
        }
    }
}
</script>
<style>
    .navbar{
        flex: 0 0 100px;
        border:1px solid red;
    }
</style>
