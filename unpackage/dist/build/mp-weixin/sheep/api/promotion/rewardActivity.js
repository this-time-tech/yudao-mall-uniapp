"use strict";const t=require("../../request/index.js"),e={getRewardActivity:e=>t.request({url:"/promotion/reward-activity/get",method:"GET",params:{id:e}})};exports.RewardActivityApi=e;
