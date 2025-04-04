"use strict";const e=require("../../request/index.js"),t={getEnableChannelCodeList:t=>e.request({url:"/pay/channel/get-enable-code-list",method:"GET",params:{appId:t}})};exports.PayChannelApi=t;
