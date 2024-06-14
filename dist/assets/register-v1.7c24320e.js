import{$ as m,o as h,ar as x,a as e,w as a,a5 as o,ab as n,cK as b,cJ as p,f as c,a6 as g,ac as k,e as w,V as r,ad as d,cU as C,aa as T,cV as f,S as u,r as U}from"./index.4bc17e10.js";import{_ as I}from"./AuthProvider.5ab3573b.js";import{u as M}from"./useGenerateImageVariant.c31b385d.js";import{a as P,b as S,c as B,d as L}from"./auth-v1-tree.465c12ae.js";import{b as _}from"./route-block.2f1a6263.js";import{c as N,a as R,b as V,V as j}from"./VCard.2c35d430.js";import{V as D}from"./VForm.666a8c8b.js";import{V as $}from"./VCheckbox.f318de96.js";const A={class:"auth-wrapper d-flex align-center justify-center pa-4"},E={class:"d-flex"},F=o("h5",{class:"text-h5 font-weight-semibold mb-1"}," Adventure starts here \u{1F680} ",-1),G=o("p",{class:"mb-0"}," Make your app management easy and fun! ",-1),J={class:"d-flex align-center mt-1 mb-4"},K=o("span",{class:"me-1"},"I agree to",-1),q=o("a",{href:"javascript:void(0)",class:"text-primary"},"privacy policy & terms",-1),z=c(" Sign up "),H=o("span",null,"Already have an account?",-1),O=c(" Sign in instead "),Q=o("span",{class:"mx-4"},"or",-1),W={__name:"register-v1",setup(X){const t=m({username:"",email:"",password:"",privacyPolicies:!1}),v=M(L,B),i=m(!1);return(Y,s)=>{const y=U("RouterLink");return h(),x("div",A,[e(j,{class:"auth-card pa-4 pt-7","max-width":"448"},{default:a(()=>[e(N,{class:"justify-center"},{prepend:a(()=>[o("div",E,[e(n(b),{nodes:n(p).app.logo},null,8,["nodes"])])]),default:a(()=>[e(R,{class:"font-weight-semibold text-2xl text-uppercase"},{default:a(()=>[c(g(n(p).app.title),1)]),_:1})]),_:1}),e(V,{class:"pt-2"},{default:a(()=>[F,G]),_:1}),e(V,null,{default:a(()=>[e(D,{onSubmit:s[5]||(s[5]=k(()=>{},["prevent"]))},{default:a(()=>[e(w,null,{default:a(()=>[e(r,{cols:"12"},{default:a(()=>[e(d,{modelValue:t.value.username,"onUpdate:modelValue":s[0]||(s[0]=l=>t.value.username=l),label:"Username"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12"},{default:a(()=>[e(d,{modelValue:t.value.email,"onUpdate:modelValue":s[1]||(s[1]=l=>t.value.email=l),label:"Email",type:"email"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12"},{default:a(()=>[e(d,{modelValue:t.value.password,"onUpdate:modelValue":s[2]||(s[2]=l=>t.value.password=l),label:"Password",type:i.value?"text":"password","append-inner-icon":i.value?"mdi-eye-off-outline":"mdi-eye-outline","onClick:appendInner":s[3]||(s[3]=l=>i.value=!i.value)},null,8,["modelValue","type","append-inner-icon"]),o("div",J,[e($,{id:"privacy-policy",modelValue:t.value.privacyPolicies,"onUpdate:modelValue":s[4]||(s[4]=l=>t.value.privacyPolicies=l),inline:""},null,8,["modelValue"]),e(C,{for:"privacy-policy",style:{opacity:"1"}},{default:a(()=>[K,q]),_:1})]),e(T,{block:"",type:"submit"},{default:a(()=>[z]),_:1})]),_:1}),e(r,{cols:"12",class:"text-center text-base"},{default:a(()=>[H,e(y,{class:"text-primary ms-2",to:{name:"pages-authentication-login-v1"}},{default:a(()=>[O]),_:1})]),_:1}),e(r,{cols:"12",class:"d-flex align-center"},{default:a(()=>[e(f),Q,e(f)]),_:1}),e(r,{cols:"12",class:"text-center"},{default:a(()=>[e(I)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(u,{class:"auth-footer-start-tree d-none d-md-block",src:n(P),width:250},null,8,["src"]),e(u,{src:n(S),class:"auth-footer-end-tree d-none d-md-block",width:350},null,8,["src"]),e(u,{class:"auth-footer-mask d-none d-md-block",src:n(v)},null,8,["src"])])}}};typeof _=="function"&&_(W);export{W as default};