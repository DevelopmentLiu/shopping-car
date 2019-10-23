<template>
    <div id="shop" class="shop">
      <div class="top">
        <div class="top-lf">
          <span>购物车</span>
          <span>共10件宝贝</span>
        </div>
        <div class="top-rt" @click="changeName()">{{management}}</div>
      </div>
      <div class="center" v-for="(obj,keys) in dataList" :key="keys">
        <div :class="selectIndex== keys?'center-t':'center-t'" >
          <span :class="[obj.choose==true?'active':'']" @click="shopSum(keys)"></span>
          <span>{{obj.name}} ></span>
        </div>
        <div class="center-content" v-for="item in obj.dataList">
          <div class="ct-image">
            <span :class="[item.isChange==true?'active':'']"></span>
            <img src="../assets/s.jpg"/>
          </div>
          <div class="ct-description">
            <div class="des-t">{{item.cname}}</div>
            <div class="des-attribute">{{item.description}}</div>
          </div>
          <div class="ct-foot">
            <div class="ct-price">￥ {{item.price}}</div>
            <div class="ct-calculate">
              <div class="ct-caList">+</div>
              <div class="ct-caList">
                <input type="number" :value="item.num"/>
              </div>
              <div class="ct-caList">-</div>
            </div>
          </div>
        </div>
      </div>
      <div class="footers">
        <div class="ft-center">
          <div class="ft-ct-lf">
            <span :class="[isActive==true?'active':'']" @click="chooseBox"></span>
            <span>全选</span>
          </div>
          <div class="ft-ct-rt" v-show="isUpdate==true">
            <div class="ft-ct-hj">合计：<span>￥{{totalPrice}}</span></div>
            <div class="ft-ct-js">结算(0)</div>
          </div>
          <div class="ft-ct-rt" v-show="isUpdate==false">
            <div class="ft-ct-sc">删除</div>
          </div>
        </div>
      </div>
      <!--      渐隐渐出导航条-->
      <transition name="fade">
        <div class="nav" v-show="navShow">
          <div class="nav-title">购物车（10）</div>
          <div class="nav-right">管理</div>
        </div>
      </transition>
    </div>
</template>

<script>
  import shop from "../shop.json"
    export default{
        data(){
            return{
              management:"管理",
              dataList:shop.shopList, //JSON 模拟数据赋值
              totalPrice:0,//总价
              navShow:false,//是否显示导航条
              isChangeName:false,//修改名称
              isUpdate:true,  //修改为结算或者删除
              isActive:false,   //全选是否选中
              isChangeQx:true,
              selectIndex:-1,//设置每一个店铺是否选中
              shopSelect:true,
            }
        },
      mounted(){
/*        监听滚动条*/
        document.getElementById('shop').addEventListener('scroll', this.handleScroll);
        console.log(this.dataList)
      },
      methods:{
/*        判断隐藏还是显示滚动条*/
        handleScroll(){
          let oldTop = 0;
          let top = document.getElementById('shop').scrollTop;
          if(top > oldTop){
              this.navShow = true;
          }else {
              this.navShow = false;
          }
          oldTop = top;
        },
/*        更改名称*/
        changeName(){
            let that = this;
            that.isChangeName = !that.isChangeName;
            if(that.isChangeName){
              that.management = "完成";
              that.isUpdate = false;
            }else {
              that.management = "管理";
              that.isUpdate = true;
            }
        },
/*        全选事件*/
        chooseBox(){
          let that = this;
          that.isChangeQx = !that.isChangeQx;
          if(that.isChangeQx){
            that.isActive = false;
            that.dataList.forEach(function (index) {
              index.choose = false;
              index.dataList.forEach(function (zindex) {
                zindex.isChange = false;
              })
            });
          }else {
            that.isActive = true;
            that.dataList.forEach(function (index) {
              index.choose = true;
              index.dataList.forEach(function (zindex) {
                zindex.isChange = true;
              })
            });
          }
        },
/*        点击店铺选中*/
        shopSum(index){
            let that = this;
            that.selectIndex = index;
            that.shopSelect = !that.shopSelect;
            if(that.shopSelect){
              that.dataList[index].choose = false;
              that.dataList[index].dataList.forEach(function (id) {
                id.isChange = false;
              })
              console.log(111111)
            }else {
              that.dataList[index].choose = true;
              that.dataList[index].dataList.forEach(function (id) {
                id.isChange = true;
              })

              console.log(22222)
            }


        }
      },
    }
</script>

<style scoped lang="less">
  @width-w:100%;@white:#fff;@height-p:120px;
  .shop{
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    background: rgb(240,240,240);
    .top{
      position: relative;
      top:0;
      width:  @width-w;
      height: 300px;
      background: rgb(78,68,220);

      .top-lf{
        position: relative;
        left: 0;
        top:0;
        width: 200px;
        height: @height-p;
        line-height: @height-p;

        span{
          position: absolute;
          top:0;
          left: 0;
          width: 100%;
          line-height: 40px;
          color: cadetblue;
          color: @white;
        }
        span:nth-of-type(1){
          font-size: 40px;
          top: 25px;
        }
        span:nth-of-type(2){
          top: 80px;
          font-size: 12px;
         }
      }
      .top-rt{
        position: absolute;
        top:0;
        right: 0;
        width: 100px;
        height: @height-p;
        line-height: @height-p;
        color: @white;
        font-size: 30px;
      }
    }
  }
  .shop::-webkit-scrollbar{width: 0};
  .center{
    width: 95%;
    position: relative;
    top: -150px;
    left: 50%;
    transform: translate(-50%,0);
    border-radius: 20px;
    background: @white;
    height: auto;
    margin-bottom: 20px;
    padding-bottom: 30px;
    .center-t{
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: left;
      font-size: 20px;
      padding: 20px 0;
      span:nth-of-type(1){
        display: inline-block;
        width: 26px;
        height: 26px;
        border: 1px solid;
        border-radius: 50%;
        vertical-align: -4px;
        margin-left: 20px;
      }
      span:nth-of-type(2){
       margin-left: 10px;
        font-size: 30px;
      }
      .active{
        background: orangered;
        border: 1px solid lightsteelblue !important;
      }
    }
    .center-content{
      width: 100%;
      height: 240px;
      position: relative;
      top:10px;
      background: #fff;
      .ct-image{
        width: 260px;
        height: 180px;
        position: relative;
        text-align: left;
        span{
          display: inline-block;
          width: 26px;
          height: 26px;
          border: 1px solid;
          border-radius: 50%;
          vertical-align: 70px;
          margin-left: 20px;
        }
        img{
          width: 180px;
          height: 180px;
          border-radius: 10%;
          margin-left: 15px;
        }
        .active{
          background: orangered;
          border: 1px solid lightsteelblue !important;
        }
      }
      .ct-description{
        width: 440px;
        height: 24vw;
        position: absolute;
        right: 0;
        top: 0;
        text-align: left;
        .des-t{
          width: 100%;
          height: auto;
          font-size: 28px;
          margin-top: 15px;
        }
        .des-attribute{
          font-size: 24px;
          color: #A9A9A9;
          width: 100%;
          margin-top: 20px;
        }
      }
      .ct-foot{
        position: absolute;
        bottom: 10px;
        width: 100%;
        height: 50px;
        .ct-price{
          position: absolute;
          left: 270px;
          display: inline-block;
          font-size: 30px;
          color: orangered;
          line-height: 50px;
        }
        .ct-calculate{
          width: 200px;
          position: absolute;
          right: 4%;
          line-height: 46px;
          display: flex;
          .ct-caList{
            flex: 1;
            border-top: 1px solid #A9A9A9;
            border-bottom: 1px solid #A9A9A9;
            input{
              width: 100%;
              background: none;
              outline: none;
              border: none;
              text-align: center;
            }
          }
          .ct-caList:nth-of-type(1) {
            border-left: 1px solid #A9A9A9;
            border-right: 1px solid #A9A9A9;
            border-bottom-left-radius: 8px;
            border-top-left-radius: 8px;
            flex: 0 0 55px;
            color: #A9A9A9;
          }
          .ct-caList:nth-of-type(3) {
            border-left: 1px solid #A9A9A9;
            border-right: 1px solid #A9A9A9;
            border-bottom-right-radius: 8px;
            border-top-right-radius: 8px;
            flex: 0 0 55px;
            color: #A9A9A9;
          }
        }
      }

    }
  }
  .footers{
    position: fixed;
    bottom: 0;
    height: 100px;
    width: 100%;
    background: #fff;
    .ft-center{
      width: 95%;
      margin: 0 auto;
      height: 100%;
      .ft-ct-lf{
        position: relative;
        width: 200px;
        height: 100px;
        line-height: 100px;
        text-align: left;
        span:nth-of-type(1){
          display: inline-block;
          width: 26px;
          height: 26px;
          border: 1px solid;
          border-radius: 50%;
          vertical-align: -4px;
          margin-left: 20px;
        }
        span:last-of-type{
          margin-left: 10px;
          font-size: 28px;
        }
        .active{
          background: orangered;
          border: 1px solid lightsteelblue !important;
        }
      }
      .ft-ct-rt{
        position: absolute;
        width: 500px;
        height: 100px;
        right: 0;
        top:0;
        .ft-ct-hj{
          position: absolute;
          left: 0;
          top:0;
          width: 260px;
          font-size: 26px;
          text-align: right;
          span{
            line-height: 100px;
            color: orangered;
          }
        }
        .ft-ct-js{
          position: absolute;
          right: 20px;
          top:50%;
          transform: translateY(-50%);
          width: 200px;
          background: orangered;
          height: 70px;
          line-height: 70px;
          color: @white;
          border-radius: 60px;
          font-size: 30px;
        }
        .ft-ct-sc{
          position: absolute;
          right: 20px;
          top:50%;
          transform: translateY(-50%);
          width: 200px;
          border:1px solid orangered;
          height: 70px;
          line-height: 70px;
          color: orangered;
          border-radius: 60px;
          font-size: 30px;
        }
      }
    }
  }
  .nav{
    position: fixed;
    top:0;
    height: 100px;
    width: 100%;
    background: rgb(78,68,220);
    color: @white;
    .nav-title{
      font-size: 32px;
      width: 280px;
      margin: 0 auto;
      height: 100px;
      line-height: 100px;
    }
    .nav-right{
      position: absolute;
      top: 0;
      right: 20px;
      padding: 0 20px;
      height: 100px;
      line-height: 100px;
      font-size: 28px;
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }
</style>
