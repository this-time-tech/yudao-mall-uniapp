"use strict";const e=require("../../common/vendor.js"),o=require("../../sheep/index.js"),s=require("../../sheep/util/const.js");if(!Array){e.resolveComponent("s-layout")()}Math||(n+t+r+a+m+(()=>"../../sheep/components/s-layout/s-layout.js"))();const n=()=>"./components/commission-info.js",t=()=>"./components/account-info.js",a=()=>"./components/commission-log.js",r=()=>"./components/commission-menu.js",m=()=>"./components/commission-auth.js",c={__name:"index",setup(n){const t=e.computed((()=>o.sheep.$platform.share.getShareInfo({params:{page:s.SharePageEnum.HOME.value}},{type:"user"}))),a={color:"#F7D598"};return(o,s)=>({a:e.p({navbar:"inner",title:"分销中心",bgStyle:a,onShareAppMessage:t.value})})}},p=e._export_sfc(c,[["__scopeId","data-v-52a734a8"]]);c.__runtimeHooks=2,wx.createPage(p);
