"use strict";const t=require("../../common/vendor.js"),o=require("../../sheep/index.js"),e=require("../../sheep/util/index.js"),r=require("../../sheep/api/product/spu.js"),a=require("../../sheep/api/trade/order.js"),i=require("../../sheep/hooks/useGoods.js");if(!Array){(t.resolveComponent("su-tabs")+t.resolveComponent("su-sticky")+t.resolveComponent("su-popup")+t.resolveComponent("s-goods-column")+t.resolveComponent("uni-load-more")+t.resolveComponent("s-empty")+t.resolveComponent("s-layout"))()}Math||((()=>"../../sheep/ui/su-tabs/su-tabs.js")+(()=>"../../sheep/ui/su-sticky/su-sticky.js")+(()=>"../../sheep/ui/su-popup/su-popup.js")+(()=>"../../sheep/components/s-goods-column/s-goods-column.js")+(()=>"../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js")+(()=>"../../sheep/components/s-empty/s-empty.js")+(()=>"../../sheep/components/s-layout/s-layout.js"))();const s={__name:"list",emits:["close","change"],setup(s,{emit:n}){const d=o.sheep.$platform.navbar,u=t.reactive({pagination:{list:[],total:0,pageNo:1,pageSize:6},currentSort:void 0,currentOrder:void 0,currentTab:0,curFilter:0,showFilter:!1,iconStatus:!1,keyword:"",categoryId:0,tabList:[{name:"综合推荐",list:[{label:"综合推荐"},{label:"价格升序",sort:"price",order:!0},{label:"价格降序",sort:"price",order:!1}]},{name:"销量",sort:"salesCount",order:!1},{name:"新品优先",value:"createTime",order:!1}],loadStatus:"",leftGoodsList:[],rightGoodsList:[]});let l=0,p=0,c=0;function g(t=0,o="left"){u.pagination.list[l]&&("left"===o?p+=t:c+=t,p<=c?u.leftGoodsList.push(u.pagination.list[l]):u.rightGoodsList.push(u.pagination.list[l]),l++)}function b(){e.resetPagination(u.pagination),u.leftGoodsList=[],u.rightGoodsList=[],l=0,p=0,c=0}function m(t){u.keyword=t,b(),f(u.currentSort,u.currentOrder)}function h(t){if(u.tabList[t.index].list)return u.currentTab=t.index,void(u.showFilter=!u.showFilter);u.showFilter=!1,t.index!==u.currentTab&&(u.currentTab=t.index,u.currentSort=t.sort,u.currentOrder=t.order,b(),f(t.sort,t.order))}async function f(){u.loadStatus="loading";const{code:o,data:e}=await r.SpuApi.getSpuPage({pageNo:u.pagination.pageNo,pageSize:u.pagination.pageSize,sortField:u.currentSort,sortAsc:u.currentOrder,categoryId:u.categoryId,keyword:u.keyword});0===o&&(await a.OrderApi.getSettlementProduct(e.list.map((t=>t.id)).join(",")).then((t=>{0===t.code&&i.appendSettlementProduct(e.list,t.data)})),u.pagination.list=t.lodash.concat(u.pagination.list,e.list),u.pagination.total=e.total,u.loadStatus=u.pagination.list.length<u.pagination.total?"more":"noMore",g())}function S(){"noMore"!==u.loadStatus&&(u.pagination.pageNo++,f(u.currentSort,u.currentOrder))}return t.onLoad((t=>{u.categoryId=t.categoryId,u.keyword=t.keyword,f(u.currentSort,u.currentOrder)})),t.onReachBottom((()=>{S()})),(e,r)=>t.e({a:t.o(h),b:t.p({list:u.tabList,scrollable:!1,current:u.currentTab}),c:u.iconStatus},(u.iconStatus,{}),{d:t.o((t=>u.iconStatus=!u.iconStatus)),e:t.p({bgColor:"#fff"}),f:t.f(u.tabList[u.currentTab].list,((o,e,r)=>({a:t.t(o.label),b:o.value,c:t.n({"filter-item-active":e===u.curFilter}),d:t.o((t=>{return o=e,void(u.currentSort!==u.tabList[0].list[o].sort||u.currentOrder!==u.tabList[0].list[o].order?(u.showFilter=!1,u.curFilter=o,u.tabList[0].name=u.tabList[0].list[o].label,u.currentSort=u.tabList[0].list[o].sort,u.currentOrder=u.tabList[0].list[o].order,b(),f()):u.showFilter=!1);var o}),o.value)}))),g:t.o((t=>u.showFilter=!1)),h:t.p({show:u.showFilter,type:"top",round:"10",space:t.unref(d)+38,backgroundColor:"#F6F6F6",zIndex:10}),i:u.iconStatus&&u.pagination.total>0},u.iconStatus&&u.pagination.total>0?{j:t.f(u.pagination.list,((e,r,a)=>({a:t.o((r=>t.unref(o.sheep).$router.go("/pages/goods/index",{id:e.id})),e.id),b:"bfa99b09-4-"+a+",bfa99b09-0",c:t.p({size:"lg",data:e,topRadius:10,bottomRadius:10}),d:e.id})))}:{},{k:!u.iconStatus&&u.pagination.total>0},!u.iconStatus&&u.pagination.total>0?{l:t.f(u.leftGoodsList,((e,r,a)=>({a:t.o((r=>t.unref(o.sheep).$router.go("/pages/goods/index",{id:e.id})),e.id),b:t.o((t=>g(t,"left")),e.id),c:"bfa99b09-5-"+a+",bfa99b09-0",d:t.p({size:"md",data:e,topRadius:10,bottomRadius:10}),e:e.id}))),m:t.f(u.rightGoodsList,((e,r,a)=>({a:t.o((r=>t.unref(o.sheep).$router.go("/pages/goods/index",{id:e.id})),e.id),b:t.o((t=>g(t,"right")),e.id),c:"bfa99b09-6-"+a+",bfa99b09-0",d:t.p({size:"md",topRadius:10,bottomRadius:10,data:e}),e:e.id})))}:{},{n:u.pagination.total>0},u.pagination.total>0?{o:t.o(S),p:t.p({status:u.loadStatus,"content-text":{contentdown:"上拉加载更多"}})}:{},{q:0===u.pagination.total},0===u.pagination.total?{r:t.p({icon:"/static/soldout-empty.png",text:"暂无商品"})}:{},{s:t.o(m),t:t.p({navbar:"normal",leftWidth:0,rightWidth:0,tools:"search",defaultSearch:u.keyword})})}},n=t._export_sfc(s,[["__scopeId","data-v-bfa99b09"]]);wx.createPage(n);
