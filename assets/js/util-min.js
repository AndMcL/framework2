var framework={dejq:function(e){console.log(e)},mktoggle:function(e,t){return'<i class="'+e+" fas fa-toggle-"+(t?"on":"off")+'"></i>'},tick:function(e){return framework.mktoggle("",e)},toggle:function(e){e.classList.toggle("fa-toggle-off"),e.classList.toggle("fa-toggle-on")},dotoggle:function(e,t,a,o){e.preventDefault(),e.stopPropagation();let n=t.classList;if(!n.contains("fadis"))if(n.contains("htick")){const e=t.nextElementSibling;e.val(1==e.val()?0:1),framework.toggle(t)}else{const e=t.parent().parent();$.ajax(base+"/ajax/toggle/"+a+"/"+e.data("id")+"//"+o,{method:putorpatch}).done((function(){framework.toggle(t)})).fail((function(e){bootbox.alert("<h3>Toggle failed</h3>"+e.responseText)}))}},deletebean:function(e,t,a,o,n,r=""){e.preventDefault(),e.stopPropagation(),""==r&&(r="this "+a),bootbox.confirm("Are you sure you you want to delete "+r+"?",(function(e){e&&$.ajax(base+"/ajax/bean/"+a+"/"+o+"/",{method:"DELETE"}).done(n).fail((function(e){bootbox.alert("<h3>Delete failed</h3>"+e.responseText)}))}))},editcall:function(e){const t=base+"/ajax/"+e.op+"/"+e.bean+"/"+e.pk+"/"+e.name+"/";return $.ajax(t,{method:putorpatch,data:{value:e.value}})},removeNode:function(e){var t=[e];if(e.hasAttribute("rowspan")){let a=parseInt(e.getAttribute("rowspan"))-1;for(;a>0;)t[a]=t[a-1].elementSibling}for(let e of t)e.parentNode.removeChild(e)},fadetodel:function(e){e.classList.add("fader"),e.style.opacity="0",setTimeout((function(){framework.removeNode(e)}),1500)},dodelbean:function(e,t,a,o=""){let n=$(t).parent().parent();framework.deletebean(e,t,a,n.data("id"),(function(){framework.fadetodel(t.parentNode.parentNode)}),o)},tableClick:function(e){e.preventDefault();const t=$(e.target);e.data.clicks.forEach((function(a){let[o,n,r]=a;t.hasClass(o)&&n(e,t,e.data.bean,r)}))},goedit:function(e,t,a){window.location.href=base+"/admin/edit/"+a+"/"+t.parent().parent().data("id")+"/"},goview:function(e,t,a){window.location.href=base+"/admin/view/"+a+"/"+t.parent().parent().data("id")+"/"},beanCreate:function(e,t,a,o){$.post(base+"/ajax/bean/"+e+"/",t).done(a).fail((function(t){bootbox.alert("<h3>Failed to create new "+e+"</h3>"+t.responseText)})).always((function(){$(o).attr("disabled",!1)}))},addMore:function(e){e.preventDefault(),$("#mrow").before($("#example").clone()),$("input,textarea",$("#mrow").prev()).val(""),$("option",$("#mrow").prev()).prop("selected",!1)},easeInOut:function(e,t,a,o,n){return Math.ceil(e+Math.pow(1/a*o,n)*(t-e))},doBGFade:function(e,t,a,o,n,r,i){e.bgFadeInt&&window.clearInterval(e.bgFadeInt);let l=0;e.bgFadeInt=window.setInterval((function(){e.css("backgroundcolor","rgb("+framework.easeInOut(t[0],a[0],n,l,i)+","+framework.easeInOut(t[1],a[1],n,l,i)+","+framework.easeInOut(t[2],a[2],n,l,i)+")"),l+=1,l>n&&(e.css("backgroundcolor",o),window.clearInterval(e.bgFadeInt))}),r)}};