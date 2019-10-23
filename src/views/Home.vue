<template>
  <div class="home">

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  created(){
    let that= this;
    that.$store.commit('changeNav', "首页")
  },
}
</script>
