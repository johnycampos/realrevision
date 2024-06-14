import{$ as s,o as k,c as w,w as o,V as h,a as e,b as S,aa as d,ab as A,ae as C,a5 as l,cU as m,ah as p,e as N,f as n,cN as U}from"./index.4bc17e10.js";import{_ as g,a as x}from"./InvoiceSendInvoiceDrawer.123eaf6e.js";import{_ as T}from"./InvoiceEditable.d7f3c632.js";import{u as B}from"./useInvoiceStore.9ed81356.js";import{V as I,b as O}from"./VCard.2c35d430.js";import"./AppDateTimePicker.2a994193.js";import"./vue.runtime.esm-bundler.9a01116a.js";import"./VForm.666a8c8b.js";import"./VTextarea.e0a87b6c.js";import"./VTooltip.6547da95.js";const $=n(" Send Invoice "),j=n(" Preview "),M=n(" Save "),L=n(" Add Payment "),R={class:"d-flex align-center justify-space-between"},W=n(" Payment Terms "),Y={class:"d-flex align-center justify-space-between"},q=n(" Client Notes "),z={class:"d-flex align-center justify-space-between"},E=n(" Payment Stub "),oe={__name:"[id]",setup(F){const D=B(),f=U(),u=s();D.fetchInvoice(Number(f.params.id)).then(i=>{u.value={invoice:i.data.invoice,paymentDetails:i.data.paymentDetails,purchasedProducts:[{title:"App Design",cost:24,hours:2,description:"Designed UI kit & app pages."}],note:"It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!",paymentMethod:"Bank Account",salesperson:"Tom Cook",thanksNote:"Thanks for your business"}}).catch(i=>{console.log(i)});const r=s(!1),c=s(!1),v=s(!0),_=s(!1),y=s(!1),V=s("Bank Account"),P=["Bank Account","PayPal","UPI Transfer"];return(i,t)=>(k(),w(N,null,{default:o(()=>{var b;return[(b=u.value)!=null&&b.invoice?(k(),w(h,{key:0,cols:"12",md:"9"},{default:o(()=>[e(T,{data:u.value},null,8,["data"])]),_:1})):S("",!0),e(h,{cols:"12",md:"3"},{default:o(()=>[e(I,{class:"mb-8"},{default:o(()=>[e(O,null,{default:o(()=>[e(d,{block:"","prepend-icon":"mdi-send-outline",class:"mb-3",onClick:t[0]||(t[0]=a=>r.value=!0)},{default:o(()=>[$]),_:1}),e(d,{block:"",color:"secondary",variant:"outlined",class:"mb-3",to:{name:"invoice-preview-id",params:{id:A(f).params.id}}},{default:o(()=>[j]),_:1},8,["to"]),e(d,{block:"",color:"secondary",variant:"outlined",class:"mb-3"},{default:o(()=>[M]),_:1}),e(d,{block:"",color:"success","prepend-icon":"mdi-currency-usd",onClick:t[1]||(t[1]=a=>c.value=!0)},{default:o(()=>[L]),_:1})]),_:1})]),_:1}),e(C,{modelValue:V.value,"onUpdate:modelValue":t[2]||(t[2]=a=>V.value=a),items:P,label:"Accept Payment Via",class:"mb-6"},null,8,["modelValue"]),l("div",R,[e(m,{for:"payment-terms"},{default:o(()=>[W]),_:1}),l("div",null,[e(p,{id:"payment-terms",modelValue:v.value,"onUpdate:modelValue":t[3]||(t[3]=a=>v.value=a)},null,8,["modelValue"])])]),l("div",Y,[e(m,{for:"client-notes"},{default:o(()=>[q]),_:1}),l("div",null,[e(p,{id:"client-notes",modelValue:_.value,"onUpdate:modelValue":t[4]||(t[4]=a=>_.value=a)},null,8,["modelValue"])])]),l("div",z,[e(m,{for:"payment-stub"},{default:o(()=>[E]),_:1}),l("div",null,[e(p,{id:"payment-stub",modelValue:y.value,"onUpdate:modelValue":t[5]||(t[5]=a=>y.value=a)},null,8,["modelValue"])])])]),_:1}),e(g,{isDrawerOpen:r.value,"onUpdate:isDrawerOpen":t[6]||(t[6]=a=>r.value=a)},null,8,["isDrawerOpen"]),e(x,{isDrawerOpen:c.value,"onUpdate:isDrawerOpen":t[7]||(t[7]=a=>c.value=a)},null,8,["isDrawerOpen"])]}),_:1}))}};export{oe as default};
