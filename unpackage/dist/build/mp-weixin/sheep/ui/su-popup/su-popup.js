"use strict";const t=require("../../index.js"),s=require("../../../common/vendor.js"),o={name:"SuPopup",components:{},emits:["change","maskClick","close"],props:{show:{type:Boolean,default:!1},space:{type:Number,default:0},round:{type:[String,Number],default:0},showClose:{type:Boolean,default:!1},animation:{type:Boolean,default:!0},type:{type:String,default:"bottom"},isMaskClick:{type:Boolean,default:null},maskClick:{type:Boolean,default:null},backgroundColor:{type:String,default:"#ffffff"},backgroundImage:{type:String,default:""},safeArea:{type:Boolean,default:!0},maskBackgroundColor:{type:String,default:"rgba(0, 0, 0, 0.4)"},zIndex:{type:[String,Number],default:10075}},watch:{show:{handler:function(t,s){(void 0!==s||t)&&(t?this.open():this.close())},immediate:!0},type:{handler:function(t){this.config[t]&&this[this.config[t]](!0)},immediate:!0},isDesktop:{handler:function(t){this.config[t]&&this[this.config[this.type]](!0)},immediate:!0},maskClick:{handler:function(t){this.mkclick=t},immediate:!0},isMaskClick:{handler:function(t){this.mkclick=t},immediate:!0},showPopup(t){}},data(){return{sheep:t.sheep,duration:300,ani:[],showPopup:!1,showTrans:!1,popupWidth:0,popupHeight:0,config:{top:"top",bottom:"bottom",center:"center",left:"left",right:"right",message:"top",dialog:"center",share:"bottom"},maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{position:"fixed",left:0,right:0},maskShow:!0,mkclick:!0,popupstyle:this.isDesktop?"fixforpc-top":"top"}},computed:{isDesktop(){return this.popupWidth>=500&&this.popupHeight>=500},bg(){return""===this.backgroundColor||"none"===this.backgroundColor?"transparent":this.backgroundColor},borderRadius(){if(this.round){if("bottom"===this.type)return{"border-top-left-radius":parseFloat(this.round)+"px","border-top-right-radius":parseFloat(this.round)+"px"};if("center"===this.type)return{"border-top-left-radius":parseFloat(this.round)+"px","border-top-right-radius":parseFloat(this.round)+"px","border-bottom-left-radius":parseFloat(this.round)+"px","border-bottom-right-radius":parseFloat(this.round)+"px"};if("top"===this.type)return{"border-bottom-left-radius":parseFloat(this.round)+"px","border-bottom-right-radius":parseFloat(this.round)+"px"}}}},mounted(){(()=>{const{windowWidth:s,windowHeight:o,windowTop:i,safeArea:e,screenHeight:a,safeAreaInsets:r}=t.sheep.$platform.device;this.popupWidth=s,this.popupHeight=o+(i||0),e&&this.safeArea?this.safeAreaInsets=a-e.bottom:this.safeAreaInsets=0})()},unmounted(){this.setH5Visible()},created(){null===this.isMaskClick&&null===this.maskClick?this.mkclick=!0:this.mkclick=null!==this.isMaskClick?this.isMaskClick:this.maskClick,this.animation?this.duration=300:this.duration=0,this.messageChild=null,this.clearPropagation=!1,this.maskClass.backgroundColor=this.maskBackgroundColor},methods:{setH5Visible(){},closeMask(){this.maskShow=!1},disableMask(){this.mkclick=!1},clear(t){t.stopPropagation(),this.clearPropagation=!0},open(t){this.showPopup&&(clearTimeout(this.timer),this.showPopup=!1);t&&-1!==["top","center","bottom","left","right","message","dialog","share"].indexOf(t)||(t=this.type),this.config[t]?(this[this.config[t]](),this.$emit("change",{show:!0,type:t})):console.error("缺少类型：",t)},close(t){this.showTrans=!1,this.$emit("change",{show:!1,type:this.type}),this.$emit("close"),clearTimeout(this.timer),this.timer=setTimeout((()=>{this.showPopup=!1}),300)},touchstart(){this.clearPropagation=!1},onTap(){this.clearPropagation?this.clearPropagation=!1:(this.$emit("maskClick"),this.mkclick&&this.close())},top(t){this.popupstyle=this.isDesktop?"fixforpc-top":"top",this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0,top:this.space+"px",backgroundColor:this.bg},t||(this.showPopup=!0,this.showTrans=!0,this.$nextTick((()=>{this.messageChild&&"message"===this.type&&this.messageChild.timerClose()})))},bottom(t){this.popupstyle="bottom",this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0,paddingBottom:this.safeAreaInsets+this.space+"px",backgroundColor:this.bg},t||(this.showPopup=!0,this.showTrans=!0)},center(t){this.popupstyle="center",this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"},t||(this.showPopup=!0,this.showTrans=!0)},left(t){this.popupstyle="left",this.ani=["slide-left"],this.transClass={position:"fixed",left:0,bottom:0,top:0,backgroundColor:this.bg,display:"flex",flexDirection:"column"},t||(this.showPopup=!0,this.showTrans=!0)},right(t){this.popupstyle="right",this.ani=["slide-right"],this.transClass={position:"fixed",bottom:0,right:0,top:0,backgroundColor:this.bg,display:"flex",flexDirection:"column"},t||(this.showPopup=!0,this.showTrans=!0)}}},i=()=>{s.useCssVars((t=>({"2f1dc042":t.backgroundImage})))},e=o.setup;if(o.setup=e?(t,s)=>(i(),e(t,s)):i,!Array){(s.resolveComponent("uni-transition")+s.resolveComponent("uni-icons"))()}Math||((()=>"../../../uni_modules/uni-transition/components/uni-transition/uni-transition.js")+(()=>"../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js"))();const a=s._export_sfc(o,[["render",function(t,o,i,e,a,r){return s.e({a:a.showPopup},a.showPopup?s.e({b:a.maskShow},a.maskShow?{c:s.o(r.onTap),d:s.p({name:"mask","mode-class":"fade",styles:a.maskClass,duration:a.duration,show:a.showTrans})}:{},{e:a.showPopup},a.showPopup?s.e({f:i.showClose},i.showClose?{g:s.o(r.close),h:s.p({color:"#F6F6F6",type:"closeempty",size:"32"})}:{},{i:s.s({backgroundColor:r.bg}),j:s.s(r.borderRadius),k:s.n(a.popupstyle),l:s.o(((...t)=>r.clear&&r.clear(...t)))}):{},{m:s.o(r.onTap),n:s.p({"mode-class":a.ani,name:"content",styles:{...a.transClass,...r.borderRadius},duration:a.duration,show:a.showTrans}),o:s.o(((...t)=>r.touchstart&&r.touchstart(...t))),p:s.n(a.popupstyle),q:s.n(r.isDesktop?"fixforpc-z-index":""),r:s.s({zIndex:i.zIndex}),s:s.s(t.__cssVars()),t:s.o(((...t)=>r.clear&&r.clear(...t)))}):{v:s.s(t.__cssVars())})}]]);wx.createComponent(a);
