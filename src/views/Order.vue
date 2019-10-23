<template>
    <div>

    </div>
</template>

<script>
    export default{
      created(){
        let that= this;
        that.$store.commit('changeNav', "订单")
      },
    }
</script>

<style scoped>
</style>
