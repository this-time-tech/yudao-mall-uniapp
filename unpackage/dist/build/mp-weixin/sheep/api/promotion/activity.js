"use strict";const t=require("../../request/index.js"),i={getActivityListBySpuId:i=>t.request({url:"/promotion/activity/list-by-spu-id",method:"GET",params:{spuId:i}})};exports.ActivityApi=i;
