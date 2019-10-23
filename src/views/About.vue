<template>
  <div class="about">
    <div class="shopCar">
      <div :class="selectIndex == index?'shopCar-list':'shopCar-listNo'" v-for="(item,index) in dataList" @click="toPushBox(index)">
          {{item.name}}
      </div>
    </div>
    <shopcars v-show="isAddshopcars==true"></shopcars>
    <filters v-show="isAddFilter==true" :filterData="filterData"></filters>
  </div>
</template>
<script>
  import shopcars from '../components/ShopCar.vue'
  import filters from '../components/Filter.vue' /*条件筛选*/
  export default {
    components:{
        shopcars:shopcars,
        filters:filters
    },
    data(){
        return{
          dataList:[
            {name:"仿购物车"},
            {name:"仿筛选菜单"},
            {name:"仿其他"}
          ],
          isAddFilter:false,
          isAddshopcars:false,
          filterData:'',
          currenSelect:'',
          selectIndex:-1,
        }
    },
    created(){
      let that= this;
      that.$store.commit('changeNav', "我的")
    },
    methods:{
       /*获取相关组件*/
      toPushBox(index){
          this.selectIndex = index;
          switch (index){
            case 0:
            this.isAddFilter = false;
            this.isAddshopcars = true;
            break;
            case 1:
              this.isAddFilter = true;
              this.isAddshopcars = false;
              break;
            case 2:

              break;
          }
      },
    }
  }
</script>
<style scoped lang="less">
  @publicWidth:100%;
  .about{
    width: @publicWidth;
    height: auto;
  }
  .shopCar{
    width: 60%;
    height: 60px;
    position: relative;
    margin: 0 auto;
    border-radius: 10px;
    .shopCar-list{
      width: @publicWidth;
      line-height: 60px;
      background:blanchedalmond;
    }
    .shopCar-listNo{
      width: @publicWidth;
      line-height: 60px;
    }
  }
</style>
