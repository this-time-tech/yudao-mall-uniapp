"use strict";const t=require("../../../../../../common/vendor.js"),e=require("../z-paging-utils.js"),o={props:{useChatRecordMode:{type:Boolean,default:e.u.gc("useChatRecordMode",!1)},chatRecordMoreOffset:{type:[Number,String],default:e.u.gc("chatRecordMoreOffset","0rpx")},autoHideKeyboardWhenChat:{type:Boolean,default:e.u.gc("autoHideKeyboardWhenChat",!0)},autoAdjustPositionWhenChat:{type:Boolean,default:e.u.gc("autoAdjustPositionWhenChat",!0)},chatAdjustPositionOffset:{type:[Number,String],default:e.u.gc("chatAdjustPositionOffset","0rpx")},autoToBottomWhenChat:{type:Boolean,default:e.u.gc("autoToBottomWhenChat",!1)},showChatLoadingWhenReload:{type:Boolean,default:e.u.gc("showChatLoadingWhenReload",!1)},chatLoadingMoreDefaultAsLoading:{type:Boolean,default:e.u.gc("chatLoadingMoreDefaultAsLoading",!0)}},data:()=>({keyboardHeight:0,isKeyboardHeightChanged:!1}),computed:{finalChatRecordMoreOffset(){return e.u.convertToPx(this.chatRecordMoreOffset)},finalChatAdjustPositionOffset(){return e.u.convertToPx(this.chatAdjustPositionOffset)},chatRecordRotateStyle(){let t;return t=this.useChatRecordMode?{transform:"scaleY(-1)"}:{},this.$emit("update:cellStyle",t),this.$emit("cellStyleChange",t),this.$nextTick((()=>{this.isFirstPage&&this.isChatRecordModeAndNotInversion&&this.$nextTick((()=>{this._scrollToBottom(!1),e.u.delay((()=>{this._scrollToBottom(!1),e.u.delay((()=>{this._scrollToBottom(!1)}),50)}),50)}))})),t},isChatRecordModeHasTransform(){return this.useChatRecordMode&&this.chatRecordRotateStyle&&this.chatRecordRotateStyle.transform},isChatRecordModeAndNotInversion(){return this.isChatRecordModeHasTransform&&"scaleY(1)"===this.chatRecordRotateStyle.transform},isChatRecordModeAndInversion(){return this.isChatRecordModeHasTransform&&"scaleY(-1)"===this.chatRecordRotateStyle.transform},chatRecordModeSafeAreaBottom(){return this.safeAreaInsetBottom&&!this.keyboardHeight?this.safeAreaBottom:0}},mounted(){this.useChatRecordMode&&t.index.onKeyboardHeightChange(this._handleKeyboardHeightChange)},methods:{addChatRecordData(t,e=!0,o=!0){this.useChatRecordMode&&(this.isTotalChangeFromAddData=!0,this.addDataFromTop(t,e,o))},doChatRecordLoadMore(){this.useChatRecordMode&&this._onLoadingMore("click")},_handleKeyboardHeightChange(t){this.$emit("keyboardHeightChange",t),this.autoAdjustPositionWhenChat&&(this.isKeyboardHeightChanged=!0,this.keyboardHeight=t.height>0?t.height+this.finalChatAdjustPositionOffset:t.height),this.autoToBottomWhenChat&&this.keyboardHeight>0&&e.u.delay((()=>{this.scrollToBottom(!1),e.u.delay((()=>{this.scrollToBottom(!1)}))}))}}};exports.chatRecordModerModule=o;
