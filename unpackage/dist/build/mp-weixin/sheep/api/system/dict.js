"use strict";const t=require("../../request/index.js"),e={getDictDataListByType:e=>t.request({url:"/system/dict-data/type",method:"GET",params:{type:e}})};exports.DictApi=e;
