"use strict";const e=require("../../request/index.js"),t={getArticle:(t,r)=>e.request({url:"/promotion/article/get",method:"GET",params:{id:t,title:r}})};exports.ArticleApi=t;
