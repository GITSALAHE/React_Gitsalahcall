(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{117:function(e,a){},119:function(e,a){},129:function(e,a,t){},130:function(e,a,t){},132:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(48),o=t.n(r),i=(t(68),t(2)),l=t(49),s=t.n(l),m=t(21),u=t.n(m),d=t(50),p=t(52),g=t(47),f=t.n(g),v=t(62),b=(t(129),function(){return c.a.createElement("header",{className:"dropShadow"},c.a.createElement("div",{className:"headerWrapper"},c.a.createElement("div",{className:"headerContainer flex"},c.a.createElement("div",{className:"headerLogoLinkWrapper"},c.a.createElement("div",{className:"headerLogoLink"},c.a.createElement("a",{href:"/"},c.a.createElement("div",{className:"headerLogo flex flex-row"},c.a.createElement("div",{className:"logoImg"},c.a.createElement("img",{src:f.a,alt:"Cuckoo Logo"})),c.a.createElement("div",{className:"logoText"},"cuckoo"))))),c.a.createElement("div",{className:"githubStar"},c.a.createElement(v.a,{href:"https://github.com/somikdatta/cuckoo","data-color-scheme":"no-preference: light; light: light; dark: dark;","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star somikdatta/cuckoo on GitHub"},"Star")))))});t(130);var h=function(){return c.a.createElement("footer",{className:"footerWrapper"},c.a.createElement("div",{className:"footerContainer"},c.a.createElement("div",{className:"disclaimer"},"You need to allow access to video and audio to place calls.",c.a.createElement("br",null),"Cuckoo is fully Open Source and does not store any data on its servers."),c.a.createElement("div",{className:"self"},"Made with ",c.a.createElement("span",{role:"img","aria-label":"heart-emoji"},"\u2764\ufe0f")," in India by ",c.a.createElement("a",{href:"https://www.somikdatta.com",target:"_blank",rel:"noopener noreferrer"},"Somik Datta"))))},E=(t(131),t(53)),k=t.n(E),w=t(54),j=t.n(w),y=t(55),O=t.n(y),x=t(56),N=t.n(x),C=t(57),S=t.n(C),T=t(58),z=t.n(T),V=t(59),I=t.n(V),D=t(60),L=t.n(D),W=t(61),B=t.n(W),P=c.a.lazy((function(){return t.e(3).then(t.bind(null,134))})),R=new p.Howl({src:[B.a],loop:!0,preload:!0});var M=function(){var e,a,t,r,o,l=Object(n.useState)(""),m=Object(i.a)(l,2),p=m[0],g=m[1],f=Object(n.useState)({}),v=Object(i.a)(f,2),E=v[0],w=v[1],y=Object(n.useState)(),x=Object(i.a)(y,2),C=x[0],T=x[1],V=Object(n.useState)(!1),D=Object(i.a)(V,2),W=D[0],B=D[1],M=Object(n.useState)(""),q=Object(i.a)(M,2),A=q[0],U=q[1],F=Object(n.useState)(!1),Y=Object(i.a)(F,2),_=Y[0],H=Y[1],J=Object(n.useState)(),G=Object(i.a)(J,2),$=G[0],K=G[1],Q=Object(n.useState)(!1),X=Object(i.a)(Q,2),Z=X[0],ee=X[1],ae=Object(n.useState)(!1),te=Object(i.a)(ae,2),ne=te[0],ce=te[1],re=Object(n.useState)(""),oe=Object(i.a)(re,2),ie=oe[0],le=oe[1],se=Object(n.useState)(!1),me=Object(i.a)(se,2),ue=me[0],de=me[1],pe=Object(n.useState)(""),ge=Object(i.a)(pe,2),fe=ge[0],ve=ge[1],be=Object(n.useState)(!1),he=Object(i.a)(be,2),Ee=he[0],ke=he[1],we=Object(n.useState)(!1),je=Object(i.a)(we,2),ye=je[0],Oe=je[1],xe=Object(n.useState)(!1),Ne=Object(i.a)(xe,2),Ce=Ne[0],Se=Ne[1],Te=Object(n.useState)(!1),ze=Object(i.a)(Te,2),Ve=ze[0],Ie=ze[1],De=Object(n.useRef)(),Le=Object(n.useRef)(),We=Object(n.useRef)(),Be=Object(n.useRef)(),Pe=c.a.createElement(c.a.Fragment,null,c.a.createElement(b,null),c.a.createElement("main",null,c.a.createElement("div",{className:"u-margin-top-xxlarge u-margin-bottom-xxlarge"},c.a.createElement("div",{className:"o-wrapper-l"},c.a.createElement("div",{className:"hero flex flex-column"},c.a.createElement("div",null,c.a.createElement("div",{className:"welcomeText"},"Anonymous Video Calls"),c.a.createElement("div",{className:"descriptionText"},"across the world for free")),c.a.createElement("div",null,c.a.createElement("div",{className:"actionText"},"Who do you want to call, ",c.a.createElement("span",{className:Ve?"username highlight copied":"username highlight",onClick:function(){navigator.clipboard.writeText(p),Ie(!0),setInterval((function(){Ie(!1)}),1e3)}},p),"?")),c.a.createElement("div",{className:"callBox flex"},c.a.createElement("input",{type:"text",placeholder:"Friend ID",value:ie,onChange:function(e){return le(e.target.value)},className:"form-input"}),c.a.createElement("button",{onClick:function(){return function(e){if(""===e||!E[e]||e===p)return ve("We think the username entered is wrong. Please check again and retry!"),void de(!0);navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(a){T(a),H(!0),U(e),De.current&&(De.current.srcObject=a);var t=new u.a({initiator:!0,trickle:!1,config:{iceServers:[{urls:"stun:numb.viagenie.ca",username:"sultan1640@gmail.com",credential:"98376683"},{urls:"turn:numb.viagenie.ca",username:"sultan1640@gmail.com",credential:"98376683"}]},stream:a});Be.current=t,t.on("signal",(function(a){We.current.emit("callUser",{userToCall:e,signalData:a,from:p})})),t.on("stream",(function(e){Le.current&&(Le.current.srcObject=e)})),t.on("error",(function(e){Re()})),We.current.on("callAccepted",(function(e){ee(!0),t.signal(e)})),We.current.on("close",(function(){window.location.reload()})),We.current.on("rejected",(function(){window.location.reload()}))})).catch((function(){ve("You cannot place/ receive a call without granting video and audio permissions! Please change your settings to use Cuckoo."),de(!0)}))}(ie.toLowerCase().trim())},className:"primaryButton"},"Call")),c.a.createElement("div",null,"To call your friend, ask them to open Cuckoo in their browser. ",c.a.createElement("br",null),"Send your username (",c.a.createElement("span",{className:"username"},p),") and wait for their call ",c.a.createElement("span",{style:{fontWeight:600}},"OR")," enter their username and hit call!"))))),c.a.createElement(h,null));function Re(){Be.current.destroy(),We.current.emit("close",{to:A}),window.location.reload()}function Me(){C&&(ke(!Ee),C.getAudioTracks()[0].enabled=Ee)}function qe(){C&&(Oe(!ye),C.getVideoTracks()[0].enabled=ye)}Object(n.useEffect)((function(){We.current=s.a.connect("/"),We.current.on("yourID",(function(e){g(e)})),We.current.on("allUsers",(function(e){w(e)})),We.current.on("hey",(function(e){B(!0),R.play(),U(e.from),K(e.signal)}))}),[]),C&&(e=c.a.createElement("video",{className:"userVideo",playsInline:!0,muted:!0,ref:De,autoPlay:!0})),Z&&Ce?a=c.a.createElement("video",{className:"partnerVideo cover",playsInline:!0,ref:Le,autoPlay:!0}):Z&&!Ce&&(a=c.a.createElement("video",{className:"partnerVideo",playsInline:!0,ref:Le,autoPlay:!0})),!W||Z||ne||(t=c.a.createElement("div",{className:"incomingCallContainer"},c.a.createElement("div",{className:"incomingCall flex flex-column"},c.a.createElement("div",null,c.a.createElement("span",{className:"callerID"},A)," is calling you!"),c.a.createElement("div",{className:"incomingCallButtons flex"},c.a.createElement("button",{name:"accept",className:"alertButtonPrimary",onClick:function(){return R.unload(),void navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){T(e),De.current&&(De.current.srcObject=e),ee(!0);var a=new u.a({initiator:!1,trickle:!1,stream:e});Be.current=a,a.on("signal",(function(e){We.current.emit("acceptCall",{signal:e,to:A})})),a.on("stream",(function(e){Le.current.srcObject=e})),a.on("error",(function(e){Re()})),a.signal($),We.current.on("close",(function(){window.location.reload()}))})).catch((function(){ve("You cannot place/ receive a call without granting video and audio permissions! Please change your settings to use Cuckoo."),de(!0)}))}},"Accept"),c.a.createElement("button",{name:"reject",className:"alertButtonSecondary",onClick:function(){return R.unload(),ce(!0),We.current.emit("rejected",{to:A}),void window.location.reload()}},"Reject"))))),r=Ee?c.a.createElement("span",{className:"iconContainer",onClick:function(){return Me()}},c.a.createElement("img",{src:N.a,alt:"Unmute audio"})):c.a.createElement("span",{className:"iconContainer",onClick:function(){return Me()}},c.a.createElement("img",{src:O.a,alt:"Mute audio"})),o=ye?c.a.createElement("span",{className:"iconContainer",onClick:function(){return qe()}},c.a.createElement("img",{src:j.a,alt:"Resume video"})):c.a.createElement("span",{className:"iconContainer",onClick:function(){return qe()}},c.a.createElement("img",{src:k.a,alt:"Stop audio"}));var Ae=c.a.createElement("span",{className:"iconContainer",onClick:function(){navigator.mediaDevices.getDisplayMedia({cursor:!0}).then((function(e){Be.current.replaceTrack(C.getVideoTracks()[0],e.getVideoTracks()[0],C),De.current.srcObject=e,e.getTracks()[0].onended=function(){Be.current.replaceTrack(e.getVideoTracks()[0],C.getVideoTracks()[0],C),De.current.srcObject=C}}))}},c.a.createElement("img",{src:S.a,alt:"Share screen"}));(function(){var e,a=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(a=!0),a})()&&(Ae=c.a.createElement(c.a.Fragment,null));var Ue,Fe=c.a.createElement("span",{className:"iconContainer",onClick:function(){return Re()}},c.a.createElement("img",{src:z.a,alt:"End call"}));return Ue=Ce?c.a.createElement("span",{className:"iconContainer",onClick:function(){Se(!1)}},c.a.createElement("img",{src:L.a,alt:"fullscreen"})):c.a.createElement("span",{className:"iconContainer",onClick:function(){Se(!0)}},c.a.createElement("img",{src:I.a,alt:"fullscreen"})),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{style:{display:ne||Z||_?"none":"block"}},Pe,c.a.createElement(d.a,{visible:ue,onClose:function(){return de(!1)},width:20,height:5,measure:"em",closeOnEsc:!0},c.a.createElement("div",null,fe)),t),c.a.createElement("div",{className:"callContainer",style:{display:ne||Z||_?"block":"none"}},c.a.createElement(n.Suspense,{fallback:c.a.createElement("div",null,"Loading...")},c.a.createElement(P,null)),c.a.createElement("div",{className:"partnerVideoContainer"},a),c.a.createElement("div",{className:"userVideoContainer"},e),c.a.createElement("div",{className:"controlsContainer flex"},r,o,Ae,Ue,Fe)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},47:function(e,a,t){e.exports=t.p+"static/media/cuckoo-logo.8c9e061e.svg"},53:function(e,a,t){e.exports=t.p+"static/media/camera.299a8f67.svg"},54:function(e,a,t){e.exports=t.p+"static/media/camera-stop.85f8745d.svg"},55:function(e,a,t){e.exports=t.p+"static/media/microphone.a2374838.svg"},56:function(e,a,t){e.exports=t.p+"static/media/microphone-stop.09d0b6c2.svg"},57:function(e,a,t){e.exports=t.p+"static/media/share.e7b143c0.svg"},58:function(e,a,t){e.exports=t.p+"static/media/hang-up.1b1f0dc8.svg"},59:function(e,a,t){e.exports=t.p+"static/media/fullscreen.8f5e7921.svg"},60:function(e,a,t){e.exports=t.p+"static/media/minimize.fff27c21.svg"},61:function(e,a,t){e.exports=t.p+"static/media/ringtone.0be3c651.mp3"},63:function(e,a,t){e.exports=t(132)},68:function(e,a,t){},99:function(e,a){}},[[63,1,2]]]);
//# sourceMappingURL=main.245d602f.chunk.js.map