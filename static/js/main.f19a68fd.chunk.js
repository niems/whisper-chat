(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(t,e,n){"use strict";var a=n(0),i=n.n(a).a.createContext({production:!1,basePath:""});e.a=i},12:function(t,e,n){"use strict";var a=n(0),i=n.n(a).a.createContext({isUserAuthenticated:{status:!1,username:""},authenticate:function(){},signout:function(){}});e.a=i},16:function(t,e,n){"use strict";var a=n(0),i=n.n(a).a.createContext({isActive:!1,msg:"",newNotification:function(){}});e.a=i},22:function(t,e,n){t.exports=n(34)},27:function(t,e,n){},31:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),c=n(19),o=n.n(c),r=n(97),s=(n(27),n(6)),u=n(7),l=n(9),h=n(8),m=n(10),p=n(3),v=n(98),f=n(100),d=n(11),b=n(12);function g(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"authentication",e=decodeURIComponent(document.cookie).split(";"),n=t+"=",a=new RegExp(n),i=0;i<e.length;i++)if(a.test(e[i]))return e[i].substring(n.length+1)}function E(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"authenticated";return document.cookie="".concat(t,"=; expires=Thu, 01 Jan 1970 00:00:00 UTC;"),g(t)}var w=n(91),O=function(){return i.a.createElement(b.a.Consumer,null,function(t){var e=t.isUserAuthenticated;return i.a.createElement(d.a.Consumer,null,function(t){var n=t.basePath;return i.a.createElement("main",{id:"homepage",className:"wrapper main"},i.a.createElement("header",null,i.a.createElement("div",{className:"row space-between"},i.a.createElement(w.a,{className:"link-to",to:"".concat(n,"create-account")},"Create Account"),e.status?i.a.createElement(w.a,{className:"link-to",to:"".concat(n,"profile")},"Profile"):i.a.createElement(w.a,{className:"link-to",to:"".concat(n,"login")},"Login")),i.a.createElement("h1",null,"Whisper chat"),i.a.createElement("p",null,"App description here...")))})})},j=n(16),A=function(t){var e=t.isActive,n=t.msg,a=t.duration,c=t.type;return e?i.a.createElement("p",{className:"notification ".concat(c),style:{animationDuration:"".concat(a,"ms")}},n):null},y=function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(l.a)(this,Object(h.a)(e).call(this,t))).state={isActive:!1,msg:"",duration:0,type:""},n.timerID=null,n.newNotification=n.newNotification.bind(Object(p.a)(Object(p.a)(n))),n.newNotificationSetup=n.newNotificationSetup.bind(Object(p.a)(Object(p.a)(n))),n.previousNotificationActive=n.previousNotificationActive.bind(Object(p.a)(Object(p.a)(n))),n}return Object(m.a)(e,t),Object(u.a)(e,[{key:"newNotification",value:function(t,e){var n=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";this.previousNotificationActive().then(function(){return n.newNotificationSetup(t,e,a)}).catch(function(t){return console.error(t)})}},{key:"newNotificationSetup",value:function(t,e,n){var a=this;this.setState({isActive:!0,msg:t,duration:e,type:n}),this.timerID=setTimeout(function(){a.setState({isActive:!1,msg:"",duration:0,type:""})},e)}},{key:"previousNotificationActive",value:function(){var t=this;return new Promise(function(e){t.state.isActive?(clearTimeout(t.timerID),t.timerID=null,t.setState({isActive:!1},function(){e()})):e()})}},{key:"render",value:function(){return i.a.createElement(j.a.Provider,{value:{isActive:this.state.isActive,msg:this.state.msg,newNotification:this.newNotification}},this.props.children,i.a.createElement(A,{isActive:this.state.isActive,msg:this.state.msg,duration:this.state.duration,type:this.state.type}))}}]),e}(a.Component),N=(n(31),Object(a.lazy)(function(){return n.e(1).then(n.bind(null,96))})),k=Object(a.lazy)(function(){return n.e(2).then(n.bind(null,95))}),P=Object(a.lazy)(function(){return n.e(3).then(n.bind(null,99))}),S=Object(a.lazy)(function(){return n.e(4).then(n.bind(null,92))}),C=function(t){function e(t){var n;Object(s.a)(this,e),n=Object(l.a)(this,Object(h.a)(e).call(this,t));var a=g("username");return n.state={isUserAuthenticated:{status:void 0!==a,username:void 0===a?"":a}},n.authenticate=n.authenticate.bind(Object(p.a)(Object(p.a)(n))),n.signout=n.signout.bind(Object(p.a)(Object(p.a)(n))),n}return Object(m.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){console.log("basePath: ".concat(JSON.stringify(this.props.basePath),"\n"))}},{key:"authenticate",value:function(t){this.setState({isUserAuthenticated:{status:!0,username:t}})}},{key:"signout",value:function(){E("token"),E("username"),this.setState({isUserAuthenticated:{status:!1,username:""}})}},{key:"render",value:function(){return i.a.createElement("div",{id:"app"},i.a.createElement(y,null,i.a.createElement(b.a.Provider,{value:{isUserAuthenticated:this.state.isUserAuthenticated,authenticate:this.authenticate,signout:this.signout}},i.a.createElement(a.Suspense,{fallback:i.a.createElement("div",null,"Loading...")},i.a.createElement(v.a,null,i.a.createElement(f.a,{exact:!0,path:this.props.basePath,component:O}),i.a.createElement(f.a,{path:"".concat(this.props.basePath,"create-account"),component:N}),i.a.createElement(f.a,{path:"".concat(this.props.basePath,"login"),component:k}),i.a.createElement(f.a,{path:"".concat(this.props.basePath,"profile"),component:P}),i.a.createElement(f.a,{component:S}))))))}}]),e}(a.Component);var U=function(t){return i.a.createElement(d.a.Provider,{value:{production:!0,basePath:"/whisper-chat/"}},i.a.createElement(C,Object.assign({},t,{basePath:"/whisper-chat/"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(r.a,null,i.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[22,9,8]]]);
//# sourceMappingURL=main.f19a68fd.chunk.js.map