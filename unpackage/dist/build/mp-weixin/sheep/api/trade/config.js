"use strict";const e=require("../../request/index.js"),t={getTradeConfig:()=>e.request({url:"/trade/config/get",method:"GET",custom:{showLoading:!1}})};exports.TradeConfigApi=t;
