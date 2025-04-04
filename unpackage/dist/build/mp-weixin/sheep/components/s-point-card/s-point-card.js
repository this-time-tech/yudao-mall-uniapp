"use strict";const t=require("../../../common/vendor.js"),o=require("../../index.js"),e=require("../../api/product/spu.js"),r=require("../../util/const.js"),p=require("../../helper/utils.js");if(!Array){t.resolveComponent("s-goods-column")()}Math;const i={__name:"s-point-card",props:{property:{type:Object,default:()=>({})}},setup(i,{expose:s}){const d="oneColBigImg",u="twoCol",a="oneColSmallImg",n=t.reactive({spuList:[],leftSpuList:[],rightSpuList:[],property:{layoutType:"oneColBigImg",fields:{name:{show:!0,color:"#000"},introduction:{show:!0,color:"#999"},price:{show:!0,color:"#ff3000"},marketPrice:{show:!0,color:"#c4c4c4"},salesCount:{show:!0,color:"#c4c4c4"},stock:{show:!0,color:"#c4c4c4"}},badge:{show:!1,imgUrl:""},btnBuy:{type:"text",text:"立即兑换",bgBeginColor:"#FF6000",bgEndColor:"#FE832A",imgUrl:""},borderRadiusTop:8,borderRadiusBottom:8,space:8,style:{bgType:"color",bgColor:"",marginLeft:8,marginRight:8,marginBottom:8}}}),l=i;t.watch((()=>l.property),(t=>{n.property={...n.property,...t}}),{immediate:!0,deep:!0});const{marginLeft:y,marginRight:c}=n.property.styles||{},g=t.computed((()=>"text"===n.property.btnBuy.type?{background:`linear-gradient(to right, ${n.property.btnBuy.bgBeginColor}, ${n.property.btnBuy.bgEndColor})`}:"img"===n.property.btnBuy.type?{width:"54rpx",height:"54rpx",background:`url(${o.sheep.$url.cdn(n.property.btnBuy.imgUrl)}) no-repeat`,backgroundSize:"100% 100%"}:void 0));let m=0,b=0,f=0;function h(t=0,o="left"){n.spuList[m]&&("left"===o&&(b+=t),"right"===o&&(f+=t),b<=f?n.leftSpuList.push(n.spuList[m]):n.rightSpuList.push(n.spuList[m]),m++)}async function B(t){const{data:o}=await e.SpuApi.getSpuDetail(t);return o}return s({concatActivity:async function(t){if(!p.isEmpty(t)){for(const o of t)n.spuList.push(await B(o.spuId));t.forEach((t=>{const o=n.spuList.find((o=>t.spuId===o.id));o&&(o.pointStock=t.stock,o.pointTotalStock=t.totalStock,o.point=t.point,o.pointPrice=t.price,o.activityId=t.id,o.activityType=r.PromotionActivityTypeEnum.POINT.type)})),n.property.layoutType===u&&h()}},getActivityCount:function(){return n.spuList.length},calculateGoodsColumn:h}),(e,r)=>t.e({a:n.property.layoutType===d&&n.spuList.length},n.property.layoutType===d&&n.spuList.length?{b:t.f(n.spuList,((e,r,p)=>{var i;return{a:t.o((r=>t.unref(o.sheep).$router.go("/pages/goods/point",{id:e.activityId})),e.id),b:"2ad8738c-0-"+p,c:t.p({size:"sl",goodsFields:n.property.fields,tagStyle:n.property.badge,data:e,titleColor:null==(i=n.property.fields.name)?void 0:i.color,subTitleColor:n.property.fields.introduction.color,topRadius:n.property.borderRadiusTop,bottomRadius:n.property.borderRadiusBottom}),d:e.id}})),c:t.t("text"===n.property.btnBuy.type?n.property.btnBuy.text:""),d:t.s(g.value),e:t.s({marginBottom:2*n.property.space+"rpx"})}:{},{f:n.property.layoutType===a&&n.spuList.length},n.property.layoutType===a&&n.spuList.length?{g:t.f(n.spuList,((e,r,p)=>{var i;return{a:t.o((r=>t.unref(o.sheep).$router.go("/pages/goods/point",{id:e.activityId})),e.id),b:"2ad8738c-1-"+p,c:t.p({size:"lg",goodsFields:n.property.fields,data:e,tagStyle:n.property.badge,titleColor:null==(i=n.property.fields.name)?void 0:i.color,subTitleColor:n.property.fields.introduction.color,topRadius:n.property.borderRadiusTop,bottomRadius:n.property.borderRadiusBottom}),d:e.id}})),h:t.t("text"===n.property.btnBuy.type?n.property.btnBuy.text:""),i:t.s(g.value),j:t.s({marginBottom:n.property.space+"px"})}:{},{k:n.property.layoutType===u&&n.spuList.length},n.property.layoutType===u&&n.spuList.length?{l:t.f(n.leftSpuList,((e,r,p)=>{var i;return{a:t.o((r=>t.unref(o.sheep).$router.go("/pages/goods/point",{id:e.activityId})),e.id),b:t.o((t=>h(t,"left")),e.id),c:"2ad8738c-2-"+p,d:t.p({size:"md",goodsFields:n.property.fields,tagStyle:n.property.badge,data:e,titleColor:null==(i=n.property.fields.name)?void 0:i.color,subTitleColor:n.property.fields.introduction.color,topRadius:n.property.borderRadiusTop,bottomRadius:n.property.borderRadiusBottom,titleWidth:330-t.unref(y)-t.unref(c)}),e:e.id}})),m:t.t("text"===n.property.btnBuy.type?n.property.btnBuy.text:""),n:t.s(g.value),o:t.s({paddingRight:n.property.space+"rpx",marginBottom:n.property.space+"px"}),p:t.f(n.rightSpuList,((e,r,p)=>{var i;return{a:t.o((r=>t.unref(o.sheep).$router.go("/pages/goods/point",{id:e.activityId})),e.id),b:t.o((t=>h(t,"right")),e.id),c:"2ad8738c-3-"+p,d:t.p({size:"md",goodsFields:n.property.fields,tagStyle:n.property.badge,data:e,titleColor:null==(i=n.property.fields.name)?void 0:i.color,subTitleColor:n.property.fields.introduction.color,topRadius:n.property.borderRadiusTop,bottomRadius:n.property.borderRadiusBottom,titleWidth:330-t.unref(y)-t.unref(c)}),e:e.id}})),q:t.t("text"===n.property.btnBuy.type?n.property.btnBuy.text:""),r:t.s(g.value),s:t.s({paddingLeft:n.property.space+"rpx",marginBottom:n.property.space+"px"})}:{})}},s=t._export_sfc(i,[["__scopeId","data-v-2ad8738c"]]);wx.createComponent(s);
