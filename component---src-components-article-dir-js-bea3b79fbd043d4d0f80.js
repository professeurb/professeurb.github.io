(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{688:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return E});n(11);var a=n(0),r=n.n(a),l=n(694),c=n(702),u=n.n(c),o=n(698),i=n(19),s=n(62),m=n(699),f=n.n(m),p=n(707);var E="690563009";t.default=function(e){var t=e.data,n=t.mdx,a=t.allMdx;return console.log(n),console.log(a),r.a.createElement(o.MDXProvider,{components:{h1:function(e){return r.a.createElement(i.Title,Object.assign({},e,{isSize:2}))},h2:function(e){return r.a.createElement(i.Title,Object.assign({},e,{isSize:3}))},h3:function(e){return r.a.createElement(i.Title,Object.assign({},e,{isSize:4}))},h4:function(e){return r.a.createElement(i.Title,Object.assign({},e,{isSize:5}))},h5:function(e){return r.a.createElement(i.Title,Object.assign({},e,{isSize:6}))}}},r.a.createElement(f.a,{title:n.frontmatter.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},r.a.createElement("html",{lang:"fr"})),r.a.createElement(p.a,{slug:n.fields.slug,title:n.frontmatter.title,subtitle:n.frontmatter.subtitle,tags:n.frontmatter.tags}),r.a.createElement(i.Section,null,r.a.createElement(i.Container,null,r.a.createElement(i.Columns,{isCentered:!0},r.a.createElement(i.Column,{isSize:"3/4"},r.a.createElement(i.Content,null,r.a.createElement(u.a,null,n.code.body),a.edges.map(function(e,t){return r.a.createElement("div",{className:"gloup"},r.a.createElement(l.a,{to:e.node.fields.slug},r.a.createElement(i.Media,{key:t},r.a.createElement(i.MediaLeft,null,r.a.createElement(i.Title,{isSize:4},e.node.frontmatter.type&&"dir"===e.node.frontmatter.type&&r.a.createElement(s.c,null)||r.a.createElement(s.b,null))),r.a.createElement(i.MediaContent,null,r.a.createElement(i.Title,{isSize:4},e.node.frontmatter.title),e.node.frontmatter.tags&&r.a.createElement("div",{className:"tags",style:{margin:"0"}},e.node.frontmatter.tags.map(function(e,t){return r.a.createElement(i.Tag,{key:t,isColor:"info"},e)})),r.a.createElement("p",null,e.node.frontmatter.subtitle)))))})))))))}},694:function(e,t,n){"use strict";n.d(t,"b",function(){return s});var a=n(0),r=n.n(a),l=n(14),c=n.n(l),u=n(82),o=n.n(u);n.d(t,"a",function(){return o.a});n(695);var i=r.a.createContext({}),s=function(e){return r.a.createElement(i.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},695:function(e,t,n){var a;e.exports=(a=n(696))&&a.default||a},696:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),l=n(0),c=n.n(l),u=n(14),o=n.n(u),i=n(114),s=n(9),m=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return n?c.a.createElement(i.a,r()({location:t,pageResources:n},n.json)):null};m.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=m},697:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(694),c=n(19),u=n(62);t.a=function(){return r.a.createElement(c.Navbar,null,r.a.createElement(c.Container,null,r.a.createElement(c.NavbarBrand,null,r.a.createElement(c.NavbarItem,null,"Professeur B."),r.a.createElement(c.NavbarItem,null,r.a.createElement(l.a,{to:"/articles"},"Articles")),r.a.createElement(c.NavbarItem,null,r.a.createElement(l.a,{to:"/ipt/sup"},"IPT Sup")),r.a.createElement(c.NavbarItem,null,r.a.createElement(l.a,{to:"/ipt/spe"},"IPT Spé"))),r.a.createElement(c.NavbarMenu,null,r.a.createElement(c.NavbarEnd,null,r.a.createElement(c.NavbarItem,null,r.a.createElement("a",{href:"mailto:professeurb at free.fr"},r.a.createElement(u.a,null))),r.a.createElement(c.NavbarItem,null,r.a.createElement("a",{href:"https://twitter.com/professeur_b/"},r.a.createElement(u.g,null)))))))}},702:function(e,t,n){var a=n(703);n(20),n(64),n(25),n(705);var r=n(2),l=n(217),c=n(0),u=n(95),o=u.useMDXComponents,i=u.mdx,s=n(115).useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,u=e.children,m=l(e,["scope","components","children"]),f=o(n),p=s(t),E=c.useMemo(function(){if(!u)return null;var e=r({React:c,mdx:i},p),t=Object.keys(e),n=t.map(function(t){return e[t]});return a(Function,["_fn"].concat(t,[""+u])).apply(void 0,[{}].concat(n))},[u,t]);return c.createElement(E,r({components:f},m))}},703:function(e,t,n){var a=n(704);function r(t,n,l){return!function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?e.exports=r=function(e,t,n){var r=[null];r.push.apply(r,t);var l=new(Function.bind.apply(e,r));return n&&a(l,n.prototype),l}:e.exports=r=Reflect.construct,r.apply(null,arguments)}e.exports=r},704:function(e,t){function n(t,a){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,a)}e.exports=n},705:function(e,t,n){var a=n(54),r=n(63);n(706)("keys",function(){return function(e){return r(a(e))}})},706:function(e,t,n){var a=n(26),r=n(53),l=n(30);e.exports=function(e,t){var n=(r.Object||{})[e]||Object[e],c={};c[e]=t(n),a(a.S+a.F*l(function(){n(1)}),"Object",c)}},707:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(19),c=(n(216),n(694));var u=function(e){var t=e.slug;return r.a.createElement("nav",{className:"breadcrumb"},r.a.createElement("ul",null,function(e){var t=e.split("/"),n=["/"];return t.pop(),t.shift(),t.map(function(e){return n[0]=n[0].concat(e,"/"),[e,n[0]]})}(t).map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(c.a,{to:e[1]},e[0]))})))},o=n(697);t.a=function(e){var t=e.slug,n=e.title,a=e.subtitle,c=e.tags;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null),r.a.createElement(l.Hero,{isColor:"info"},r.a.createElement(l.HeroBody,null,r.a.createElement(l.Container,null,r.a.createElement(l.Columns,{isCentered:!0},r.a.createElement(l.Column,{isSize:"3/4"},r.a.createElement(u,{slug:t}),r.a.createElement(l.Title,{isSize:1},n),a&&r.a.createElement(l.Subtitle,null,a),c&&r.a.createElement("div",{className:"tags"},c.map(function(e,t){return r.a.createElement(l.Tag,{key:t,isColor:"black"},e)}))))))))}}}]);
//# sourceMappingURL=component---src-components-article-dir-js-bea3b79fbd043d4d0f80.js.map