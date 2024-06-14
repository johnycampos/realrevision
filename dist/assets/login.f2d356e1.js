import{cL as E,$ as u,cM as M,o as U,ar as B,a5 as r,a as e,ab as l,cJ as S,cK as D,a6 as F,w as t,V as m,S as V,ac as j,e as I,ad as A,aa as J,f as d,cN as q,cO as G,r as X}from"./index.4bc17e10.js";import{a as $,b as H,c as K,d as z}from"./auth-v2-login-illustration-light.30a5f66a.js";import{a as Q,b as W}from"./auth-v2-mask-light.df4dd404.js";import{t as Y}from"./tree.2ce67c1f.js";import{u as C}from"./useGenerateImageVariant.c31b385d.js";import{r as L}from"./validators.093a04a7.js";import{b as T}from"./route-block.2f1a6263.js";import{V as Z,b}from"./VCard.2c35d430.js";import{V as ee}from"./VAlert.b408607f.js";import{V as te}from"./VCheckbox.f318de96.js";import{V as se}from"./VSnackbar.399c6431.js";import{V as ae}from"./VForm.666a8c8b.js";const N="https://backendnode-cu2o.onrender.com",oe=E.create({baseURL:N,timeout:6e4,headers:{"X-Frame-Options":"SAMEORIGIN","X-Content-Type-Options":"nosniff","Permissions-Policy":"geolocation=(self), midi=(self), push=(self), sync-xhr=(self), speaker=(self), fullscreen=(self)","Access-Control-Allow-Origin":N,"Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS"}}),le={logar:(v,c)=>oe.post("/api/auth/login",{username:v,password:c},{headers:{"g-recaptcha-response":"teste"},transformResponse:[function(a){console.log("Raw response data:",a);let n;try{n=JSON.parse(a)}catch(p){return console.error("Error parsing response data:",p),a}return n&&n.status===200,n}]}).then(a=>(console.log("Full response:",a),a)).catch(a=>{throw console.error("Error in API call:",a),a})};const re={class:"auth-logo d-flex align-start gap-x-3"},ne={class:"font-weight-semibold leading-normal text-2xl text-uppercase"},ie=r("h5",{class:"text-h5 font-weight-semibold mb-1"}," Bem vindo \xE0 loja\u{1F44B}\u{1F3FB} ",-1),ue=r("p",{class:"mb-0"},null,-1),ce=r("p",{class:"text-caption mb-2"},[d(" Insira seu "),r("strong",null,"login"),d(" e "),r("strong",null,"senha!")],-1),de={class:"d-flex align-center flex-wrap justify-space-between mt-1 mb-4"},me=d(" Esqueci Senha? "),pe=d(" Login "),fe=r("span",null,"N\xE3o possui login?",-1),ge=d(" Criar Nova Conta "),he=d(" Usu\xE1rio ou Senha errada!!! "),_e={__name:"login",setup(v){const c=u(!1),a=C(z,K,H,$,!0),n=C(W,Q),p=q(),y=G(),O=M(),x=u({email:void 0,password:void 0}),w=u(),g=u(!1),h=u("johny"),_=u("testando"),k=u(!1),P=()=>{le.logar(h.value,_.value).then(i=>{console.log(i);const{accessToken:s,userData:f,userAbilities:o}=i.data;return localStorage.setItem("userAbilities",JSON.stringify(o)),O.update(o),localStorage.setItem("userData",JSON.stringify(f)),localStorage.setItem("accessToken",JSON.stringify(s)),p.query.to?y.replace(String(p.query.to)):y.replace("/"),null}).catch(i=>{console.log("to no catch"),g.value=!0})},R=()=>{var i;(i=w.value)==null||i.validate().then(({valid:s})=>{s&&P()})};return(i,s)=>{const f=X("RouterLink");return U(),B("div",null,[r("div",re,[e(l(D),{nodes:l(S).app.logo},null,8,["nodes"]),r("h1",ne,F(l(S).app.title),1)]),e(I,{"no-gutters":"",class:"auth-wrapper"},{default:t(()=>[e(m,{lg:"8",class:"d-none d-lg-flex align-center justify-center position-relative"},{default:t(()=>[e(V,{"max-width":"768px",src:l(a),class:"auth-illustration"},null,8,["src"]),e(V,{width:276,src:l(Y),class:"auth-footer-start-tree"},null,8,["src"]),e(V,{class:"auth-footer-mask",src:l(n)},null,8,["src"])]),_:1}),e(m,{cols:"12",lg:"4",class:"auth-bg d-flex align-center justify-center"},{default:t(()=>[e(Z,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-4"},{default:t(()=>[e(b,null,{default:t(()=>[ie,ue]),_:1}),e(b,null,{default:t(()=>[e(ee,{color:"primary",variant:"tonal"},{default:t(()=>[ce]),_:1})]),_:1}),e(b,null,{default:t(()=>[e(l(ae),{ref_key:"refVForm",ref:w,onSubmit:j(R,["prevent"])},{default:t(()=>[e(I,null,{default:t(()=>[e(m,{cols:"12"},{default:t(()=>[e(A,{modelValue:h.value,"onUpdate:modelValue":s[0]||(s[0]=o=>h.value=o),label:"Email",type:"email",rules:[l(L)],"error-messages":x.value.email},null,8,["modelValue","rules","error-messages"])]),_:1}),e(m,{cols:"12"},{default:t(()=>[e(A,{modelValue:_.value,"onUpdate:modelValue":s[1]||(s[1]=o=>_.value=o),label:"Password",rules:[l(L)],type:c.value?"text":"password","error-messages":x.value.password,"append-inner-icon":c.value?"mdi-eye-off-outline":"mdi-eye-outline","onClick:appendInner":s[2]||(s[2]=o=>c.value=!c.value)},null,8,["modelValue","rules","type","error-messages","append-inner-icon"]),r("div",de,[e(te,{modelValue:k.value,"onUpdate:modelValue":s[3]||(s[3]=o=>k.value=o),label:"Salvar login"},null,8,["modelValue"]),e(f,{class:"text-primary ms-2 mb-1",to:{name:"forgot-password"}},{default:t(()=>[me]),_:1})]),e(J,{block:"",type:"submit"},{default:t(()=>[pe]),_:1})]),_:1}),e(m,{cols:"12",class:"text-center"},{default:t(()=>[fe,e(f,{class:"text-primary ms-2",to:{name:"register"}},{default:t(()=>[ge]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1}),e(se,{modelValue:g.value,"onUpdate:modelValue":s[4]||(s[4]=o=>g.value=o),location:"bottom center",variant:"flat",color:"error"},{default:t(()=>[he]),_:1},8,["modelValue"])])}}};typeof T=="function"&&T(_e);export{_e as default};
