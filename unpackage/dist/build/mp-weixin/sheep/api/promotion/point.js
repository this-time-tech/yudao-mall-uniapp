"use strict";const t=require("../../request/index.js"),i={getPointActivityPage:i=>t.request({url:"promotion/point-activity/page",method:"GET",params:i}),getPointActivityListByIds:i=>t.request({url:"/promotion/point-activity/list-by-ids",method:"GET",params:{ids:i}}),getPointActivity:i=>t.request({url:"promotion/point-activity/get-detail",method:"GET",params:{id:i}})};exports.PointApi=i;
