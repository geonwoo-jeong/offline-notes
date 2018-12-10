(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{153:function(n,t,e){"use strict";e.r(t);var a=e(0),r=e.n(a),o=e(20),c=e(45),i=e.n(c),u=e(159),l=e(51),s=e(10),d=e(77),p=e(76),f=e(7),m=e(24),v=e.n(m);function b(){var n=Object(f.a)(["\n  fragment NoteParts on Note {\n    id\n    title\n    content\n  }\n"]);return b=function(){return n},n}var h=v()(b()),g=e(3),O=e.n(g),j=e(5),y=e(55);function E(){var n=Object(f.a)(["\n  query getNote($id: Int!) {\n    note(id: $id) @client {\n      ...NoteParts\n    }\n  }\n  ","\n"]);return E=function(){return n},n}function x(){var n=Object(f.a)(["\n  {\n    notes @client {\n      ...NoteParts\n    }\n  }\n  ","\n"]);return x=function(){return n},n}var k=v()(x(),h),w=v()(E(),h),N=function(){var n=Object(j.a)(O.a.mark(function n(t){var e,a,r;return O.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.readQuery({query:k}),a=e.notes,r=JSON.stringify(a),n.prev=2,n.next=5,y.a.set("notes",r);case 5:n.next=10;break;case 7:n.prev=7,n.t0=n.catch(2),console.log(n.t0);case 10:case"end":return n.stop()}},n,this,[[2,7]])}));return function(t){return n.apply(this,arguments)}}(),S={Query:{note:function(n,t,e){var a=e.cache,r=a.config.dataIdFromObject({__typename:"Note",id:t.id}),o=a.readFragment({fragment:h,id:r});return o}},Mutation:{editNote:function(n,t,e){var a=t.id,r=t.content,o=t.title,c=e.cache,i=c.config.dataIdFromObject({__typename:"Note",id:a}),u={__typename:"Note",content:r,id:a,title:o};return c.writeFragment({data:u,fragment:h,id:i}),N(c),u},createNote:function(n,t,e){var a=e.cache,r=a.readQuery({query:k}).notes,o=t.title,c={__typename:"Note",content:t.content,id:r.length+1,title:o};return a.writeData({data:{notes:[c].concat(Object(p.a)(r))}}),N(a),c}}},C={notes:function(){var n=Object(j.a)(O.a.mark(function n(){var t,e;return O.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y.a.get("notes");case 2:if(!(t=n.sent)){n.next=13;break}return n.prev=4,e=JSON.parse(t),n.abrupt("return",e);case 9:return n.prev=9,n.t0=n.catch(4),console.log(n.t0),n.abrupt("return",[]);case 13:return n.abrupt("return",[]);case 14:case"end":return n.stop()}},n,this,[[4,9]])}));return function(){return n.apply(this,arguments)}}()()},I=new u.a,F=Object(d.a)({cache:I,defaults:C,resolvers:S,typeDefs:["\n        schema {\n            query: Query\n            mutation: Mutation\n        }\n        type Query {\n            notes: [Note]!\n            note(id: Int!): Note\n        }\n        type Mutation {\n            createNote(title: String!, content: String!): Note\n            editNote(id: Int!, title: String, content: String): Note\n        }\n        type Note {\n            id: Int!\n            title: String!\n            content: String!\n        }\n    "]}),$=new l.a({cache:I,link:s.a.from([F])}),Q=e(160),_=e(161),q=e(162),M=e(9),z=e(6),A=e(14),P=e(13),J=e(15),B=e(72),T=e(48),U=e.n(T),D=e(56),H=e(16);function R(){var n=Object(f.a)([""]);return R=function(){return n},n}function G(){var n=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 50px;\n"]);return G=function(){return n},n}function K(){var n=Object(f.a)(["\n  font-size: 18px;\n  margin-top: 15px;\n"]);return K=function(){return n},n}function L(){var n=Object(f.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 50px;\n"]);return L=function(){return n},n}function V(){var n=Object(f.a)(["\n  font-size: 50px;\n  font-weight: 600;\n  width: 100%;\n  &::placeholder {\n    font-weight: 600;\n  }\n"]);return V=function(){return n},n}var W=Object(H.b)(D.a)(V()),X=H.b.div(L()),Y=Object(H.b)(D.a)(K()),Z=H.b.div(G()),nn=H.b.button(R()),tn=function(n){var t=n.title,e=n.content,a=n.onInputChange,o=n.onSave;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,null,r.a.createElement(W,{value:t,onChange:a,placeholder:"Untitled...",name:"title"}),r.a.createElement(nn,{onClick:o},"Save")),r.a.createElement(X,null,r.a.createElement(Y,{value:e,onChange:a,placeholder:"# This supports markdown!",name:"content"}),r.a.createElement(U.a,{markdown:e,className:"markdown"})))},en=function(n){function t(n){var e;return Object(z.a)(this,t),(e=Object(A.a)(this,Object(P.a)(t).call(this,n))).onInputChange=function(n){var t=n.target,a=t.value,r=t.name;e.setState(Object(B.a)({},r,a))},e.onSave=function(){var n=e.props.onSave,t=e.state;n(t.title,t.content,t.id)},e.state={content:n.content||"",id:n.id||null,title:n.title||""},e}return Object(J.a)(t,n),Object(M.a)(t,[{key:"render",value:function(){var n=this.state,t=n.title,e=n.content;return r.a.createElement(tn,{title:t,content:e,onInputChange:this.onInputChange,onSave:this.onSave})}}]),t}(a.Component),an=function(n){var t=n.onSave;return r.a.createElement(en,{onChange:null,onSave:t})};function rn(){var n=Object(f.a)(["\n  mutation createNote($title: String!, $content: String!) @client {\n    createNote(title: $title, content: $content) {\n      id\n    }\n  }\n"]);return rn=function(){return n},n}var on=function(n){function t(){return Object(z.a)(this,t),Object(A.a)(this,Object(P.a)(t).apply(this,arguments))}return Object(J.a)(t,n),t}(o.Mutation),cn=v()(rn()),un=function(n){function t(){var n,e;Object(z.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=Object(A.a)(this,(n=Object(P.a)(t)).call.apply(n,[this].concat(r)))).onSave=function(n,t){var a=e.props.history.push;""!==n&&""!==t&&(e.createNote({variables:{title:n,content:t}}),a("/"))},e}return Object(J.a)(t,n),Object(M.a)(t,[{key:"render",value:function(){var n=this;return r.a.createElement(on,{mutation:cn},function(t){return n.createNote=t,r.a.createElement(an,{onChange:null,onSave:n.onSave})})}}]),t}(a.Component),ln=function(n){var t=n.data,e=n.onSave,a=t.note,o=a.title,c=a.content,i=a.id;return r.a.createElement(en,{title:o,content:c,id:i,onSave:e,onChange:null})};function sn(){var n=Object(f.a)(["\n  mutation editNote($id: Int!, $title: String!, $content: String!) @client {\n    editNote(id: $id, title: $title, content: $content) {\n      id\n    }\n  }\n"]);return sn=function(){return n},n}var dn=v()(sn()),pn=function(n){function t(){return Object(z.a)(this,t),Object(A.a)(this,Object(P.a)(t).apply(this,arguments))}return Object(J.a)(t,n),t}(o.Mutation),fn=function(n){function t(){var n,e;Object(z.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=Object(A.a)(this,(n=Object(P.a)(t)).call.apply(n,[this].concat(r)))).onSave=function(n,t,a){var r=e.props.history.push;""!==n&&""!==t&&a&&(e.editNote({variables:{title:n,content:t,id:a}}),r("/"))},e}return Object(J.a)(t,n),Object(M.a)(t,[{key:"render",value:function(){var n=this,t=this.props.match.params.id;return r.a.createElement(o.Query,{query:w,variables:{id:t}},function(t){var e=t.data;return e.note?r.a.createElement(pn,{mutation:dn},function(t){return n.editNote=t,r.a.createElement(ln,{data:e,onSave:n.onSave})}):null})}}]),t}(a.Component),mn=e(158);function vn(){var n=Object(f.a)(["\n  margin-left: 10px;\n  transform: scale(0.8);\n  background-color: #eee;\n  display: flex;\n  align-items: center;\n  padding: 10px;\n  border-radius: 10px;\n  cursor: pointer;\n"]);return vn=function(){return n},n}function bn(){var n=Object(f.a)(["\n  font-size: 50px;\n  margin: 0;\n  padding: 0;\n"]);return bn=function(){return n},n}function hn(){var n=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 50px;\n"]);return hn=function(){return n},n}var gn=H.b.div(hn()),On=H.b.h1(bn()),jn=H.b.button(vn()),yn=function(n){var t=n.title,e=n.link,a=n.button;return r.a.createElement(r.a.Fragment,null,r.a.createElement(gn,null,r.a.createElement(On,null,t),r.a.createElement(mn.a,{to:e},r.a.createElement(jn,null,a))))},En=function(n){var t=n.data;if(t.note){var e=t.note,a=e.title,o=e.id,c=e.content;return r.a.createElement(r.a.Fragment,null,r.a.createElement(yn,{title:a,button:"Edit",link:"/edit/".concat(o)}),r.a.createElement(U.a,{markdown:c}))}return r.a.createElement(yn,{title:"This Note does not exist.",button:"back to index",link:"/"})},xn=function(n){function t(){return Object(z.a)(this,t),Object(A.a)(this,Object(P.a)(t).apply(this,arguments))}return Object(J.a)(t,n),Object(M.a)(t,[{key:"render",value:function(){var n=this.props.match.params.id;return r.a.createElement(o.Query,{query:w,variables:{id:n}},function(n){var t=n.data;return r.a.createElement(En,{data:t})})}}]),t}(a.Component);function kn(){return(kn=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n}).apply(this,arguments)}var wn=r.a.createElement("path",{d:"M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"}),Nn=function(n){return r.a.createElement("svg",kn({width:24,height:24,viewBox:"0 0 24 24"},n),wn)};e.p;function Sn(){var n=Object(f.a)(["\n  color: #a2a19e;\n  font-weight: 400;\n"]);return Sn=function(){return n},n}function Cn(){var n=Object(f.a)(["\n  padding: 10px;\n  padding-left: 5px;\n  transition: background-color 0.1s linear;\n  cursor: pointer;\n  border-radius: 5px;\n  margin-bottom: 10px;\n  &:hover {\n    background-color: #eee;\n  }\n"]);return Cn=function(){return n},n}var In=H.b.div(Cn()),Fn=H.b.h2(Sn()),$n=function(n){var t=n.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(yn,{title:"Offline Notes",link:"/add",button:r.a.createElement(Nn,null)}),r.a.createElement(Fn,null,"Taking notes while we learn."),t.notes&&t.notes.map(function(n){return r.a.createElement(mn.a,{to:"/note/".concat(n.id),key:n.id},r.a.createElement(In,null,n.title))}))},Qn=function(n){function t(){return Object(z.a)(this,t),Object(A.a)(this,Object(P.a)(t).apply(this,arguments))}return Object(J.a)(t,n),Object(M.a)(t,[{key:"render",value:function(){return r.a.createElement(o.Query,{query:k},function(n){var t=n.data;return r.a.createElement($n,{data:t})})}}]),t}(a.Component),_n=function(){return r.a.createElement(Q.a,{basename:"/offline-notes"},r.a.createElement(_.a,null,r.a.createElement(q.a,{exact:!0,path:"/",component:Qn}),r.a.createElement(q.a,{path:"/add",component:un}),r.a.createElement(q.a,{path:"/edit/:id",component:fn}),r.a.createElement(q.a,{path:"/note/:id",component:xn})))};function qn(){var n=Object(f.a)(["\n    :root {\n        --greyColor: #A2A19E;\n        --blackColor: #373630;\n    }\n    body{\n        background-color:#F7F5F3;\n        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        color:var(--blackColor);\n        padding:50px 100px;\n        margin:0;\n    }\n    #root{\n        max-width:1000px;\n        width:100%;\n        margin:0 auto;\n    }\n    a {\n        color:inherit;\n        text-decoration:none;\n    }\n    div{\n        margin:0;\n    }\n    input,\n    textarea{\n        appearance:none;\n        border:none;\n        background-color:transparent;\n        resize:none;\n        &::placeholder {\n            color: #E7E7E6;\n        }\n        &:focus,\n        &:active{\n            outline:none;\n        }\n    }\n    .markdown a{\n        text-decoration:underline;\n    }\n    button{\n        appearance:none;\n        border:none;\n        background-color:transparent;\n        font-weight:600;\n        font-size:15px;\n        cursor:pointer;\n        border:2.5px solid var(--blackColor);\n        &:focus,\n        &:active{\n            outline:none\n        }\n    }\n"]);return qn=function(){return n},n}var Mn=Object(H.a)(qn());i.a.render(r.a.createElement(o.ApolloProvider,{client:$},r.a.createElement(Mn,null),r.a.createElement(_n,null)),document.getElementById("root"))},80:function(n,t,e){n.exports=e(153)}},[[80,2,1]]]);
//# sourceMappingURL=main.34012f7a.chunk.js.map