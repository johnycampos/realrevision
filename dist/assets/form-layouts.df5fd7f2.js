import{$ as s,o as F,c as h,w as l,a as e,ac as k,e as w,V as o,ad as n,ae as U,cU as Z,dz as E,dA as T,a5 as c,ag as D,ar as q,au as ee,a6 as le,a9 as oe,at as J,cV as X,aa as y,f as C,ab as g}from"./index.1a258bbd.js";import{V as z,a as S,b as $,c as ae}from"./VExpansionPanel.4ab0ad8a.js";import{V as x}from"./VForm.fd5811bb.js";import{V as te}from"./VTextarea.9eb0dcc5.js";import{V as H,a as se}from"./VTabs.d6ede1ef.js";import{b as Q,V as de}from"./VCard.319647d9.js";import{a as ne,V as M}from"./VWindowItem.3e2d6700.js";import{r as B,e as re}from"./validators.650e3200.js";import{V as N}from"./VCheckbox.04dee195.js";import{V as me}from"./VAutocomplete.e2438517.js";import{_ as ie}from"./AppCardCode.6c8a8473.js";import"./filter.e9e303b2.js";import"./vue.runtime.esm-bundler.86261bcd.js";const ue=C("Delivery Address"),ce=C(" Address Type "),Ve=C("Delivery Options"),pe=c("div",{class:"w-100"},[c("div",{class:"d-flex justify-space-between"},[c("h6",{class:"text-base font-weight-medium"}," Standard 3-5 Days "),c("h6",{class:"text-base font-weight-bold"}," Free ")]),c("span",{class:"text-sm"},"Friday, 15 Nov - Monday, 18 Nov")],-1),fe=c("div",{class:"w-100"},[c("div",{class:"d-flex justify-space-between"},[c("h5",{class:"text-base font-weight-medium"}," Express "),c("h6",{class:"text-base font-weight-bold"}," $5.00 ")]),c("span",{class:"text-sm"},"Friday, 15 Nov - Sunday, 17 Nov")],-1),be=c("div",{class:"w-100"},[c("div",{class:"d-flex justify-space-between"},[c("h6",{class:"text-base font-weight-medium"}," Overnight "),c("h6",{class:"text-base font-weight-bold"}," $10.00 ")]),c("span",{class:"text-sm"},"Friday, 15 Nov - Saturday, 16 Nov")],-1),Ce=C("Payment Method"),ve={class:"me-1"},ye={class:"d-flex gap-4"},we=C("Place Order"),xe=C(" Cancel "),Fe={__name:"DemoFormLayoutCollapsible",setup(_){const V=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii"],p=s("home"),u=s("standard"),i=s("credit-debit-card"),f=s(0),v=[{radioValue:"credit-debit-card",radioLabel:"Credit/Debit/ATM Card",icon:"mdi-credit-card-outline"},{radioValue:"cash-on-delivery",radioLabel:"Cash On Delivery",icon:"mdi-help-circle-outline"}];return(t,a)=>(F(),h(ae,{modelValue:f.value,"onUpdate:modelValue":a[7]||(a[7]=d=>f.value=d)},{default:l(()=>[e($,null,{default:l(()=>[e(z,null,{default:l(()=>[ue]),_:1}),e(S,{class:"mt-4"},{default:l(()=>[e(x,{onSubmit:a[1]||(a[1]=k(()=>{},["prevent"]))},{default:l(()=>[e(w,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(n,{label:"Full Name"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(n,{label:"Phone No"})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(te,{label:"Address",rows:"3"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(n,{label:"Pincode"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(n,{label:"Landmark"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(n,{label:"City"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(U,{items:V,label:"State"})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(Z,{class:"mb-3"},{default:l(()=>[ce]),_:1}),e(E,{modelValue:p.value,"onUpdate:modelValue":a[0]||(a[0]=d=>p.value=d),inline:""},{default:l(()=>[e(T,{label:"Home (All day delivery)",value:"home"}),e(T,{label:"Office (Delivery between 10 AM - 5 PM)",value:"office"})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e($,null,{default:l(()=>[e(z,null,{default:l(()=>[Ve]),_:1}),e(S,{class:"mt-4"},{default:l(()=>[e(E,{modelValue:u.value,"onUpdate:modelValue":a[5]||(a[5]=d=>u.value=d),class:"delivery-options"},{default:l(()=>[c("div",{class:D(["delivery-option d-flex rounded-t",u.value==="standard"?"active":""]),onClick:a[2]||(a[2]=d=>u.value="standard")},[e(T,{inline:"",value:"standard",class:"mt-n4"}),pe],2),c("div",{class:D(["delivery-option d-flex",u.value==="express"?"active":""]),onClick:a[3]||(a[3]=d=>u.value="express")},[e(T,{inline:"",class:"mt-n4",value:"express"}),fe],2),c("div",{class:D(["delivery-option d-flex rounded-b",u.value==="overnight"?"active":""]),onClick:a[4]||(a[4]=d=>u.value="overnight")},[e(T,{inline:"",class:"mt-n4",value:"overnight"}),be],2)]),_:1},8,["modelValue"])]),_:1})]),_:1}),e($,null,{default:l(()=>[e(z,null,{default:l(()=>[Ce]),_:1}),e(S,{class:"mt-4"},{default:l(()=>[e(w,null,{default:l(()=>[e(o,{md:"6",cols:"12"},{default:l(()=>[e(x,null,{default:l(()=>[e(w,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(E,{modelValue:i.value,"onUpdate:modelValue":a[6]||(a[6]=d=>i.value=d),inline:""},{default:l(()=>[(F(),q(J,null,ee(v,d=>e(T,{key:d.radioValue,value:d.radioValue},{label:l(()=>[c("span",ve,le(d.radioLabel),1),e(oe,{size:"18",icon:d.icon},null,8,["icon"])]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(n,{label:"Card Number"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(n,{label:"Name"})]),_:1}),e(o,{cols:"6",md:"3"},{default:l(()=>[e(n,{label:"Expiry Date"})]),_:1}),e(o,{cols:"6",md:"3"},{default:l(()=>[e(n,{label:"CVV Code"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(X,{class:"my-5"}),c("div",ye,[e(y,null,{default:l(()=>[we]),_:1}),e(y,{color:"secondary",variant:"tonal"},{default:l(()=>[xe]),_:1})])]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},_e=C(" Personal Info "),he=C(" Account Details "),ke=C(" Social Links "),Ne=C("Submit"),Te=C(" Cancel "),ge={__name:"DemoFormLayoutFormWithTabs",setup(_){const V=s("personal-info"),p=s(""),u=s(""),i=s(),f=s(""),v=s(),t=["USA","Canada","UK","Denmark","Germany","Iceland","Israel","Mexico"],a=["English","German","French","Spanish","Portuguese","Russian","Korean"],d=s(""),b=s(""),R=s(""),L=s(""),W=s(""),A=s(""),Y=s(""),j=s(""),G=s(""),K=s(""),O=s([]),P=s(!1),I=s(!1);return(pl,r)=>(F(),q(J,null,[e(se,{modelValue:V.value,"onUpdate:modelValue":r[0]||(r[0]=m=>V.value=m)},{default:l(()=>[e(H,{value:"personal-info"},{default:l(()=>[_e]),_:1}),e(H,{value:"account-details"},{default:l(()=>[he]),_:1}),e(H,{value:"social-links"},{default:l(()=>[ke]),_:1})]),_:1},8,["modelValue"]),e(de,{flat:""},{default:l(()=>[e(Q,null,{default:l(()=>[e(ne,{modelValue:V.value,"onUpdate:modelValue":r[19]||(r[19]=m=>V.value=m)},{default:l(()=>[e(M,{value:"personal-info"},{default:l(()=>[e(x,{class:"mt-2"},{default:l(()=>[e(w,null,{default:l(()=>[e(o,{md:"6",cols:"12"},{default:l(()=>[e(n,{modelValue:p.value,"onUpdate:modelValue":r[1]||(r[1]=m=>p.value=m),label:"First name"},null,8,["modelValue"])]),_:1}),e(o,{md:"6",cols:"12"},{default:l(()=>[e(n,{modelValue:u.value,"onUpdate:modelValue":r[2]||(r[2]=m=>u.value=m),label:"Last name"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(U,{modelValue:i.value,"onUpdate:modelValue":r[3]||(r[3]=m=>i.value=m),items:t,label:"Country"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(U,{modelValue:O.value,"onUpdate:modelValue":r[4]||(r[4]=m=>O.value=m),items:a,multiple:"",chips:"",clearable:"",label:"Language"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(n,{modelValue:f.value,"onUpdate:modelValue":r[5]||(r[5]=m=>f.value=m),type:"number",label:"Birth Date",placeholder:"YYYY-MM-DD"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(n,{modelValue:v.value,"onUpdate:modelValue":r[6]||(r[6]=m=>v.value=m),type:"number",label:"Phone No."},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(M,{value:"account-details"},{default:l(()=>[e(x,{class:"mt-2"},{default:l(()=>[e(w,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(n,{modelValue:d.value,"onUpdate:modelValue":r[7]||(r[7]=m=>d.value=m),label:"Username"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(n,{modelValue:b.value,"onUpdate:modelValue":r[8]||(r[8]=m=>b.value=m),label:"Email",suffix:"@example.com"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(n,{modelValue:R.value,"onUpdate:modelValue":r[9]||(r[9]=m=>R.value=m),label:"Password",type:P.value?"text":"password","append-inner-icon":P.value?"mdi-eye-outline":"mdi-eye-off-outline","onClick:appendInner":r[10]||(r[10]=m=>P.value=!P.value)},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(n,{modelValue:L.value,"onUpdate:modelValue":r[11]||(r[11]=m=>L.value=m),label:"Confirm Password",type:I.value?"text":"password","append-inner-icon":I.value?"mdi-eye-outline":"mdi-eye-off-outline","onClick:appendInner":r[12]||(r[12]=m=>I.value=!I.value)},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1})]),_:1}),e(M,{value:"social-links"},{default:l(()=>[e(x,{class:"mt-2"},{default:l(()=>[e(w,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(n,{modelValue:W.value,"onUpdate:modelValue":r[13]||(r[13]=m=>W.value=m),label:"Twitter"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(n,{modelValue:A.value,"onUpdate:modelValue":r[14]||(r[14]=m=>A.value=m),label:"Facebook"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(n,{modelValue:Y.value,"onUpdate:modelValue":r[15]||(r[15]=m=>Y.value=m),label:"Google+"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(n,{modelValue:j.value,"onUpdate:modelValue":r[16]||(r[16]=m=>j.value=m),label:"LinkedIn"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(n,{modelValue:G.value,"onUpdate:modelValue":r[17]||(r[17]=m=>G.value=m),label:"Instagram"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(n,{modelValue:K.value,"onUpdate:modelValue":r[18]||(r[18]=m=>K.value=m),label:"Quora"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(X),e(Q,{class:"d-flex gap-4"},{default:l(()=>[e(y,null,{default:l(()=>[Ne]),_:1}),e(y,{color:"secondary",variant:"tonal"},{default:l(()=>[Te]),_:1})]),_:1})]),_:1})],64))}},Re=C(" Validate "),Le=C(" Reset Form "),Pe=C(" Reset Validation "),Ie={__name:"DemoFormLayoutFormValidation",setup(_){const V=s(""),p=s(""),u=["Item 1","Item 2","Item 3","Item 4"],i=s(),f=s(!1),v=s();return(t,a)=>(F(),h(x,{ref_key:"form",ref:v,"lazy-validation":""},{default:l(()=>[e(w,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(n,{modelValue:V.value,"onUpdate:modelValue":a[0]||(a[0]=d=>V.value=d),rules:[g(B)],label:"Name",required:""},null,8,["modelValue","rules"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(n,{modelValue:p.value,"onUpdate:modelValue":a[1]||(a[1]=d=>p.value=d),rules:[g(re),g(B)],label:"E-mail",required:""},null,8,["modelValue","rules"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(U,{modelValue:i.value,"onUpdate:modelValue":a[2]||(a[2]=d=>i.value=d),items:u,rules:[g(B)],label:"Item",name:"select",require:""},null,8,["modelValue","rules"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(N,{modelValue:f.value,"onUpdate:modelValue":a[3]||(a[3]=d=>f.value=d),rules:[g(B)],label:"Do you agree?",required:""},null,8,["modelValue","rules"])]),_:1}),e(o,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:l(()=>[e(y,{color:"success",onClick:a[4]||(a[4]=d=>{var b;return(b=v.value)==null?void 0:b.validate()})},{default:l(()=>[Re]),_:1}),e(y,{color:"error",onClick:a[5]||(a[5]=d=>{var b;return(b=v.value)==null?void 0:b.reset()})},{default:l(()=>[Le]),_:1}),e(y,{color:"warning",onClick:a[6]||(a[6]=d=>{var b;return(b=v.value)==null?void 0:b.resetValidation()})},{default:l(()=>[Pe]),_:1})]),_:1})]),_:1})]),_:1},512))}},Be=C(" Submit "),Ue=C(" Reset "),Ee={__name:"DemoFormLayoutFormHint",setup(_){const V=s(""),p=s(""),u=s(),i=s(!1),f=["foo","bar","fizz","buzz"],v=s([]);return(t,a)=>(F(),h(x,{onSubmit:a[5]||(a[5]=k(()=>{},["prevent"]))},{default:l(()=>[e(w,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(n,{modelValue:V.value,"onUpdate:modelValue":a[0]||(a[0]=d=>V.value=d),label:"Username",placeholder:"Username"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(n,{modelValue:p.value,"onUpdate:modelValue":a[1]||(a[1]=d=>p.value=d),label:"Email",type:"email",placeholder:"Email"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(n,{modelValue:u.value,"onUpdate:modelValue":a[2]||(a[2]=d=>u.value=d),label:"Password",type:"password","persistent-hint":"",placeholder:"Password",hint:"Your password must be 8-20 characters long."},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(me,{modelValue:v.value,"onUpdate:modelValue":a[3]||(a[3]=d=>v.value=d),items:f,chips:"",multiple:"",label:"Autocomplete"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(N,{modelValue:i.value,"onUpdate:modelValue":a[4]||(a[4]=d=>i.value=d),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",class:"d-flex gap-4"},{default:l(()=>[e(y,{type:"submit"},{default:l(()=>[Be]),_:1}),e(y,{color:"secondary",type:"reset",variant:"tonal"},{default:l(()=>[Ue]),_:1})]),_:1})]),_:1})]),_:1}))}},De=C(" Submit "),ze=C(" Reset "),Se={__name:"DemoFormLayoutMultipleColumn",setup(_){const V=s(""),p=s(""),u=s(""),i=s(""),f=s(""),v=s(""),t=s(!1);return(a,d)=>(F(),h(x,{onSubmit:d[7]||(d[7]=k(()=>{},["prevent"]))},{default:l(()=>[e(w,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(n,{modelValue:V.value,"onUpdate:modelValue":d[0]||(d[0]=b=>V.value=b),label:"First Name",placeholder:"First Name"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(n,{modelValue:p.value,"onUpdate:modelValue":d[1]||(d[1]=b=>p.value=b),label:"Last Name",placeholder:"Last Name"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(n,{modelValue:v.value,"onUpdate:modelValue":d[2]||(d[2]=b=>v.value=b),label:"Email",placeholder:"Email"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(n,{modelValue:u.value,"onUpdate:modelValue":d[3]||(d[3]=b=>u.value=b),label:"City",placeholder:"City"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(n,{modelValue:i.value,"onUpdate:modelValue":d[4]||(d[4]=b=>i.value=b),label:"Country",placeholder:"Country"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(n,{modelValue:f.value,"onUpdate:modelValue":d[5]||(d[5]=b=>f.value=b),label:"Company",placeholder:"Company"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(N,{modelValue:t.value,"onUpdate:modelValue":d[6]||(d[6]=b=>t.value=b),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",class:"d-flex gap-4"},{default:l(()=>[e(y,{type:"submit"},{default:l(()=>[De]),_:1}),e(y,{type:"reset",color:"secondary",variant:"tonal"},{default:l(()=>[ze]),_:1})]),_:1})]),_:1})]),_:1}))}},$e=C(" Submit "),He=C(" Reset "),Me={__name:"DemoFormLayoutVerticalFormWithIcons",setup(_){const V=s(""),p=s(""),u=s(),i=s(),f=s(!1);return(v,t)=>(F(),h(x,{onSubmit:t[5]||(t[5]=k(()=>{},["prevent"]))},{default:l(()=>[e(w,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(n,{modelValue:V.value,"onUpdate:modelValue":t[0]||(t[0]=a=>V.value=a),"prepend-inner-icon":"mdi-account-outline",label:"First Name",placeholder:"First Name"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(n,{modelValue:p.value,"onUpdate:modelValue":t[1]||(t[1]=a=>p.value=a),"prepend-inner-icon":"mdi-email-outline",label:"Email",type:"email",placeholder:"Email"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(n,{modelValue:u.value,"onUpdate:modelValue":t[2]||(t[2]=a=>u.value=a),"prepend-inner-icon":"mdi-cellphone",label:"Mobile",type:"number",placeholder:"Number"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(n,{modelValue:i.value,"onUpdate:modelValue":t[3]||(t[3]=a=>i.value=a),"prepend-inner-icon":"mdi-lock-outline",label:"Password",type:"password",placeholder:"password"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(N,{modelValue:f.value,"onUpdate:modelValue":t[4]||(t[4]=a=>f.value=a),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",class:"d-flex gap-4"},{default:l(()=>[e(y,{type:"submit"},{default:l(()=>[$e]),_:1}),e(y,{color:"secondary",type:"reset",variant:"tonal"},{default:l(()=>[He]),_:1})]),_:1})]),_:1})]),_:1}))}},qe=C(" Submit "),We=C(" Reset "),Ae={__name:"DemoFormLayoutVerticalForm",setup(_){const V=s(""),p=s(""),u=s(),i=s(),f=s(!1);return(v,t)=>(F(),h(x,{onSubmit:t[5]||(t[5]=k(()=>{},["prevent"]))},{default:l(()=>[e(w,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(n,{modelValue:V.value,"onUpdate:modelValue":t[0]||(t[0]=a=>V.value=a),label:"First Name",placeholder:"First Name"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(n,{modelValue:p.value,"onUpdate:modelValue":t[1]||(t[1]=a=>p.value=a),label:"Email",type:"email",placeholder:"Email"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(n,{modelValue:u.value,"onUpdate:modelValue":t[2]||(t[2]=a=>u.value=a),label:"Mobile",type:"number",placeholder:"Number"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(n,{modelValue:i.value,"onUpdate:modelValue":t[3]||(t[3]=a=>i.value=a),label:"Password",type:"password",placeholder:"password"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(N,{modelValue:f.value,"onUpdate:modelValue":t[4]||(t[4]=a=>f.value=a),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",class:"d-flex gap-4"},{default:l(()=>[e(y,{type:"submit"},{default:l(()=>[qe]),_:1}),e(y,{type:"reset",color:"secondary",variant:"tonal"},{default:l(()=>[We]),_:1})]),_:1})]),_:1})]),_:1}))}},Ye=c("label",{for:"firstNameHorizontalIcons"},"First Name",-1),je=c("label",{for:"emailHorizontalIcons"},"Email",-1),Ge=c("label",{for:"mobileHorizontalIcons"},"Mobile",-1),Ke=c("label",{for:"passwordHorizontalIcons"},"Password",-1),Oe=C(" Submit "),Qe=C(" Reset "),Je={__name:"DemoFormLayoutHorizontalFormWithIcons",setup(_){const V=s(""),p=s(""),u=s(),i=s(),f=s(!1);return(v,t)=>(F(),h(x,{onSubmit:t[5]||(t[5]=k(()=>{},["prevent"]))},{default:l(()=>[e(w,null,{default:l(()=>[e(o,{cols:"12",md:"3"},{default:l(()=>[Ye]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(n,{id:"firstNameHorizontalIcons",modelValue:V.value,"onUpdate:modelValue":t[0]||(t[0]=a=>V.value=a),"prepend-inner-icon":"mdi-account-outline",placeholder:"First Name","persistent-placeholder":""},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"3"},{default:l(()=>[je]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(n,{id:"emailHorizontalIcons",modelValue:p.value,"onUpdate:modelValue":t[1]||(t[1]=a=>p.value=a),"prepend-inner-icon":"mdi-email-outline",placeholder:"Email","persistent-placeholder":""},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"3"},{default:l(()=>[Ge]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(n,{id:"mobileHorizontalIcons",modelValue:u.value,"onUpdate:modelValue":t[2]||(t[2]=a=>u.value=a),type:"number","prepend-inner-icon":"mdi-cellphone",placeholder:"Number","persistent-placeholder":""},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"3"},{default:l(()=>[Ke]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(n,{id:"passwordHorizontalIcons",modelValue:i.value,"onUpdate:modelValue":t[3]||(t[3]=a=>i.value=a),"prepend-inner-icon":"mdi-lock-outline",type:"password",placeholder:"Password","persistent-placeholder":""},null,8,["modelValue"])]),_:1}),e(o,{"offset-md":"3",cols:"12"},{default:l(()=>[e(N,{modelValue:f.value,"onUpdate:modelValue":t[4]||(t[4]=a=>f.value=a),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{"offset-md":"3",cols:"12",class:"d-flex gap-4"},{default:l(()=>[e(y,{type:"submit"},{default:l(()=>[Oe]),_:1}),e(y,{color:"secondary",type:"reset",variant:"tonal"},{default:l(()=>[Qe]),_:1})]),_:1})]),_:1})]),_:1}))}},Xe=c("label",{for:"firstName"},"First Name",-1),Ze=c("label",{for:"email"},"Email",-1),el=c("label",{for:"mobile"},"Mobile",-1),ll=c("label",{for:"password"},"Password",-1),ol=C(" Submit "),al=C(" Reset "),tl={__name:"DemoFormLayoutHorizontalForm",setup(_){const V=s(""),p=s(""),u=s(),i=s(),f=s(!1);return(v,t)=>(F(),h(x,{onSubmit:t[5]||(t[5]=k(()=>{},["prevent"]))},{default:l(()=>[e(w,null,{default:l(()=>[e(o,{cols:"12",md:"3"},{default:l(()=>[Xe]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(n,{id:"firstName",modelValue:V.value,"onUpdate:modelValue":t[0]||(t[0]=a=>V.value=a),placeholder:"First Name","persistent-placeholder":""},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"3"},{default:l(()=>[Ze]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(n,{id:"email",modelValue:p.value,"onUpdate:modelValue":t[1]||(t[1]=a=>p.value=a),placeholder:"Email","persistent-placeholder":""},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"3"},{default:l(()=>[el]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(n,{id:"mobile",modelValue:u.value,"onUpdate:modelValue":t[2]||(t[2]=a=>u.value=a),type:"number",placeholder:"Number","persistent-placeholder":""},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"3"},{default:l(()=>[ll]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(n,{id:"password",modelValue:i.value,"onUpdate:modelValue":t[3]||(t[3]=a=>i.value=a),type:"password",placeholder:"Password","persistent-placeholder":""},null,8,["modelValue"])]),_:1}),e(o,{"offset-md":"3",cols:"12"},{default:l(()=>[e(N,{modelValue:f.value,"onUpdate:modelValue":t[4]||(t[4]=a=>f.value=a),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{"offset-md":"3",cols:"12",class:"d-flex gap-4"},{default:l(()=>[e(y,{type:"submit"},{default:l(()=>[ol]),_:1}),e(y,{color:"secondary",variant:"tonal",type:"reset"},{default:l(()=>[al]),_:1})]),_:1})]),_:1})]),_:1}))}},sl={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- \u{1F449} First Name -->
      <VCol
        cols="12"
        md="3"
      >
        <label for="firstNameHorizontalIcons">First Name</label>
      </VCol>

      <VCol
        cols="12"
        md="9"
      >
        <VTextField
          id="firstNameHorizontalIcons"
          v-model="firstName"
          prepend-inner-icon="mdi-account-outline"
          placeholder="First Name"
          persistent-placeholder
        />
      </VCol>

      <!-- \u{1F449} Email -->
      <VCol
        cols="12"
        md="3"
      >
        <label for="emailHorizontalIcons">Email</label>
      </VCol>

      <VCol
        cols="12"
        md="9"
      >
        <VTextField
          id="emailHorizontalIcons"
          v-model="email"
          prepend-inner-icon="mdi-email-outline"
          placeholder="Email"
          persistent-placeholder
        />
      </VCol>

      <!-- \u{1F449} Mobile -->
      <VCol
        cols="12"
        md="3"
      >
        <label for="mobileHorizontalIcons">Mobile</label>
      </VCol>

      <VCol
        cols="12"
        md="9"
      >
        <VTextField
          id="mobileHorizontalIcons"
          v-model="mobile"
          type="number"
          prepend-inner-icon="mdi-cellphone"
          placeholder="Number"
          persistent-placeholder
        />
      </VCol>

      <!-- \u{1F449} Password -->
      <VCol
        cols="12"
        md="3"
      >
        <label for="passwordHorizontalIcons">Password</label>
      </VCol>

      <VCol
        cols="12"
        md="9"
      >
        <VTextField
          id="passwordHorizontalIcons"
          v-model="password"
          prepend-inner-icon="mdi-lock-outline"
          type="password"
          placeholder="Password"
          persistent-placeholder
        />
      </VCol>

      <!-- \u{1F449} Checkbox -->
      <VCol
        offset-md="3"
        cols="12"
      >
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <!-- \u{1F449} submit and reset button -->
      <VCol
        offset-md="3"
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- \u{1F449} First Name -->
      <VCol
        cols="12"
        md="3"
      >
        <label for="firstNameHorizontalIcons">First Name</label>
      </VCol>

      <VCol
        cols="12"
        md="9"
      >
        <VTextField
          id="firstNameHorizontalIcons"
          v-model="firstName"
          prepend-inner-icon="mdi-account-outline"
          placeholder="First Name"
          persistent-placeholder
        />
      </VCol>

      <!-- \u{1F449} Email -->
      <VCol
        cols="12"
        md="3"
      >
        <label for="emailHorizontalIcons">Email</label>
      </VCol>

      <VCol
        cols="12"
        md="9"
      >
        <VTextField
          id="emailHorizontalIcons"
          v-model="email"
          prepend-inner-icon="mdi-email-outline"
          placeholder="Email"
          persistent-placeholder
        />
      </VCol>

      <!-- \u{1F449} Mobile -->
      <VCol
        cols="12"
        md="3"
      >
        <label for="mobileHorizontalIcons">Mobile</label>
      </VCol>

      <VCol
        cols="12"
        md="9"
      >
        <VTextField
          id="mobileHorizontalIcons"
          v-model="mobile"
          type="number"
          prepend-inner-icon="mdi-cellphone"
          placeholder="Number"
          persistent-placeholder
        />
      </VCol>

      <!-- \u{1F449} Password -->
      <VCol
        cols="12"
        md="3"
      >
        <label for="passwordHorizontalIcons">Password</label>
      </VCol>

      <VCol
        cols="12"
        md="9"
      >
        <VTextField
          id="passwordHorizontalIcons"
          v-model="password"
          prepend-inner-icon="mdi-lock-outline"
          type="password"
          placeholder="Password"
          persistent-placeholder
        />
      </VCol>

      <!-- \u{1F449} Checkbox -->
      <VCol
        offset-md="3"
        cols="12"
      >
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <!-- \u{1F449} submit and reset button -->
      <VCol
        offset-md="3"
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},dl={ts:`<script lang="ts" setup>
const firstName = ref('')
const lastName = ref('')
const city = ref('')
const country = ref('')
const company = ref('')
const email = ref('')
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- \u{1F449} First Name -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="firstName"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <!-- \u{1F449} Last Name -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="lastName"
          label="Last Name"
          placeholder="Last Name"
        />
      </VCol>

      <!-- \u{1F449} Email -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="email"
          label="Email"
          placeholder="Email"
        />
      </VCol>

      <!-- \u{1F449} City -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="city"
          label="City"
          placeholder="City"
        />
      </VCol>

      <!-- \u{1F449} Country -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="country"
          label="Country"
          placeholder="Country"
        />
      </VCol>

      <!-- \u{1F449} Company -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="company"
          label="Company"
          placeholder="Company"
        />
      </VCol>

      <!-- \u{1F449} Remember me -->
      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const lastName = ref('')
const city = ref('')
const country = ref('')
const company = ref('')
const email = ref('')
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- \u{1F449} First Name -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="firstName"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <!-- \u{1F449} Last Name -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="lastName"
          label="Last Name"
          placeholder="Last Name"
        />
      </VCol>

      <!-- \u{1F449} Email -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="email"
          label="Email"
          placeholder="Email"
        />
      </VCol>

      <!-- \u{1F449} City -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="city"
          label="City"
          placeholder="City"
        />
      </VCol>

      <!-- \u{1F449} Country -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="country"
          label="Country"
          placeholder="Country"
        />
      </VCol>

      <!-- \u{1F449} Company -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="company"
          label="Company"
          placeholder="Company"
        />
      </VCol>

      <!-- \u{1F449} Remember me -->
      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},nl={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- \u{1F449} First Name -->
      <VCol
        cols="12"
        md="3"
      >
        <label for="firstName">First Name</label>
      </VCol>

      <VCol
        cols="12"
        md="9"
      >
        <VTextField
          id="firstName"
          v-model="firstName"
          placeholder="First Name"
          persistent-placeholder
        />
      </VCol>

      <!-- \u{1F449} Email -->
      <VCol
        cols="12"
        md="3"
      >
        <label for="email">Email</label>
      </VCol>

      <VCol
        cols="12"
        md="9"
      >
        <VTextField
          id="email"
          v-model="email"
          placeholder="Email"
          persistent-placeholder
        />
      </VCol>

      <!-- \u{1F449} Mobile -->
      <VCol
        cols="12"
        md="3"
      >
        <label for="mobile">Mobile</label>
      </VCol>

      <VCol
        cols="12"
        md="9"
      >
        <VTextField
          id="mobile"
          v-model="mobile"
          type="number"
          placeholder="Number"
          persistent-placeholder
        />
      </VCol>

      <!-- \u{1F449} Password -->
      <VCol
        cols="12"
        md="3"
      >
        <label for="password">Password</label>
      </VCol>

      <VCol
        cols="12"
        md="9"
      >
        <VTextField
          id="password"
          v-model="password"
          type="password"
          placeholder="Password"
          persistent-placeholder
        />
      </VCol>

      <!-- \u{1F449} Remember me -->
      <VCol
        offset-md="3"
        cols="12"
      >
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <!-- \u{1F449} submit and reset button -->
      <VCol
        offset-md="3"
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn
          color="secondary"
          variant="tonal"
          type="reset"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- \u{1F449} First Name -->
      <VCol
        cols="12"
        md="3"
      >
        <label for="firstName">First Name</label>
      </VCol>

      <VCol
        cols="12"
        md="9"
      >
        <VTextField
          id="firstName"
          v-model="firstName"
          placeholder="First Name"
          persistent-placeholder
        />
      </VCol>

      <!-- \u{1F449} Email -->
      <VCol
        cols="12"
        md="3"
      >
        <label for="email">Email</label>
      </VCol>

      <VCol
        cols="12"
        md="9"
      >
        <VTextField
          id="email"
          v-model="email"
          placeholder="Email"
          persistent-placeholder
        />
      </VCol>

      <!-- \u{1F449} Mobile -->
      <VCol
        cols="12"
        md="3"
      >
        <label for="mobile">Mobile</label>
      </VCol>

      <VCol
        cols="12"
        md="9"
      >
        <VTextField
          id="mobile"
          v-model="mobile"
          type="number"
          placeholder="Number"
          persistent-placeholder
        />
      </VCol>

      <!-- \u{1F449} Password -->
      <VCol
        cols="12"
        md="3"
      >
        <label for="password">Password</label>
      </VCol>

      <VCol
        cols="12"
        md="9"
      >
        <VTextField
          id="password"
          v-model="password"
          type="password"
          placeholder="Password"
          persistent-placeholder
        />
      </VCol>

      <!-- \u{1F449} Remember me -->
      <VCol
        offset-md="3"
        cols="12"
      >
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <!-- \u{1F449} submit and reset button -->
      <VCol
        offset-md="3"
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn
          color="secondary"
          variant="tonal"
          type="reset"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},rl={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <VTextField
          v-model="firstName"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="mobile"
          label="Mobile"
          type="number"
          placeholder="Number"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="password"
          label="Password"
          type="password"
          placeholder="password"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <VTextField
          v-model="firstName"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="mobile"
          label="Mobile"
          type="number"
          placeholder="Number"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="password"
          label="Password"
          type="password"
          placeholder="password"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},ml={ts:`<script lang="ts" setup>
const username = ref('')
const email = ref('')
const password = ref<string>()
const checkbox = ref(false)
const items = ['foo', 'bar', 'fizz', 'buzz'] as const
const values = ref<typeof items[number][]>([])
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <!-- \u{1F449} Username -->
        <VTextField
          v-model="username"
          label="Username"
          placeholder="Username"
        />
      </VCol>

      <VCol cols="12">
        <!-- \u{1F449} Email -->
        <VTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <!-- \u{1F449} Password -->
        <VTextField
          v-model="password"
          label="Password"
          type="password"
          persistent-hint
          placeholder="Password"
          hint="Your password must be 8-20 characters long."
        />
      </VCol>

      <VCol cols="12">
        <!-- \u{1F449} Autocomplete -->
        <VAutocomplete
          v-model="values"
          :items="items"
          chips
          multiple
          label="Autocomplete"
        />
      </VCol>

      <VCol cols="12">
        <!-- \u{1F449} Checkbox -->
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <!-- \u{1F449} submit and reset button -->
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const username = ref('')
const email = ref('')
const password = ref()
const checkbox = ref(false)
const items = [
  'foo',
  'bar',
  'fizz',
  'buzz'
]
const values = ref([])
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <!-- \u{1F449} Username -->
        <VTextField
          v-model="username"
          label="Username"
          placeholder="Username"
        />
      </VCol>

      <VCol cols="12">
        <!-- \u{1F449} Email -->
        <VTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <!-- \u{1F449} Password -->
        <VTextField
          v-model="password"
          label="Password"
          type="password"
          persistent-hint
          placeholder="Password"
          hint="Your password must be 8-20 characters long."
        />
      </VCol>

      <VCol cols="12">
        <!-- \u{1F449} Autocomplete -->
        <VAutocomplete
          v-model="values"
          :items="items"
          chips
          multiple
          label="Autocomplete"
        />
      </VCol>

      <VCol cols="12">
        <!-- \u{1F449} Checkbox -->
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <!-- \u{1F449} submit and reset button -->
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},il={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <VTextField
          v-model="firstName"
          prepend-inner-icon="mdi-account-outline"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="email"
          prepend-inner-icon="mdi-email-outline"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="mobile"
          prepend-inner-icon="mdi-cellphone"
          label="Mobile"
          type="number"
          placeholder="Number"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="password"
          prepend-inner-icon="mdi-lock-outline"
          label="Password"
          type="password"
          placeholder="password"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <VTextField
          v-model="firstName"
          prepend-inner-icon="mdi-account-outline"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="email"
          prepend-inner-icon="mdi-email-outline"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="mobile"
          prepend-inner-icon="mdi-cellphone"
          label="Mobile"
          type="number"
          placeholder="Number"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="password"
          prepend-inner-icon="mdi-lock-outline"
          label="Password"
          type="password"
          placeholder="password"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},ul={ts:`<script lang="ts" setup>
const tab = ref('personal-info')
const firstName = ref('')
const lastName = ref('')
const country = ref()
const birthDate = ref('')
const phoneNo = ref<number>()
const countryList = ['USA', 'Canada', 'UK', 'Denmark', 'Germany', 'Iceland', 'Israel', 'Mexico']
const languageList = ['English', 'German', 'French', 'Spanish', 'Portuguese', 'Russian', 'Korean'] as const
const username = ref('')
const email = ref('')
const password = ref('')
const cPassword = ref('')
const twitterLink = ref('')
const facebookLink = ref('')
const googlePlusLink = ref('')
const linkedInLink = ref('')
const instagramLink = ref('')
const quoraLink = ref('')
const languages = ref<typeof languageList[number][]>([])
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
<\/script>

<template>
  <VTabs v-model="tab">
    <VTab value="personal-info">
      Personal Info
    </VTab>
    <VTab value="account-details">
      Account Details
    </VTab>
    <VTab value="social-links">
      Social Links
    </VTab>
  </VTabs>

  <VCard flat>
    <VCardText>
      <VWindow v-model="tab">
        <VWindowItem value="personal-info">
          <VForm class="mt-2">
            <VRow>
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="firstName"
                  label="First name"
                />
              </VCol>

              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="lastName"
                  label="Last name"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="country"
                  :items="countryList"
                  label="Country"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="languages"
                  :items="languageList"
                  multiple
                  chips
                  clearable
                  label="Language"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="birthDate"
                  type="number"
                  label="Birth Date"
                  placeholder="YYYY-MM-DD"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="phoneNo"
                  type="number"
                  label="Phone No."
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="account-details">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="username"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="email"
                  label="Email"
                  suffix="@example.com"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="password"
                  label="Password"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="cPassword"
                  label="Confirm Password"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="social-links">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="twitterLink"
                  label="Twitter"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="facebookLink"
                  label="Facebook"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="googlePlusLink"
                  label="Google+"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="linkedInLink"
                  label="LinkedIn"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="instagramLink"
                  label="Instagram"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="quoraLink"
                  label="Quora"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCardText>

    <VDivider />

    <VCardText class="d-flex gap-4">
      <VBtn>Submit</VBtn>
      <VBtn
        color="secondary"
        variant="tonal"
      >
        Cancel
      </VBtn>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const tab = ref('personal-info')
const firstName = ref('')
const lastName = ref('')
const country = ref()
const birthDate = ref('')
const phoneNo = ref()
const countryList = [
  'USA',
  'Canada',
  'UK',
  'Denmark',
  'Germany',
  'Iceland',
  'Israel',
  'Mexico'
]
const languageList = [
  'English',
  'German',
  'French',
  'Spanish',
  'Portuguese',
  'Russian',
  'Korean'
]
const username = ref('')
const email = ref('')
const password = ref('')
const cPassword = ref('')
const twitterLink = ref('')
const facebookLink = ref('')
const googlePlusLink = ref('')
const linkedInLink = ref('')
const instagramLink = ref('')
const quoraLink = ref('')
const languages = ref([])
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
<\/script>

<template>
  <VTabs v-model="tab">
    <VTab value="personal-info">
      Personal Info
    </VTab>
    <VTab value="account-details">
      Account Details
    </VTab>
    <VTab value="social-links">
      Social Links
    </VTab>
  </VTabs>

  <VCard flat>
    <VCardText>
      <VWindow v-model="tab">
        <VWindowItem value="personal-info">
          <VForm class="mt-2">
            <VRow>
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="firstName"
                  label="First name"
                />
              </VCol>

              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="lastName"
                  label="Last name"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="country"
                  :items="countryList"
                  label="Country"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="languages"
                  :items="languageList"
                  multiple
                  chips
                  clearable
                  label="Language"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="birthDate"
                  type="number"
                  label="Birth Date"
                  placeholder="YYYY-MM-DD"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="phoneNo"
                  type="number"
                  label="Phone No."
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="account-details">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="username"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="email"
                  label="Email"
                  suffix="@example.com"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="password"
                  label="Password"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="cPassword"
                  label="Confirm Password"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="social-links">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="twitterLink"
                  label="Twitter"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="facebookLink"
                  label="Facebook"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="googlePlusLink"
                  label="Google+"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="linkedInLink"
                  label="LinkedIn"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="instagramLink"
                  label="Instagram"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="quoraLink"
                  label="Quora"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCardText>

    <VDivider />

    <VCardText class="d-flex gap-4">
      <VBtn>Submit</VBtn>
      <VBtn
        color="secondary"
        variant="tonal"
      >
        Cancel
      </VBtn>
    </VCardText>
  </VCard>
</template>
`},cl={ts:`<script lang="ts" setup>
import type { VForm } from 'vuetify/components'
import { emailValidator, requiredValidator } from '@validators'

const name = ref('')
const email = ref('')
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'] as const
const select = ref<typeof items[number]>()
const checkbox = ref(false)
const form = ref<VForm>()
<\/script>

<template>
  <VForm
    ref="form"
    lazy-validation
  >
    <VRow>
      <VCol cols="12">
        <VTextField
          v-model="name"
          :rules="[requiredValidator]"
          label="Name"
          required
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="email"
          :rules="[emailValidator, requiredValidator]"
          label="E-mail"
          required
        />
      </VCol>

      <VCol cols="12">
        <VSelect
          v-model="select"
          :items="items"
          :rules="[requiredValidator]"
          label="Item"
          name="select"
          require
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          :rules="[requiredValidator]"
          label="Do you agree?"
          required
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex flex-wrap gap-4"
      >
        <VBtn
          color="success"
          @click="form?.validate()"
        >
          Validate
        </VBtn>

        <VBtn
          color="error"
          @click="form?.reset()"
        >
          Reset Form
        </VBtn>

        <VBtn
          color="warning"
          @click="form?.resetValidation()"
        >
          Reset Validation
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
import {
  emailValidator,
  requiredValidator
} from '@validators'

const name = ref('')
const email = ref('')
const items = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4'
]
const select = ref()
const checkbox = ref(false)
const form = ref()
<\/script>

<template>
  <VForm
    ref="form"
    lazy-validation
  >
    <VRow>
      <VCol cols="12">
        <VTextField
          v-model="name"
          :rules="[requiredValidator]"
          label="Name"
          required
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="email"
          :rules="[emailValidator, requiredValidator]"
          label="E-mail"
          required
        />
      </VCol>

      <VCol cols="12">
        <VSelect
          v-model="select"
          :items="items"
          :rules="[requiredValidator]"
          label="Item"
          name="select"
          require
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          :rules="[requiredValidator]"
          label="Do you agree?"
          required
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex flex-wrap gap-4"
      >
        <VBtn
          color="success"
          @click="form?.validate()"
        >
          Validate
        </VBtn>

        <VBtn
          color="error"
          @click="form?.reset()"
        >
          Reset Form
        </VBtn>

        <VBtn
          color="warning"
          @click="form?.resetValidation()"
        >
          Reset Validation
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},Vl=c("h4",{class:"text-h6 font-weight-medium mb-5"}," Collapsible Section ",-1),gl={__name:"form-layouts",setup(_){return(V,p)=>{const u=tl,i=ie,f=Je,v=Ae,t=Me,a=Se,d=Ee,b=Ie,R=ge,L=Fe;return F(),q("div",null,[e(w,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Horizontal Form",code:nl},{default:l(()=>[e(u)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Horizontal Form with Icons",code:sl},{default:l(()=>[e(f)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Vertical Form",code:rl},{default:l(()=>[e(v)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Vertical Form with Icons",code:il},{default:l(()=>[e(t)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(i,{title:"Multiple Column",code:dl},{default:l(()=>[e(a)]),_:1},8,["code"])]),_:1})]),_:1}),e(w,{class:"match-height my-3"},{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Form Hint",code:ml},{default:l(()=>[e(d)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Form Validation",code:cl},{default:l(()=>[e(b)]),_:1},8,["code"])]),_:1})]),_:1}),e(w,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(i,{title:"Form with Tabs","no-padding":"",code:ul},{default:l(()=>[e(R)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[Vl,e(L)]),_:1})]),_:1})])}}};export{gl as default};
