<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
  body,html{
    margin: 0;
  }
  p,span,input{
    display: inline;
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
