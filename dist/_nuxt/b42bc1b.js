(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{351:function(t,e,n){var content=n(412);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(87).default)("73438762",content,!0,{sourceMap:!1})},410:function(t,e,n){t.exports=n.p+"img/missionQ-img.5f835bb.png"},411:function(t,e,n){"use strict";n(351)},412:function(t,e,n){var o=n(86)((function(i){return i[1]}));o.push([t.i,".missionQIntro[data-v-60e749ac]{align-items:center;display:flex;gap:10px;justify-content:space-between;width:100%;--tw-bg-opacity:1;background-color:#7875fd;background-color:rgba(120,117,253,var(--tw-bg-opacity,1));padding:23px 36px 16px 16px}.missionQIntro__txt[data-v-60e749ac]{align-items:flex-start;flex-direction:column}.missionQIntro__txt[data-v-60e749ac],.missionQIntro__txt--title[data-v-60e749ac]{display:flex;gap:8px;justify-content:flex-start}.missionQIntro__txt--title[data-v-60e749ac]{align-items:center}.missionQIntro__txt--title strong[data-v-60e749ac]{font-size:22px;font-weight:800;line-height:22px;--tw-text-opacity:1}.missionQIntro__txt--title em[data-v-60e749ac],.missionQIntro__txt--title strong[data-v-60e749ac]{color:#fff;color:rgba(255,255,255,var(--tw-text-opacity,1))}.missionQIntro__txt--title em[data-v-60e749ac]{border-radius:12px;border-width:1px;--tw-border-opacity:1;border-color:#fff;border-color:rgba(255,255,255,var(--tw-border-opacity,1));font-size:10px;font-weight:600;line-height:12px;padding:3px 10px;--tw-text-opacity:1}.missionQIntro__txt span[data-v-60e749ac]{font-size:12px;font-weight:500;line-height:14.32px;--tw-text-opacity:1;color:#fff;color:rgba(255,255,255,var(--tw-text-opacity,1))}.missionQIntro__txt span strong[data-v-60e749ac]{font-size:16px;font-weight:800}.missionQIntro__txt span em[data-v-60e749ac]{display:inline-block;font-size:12px;font-weight:800;line-height:14px;margin-top:4px}.missionQIntro__img img[data-v-60e749ac]{min-width:97px}",""]),o.locals={},t.exports=o},455:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"missionQIntro__txt--title"},[e("strong",[t._v("평가퀴즈")]),t._v(" "),e("em",[t._v("미션01")])])},function(){var t=this,e=t._self._c;return e("span",[t._v("\n      매매기법을 복습하고 이해도를 확인하는 "),e("br"),t._v("\n      퀴즈입니다.\n    ")])},function(){var t=this._self._c;return t("div",{staticClass:"missionQIntro__txt--title"},[t("strong",[this._v("평가퀴즈 완료")])])},function(){var t=this._self._c;return t("div",{staticClass:"missionQIntro__img"},[t("img",{attrs:{width:"97",src:n(410),alt:"평가퀴즈 이미지"}})])}],r=(n(216),{props:{isResultVisible:{type:Boolean,required:!0},correctAnswers:{type:Number,required:!0}},computed:{resultText:function(){return 5===this.correctAnswers||4===this.correctAnswers?"미션학습에 대한 이해도가 매우 높습니다. 잘하셨습니다.":3===this.correctAnswers?"나쁘지 않은 성과입니다. 기본적인 이해는 있지만 몇 가지 세부사항에 대한 학습이 필요합니다.":2===this.correctAnswers?"노력하셨습니다. 더 많은 학습과 복습이 필요합니다.":"현재 이해도가 부족합니다. 다시 한번 학습해 보세요."}}}),c=(n(411),n(50)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"missionQIntro"},[t.isResultVisible?t._e():e("div",{staticClass:"missionQIntro__txt"},[t._m(0),t._v(" "),t._m(1)]),t._v(" "),t.isResultVisible?e("div",{staticClass:"missionQIntro__txt"},[t._m(2),t._v(" "),e("span",[t._v("\n      총 "),e("strong",[t._v("5문제")]),t._v(" 중 "),e("strong",[t._v(t._s(t.correctAnswers)+"문제")]),t._v("를 맞추셨습니다. "),e("br"),t._v(" "),e("em",[t._v(t._s(t.resultText))])])]):t._e(),t._v(" "),t._m(3)])}),o,!1,null,"60e749ac",null);e.default=component.exports}}]);