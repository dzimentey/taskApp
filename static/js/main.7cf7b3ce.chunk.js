(this["webpackJsonptask-app"]=this["webpackJsonptask-app"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={aim:"Affairs_aim__2jasd",priority:"Affairs_priority__2CVgI",aimbutton:"Affairs_aimbutton__2oF1W",deleteButton:"Affairs_deleteButton__10e_A",high:"Affairs_high__1Z8T0",middle:"Affairs_middle__BAySm",low:"Affairs_low__2DlyH"}},function(e,t,n){e.exports={header:"Header_header__1MWOn",link:"Header_link__1-gmF",active:"Header_active__1IJ35",triangleRight:"Header_triangleRight__2rc82"}},,function(e,t,n){e.exports={container:"Message_container__3GFd_",avatar:"Message_avatar__27FDp",message:"Message_message__3Xg_n",message_text:"Message_message_text__19uGn",time:"Message_time__1Igy_",triangle:"Message_triangle__3EfJy"}},function(e,t,n){e.exports={mainContainer:"Greeting_mainContainer__P2uhX",someClass:"Greeting_someClass__1Km4V",error:"Greeting_error__1vPu-",totalUsers:"Greeting_totalUsers__3qljV",inputBlock:"Greeting_inputBlock__hffj9",errorMessage:"Greeting_errorMessage__2CRUw"}},,,function(e,t,n){e.exports={container:"WH9_container__1Fww1",dateTime:"WH9_dateTime__EJpGQ"}},,,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__2VTIA",errorInput:"SuperInputText_errorInput__uLZRY",error:"SuperInputText_error__1mupi"}},function(e,t,n){e.exports={blue:"HW4_blue__jLBwH",column:"HW4_column__NkNGf",testSpanError:"HW4_testSpanError__3XOBo",errorInput:"HW4_errorInput__1M8G7"}},function(e,t,n){e.exports={container:"HW8_container__1AyFv",buttonsContainer:"HW8_buttonsContainer__Q32RI",commonContainer:"HW8_commonContainer__2aRGM"}},,,function(e,t,n){e.exports={default:"SuperButton_default__3Zyzj",red:"SuperButton_red__3-GaI"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__32enc",spanClassName:"SuperCheckbox_spanClassName__3-3Dl"}},function(e,t,n){e.exports={spanStyle:"SuperEditableSpan_spanStyle__3uFSu",input:"SuperEditableSpan_input__1QXZF"}},,,,,,function(e,t,n){e.exports={App:"App_App__3_1W_"}},,,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(30),s=n.n(c),i=(n(37),n(31)),o=n.n(i),j=n(9),l=n.n(j),u=n(10),d=n(3),b=n(11),O=n.n(b),h=n(0);var x=function(e){return Object(h.jsxs)("div",{className:O.a.container,children:[Object(h.jsx)("img",{className:O.a.avatar,alt:"avatar",src:e.avatar}),Object(h.jsx)("div",{className:O.a.triangle}),Object(h.jsxs)("div",{className:O.a.message,children:[Object(h.jsx)("span",{children:e.name}),Object(h.jsx)("div",{className:O.a.message_text,children:e.message}),Object(h.jsx)("div",{className:O.a.time,children:e.time})]})]})},m="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",p="Katy",_="Hello you guys, where have you been recently... ",f="22:00";var v=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),"homeworks 1",Object(h.jsx)(x,{avatar:m,name:p,message:_,time:f}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},g=n(2),C=n(8),k=n.n(C);var N=function(e){var t=k.a.priority+" "+k.a[e.affair.priority];return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:k.a.aim,children:e.affair.name}),Object(h.jsx)("div",{className:t,children:e.affair.priority}),Object(h.jsx)("button",{className:k.a.deleteButton,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var y=function(e){var t=e.data.map((function(t){return Object(h.jsx)(N,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(h.jsxs)("div",{children:[t,Object(h.jsx)("button",{className:k.a.aimbutton,onClick:function(){e.setFilter("all")},children:"All"}),Object(h.jsx)("button",{className:k.a.aimbutton,onClick:function(){e.setFilter("high")},children:"High"}),Object(h.jsx)("button",{className:k.a.aimbutton,onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(h.jsx)("button",{className:k.a.aimbutton,onClick:function(){e.setFilter("low")},children:"Low"})]})},S=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var w=function(){var e=Object(a.useState)(S),t=Object(g.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("all"),s=Object(g.a)(c,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),"homeworks 2",Object(h.jsx)(y,{data:j,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},A=n(17),I=n(12),T=n.n(I),F=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,r=e.error,c=e.totalUsers,s=""!==r?T.a.error:T.a.someClass;return Object(h.jsxs)("div",{className:T.a.mainContainer,children:[Object(h.jsxs)("div",{className:T.a.inputBlock,children:[Object(h.jsx)("input",{value:t,onChange:n,className:s,placeholder:r?"Enter your name":""}),Object(h.jsx)("button",{disabled:""!==r,onClick:a,children:"add"})]}),Object(h.jsx)("div",{className:T.a.errorMessage,children:r}),Object(h.jsxs)("div",{className:T.a.totalUsers,children:["total users: ",c]})]})},H=function(e){var t=e.users,n=e.addUserCallback,r=Object(a.useState)(""),c=Object(g.a)(r,2),s=c[0],i=c[1],o=Object(a.useState)(""),j=Object(g.a)(o,2),l=j[0],u=j[1],d=Object(a.useState)(0),b=Object(g.a)(d,2),O=b[0],x=b[1];return Object(h.jsx)(F,{name:s,setNameCallback:function(e){i(e.currentTarget.value),u("")},addUser:function(){""!==s?(n(s.trim()),alert("Hello ".concat(s," !")),x(O+1),console.log(t)):u("Name is required"),i("")},error:l,totalUsers:O})},B=n(46);var E=function(){var e=Object(a.useState)([]),t=Object(g.a)(e,2),n=t[0],r=t[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),"homeworks 3",Object(h.jsx)(H,{users:n,addUserCallback:function(e){r([].concat(Object(A.a)(n),[{name:e,_id:Object(B.a)()}]))}}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},M=n(5),W=n(4),G=n(18),P=n.n(G),U=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,r=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(W.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(P.a.error," ").concat(i||""),l="".concat(c?P.a.errorInput:P.a.superInput," ").concat(s);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("input",Object(M.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),r&&"Enter"===e.key&&r()},className:l},o)),c&&Object(h.jsx)("span",{className:j,children:c})]})},D=n(19),J=n.n(D),R=n(23),L=n.n(R),X=function(e){var t=e.red,n=e.className,a=Object(W.a)(e,["red","className"]),r="".concat(t?L.a.red:L.a.default," ").concat(n);return Object(h.jsx)("button",Object(M.a)({className:r},a))},K=n(24),Z=n.n(K),V=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,r=(e.spanClassName,e.children),c=Object(W.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(Z.a.checkbox," ").concat(a||"");return Object(h.jsxs)("label",{children:[Object(h.jsx)("input",Object(M.a)({type:"checkbox",onChange:function(e){n&&n(e.currentTarget.checked),t&&t(e)},className:s},c)),r&&Object(h.jsx)("span",{className:Z.a.spanClassName,children:r})]})};var q=function(){var e=Object(a.useState)(""),t=Object(g.a)(e,2),n=t[0],r=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n),r("")},i=Object(a.useState)(!1),o=Object(g.a)(i,2),j=o[0],l=o[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),"homeworks 4",Object(h.jsxs)("div",{className:J.a.column,children:[Object(h.jsx)(U,{value:n,onChangeText:r,onEnter:s,error:c}),Object(h.jsx)(U,{className:c?J.a.errorInput:J.a.blue}),Object(h.jsx)(X,{children:"default"}),Object(h.jsx)(X,{red:!0,onClick:s,children:"delete "}),Object(h.jsx)(X,{disabled:!0,children:"disabled"}),Object(h.jsx)(V,{checked:j,onChangeChecked:l,children:"some text "}),Object(h.jsx)(V,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},Q=n(25),z=n.n(Q),Y=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,r=e.spanProps,c=Object(W.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),i=Object(g.a)(s,2),o=i[0],j=i[1],l=r||{},u=l.children,d=l.onDoubleClick,b=l.className,O=Object(W.a)(l,["children","onDoubleClick","className"]),x="".concat(z.a.spanStyle," ").concat(b||"");return Object(h.jsx)(h.Fragment,{children:o?Object(h.jsx)(U,Object(M.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()},className:z.a.input},c)):Object(h.jsxs)("span",Object(M.a)(Object(M.a)({onDoubleClick:function(e){j(!0),d&&d(e)},className:x},O),{},{children:["\u2712 ",u||c.value]}))})};function $(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function ee(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}$("test",{x:"A",y:1});ee("test",{x:"",y:0});var te=function(){var e=Object(a.useState)(""),t=Object(g.a)(e,2),n=t[0],r=t[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),"homeworks 6",Object(h.jsx)("div",{children:Object(h.jsx)(Y,{value:n,onChangeText:r,spanProps:{children:n?void 0:" Double click to enter some text..."}})}),Object(h.jsx)(X,{onClick:function(){$("editable-span-value",n)},children:"save"}),Object(h.jsx)(X,{onClick:function(){r(ee("editable-span-value",""))},children:"restore"}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})};var ne=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(v,{}),Object(h.jsx)(w,{}),Object(h.jsx)(E,{}),Object(h.jsx)(q,{}),Object(h.jsx)(te,{})]})},ae=function(e){var t=e.options,n=e.onChange,a=e.onChangeOption,r=Object(W.a)(e,["options","onChange","onChangeOption"]),c=t?t.map((function(e,t){return Object(h.jsx)("option",{value:e,children:e},t)})):[];return Object(h.jsx)("select",Object(M.a)(Object(M.a)({onChange:function(e){n&&n(e),a&&a(e.currentTarget.value)}},r),{},{children:c}))},re=function(e){e.type;var t=e.name,n=e.options,a=e.value,r=e.onChange,c=e.onChangeOption,s=(Object(W.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){r&&r(e),c&&c(e.currentTarget.value)}),i=n?n.map((function(e,n){return Object(h.jsxs)("label",{children:[Object(h.jsx)("input",{type:"radio",name:t,checked:a===e,value:e,onChange:s}),e]},t+"-"+n)})):[];return Object(h.jsx)(h.Fragment,{children:i})},ce=["x","y","z"];var se=function(){var e=Object(a.useState)(ce[1]),t=Object(g.a)(e,2),n=t[0],r=t[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),"homeworks 7",Object(h.jsx)("div",{children:Object(h.jsx)(ae,{options:ce,value:n,onChangeOption:r})}),Object(h.jsx)("div",{children:Object(h.jsx)(re,{name:"radio",options:ce,value:n,onChangeOption:r})}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},ie=function(e,t){switch(t.type){case"sort":var n=Object(A.a)(e).sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}));return"up"===t.payload?n:n.reverse();case"check":return e.filter((function(e){return e.age>=t.payload}));default:return e}},oe=n(20),je=n.n(oe),le=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var ue=function(){var e=Object(a.useState)(le),t=Object(g.a)(e,2),n=t[0],r=t[1],c=n.map((function(e){return Object(h.jsxs)("div",{className:je.a.container,children:[Object(h.jsx)("span",{children:e.name}),e.age]},e._id)}));return Object(h.jsxs)("div",{className:je.a.commonContainer,children:[Object(h.jsx)("p",{children:"homeworks 8"}),c,Object(h.jsxs)("div",{className:je.a.buttonsContainer,children:[Object(h.jsx)("div",{children:Object(h.jsx)(X,{onClick:function(){return r(ie(le,{type:"sort",payload:"up"}))},children:"sort up"})}),Object(h.jsx)("div",{children:Object(h.jsx)(X,{onClick:function(){return r(ie(le,{type:"sort",payload:"down"}))},children:"sort down"})}),Object(h.jsx)("div",{children:Object(h.jsx)(X,{onClick:function(){return r(ie(le,{type:"check",payload:18}))},children:"check 18"})})]})]})},de=n(15),be=n.n(de);var Oe=function(){var e,t,n=Object(a.useState)(0),r=Object(g.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)(),o=Object(g.a)(i,2),j=o[0],l=o[1],u=Object(a.useState)(!1),d=Object(g.a)(u,2),b=d[0],O=d[1],x=function(){clearInterval(c)},m=null!==(e=null===j||void 0===j?void 0:j.toLocaleTimeString())&&void 0!==e?e:Object(h.jsx)("br",{}),p=null!==(t=null===j||void 0===j?void 0:j.toLocaleDateString())&&void 0!==t?t:Object(h.jsx)("br",{});return Object(h.jsxs)("div",{className:be.a.container,children:[Object(h.jsx)("div",{onMouseEnter:function(){O(!0)},onMouseLeave:function(){O(!1)},className:be.a.dateTime,children:m}),b?Object(h.jsx)("div",{className:be.a.dateTime,children:p}):Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:be.a.controls,children:[Object(h.jsx)(X,{onClick:function(){x();var e=window.setInterval((function(){l(new Date)}),1e3);s(e)},children:"start"}),Object(h.jsx)(X,{onClick:x,children:"stop"})]})]})};var he=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),Object(h.jsx)("p",{children:"homeworks 9"}),Object(h.jsx)(Oe,{})]})},xe=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(se,{}),Object(h.jsx)(ue,{}),Object(h.jsx)(he,{})]})},me=function(){return Object(h.jsx)("div",{children:"Junior Plus"})};var pe=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:"404"}),Object(h.jsx)("div",{children:"Page not found!"}),Object(h.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},_e="/pre-junior",fe="/junior",ve="/junior-plus";var ge=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(d.d,{children:[Object(h.jsx)(d.b,{path:"/",exact:!0,render:function(){return Object(h.jsx)(d.a,{to:_e})}}),Object(h.jsx)(d.b,{path:_e,render:function(){return Object(h.jsx)(ne,{})}}),Object(h.jsx)(d.b,{path:fe,render:function(){return Object(h.jsx)(xe,{})}}),Object(h.jsx)(d.b,{path:ve,render:function(){return Object(h.jsx)(me,{})}}),Object(h.jsx)(d.b,{render:function(){return Object(h.jsx)(pe,{})}})]})})};var Ce=function(){return Object(h.jsxs)("div",{className:l.a.header,children:[Object(h.jsx)(u.b,{to:_e,className:l.a.link,activeClassName:l.a.active,children:"pre-junior"}),Object(h.jsx)(u.b,{to:fe,className:l.a.link,activeClassName:l.a.active,children:"junior"}),Object(h.jsx)(u.b,{to:ve,className:l.a.link,activeClassName:l.a.active,children:"junior+"}),Object(h.jsx)("div",{className:l.a.triangleRight})]})};var ke=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(u.a,{children:[Object(h.jsx)(Ce,{}),Object(h.jsx)(ge,{})]})})};var Ne=function(){return Object(h.jsxs)("div",{className:o.a.App,children:[Object(h.jsx)("div",{children:"react homeworks:"}),Object(h.jsx)(ke,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(Ne,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[44,1,2]]]);
//# sourceMappingURL=main.7cf7b3ce.chunk.js.map