"use strict";const e=require("../../../common/vendor.js"),o=require("../../index.js");if(!Array){e.resolveComponent("s-live-card")()}Math;const t={__name:"s-live-block",props:{data:{type:Object,default(){}},styles:{type:Object,default(){}}},setup(t){const a=e.reactive({liveList:[],mpLink:""}),i=t,{mode:r,goodsFields:d,mpliveIds:s}=i.data||{};function n(o){e.index.navigateTo({url:`plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=${o}`})}return i.styles,e.onMounted((async()=>{a.liveList=await async function(e){const{data:t}=await o.sheep.$api.app.mplive.getRoomList(e);return t}(s)})),(o,i)=>e.e({a:2===e.unref(r)&&a.liveList.length},2===e.unref(r)&&a.liveList.length?{b:e.f(a.liveList,((o,a,i)=>{var r,s;return{a:e.o((e=>n(o.roomid)),o.id),b:"41bc305f-0-"+i,c:e.p({size:"md",goodsFields:e.unref(d),data:o,titleColor:null==(r=e.unref(d).name)?void 0:r.color,subTitleColor:null==(s=e.unref(d).anchor_name)?void 0:s.color,topRadius:t.data.borderRadiusTop,bottomRadius:t.data.borderRadiusBottom}),d:o.id}})),c:e.s({padding:t.data.space+"rpx"}),d:e.s({margin:"-"+t.data.space+"rpx"})}:{},{e:1===e.unref(r)&&a.liveList.length},1===e.unref(r)&&a.liveList.length?{f:e.f(a.liveList,((o,a,i)=>{var r;return{a:e.o((e=>n(o.roomid)),o.id),b:"41bc305f-1-"+i,c:e.p({size:"sl",goodsFields:e.unref(d),data:o,titleColor:null==(r=e.unref(d).name)?void 0:r.color,subTitleColor:e.unref(d).anchor_name.color,topRadius:t.data.borderRadiusTop,bottomRadius:t.data.borderRadiusBottom}),d:o.id}})),g:e.s({marginBottom:t.data.space+"px"})}:{})}},a=e._export_sfc(t,[["__scopeId","data-v-41bc305f"]]);wx.createComponent(a);
