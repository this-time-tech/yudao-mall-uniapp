"use strict";const t=require("../../common/vendor.js"),e=require("../../sheep/index.js"),n=require("../../sheep/api/trade/brokerage.js"),a=require("../../sheep/hooks/useGoods.js"),o=require("../../sheep/util/index.js");if(!Array){(t.resolveComponent("emptyPage")+t.resolveComponent("uni-load-more")+t.resolveComponent("s-layout"))()}Math||((()=>"../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js")+(()=>"../../sheep/components/s-layout/s-layout.js"))();const i={__name:"commission-ranking",setup(i){const s=["周排行","月排行"],r=t.reactive({currentTab:0,position:0,pagination:{list:[],total:0,pageNo:1,pageSize:10},loadStatus:""});async function g(){const{code:e,data:a}=await n.BrokerageApi.getBrokerageUserChildSummaryPageByPrice({pageNo:r.pagination.pageNo,pageSize:r.pagination.pageSize,"times[0]":r.times[0],"times[1]":r.times[1]});0===e&&(r.pagination.list=t.lodash.concat(r.pagination.list,a.list),r.pagination.total=a.total,r.loadStatus=r.pagination.list.length<r.pagination.total?"more":"noMore",1===r.pagination.pageNo&&async function(){const{code:t,data:e}=await n.BrokerageApi.getRankByPrice({times:r.times});if(0!==t)return;r.position=e}())}function p(t){return e.sheep.$helper.timeFormat(t,"yyyy-mm-dd hh:MM:ss")}function c(){let t;t=0===r.currentTab?function(){const t=new Date,e=t.getDay();return[new Date(t.getFullYear(),t.getMonth(),t.getDate()-e,0,0,0),new Date(t.getFullYear(),t.getMonth(),t.getDate()+(6-e),23,59,59)]}():function(){const t=new Date,e=t.getFullYear(),n=t.getMonth(),a=new Date(e,n,1,0,0,0),o=new Date(e,n+1,1),i=new Date(o.getTime()-1);return[a,i]}(),r.times=[p(t[0]),p(t[1])]}function l(){"noMore"!==r.loadStatus&&(r.pagination.pageNo++,g())}return t.onLoad((function(){c(),g()})),t.onReachBottom((()=>l())),(e,n)=>t.e({a:r.position},r.position?{b:t.t(r.position)}:{},{c:t.f(s,((e,n,a)=>({a:t.t(e),b:t.n(r.currentTab===n?"font-color":""),c:n,d:t.o((t=>async function(t){r.currentTab=t,o.resetPagination(r.pagination),c(),g()}(n)),n)}))),d:t.f(r.pagination.list,((e,n,o)=>t.e({a:n<=2},n<=2?{b:"/static/images/medal0"+(n+1)+".png"}:{c:t.t(n+1)},{d:e.avatar,e:t.t(e.nickname),f:t.t(t.unref(a.fen2yuan)(e.brokeragePrice)),g:n}))),e:0===r.pagination.list.length},0===r.pagination.list.length?{f:t.p({title:"暂无排行～"})}:{},{g:r.pagination.total>0},r.pagination.total>0?{h:t.o(l),i:t.p({status:r.loadStatus,"content-text":{contentdown:"上拉加载更多"}})}:{},{j:t.p({title:"佣金排行榜"})})}},s=t._export_sfc(i,[["__scopeId","data-v-fd201de6"]]);wx.createPage(s);
