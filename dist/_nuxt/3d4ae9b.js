(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{346:function(t,o,e){var content=e(399);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(87).default)("411146eb",content,!0,{sourceMap:!1})},397:function(t,o){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAUCAYAAADlep81AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEHSURBVHgBvdU9DoJAEAXgWbmADaG1JyQehRuIpaU30Bt4A/FGWkCrttBwAcAZAgngAvvLS0jgMWG/ZEmW+b5/YIzd6rouAOCSJMkDVsx4fYbFG4tdN4AvorVQLSbuVcUGi21/iAZoECyHg6G1G9B5PGwbxcNQyrK8OlmWPT3P++JzCENU6LruJ8/zFxjMFKaqqmOaprFDD2uhljB073SlbZQIZgCyiRLF/IFsoGQwXJBJlCxmEmQCpYKZBemgVDGLIBWUDkYIJIPSxTTfBIkEQRDh4Xsf93Qgt8AYNDDSoDkUL7IYitCW9TO1fSYwSiARlCpGGTSH0sFogfoo/Jn3eBHmpIOh/ABEPiDVOYzxDwAAAABJRU5ErkJggg=="},398:function(t,o,e){"use strict";e(346)},399:function(t,o,e){var r=e(86)((function(i){return i[1]}));r.push([t.i,".missionEpisodeContent[data-v-6aade525]{width:100%;--tw-bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity));padding:28px 16px 0}.selectBox[data-v-6aade525]{align-items:center;border-bottom-width:2px;cursor:pointer;display:flex;height:48px;justify-content:space-between;position:relative;width:100%;--tw-border-opacity:1;border-color:#2c2c2c;border-color:rgba(44,44,44,var(--tw-border-opacity));padding-left:16px;padding-right:16px}.selected-option[data-v-6aade525]{font-size:20px;font-weight:800;line-height:20px;--tw-text-opacity:1;color:#2c2c2c;color:rgba(44,44,44,var(--tw-text-opacity))}.dropdown-options[data-v-6aade525]{left:0;position:absolute;top:48px;width:100%;z-index:10;--tw-bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity));--tw-shadow:0 25px 50px -12px rgba(0,0,0,.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);box-shadow:0 0 transparent,0 0 transparent,0 25px 50px -12px rgba(0,0,0,.25);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)}.dropdown-option[data-v-6aade525]{border-bottom-width:1px;cursor:pointer;--tw-border-opacity:1;border-color:#2c2c2c;border-color:rgba(44,44,44,var(--tw-border-opacity));font-size:16px;font-weight:700;padding:12px 16px;--tw-text-opacity:1;color:#2c2c2c;color:rgba(44,44,44,var(--tw-text-opacity))}.dropdown-option[data-v-6aade525]:last-child{border-bottom-width:0}.item-txt[data-v-6aade525]{margin-top:44px;padding-left:8px;padding-right:8px}.item-txt p[data-v-6aade525]{font-size:14px;font-weight:800;line-height:24px;--tw-text-opacity:1;color:#2c2c2c;color:rgba(44,44,44,var(--tw-text-opacity))}",""]),r.locals={},t.exports=r},450:function(t,o,e){"use strict";e.r(o);var r={data:function(){return{isDropdownOpen:!1,selectedItem:"티플랙스",items:["티플랙스","대주전자재료"]}},mounted:function(){document.addEventListener("click",this.closeDropDown)},beforeDestroy:function(){document.removeEventListener("click",this.closeDropDown)},methods:{dropDown:function(){this.isDropdownOpen=!this.isDropdownOpen},selectItem:function(t){this.selectedItem=t,this.isDropdownOpen=!1},closeDropDown:function(t){this.$el.contains(t.target)||(this.isDropdownOpen=!1)}}},n=(e(398),e(50)),component=Object(n.a)(r,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"missionEpisodeContent"},[o("div",{staticClass:"selectBox",on:{click:t.dropDown}},[o("div",{staticClass:"selected-option"},[t._v("\n      "+t._s(t.selectedItem)+"\n    ")]),t._v(" "),o("img",{attrs:{width:"18",src:e(397),alt:"드롭다운 아이콘"}}),t._v(" "),t.isDropdownOpen?o("ul",{staticClass:"dropdown-options"},t._l(t.items,(function(e,r){return o("li",{key:r,staticClass:"dropdown-option",on:{click:function(o){return o.stopPropagation(),t.selectItem(e)}}},[t._v("\n        "+t._s(e)+"\n      ")])})),0):t._e()]),t._v(" "),o("div",{staticClass:"item-txt"},["티플랙스"===t.selectedItem||"대주전자재료"===t.selectedItem?o("p",[t._v("\n      차트 매매기법 미션이므로 별도의 투자정보를 제공하지 않습니다. "),o("br"),t._v("\n      차트/매매 탭으로 이동하여 체험매매를 진행해주세요.  \n    ")]):t._e()])])}),[],!1,null,"6aade525",null);o.default=component.exports}}]);