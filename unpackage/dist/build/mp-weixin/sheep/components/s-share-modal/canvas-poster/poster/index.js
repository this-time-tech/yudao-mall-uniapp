"use strict";const e=require("./user.js"),r=require("./goods.js"),t=require("./groupon.js"),o=require("../../../../api/member/social.js");exports.formatImageUrlProtocol=function(e){return 0===e.indexOf("http:")&&(e=e.replace("http:","https:")),e},exports.getPosterData=function(o){switch(o.shareInfo.poster.type){case"user":return e.user(o);case"goods":return r.goods(o);case"groupon":return t.groupon(o)}},exports.getWxaQrcode=async function(e,r){return"data:image/png;base64,"+(await o.SocialApi.getWxaQrcode(e,r)).data};
