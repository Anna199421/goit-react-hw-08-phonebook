"use strict";(self.webpackChunkphonebook_app=self.webpackChunkphonebook_app||[]).push([[386],{386:function(e,n,t){t.r(n),t.d(n,{default:function(){return A}});var r=t(2791),o=t(5218),a=t(1599),s=t(578),i=t(4680),c=t(2739),u=t(4554),d=t(8595),l=t(2003),m=t(3329),h={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",borderRadius:2,boxShadow:24,p:4,outline:0},b=function(e){var n=e.showModal,t=e.open,r=e.children;return(0,m.jsx)(d.Z,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:t,onClose:function(){return n(!1)},closeAfterTransition:!0,slots:{backdrop:c.Z},slotProps:{backdrop:{timeout:500}},children:(0,m.jsx)(l.Z,{in:t,children:(0,m.jsx)(u.Z,{sx:h,children:r})})})},p=t(5861),x=t(9439),f=t(4687),w=t.n(f),j=t(5705),v=t(9079),C=t(890),Z=t(501),g=t(3790),y=t(4518),k=t(2716),S="EditContact_title__2nHc5",E="EditContact_contactContainer__VwnRG",_=function(e){var n=e.contactId,t=e.name,s=e.number,c=(0,a.i)(),u=(0,x.Z)(c,2),d=u[0],l=u[1],h=l.isSuccess,b=l.error,f=(0,i.LC)().setShowEditContact,_=(0,j.TA)({initialValues:{name:t,number:s},validationSchema:v.K3,onSubmit:function(){var e=(0,p.Z)(w().mark((function e(r){var o,a;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==r.name.trim()&&""!==r.number.trim()){e.next=2;break}return e.abrupt("return");case 2:return o=r.name.trim(),a=r.number.trim(),e.next=6,d((0,v.$B)({newName:o,newNumber:a,id:n,name:t,number:s}));case 6:_.resetForm(),setTimeout((function(){return f(!1)}));case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()});return(0,r.useEffect)((function(){h&&o.ZP.success("Contact successfully edited!"),b&&o.ZP.error(b)}),[h,b]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("h2",{className:S,children:"Edit contact"}),(0,m.jsxs)("div",{className:E,children:[(0,m.jsxs)(C.Z,{sx:{display:"flex",mb:1},variant:"body1",children:[(0,m.jsx)(Z.Z,{sx:{mr:2}}),t]}),(0,m.jsxs)(C.Z,{sx:{display:"flex"},variant:"body1",children:[(0,m.jsx)(k.Z,{sx:{mr:2}}),s]})]}),(0,m.jsxs)("form",{onSubmit:_.handleSubmit,children:[(0,m.jsx)(g.Z,{id:"name",label:"New name",variant:"outlined",sx:{width:1,mb:2},name:"name",type:"text",value:_.values.name,onChange:_.handleChange,error:_.touched.name&&Boolean(_.errors.name),helperText:_.touched.name&&_.errors.name,autoComplete:"off"}),(0,m.jsx)(g.Z,{id:"number",label:"New phone number",variant:"outlined",sx:{width:1,mb:2},name:"number",type:"tel",value:_.values.number,onChange:_.handleChange,error:_.touched.number&&Boolean(_.errors.number),helperText:_.touched.number&&_.errors.number,autoComplete:"off"}),(0,m.jsx)(y.Z,{sx:{width:1,color:"black",bgcolor:function(e){return e.palette.secondary.light}},type:"submit",disabled:!(_.values.name||_.values.number),children:"Save"})]})]})},N=t(5527),T=t(3240),A=function(){var e=(0,a.Jx)(),n=e.data,t=e.isLoading,c=e.isError,d=e.isSuccess,l=e.error,h=(0,i.LC)(),p=h.showAddContact,x=h.setShowAddContact,f=h.showEditContact,w=h.setShowEditContact,j=h.contactId;(0,r.useEffect)((function(){c&&401!==l.status&&o.ZP.error("Something wrong. Try to reload your page! ".concat(l.status))}),[l,c]);var v=(0,r.useMemo)((function(){if(d)return n.find((function(e){return e.id===j}))}),[j,n,d]);return(0,m.jsxs)(u.Z,{sx:{pt:function(e){return e.spacing(2)}},children:[(0,m.jsxs)(N.Z,{elevation:5,sx:{p:function(e){return e.spacing(4)}},children:[d&&(0,m.jsx)(s.CR,{contacts:n}),(0,m.jsx)(b,{open:p,showModal:x,children:(0,m.jsx)(s.t,{})}),(0,m.jsx)(b,{open:f,showModal:w,children:!!v&&(0,m.jsx)(_,{contactId:v.id,number:v.number,name:v.name})})]}),(0,m.jsx)(T.Z,{isLoading:t})]})}}}]);
//# sourceMappingURL=386.42e979ed.chunk.js.map