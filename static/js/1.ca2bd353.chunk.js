(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{21:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),s=n.n(a),c=n(5),i=n.n(c),u=n(4),l=n.n(u),p=n(13),d=n(17),h=n.n(d),m={},f=0,b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"/"===e?e:function(e){var t=e,n=m[t]||(m[t]={});if(n[e])return n[e];var r=h.a.compile(e);return f<1e4&&(n[e]=r,f++),r}(e)(t,{pretty:!0})},w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};var v=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.isStatic=function(){return this.context.router&&this.context.router.staticContext},t.prototype.componentWillMount=function(){l()(this.context.router,"You should not use <Redirect> outside a <Router>"),this.isStatic()&&this.perform()},t.prototype.componentDidMount=function(){this.isStatic()||this.perform()},t.prototype.componentDidUpdate=function(e){var t=Object(p.b)(e.to),n=Object(p.b)(this.props.to);Object(p.c)(t,n)?i()(!1,"You tried to redirect to the same route you're currently on: \""+n.pathname+n.search+'"'):this.perform()},t.prototype.computeTo=function(e){var t=e.computedMatch,n=e.to;return t?"string"===typeof n?b(n,t.params):w({},n,{pathname:b(n.pathname,t.params)}):n},t.prototype.perform=function(){var e=this.context.router.history,t=this.props.push,n=this.computeTo(this.props);t?e.push(n):e.replace(n)},t.prototype.render=function(){return null},t}(o.a.Component);v.propTypes={computedMatch:s.a.object,push:s.a.bool,from:s.a.string,to:s.a.oneOfType([s.a.string,s.a.object]).isRequired},v.defaultProps={push:!1},v.contextTypes={router:s.a.shape({history:s.a.shape({push:s.a.func.isRequired,replace:s.a.func.isRequired}).isRequired,staticContext:s.a.object}).isRequired};var g=v;t.a=g},41:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(91),s=n(11);t.a=function(){return o.a.createElement(s.a.Consumer,null,function(e){var t=e.basePath;return o.a.createElement(a.a,{to:t,className:"navigate home abs-top-left"},o.a.createElement("img",{src:"./assets/svg/placeholder/round-back-arrow.svg",alt:"navigate back to homepage"}))})}},42:function(e,t,n){"use strict";var r=function(e){return e.length<4||e.length>15?(console.log("Invalid username: must be 4 - 15 characters long."),!1):!/\W+/.test(e)||(console.log("Invalid username: can ONLY contain letters, numbers, and an underscores (_)"),!1)},o=function(e){return e.length<6||e.length>12?(console.log("Invalid password: must be 6 - 12 characters long"),!1):/[a-zA-Z]+/.test(e)?/\d+/.test(e)?/\s+/.test(e)?(console.log("Invalid password: cannot include spaces"),!1):!!/\W+/.test(e)||(console.log("Invalid password: MUST include at least 1 symbol"),!1):(console.log("Invalid password: must include at least 1 number"),!1):(console.log("Invalid password: must include at least 1 letter"),!1)};t.a=function(e){var t=e.username,n=e.password;return!!r(t)&&!!o(n)}},43:function(e,t,n){"use strict";function r(e,t){return new Promise(function(n,r){var o=Object.keys(e).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&");return fetch(t,{method:"POST",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"},referrer:"no-referrer",referrerPolicy:"no-referrer-when-downgrade",body:o}).then(function(e){return n(e)}).catch(function(e){return r(e)})})}n.d(t,"a",function(){return r})},96:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(91),s=n(11),c=n(41),i=n(6),u=n(7),l=n(9),p=n(8),d=n(10),h=n(3),m=n(21),f=n(12),b=n(16),w=n(42),v=n(43);var g=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={username:"",password:"",confirmPassword:"",accountCreated:!1},n.onChange=n.onChange.bind(Object(h.a)(Object(h.a)(n))),n.onSubmit=n.onSubmit.bind(Object(h.a)(Object(h.a)(n))),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentWillUnmount",value:function(){this.state.accountCreated&&this.props.authenticate(this.state.username)}},{key:"onChange",value:function(e){switch(e.preventDefault(),e.target.id){case"username":this.setState({username:e.target.value});break;case"password":this.setState({password:e.target.value});break;case"confirm-password":this.setState({confirmPassword:e.target.value});break;default:console.log('ID "'.concat(e.target.id,'" not found - no action taken'))}}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var n,r=this.state,o=r.username,a=r.password,s=r.confirmPassword;Object(w.a)({username:o,password:a})?s===a?(this.props.newNotification("Confirming new account with server...",5e3),(n={username:o,password:a},Object(v.a)(n,"https://git.heroku.com/afternoon-springs-45644.git")).then(function(e){return e.json()}).then(function(e){!0===e.createAccount?t.setState({accountCreated:!0}):t.props.newNotification("Failed to create new account: username taken",5e3,"error")}).catch(function(e){console.error(e),t.props.newNotification("Failed to connect to server",5e3,"error")})):console.log("password & confirm password don't match D:"):console.log("invalid fields...no action taken")}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{onSubmit:this.onSubmit},o.a.createElement("input",{id:"username",className:"rounded-border",type:"text",placeholder:"username",value:this.state.username,onChange:this.onChange,required:!0}),o.a.createElement("input",{id:"password",className:"rounded-border",type:"password",placeholder:"password",value:this.state.password,onChange:this.onChange,required:!0}),o.a.createElement("input",{id:"confirm-password",className:"rounded-border",type:"password",placeholder:"confirm password",value:this.state.confirmPassword,onChange:this.onChange,required:!0}),o.a.createElement("button",{id:"submit",type:"submit",onClick:this.onSubmit},"SIGN UP")),this.state.accountCreated?o.a.createElement(m.a,{to:"/profile"}):null)}}]),t}(r.Component),y=function(e){return o.a.createElement(b.a.Consumer,null,function(t){var n=t.newNotification;return o.a.createElement(f.a.Consumer,null,function(t){var r=t.authenticate;return o.a.createElement(g,Object.assign({},e,{authenticate:r,newNotification:n}))})})};t.default=function(){return o.a.createElement(s.a.Consumer,null,function(e){var t=e.basePath;return o.a.createElement("article",{id:"create-account",className:"wrapper center"},o.a.createElement(c.a,null),o.a.createElement("h1",null,"Create Account"),o.a.createElement(y,null),o.a.createElement("p",{className:"related-info"},"Already have an account?"," ",o.a.createElement(a.a,{className:"link-to-default",to:"".concat(t,"login")},"Login here")))})}}}]);
//# sourceMappingURL=1.ca2bd353.chunk.js.map