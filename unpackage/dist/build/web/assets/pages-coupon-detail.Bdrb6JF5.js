import{v as o,o as s,aq as t,r as a,e,f as n,w as c,a5 as i,j as l,k as u,u as p,s as d,p as r,t as m,y as g,g as f,l as y,m as _,F as b,a6 as k,q as w,i as S,C as h,D as j}from"./index-BYbmVHYF.js";import{_ as x,a as T}from"./uni-collapse.BgQLUJpc.js";import{_ as C}from"./su-tabs.BDGqlBG6.js";import{_ as I}from"./su-sticky.J63v9NrQ.js";import{_ as v}from"./s-goods-column.BMPRB1aK.js";import{_ as M}from"./uni-load-more.7Sj0orxA.js";import{_ as z}from"./s-empty.tLh6VNZu.js";import{S as F}from"./s-layout.B9Wf0wyf.js";import{f as $}from"./useGoods.BAFIflfD.js";import{S as N}from"./spu.DkDzSSyF.js";import{C as P}from"./category.Ce67rNr2.js";import{r as q}from"./index.DEmjmW11.js";import{_ as B}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{l as E}from"./lodash.default.pbM9n79J.js";import"./min.BPJjMKdV.js";const L=B({__name:"detail",setup(B){const L=o({id:0,couponId:0,coupon:{},pagination:{list:[],total:0,pageNo:1,pageSize:8},categoryId:0,tabMaps:[],currentTab:0,loadStatus:""});function V(o){q(L.pagination),L.currentTab=o.index,L.categoryId=o.value,D()}async function D(){L.loadStatus="loading";const{code:o,data:s}=await N.getSpuPage({categoryId:L.categoryId,pageNo:L.pagination.pageNo,pageSize:L.pagination.pageSize});0===o&&(L.pagination.list=E.concat(L.pagination.list,s.list),L.pagination.total=s.total,L.loadStatus=L.pagination.list.length<L.pagination.total?"more":"noMore")}async function G(){const{code:o}=await i.takeCoupon(L.id);0===o&&(k({title:"领取成功"}),setTimeout((()=>{Z()}),1e3))}async function Z(){const{code:o,data:s}=L.id>0?await i.getCouponTemplate(L.id):await i.getCoupon(L.couponId);0===o&&(L.coupon=s,2===L.coupon.productScope?await async function(){const{data:o,code:s}=await N.getSpuListByIds(L.coupon.productScopeValues.join(","));0===s&&(L.pagination.list=o)}():3===L.coupon.productScope&&await async function(){const{data:o,code:s}=await P.getCategoryListByIds(L.coupon.productScopeValues.join(","));0===s&&(L.tabMaps=o.map((o=>({name:o.name,value:o.id}))),L.tabMaps.length>0&&(L.categoryId=L.tabMaps[0].value,await D()))}())}function A(){"noMore"!==L.loadStatus&&(L.pagination.pageNo++,D())}return s((o=>{L.id=o.id,L.couponId=o.couponId,Z(L.id,L.couponId)})),t((()=>{A()})),(o,s)=>{const t=w,i=S,k=h,N=j,P=a(e("uni-collapse-item"),x),q=a(e("uni-collapse"),T),B=a(e("su-tabs"),C),E=a(e("su-sticky"),I),D=a(e("s-goods-column"),v),Z=a(e("uni-load-more"),M),H=a(e("s-empty"),z),J=a(e("s-layout"),F);return l(),n(J,{title:"优惠券详情"},{default:c((()=>[u(i,{class:"bg-white"},{default:c((()=>[u(i,{class:"detail-wrap ss-p-20"},{default:c((()=>[u(i,{class:"detail-box"},{default:c((()=>[u(i,{class:"tag-box ss-flex ss-col-center ss-row-center"},{default:c((()=>[u(t,{class:"tag-image",src:p(d).$url.static("/static/img/shop/app/coupon_icon.png"),mode:"aspectFit"},null,8,["src"])])),_:1}),u(i,{class:"top ss-flex-col ss-col-center"},{default:c((()=>[u(i,{class:"title ss-m-t-50 ss-m-b-20 ss-m-x-20"},{default:c((()=>[r(m(L.coupon.name),1)])),_:1}),u(i,{class:"subtitle ss-m-b-50"},{default:c((()=>[r(" 满 "+m(p($)(L.coupon.usePrice))+" 元， "+m(1===L.coupon.discountType?"减 "+p($)(L.coupon.discountPrice)+" 元":"打 "+L.coupon.discountPercent/10+" 折"),1)])),_:1}),u(N,{class:g(["ss-reset-button ss-m-b-30",L.coupon.canTake||1===L.coupon.status?"use-btn":"disable-btn"]),disabled:!L.coupon.canTake,onClick:G},{default:c((()=>[L.id>0?(l(),n(k,{key:0},{default:c((()=>[r(m(L.coupon.canTake?"立即领取":"已领取"),1)])),_:1})):(l(),n(k,{key:1},{default:c((()=>[r(m(1===L.coupon.status?"可使用":2===L.coupon.status?"已使用":"已过期"),1)])),_:1}))])),_:1},8,["class","disabled"]),2===L.coupon.validityType?(l(),n(i,{key:0,class:"time ss-m-y-30"},{default:c((()=>[r(" 有效期：领取后 "+m(L.coupon.fixedEndTerm)+" 天内可用 ",1)])),_:1})):(l(),n(i,{key:1,class:"time ss-m-y-30"},{default:c((()=>[r(" 有效期: "+m(p(d).$helper.timeFormat(L.coupon.validStartTime,"yyyy-mm-dd"))+" 至 "+m(p(d).$helper.timeFormat(L.coupon.validEndTime,"yyyy-mm-dd")),1)])),_:1})),u(i,{class:"coupon-line ss-m-t-14"})])),_:1}),u(i,{class:"bottom"},{default:c((()=>[u(i,{class:"type ss-flex ss-col-center ss-row-between ss-p-x-30"},{default:c((()=>[u(i,null,{default:c((()=>[r("优惠券类型")])),_:1}),u(i,null,{default:c((()=>[r(m(1===L.coupon.discountType?"满减券":"折扣券"),1)])),_:1})])),_:1}),u(q,null,{default:c((()=>[L.coupon.description?(l(),n(P,{key:0,title:"优惠券说明"},{default:c((()=>[u(i,{class:"content ss-p-b-20"},{default:c((()=>[u(k,{class:"des ss-p-l-30"},{default:c((()=>[r(m(L.coupon.description),1)])),_:1})])),_:1})])),_:1})):f("",!0)])),_:1})])),_:1})])),_:1})])),_:1}),1===L.coupon.productScope?(l(),n(i,{key:0,class:"all-user ss-flex ss-row-center ss-col-center"},{default:c((()=>[r(" 全场通用 ")])),_:1})):(l(),n(E,{key:1,bgColor:"#fff"},{default:c((()=>[u(i,{class:"goods-title ss-p-20"},{default:c((()=>[r(m(2===L.coupon.productScope?"指定商品可用":"指定分类可用"),1)])),_:1}),3===L.coupon.productScope?(l(),n(B,{key:0,scrollable:!0,list:L.tabMaps,onChange:V,current:L.currentTab},null,8,["list","current"])):f("",!0)])),_:1})),2===L.coupon.productScope?(l(),n(i,{key:2},{default:c((()=>[(l(!0),y(b,null,_(L.pagination.list,((o,s)=>(l(),n(i,{key:s},{default:c((()=>[u(D,{class:"ss-m-20",size:"lg",data:o,onClick:s=>p(d).$router.go("/pages/goods/index",{id:o.id}),goodsFields:{title:{show:!0},subtitle:{show:!0},price:{show:!0},original_price:{show:!0},sales:{show:!0},stock:{show:!1}}},null,8,["data","onClick"])])),_:2},1024)))),128))])),_:1})):f("",!0),3===L.coupon.productScope?(l(),n(i,{key:3},{default:c((()=>[(l(!0),y(b,null,_(L.pagination.list,((o,s)=>(l(),n(i,{key:s},{default:c((()=>[u(D,{class:"ss-m-20",size:"lg",data:o,onClick:s=>p(d).$router.go("/pages/goods/index",{id:o.id}),goodsFields:{title:{show:!0},subtitle:{show:!0},price:{show:!0},original_price:{show:!0},sales:{show:!0},stock:{show:!1}}},null,8,["data","onClick"])])),_:2},1024)))),128))])),_:1})):f("",!0),L.pagination.total>0&&3===L.coupon.productScope?(l(),n(Z,{key:4,status:L.loadStatus,"content-text":{contentdown:"上拉加载更多"},onClick:A},null,8,["status"])):f("",!0),3===L.coupon.productScope&&0===L.pagination.total?(l(),n(H,{key:5,paddingTop:"0",icon:"/static/soldout-empty.png",text:"暂无商品"})):f("",!0)])),_:1})])),_:1})}}},[["__scopeId","data-v-7e5bf54c"]]);export{L as default};
