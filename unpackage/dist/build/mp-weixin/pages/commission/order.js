"use strict";const e=require("../../common/vendor.js"),t=require("../../sheep/index.js"),o=require("../../sheep/util/index.js"),a=require("../../sheep/api/trade/brokerage.js"),s=require("../../sheep/hooks/useGoods.js");if(!Array){(e.resolveComponent("su-tabs")+e.resolveComponent("su-sticky")+e.resolveComponent("s-empty")+e.resolveComponent("uni-load-more")+e.resolveComponent("s-layout"))()}Math||((()=>"../../sheep/ui/su-tabs/su-tabs.js")+(()=>"../../sheep/ui/su-sticky/su-sticky.js")+(()=>"../../sheep/components/s-empty/s-empty.js")+(()=>"../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js")+(()=>"../../sheep/components/s-layout/s-layout.js"))();const n={__name:"order",setup(n){e.useCssVars((t=>({"0c7a2d8f":e.unref(r)})));const i=2*t.sheep.$platform.device.statusBarHeight,r=t.sheep.$url.css("/static/img/shop/user/withdraw_bg.png");e.onPageScroll((e=>{p.scrollTop=e.scrollTop<=100}));const p=e.reactive({totals:0,scrollTop:!1,currentTab:0,loadStatus:"",pagination:{list:[],total:0,pageNo:1,pageSize:8}}),l=[{name:"全部",value:-1},{name:"待结算",value:0},{name:"已结算",value:1}];function u(e){o.resetPagination(p.pagination),p.currentTab=e.index,c()}async function c(){p.loadStatus="loading";const t=l[p.currentTab],o={pageSize:p.pagination.pageSize,pageNo:p.pagination.pageNo,bizType:1,status:t.value};t.value<0&&delete o.status;const{code:s,data:n}=await a.BrokerageApi.getBrokerageRecordPage(o);0===s&&(p.pagination.list=e.lodash.concat(p.pagination.list,n.list),p.pagination.total=n.total,p.loadStatus=p.pagination.list.length<p.pagination.total?"more":"noMore",0===p.currentTab&&(p.totals=n.total))}function g(){"noMore"!==p.loadStatus&&(p.pagination.pageNo++,c())}return e.onLoad((()=>{c()})),e.onReachBottom((()=>{g()})),(o,a)=>e.e({a:e.t(p.totals),b:e.s({marginTop:"-"+Number(i+88)+"rpx",paddingTop:Number(i+108)+"rpx"}),c:e.o(u),d:e.p({list:l,scrollable:!1,current:p.currentTab}),e:e.p({bgColor:"#fff"}),f:e.f(p.pagination.list,((o,a,n)=>({a:e.t(o.bizId),b:e.t(0===o.status?"待结算":1===o.status?"已结算":"已取消"),c:e.t(e.unref(s.fen2yuan)(o.price)),d:e.t(o.title),e:e.t(e.unref(t.sheep).$helper.timeFormat(o.createTime,"yyyy-mm-dd hh:MM:ss")),f:o}))),g:0===p.pagination.total},0===p.pagination.total?{h:e.p({icon:"/static/order-empty.png",text:"暂无订单"})}:{},{i:p.pagination.total>0},p.pagination.total>0?{j:e.o(g),k:e.p({status:p.loadStatus,"content-text":{contentdown:"上拉加载更多"}})}:{},{l:e.n(p.scrollTop?"order-warp":""),m:e.s(o.__cssVars()),n:e.p({title:"分销订单",navbar:"inner"})})}},i=e._export_sfc(n,[["__scopeId","data-v-4f69bb0b"]]);n.__runtimeHooks=1,wx.createPage(i);
