"use strict";const e=require("../../../common/vendor.js"),t={__name:"su-radio",props:{customStyle:{type:Object,default:()=>({})},ui:{type:String,default:"check"},modelValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:!1},bg:{type:String,default:"ui-BG-Main"},unbg:{type:String,default:"borderss"},src:{type:String,default:""},label:{type:String,default:""},labelStyle:{type:Object,default:()=>({})},none:{type:Boolean,default:!1}},emits:["change","update:modelValue"],setup(t,{emit:u}){const l=e.reactive({currentValue:!1}),a=u,r=t;e.watchPostEffect((()=>{l.currentValue=r.modelValue,a("update:modelValue",l.currentValue)}));const n=e.computed((()=>l.currentValue)),c=()=>{r.disabled||(l.currentValue=!l.currentValue,a("update:modelValue",l.currentValue),a("change",{label:r.label,value:l.currentValue}))};return(u,l)=>e.e({a:!t.none},t.none?{}:{b:e.n(n.value?"cur "+t.bg:t.unbg),c:e.n(t.src?"radius":"round")},{d:t.src},t.src?{e:t.src}:{f:e.t(t.label),g:e.s(t.labelStyle)},{h:t.ui.includes("card")},t.ui.includes("card")?{i:e.n(n.value?"cur "+t.bg:"")}:{},{j:e.o(c),k:e.n({disabled:t.disabled}),l:e.n({img:t.src}),m:e.n(t.ui),n:e.s(t.customStyle)})}},u=e._export_sfc(t,[["__scopeId","data-v-2c6d6010"]]);wx.createComponent(u);
