(this["webpackJsonptask-app"]=this["webpackJsonptask-app"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={aim:"Affairs_aim__2jasd",priority:"Affairs_priority__2CVgI",aimbutton:"Affairs_aimbutton__2oF1W",deleteButton:"Affairs_deleteButton__10e_A",high:"Affairs_high__1Z8T0",middle:"Affairs_middle__BAySm",low:"Affairs_low__2DlyH"}},function(e,t,n){e.exports={header:"Header_header__1MWOn",link:"Header_link__1-gmF",active:"Header_active__1IJ35",triangleRight:"Header_triangleRight__2rc82"}},,function(e,t,n){e.exports={container:"Message_container__3GFd_",avatar:"Message_avatar__27FDp",message:"Message_message__3Xg_n",message_text:"Message_message_text__19uGn",time:"Message_time__1Igy_",triangle:"Message_triangle__3EfJy"}},function(e,t,n){e.exports={mainContainer:"Greeting_mainContainer__P2uhX",someClass:"Greeting_someClass__1Km4V",error:"Greeting_error__1vPu-",totalUsers:"Greeting_totalUsers__3qljV",inputBlock:"Greeting_inputBlock__hffj9",errorMessage:"Greeting_errorMessage__2CRUw"}},,,,,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__2VTIA",errorInput:"SuperInputText_errorInput__uLZRY",error:"SuperInputText_error__1mupi"}},function(e,t,n){e.exports={blue:"HW4_blue__jLBwH",column:"HW4_column__NkNGf",testSpanError:"HW4_testSpanError__3XOBo",errorInput:"HW4_errorInput__1M8G7"}},function(e,t,n){e.exports={container:"HW8_container__1AyFv",buttonsContainer:"HW8_buttonsContainer__Q32RI",commonContainer:"HW8_commonContainer__2aRGM"}},,,function(e,t,n){e.exports={default:"SuperButton_default__3Zyzj",red:"SuperButton_red__3-GaI"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__32enc",spanClassName:"SuperCheckbox_spanClassName__3-3Dl"}},function(e,t,n){e.exports={spanStyle:"SuperEditableSpan_spanStyle__3uFSu",input:"SuperEditableSpan_input__1QXZF"}},,,,,,function(e,t,n){e.exports={App:"App_App__3_1W_"}},,,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(29),s=n.n(c),i=(n(36),n(30)),o=n.n(i),j=n(9),l=n.n(j),u=n(10),d=n(2),b=n(11),h=n.n(b),O=n(0);var x=function(e){return Object(O.jsxs)("div",{className:h.a.container,children:[Object(O.jsx)("img",{className:h.a.avatar,alt:"avatar",src:e.avatar}),Object(O.jsx)("div",{className:h.a.triangle}),Object(O.jsxs)("div",{className:h.a.message,children:[Object(O.jsx)("span",{children:e.name}),Object(O.jsx)("div",{className:h.a.message_text,children:e.message}),Object(O.jsx)("div",{className:h.a.time,children:e.time})]})]})},m="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",p="Katy",_="Hello you guys, where have you been recently... ",f="22:00";var v=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 1",Object(O.jsx)(x,{avatar:m,name:p,message:_,time:f}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},g=n(3),C=n(8),k=n.n(C);var N=function(e){var t=k.a.priority+" "+k.a[e.affair.priority];return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:k.a.aim,children:e.affair.name}),Object(O.jsx)("div",{className:t,children:e.affair.priority}),Object(O.jsx)("button",{className:k.a.deleteButton,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var y=function(e){var t=e.data.map((function(t){return Object(O.jsx)(N,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(O.jsxs)("div",{children:[t,Object(O.jsx)("button",{className:k.a.aimbutton,onClick:function(){e.setFilter("all")},children:"All"}),Object(O.jsx)("button",{className:k.a.aimbutton,onClick:function(){e.setFilter("high")},children:"High"}),Object(O.jsx)("button",{className:k.a.aimbutton,onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(O.jsx)("button",{className:k.a.aimbutton,onClick:function(){e.setFilter("low")},children:"Low"})]})},S=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var w=function(){var e=Object(a.useState)(S),t=Object(g.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("all"),s=Object(g.a)(c,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 2",Object(O.jsx)(y,{data:j,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},A=n(16),I=n(12),F=n.n(I),B=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,r=e.error,c=e.totalUsers,s=""!==r?F.a.error:F.a.someClass;return Object(O.jsxs)("div",{className:F.a.mainContainer,children:[Object(O.jsxs)("div",{className:F.a.inputBlock,children:[Object(O.jsx)("input",{value:t,onChange:n,className:s,placeholder:r?"Enter your name":""}),Object(O.jsx)("button",{disabled:""!==r,onClick:a,children:"add"})]}),Object(O.jsx)("div",{className:F.a.errorMessage,children:r}),Object(O.jsxs)("div",{className:F.a.totalUsers,children:["total users: ",c]})]})},H=function(e){var t=e.users,n=e.addUserCallback,r=Object(a.useState)(""),c=Object(g.a)(r,2),s=c[0],i=c[1],o=Object(a.useState)(""),j=Object(g.a)(o,2),l=j[0],u=j[1],d=Object(a.useState)(0),b=Object(g.a)(d,2),h=b[0],x=b[1];return Object(O.jsx)(B,{name:s,setNameCallback:function(e){i(e.currentTarget.value),u("")},addUser:function(){""!==s?(n(s.trim()),alert("Hello ".concat(s," !")),x(h+1),console.log(t)):u("Name is required"),i("")},error:l,totalUsers:h})},T=n(45);var E=function(){var e=Object(a.useState)([]),t=Object(g.a)(e,2),n=t[0],r=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 3",Object(O.jsx)(H,{users:n,addUserCallback:function(e){r([].concat(Object(A.a)(n),[{name:e,_id:Object(T.a)()}]))}}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},M=n(5),W=n(4),G=n(17),P=n.n(G),U=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,r=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(W.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(P.a.error," ").concat(i||""),l="".concat(c?P.a.errorInput:P.a.superInput," ").concat(s);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("input",Object(M.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),r&&"Enter"===e.key&&r()},className:l},o)),c&&Object(O.jsx)("span",{className:j,children:c})]})},J=n(18),R=n.n(J),D=n(22),X=n.n(D),K=function(e){var t=e.red,n=e.className,a=Object(W.a)(e,["red","className"]),r="".concat(t?X.a.red:X.a.default," ").concat(n);return Object(O.jsx)("button",Object(M.a)({className:r},a))},Z=n(23),V=n.n(Z),q=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,r=(e.spanClassName,e.children),c=Object(W.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(V.a.checkbox," ").concat(a||"");return Object(O.jsxs)("label",{children:[Object(O.jsx)("input",Object(M.a)({type:"checkbox",onChange:function(e){n&&n(e.currentTarget.checked),t&&t(e)},className:s},c)),r&&Object(O.jsx)("span",{className:V.a.spanClassName,children:r})]})};var L=function(){var e=Object(a.useState)(""),t=Object(g.a)(e,2),n=t[0],r=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n),r("")},i=Object(a.useState)(!1),o=Object(g.a)(i,2),j=o[0],l=o[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 4",Object(O.jsxs)("div",{className:R.a.column,children:[Object(O.jsx)(U,{value:n,onChangeText:r,onEnter:s,error:c}),Object(O.jsx)(U,{className:c?R.a.errorInput:R.a.blue}),Object(O.jsx)(K,{children:"default"}),Object(O.jsx)(K,{red:!0,onClick:s,children:"delete "}),Object(O.jsx)(K,{disabled:!0,children:"disabled"}),Object(O.jsx)(q,{checked:j,onChangeChecked:l,children:"some text "}),Object(O.jsx)(q,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},z=n(24),Q=n.n(z),Y=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,r=e.spanProps,c=Object(W.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),i=Object(g.a)(s,2),o=i[0],j=i[1],l=r||{},u=l.children,d=l.onDoubleClick,b=l.className,h=Object(W.a)(l,["children","onDoubleClick","className"]),x="".concat(Q.a.spanStyle," ").concat(b||"");return Object(O.jsx)(O.Fragment,{children:o?Object(O.jsx)(U,Object(M.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()},className:Q.a.input},c)):Object(O.jsxs)("span",Object(M.a)(Object(M.a)({onDoubleClick:function(e){j(!0),d&&d(e)},className:x},h),{},{children:["\u2712 ",u||c.value]}))})};function $(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function ee(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}$("test",{x:"A",y:1});ee("test",{x:"",y:0});var te=function(){var e=Object(a.useState)(""),t=Object(g.a)(e,2),n=t[0],r=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 6",Object(O.jsx)("div",{children:Object(O.jsx)(Y,{value:n,onChangeText:r,spanProps:{children:n?void 0:" Double click to enter some text..."}})}),Object(O.jsx)(K,{onClick:function(){$("editable-span-value",n)},children:"save"}),Object(O.jsx)(K,{onClick:function(){r(ee("editable-span-value",""))},children:"restore"}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})};var ne=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(v,{}),Object(O.jsx)(w,{}),Object(O.jsx)(E,{}),Object(O.jsx)(L,{}),Object(O.jsx)(te,{})]})},ae=function(e){var t=e.options,n=e.onChange,a=e.onChangeOption,r=Object(W.a)(e,["options","onChange","onChangeOption"]),c=t?t.map((function(e,t){return Object(O.jsx)("option",{value:e,children:e},t)})):[];return Object(O.jsx)("select",Object(M.a)(Object(M.a)({onChange:function(e){n&&n(e),a&&a(e.currentTarget.value)}},r),{},{children:c}))},re=function(e){e.type;var t=e.name,n=e.options,a=e.value,r=e.onChange,c=e.onChangeOption,s=(Object(W.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){r&&r(e),c&&c(e.currentTarget.value)}),i=n?n.map((function(e,n){return Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{type:"radio",name:t,checked:a===e,value:e,onChange:s}),e]},t+"-"+n)})):[];return Object(O.jsx)(O.Fragment,{children:i})},ce=["x","y","z"];var se=function(){var e=Object(a.useState)(ce[1]),t=Object(g.a)(e,2),n=t[0],r=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 7",Object(O.jsx)("div",{children:Object(O.jsx)(ae,{options:ce,value:n,onChangeOption:r})}),Object(O.jsx)("div",{children:Object(O.jsx)(re,{name:"radio",options:ce,value:n,onChangeOption:r})}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},ie=function(e,t){switch(t.type){case"sort":var n=Object(A.a)(e).sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}));return"up"===t.payload?n:n.reverse();case"check":return e.filter((function(e){return e.age>=t.payload}));default:return e}},oe=n(19),je=n.n(oe),le=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var ue=function(){var e=Object(a.useState)(le),t=Object(g.a)(e,2),n=t[0],r=t[1],c=n.map((function(e){return Object(O.jsxs)("div",{className:je.a.container,children:[Object(O.jsx)("span",{children:e.name}),e.age]},e._id)}));return Object(O.jsxs)("div",{className:je.a.commonContainer,children:[Object(O.jsx)("p",{children:"homeworks 8"}),c,Object(O.jsxs)("div",{className:je.a.buttonsContainer,children:[Object(O.jsx)("div",{children:Object(O.jsx)(K,{onClick:function(){return r(ie(le,{type:"sort",payload:"up"}))},children:"sort up"})}),Object(O.jsx)("div",{children:Object(O.jsx)(K,{onClick:function(){return r(ie(le,{type:"sort",payload:"down"}))},children:"sort down"})}),Object(O.jsx)("div",{children:Object(O.jsx)(K,{onClick:function(){return r(ie(le,{type:"check",payload:18}))},children:"check 18"})})]})]})},de=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(se,{}),Object(O.jsx)(ue,{})]})},be=function(){return Object(O.jsx)("div",{children:"Junior Plus"})};var he=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:"404"}),Object(O.jsx)("div",{children:"Page not found!"}),Object(O.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},Oe="/pre-junior",xe="/junior",me="/junior-plus";var pe=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(d.d,{children:[Object(O.jsx)(d.b,{path:"/",exact:!0,render:function(){return Object(O.jsx)(d.a,{to:Oe})}}),Object(O.jsx)(d.b,{path:Oe,render:function(){return Object(O.jsx)(ne,{})}}),Object(O.jsx)(d.b,{path:xe,render:function(){return Object(O.jsx)(de,{})}}),Object(O.jsx)(d.b,{path:me,render:function(){return Object(O.jsx)(be,{})}}),Object(O.jsx)(d.b,{render:function(){return Object(O.jsx)(he,{})}})]})})};var _e=function(){return Object(O.jsxs)("div",{className:l.a.header,children:[Object(O.jsx)(u.b,{to:Oe,className:l.a.link,activeClassName:l.a.active,children:"pre-junior"}),Object(O.jsx)(u.b,{to:xe,className:l.a.link,activeClassName:l.a.active,children:"junior"}),Object(O.jsx)(u.b,{to:me,className:l.a.link,activeClassName:l.a.active,children:"junior+"}),Object(O.jsx)("div",{className:l.a.triangleRight})]})};var fe=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(u.a,{children:[Object(O.jsx)(_e,{}),Object(O.jsx)(pe,{})]})})};var ve=function(){return Object(O.jsxs)("div",{className:o.a.App,children:[Object(O.jsx)("div",{children:"react homeworks:"}),Object(O.jsx)(fe,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(ve,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[43,1,2]]]);
//# sourceMappingURL=main.f1f7c4e3.chunk.js.map