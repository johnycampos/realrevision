import{V as n}from"./VTextarea.e0a87b6c.js";import{$ as _,o as i,c as u,_ as m,w as o,a as e,V as a,e as V,a5 as t,f as l}from"./index.4bc17e10.js";import{_ as R}from"./AppCardCode.e951a0d9.js";import"./vue.runtime.esm-bundler.9a01116a.js";import"./VCard.2c35d430.js";const y={__name:"DemoTextareaValidation",setup(d){const s=_("Hello!"),p=[c=>c.length<=25||"Max 25 characters"];return(c,r)=>(i(),u(n,{modelValue:s.value,"onUpdate:modelValue":r[0]||(r[0]=w=>s.value=w),label:"Validation",rules:p,rows:"2"},null,8,["modelValue"]))}},k={__name:"DemoTextareaNoResize",setup(d){const s=_("Marshmallow tiramisu pie dessert gingerbread tart caramels marzipan oat cake. Muffin sesame snaps cupcake bonbon cookie tiramisu. Pudding biscuit gingerbread halvah lollipop jelly-o cookie.");return(p,c)=>(i(),u(n,{modelValue:s.value,"onUpdate:modelValue":c[0]||(c[0]=r=>s.value=r),label:"Text","no-resize":"",rows:"2"},null,8,["modelValue"]))}},$={};function z(d,s){return i(),u(V,null,{default:o(()=>[e(a,{cols:"12",sm:"6"},{default:o(()=>[e(n,{label:"One row","auto-grow":"",rows:"1","row-height":"15"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:o(()=>[e(n,{"auto-grow":"",label:"Two rows",rows:"2","row-height":"20"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:o(()=>[e(n,{label:"Three rows","auto-grow":"",rows:"3","row-height":"25"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:o(()=>[e(n,{"auto-grow":"",label:"Four rows",rows:"4","row-height":"30"})]),_:1})]),_:1})}const j=m($,[["render",z]]),H={};function U(d,s){return i(),u(V,null,{default:o(()=>[e(a,{cols:"12"},{default:o(()=>[e(n,{label:"prepend-icon",rows:"1","prepend-icon":"mdi-comment-outline"})]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(n,{"append-icon":"mdi-comment-outline",label:"append-icon",rows:"1"})]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(n,{"prepend-inner-icon":"mdi-comment-outline",label:"prepend-inner-icon",rows:"1"})]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(n,{"append-inner-icon":"mdi-comment-outline",label:"append-inner-icon",rows:"1"})]),_:1})]),_:1})}const A=m(H,[["render",U]]),M={__name:"DemoTextareaCounter",setup(d){const s=_("Hello!");return(p,c)=>(i(),u(n,{modelValue:s.value,"onUpdate:modelValue":c[0]||(c[0]=r=>s.value=r),counter:"",label:"Text"},null,8,["modelValue"]))}},B={__name:"DemoTextareaClearable",setup(d){const s=_("This is clearable text.");return(p,c)=>(i(),u(n,{modelValue:s.value,"onUpdate:modelValue":c[0]||(c[0]=r=>s.value=r),clearable:"","clear-icon":"mdi-close-circle-outline",label:"Text"},null,8,["modelValue"]))}},G={};function F(d,s){return i(),u(n,{autocomplete:"email",label:"Email"})}const N=m(G,[["render",F]]),O={};function P(d,s){return i(),u(V,null,{default:o(()=>[e(a,{cols:"12"},{default:o(()=>[e(n,{disabled:"",label:"Disabled",hint:"Hint text",rows:"2"})]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(n,{readonly:"",rows:"2",label:"Readonly",hint:"Hint text"})]),_:1})]),_:1})}const S=m(O,[["render",P]]),W={};function E(d,s){return i(),u(V,null,{default:o(()=>[e(a,{cols:"12",sm:"6"},{default:o(()=>[e(n,{label:"Default",rows:"2"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:o(()=>[e(n,{label:"Solo",rows:"2",variant:"solo"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:o(()=>[e(n,{label:"Filled",rows:"2",variant:"filled"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:o(()=>[e(n,{label:"Outlined",rows:"2",variant:"outlined"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:o(()=>[e(n,{label:"Underlined",rows:"2",variant:"underlined"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:o(()=>[e(n,{label:"Plain",rows:"2",variant:"plain"})]),_:1})]),_:1})}const I=m(W,[["render",E]]),Y={__name:"DemoTextareaAutoGrow",setup(d){const s=_("The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.");return(p,c)=>(i(),u(n,{modelValue:s.value,"onUpdate:modelValue":c[0]||(c[0]=r=>s.value=r),label:"Auto Grow","auto-grow":""},null,8,["modelValue"]))}},q={};function J(d,s){return i(),u(n,{label:"Default"})}const K=m(q,[["render",J]]),L={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Default"
        rows="2"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Solo"
        rows="2"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Filled"
        rows="2"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Outlined"
        rows="2"
        variant="outlined"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Underlined"
        rows="2"
        variant="underlined"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Plain"
        rows="2"
        variant="plain"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Default"
        rows="2"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Solo"
        rows="2"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Filled"
        rows="2"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Outlined"
        rows="2"
        variant="outlined"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Underlined"
        rows="2"
        variant="underlined"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Plain"
        rows="2"
        variant="plain"
      />
    </VCol>
  </VRow>
</template>
`},Q={ts:`<script setup lang="ts">
const textareaValue = ref('This is clearable text.')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    clearable
    clear-icon="mdi-close-circle-outline"
    label="Text"
  />
</template>
`,js:`<script setup>

const textareaValue = ref('This is clearable text.')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    clearable
    clear-icon="mdi-close-circle-outline"
    label="Text"
  />
</template>
`},X={ts:`<template>
  <VTextarea label="Default" />
</template>
`,js:`<template>
  <VTextarea label="Default" />
</template>
`},Z={ts:`<script setup lang="ts">
const textareaValue = ref('The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    label="Auto Grow"
    auto-grow
  />
</template>
`,js:`<script setup>

const textareaValue = ref('The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    label="Auto Grow"
    auto-grow
  />
</template>
`},ee={ts:`<template>
  <VRow>
    <VCol cols="12">
      <VTextarea
        disabled
        label="Disabled"
        hint="Hint text"
        rows="2"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        readonly
        rows="2"
        label="Readonly"
        hint="Hint text"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <VTextarea
        disabled
        label="Disabled"
        hint="Hint text"
        rows="2"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        readonly
        rows="2"
        label="Readonly"
        hint="Hint text"
      />
    </VCol>
  </VRow>
</template>
`},oe={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="One row"
        auto-grow
        rows="1"
        row-height="15"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        auto-grow
        label="Two rows"
        rows="2"
        row-height="20"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Three rows"
        auto-grow
        rows="3"
        row-height="25"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        auto-grow
        label="Four rows"
        rows="4"
        row-height="30"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="One row"
        auto-grow
        rows="1"
        row-height="15"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        auto-grow
        label="Two rows"
        rows="2"
        row-height="20"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Three rows"
        auto-grow
        rows="3"
        row-height="25"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        auto-grow
        label="Four rows"
        rows="4"
        row-height="30"
      />
    </VCol>
  </VRow>
</template>
`},te={ts:`<template>
  <VRow>
    <VCol cols="12">
      <VTextarea
        label="prepend-icon"
        rows="1"
        prepend-icon="mdi-comment-outline"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        append-icon="mdi-comment-outline"
        label="append-icon"
        rows="1"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        prepend-inner-icon="mdi-comment-outline"
        label="prepend-inner-icon"
        rows="1"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        append-inner-icon="mdi-comment-outline"
        label="append-inner-icon"
        rows="1"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <VTextarea
        label="prepend-icon"
        rows="1"
        prepend-icon="mdi-comment-outline"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        append-icon="mdi-comment-outline"
        label="append-icon"
        rows="1"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        prepend-inner-icon="mdi-comment-outline"
        label="prepend-inner-icon"
        rows="1"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        append-inner-icon="mdi-comment-outline"
        label="append-inner-icon"
        rows="1"
      />
    </VCol>
  </VRow>
</template>
`},le={ts:`<script lang="ts" setup>
const textareaValue = ref('Hello!')
const rules = [(v: string) => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    label="Validation"
    :rules="rules"
    rows="2"
  />
</template>
`,js:`<script setup>
const textareaValue = ref('Hello!')
const rules = [v => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    label="Validation"
    :rules="rules"
    rows="2"
  />
</template>
`},ae={ts:`<script lang="ts" setup>
const value = ref('Marshmallow tiramisu pie dessert gingerbread tart caramels marzipan oat cake. Muffin sesame snaps cupcake bonbon cookie tiramisu. Pudding biscuit gingerbread halvah lollipop jelly-o cookie.')
<\/script>

<template>
  <VTextarea
    v-model="value"
    label="Text"
    no-resize
    rows="2"
  />
</template>
`,js:`<script setup>

const value = ref('Marshmallow tiramisu pie dessert gingerbread tart caramels marzipan oat cake. Muffin sesame snaps cupcake bonbon cookie tiramisu. Pudding biscuit gingerbread halvah lollipop jelly-o cookie.')
<\/script>

<template>
  <VTextarea
    v-model="value"
    label="Text"
    no-resize
    rows="2"
  />
</template>
`},ne={ts:`<template>
  <VTextarea
    autocomplete="email"
    label="Email"
  />
</template>
`,js:`<template>
  <VTextarea
    autocomplete="email"
    label="Email"
  />
</template>
`},re={ts:`<script lang="ts" setup>
const textareaValue = ref('Hello!')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    counter
    label="Text"
  />
</template>
`,js:`<script setup>

const textareaValue = ref('Hello!')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    counter
    label="Text"
  />
</template>
`},se=t("p",null," v-textarea in its simplest form is a multi-line text-field, useful for larger amounts of text. ",-1),ce=t("p",null,[l("When using the "),t("code",null,"auto-grow"),l(" prop, textarea's will automatically increase in size when the contained text exceeds its size.")],-1),ie=t("p",null,[l("Use "),t("code",null,"filled"),l(", "),t("code",null,"plain"),l(", "),t("code",null,"outlined"),l(", "),t("code",null,"solo"),l(" and "),t("code",null,"underlined"),l(" option of "),t("code",null,"variant"),l(" prop to change the look of file input.")],-1),ue=t("p",null,[l("Use "),t("code",null,"disabled"),l(" and "),t("code",null,"readonly"),l(" prop to change the state of textarea.")],-1),de=t("p",null,[l(" The "),t("code",null,"autocomplete"),l(" prop gives you the option to enable the browser to predict user input. ")],-1),pe=t("p",null,[l("You can clear the text from a "),t("code",null,"v-textarea"),l(" by using the "),t("code",null,"clearable"),l(" prop, and customize the icon used with the "),t("code",null,"clearable-icon"),l(" prop.")],-1),me=t("p",null,[l(" The "),t("code",null,"counter"),l(" prop informs the user of a character limit for the "),t("code",null,"v-textarea"),l(". ")],-1),_e=t("p",null,[l("The "),t("code",null,"append-icon"),l(", "),t("code",null,"prepend-icon"),l(", "),t("code",null,"append-inner-icon"),l(" and "),t("code",null,"prepend-inner-icon"),l(" props help add context to v-textarea.")],-1),Ve=t("p",null,[l("The "),t("code",null,"rows"),l(" prop allows you to define how many rows the textarea has, when combined with the "),t("code",null,"row-height"),l(" prop you can further customize your rows by defining their height.")],-1),we=t("p",null,[t("code",null,"v-textarea"),l("'s have the option to remain the same size regardless of their content's size, using the "),t("code",null,"no-resize"),l(" prop.")],-1),xe=t("p",null,[l("Use "),t("code",null,"rules"),l(" prop to validate the textarea.")],-1),ge={__name:"textarea",setup(d){return(s,p)=>{const c=K,r=R,w=Y,x=I,h=S,f=N,b=B,T=M,C=A,g=j,v=k,D=y;return i(),u(V,{class:"match-height"},{default:o(()=>[e(a,{cols:"12",md:"6"},{default:o(()=>[e(r,{title:"Basic",code:X},{default:o(()=>[se,e(c)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(r,{title:"Auto Grow",code:Z},{default:o(()=>[ce,e(w)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12"},{default:o(()=>[e(r,{title:"Variant",code:L},{default:o(()=>[ie,e(x)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(r,{title:"States",code:ee},{default:o(()=>[ue,e(h)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(r,{title:"Browser autocomplete",code:ne},{default:o(()=>[de,e(f)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(r,{title:"Clearable",code:Q},{default:o(()=>[pe,e(b)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(r,{title:"Counter",code:re},{default:o(()=>[me,e(T)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(r,{title:"Icons",code:te},{default:o(()=>[_e,e(C)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(r,{title:"Rows",code:oe},{default:o(()=>[Ve,e(g)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(r,{title:"No resize",code:ae},{default:o(()=>[we,e(v)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:o(()=>[e(r,{title:"Validation",code:le},{default:o(()=>[xe,e(D)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{ge as default};
