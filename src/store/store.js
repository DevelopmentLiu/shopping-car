/**
 * Created by john on 2019/10/22.
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  navData:[
    {navName:"首页",isActive:false},
    {navName:"出行服务",isActive:false},
    {navName:"订单",isActive:false},
    {navName:"铁路会员",isActive:false},
    {navName:"我的",isActive:false},
  ]
};

const mutations = {
  changeNav(state,name){
    state.navData.forEach(function (index) {
      if(index.navName == name){
        index.isActive = true;
      }else {
        index.isActive = false;
      }
    });

  }
}

export default new Vuex.Store({
  state,
  mutations
});
