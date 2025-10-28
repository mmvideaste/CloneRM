
/* inline-script */
window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/11.2.0\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/11.2.0\/svg\/","svgExt":".svg","source":{"concatemoji":"\/wp-includes\/js\/wp-emoji-release.min.js?ver=5.1.17"}};
      !function(e,a,t){var n,r,o,i=a.createElement("canvas"),p=i.getContext&&i.getContext("2d");function s(e,t){var a=String.fromCharCode;p.clearRect(0,0,i.width,i.height),p.fillText(a.apply(this,e),0,0);e=i.toDataURL();return p.clearRect(0,0,i.width,i.height),p.fillText(a.apply(this,t),0,0),e===i.toDataURL()}function c(e){var t=a.createElement("script");t.src=e,t.defer=t.type="text/javascript",a.getElementsByTagName("head")[0].appendChild(t)}for(o=Array("flag","emoji"),t.supports={everything:!0,everythingExceptFlag:!0},r=0;r<o.length;r++)t.supports[o[r]]=function(e){if(!p||!p.fillText)return!1;switch(p.textBaseline="top",p.font="600 32px Arial",e){case"flag":return s([55356,56826,55356,56819],[55356,56826,8203,55356,56819])?!1:!s([55356,57332,56128,56423,56128,56418,56128,56421,56128,56430,56128,56423,56128,56447],[55356,57332,8203,56128,56423,8203,56128,56418,8203,56128,56421,8203,56128,56430,8203,56128,56423,8203,56128,56447]);case"emoji":return!s([55358,56760,9792,65039],[55358,56760,8203,9792,65039])}return!1}(o[r]),t.supports.everything=t.supports.everything&&t.supports[o[r]],"flag"!==o[r]&&(t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&t.supports[o[r]]);t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&!t.supports.flag,t.DOMReady=!1,t.readyCallback=function(){t.DOMReady=!0},t.supports.everything||(n=function(){t.readyCallback()},a.addEventListener?(a.addEventListener("DOMContentLoaded",n,!1),e.addEventListener("load",n,!1)):(e.attachEvent("onload",n),a.attachEvent("onreadystatechange",function(){"complete"===a.readyState&&t.readyCallback()})),(n=t.source||{}).concatemoji?c(n.concatemoji):n.wpemoji&&n.twemoji&&(c(n.twemoji),c(n.wpemoji)))}(window,document,window._wpemojiSettings);

/* inline-script */
/*@cc_on
      	@if (@_jscript_version == 10)
          	document.write('<style type="text/css">.search input,#searchform input {padding-left:10px;} .avada-select-parent .avada-select-arrow,.select-arrow{height:33px;background-color:#ffffff;}.search input{padding-left:5px;}header .tagline{margin-top:3px;}.star-rating span:before {letter-spacing: 0;}.avada-select-parent .avada-select-arrow,.gravity-select-parent .select-arrow,.wpcf7-select-parent .select-arrow,.select-arrow{background: #fff;}.star-rating{width: 5.2em;}.star-rating span:before {letter-spacing: 0.1em;}</style>');
      	@end
      @*/

      var doc = document.documentElement;
      doc.setAttribute('data-useragent', navigator.userAgent);

/* inline-script */
WebFontConfig = {
      	google: { families: [ "Fauna+One:400,400italic,700,700italic:latin,greek-ext,cyrillic,latin-ext,greek,cyrillic-ext,vietnamese" ] },		custom: { families: ['FontAwesome'],
      			  urls: 	['/wp-content/themes/Avada/fonts/fontawesome/font-awesome.css']
      			}	};
      (function() {
      	var wf = document.createElement('script');
      	wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      	  '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
      	wf.type = 'text/javascript';
      	wf.async = 'true';
      	var s = document.getElementsByTagName('script')[0];
      	s.parentNode.insertBefore(wf, s);
      })();

/* inline-script */
jQuery(function ($) {
  // Reactivate PrettyPhoto for portfolio loupes
  $("a[rel^='prettyPhoto'], a[data-rel^='prettyPhoto']").prettyPhoto({
    theme: "pp_default",
    social_tools: false,
    deeplinking: false,
    show_title: true,
    default_width: 960,
    default_height: 540
  });
});
