webpackJsonp([1],{40:function(t,e,l){l(84);var n=l(7)(l(46),l(90),null,null);t.exports=n.exports},41:function(t,e,l){l(82);var n=l(7)(l(47),l(88),null,null);t.exports=n.exports},42:function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=l(39),i=l(37),r=l.n(i),s=l(38),a=l(40),u=l.n(a),o=l(41),c=l.n(o);n.a.use(s.a);var d=[{path:"/",component:c.a}],p=new s.a({routes:d});r.a.attach(document.body),n.a.config.productionTip=!1,new n.a({router:p,render:function(t){return t(u.a)}}).$mount("#app-box")},43:function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=l(96),i=l.n(n),r=l(49),s=l(48);e.default={name:"cell",components:{InlineDesc:i.a},props:l.i(s.a)(),beforeMount:function(){this.hasTitleSlot=!!this.$slots.title},computed:{valueClass:function(){return{"vux-cell-primary":"content"===this.primary||"left"===this.valueAlign,"vux-cell-align-left":"left"===this.valueAlign,"vux-cell-arrow-transition":!!this.arrowDirection,"vux-cell-arrow-up":"up"===this.arrowDirection,"vux-cell-arrow-down":"down"===this.arrowDirection}},labelClass:function(){return{"vux-cell-justify":"justify"===this.$parent.labelAlign||"justify"===this.$parent.$parent.labelAlign}}},methods:{getLabelStyles:function(){return{width:this.$parent.labelWidth||this.$parent.$parent.labelWidth,textAlign:this.$parent.labelAlign||this.$parent.$parent.labelAlign,marginRight:this.$parent.labelMarginRight||this.$parent.$parent.labelMarginRight}},onClick:function(){!this.disabled&&l.i(r.a)(this.link,this.$router)}},data:function(){return{hasTitleSlot:!1}}}},44:function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"group",props:{title:String,titleColor:String,labelWidth:String,labelAlign:String,labelMarginRight:String,gutter:[String,Number]}}},45:function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"inline-desc"}},46:function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},47:function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=l(95),i=l.n(n),r=l(94),s=l.n(r);e.default={components:{Group:i.a,Cell:s.a},data:function(){return{msg:"Hello World!"}}}},82:function(t,e){},83:function(t,e){},84:function(t,e){},85:function(t,e){},86:function(t,e){},87:function(t,e,l){t.exports=l.p+"static/img/vux_logo.79cbb96.png"},88:function(t,e,l){t.exports={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[t._m(0),t._v(" "),l("group",{attrs:{title:"cell demo"}},[l("cell",{attrs:{title:"VUX",value:"cool","is-link":""}})],1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-demo"},[n("img",{staticClass:"logo",attrs:{src:l(87)}}),t._v(" "),n("h1")])}]}},89:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"vux-label-desc"},[t._t("default")],2)},staticRenderFns:[]}},90:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{attrs:{id:"app"}},[l("router-view")],1)},staticRenderFns:[]}},91:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"weui-cell",class:{"vux-tap-active":t.isLink||!!t.link,"weui-cell_access":t.isLink||!!t.link,"vux-cell-no-border-intent":!t.borderIntent,"vux-cell-disabled":t.disabled},on:{click:t.onClick}},[l("div",{staticClass:"weui-cell__hd"},[t._t("icon")],2),t._v(" "),l("div",{staticClass:"vux-cell-bd",class:{"vux-cell-primary":"title"===t.primary&&"left"!==t.valueAlign}},[l("p",[t.title||t.hasTitleSlot?l("label",{staticClass:"vux-label",class:t.labelClass,style:t.getLabelStyles()},[t._t("title",[t._v(t._s(t.title))])],2):t._e(),t._v(" "),t._t("after-title")],2),t._v(" "),l("inline-desc",[t._t("inline-desc",[t._v(t._s(t.inlineDesc))])],2)],1),t._v(" "),l("div",{staticClass:"weui-cell__ft",class:t.valueClass},[t._t("value"),t._v(" "),t._t("default",[t._v(t._s(t.value))]),t._v(" "),t.isLoading?l("i",{staticClass:"weui-loading"}):t._e()],2),t._v(" "),t._t("child")],2)},staticRenderFns:[]}},92:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[t.title?l("div",{staticClass:"weui-cells__title",style:{color:t.titleColor},domProps:{innerHTML:t._s(t.title)}}):t._e(),t._v(" "),t._t("title"),t._v(" "),l("div",{staticClass:"weui-cells",class:{"vux-no-group-title":!t.title},style:{marginTop:"number"==typeof t.gutter?t.gutter+"px":t.gutter}},[t._t("after-title"),t._v(" "),t._t("default")],2)],2)},staticRenderFns:[]}},94:function(t,e,l){l(85);var n=l(7)(l(43),l(91),null,null);t.exports=n.exports},95:function(t,e,l){l(86);var n=l(7)(l(44),l(92),null,null);t.exports=n.exports},96:function(t,e,l){l(83);var n=l(7)(l(45),l(89),null,null);t.exports=n.exports}},[42]);
//# sourceMappingURL=app.2ee7a81c04a92fd36349.js.map