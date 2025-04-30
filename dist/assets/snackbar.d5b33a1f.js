import{$ as V,o as f,ar as B,a,w as t,aa as c,f as e,a9 as p,at as I,c as g,V as _,e as T,a5 as b}from"./index.1a258bbd.js";import{V as k}from"./VSnackbar.90e9ef63.js";import{_ as y}from"./AppCardCode.6c8a8473.js";import"./vue.runtime.esm-bundler.86261bcd.js";import"./VCard.319647d9.js";const w={class:"demo-space-x"},C=e(" fade snackbar "),h=e(" I'm a fade transition snackbar. "),O=e(" Scale snackbar "),D=e(" I'm a scale transition snackbar. "),U=e(" scroll y reverse "),E=e(" I'm a scroll y reverse transition snackbar. "),F={__name:"DemoSnackbarTransition",setup(v){const o=V(!1),m=V(!1),n=V(!1);return(l,d)=>(f(),B("div",w,[a(c,{onClick:d[0]||(d[0]=S=>o.value=!0)},{default:t(()=>[C]),_:1}),a(k,{modelValue:o.value,"onUpdate:modelValue":d[1]||(d[1]=S=>o.value=S),transition:"fade-transition",location:"top start"},{default:t(()=>[h]),_:1},8,["modelValue"]),a(c,{onClick:d[2]||(d[2]=S=>m.value=!0)},{default:t(()=>[O]),_:1}),a(k,{modelValue:m.value,"onUpdate:modelValue":d[3]||(d[3]=S=>m.value=S),transition:"scale-transition",location:"bottom end"},{default:t(()=>[D]),_:1},8,["modelValue"]),a(c,{onClick:d[4]||(d[4]=S=>n.value=!0)},{default:t(()=>[U]),_:1}),a(k,{modelValue:n.value,"onUpdate:modelValue":d[5]||(d[5]=S=>n.value=S),transition:"scroll-y-reverse-transition",location:"top end"},{default:t(()=>[E]),_:1},8,["modelValue"])]))}},j={class:"demo-space-x"},R=e(" Default "),q=e(" Jelly chocolate bar candy canes apple pie. "),A=e(" tonal "),H=e(" Ice cream cake candy canes. "),M=e(" Text "),P=e(" Pie icing biscuit souffl\xE9 liquorice topping. "),L=e(" Outlined "),J=e(" Oat cake caramels sesame snaps candy. "),N=e(" Flat "),W=e(" Oat cake caramels sesame snaps candy. "),z={__name:"DemoSnackbarVariants",setup(v){const o=V(!1),m=V(!1),n=V(!1),l=V(!1),d=V(!1);return(S,s)=>(f(),B("div",j,[a(c,{onClick:s[0]||(s[0]=u=>o.value=!0)},{default:t(()=>[R]),_:1}),a(k,{modelValue:o.value,"onUpdate:modelValue":s[1]||(s[1]=u=>o.value=u),location:"top start"},{default:t(()=>[q]),_:1},8,["modelValue"]),a(c,{onClick:s[2]||(s[2]=u=>m.value=!0)},{default:t(()=>[A]),_:1}),a(k,{modelValue:m.value,"onUpdate:modelValue":s[3]||(s[3]=u=>m.value=u),location:"top end",variant:"tonal"},{default:t(()=>[H]),_:1},8,["modelValue"]),a(c,{onClick:s[4]||(s[4]=u=>n.value=!0)},{default:t(()=>[M]),_:1}),a(k,{modelValue:n.value,"onUpdate:modelValue":s[5]||(s[5]=u=>n.value=u),location:"end center",variant:"text"},{default:t(()=>[P]),_:1},8,["modelValue"]),a(c,{onClick:s[6]||(s[6]=u=>l.value=!0)},{default:t(()=>[L]),_:1}),a(k,{modelValue:l.value,"onUpdate:modelValue":s[7]||(s[7]=u=>l.value=u),location:"bottom end",variant:"outlined",color:"error"},{default:t(()=>[J]),_:1},8,["modelValue"]),a(c,{onClick:s[8]||(s[8]=u=>d.value=!0)},{default:t(()=>[N]),_:1}),a(k,{modelValue:d.value,"onUpdate:modelValue":s[9]||(s[9]=u=>d.value=u),location:"bottom start",variant:"flat",color:"error"},{default:t(()=>[W]),_:1},8,["modelValue"])]))}},G={class:"demo-space-x"},K=e(" I'm a top snackbar. "),Q=e(" I'm a top right snackbar. "),X=e(" I'm a center end snackbar. "),Y=e(" I'm a bottom end snackbar. "),Z=e(" I'm a bottom snackbar. "),aa=e(" I'm a bottom start snackbar. "),ta=e(" I'm a center start snackbar. "),ea=e(" I'm a top start snackbar. "),na=e(" I'm a center snackbar. "),ia={__name:"DemoSnackbarPosition",setup(v){const o=V(!1),m=V(!1),n=V(!1),l=V(!1),d=V(!1),S=V(!1),s=V(!1),u=V(!1),$=V(!1);return(x,i)=>(f(),B("div",G,[a(c,{icon:"",variant:"text",onClick:i[0]||(i[0]=r=>m.value=!0)},{default:t(()=>[a(p,{icon:"mdi-arrow-up"})]),_:1}),a(k,{modelValue:m.value,"onUpdate:modelValue":i[1]||(i[1]=r=>m.value=r),location:"top"},{default:t(()=>[K]),_:1},8,["modelValue"]),a(c,{icon:"",variant:"text",onClick:i[2]||(i[2]=r=>n.value=!0)},{default:t(()=>[a(p,{icon:"mdi-arrow-top-right"})]),_:1}),a(k,{modelValue:n.value,"onUpdate:modelValue":i[3]||(i[3]=r=>n.value=r),location:"top end"},{default:t(()=>[Q]),_:1},8,["modelValue"]),a(c,{icon:"",variant:"text",onClick:i[4]||(i[4]=r=>s.value=!0)},{default:t(()=>[a(p,{icon:"mdi-arrow-right"})]),_:1}),a(k,{modelValue:s.value,"onUpdate:modelValue":i[5]||(i[5]=r=>s.value=r),location:"end center"},{default:t(()=>[X]),_:1},8,["modelValue"]),a(c,{icon:"",variant:"text",onClick:i[6]||(i[6]=r=>l.value=!0)},{default:t(()=>[a(p,{icon:"mdi-arrow-bottom-right"})]),_:1}),a(k,{modelValue:l.value,"onUpdate:modelValue":i[7]||(i[7]=r=>l.value=r),location:"bottom end"},{default:t(()=>[Y]),_:1},8,["modelValue"]),a(c,{icon:"",variant:"text",onClick:i[8]||(i[8]=r=>d.value=!0)},{default:t(()=>[a(p,{icon:"mdi-arrow-down"})]),_:1}),a(k,{modelValue:d.value,"onUpdate:modelValue":i[9]||(i[9]=r=>d.value=r)},{default:t(()=>[Z]),_:1},8,["modelValue"]),a(c,{icon:"",variant:"text",onClick:i[10]||(i[10]=r=>S.value=!0)},{default:t(()=>[a(p,{icon:"mdi-arrow-bottom-left"})]),_:1}),a(k,{modelValue:S.value,"onUpdate:modelValue":i[11]||(i[11]=r=>S.value=r),location:"bottom start"},{default:t(()=>[aa]),_:1},8,["modelValue"]),a(c,{icon:"",variant:"text",onClick:i[12]||(i[12]=r=>u.value=!0)},{default:t(()=>[a(p,{icon:"mdi-arrow-left"})]),_:1}),a(k,{modelValue:u.value,"onUpdate:modelValue":i[13]||(i[13]=r=>u.value=r),location:"start center"},{default:t(()=>[ta]),_:1},8,["modelValue"]),a(c,{icon:"",variant:"text",onClick:i[14]||(i[14]=r=>o.value=!0)},{default:t(()=>[a(p,{icon:"mdi-arrow-top-left"})]),_:1}),a(k,{modelValue:o.value,"onUpdate:modelValue":i[15]||(i[15]=r=>o.value=r),location:"top start"},{default:t(()=>[ea]),_:1},8,["modelValue"]),a(c,{icon:"",variant:"text",onClick:i[16]||(i[16]=r=>$.value=!0)},{default:t(()=>[a(p,{icon:"mdi-arrow-collapse-all"})]),_:1}),a(k,{modelValue:$.value,"onUpdate:modelValue":i[17]||(i[17]=r=>$.value=r),location:"center"},{default:t(()=>[na]),_:1},8,["modelValue"])]))}},oa=e(" Open Snackbar "),la=e(" Sugar plum chocolate bar halvah sesame snaps apple pie donut croissant marshmallow. Sweet roll donut gummies sesame snaps icing bear claw tiramisu cotton candy. "),sa=e(" Undo "),ra=e(" Close "),ca={__name:"DemoSnackbarVertical",setup(v){const o=V(!1);return(m,n)=>(f(),B(I,null,[a(c,{onClick:n[0]||(n[0]=l=>o.value=!0)},{default:t(()=>[oa]),_:1}),a(k,{modelValue:o.value,"onUpdate:modelValue":n[3]||(n[3]=l=>o.value=l),vertical:""},{actions:t(()=>[a(c,{color:"success",onClick:n[1]||(n[1]=l=>o.value=!1)},{default:t(()=>[sa]),_:1}),a(c,{color:"error",onClick:n[2]||(n[2]=l=>o.value=!1)},{default:t(()=>[ra]),_:1})]),default:t(()=>[la]),_:1},8,["modelValue"])],64))}},ba=e(" Open Snackbar "),da=e(" My timeout is set to 2000. "),Va={__name:"DemoSnackbarTimeout",setup(v){const o=V(!1);return(m,n)=>(f(),B(I,null,[a(c,{onClick:n[0]||(n[0]=l=>o.value=!0)},{default:t(()=>[ba]),_:1}),a(k,{modelValue:o.value,"onUpdate:modelValue":n[1]||(n[1]=l=>o.value=l),timeout:2e3},{default:t(()=>[da]),_:1},8,["modelValue"])],64))}},ka=e(" Open Snackbar "),ua=e(" I am a multi-line snackbar. I can have more than one line. This is another line that is quite long. "),ma=e(" Close "),Sa={__name:"DemoSnackbarMultiLine",setup(v){const o=V(!1);return(m,n)=>(f(),B(I,null,[a(c,{onClick:n[0]||(n[0]=l=>o.value=!0)},{default:t(()=>[ka]),_:1}),a(k,{modelValue:o.value,"onUpdate:modelValue":n[2]||(n[2]=l=>o.value=l),"multi-line":""},{actions:t(()=>[a(c,{color:"error",onClick:n[1]||(n[1]=l=>o.value=!1)},{default:t(()=>[ma]),_:1})]),default:t(()=>[ua]),_:1},8,["modelValue"])],64))}},pa=e(" Open Snackbar "),fa=e(" Hello, I'm a snackbar with actions. "),va=e(" Close "),_a={__name:"DemoSnackbarWithAction",setup(v){const o=V(!1);return(m,n)=>(f(),B(I,null,[a(c,{onClick:n[0]||(n[0]=l=>o.value=!0)},{default:t(()=>[pa]),_:1}),a(k,{modelValue:o.value,"onUpdate:modelValue":n[2]||(n[2]=l=>o.value=l)},{actions:t(()=>[a(c,{color:"error",onClick:n[1]||(n[1]=l=>o.value=!1)},{default:t(()=>[va]),_:1})]),default:t(()=>[fa]),_:1},8,["modelValue"])],64))}},Ba=e(" Open Snackbar "),$a=e(" Hello, I'm a snackbar "),Ia={__name:"DemoSnackbarBasic",setup(v){const o=V(!1);return(m,n)=>(f(),B(I,null,[a(c,{onClick:n[0]||(n[0]=l=>o.value=!0)},{default:t(()=>[Ba]),_:1}),a(k,{modelValue:o.value,"onUpdate:modelValue":n[1]||(n[1]=l=>o.value=l)},{default:t(()=>[$a]),_:1},8,["modelValue"])],64))}},xa={ts:`<script lang="ts" setup>
const isSnackbarVisibility = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisibility = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar v-model="isSnackbarVisibility">
    Hello, I'm a snackbar with actions.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisibility = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`,js:`<script setup>

const isSnackbarVisibility = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisibility = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar v-model="isSnackbarVisibility">
    Hello, I'm a snackbar with actions.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisibility = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`},ga={ts:`<script lang="ts" setup>
const isDefaultSnackbarVisible = ref(false)
const isTonalSnackbarVisible = ref(false)
const isTextSnackbarVisible = ref(false)
const isOutlinedSnackbarVisible = ref(false)
const isFlatSnackbarVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- Default toggle btn -->
    <VBtn @click="isDefaultSnackbarVisible = true">
      Default
    </VBtn>

    <!-- Default snackbar -->
    <VSnackbar
      v-model="isDefaultSnackbarVisible"
      location="top start"
    >
      Jelly chocolate bar candy canes apple pie.
    </VSnackbar>

    <!-- tonal toggle btn -->
    <VBtn @click="isTonalSnackbarVisible = true">
      tonal
    </VBtn>

    <!-- tonal snackbar -->
    <VSnackbar
      v-model="isTonalSnackbarVisible"
      location="top end"
      variant="tonal"
    >
      Ice cream cake candy canes.
    </VSnackbar>

    <!-- Text toggle btn -->
    <VBtn @click="isTextSnackbarVisible = true">
      Text
    </VBtn>

    <!-- Text snackbar -->
    <VSnackbar
      v-model="isTextSnackbarVisible"
      location="end center"
      variant="text"
    >
      Pie icing biscuit souffl\xE9 liquorice topping.
    </VSnackbar>

    <!-- Outline toggle btn -->
    <VBtn @click="isOutlinedSnackbarVisible = true">
      Outlined
    </VBtn>

    <!-- Outline snackbar -->
    <VSnackbar
      v-model="isOutlinedSnackbarVisible"
      location="bottom end"
      variant="outlined"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>

    <!-- flat toggle btn -->
    <VBtn @click="isFlatSnackbarVisible = true">
      Flat
    </VBtn>

    <!-- flat snackbar -->
    <VSnackbar
      v-model="isFlatSnackbarVisible"
      location="bottom start"
      variant="flat"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>
  </div>
</template>
`,js:`<script setup>
const isDefaultSnackbarVisible = ref(false)
const isTonalSnackbarVisible = ref(false)
const isTextSnackbarVisible = ref(false)
const isOutlinedSnackbarVisible = ref(false)
const isFlatSnackbarVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- Default toggle btn -->
    <VBtn @click="isDefaultSnackbarVisible = true">
      Default
    </VBtn>

    <!-- Default snackbar -->
    <VSnackbar
      v-model="isDefaultSnackbarVisible"
      location="top start"
    >
      Jelly chocolate bar candy canes apple pie.
    </VSnackbar>

    <!-- tonal toggle btn -->
    <VBtn @click="isTonalSnackbarVisible = true">
      tonal
    </VBtn>

    <!-- tonal snackbar -->
    <VSnackbar
      v-model="isTonalSnackbarVisible"
      location="top end"
      variant="tonal"
    >
      Ice cream cake candy canes.
    </VSnackbar>

    <!-- Text toggle btn -->
    <VBtn @click="isTextSnackbarVisible = true">
      Text
    </VBtn>

    <!-- Text snackbar -->
    <VSnackbar
      v-model="isTextSnackbarVisible"
      location="end center"
      variant="text"
    >
      Pie icing biscuit souffl\xE9 liquorice topping.
    </VSnackbar>

    <!-- Outline toggle btn -->
    <VBtn @click="isOutlinedSnackbarVisible = true">
      Outlined
    </VBtn>

    <!-- Outline snackbar -->
    <VSnackbar
      v-model="isOutlinedSnackbarVisible"
      location="bottom end"
      variant="outlined"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>

    <!-- flat toggle btn -->
    <VBtn @click="isFlatSnackbarVisible = true">
      Flat
    </VBtn>

    <!-- flat snackbar -->
    <VSnackbar
      v-model="isFlatSnackbarVisible"
      location="bottom start"
      variant="flat"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>
  </div>
</template>
`},Ta={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- SnackBar -->
  <VSnackbar v-model="isSnackbarVisible">
    Hello, I'm a snackbar
  </VSnackbar>
</template>
`,js:`<script setup>

const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- SnackBar -->
  <VSnackbar v-model="isSnackbarVisible">
    Hello, I'm a snackbar
  </VSnackbar>
</template>
`},ya={ts:`<script lang="ts" setup>
const isSnackbarTopStartVisible = ref(false)
const isSnackbarTopVisible = ref(false)
const isSnackbarTopEndVisible = ref(false)
const isSnackbarBottomEndVisible = ref(false)
const isSnackbarBottomVisible = ref(false)
const isSnackbarBottomStartVisible = ref(false)
const isSnackbarEndVisible = ref(false)
const isSnackbarStartVisible = ref(false)
const isSnackbarCenteredVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- top  -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopVisible = true"
    >
      <VIcon icon="mdi-arrow-up" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopVisible"
      location="top"
    >
      I'm a top snackbar.
    </VSnackbar>

    <!-- top end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopEndVisible = true"
    >
      <VIcon icon="mdi-arrow-top-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopEndVisible"
      location="top end"
    >
      I'm a top right snackbar.
    </VSnackbar>

    <!-- center end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarEndVisible = true"
    >
      <VIcon icon="mdi-arrow-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarEndVisible"
      location="end center"
    >
      I'm a center end snackbar.
    </VSnackbar>

    <!-- bottom end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomEndVisible = true"
    >
      <VIcon icon="mdi-arrow-bottom-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomEndVisible"
      location="bottom end"
    >
      I'm a bottom end snackbar.
    </VSnackbar>

    <!-- bottom -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomVisible = true"
    >
      <VIcon icon="mdi-arrow-down" />
    </VBtn>

    <VSnackbar v-model="isSnackbarBottomVisible">
      I'm a bottom snackbar.
    </VSnackbar>

    <!-- bottom start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomStartVisible = true"
    >
      <VIcon icon="mdi-arrow-bottom-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomStartVisible"
      location="bottom start"
    >
      I'm a bottom start snackbar.
    </VSnackbar>

    <!-- center start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarStartVisible = true"
    >
      <VIcon icon="mdi-arrow-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarStartVisible"
      location="start center"
    >
      I'm a center start snackbar.
    </VSnackbar>

    <!-- top start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopStartVisible = true"
    >
      <VIcon icon="mdi-arrow-top-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopStartVisible"
      location="top start"
    >
      I'm a top start snackbar.
    </VSnackbar>

    <!-- center -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarCenteredVisible = true"
    >
      <VIcon icon="mdi-arrow-collapse-all" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarCenteredVisible"
      location="center"
    >
      I'm a center snackbar.
    </VSnackbar>
  </div>
</template>
`,js:`<script setup>
const isSnackbarTopStartVisible = ref(false)
const isSnackbarTopVisible = ref(false)
const isSnackbarTopEndVisible = ref(false)
const isSnackbarBottomEndVisible = ref(false)
const isSnackbarBottomVisible = ref(false)
const isSnackbarBottomStartVisible = ref(false)
const isSnackbarEndVisible = ref(false)
const isSnackbarStartVisible = ref(false)
const isSnackbarCenteredVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- top  -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopVisible = true"
    >
      <VIcon icon="mdi-arrow-up" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopVisible"
      location="top"
    >
      I'm a top snackbar.
    </VSnackbar>

    <!-- top end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopEndVisible = true"
    >
      <VIcon icon="mdi-arrow-top-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopEndVisible"
      location="top end"
    >
      I'm a top right snackbar.
    </VSnackbar>

    <!-- center end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarEndVisible = true"
    >
      <VIcon icon="mdi-arrow-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarEndVisible"
      location="end center"
    >
      I'm a center end snackbar.
    </VSnackbar>

    <!-- bottom end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomEndVisible = true"
    >
      <VIcon icon="mdi-arrow-bottom-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomEndVisible"
      location="bottom end"
    >
      I'm a bottom end snackbar.
    </VSnackbar>

    <!-- bottom -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomVisible = true"
    >
      <VIcon icon="mdi-arrow-down" />
    </VBtn>

    <VSnackbar v-model="isSnackbarBottomVisible">
      I'm a bottom snackbar.
    </VSnackbar>

    <!-- bottom start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomStartVisible = true"
    >
      <VIcon icon="mdi-arrow-bottom-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomStartVisible"
      location="bottom start"
    >
      I'm a bottom start snackbar.
    </VSnackbar>

    <!-- center start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarStartVisible = true"
    >
      <VIcon icon="mdi-arrow-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarStartVisible"
      location="start center"
    >
      I'm a center start snackbar.
    </VSnackbar>

    <!-- top start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopStartVisible = true"
    >
      <VIcon icon="mdi-arrow-top-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopStartVisible"
      location="top start"
    >
      I'm a top start snackbar.
    </VSnackbar>

    <!-- center -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarCenteredVisible = true"
    >
      <VIcon icon="mdi-arrow-collapse-all" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarCenteredVisible"
      location="center"
    >
      I'm a center snackbar.
    </VSnackbar>
  </div>
</template>
`},wa={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    :timeout="2000"
  >
    My timeout is set to 2000.
  </VSnackbar>
</template>
`,js:`<script setup>

const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    :timeout="2000"
  >
    My timeout is set to 2000.
  </VSnackbar>
</template>
`},Ca={ts:`<script lang="ts" setup>
const isSnackbarFadeVisible = ref(false)
const isSnackbarScaleVisible = ref(false)
const isSnackbarScrollReverseVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- fade -->
    <VBtn @click="isSnackbarFadeVisible = true">
      fade snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarFadeVisible"
      transition="fade-transition"
      location="top start"
    >
      I'm a fade transition snackbar.
    </VSnackbar>

    <!-- scale -->
    <VBtn @click="isSnackbarScaleVisible = true">
      Scale snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScaleVisible"
      transition="scale-transition"
      location="bottom end"
    >
      I'm a scale transition snackbar.
    </VSnackbar>

    <!-- scroll y reverse -->
    <VBtn @click="isSnackbarScrollReverseVisible = true">
      scroll y reverse
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScrollReverseVisible"
      transition="scroll-y-reverse-transition"
      location="top end"
    >
      I'm a scroll y reverse transition snackbar.
    </VSnackbar>
  </div>
</template>
`,js:`<script setup>
const isSnackbarFadeVisible = ref(false)
const isSnackbarScaleVisible = ref(false)
const isSnackbarScrollReverseVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- fade -->
    <VBtn @click="isSnackbarFadeVisible = true">
      fade snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarFadeVisible"
      transition="fade-transition"
      location="top start"
    >
      I'm a fade transition snackbar.
    </VSnackbar>

    <!-- scale -->
    <VBtn @click="isSnackbarScaleVisible = true">
      Scale snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScaleVisible"
      transition="scale-transition"
      location="bottom end"
    >
      I'm a scale transition snackbar.
    </VSnackbar>

    <!-- scroll y reverse -->
    <VBtn @click="isSnackbarScrollReverseVisible = true">
      scroll y reverse
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScrollReverseVisible"
      transition="scroll-y-reverse-transition"
      location="top end"
    >
      I'm a scroll y reverse transition snackbar.
    </VSnackbar>
  </div>
</template>
`},ha={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <VSnackbar
    v-model="isSnackbarVisible"
    vertical
  >
    Sugar plum chocolate bar halvah sesame snaps apple pie donut croissant marshmallow. Sweet roll donut gummies sesame snaps icing bear claw tiramisu cotton candy.

    <template #actions>
      <VBtn
        color="success"
        @click="isSnackbarVisible = false"
      >
        Undo
      </VBtn>

      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`,js:`<script setup>

const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <VSnackbar
    v-model="isSnackbarVisible"
    vertical
  >
    Sugar plum chocolate bar halvah sesame snaps apple pie donut croissant marshmallow. Sweet roll donut gummies sesame snaps icing bear claw tiramisu cotton candy.

    <template #actions>
      <VBtn
        color="success"
        @click="isSnackbarVisible = false"
      >
        Undo
      </VBtn>

      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`},Oa={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    multi-line
  >
    I am a multi-line snackbar. I can have more than one line. This is another line that is quite long.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`,js:`<script setup>

const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    multi-line
  >
    I am a multi-line snackbar. I can have more than one line. This is another line that is quite long.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`},Da=b("p",null,[e("The "),b("code",null,"v-snackbar"),e(" component is used to display a quick message to a user. Snackbars support positioning, removal delay, and callbacks.")],-1),Ua=b("p",null,[e("Use "),b("code",null,"actions"),e(" slot to add action button. A "),b("code",null,"v-snackbar"),e(" in its simplest form displays a temporary and closable notification to the user.")],-1),Ea=b("p",null,[e("The "),b("code",null,"multi-line"),e(" property extends the height of the "),b("code",null,"v-snackbar"),e(" to give you a little more room for content.")],-1),Fa=b("p",null,[e("The "),b("code",null,"timeout"),e(" property lets you customize the delay before the "),b("code",null,"v-snackbar"),e(" is hidden.")],-1),ja=b("p",null,[e("The "),b("code",null,"vertical"),e(" property allows you to stack the content of your "),b("code",null,"v-snackbar"),e(".")],-1),Ra=b("p",null,[e("Use "),b("code",null,"location"),e(" prop to change the position of snackbar.")],-1),qa=b("p",null,[e("Apply different styles to the snackbar using props such as "),b("code",null,"shaped"),e(", "),b("code",null,"rounded"),e(", "),b("code",null,"color"),e(", "),b("code",null,"text"),e(", "),b("code",null,"outlined"),e(", "),b("code",null,"tile"),e(" and more.")],-1),Aa=b("p",null,"Use transition prop to sets the component transition.",-1),Na={__name:"snackbar",setup(v){return(o,m)=>{const n=Ia,l=y,d=_a,S=Sa,s=Va,u=ca,$=ia,x=z,i=F;return f(),g(T,{class:"match-height"},{default:t(()=>[a(_,{cols:"12",md:"6"},{default:t(()=>[a(l,{title:"Basic",code:Ta},{default:t(()=>[Da,a(n)]),_:1},8,["code"])]),_:1}),a(_,{cols:"12",md:"6"},{default:t(()=>[a(l,{title:"With Action",code:xa},{default:t(()=>[Ua,a(d)]),_:1},8,["code"])]),_:1}),a(_,{cols:"12",md:"6"},{default:t(()=>[a(l,{title:"Multi Line",code:Oa},{default:t(()=>[Ea,a(S)]),_:1},8,["code"])]),_:1}),a(_,{cols:"12",md:"6"},{default:t(()=>[a(l,{title:"Timeout",code:wa},{default:t(()=>[Fa,a(s)]),_:1},8,["code"])]),_:1}),a(_,{cols:"12",md:"6"},{default:t(()=>[a(l,{title:"Vertical",code:ha},{default:t(()=>[ja,a(u)]),_:1},8,["code"])]),_:1}),a(_,{cols:"12",md:"6"},{default:t(()=>[a(l,{title:"Position",code:ya},{default:t(()=>[Ra,a($)]),_:1},8,["code"])]),_:1}),a(_,{cols:"12",md:"6"},{default:t(()=>[a(l,{title:"Variants",code:ga},{default:t(()=>[qa,a(x)]),_:1},8,["code"])]),_:1}),a(_,{cols:"12",md:"6"},{default:t(()=>[a(l,{title:"Transition",code:Ca},{default:t(()=>[Aa,a(i)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Na as default};
