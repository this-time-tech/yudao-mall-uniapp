"use strict";const e=require("../../../common/vendor.js"),t=require("../../../sheep/api/trade/afterSale.js");if(!Array){e.resolveComponent("s-layout")()}Math||(a+(()=>"../../../sheep/components/s-layout/s-layout.js"))();const a=()=>"./log-item.js",s={__name:"log",setup(a){const s=e.reactive({list:[]});return e.onLoad((e=>{s.aftersaleId=e.id,async function(e){const{data:a}=await t.AfterSaleApi.getAfterSaleLogList(e);s.list=a}(e.id)})),(t,a)=>({a:e.f(s.list,((t,a,o)=>({a:"b61de3f9-1-"+o+",b61de3f9-0",b:e.p({item:t,index:a,data:s.list}),c:t.id}))),b:e.p({title:"售后进度"})})}},o=e._export_sfc(s,[["__scopeId","data-v-b61de3f9"]]);wx.createPage(o);
