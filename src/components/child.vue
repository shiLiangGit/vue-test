<template>
    <div>
        <input type="text" v-model="nowData" @input="textChange">
        {{newData}}
    </div>
</template>
<script>
export default {
    props:{
        listen: {type:Object}
        },
    data(){
        return {
            nowData:this.listen.value
        }
    },
    computed:{
        newData(){
            return (this.nowData + '数据监听');
        }
    },
    methods:{
        textChange(){
            this.$emit("update:listen",{value:this.newData});
        }
    }
}
</script>

