<template>
    <div>

    </div>
</template>

<script>
    export default{
      data(){
        return{

        }
      },
      created(){
        let that= this;
        that.$store.commit('changeNav', "出行服务")
      },
      computed:{

      }
    }
</script>

<style scoped>
</style>
