<template>
  <div class="home">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <div class="home-tt">
      <div class="home-ttlf">扫码</div>
      <div class="home-ttct">
        <div class="home-search"><van-icon name="search" />铁路E卡通</div>
      </div>
      <div class="home-ttrt">信息</div>
    </div>
    <div class="home-ticket">
      <div class="home-tc-adress">
        <div class="home-ad-lf">
          {{$store.state.adreesLf}}
        </div>
        <div class="home-ad-ct" @click="changeAddress">
          <van-icon name="exchange" />
        </div>
        <div class="home-ad-rt">
          {{$store.state.addreeRt}}
        </div>
      </div>
      <div class="home-date">
        <span>出发日期</span>
        <span>{{$store.state.dateString}}</span>
        <span>{{$store.state.XqString}}</span>
      </div>

    </div>

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
  data(){
      return{
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ],
        chooseAddress:true,
    }
  },
  created(){
    let that= this;
    that.$store.commit('changeNav', "首页");

  },
  mounted(){
      let that = this;
      var date = new Date();
      var dataString = date.getMonth()+1+'月'+date.getDate()+'日';
      that.$store.state.dateString = dataString;
      var number = date.getDay();
      switch (number){
        case 0:
          that.$store.state.XqString = "周天";
          break;
        case 1:
          that.$store.state.XqString = "周一";
          break;
        case 2:
          that.$store.state.XqString = "周二";
          break;
        case 3:
          that.$store.state.XqString = "周三";
          break;
        case 4:
          that.$store.state.XqString = "周四";
          break;
        case 5:
          that.$store.state.XqString = "周五";
          break;
        case 6:
          that.$store.state.XqString = "周六";
          break;
      }


  },

  methods:{
/*      交换地址*/
    changeAddress(){
        let that = this;
        that.chooseAddress != that.chooseAddress;
        if(that.chooseAddress){
          that.$store.commit({
            type:"increment",
            lfName:"上海",
            rtName:"北京"
          });
          that.chooseAddress = false;
        }else{
          that.$store.commit({
            type:"increment",
            lfName:"北京",
            rtName:"上海"
          });
          that.chooseAddress = true;
        }

    }
  }
}
</script>
<style lang="less" scoped >
  .van-swipe{
    width: 100%;
    height: 360px;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .van-icon{
    font: 40px/1 "vant-icon";
    vertical-align: middle;
    margin-left: 20px;
    margin-right: 10px;
  }
  .home-tt{
    height: 90px;
    width: 100%;
    line-height: 90px;
    font-size: 24px;
    display: flex;
    z-index: 10;
    position: fixed;
    top:0;
    background: rgba(204,204,204,0.3);
    .home-ttlf{
      flex: 0 0 120px;
    }
    .home-ttct{
      flex: auto;
      text-align: left;
      .home-search{
        width: 100%;
        height: 70px;
        border-radius: 30px;
        position: relative;
        top:50%;
        background: rgba(255,255,255,0.8);
        margin-top: -35px;
        line-height: 70px;
        color: #ccc;
      }
    }
    .home-ttrt{
      flex: 0 0 120px;
    }
  }
  .home-ticket{
    width: 90%;
    position: relative;
    top: -114px;
    height: 750px;
    margin: 0 auto;
    background: #fff;
    border-radius: 10px;
    box-shadow:0px 0px 20px rgba(0, 0, 0, 0.3);

    .home-tc-adress{
      width: 90%;
      height: 150px;
      line-height: 150px;
      box-shadow: inset 0px -1px 0px 0px rgba(0, 0, 0, 0.2) ;
      margin: 0 auto;
      display: flex;
      font-size: 36px;
      font-weight: bold;
      .home-ad-lf{
        flex: 1
      }
      .home-ad-ct{
        flex: 1;
      }
      .home-ad-rt{
        flex: 1;
      }
    }
    .home-date{
      width: 90%;
      height: 130px;
      line-height: 130px;
      box-shadow: inset 0px -1px 0px 0px rgba(0, 0, 0, 0.2);
      margin: 0 auto;
      text-align: left;
      text-indent: 1em;
      span:nth-of-type(1){
        font-size: 24px;
        color: rgba(0,0,0,0.5);
      }
      span:nth-of-type(2){
        font-size: 40px;
        margin-left: 20px;
      }
      span:nth-of-type(3){
        font-size: 26px;
        margin-left: 20px;
        color: rgba(0,0,0,0.5);
      }
    }
  }

</style>
