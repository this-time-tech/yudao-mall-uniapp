"use strict";const t=require("../../../../common/vendor.js"),o={name:"UniSwiperDot",emits:["clickItem"],props:{info:{type:Array,default:()=>[]},current:{type:Number,default:0},dotsStyles:{type:Object,default:()=>({})},mode:{type:String,default:"default"},field:{type:String,default:""}},data:()=>({dots:{width:6,height:6,bottom:10,color:"#fff",backgroundColor:"rgba(0, 0, 0, .3)",border:"1px rgba(0, 0, 0, .3) solid",selectedBackgroundColor:"#333",selectedBorder:"1px rgba(0, 0, 0, .9) solid"}}),watch:{dotsStyles(t){this.dots=Object.assign(this.dots,this.dotsStyles)},mode(t){"indexes"===t?(this.dots.width=14,this.dots.height=14):(this.dots.width=6,this.dots.height=6)}},created(){"indexes"===this.mode&&(this.dots.width=12,this.dots.height=12),this.dots=Object.assign(this.dots,this.dotsStyles)},methods:{clickItem(t){this.$emit("clickItem",t)}}};const e=t._export_sfc(o,[["render",function(o,e,d,s,r,c){return t.e({a:"default"===d.mode},"default"===d.mode?{b:t.f(d.info,((o,e,s)=>({a:t.o((t=>c.clickItem(e)),e),b:(e===d.current?2*r.dots.width:r.dots.width)+"px",c:e!==d.current?r.dots.backgroundColor:r.dots.selectedBackgroundColor,d:e}))),c:r.dots.width/2+"px",d:r.dots.bottom+"px"}:{},{e:"dot"===d.mode},"dot"===d.mode?{f:t.f(d.info,((o,e,s)=>({a:t.o((t=>c.clickItem(e)),e),b:e!==d.current?r.dots.backgroundColor:r.dots.selectedBackgroundColor,c:e!==d.current?r.dots.border:r.dots.selectedBorder,d:e}))),g:r.dots.width+"px",h:r.dots.height+"px",i:r.dots.bottom+"px"}:{},{j:"round"===d.mode},"round"===d.mode?{k:t.f(d.info,((o,e,s)=>({a:t.o((t=>c.clickItem(e)),e),b:t.n(e===d.current&&"uni-swiper__dots-long"),c:(e===d.current?3*r.dots.width:r.dots.width)+"px",d:e!==d.current?r.dots.backgroundColor:r.dots.selectedBackgroundColor,e:e!==d.current?r.dots.border:r.dots.selectedBorder,f:e}))),l:r.dots.height+"px",m:r.dots.bottom+"px"}:{},{n:"nav"===d.mode},"nav"===d.mode?{o:t.t(d.current+1+"/"+d.info.length+" "+d.info[d.current][d.field]),p:d.dotsStyles.color,q:d.dotsStyles.backgroundColor}:{},{r:"indexes"===d.mode},"indexes"===d.mode?{s:t.f(d.info,((o,e,s)=>({a:t.t(e+1),b:t.o((t=>c.clickItem(e)),e),c:e===d.current?r.dots.selectedColor:r.dots.color,d:e!==d.current?r.dots.backgroundColor:r.dots.selectedBackgroundColor,e:e!==d.current?r.dots.border:r.dots.selectedBorder,f:e}))),t:r.dots.width+"px",v:r.dots.height+"px",w:r.dots.bottom+"px"}:{})}],["__scopeId","data-v-a119c30b"]]);wx.createComponent(e);
