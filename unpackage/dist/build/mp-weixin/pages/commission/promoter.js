"use strict";const t=require("../../common/vendor.js"),e=require("../../sheep/index.js"),a=require("../../sheep/util/index.js"),n=require("../../sheep/api/trade/brokerage.js");if(!Array){(t.resolveComponent("uni-load-more")+t.resolveComponent("s-layout"))()}Math||((()=>"../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js")+(()=>"../../sheep/components/s-layout/s-layout.js"))();const o={__name:"promoter",setup(o){const i=["周排行","月排行"],r=t.reactive({currentTab:0,times:[],pagination:{list:[],total:0,pageNo:1,pageSize:10},loadStatus:""});async function s(){r.loadStatus="loading";const{code:e,data:a}=await n.BrokerageApi.getBrokerageUserRankPageByUserCount({pageNo:r.pagination.pageNo,pageSize:r.pagination.pageSize,"times[0]":r.times[0],"times[1]":r.times[1]});0===e&&(r.pagination.list=t.lodash.concat(r.pagination.list,a.list),r.pagination.total=a.total,r.loadStatus=r.pagination.list.length<r.pagination.total?"more":"noMore")}function u(){"noMore"!==r.loadStatus&&(r.pagination.pageNo++,getList())}function g(){let t;t=0===r.currentTab?function(){const t=new Date,e=t.getDay();return[new Date(t.getFullYear(),t.getMonth(),t.getDate()-e,0,0,0),new Date(t.getFullYear(),t.getMonth(),t.getDate()+(6-e),23,59,59)]}():function(){const t=new Date,e=t.getFullYear(),a=t.getMonth(),n=new Date(e,a,1,0,0,0),o=new Date(e,a+1,1),i=new Date(o.getTime()-1);return[n,i]}(),r.times=[c(t[0]),c(t[1])]}function c(t){return e.sheep.$helper.timeFormat(t,"yyyy-mm-dd hh:MM:ss")}return t.onReachBottom((()=>u())),t.onLoad((function(){g(),s()})),(e,n)=>t.e({a:t.f(i,((e,n,o)=>({a:t.t(e),b:t.n(r.currentTab===n?"active":""),c:n,d:t.o((t=>function(t){r.currentTab!==t&&(r.currentTab=t,a.resetPagination(r.pagination),g(),s())}(n)),n)}))),b:t.f(r.pagination.list,((e,a,n)=>t.e({a:a<3},a<3?{b:t.t(a+1),c:e.avatar,d:t.t(e.brokerageUserCount),e:t.t(e.nickname)}:{},{f:a}))),c:t.f(r.pagination.list,((e,a,n)=>t.e({a:a>2},a>2?{b:t.t(a+1),c:e.avatar,d:t.t(e.nickname),e:t.t(e.brokerageUserCount)}:{},{f:a}))),d:r.pagination.total>0},r.pagination.total>0?{e:t.o(u),f:t.p({status:r.loadStatus,"content-text":{contentdown:"上拉加载更多"}})}:{},{g:t.p({title:"推广人排行榜"})})}},i=t._export_sfc(o,[["__scopeId","data-v-56f59b9a"]]);wx.createPage(i);
