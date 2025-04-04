import{z as s,s as e,v as t,aE as a,aq as l,o,r as i,e as n,f as c,w as d,u,j as r,k as p,p as f,t as g,g as m,l as _,m as S,F as h,ag as x,ah as k,A as I,y,C as b,i as M,D as w,E as C,G as L}from"./index-BYbmVHYF.js";import{_ as j}from"./s-goods-item.B-P-c7gz.js";import{_ as A,S as G}from"./s-layout.B9Wf0wyf.js";import{_ as v}from"./uni-load-more.7Sj0orxA.js";import{_ as B}from"./s-empty.tLh6VNZu.js";import{S as N}from"./history.Bn3a4bbD.js";import{_ as z}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{l as T}from"./lodash.default.pbM9n79J.js";import"./useGoods.BAFIflfD.js";import"./index.DEmjmW11.js";import"./min.BPJjMKdV.js";const E=z({__name:"goods-log",setup(z){s((s=>({d09a0a54:u(E)})));const E=e.$platform.navbar,F={list:[],pageNo:1,total:1,pageSize:10},H=t({pagination:a(F),loadStatus:"",editMode:!1,selectedSpuIdList:[],selectAll:!1});async function O(){H.loadStatus="loading";const{code:s,data:e}=await N.getBrowseHistoryPage({pageNo:H.pagination.pageNo,pageSize:H.pagination.pageSize});0===s&&(H.pagination.list=T.concat(H.pagination.list,e.list),H.pagination.total=e.total,H.loadStatus=H.pagination.list.length<H.pagination.total?"more":"noMore")}const $=s=>{H.selectedSpuIdList.includes(s)?H.selectedSpuIdList.splice(H.selectedSpuIdList.indexOf(s),1):H.selectedSpuIdList.push(s),H.selectAll=H.selectedSpuIdList.length===H.pagination.list.length},q=()=>{H.selectAll=!H.selectAll,H.selectAll?H.pagination.list.forEach((s=>{H.selectedSpuIdList.includes(s.spuId)&&H.selectedSpuIdList.splice(H.selectedSpuIdList.indexOf(s.spuId),1),H.selectedSpuIdList.push(s.spuId)})):H.selectedSpuIdList=[]};async function D(){if(H.selectedSpuIdList.length<=0)return;const{code:s}=await N.deleteBrowseHistory(H.selectedSpuIdList);0===s&&U()}async function P(){const{code:s}=await N.cleanBrowseHistory();0===s&&U()}function U(){H.editMode=!1,H.selectedSpuIdList=[],H.selectAll=!1,H.pagination=F,O()}function W(){"noMore"!==H.loadStatus&&(H.pagination.pageNo+=1,O())}return l((()=>{W()})),o((()=>{O()})),(s,t)=>{const a=b,l=M,o=w,N=C,z=L,T=i(n("s-goods-item"),j),E=i(n("su-fixed"),A),F=i(n("uni-load-more"),v),O=i(n("s-empty"),B),U=i(n("s-layout"),G);return r(),c(U,{bgStyle:{color:"#f2f2f2"},title:"我的足迹"},{default:d((()=>[p(l,{class:"cart-box ss-flex ss-flex-col ss-row-between"},{default:d((()=>[p(l,{class:"cart-header ss-flex ss-col-center ss-row-between ss-p-x-30"},{default:d((()=>[p(l,{class:"header-left ss-flex ss-col-center ss-font-26"},{default:d((()=>[f(" 共 "),p(a,{class:"goods-number ui-TC-Main ss-flex"},{default:d((()=>[f(g(H.pagination.total),1)])),_:1}),f(" 件商品 ")])),_:1}),p(l,{class:"header-right"},{default:d((()=>[H.editMode&&H.pagination.total?(r(),c(o,{key:0,class:"ss-reset-button",onClick:t[0]||(t[0]=s=>H.editMode=!1)},{default:d((()=>[f(" 取消 ")])),_:1})):m("",!0),!H.editMode&&H.pagination.total?(r(),c(o,{key:1,class:"ss-reset-button ui-TC-Main",onClick:t[1]||(t[1]=s=>H.editMode=!0)},{default:d((()=>[f(" 编辑 ")])),_:1})):m("",!0)])),_:1})])),_:1}),p(l,{class:"cart-content"},{default:d((()=>[(r(!0),_(h,null,S(H.pagination.list,(s=>(r(),c(l,{class:"goods-box ss-r-10 ss-m-b-14",key:s.id},{default:d((()=>[p(l,{class:"ss-flex ss-col-center"},{default:d((()=>[H.editMode?(r(),c(z,{key:0,class:"check-box ss-flex ss-col-center ss-p-l-10",onClick:e=>$(s.spuId)},{default:d((()=>[p(N,{checked:H.selectedSpuIdList.includes(s.spuId),color:"var(--ui-BG-Main)",style:{transform:"scale(0.8)"},onClick:I((e=>$(s.spuId)),["stop"])},null,8,["checked","onClick"])])),_:2},1032,["onClick"])):m("",!0),p(T,{title:s.spuName,img:s.picUrl,price:s.price,skuText:s.introduction,priceColor:"#FF3000",titleWidth:400,onClick:t=>u(e).$router.go("/pages/goods/index",{id:s.spuId})},null,8,["title","img","price","skuText","onClick"])])),_:2},1024)])),_:2},1024)))),128))])),_:1}),x(p(E,{bottom:"",val:0,placeholder:""},{default:d((()=>[p(l,{class:"cart-footer ss-flex ss-col-center ss-row-between ss-p-x-30 border-bottom"},{default:d((()=>[p(l,{class:"footer-left ss-flex ss-col-center"},{default:d((()=>[p(z,{class:"check-box ss-flex ss-col-center ss-p-r-30",onClick:q},{default:d((()=>[p(N,{checked:H.selectAll,color:"var(--ui-BG-Main)",style:{transform:"scale(0.7)"},onClick:I(q,["stop"])},null,8,["checked"]),p(l,null,{default:d((()=>[f("全选")])),_:1})])),_:1})])),_:1}),p(l,{class:"footer-right ss-flex"},{default:d((()=>[p(o,{class:y(["ss-reset-button  pay-btn ss-font-28 ",{"ui-BG-Main-Gradient":H.selectedSpuIdList.length>0,"ui-Shadow-Main":H.selectedSpuIdList.length>0}]),onClick:D},{default:d((()=>[f(" 删除足迹 ")])),_:1},8,["class"]),p(o,{class:"ss-reset-button ui-BG-Main-Gradient pay-btn ss-font-28 ui-Shadow-Main ml-2",onClick:P},{default:d((()=>[f(" 清空 ")])),_:1})])),_:1})])),_:1})])),_:1},512),[[k,H.editMode]])])),_:1}),H.pagination.total>0?(r(),c(F,{key:0,status:H.loadStatus,"content-text":{contentdown:"上拉加载更多"},onClick:W},null,8,["status"])):m("",!0),0===H.pagination.total?(r(),c(O,{key:1,text:"暂无浏览记录",icon:"/static/collect-empty.png"})):m("",!0)])),_:1})}}},[["__scopeId","data-v-36fb4e6d"]]);export{E as default};
