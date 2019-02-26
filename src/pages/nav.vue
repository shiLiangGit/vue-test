<template>
    <div class="navbar">{{nav}}
    <h1>2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222</h1>

    </div>
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
    h1{
         width: 30px;
         overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
}
</style>
