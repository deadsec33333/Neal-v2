!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}!function(){if("function"!=typeof window.CustomEvent){window.CustomEvent=function(e,t){t=t||{bubbles:!1,cancelable:!1,detail:null};var o=document.createEvent("CustomEvent");return o.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),o}}function t(){var t,o=this.parentNode,a=arguments.length;if(o)for(a||o.removeChild(this);a--;)"object"!==e(t=arguments[a])?t=this.ownerDocument.createTextNode(t):t.parentNode&&t.parentNode.removeChild(t),a?o.insertBefore(t,this.nextSibling):o.replaceChild(t,this)}Element.prototype.replaceWith||(Element.prototype.replaceWith=t),CharacterData.prototype.replaceWith||(CharacterData.prototype.replaceWith=t),DocumentType.prototype.replaceWith||(DocumentType.prototype.replaceWith=t),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){var o,a=this.length;for(t=t||window,o=0;o<a;o++)e.call(t,this[o],o,this)})}(),advads={supports_localstorage:function(){"use strict";try{return!(!window||void 0===window.localStorage)&&(window.localStorage.setItem("x","x"),window.localStorage.removeItem("x"),!0)}catch(e){return!1}},max_per_session:function(e,t){var o=1;if(void 0!==t&&0!==parseInt(t)||(t=1),this.cookie_exists(e)){if(this.get_cookie(e)>=t)return!0;o+=parseInt(this.get_cookie(e))}return this.set_cookie(e,o),!1},count_up:function(e,t){var o=1;this.cookie_exists(e)&&(o+=parseInt(this.get_cookie(e))),this.set_cookie(e,o)},set_cookie_exists:function(e){return!!get_cookie(e)||(set_cookie(e,"",0),!1)},get_cookie:function(e){var t,o,a,n=document.cookie.split(";");for(t=0;t<n.length;t++)if(o=n[t].substr(0,n[t].indexOf("=")),a=n[t].substr(n[t].indexOf("=")+1),(o=o.replace(/^\s+|\s+$/g,""))===e)return decodeURIComponent(a)},set_cookie:function(e,t,o,a,n,i){var s=null==o?null:24*o*60*60;this.set_cookie_sec(e,t,s,a,n,i)},set_cookie_sec:function(e,t,o,a,n,i){var s=new Date;s.setSeconds(s.getSeconds()+parseInt(o)),document.cookie=e+"="+encodeURIComponent(t)+(null==o?"":"; expires="+s.toUTCString())+(null==a?"; path=/":"; path="+a)+(null==n?"":"; domain="+n)+(null==i?"":"; secure")},cookie_exists:function(e){var t=this.get_cookie(e);return null!==t&&""!==t&&void 0!==t},move:function(e,t,o){var a=jQuery(e),n=t;if(void 0===o&&(o={}),void 0===o.css&&(o.css={}),void 0===o.method&&(o.method="prependTo"),""===t&&void 0!==o.target&&"wrapper"===o.target){var i="left";void 0!==o.offset&&(i=o.offset),t=this.find_wrapper(e,i)}switch((t=void 0===o.moveintohidden?jQuery(t).filter(":visible"):jQuery(t)).length>1&&console.log("Advanced Ads: element '"+n+"' found "+t.length+" times."),o.method){case"insertBefore":a.insertBefore(t);break;case"insertAfter":a.insertAfter(t);break;case"appendTo":a.appendTo(t);break;default:a.prependTo(t)}},set_parent_relative:function(e,t){t=void 0!==t?t:{};var o=jQuery(e).parent();t.use_grandparent&&(o=o.parent()),"static"!==o.css("position")&&""!==o.css("position")||o.css("position","relative")},fix_element:function(e,t){t=void 0!==t?t:{};var o=jQuery(e);t.use_grandparent?this.set_parent_relative(o.parent()):this.set_parent_relative(o),t.is_invisible&&o.show();var a=parseInt(o.offset().top),n=parseInt(o.offset().left);if(t.is_invisible&&o.hide(),"left"===t.offset){var i=jQuery(window).width()-n-o.outerWidth();o.css("position","fixed").css("top",a+"px").css("right",i+"px").css("left","")}else o.css("position","fixed").css("top",a+"px").css("left",n+"px").css("right","")},find_wrapper:function(e,t){var o;return jQuery("body").children().each((function(a,n){if(n.id!==e.substring(1)){var i=jQuery(n);if("right"===t&&i.offset().left+jQuery(i).width()<jQuery(window).width()||"left"===t&&i.offset().left>0)return"static"!==i.css("position")&&""!==i.css("position")||i.css("position","relative"),o=n,!1}})),o},center_fixed_element:function(e){var t=jQuery(e),o=jQuery(window).width()/2-parseInt(t.css("width"))/2;t.css("left",o+"px")},center_vertically:function(e){var t=jQuery(e),o=jQuery(window).height()/2-parseInt(t.css("height"))/2;"fixed"!==t.css("position")&&(o-=topoffset=parseInt(t.offset().top)),t.css("top",o+"px")},close:function(e){jQuery(e).remove()},wait_for_images:function(e,t){var o=0,a=[];e.find('img[src][src!=""]').each((function(){a.push(this.src)})),0===a.length&&t.call(e),jQuery.each(a,(function(n,i){var s=new Image;s.src=i;var r="load error";jQuery(s).one(r,(function n(i){if(jQuery(this).off(r,n),++o==a.length)return t.call(e[0]),!1}))}))},privacy:{state:"unknown",state_executed:!1,get_state:function(){if("unknown"!==window.advads_options.privacy.state)return advads.privacy.state_executed||(advads.privacy.state_executed=!0,advads.privacy.dispatch_event(window.advads_options.privacy.state,!1)),advads.privacy.state;if("custom"===window.advads_options.privacy["consent-method"]){var e=new RegExp(".*?"+window.advads_options.privacy["custom-cookie-value"]+"[^;]*?"),t=advads.get_cookie(window.advads_options.privacy["custom-cookie-name"])||"";advads.privacy.state_executed||(advads.privacy.state_executed=!0,advads.privacy.dispatch_event(t.match(e)?"accepted":"unknown",!0))}advads.privacy.state_executed=!0;var o=0,a=setInterval((function(){switch(600==++o&&clearInterval(a),window.advads_options.privacy["consent-method"]){case"custom":(advads.get_cookie(window.advads_options.privacy["custom-cookie-name"])||"").match(e)&&(clearInterval(a),"accepted"!==advads.privacy.state&&advads.privacy.dispatch_event("accepted",!0));break;case"iab_tcf_20":if(void 0===window.__tcfapi)return;clearInterval(a),window.__tcfapi("addEventListener",2,(function(e,t){if(t&&("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||null===e.eventStatus&&void 0!==window.googlefc&&(void 0!==e.purpose||!e.gdprApplies))){var o="useractioncomplete"===e.eventStatus;if(!e.gdprApplies)return void("not_needed"!==advads.privacy.state&&advads.privacy.dispatch_event("not_needed",o));if(e.purpose.consents[1])return void("accepted"!==advads.privacy.state&&advads.privacy.dispatch_event("accepted",o));"rejected"!==advads.privacy.state&&advads.privacy.dispatch_event("rejected",o)}}))}}),100);return advads.privacy.state},is_adsense_npa_enabled:function(){return!window.advads_options||!window.advads_options.privacy||!(!window.advads_options.privacy["show-non-personalized-adsense"]||"custom"!==window.advads_options.privacy["consent-method"])},dispatch_event:function(e,t){var o=advads.privacy.state;advads.privacy.state=e,console.log({state:e,previousState:o,userAction:t}),window.advanced_ads_ready_queue.push((function(){document.dispatchEvent(new CustomEvent("advanced_ads_privacy",{detail:{state:e,previousState:o,userAction:t}}))}))},is_ad_decoded:function(e){return null===document.querySelector('script[data-tcf="waiting-for-consent"][data-id="'+e+'"]')},decode_ad:function(e,t){t="boolean"!=typeof t||t;var o=decodeURIComponent(Array.prototype.map.call(atob(e.textContent),(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join(""));if(!t)return o;e.replaceWith(document.createRange().createContextualFragment(o))}}},window.advanced_ads_ready_queue.push(advads.privacy.get_state),document.addEventListener("advanced_ads_privacy",(function(e){"accepted"!==e.detail.state&&"not_needed"!==e.detail.state||e.detail.userAction||"loading"===document.readyState||document.querySelectorAll('script[type="text/plain"][data-tcf="waiting-for-consent"]').forEach(advads.privacy.decode_ad)}))}();