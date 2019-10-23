<template>
  <div class="filter-box">
    <div class="flex-row">
      <div class="flex-row-list"  v-for="(v, k) in missBoxData" :key="k" :class="filterIndex==k? 'active':'noActive'" @click="itemClicked(k)">
        {{v.name}}
        <span id="rowList"></span>
      </div>
    </div>
    <div id="filter-missBox" class="filter-missBox" v-show="isleaveOut">
        <div v-show="filterIndex > -1 " class="filter-missBox-list" v-for="(b, k) in missBoxData[missIndex].data" :key="k" @click="selectItem(k,b.title)">
           <div :class="missListIndex == k?'missActive':''" > {{b.title}}</div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

        missBoxData: [
          {
            name: "文化",
            data: [{title: "小学"}, {title: "初中"}, {title: "高中"}, {title: "大学"}, {title: "硕士"}, {title: "博士"}]
          },
          {
            name: "年龄",
            data: [{title: "幼儿"}, {title: "儿童"}, {title: "青年"}, {title: "中年"}, {title: "老年"}]
          },
          {
            name: "职位",
            data: [{title: "初级"}, {title: "中级"}, {title: "高级"}, {title: "大牛级"}]
          },
          {
            name: "排序",
            data: [{title: "正序"}, {title: "倒叙"}]
          },
        ],

        // 当前点击选中的筛选类目
        filterIndex: -1,
        // 是否展开筛选项
        filterShow: false,
        //获取数组下标为0的集合，不能为-1
        missIndex:0,
        //当前点击选中的二级类目
        missListIndex: -1,
        // 是否隐藏二级列表
        isleaveOut:true,
        //已选中的项
        filterSelect:[],
      }
    },
    // filterData:所有的数据(必填参数)   currenSelect:已选在数据(可选参数)
    props: ['filterData', 'currenSelect'],
    onLoad() {

      var total = this.filterData;
      console.log(total);
      if (total) {
        this.data = this.filterData;
        // 初始化默认选中的选项
        total.forEach(element => {
          var key = element['key'];
          console.log(key);
          var value = element['options'] ? element['options'][0]["key"]: "";
          this.filterSelect[key] = value;
        });
      }
    },
    mounted(){
        var that = this;
        that.missBoxData.forEach(function (index) {
           index.data.push({title:index.name})
        })
    },
    methods: {
      // 筛选条目被点击
      itemClicked(k) {
        this.filterIndex = k;
        this.missIndex = k;
        this.missListIndex = -1;
        this.isleaveOut = true;
      },

      // 选中了某一个选项
      selectItem(kk,title) {
          let that = this;
          that.missListIndex = kk;
          var fIndex = that.filterIndex;
          that.missBoxData[fIndex].name  = title;
          that.isleaveOut = false;

          that.filterSelect = [];
          that.missBoxData.forEach(function (index) {
             that.filterSelect.push(index.name)
          });
          for(var i=0;i<that.filterSelect.length;i++){
            if(that.filterSelect[i] == "正序"){
              that.filterSelect[i] = that.filterSelect[i].replace("正序",'1');
            }else if(that.filterSelect[i] == "倒叙"){
                that.filterSelect[i] = that.filterSelect[i].replace("倒叙",'0');
            }
          }
      },
    }
  }
</script>

<style scoped lang="less">
  .filter-box{
    position: fixed;
    width: 100%;
    top:30%;
    height: 500px;
    background: blanchedalmond;

    .flex-row{
      position: relative;
      width: 100%;
      line-height: 90px;
      display: flex;
      justify-content: flex-start;
      background: gainsboro;
      .flex-row-list{
        flex: 0 0 180px;
        span{
          display: inline-block;
          width: 50px;
          height: 50px;
          vertical-align: middle;
          margin-left: -5px;
        }
      }
      .active{
        background: cornflowerblue;
        color: #fff;
        span{
          background: url("../assets/arrow_up.png") no-repeat;
          background-size: 100% 100%;
        }
      }
      .noActive{
        span{
          background: url("../assets/arrow_down.png") no-repeat;
          background-size: 100% 100%;
        }
      }
    }
    .filter-missBox{
      position: relative;
      width: 100%;
      height: 310px;
      overflow-x: hidden;
      overflow-y: scroll;
      .filter-missBox-list{
        width: 100%;
        background: #fff;
        font-size: 16px;
        line-height: 80px;
        text-align: left;
        text-indent: 3em;
        position: relative;
        &:after {
          content: '';
          position: absolute;
          bottom: 0px;
          top: auto;
          left: 40px;
          height: 1px;
          width: 90%;
          background-color: #EBEBEB;
        }
        .missActive{
          background: #EBEBEB;
        }
      }
    }
    .filter-missBox::-webkit-scrollbar { width: 0 !important }

  }


</style>
