(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{768:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return E});n(12);var r=n(0),a=n.n(r),c=n(773),l=n(782),o=n.n(l),u=n(778),i=n(45),s=n(112),f=n(779),m=n.n(f),p=n(783);var E="690563009";t.default=function(e){var t=e.data,n=t.mdx,r=t.allMdx;return console.log(n),console.log(r),a.a.createElement(u.MDXProvider,{components:{h1:function(e){return a.a.createElement(i.Title,Object.assign({},e,{isSize:2}))},h2:function(e){return a.a.createElement(i.Title,Object.assign({},e,{isSize:3}))},h3:function(e){return a.a.createElement(i.Title,Object.assign({},e,{isSize:4}))},h4:function(e){return a.a.createElement(i.Title,Object.assign({},e,{isSize:5}))},h5:function(e){return a.a.createElement(i.Title,Object.assign({},e,{isSize:6}))}}},a.a.createElement(m.a,{title:n.frontmatter.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},a.a.createElement("html",{lang:"fr"})),a.a.createElement(p.a,{slug:n.fields.slug,title:n.frontmatter.title,subtitle:n.frontmatter.subtitle,tags:n.frontmatter.tags}),a.a.createElement(i.Section,null,a.a.createElement(i.Container,null,a.a.createElement(i.Columns,{isCentered:!0},a.a.createElement(i.Column,{isSize:"3/4"},a.a.createElement(i.Content,null,a.a.createElement(o.a,null,n.code.body),r.edges.map(function(e,t){return a.a.createElement("div",{className:"gloup"},a.a.createElement(c.a,{to:e.node.fields.slug},a.a.createElement(i.Media,{key:t},a.a.createElement(i.MediaLeft,null,a.a.createElement(i.Title,{isSize:4},e.node.frontmatter.type&&"dir"===e.node.frontmatter.type&&a.a.createElement(s.c,null)||a.a.createElement(s.b,null))),a.a.createElement(i.MediaContent,null,a.a.createElement(i.Title,{isSize:4},e.node.frontmatter.title),e.node.frontmatter.tags&&a.a.createElement("div",{className:"tags",style:{margin:"0"}},e.node.frontmatter.tags.map(function(e,t){return a.a.createElement(i.Tag,{key:t,isColor:"info"},e)})),a.a.createElement("p",null,e.node.frontmatter.subtitle)))))})))))))}},773:function(e,t,n){"use strict";n.d(t,"b",function(){return i});var r=n(0),a=n.n(r),c=n(140),l=n.n(c);n.d(t,"a",function(){return l.a});n(774),n(44).default.enqueue;var o=a.a.createContext({});function u(e){var t=e.staticQueryData,n=e.data,r=e.query,c=e.render,l=n?n.data:t[r]&&t[r].data;return a.a.createElement(a.a.Fragment,null,l&&c(l),!l&&a.a.createElement("div",null,"Loading (StaticQuery)"))}var i=function(e){var t=e.data,n=e.query,r=e.render,c=e.children;return a.a.createElement(o.Consumer,null,function(e){return a.a.createElement(u,{data:t,query:n,render:r||c,staticQueryData:e})})}},774:function(e,t,n){var r;e.exports=(r=n(775))&&r.default||r},775:function(e,t,n){"use strict";n.r(t);n(35),n(15),n(8),n(9),n(3),n(14);var r=n(0),a=n.n(r),c=n(178);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default=function(e){var t=e.location,n=e.pageResources;return n?a.a.createElement(c.a,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach(function(t){o(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({location:t,pageResources:n},n.json)):null}},776:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(773),l=n(45),o=n(112);t.a=function(){return a.a.createElement(l.Navbar,null,a.a.createElement(l.Container,null,a.a.createElement(l.NavbarBrand,null,a.a.createElement(l.NavbarItem,null,"Professeur B."),a.a.createElement(l.NavbarItem,null,a.a.createElement(c.a,{to:"/articles"},"Articles")),a.a.createElement(l.NavbarItem,null,a.a.createElement(c.a,{to:"/ipt/sup"},"IPT Sup")),a.a.createElement(l.NavbarItem,null,a.a.createElement(c.a,{to:"/ipt/spe"},"IPT Spé"))),a.a.createElement(l.NavbarMenu,null,a.a.createElement(l.NavbarEnd,null,a.a.createElement(l.NavbarItem,null,a.a.createElement("a",{href:"mailto:professeurb at free.fr"},a.a.createElement(o.a,null))),a.a.createElement(l.NavbarItem,null,a.a.createElement("a",{href:"https://twitter.com/professeur_b/"},a.a.createElement(o.g,null)))))))}},777:function(e,t,n){var r=n(7),a=n(82),c=n(69),l=n(29),o=n(26),u=n(24),i=n(296),s=(n(18).Reflect||{}).construct,f=u(function(){function e(){}return!(s(function(){},[],e)instanceof e)}),m=!u(function(){s(function(){})});r(r.S+r.F*(f||m),"Reflect",{construct:function(e,t){c(e),l(t);var n=arguments.length<3?e:c(arguments[2]);if(m&&!f)return s(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var r=[null];return r.push.apply(r,t),new(i.apply(e,r))}var u=n.prototype,p=a(o(u)?u:Object.prototype),E=Function.apply.call(e,p,t);return o(E)?E:p}})},782:function(e,t,n){function r(e,t,n){return(r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var c=new(Function.bind.apply(e,r));return n&&a(c,n.prototype),c}).apply(null,arguments)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach(function(t){u(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n(35),n(9),n(14),n(68),n(111),n(54),n(15),n(8),n(141),n(13),n(3),n(777),n(777),n(141),n(68),n(111),n(13),n(54),n(35),n(15),n(8),n(9),n(3),n(14);var i=n(0),s=n(156),f=s.useMDXComponents,m=s.mdx,p=n(179).useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,a=e.children,l=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["scope","components","children"]),u=f(n),s=p(t),E=i.useMemo(function(){if(!a)return null;var e=o({React:i,mdx:m},s),t=Object.keys(e),n=t.map(function(t){return e[t]});return r(Function,["_fn"].concat(c(t),[""+a])).apply(void 0,[{}].concat(c(n)))},[a,t]);return i.createElement(E,o({components:u},l))}},783:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(45),l=(n(16),n(773));var o=function(e){var t=e.slug;return a.a.createElement("nav",{className:"breadcrumb"},a.a.createElement("ul",null,function(e){var t=e.split("/"),n=["/"];return t.pop(),t.shift(),t.map(function(e){return n[0]=n[0].concat(e,"/"),[e,n[0]]})}(t).map(function(e,t){return a.a.createElement("li",{key:t},a.a.createElement(l.a,{to:e[1]},e[0]))})))},u=n(776);t.a=function(e){var t=e.slug,n=e.title,r=e.subtitle,l=e.tags;return a.a.createElement(a.a.Fragment,null,a.a.createElement(u.a,null),a.a.createElement(c.Hero,{isColor:"info"},a.a.createElement(c.HeroBody,null,a.a.createElement(c.Container,null,a.a.createElement(c.Columns,{isCentered:!0},a.a.createElement(c.Column,{isSize:"3/4"},a.a.createElement(o,{slug:t}),a.a.createElement(c.Title,{isSize:1},n),r&&a.a.createElement(c.Subtitle,null,r),l&&a.a.createElement("div",{className:"tags"},l.map(function(e,t){return a.a.createElement(c.Tag,{key:t,isColor:"black"},e)}))))))))}}}]);
//# sourceMappingURL=component---src-components-article-dir-js-cd982308eb09944a3b54.js.map