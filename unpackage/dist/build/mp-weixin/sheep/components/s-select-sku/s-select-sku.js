"use strict";const e=require("../../../common/vendor.js"),o=require("../../index.js"),t=require("../../hooks/useGoods.js");if(!Array){(e.resolveComponent("su-number-box")+e.resolveComponent("su-popup"))()}Math||((()=>"../../ui/su-number-box/su-number-box.js")+(()=>"../../ui/su-popup/su-popup.js"))();const r={__name:"s-select-sku",props:{goodsInfo:{type:Object,default(){}},show:{type:Boolean,default:!1}},emits:["change","addCart","buy","close"],setup(r,{emit:s}){const u=s,n=r,d=e.reactive({selectedSku:{},currentPropertyArray:[]}),c=t.convertProductPropertyList(n.goodsInfo.skus),l=e.computed((()=>{let e=n.goodsInfo.skus;for(let o of e)o.value_id_array=o.properties.map((e=>e.valueId));return e}));function a(){d.selectedSku.id<=0?o.sheep.$helper.toast("请选择规格"):d.selectedSku.stock<=0?o.sheep.$helper.toast("库存不足"):u("addCart",d.selectedSku)}function i(){d.selectedSku.id<=0?o.sheep.$helper.toast("请选择规格"):d.selectedSku.stock<=0?o.sheep.$helper.toast("库存不足"):u("buy",d.selectedSku)}function p(e=!1,o=0,t=0){let r=[];if(e)for(let n of l.value)n.stock<=0||n.value_id_array.indexOf(t)>=0&&r.push(n);else r=f();let s=[];for(let n of r)s=s.concat(n.value_id_array);if(s=Array.from(new Set(s)),e){let e=s.indexOf(t);s.splice(e,1)}else d.currentPropertyArray.forEach((e=>{if(""!==e.toString())return;let o=s.indexOf(e);o>=0&&s.splice(o,1)}));let u=[];e?u=[o]:d.currentPropertyArray.forEach(((e,o)=>{""!==e&&u.push(o)}));for(let n in c)if(!(u.indexOf(c[n].id)>=0))for(let e in c[n].values)c[n].values[e].disabled=s.indexOf(c[n].values[e].id)<0}function f(){let e=[];for(let o of l.value){if(o.stock<=0)continue;let t=!0;d.currentPropertyArray.forEach((e=>{""!==e.toString()&&o.value_id_array.indexOf(e)<0&&(t=!1)})),t&&e.push(o)}return e}return e.watch((()=>d.selectedSku),(e=>{u("change",e)}),{immediate:!0,deep:!0}),p(!1),(o,s)=>e.e({a:d.selectedSku.picUrl||r.goodsInfo.picUrl,b:e.t(r.goodsInfo.name),c:e.t(e.unref(t.fen2yuan)(d.selectedSku.promotionPrice||d.selectedSku.price||r.goodsInfo.price)),d:d.selectedSku.promotionType>0},d.selectedSku.promotionType>0?e.e({e:4===d.selectedSku.promotionType},(4===d.selectedSku.promotionType||d.selectedSku.promotionType,{}),{f:6===d.selectedSku.promotionType,g:e.t(e.unref(t.fen2yuan)(d.selectedSku.price))}):{},{h:e.t(e.unref(t.formatStock)("exact",d.selectedSku.stock||r.goodsInfo.stock)),i:e.f(e.unref(c),((o,t,r)=>({a:e.t(o.name),b:e.f(o.values,((t,r,s)=>({a:e.t(t.name),b:e.n({"ui-BG-Main-Gradient":d.currentPropertyArray[o.id]===t.id}),c:e.n({"disabled-btn":!0===t.disabled}),d:t.id,e:!0===t.disabled,f:e.o((e=>function(e,o){let t=!0;void 0!==d.currentPropertyArray[e]&&d.currentPropertyArray[e]===o?(t=!1,d.currentPropertyArray.splice(e,1,"")):d.currentPropertyArray[e]=o;let r=[];d.currentPropertyArray.forEach((e=>{""!==e&&r.push(e)}));let s=f();r.length===c.length&&s.length?(s[0].goods_num=d.selectedSku.goods_num||1,d.selectedSku=s[0]):d.selectedSku={},p(t,e,o)}(o.id,t.id)),t.id)}))),c:o.id}))),j:e.o((e=>{var o;0!==(o=e)&&d.selectedSku.goods_num!==o&&(d.selectedSku.goods_num=o)})),k:e.o((e=>d.selectedSku.goods_num=e)),l:e.p({min:1,max:d.selectedSku.stock,step:1,modelValue:d.selectedSku.goods_num}),m:e.o((()=>{})),n:e.o(a),o:e.o(i),p:e.o((e=>u("close"))),q:e.p({show:r.show,round:"10"})})}},s=e._export_sfc(r,[["__scopeId","data-v-3e6c6665"]]);wx.createComponent(s);
