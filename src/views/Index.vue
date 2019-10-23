<template>
    <div>
      <div id="nav">
        <div class="navList" v-for="(item,index) in navData" :key="index" @click="chooseNav(index,item.navName)">
          <div :class="item.isActive == true?'nav-activett':'nav-tt'">{{item.navName}}</div>
          <img :src="navImg(index)"/>
        </div>
      </div>
      <router-view/>
    </div>
</template>

<script>
  import { mapState } from 'vuex'
    export default{
        data(){
            return{

            }
        },
      created(){

      },
      computed: {
        ...mapState(['navData'])
      },
      methods:{
/*        判断是否选中img赋值*/
        navImg(tag){
          let that = this;
          switch(tag){
            case 0:
                if(that.navData[0].isActive === false){
                  return require("../assets/iconfont/icon1.png");
                }else {
                  return require("../assets/iconfont/icon1active.png");
                }
              break;
            case 1:
              if(that.navData[1].isActive === false){
                return require("../assets/iconfont/icon2.png");
              }else {
                return require("../assets/iconfont/icon2active.png");
              }
              break;
            case 2:
              if(that.navData[2].isActive === false){
                return require("../assets/iconfont/icon3.png");
              }else {
                return require("../assets/iconfont/icon3acitve.png");
              }
              break;
            case 3:
              if(that.navData[3].isActive === false){
                return require("../assets/iconfont/icon4.png");
              }else {
                return require("../assets/iconfont/icon4acitve.png");
              }
              break;
            case 4:
              if(that.navData[4].isActive === false){
                return require("../assets/iconfont/icon5.png");
              }else {
                return require("../assets/iconfont/icon5acitve.png");
              }
              break;
          }
        },
/*        选中导航栏*/
        chooseNav(idx,tt){
            let that = this;
            switch(idx){
              case 0:
                  that.$router.push({path:"/home"});
                break;
              case 1:
                  that.$router.push({path:"/service"});
                break;
              case 2:
                  that.$router.push({path:"/order"});
                break;
              case 3:
                  that.$router.push({path:"/member"});
                break;
              case 4:
                  that.$router.push({path:"/about"});
                break;
            }

        }
      }
    }
</script>

<style lang="less" scoped>
  #nav {
    height: 90px;
    width: 100%;
    position: fixed;
    bottom: 0;
    display: flex;
  }
  .navList{
    flex: 1;
    position: relative;
    .nav-tt{
      font-size: 24px;
      position: absolute;
      bottom: 0;
      width: 100%;
      text-align: center;
    }
    .nav-activett{
      font-size: 24px;
      position: absolute;
      bottom: 0;
      width: 100%;
      text-align: center;
      color:#1296db;
    }
    img{
      width: 50px;
      height: 50px;
    }
  }
</style>
