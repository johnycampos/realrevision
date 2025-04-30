import{_ as m,o as n,ar as u,a as t,w as o,f as e,$ as _,at as h,a5 as r,a6 as j,aa as b,c as f,b as x,V as d,e as D}from"./index.1a258bbd.js";import{V as l}from"./VAlert.2e1c252b.js";import{V as P}from"./VSlider.cf205e12.js";import{_ as B}from"./AppCardCode.6c8a8473.js";import"./VSliderTrack.f7e90e70.js";import"./vue.runtime.esm-bundler.86261bcd.js";import"./VCard.319647d9.js";const G={},T={class:"demo-space-y"},q=e(" Macaroon I love tiramisu I love wafer apple pie jelly beans shortbread. "),z=e(" Cotton candy tart tiramisu lollipop gummi bears oat cake cupcake macaroon. "),N=e(" Ice cream candy I love wafer bonbon gingerbread candy canes tiramisu. ");function J(c,a){return n(),u("div",T,[t(l,{prominent:"",type:"info"},{text:o(()=>[q]),_:1}),t(l,{color:"success",icon:"mdi-school",prominent:""},{default:o(()=>[z]),_:1}),t(l,{icon:"mdi-shield-lock-outline",prominent:"",type:"warning"},{default:o(()=>[N]),_:1})])}const E=m(G,[["render",J]]),R=e(" I'm an alert with box shadow. "),U={__name:"DemoAlertElevation",setup(c){const a=_(5);return(p,i)=>(n(),u(h,null,[t(P,{modelValue:a.value,"onUpdate:modelValue":i[0]||(i[0]=s=>a.value=s),color:"primary",max:24,min:0,step:1,"thumb-label":""},null,8,["modelValue"]),t(l,{color:"primary",elevation:a.value},{default:o(()=>[R]),_:1},8,["elevation"])],64))}},H={},L={class:"demo-space-y"},O=e(" Maecenas nec odio et ante tincidunt tempus. Sed mollis, eros et ultrices tempus. "),F=e(" Nullam tincidunt adipiscing enim. In consectetuer turpis ut velit. "),Y=e(" Vestibulum ullamcorper mauris at ligula. Nulla porta dolor. "),K=e(" Praesent blandit laoreet nibh. Praesent nonummy mi in odio. Phasellus tempus. Mauris turpis nunc. "),Q=e(" Marzipan topping croissant cake sweet roll ice cream souffl\xE9 chocolate. Jelly beans chupa chups tootsie roll biscuit. "),W=e(" Marzipan topping croissant cake sweet roll ice cream souffl\xE9 chocolate. Jelly beans chupa chups tootsie roll biscuit. ");function X(c,a){return n(),u("div",L,[t(l,{variant:"tonal",color:"primary"},{default:o(()=>[O]),_:1}),t(l,{variant:"tonal",color:"secondary"},{default:o(()=>[F]),_:1}),t(l,{variant:"tonal",color:"success"},{default:o(()=>[Y]),_:1}),t(l,{variant:"tonal",color:"info"},{default:o(()=>[K]),_:1}),t(l,{variant:"tonal",color:"warning"},{default:o(()=>[Q]),_:1}),t(l,{variant:"tonal",color:"error"},{default:o(()=>[W]),_:1})])}const Z=m(H,[["render",X]]),ee={},te={class:"demo-space-y"},oe=e(" Duis vel nibh at velit scelerisque suscipit. Praesent blandit laoreet nibh. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc. "),re=e(" Praesent venenatis metus at tortor pulvinar varius. Aenean commodo ligula eget dolor. Praesent ac massa at ligula laoreet iaculis. "),le=e(" Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Suspendisse non nisl sit amet velit hendrerit rutrum. "),ae=e(" Marshmallow jelly beans toffee. Sweet roll lemon drops muffin biscuit. Gummies jujubes halvah dessert cream croissant. "),se=e(" Tootsie roll candy canes wafer icing sweet jelly macaroon. Caramels icing fruitcake chocolate cake cake donut. "),ne=e(" Jelly beans drag\xE9e jelly. Cotton candy danish chocolate cake. Carrot cake pastry jelly beans gummi bears. ");function ie(c,a){return n(),u("div",te,[t(l,{variant:"outlined",color:"primary"},{default:o(()=>[oe]),_:1}),t(l,{variant:"outlined",color:"secondary"},{default:o(()=>[re]),_:1}),t(l,{variant:"outlined",color:"success"},{default:o(()=>[le]),_:1}),t(l,{variant:"outlined",color:"info"},{default:o(()=>[ae]),_:1}),t(l,{variant:"outlined",color:"warning"},{default:o(()=>[se]),_:1}),t(l,{variant:"outlined",color:"error"},{default:o(()=>[ne]),_:1})])}const ce=m(ee,[["render",ie]]);const de={class:"alert-demo-v-model-wrapper"},ue=e(" non adipiscing dolor urna a orci. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur blandit mollis lacus. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. "),me={__name:"DemoAlertVModelSupport",setup(c){const a=_(!0);return(p,i)=>(n(),u(h,null,[r("div",de,[t(l,{modelValue:a.value,"onUpdate:modelValue":i[0]||(i[0]=s=>a.value=s),color:"warning",variant:"tonal"},{default:o(()=>[ue]),_:1},8,["modelValue"])]),t(b,{onClick:i[1]||(i[1]=s=>a.value=!a.value)},{default:o(()=>[e(j(a.value?"Hide Alert":"Show Alert"),1)]),_:1})],64))}},pe=e(" Pudding wafer I love chocolate bar wafer chupa chups wafer. Cake gummies pudding gummies cake. "),_e={class:"text-center"},he=e(" Reset "),fe={__name:"DemoAlertClosable",setup(c){const a=_(!0);return(p,i)=>(n(),u(h,null,[t(l,{modelValue:a.value,"onUpdate:modelValue":i[0]||(i[0]=s=>a.value=s),closable:"","close-label":"Close Alert",color:"primary"},{default:o(()=>[pe]),_:1},8,["modelValue"]),r("div",_e,[a.value?x("",!0):(n(),f(b,{key:0,onClick:i[1]||(i[1]=s=>a.value=!0)},{default:o(()=>[he]),_:1}))])],64))}},be={},ye={class:"demo-space-y"},ve=e(" I'm a alert with a "),ge=r("strong",null,"type",-1),Ae=e(" of info "),Ve=e(" I'm a alert with a "),we=r("strong",null,"type",-1),ke=e(" of success "),$e=e(" I'm a alert with a "),Ie=r("strong",null,"type",-1),Ce=e(" of warning "),Se=e(" I'm a alert with a "),Me=r("strong",null,"type",-1),je=e(" of error ");function xe(c,a){return n(),u("div",ye,[t(l,{type:"info"},{default:o(()=>[ve,ge,Ae]),_:1}),t(l,{type:"success"},{default:o(()=>[Ve,we,ke]),_:1}),t(l,{type:"warning"},{default:o(()=>[$e,Ie,Ce]),_:1}),t(l,{type:"error"},{default:o(()=>[Se,Me,je]),_:1})])}const De=m(be,[["render",xe]]),Pe={},Be={class:"demo-space-y"},Ge=e(" I'm a compact alert with a "),Te=r("strong",null,"color",-1),qe=e(" of primary. "),ze=e(" I'm a comfortable alert with the "),Ne=r("strong",null,"variant",-1),Je=e(" prop and a "),Ee=r("strong",null,"color",-1),Re=e(" of secondary. "),Ue=e(" I'm a default alert with the "),He=r("strong",null,"color",-1),Le=e(" of success. ");function Oe(c,a){return n(),u("div",Be,[t(l,{density:"compact",color:"primary",variant:"tonal"},{default:o(()=>[Ge,Te,qe]),_:1}),t(l,{density:"comfortable",color:"secondary",variant:"tonal"},{default:o(()=>[ze,Ne,Je,Ee,Re]),_:1}),t(l,{density:"default",color:"success",variant:"tonal"},{default:o(()=>[Ue,He,Le]),_:1})])}const Fe=m(Pe,[["render",Oe]]),Ye={},Ke={class:"demo-space-y"},Qe=e(" Cake sweet roll sesame snaps cheesecake halvah apple pie gingerbread cake. "),We=e(" Cookie brownie tootsie roll pudding biscuit chupa chups. Drag\xE9e gingerbread carrot. "),Xe=e(" Gingerbread jelly beans macaroon croissant souffl\xE9. Muffin halvah cake brownie cake. "),Ze=e(" Muffin I love wafer pudding caramels jelly beans fruitcake I love cotton candy. "),et=e(" Cake sweet roll sesame snaps cheesecake halvah apple pie gingerbread cake. "),tt=e(" Lemon drops tootsie roll liquorice marzipan lollipop I love tiramisu tootsie roll. ");function ot(c,a){return n(),u("div",Ke,[t(l,{border:"start","border-color":"primary"},{default:o(()=>[Qe]),_:1}),t(l,{border:"start","border-color":"secondary"},{default:o(()=>[We]),_:1}),t(l,{border:"start","border-color":"success"},{default:o(()=>[Xe]),_:1}),t(l,{border:"start","border-color":"info"},{default:o(()=>[Ze]),_:1}),t(l,{border:"start","border-color":"warning"},{default:o(()=>[et]),_:1}),t(l,{border:"start","border-color":"error"},{default:o(()=>[tt]),_:1})])}const rt=m(Ye,[["render",ot]]),lt={},at={class:"demo-space-y"},st=e(" Good Morning! Start your day with some alerts. "),nt=e(" Good Morning! Start your day with some alerts. "),it=e(" Good Morning! Start your day with some alerts. "),ct=e(" Good Morning! Start your day with some alerts. ");function dt(c,a){return n(),u("div",at,[t(l,{color:"primary",border:"top",variant:"tonal"},{default:o(()=>[st]),_:1}),t(l,{border:"end",color:"secondary",variant:"tonal"},{default:o(()=>[nt]),_:1}),t(l,{border:"bottom",color:"success",variant:"tonal"},{default:o(()=>[it]),_:1}),t(l,{border:"start",color:"info",variant:"tonal"},{default:o(()=>[ct]),_:1})])}const ut=m(lt,[["render",dt]]),mt={},pt={class:"demo-space-y"},_t=e(" Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. "),ht=e(" Phasellus blandit leo ut odio. Morbi mattis ullamcorper velit. "),ft=e(" Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. ");function bt(c,a){return n(),u("div",pt,[t(l,{color:"primary",icon:"mdi-firework"},{default:o(()=>[_t]),_:1}),t(l,{color:"secondary",icon:"mdi-material-design"},{default:o(()=>[ht]),_:1}),t(l,{color:"success",icon:"mdi-vuetify"},{default:o(()=>[ft]),_:1})])}const yt=m(mt,[["render",bt]]),vt={},gt={class:"demo-space-y"},At=e(" I'm an alert with primary background color. "),Vt=e(" I'm an alert with secondary background color. "),wt=e(" I'm an alert with success background color. "),kt=e(" I'm an alert with info background color. "),$t=e(" I'm an alert with warning background color. "),It=e(" I'm an alert with error background color. ");function Ct(c,a){return n(),u("div",gt,[t(l,{color:"primary"},{default:o(()=>[At]),_:1}),t(l,{color:"secondary"},{default:o(()=>[Vt]),_:1}),t(l,{color:"success"},{default:o(()=>[wt]),_:1}),t(l,{color:"info"},{default:o(()=>[kt]),_:1}),t(l,{color:"warning"},{default:o(()=>[$t]),_:1}),t(l,{color:"error"},{default:o(()=>[It]),_:1})])}const St=m(vt,[["render",Ct]]),Mt={},jt=e(" Good Morning! Start your day with some alerts. ");function xt(c,a){return n(),f(l,{color:"primary"},{default:o(()=>[jt]),_:1})}const Dt=m(Mt,[["render",xt]]),Pt={ts:`<template>
  <div class="demo-space-y">
    <VAlert
      color="primary"
      border="top"
      variant="tonal"
    >
      Good Morning! Start your day with some alerts.
    </VAlert>

    <VAlert
      border="end"
      color="secondary"
      variant="tonal"
    >
      Good Morning! Start your day with some alerts.
    </VAlert>

    <VAlert
      border="bottom"
      color="success"
      variant="tonal"
    >
      Good Morning! Start your day with some alerts.
    </VAlert>

    <VAlert
      border="start"
      color="info"
      variant="tonal"
    >
      Good Morning! Start your day with some alerts.
    </VAlert>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VAlert
      color="primary"
      border="top"
      variant="tonal"
    >
      Good Morning! Start your day with some alerts.
    </VAlert>

    <VAlert
      border="end"
      color="secondary"
      variant="tonal"
    >
      Good Morning! Start your day with some alerts.
    </VAlert>

    <VAlert
      border="bottom"
      color="success"
      variant="tonal"
    >
      Good Morning! Start your day with some alerts.
    </VAlert>

    <VAlert
      border="start"
      color="info"
      variant="tonal"
    >
      Good Morning! Start your day with some alerts.
    </VAlert>
  </div>
</template>
`},Bt={ts:`<template>
  <div class="demo-space-y">
    <VAlert
      border="start"
      border-color="primary"
    >
      Cake sweet roll sesame snaps cheesecake halvah apple pie gingerbread cake.
    </VAlert>
    <VAlert
      border="start"
      border-color="secondary"
    >
      Cookie brownie tootsie roll pudding biscuit chupa chups. Drag\xE9e gingerbread carrot.
    </VAlert>
    <VAlert
      border="start"
      border-color="success"
    >
      Gingerbread jelly beans macaroon croissant souffl\xE9. Muffin halvah cake brownie cake.
    </VAlert>
    <VAlert
      border="start"
      border-color="info"
    >
      Muffin I love wafer pudding caramels jelly beans fruitcake I love cotton candy.
    </VAlert>

    <VAlert
      border="start"
      border-color="warning"
    >
      Cake sweet roll sesame snaps cheesecake halvah apple pie gingerbread cake.
    </VAlert>

    <VAlert
      border="start"
      border-color="error"
    >
      Lemon drops tootsie roll liquorice marzipan lollipop I love tiramisu tootsie roll.
    </VAlert>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VAlert
      border="start"
      border-color="primary"
    >
      Cake sweet roll sesame snaps cheesecake halvah apple pie gingerbread cake.
    </VAlert>
    <VAlert
      border="start"
      border-color="secondary"
    >
      Cookie brownie tootsie roll pudding biscuit chupa chups. Drag\xE9e gingerbread carrot.
    </VAlert>
    <VAlert
      border="start"
      border-color="success"
    >
      Gingerbread jelly beans macaroon croissant souffl\xE9. Muffin halvah cake brownie cake.
    </VAlert>
    <VAlert
      border="start"
      border-color="info"
    >
      Muffin I love wafer pudding caramels jelly beans fruitcake I love cotton candy.
    </VAlert>

    <VAlert
      border="start"
      border-color="warning"
    >
      Cake sweet roll sesame snaps cheesecake halvah apple pie gingerbread cake.
    </VAlert>

    <VAlert
      border="start"
      border-color="error"
    >
      Lemon drops tootsie roll liquorice marzipan lollipop I love tiramisu tootsie roll.
    </VAlert>
  </div>
</template>
`},Gt={ts:`<template>
  <div class="demo-space-y">
    <VAlert
      color="primary"
      icon="mdi-firework"
    >
      Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
    </VAlert>

    <VAlert
      color="secondary"
      icon="mdi-material-design"
    >
      Phasellus blandit leo ut odio. Morbi mattis ullamcorper velit.
    </VAlert>

    <VAlert
      color="success"
      icon="mdi-vuetify"
    >
      Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
    </VAlert>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VAlert
      color="primary"
      icon="mdi-firework"
    >
      Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
    </VAlert>

    <VAlert
      color="secondary"
      icon="mdi-material-design"
    >
      Phasellus blandit leo ut odio. Morbi mattis ullamcorper velit.
    </VAlert>

    <VAlert
      color="success"
      icon="mdi-vuetify"
    >
      Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
    </VAlert>
  </div>
</template>
`},Tt={ts:`<template>
  <div class="demo-space-y">
    <VAlert
      variant="outlined"
      color="primary"
    >
      Duis vel nibh at velit scelerisque suscipit. Praesent blandit laoreet nibh. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.
    </VAlert>

    <VAlert
      variant="outlined"
      color="secondary"
    >
      Praesent venenatis metus at tortor pulvinar varius. Aenean commodo ligula eget dolor. Praesent ac massa at ligula laoreet iaculis.
    </VAlert>

    <VAlert
      variant="outlined"
      color="success"
    >
      Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Suspendisse non nisl sit amet velit hendrerit rutrum.
    </VAlert>

    <VAlert
      variant="outlined"
      color="info"
    >
      Marshmallow jelly beans toffee. Sweet roll lemon drops muffin biscuit. Gummies jujubes halvah dessert cream croissant.
    </VAlert>

    <VAlert
      variant="outlined"
      color="warning"
    >
      Tootsie roll candy canes wafer icing sweet jelly macaroon. Caramels icing fruitcake chocolate cake cake donut.
    </VAlert>

    <VAlert
      variant="outlined"
      color="error"
    >
      Jelly beans drag\xE9e jelly. Cotton candy danish chocolate cake. Carrot cake pastry jelly beans gummi bears.
    </VAlert>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VAlert
      variant="outlined"
      color="primary"
    >
      Duis vel nibh at velit scelerisque suscipit. Praesent blandit laoreet nibh. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.
    </VAlert>

    <VAlert
      variant="outlined"
      color="secondary"
    >
      Praesent venenatis metus at tortor pulvinar varius. Aenean commodo ligula eget dolor. Praesent ac massa at ligula laoreet iaculis.
    </VAlert>

    <VAlert
      variant="outlined"
      color="success"
    >
      Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Suspendisse non nisl sit amet velit hendrerit rutrum.
    </VAlert>

    <VAlert
      variant="outlined"
      color="info"
    >
      Marshmallow jelly beans toffee. Sweet roll lemon drops muffin biscuit. Gummies jujubes halvah dessert cream croissant.
    </VAlert>

    <VAlert
      variant="outlined"
      color="warning"
    >
      Tootsie roll candy canes wafer icing sweet jelly macaroon. Caramels icing fruitcake chocolate cake cake donut.
    </VAlert>

    <VAlert
      variant="outlined"
      color="error"
    >
      Jelly beans drag\xE9e jelly. Cotton candy danish chocolate cake. Carrot cake pastry jelly beans gummi bears.
    </VAlert>
  </div>
</template>
`},qt={ts:`<script lang="ts" setup>
const alertShadow = ref(5)
<\/script>

<template>
  <VSlider
    v-model="alertShadow"
    color="primary"
    :max="24"
    :min="0"
    :step="1"
    thumb-label
  />

  <VAlert
    color="primary"
    :elevation="alertShadow"
  >
    I'm an alert with box shadow.
  </VAlert>
</template>
`,js:`<script setup>

const alertShadow = ref(5)
<\/script>

<template>
  <VSlider
    v-model="alertShadow"
    color="primary"
    :max="24"
    :min="0"
    :step="1"
    thumb-label
  />

  <VAlert
    color="primary"
    :elevation="alertShadow"
  >
    I'm an alert with box shadow.
  </VAlert>
</template>
`},zt={ts:`<template>
  <div class="demo-space-y">
    <VAlert type="info">
      I'm a alert with a <strong>type</strong> of info
    </VAlert>

    <VAlert type="success">
      I'm a alert with a <strong>type</strong> of success
    </VAlert>

    <VAlert type="warning">
      I'm a alert with a <strong>type</strong> of warning
    </VAlert>

    <VAlert type="error">
      I'm a alert with a <strong>type</strong> of error
    </VAlert>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VAlert type="info">
      I'm a alert with a <strong>type</strong> of info
    </VAlert>

    <VAlert type="success">
      I'm a alert with a <strong>type</strong> of success
    </VAlert>

    <VAlert type="warning">
      I'm a alert with a <strong>type</strong> of warning
    </VAlert>

    <VAlert type="error">
      I'm a alert with a <strong>type</strong> of error
    </VAlert>
  </div>
</template>
`},Nt={ts:`<script lang="ts" setup>
const isAlertVisible = ref(true)
<\/script>

<template>
  <VAlert
    v-model="isAlertVisible"
    closable
    close-label="Close Alert"
    color="primary"
  >
    Pudding wafer I love chocolate bar wafer chupa chups wafer. Cake gummies pudding gummies cake.
  </VAlert>

  <!-- Button -->
  <div class="text-center">
    <VBtn
      v-if="!isAlertVisible"
      @click="isAlertVisible = true"
    >
      Reset
    </VBtn>
  </div>
</template>
`,js:`<script setup>

const isAlertVisible = ref(true)
<\/script>

<template>
  <VAlert
    v-model="isAlertVisible"
    closable
    close-label="Close Alert"
    color="primary"
  >
    Pudding wafer I love chocolate bar wafer chupa chups wafer. Cake gummies pudding gummies cake.
  </VAlert>

  <!-- Button -->
  <div class="text-center">
    <VBtn
      v-if="!isAlertVisible"
      @click="isAlertVisible = true"
    >
      Reset
    </VBtn>
  </div>
</template>
`},Jt={ts:`<script lang="ts" setup>
const isAlertVisible = ref(true)
<\/script>

<template>
  <div class="alert-demo-v-model-wrapper">
    <VAlert
      v-model="isAlertVisible"
      color="warning"
      variant="tonal"
    >
      non adipiscing dolor urna a orci. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur blandit mollis lacus. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.
    </VAlert>
  </div>

  <!-- button -->
  <VBtn @click="isAlertVisible = !isAlertVisible">
    {{ isAlertVisible ? "Hide Alert" : "Show Alert" }}
  </VBtn>
</template>

<style lang="scss">
.alert-demo-v-model-wrapper {
  margin-block-end: 1rem;
  min-block-size: 65px;
}
</style>
`,js:`<script setup>

const isAlertVisible = ref(true)
<\/script>

<template>
  <div class="alert-demo-v-model-wrapper">
    <VAlert
      v-model="isAlertVisible"
      color="warning"
      variant="tonal"
    >
      non adipiscing dolor urna a orci. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur blandit mollis lacus. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.
    </VAlert>
  </div>

  <!-- button -->
  <VBtn @click="isAlertVisible = !isAlertVisible">
    {{ isAlertVisible ? "Hide Alert" : "Show Alert" }}
  </VBtn>
</template>

<style lang="scss">
.alert-demo-v-model-wrapper {
  margin-block-end: 1rem;
  min-block-size: 65px;
}
</style>
`},Et={ts:`<template>
  <div class="demo-space-y">
    <VAlert color="primary">
      I'm an alert with primary background color.
    </VAlert>

    <VAlert color="secondary">
      I'm an alert with secondary background color.
    </VAlert>

    <VAlert color="success">
      I'm an alert with success background color.
    </VAlert>

    <VAlert color="info">
      I'm an alert with info background color.
    </VAlert>

    <VAlert color="warning">
      I'm an alert with warning background color.
    </VAlert>

    <VAlert color="error">
      I'm an alert with error background color.
    </VAlert>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VAlert color="primary">
      I'm an alert with primary background color.
    </VAlert>

    <VAlert color="secondary">
      I'm an alert with secondary background color.
    </VAlert>

    <VAlert color="success">
      I'm an alert with success background color.
    </VAlert>

    <VAlert color="info">
      I'm an alert with info background color.
    </VAlert>

    <VAlert color="warning">
      I'm an alert with warning background color.
    </VAlert>

    <VAlert color="error">
      I'm an alert with error background color.
    </VAlert>
  </div>
</template>
`},Rt={ts:`<template>
  <div class="demo-space-y">
    <VAlert
      density="compact"
      color="primary"
      variant="tonal"
    >
      I'm a compact alert with a <strong>color</strong> of primary.
    </VAlert>

    <VAlert
      density="comfortable"
      color="secondary"
      variant="tonal"
    >
      I'm a comfortable alert with the <strong>variant</strong> prop and a <strong>color</strong> of secondary.
    </VAlert>

    <VAlert
      density="default"
      color="success"
      variant="tonal"
    >
      I'm a default alert with the <strong>color</strong> of success.
    </VAlert>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VAlert
      density="compact"
      color="primary"
      variant="tonal"
    >
      I'm a compact alert with a <strong>color</strong> of primary.
    </VAlert>

    <VAlert
      density="comfortable"
      color="secondary"
      variant="tonal"
    >
      I'm a comfortable alert with the <strong>variant</strong> prop and a <strong>color</strong> of secondary.
    </VAlert>

    <VAlert
      density="default"
      color="success"
      variant="tonal"
    >
      I'm a default alert with the <strong>color</strong> of success.
    </VAlert>
  </div>
</template>
`},Ut={ts:`<template>
  <div class="demo-space-y">
    <VAlert
      variant="tonal"
      color="primary"
    >
      Maecenas nec odio et ante tincidunt tempus. Sed mollis, eros et ultrices tempus.
    </VAlert>

    <VAlert
      variant="tonal"
      color="secondary"
    >
      Nullam tincidunt adipiscing enim. In consectetuer turpis ut velit.
    </VAlert>

    <VAlert
      variant="tonal"
      color="success"
    >
      Vestibulum ullamcorper mauris at ligula. Nulla porta dolor.
    </VAlert>

    <VAlert
      variant="tonal"
      color="info"
    >
      Praesent blandit laoreet nibh. Praesent nonummy mi in odio. Phasellus tempus. Mauris turpis nunc.
    </VAlert>

    <VAlert
      variant="tonal"
      color="warning"
    >
      Marzipan topping croissant cake sweet roll ice cream souffl\xE9 chocolate. Jelly beans chupa chups tootsie roll biscuit.
    </VAlert>

    <VAlert
      variant="tonal"
      color="error"
    >
      Marzipan topping croissant cake sweet roll ice cream souffl\xE9 chocolate. Jelly beans chupa chups tootsie roll biscuit.
    </VAlert>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VAlert
      variant="tonal"
      color="primary"
    >
      Maecenas nec odio et ante tincidunt tempus. Sed mollis, eros et ultrices tempus.
    </VAlert>

    <VAlert
      variant="tonal"
      color="secondary"
    >
      Nullam tincidunt adipiscing enim. In consectetuer turpis ut velit.
    </VAlert>

    <VAlert
      variant="tonal"
      color="success"
    >
      Vestibulum ullamcorper mauris at ligula. Nulla porta dolor.
    </VAlert>

    <VAlert
      variant="tonal"
      color="info"
    >
      Praesent blandit laoreet nibh. Praesent nonummy mi in odio. Phasellus tempus. Mauris turpis nunc.
    </VAlert>

    <VAlert
      variant="tonal"
      color="warning"
    >
      Marzipan topping croissant cake sweet roll ice cream souffl\xE9 chocolate. Jelly beans chupa chups tootsie roll biscuit.
    </VAlert>

    <VAlert
      variant="tonal"
      color="error"
    >
      Marzipan topping croissant cake sweet roll ice cream souffl\xE9 chocolate. Jelly beans chupa chups tootsie roll biscuit.
    </VAlert>
  </div>
</template>
`},Ht={ts:`<template>
  <VAlert color="primary">
    Good Morning! Start your day with some alerts.
  </VAlert>
</template>
`,js:`<template>
  <VAlert color="primary">
    Good Morning! Start your day with some alerts.
  </VAlert>
</template>
`},Lt={ts:`<template>
  <div class="demo-space-y">
    <VAlert
      prominent
      type="info"
    >
      <template #text>
        Macaroon I love tiramisu I love wafer apple pie jelly beans shortbread.
      </template>
    </VAlert>

    <VAlert
      color="success"
      icon="mdi-school"
      prominent
    >
      Cotton candy tart tiramisu lollipop gummi bears oat cake cupcake macaroon.
    </VAlert>

    <VAlert
      icon="mdi-shield-lock-outline"
      prominent
      type="warning"
    >
      Ice cream candy I love wafer bonbon gingerbread candy canes tiramisu.
    </VAlert>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VAlert
      prominent
      type="info"
    >
      <template #text>
        Macaroon I love tiramisu I love wafer apple pie jelly beans shortbread.
      </template>
    </VAlert>

    <VAlert
      color="success"
      icon="mdi-school"
      prominent
    >
      Cotton candy tart tiramisu lollipop gummi bears oat cake cupcake macaroon.
    </VAlert>

    <VAlert
      icon="mdi-shield-lock-outline"
      prominent
      type="warning"
    >
      Ice cream candy I love wafer bonbon gingerbread candy canes tiramisu.
    </VAlert>
  </div>
</template>
`},Ot=r("p",null,[e("The "),r("code",null,"color"),e(" prop is used to change the background color of the alert.")],-1),Ft=r("p",null,[e("The "),r("code",null,"icon"),e(" prop allows you to add an icon to the beginning of the alert component. If a "),r("code",null,"type"),e(" is provided, this will override the default type icon. Additionally, setting the "),r("code",null,"icon"),e(" prop to false will remove the icon altogether.")],-1),Yt=r("p",null,[e("The "),r("code",null,"border"),e(" prop adds a simple border to one of the 4 sides of the alert. This can be combined with props like "),r("code",null,"color"),e(", "),r("code",null,"type"),e(" and "),r("code",null,"icon"),e(" to provide unique accents to the alert.")],-1),Kt=r("p",null,[e("The "),r("code",null,"colored-border"),e(" prop removes the alert background in order to accent the "),r("code",null,"border"),e(" prop. If a type is set, it will use the type's default color. If no "),r("code",null,"color"),e(" or "),r("code",null,"type"),e(" is set, the color will default to the inverted color of the applied theme (black for light and white/gray for dark).")],-1),Qt=r("p",null,[e("The "),r("code",null,"density"),e(" prop decreases the height of the alert based upon 1 of 3 levels of density. "),r("code",null,"default"),e(", "),r("code",null,"comfortable"),e(", and "),r("code",null,"compact"),e(".")],-1),Wt=r("p",null,[e("The "),r("code",null,"type"),e(" prop provides 4 default v-alert styles: "),r("code",null,"success"),e(", "),r("code",null,"info"),e(", "),r("code",null,"warning"),e(", and "),r("code",null,"error"),e(". Each of these styles provide a default icon and color.")],-1),Xt=r("p",null,[e("The "),r("code",null,"closable"),e(" prop adds a close button to the end of the alert component. Clicking this button will set its value to false and effectively hide the alert.")],-1),Zt=r("p",null,[e("Clicking this button will set its value to "),r("code",null,"false"),e(" and effectively hide the alert. You can restore the alert by binding "),r("code",null,"v-model"),e(" and setting it to true.")],-1),eo=r("p",null,[e("The "),r("code",null,'variant="outlined"'),e(" prop inverts the style of an alert, inheriting the currently applied "),r("code",null,"color"),e(", applying it to the text and border, and making its background transparent.")],-1),to=r("p",null,[e("The "),r("code",null,"variant"),e(" prop provides an easy way to change the overall style of your alerts. The "),r("code",null,'variant="tonal"'),e(" prop is a simple alert variant that applies a reduced opacity background of the provided color.")],-1),oo=r("p",null,[e("Use "),r("code",null,"elevation"),e(" prop to set a box-shadow to alert.")],-1),ro=r("p",null,[e("The "),r("code",null,"prominent"),e(" prop provides a more pronounced alert by increasing the size of the icon.")],-1),mo={__name:"alert",setup(c){return(a,p)=>{const i=Dt,s=B,y=St,v=yt,g=ut,A=rt,V=Fe,w=De,k=fe,$=me,I=ce,C=Z,S=U,M=E;return n(),f(D,null,{default:o(()=>[t(d,{cols:"12"},{default:o(()=>[t(s,{title:"Basic",code:Ht},{default:o(()=>[t(i)]),_:1},8,["code"])]),_:1}),t(d,{cols:"12"},{default:o(()=>[t(s,{title:"Colors",code:Et},{default:o(()=>[Ot,t(y)]),_:1},8,["code"])]),_:1}),t(d,{cols:"12"},{default:o(()=>[t(s,{title:"Icons",code:Gt},{default:o(()=>[Ft,t(v)]),_:1},8,["code"])]),_:1}),t(d,{cols:"12"},{default:o(()=>[t(s,{title:"Border",code:Pt},{default:o(()=>[Yt,t(g)]),_:1},8,["code"])]),_:1}),t(d,{cols:"12"},{default:o(()=>[t(s,{title:"Colored Border",code:Bt},{default:o(()=>[Kt,t(A)]),_:1},8,["code"])]),_:1}),t(d,{cols:"12"},{default:o(()=>[t(s,{title:"Density",code:Rt},{default:o(()=>[Qt,t(V)]),_:1},8,["code"])]),_:1}),t(d,{cols:"12"},{default:o(()=>[t(s,{title:"Type",code:zt},{default:o(()=>[Wt,t(w)]),_:1},8,["code"])]),_:1}),t(d,{cols:"12"},{default:o(()=>[t(s,{title:"Closable",code:Nt},{default:o(()=>[Xt,t(k)]),_:1},8,["code"])]),_:1}),t(d,{cols:"12"},{default:o(()=>[t(s,{title:"v-model support",code:Jt},{default:o(()=>[Zt,t($)]),_:1},8,["code"])]),_:1}),t(d,{cols:"12"},{default:o(()=>[t(s,{title:"Outlined",code:Tt},{default:o(()=>[eo,t(I)]),_:1},8,["code"])]),_:1}),t(d,{cols:"12"},{default:o(()=>[t(s,{title:"Tonal",code:Ut},{default:o(()=>[to,t(C)]),_:1},8,["code"])]),_:1}),t(d,{cols:"12"},{default:o(()=>[t(s,{title:"Elevation",code:qt},{default:o(()=>[oo,t(S)]),_:1},8,["code"])]),_:1}),t(d,{cols:"12"},{default:o(()=>[t(s,{title:"Prominent",code:Lt},{default:o(()=>[ro,t(M)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{mo as default};
