"use strict";const e=require("../../common/vendor.js"),o=require("../../sheep/api/promotion/diy.js");if(!Array){(e.resolveComponent("s-block-item")+e.resolveComponent("s-block")+e.resolveComponent("s-layout"))()}Math||((()=>"../../sheep/components/s-block-item/s-block-item.js")+(()=>"../../sheep/components/s-block/s-block.js")+(()=>"../../sheep/components/s-layout/s-layout.js"))();const t={__name:"page",setup(t){const n=e.reactive({name:"",components:[],navigationBar:{},page:{}});return e.onLoad((async e=>{var t,a,s;let p=e.id;if(e.scene){p=decodeURIComponent(e.scene).split("=")[1]}const{code:r,data:i}=await o.DiyApi.getDiyPage(p);0===r&&(n.name=i.name,n.components=null==(t=i.property)?void 0:t.components,n.navigationBar=null==(a=i.property)?void 0:a.navigationBar,n.page=null==(s=i.property)?void 0:s.page)})),e.onPageScroll((()=>{})),(o,t)=>({a:e.f(n.components,((o,t,n)=>({a:"71b68096-2-"+n+",71b68096-1-"+n,b:e.p({type:o.id,data:o.property,styles:o.property.style}),c:t,d:"71b68096-1-"+n+",71b68096-0",e:e.p({styles:o.property.style})}))),b:e.p({title:n.name,navbar:"custom",bgStyle:n.page,navbarStyle:n.navigationBar,onShareAppMessage:!0,showLeftButton:!0})})},__runtimeHooks:3};wx.createPage(t);
