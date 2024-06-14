import{$ as v,o as i,c as V,w as o,a as t,aa as e,cY as C,_ as d,ar as u,f as n,a9 as m,a5 as a,aw as j,ax as D,V as s,e as g}from"./index.4bc17e10.js";import{_ as z}from"./AppCardCode.e951a0d9.js";import{V as f}from"./VAlert.b408607f.js";import"./vue.runtime.esm-bundler.9a01116a.js";import"./VCard.2c35d430.js";const N={__name:"DemoButtonGroup",setup(r){const c=v(1);return(p,_)=>(i(),V(C,{modelValue:c.value,"onUpdate:modelValue":_[0]||(_[0]=l=>c.value=l),variant:"outlined",color:"primary",divided:""},{default:o(()=>[t(e,{icon:"mdi-format-align-left"}),t(e,{icon:"mdi-format-align-center"}),t(e,{icon:"mdi-format-align-right"}),t(e,{icon:"mdi-format-align-justify"})]),_:1},8,["modelValue"]))}},W={},R={class:"demo-space-x"},U=n(" String Literal "),O=n(" Open New Tab ");function A(r,c){return i(),u("div",R,[t(e,{href:"https://themeselection.com/"},{default:o(()=>[U]),_:1}),t(e,{href:"https://themeselection.com/",target:"_blank",rel:"noopener noreferrer"},{default:o(()=>[O]),_:1})])}const Y=d(W,[["render",A]]),q={},G={class:"demo-space-x"},Q=n(" String Literal "),F=n(" Object Path "),H=n(" Named Router "),J=n(" With Query ");function K(r,c){return i(),u("div",G,[t(e,{to:"alert"},{default:o(()=>[Q]),_:1}),t(e,{color:"warning",to:{path:"alert"}},{default:o(()=>[F]),_:1}),t(e,{color:"success",to:{name:"components-alert"}},{default:o(()=>[H]),_:1}),t(e,{color:"secondary",to:{path:"alert",query:{plan:"private"}}},{default:o(()=>[J]),_:1})])}const M=d(q,[["render",K]]);const X=r=>(j("data-v-6873b854"),r=r(),D(),r),Z={class:"demo-space-x"},tt=n(" Accept Terms "),ot=n(" Upload "),nt=n(" Loader slot "),et=X(()=>a("span",null,"Loading...",-1)),at=n(" Icon Loader "),ct={class:"custom-loader"},lt={__name:"DemoButtonLoaders",setup(r){const c=v([]),p=_=>{c.value[_]=!0,setTimeout(()=>{c.value[_]=!1},3e3)};return(_,l)=>(i(),u("div",Z,[t(e,{loading:c.value[0],disabled:c.value[0],color:"primary",onClick:l[0]||(l[0]=B=>p(0))},{default:o(()=>[tt]),_:1},8,["loading","disabled"]),t(e,{loading:c.value[1],disabled:c.value[1],color:"secondary",onClick:l[1]||(l[1]=B=>p(1))},{default:o(()=>[ot,t(m,{end:"",icon:"mdi-cloud-upload-outline"})]),_:1},8,["loading","disabled"]),t(e,{loading:c.value[2],disabled:c.value[2],color:"success",onClick:l[2]||(l[2]=B=>p(2))},{loader:o(()=>[et]),default:o(()=>[nt]),_:1},8,["loading","disabled"]),t(e,{loading:c.value[3],disabled:c.value[3],color:"info",onClick:l[3]||(l[3]=B=>p(3))},{loader:o(()=>[a("span",ct,[t(m,{icon:"mdi-cached"})])]),default:o(()=>[at]),_:1},8,["loading","disabled"]),t(e,{loading:c.value[4],disabled:c.value[4],color:"warning",icon:"mdi-cloud-upload-outline",onClick:l[4]||(l[4]=B=>p(4))},null,8,["loading","disabled"])]))}},rt=d(lt,[["__scopeId","data-v-6873b854"]]),st={},it=n(" Block Button "),dt=n(" Block Button ");function ut(r,c){return i(),V(g,null,{default:o(()=>[t(s,{cols:"12",sm:"6"},{default:o(()=>[t(e,{block:""},{default:o(()=>[it]),_:1})]),_:1}),t(s,{cols:"12",sm:"6"},{default:o(()=>[t(e,{variant:"outlined",block:""},{default:o(()=>[dt]),_:1})]),_:1})]),_:1})}const _t=d(st,[["render",ut]]),mt={},pt={class:"demo-space-x"},Bt=n(" Extra large Button "),Vt=n(" Large Button "),ft=n(" Normal Button "),vt=n(" Small Button "),gt=n(" Extra small Button ");function ht(r,c){return i(),u("div",pt,[t(e,{size:"x-large"},{default:o(()=>[Bt]),_:1}),t(e,{color:"success",size:"large"},{default:o(()=>[Vt]),_:1}),t(e,{color:"info"},{default:o(()=>[ft]),_:1}),t(e,{size:"small",color:"warning"},{default:o(()=>[vt]),_:1}),t(e,{size:"x-small",color:"error"},{default:o(()=>[gt]),_:1})])}const xt=d(mt,[["render",ht]]),$t={},yt={class:"demo-space-x"};function bt(r,c){return i(),u("div",yt,[t(e,{icon:"mdi-briefcase-download-outline",variant:"text"}),t(e,{icon:"mdi-account-plus-outline",variant:"text",color:"secondary"}),t(e,{icon:"mdi-magnify",variant:"text",color:"success"}),t(e,{icon:"mdi-thumb-up-outline",variant:"text",color:"info"}),t(e,{icon:"mdi-star-outline",variant:"text",color:"warning"}),t(e,{icon:"mdi-heart-outline",variant:"text",color:"error"})])}const wt=d($t,[["render",bt]]),kt={},St={class:"demo-space-x"},It=n(" Accept "),Tt=n("Cancel "),Et=n(" Upload "),Lt=n(" Back ");function Pt(r,c){return i(),u("div",St,[t(e,null,{default:o(()=>[It,t(m,{end:"",icon:"mdi-checkbox-marked-circle-outline"})]),_:1}),t(e,{color:"secondary"},{default:o(()=>[t(m,{start:"",icon:"mdi-minus-circle-outline"}),Tt]),_:1}),t(e,{color:"success"},{default:o(()=>[Et,t(m,{end:"",icon:"mdi-cloud-upload-outline"})]),_:1}),t(e,{color:"info"},{default:o(()=>[t(m,{start:"",icon:"mdi-arrow-left"}),Lt]),_:1}),t(e,{color:"warning"},{default:o(()=>[t(m,{icon:"mdi-wrench-outline"})]),_:1}),t(e,{color:"error"},{default:o(()=>[t(m,{icon:"mdi-cancel"})]),_:1})])}const Ct=d(kt,[["render",Pt]]),jt={},Dt={class:"demo-space-x"},zt=n(" Primary "),Nt=n(" Secondary "),Wt=n(" Success "),Rt=n(" Info "),Ut=n(" warning "),Ot=n(" error ");function At(r,c){return i(),u("div",Dt,[t(e,{variant:"tonal"},{default:o(()=>[zt]),_:1}),t(e,{color:"secondary",variant:"tonal"},{default:o(()=>[Nt]),_:1}),t(e,{color:"success",variant:"tonal"},{default:o(()=>[Wt]),_:1}),t(e,{color:"info",variant:"tonal"},{default:o(()=>[Rt]),_:1}),t(e,{color:"warning",variant:"tonal"},{default:o(()=>[Ut]),_:1}),t(e,{color:"error",variant:"tonal"},{default:o(()=>[Ot]),_:1})])}const Yt=d(jt,[["render",At]]),qt={},Gt={class:"demo-space-x"},Qt=n(" Primary "),Ft=n(" Secondary "),Ht=n(" Success "),Jt=n(" Info "),Kt=n(" warning "),Mt=n(" error ");function Xt(r,c){return i(),u("div",Gt,[t(e,{variant:"plain"},{default:o(()=>[Qt]),_:1}),t(e,{color:"secondary",variant:"plain"},{default:o(()=>[Ft]),_:1}),t(e,{color:"success",variant:"plain"},{default:o(()=>[Ht]),_:1}),t(e,{color:"info",variant:"plain"},{default:o(()=>[Jt]),_:1}),t(e,{color:"warning",variant:"plain"},{default:o(()=>[Kt]),_:1}),t(e,{color:"error",variant:"plain"},{default:o(()=>[Mt]),_:1})])}const Zt=d(qt,[["render",Xt]]),to={},oo={class:"demo-space-x"},no=n(" Primary "),eo=n(" Secondary "),ao=n(" Success "),co=n(" Info "),lo=n(" Warning "),ro=n(" Error ");function so(r,c){return i(),u("div",oo,[t(e,{variant:"text"},{default:o(()=>[no]),_:1}),t(e,{variant:"text",color:"secondary"},{default:o(()=>[eo]),_:1}),t(e,{variant:"text",color:"success"},{default:o(()=>[ao]),_:1}),t(e,{variant:"text",color:"info"},{default:o(()=>[co]),_:1}),t(e,{variant:"text",color:"warning"},{default:o(()=>[lo]),_:1}),t(e,{variant:"text",color:"error"},{default:o(()=>[ro]),_:1})])}const io=d(to,[["render",so]]),uo={},_o={class:"demo-space-x"},mo=n(" Normal Button "),po=n(" Rounded Button "),Bo=n(" Tile Button "),Vo=n(" Pill Button ");function fo(r,c){return i(),u("div",_o,[t(e,null,{default:o(()=>[mo]),_:1}),t(e,{rounded:"lg",color:"secondary"},{default:o(()=>[po]),_:1}),t(e,{rounded:0,color:"success"},{default:o(()=>[Bo]),_:1}),t(e,{rounded:"pill",color:"info"},{default:o(()=>[Vo]),_:1})])}const vo=d(uo,[["render",fo]]),go={},ho={class:"demo-space-x"},xo=n(" primary "),$o=n(" Secondary "),yo=n(" Success "),bo=n(" Info "),wo=n(" Warning "),ko=n(" Error ");function So(r,c){return i(),u("div",ho,[t(e,{flat:""},{default:o(()=>[xo]),_:1}),t(e,{flat:"",color:"secondary"},{default:o(()=>[$o]),_:1}),t(e,{flat:"",color:"success"},{default:o(()=>[yo]),_:1}),t(e,{flat:"",color:"info"},{default:o(()=>[bo]),_:1}),t(e,{flat:"",color:"warning"},{default:o(()=>[wo]),_:1}),t(e,{flat:"",color:"error"},{default:o(()=>[ko]),_:1})])}const Io=d(go,[["render",So]]),To={},Eo={class:"demo-space-x"},Lo=n(" Primary "),Po=n(" Secondary "),Co=n(" Success "),jo=n(" Info "),Do=n(" Warning "),zo=n(" Error ");function No(r,c){return i(),u("div",Eo,[t(e,{variant:"outlined"},{default:o(()=>[Lo]),_:1}),t(e,{variant:"outlined",color:"secondary"},{default:o(()=>[Po]),_:1}),t(e,{variant:"outlined",color:"success"},{default:o(()=>[Co]),_:1}),t(e,{variant:"outlined",color:"info"},{default:o(()=>[jo]),_:1}),t(e,{variant:"outlined",color:"warning"},{default:o(()=>[Do]),_:1}),t(e,{variant:"outlined",color:"error"},{default:o(()=>[zo]),_:1})])}const Wo=d(To,[["render",No]]),Ro={},Uo={class:"demo-space-x"},Oo=n(" Primary "),Ao=n(" Secondary "),Yo=n(" Success "),qo=n(" Info "),Go=n(" Warning "),Qo=n(" Error ");function Fo(r,c){return i(),u("div",Uo,[t(e,{color:"primary"},{default:o(()=>[Oo]),_:1}),t(e,{color:"secondary"},{default:o(()=>[Ao]),_:1}),t(e,{color:"success"},{default:o(()=>[Yo]),_:1}),t(e,{color:"info"},{default:o(()=>[qo]),_:1}),t(e,{color:"warning"},{default:o(()=>[Go]),_:1}),t(e,{color:"error"},{default:o(()=>[Qo]),_:1})])}const Ho=d(Ro,[["render",Fo]]),Jo={ts:`<script lang="ts" setup>
const toggleExclusive = ref(1)
<\/script>

<template>
  <VBtnToggle
    v-model="toggleExclusive"
    variant="outlined"
    color="primary"
    divided
  >
    <VBtn icon="mdi-format-align-left" />
    <VBtn icon="mdi-format-align-center" />
    <VBtn icon="mdi-format-align-right" />
    <VBtn icon="mdi-format-align-justify" />
  </VBtnToggle>
</template>
`,js:`<script setup>

const toggleExclusive = ref(1)
<\/script>

<template>
  <VBtnToggle
    v-model="toggleExclusive"
    variant="outlined"
    color="primary"
    divided
  >
    <VBtn icon="mdi-format-align-left" />
    <VBtn icon="mdi-format-align-center" />
    <VBtn icon="mdi-format-align-right" />
    <VBtn icon="mdi-format-align-justify" />
  </VBtnToggle>
</template>
`},Ko={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="outlined">
      Primary
    </VBtn>
    <VBtn
      variant="outlined"
      color="secondary"
    >
      Secondary
    </VBtn>
    <VBtn
      variant="outlined"
      color="success"
    >
      Success
    </VBtn>
    <VBtn
      variant="outlined"
      color="info"
    >
      Info
    </VBtn>
    <VBtn
      variant="outlined"
      color="warning"
    >
      Warning
    </VBtn>
    <VBtn
      variant="outlined"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="outlined">
      Primary
    </VBtn>
    <VBtn
      variant="outlined"
      color="secondary"
    >
      Secondary
    </VBtn>
    <VBtn
      variant="outlined"
      color="success"
    >
      Success
    </VBtn>
    <VBtn
      variant="outlined"
      color="info"
    >
      Info
    </VBtn>
    <VBtn
      variant="outlined"
      color="warning"
    >
      Warning
    </VBtn>
    <VBtn
      variant="outlined"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`},Mo={ts:`<template>
  <div class="demo-space-x">
    <VBtn
      icon="mdi-briefcase-download-outline"
      variant="text"
    />

    <VBtn
      icon="mdi-account-plus-outline"
      variant="text"
      color="secondary"
    />

    <VBtn
      icon="mdi-magnify"
      variant="text"
      color="success"
    />

    <VBtn
      icon="mdi-thumb-up-outline"
      variant="text"
      color="info"
    />

    <VBtn
      icon="mdi-star-outline"
      variant="text"
      color="warning"
    />

    <VBtn
      icon="mdi-heart-outline"
      variant="text"
      color="error"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn
      icon="mdi-briefcase-download-outline"
      variant="text"
    />

    <VBtn
      icon="mdi-account-plus-outline"
      variant="text"
      color="secondary"
    />

    <VBtn
      icon="mdi-magnify"
      variant="text"
      color="success"
    />

    <VBtn
      icon="mdi-thumb-up-outline"
      variant="text"
      color="info"
    />

    <VBtn
      icon="mdi-star-outline"
      variant="text"
      color="warning"
    />

    <VBtn
      icon="mdi-heart-outline"
      variant="text"
      color="error"
    />
  </div>
</template>
`},Xo={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="text">
      Primary
    </VBtn>

    <VBtn
      variant="text"
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      variant="text"
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      variant="text"
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      variant="text"
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      variant="text"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="text">
      Primary
    </VBtn>

    <VBtn
      variant="text"
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      variant="text"
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      variant="text"
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      variant="text"
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      variant="text"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`},Zo={ts:`<template>
  <div class="demo-space-x">
    <VBtn flat>
      primary
    </VBtn>

    <VBtn
      flat
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      flat
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      flat
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      flat
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      flat
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn flat>
      primary
    </VBtn>

    <VBtn
      flat
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      flat
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      flat
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      flat
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      flat
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`},tn={ts:`<template>
  <div class="demo-space-x">
    <VBtn>
      Normal Button
    </VBtn>
    <VBtn
      rounded="lg"
      color="secondary"
    >
      Rounded Button
    </VBtn>
    <VBtn
      :rounded="0"
      color="success"
    >
      Tile Button
    </VBtn>
    <VBtn
      rounded="pill"
      color="info"
    >
      Pill Button
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn>
      Normal Button
    </VBtn>
    <VBtn
      rounded="lg"
      color="secondary"
    >
      Rounded Button
    </VBtn>
    <VBtn
      :rounded="0"
      color="success"
    >
      Tile Button
    </VBtn>
    <VBtn
      rounded="pill"
      color="info"
    >
      Pill Button
    </VBtn>
  </div>
</template>
`},on={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="plain">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="plain"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="plain"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="plain"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="plain"
    >
      warning
    </VBtn>

    <VBtn
      color="error"
      variant="plain"
    >
      error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="plain">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="plain"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="plain"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="plain"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="plain"
    >
      warning
    </VBtn>

    <VBtn
      color="error"
      variant="plain"
    >
      error
    </VBtn>
  </div>
</template>
`},nn={ts:`<template>
  <div class="demo-space-x">
    <VBtn>
      Accept
      <VIcon
        end
        icon="mdi-checkbox-marked-circle-outline"
      />
    </VBtn>

    <VBtn color="secondary">
      <VIcon
        start
        icon="mdi-minus-circle-outline"
      />Cancel
    </VBtn>

    <VBtn color="success">
      Upload
      <VIcon
        end
        icon="mdi-cloud-upload-outline"
      />
    </VBtn>

    <VBtn color="info">
      <VIcon
        start
        icon="mdi-arrow-left"
      />
      Back
    </VBtn>

    <VBtn color="warning">
      <VIcon icon="mdi-wrench-outline" />
    </VBtn>

    <VBtn color="error">
      <VIcon icon="mdi-cancel" />
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn>
      Accept
      <VIcon
        end
        icon="mdi-checkbox-marked-circle-outline"
      />
    </VBtn>

    <VBtn color="secondary">
      <VIcon
        start
        icon="mdi-minus-circle-outline"
      />Cancel
    </VBtn>

    <VBtn color="success">
      Upload
      <VIcon
        end
        icon="mdi-cloud-upload-outline"
      />
    </VBtn>

    <VBtn color="info">
      <VIcon
        start
        icon="mdi-arrow-left"
      />
      Back
    </VBtn>

    <VBtn color="warning">
      <VIcon icon="mdi-wrench-outline" />
    </VBtn>

    <VBtn color="error">
      <VIcon icon="mdi-cancel" />
    </VBtn>
  </div>
</template>
`},en={ts:`<template>
  <div class="demo-space-x">
    <VBtn to="alert">
      String Literal
    </VBtn>

    <VBtn
      color="warning"
      :to="{ path: 'alert' }"
    >
      Object Path
    </VBtn>

    <VBtn
      color="success"
      :to="{ name: 'components-alert' }"
    >
      Named Router
    </VBtn>

    <VBtn
      color="secondary"
      :to="{ path: 'alert', query: { plan: 'private' } }"
    >
      With Query
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn to="alert">
      String Literal
    </VBtn>

    <VBtn
      color="warning"
      :to="{ path: 'alert' }"
    >
      Object Path
    </VBtn>

    <VBtn
      color="success"
      :to="{ name: 'components-alert' }"
    >
      Named Router
    </VBtn>

    <VBtn
      color="secondary"
      :to="{ path: 'alert', query: { plan: 'private' } }"
    >
      With Query
    </VBtn>
  </div>
</template>
`},an={ts:`<template>
  <div class="demo-space-x">
    <VBtn href="https://themeselection.com/">
      String Literal
    </VBtn>

    <VBtn
      href="https://themeselection.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Open New Tab
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn href="https://themeselection.com/">
      String Literal
    </VBtn>

    <VBtn
      href="https://themeselection.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Open New Tab
    </VBtn>
  </div>
</template>
`},cn={ts:`<template>
  <div class="demo-space-x">
    <VBtn color="primary">
      Primary
    </VBtn>
    <VBtn color="secondary">
      Secondary
    </VBtn>
    <VBtn color="success">
      Success
    </VBtn>
    <VBtn color="info">
      Info
    </VBtn>
    <VBtn color="warning">
      Warning
    </VBtn>
    <VBtn color="error">
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn color="primary">
      Primary
    </VBtn>
    <VBtn color="secondary">
      Secondary
    </VBtn>
    <VBtn color="success">
      Success
    </VBtn>
    <VBtn color="info">
      Info
    </VBtn>
    <VBtn color="warning">
      Warning
    </VBtn>
    <VBtn color="error">
      Error
    </VBtn>
  </div>
</template>
`},ln={ts:`<template>
  <div class="demo-space-x">
    <VBtn size="x-large">
      Extra large Button
    </VBtn>

    <VBtn
      color="success"
      size="large"
    >
      Large Button
    </VBtn>

    <VBtn color="info">
      Normal Button
    </VBtn>

    <VBtn
      size="small"
      color="warning"
    >
      Small Button
    </VBtn>

    <VBtn
      size="x-small"
      color="error"
    >
      Extra small Button
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn size="x-large">
      Extra large Button
    </VBtn>

    <VBtn
      color="success"
      size="large"
    >
      Large Button
    </VBtn>

    <VBtn color="info">
      Normal Button
    </VBtn>

    <VBtn
      size="small"
      color="warning"
    >
      Small Button
    </VBtn>

    <VBtn
      size="x-small"
      color="error"
    >
      Extra small Button
    </VBtn>
  </div>
</template>
`},rn={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VBtn block>
        Block Button
      </VBtn>
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VBtn
        variant="outlined"
        block
      >
        Block Button
      </VBtn>
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VBtn block>
        Block Button
      </VBtn>
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VBtn
        variant="outlined"
        block
      >
        Block Button
      </VBtn>
    </VCol>
  </VRow>
</template>
`},sn={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="tonal">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="tonal"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="tonal"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="tonal"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="tonal"
    >
      warning
    </VBtn>

    <VBtn
      color="error"
      variant="tonal"
    >
      error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="tonal">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="tonal"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="tonal"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="tonal"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="tonal"
    >
      warning
    </VBtn>

    <VBtn
      color="error"
      variant="tonal"
    >
      error
    </VBtn>
  </div>
</template>
`},dn={ts:`<script lang="ts" setup>
const loadings = ref<boolean[]>([])

const load = (i: number) => {
  loadings.value[i] = true
  setTimeout(() => {
    loadings.value[i] = false
  }, 3000)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn
      :loading="loadings[0]"
      :disabled="loadings[0]"
      color="primary"
      @click="load(0)"
    >
      Accept Terms
    </VBtn>

    <VBtn
      :loading="loadings[1]"
      :disabled="loadings[1]"
      color="secondary"
      @click="load(1)"
    >
      Upload
      <VIcon
        end
        icon="mdi-cloud-upload-outline"
      />
    </VBtn>

    <VBtn
      :loading="loadings[2]"
      :disabled="loadings[2]"
      color="success"
      @click="load(2)"
    >
      Loader slot
      <template #loader>
        <span>Loading...</span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[3]"
      :disabled="loadings[3]"
      color="info"
      @click="load(3)"
    >
      Icon Loader
      <template #loader>
        <span class="custom-loader">
          <VIcon icon="mdi-cached" />
        </span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[4]"
      :disabled="loadings[4]"
      color="warning"
      icon="mdi-cloud-upload-outline"
      @click="load(4)"
    />
  </div>
</template>

  <style lang="scss" scoped>
  .custom-loader {
    display: flex;
    animation: loader 1s infinite;
  }

  @keyframes loader {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
  </style>

`,js:`<script setup>
const loadings = ref([])
const load = i => {
  loadings.value[i] = true
  setTimeout(() => {
    loadings.value[i] = false
  }, 3000)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn
      :loading="loadings[0]"
      :disabled="loadings[0]"
      color="primary"
      @click="load(0)"
    >
      Accept Terms
    </VBtn>

    <VBtn
      :loading="loadings[1]"
      :disabled="loadings[1]"
      color="secondary"
      @click="load(1)"
    >
      Upload
      <VIcon
        end
        icon="mdi-cloud-upload-outline"
      />
    </VBtn>

    <VBtn
      :loading="loadings[2]"
      :disabled="loadings[2]"
      color="success"
      @click="load(2)"
    >
      Loader slot
      <template #loader>
        <span>Loading...</span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[3]"
      :disabled="loadings[3]"
      color="info"
      @click="load(3)"
    >
      Icon Loader
      <template #loader>
        <span class="custom-loader">
          <VIcon icon="mdi-cached" />
        </span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[4]"
      :disabled="loadings[4]"
      color="warning"
      icon="mdi-cloud-upload-outline"
      @click="load(4)"
    />
  </div>
</template>

  <style lang="scss" scoped>
  .custom-loader {
    display: flex;
    animation: loader 1s infinite;
  }

  @keyframes loader {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
  </style>

`},un=a("p",null,[n("The "),a("code",null,"color"),n(" prop is used to change the background color of the alert.")],-1),_n=a("p",null,[n("The "),a("code",null,"outlined"),n(" variant option is used to create outlined buttons.")],-1),mn=a("p",null,[n("The "),a("code",null,"flat"),n(" buttons still maintain their background color, but have no box shadow.")],-1),pn=a("p",null,[n("Use the "),a("code",null,"rounded"),n(" prop to control the border radius of buttons.")],-1),Bn=a("p",null,[n("Use "),a("code",null,"text"),n(" variant option to create text button. Text buttons have no box shadow and no background.")],-1),Vn=a("p",null,[n("Use "),a("code",null,"plain"),n(" variant option to a create a plain button. Plain buttons have a lower baseline opacity that reacts to hover and focus.")],-1),fn=a("p",null,[n("Use "),a("code",null,"tonal"),n(" variant option to a create a light background button.")],-1),vn=a("p",null,"Icons can be used inside of buttons to add emphasis to the action.",-1),gn=a("p",null,[n("Use "),a("code",null,"icon"),n(" prop to create button with icon only. This property makes the button rounded and applies the text prop styles.")],-1),hn=a("p",null,"Buttons can be given different sizing options to fit a multitude of scenarios.",-1),xn=a("p",null,[n("The "),a("code",null,"block"),n(" prop allows buttons to extend the full available width.")],-1),$n=a("p",null,[n("Using the "),a("code",null,"loading"),n(" prop, you can notify a user that there is processing taking place. The default behavior is to use a "),a("code",null,"v-progress-circular"),n(" component but this can be customized.")],-1),yn=a("p",null,[n("Use "),a("code",null,"to"),n(" prop to create button with router support.")],-1),bn=n(" Note: On click of the link button, You will get redirected to another page. "),wn=a("p",null,[n("Designates that the component is a link. This is automatic when using the "),a("code",null,"href"),n(" or "),a("code",null,"to"),n(" prop.")],-1),kn=n(" Note: On click of the link button, You will get redirected to another page. "),Sn=a("p",null,[n(" Wrap buttons with the "),a("code",null,"v-btn-toggle"),n(" component to create a group button. You can add a visual divider between buttons with the "),a("code",null,"divided"),n(" prop. ")],-1),Cn={__name:"button",setup(r){return(c,p)=>{const _=Ho,l=z,B=Wo,h=Io,x=vo,$=io,y=Zt,b=Yt,w=Ct,k=wt,S=xt,I=_t,T=rt,E=M,L=Y,P=N;return i(),V(g,null,{default:o(()=>[t(s,{cols:"12"},{default:o(()=>[t(l,{title:"Colors",code:cn},{default:o(()=>[un,t(_)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(l,{title:"Outlined",code:Ko},{default:o(()=>[_n,t(B)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(l,{title:"Flat",code:Zo},{default:o(()=>[mn,t(h)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(l,{title:"Rounded",code:tn},{default:o(()=>[pn,t(x)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(l,{title:"Text",code:Xo},{default:o(()=>[Bn,t($)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(l,{title:"Plain",code:on},{default:o(()=>[Vn,t(y)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(l,{title:"Tonal",code:sn},{default:o(()=>[fn,t(b)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(l,{title:"Icon",code:nn},{default:o(()=>[vn,t(w)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(l,{title:"Icon Only",code:Mo},{default:o(()=>[gn,t(k)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(l,{title:"Sizing",code:ln},{default:o(()=>[hn,t(S)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(l,{title:"Block",code:rn},{default:o(()=>[xn,t(I)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(l,{title:"Loaders",code:dn},{default:o(()=>[$n,t(T)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(l,{title:"Router",code:en},{default:o(()=>[yn,t(f,{color:"warning",variant:"tonal",class:"mb-4"},{default:o(()=>[bn]),_:1}),t(E)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(l,{title:"Link",code:an},{default:o(()=>[wn,t(f,{color:"warning",variant:"tonal",class:"mb-4"},{default:o(()=>[kn]),_:1}),t(L)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(l,{title:"Group",code:Jo},{default:o(()=>[Sn,t(P)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Cn as default};
