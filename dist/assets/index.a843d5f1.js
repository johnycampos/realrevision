import{_ as V}from"./InvoiceEditable.d7f3c632.js";import{$ as n,o as y,c as b,w as t,a as e,V as f,aa as d,ae as h,a5 as o,cU as i,ah as u,e as k,f as s}from"./index.4bc17e10.js";import{V as w,b as x}from"./VCard.2c35d430.js";import"./AppDateTimePicker.2a994193.js";import"./vue.runtime.esm-bundler.9a01116a.js";import"./VTextarea.e0a87b6c.js";import"./VTooltip.6547da95.js";import"./useInvoiceStore.9ed81356.js";const P=s(" Send Invoice "),B=s(" Preview "),S=s(" Save "),N={class:"d-flex align-center justify-space-between"},U=s(" Payment Terms "),C={class:"d-flex align-center justify-space-between"},D=s(" Client Notes "),T={class:"d-flex align-center justify-space-between"},A=s(" Payment Stub "),F={__name:"index",setup(g){const _=n({invoice:{id:5037,issuedDate:"",service:"",total:0,avatar:"",invoiceStatus:"",balance:"",dueDate:"",client:{address:"",company:"",companyEmail:"",contact:"",country:"",name:""}},paymentDetails:{totalDue:"$12,110.55",bankName:"American Bank",country:"United States",iban:"ETD95476213874685",swiftCode:"BR91905"},purchasedProducts:[{title:"",cost:0,hours:0,description:""}],note:"",paymentMethod:"",salesperson:"",thanksNote:""}),c=n(!0),m=n(!1),r=n(!1),p=n("Bank Account"),v=["Bank Account","PayPal","UPI Transfer"];return(j,a)=>(y(),b(k,null,{default:t(()=>[e(f,{cols:"12",md:"9"},{default:t(()=>[e(V,{data:_.value},null,8,["data"])]),_:1}),e(f,{cols:"12",md:"3"},{default:t(()=>[e(w,{class:"mb-8"},{default:t(()=>[e(x,null,{default:t(()=>[e(d,{block:"","prepend-icon":"mdi-send-outline",class:"mb-3"},{default:t(()=>[P]),_:1}),e(d,{block:"",color:"secondary",variant:"outlined",class:"mb-3",to:{name:"invoice-preview-id",params:{id:"5036"}}},{default:t(()=>[B]),_:1}),e(d,{block:"",color:"secondary",variant:"outlined"},{default:t(()=>[S]),_:1})]),_:1})]),_:1}),e(h,{modelValue:p.value,"onUpdate:modelValue":a[0]||(a[0]=l=>p.value=l),items:v,label:"Accept Payment Via",class:"mb-6"},null,8,["modelValue"]),o("div",N,[e(i,{for:"payment-terms"},{default:t(()=>[U]),_:1}),o("div",null,[e(u,{id:"payment-terms",modelValue:c.value,"onUpdate:modelValue":a[1]||(a[1]=l=>c.value=l)},null,8,["modelValue"])])]),o("div",C,[e(i,{for:"client-notes"},{default:t(()=>[D]),_:1}),o("div",null,[e(u,{id:"client-notes",modelValue:m.value,"onUpdate:modelValue":a[2]||(a[2]=l=>m.value=l)},null,8,["modelValue"])])]),o("div",T,[e(i,{for:"payment-stub"},{default:t(()=>[A]),_:1}),o("div",null,[e(u,{id:"payment-stub",modelValue:r.value,"onUpdate:modelValue":a[3]||(a[3]=l=>r.value=l)},null,8,["modelValue"])])])]),_:1})]),_:1}))}};export{F as default};