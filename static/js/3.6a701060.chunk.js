(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{21:function(e,t,n){"use strict";var o=n(0),r=n.n(o),c=n(1),i=n.n(c),a=n(5),u=n.n(a),s=n(4),f=n.n(s),p=n(13),l=n(17),h=n.n(l),d={},b=0,m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"/"===e?e:function(e){var t=e,n=d[t]||(d[t]={});if(n[e])return n[e];var o=h.a.compile(e);return b<1e4&&(n[e]=o,b++),o}(e)(t,{pretty:!0})},y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};var v=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.isStatic=function(){return this.context.router&&this.context.router.staticContext},t.prototype.componentWillMount=function(){f()(this.context.router,"You should not use <Redirect> outside a <Router>"),this.isStatic()&&this.perform()},t.prototype.componentDidMount=function(){this.isStatic()||this.perform()},t.prototype.componentDidUpdate=function(e){var t=Object(p.b)(e.to),n=Object(p.b)(this.props.to);Object(p.c)(t,n)?u()(!1,"You tried to redirect to the same route you're currently on: \""+n.pathname+n.search+'"'):this.perform()},t.prototype.computeTo=function(e){var t=e.computedMatch,n=e.to;return t?"string"===typeof n?m(n,t.params):y({},n,{pathname:m(n.pathname,t.params)}):n},t.prototype.perform=function(){var e=this.context.router.history,t=this.props.push,n=this.computeTo(this.props);t?e.push(n):e.replace(n)},t.prototype.render=function(){return null},t}(r.a.Component);v.propTypes={computedMatch:i.a.object,push:i.a.bool,from:i.a.string,to:i.a.oneOfType([i.a.string,i.a.object]).isRequired},v.defaultProps={push:!1},v.contextTypes={router:i.a.shape({history:i.a.shape({push:i.a.func.isRequired,replace:i.a.func.isRequired}).isRequired,staticContext:i.a.object}).isRequired};var j=v;t.a=j},99:function(e,t,n){"use strict";n.r(t);var o=n(6),r=n(7),c=n(9),i=n(8),a=n(10),u=n(3),s=n(0),f=n.n(s),p=n(21),l=n(11);var h=n(16),d=Object(s.lazy)(function(){return Promise.all([n.e(7),n.e(5)]).then(n.bind(null,94))}),b=Object(s.lazy)(function(){return n.e(6).then(n.bind(null,93))}),m=function(e){return f.a.createElement("article",{className:"wrapper center"},f.a.createElement("h1",null,"Verifying profile"),f.a.createElement("span",null,"Please wait...like you have a choice"))},y=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(i.a)(t).call(this,e))).state={accountVerified:null,component:f.a.createElement(m,null)},n.checkAccountToken=n.checkAccountToken.bind(Object(u.a)(Object(u.a)(n))),n.checkAccountVerification=n.checkAccountVerification.bind(Object(u.a)(Object(u.a)(n))),n.failedAccountVerification=n.failedAccountVerification.bind(Object(u.a)(Object(u.a)(n))),n.failedVerificationRedirect=n.failedVerificationRedirect.bind(Object(u.a)(Object(u.a)(n))),n}return Object(a.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.checkAccountToken()}},{key:"checkAccountToken",value:function(){var e=this;new Promise(function(e,t){fetch("https://afternoon-springs-45644.herokuapp.com/verify-token",{method:"GET",credentials:"include"}).then(function(t){return e(t)}).catch(function(e){return t(e)})}).then(function(e){return e.json()}).then(function(t){return e.checkAccountVerification(t)}).catch(function(t){return e.failedAccountVerification(t)})}},{key:"checkAccountVerification",value:function(e){var t=this;return new Promise(function(n,o){console.log("server response: ".concat(JSON.stringify(e),"\n")),e.accountVerified?(t.setState({accountVerified:!0,component:f.a.createElement(d,null)}),t.props.newNotification("Account Verified",3e3,"success"),n()):o("Account not verified")})}},{key:"failedAccountVerification",value:function(e){console.error(e),this.setState({accountVerified:!1,component:f.a.createElement(b,null)},this.failedVerificationRedirect())}},{key:"failedVerificationRedirect",value:function(){var e=this;setTimeout(function(){e.setState({component:f.a.createElement(p.a,{to:"".concat(e.props.basePath,"login")})})},3e3)}},{key:"render",value:function(){return this.state.component}}]),t}(s.Component);t.default=function(e){return f.a.createElement(h.a.Consumer,null,function(t){var n=t.newNotification;return f.a.createElement(l.a.Consumer,null,function(t){var o=t.basePath;return f.a.createElement(y,Object.assign({},e,{basePath:o,newNotification:n}))})})}}}]);
//# sourceMappingURL=3.6a701060.chunk.js.map