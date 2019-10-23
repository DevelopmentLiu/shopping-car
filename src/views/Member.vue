<template>
    <div>

    </div>
</template>

<script>
    export default{
      created(){
        let that= this;
        that.$store.commit('changeNav', "铁路会员")
      },
    }
</script>

<style scoped>
</style>
