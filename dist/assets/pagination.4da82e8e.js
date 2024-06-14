import{V as r}from"./VPagination.49eec407.js";import{$ as d,o as m,ar as f,a as e,c as _,_ as b,w as s,V as g,e as D,a5 as t,f as n}from"./index.4bc17e10.js";import{_ as U}from"./AppCardCode.e951a0d9.js";import"./vue.runtime.esm-bundler.9a01116a.js";import"./VCard.2c35d430.js";const z={class:"d-flex flex-column gap-6"},S={__name:"DemoPaginationSize",setup(p){const l=d(1),u=d(2),o=d(3);return(a,i)=>(m(),f("div",z,[e(r,{modelValue:l.value,"onUpdate:modelValue":i[0]||(i[0]=c=>l.value=c),length:7,size:"small"},null,8,["modelValue"]),e(r,{modelValue:u.value,"onUpdate:modelValue":i[1]||(i[1]=c=>u.value=c),length:7},null,8,["modelValue"]),e(r,{modelValue:o.value,"onUpdate:modelValue":i[2]||(i[2]=c=>o.value=c),length:7,size:"large"},null,8,["modelValue"])]))}},$={class:"d-flex flex-column gap-6"},C={__name:"DemoPaginationColor",setup(p){const l=d(1),u=d(2),o=d(3);return(a,i)=>(m(),f("div",$,[e(r,{modelValue:l.value,"onUpdate:modelValue":i[0]||(i[0]=c=>l.value=c),length:7,"active-color":"success"},null,8,["modelValue"]),e(r,{modelValue:u.value,"onUpdate:modelValue":i[1]||(i[1]=c=>u.value=c),length:7,"active-color":"error"},null,8,["modelValue"]),e(r,{modelValue:o.value,"onUpdate:modelValue":i[2]||(i[2]=c=>o.value=c),length:7,"active-color":"info"},null,8,["modelValue"])]))}},w={__name:"DemoPaginationTotalVisible",setup(p){const l=d(1);return(u,o)=>(m(),_(r,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=a=>l.value=a),length:15,"total-visible":7},null,8,["modelValue"]))}},j={__name:"DemoPaginationLength",setup(p){const l=d(1);return(u,o)=>(m(),_(r,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=a=>l.value=a),length:15},null,8,["modelValue"]))}},I={__name:"DemoPaginationIcons",setup(p){const l=d(1);return(u,o)=>(m(),_(r,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=a=>l.value=a),length:5,"prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right"},null,8,["modelValue"]))}},B={};function E(p,l){return m(),_(r,{length:5,disabled:""})}const T=b(B,[["render",E]]),y={__name:"DemoPaginationCircle",setup(p){const l=d(1);return(u,o)=>(m(),_(r,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=a=>l.value=a),length:5,rounded:"circle"},null,8,["modelValue"]))}},k={__name:"DemoPaginationBasic",setup(p){const l=d(1);return(u,o)=>(m(),_(r,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=a=>l.value=a),length:5},null,8,["modelValue"]))}},L={ts:`<script setup lang="ts">
const pageSuccess = ref(1)
const pageError = ref(2)
const pageInfo = ref(3)
<\/script>

<template>
  <div class="d-flex flex-column gap-6">
    <VPagination
      v-model="pageSuccess"
      :length="7"
      active-color="success"
    />
    <VPagination
      v-model="pageError"
      :length="7"
      active-color="error"
    />
    <VPagination
      v-model="pageInfo"
      :length="7"
      active-color="info"
    />
  </div>
</template>
`,js:`<script setup>
const pageSuccess = ref(1)
const pageError = ref(2)
const pageInfo = ref(3)
<\/script>

<template>
  <div class="d-flex flex-column gap-6">
    <VPagination
      v-model="pageSuccess"
      :length="7"
      active-color="success"
    />
    <VPagination
      v-model="pageError"
      :length="7"
      active-color="error"
    />
    <VPagination
      v-model="pageInfo"
      :length="7"
      active-color="info"
    />
  </div>
</template>
`},N={ts:`<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
    prev-icon="mdi-menu-left"
    next-icon="mdi-menu-right"
  />
</template>
`,js:`<script setup>

const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
    prev-icon="mdi-menu-left"
    next-icon="mdi-menu-right"
  />
</template>
`},A={ts:`<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
    rounded="circle"
  />
</template>
`,js:`<script setup>

const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
    rounded="circle"
  />
</template>
`},R={ts:`<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="15"
    :total-visible="7"
  />
</template>
`,js:`<script setup>

const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="15"
    :total-visible="7"
  />
</template>
`},Y={ts:`<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="15"
  />
</template>
`,js:`<script setup>

const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="15"
  />
</template>
`},q={ts:`<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
  />
</template>
`,js:`<script setup>

const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
  />
</template>
`},F={ts:`<template>
  <VPagination
    :length="5"
    disabled
  />
</template>
`,js:`<template>
  <VPagination
    :length="5"
    disabled
  />
</template>
`},G={ts:`<script setup lang="ts">
const xSmallPagination = ref(1)
const smallPagination = ref(2)
const largePagination = ref(3)
<\/script>

<template>
  <div class="d-flex flex-column gap-6">
    <VPagination
      v-model="xSmallPagination"
      :length="7"
      size="small"
    />
    <VPagination
      v-model="smallPagination"
      :length="7"
    />
    <VPagination
      v-model="largePagination"
      :length="7"
      size="large"
    />
  </div>
</template>
`,js:`<script setup>
const xSmallPagination = ref(1)
const smallPagination = ref(2)
const largePagination = ref(3)
<\/script>

<template>
  <div class="d-flex flex-column gap-6">
    <VPagination
      v-model="xSmallPagination"
      :length="7"
      size="small"
    />
    <VPagination
      v-model="smallPagination"
      :length="7"
    />
    <VPagination
      v-model="largePagination"
      :length="7"
      size="large"
    />
  </div>
</template>
`},H=t("p",null,[n("The "),t("code",null,"v-pagination"),n(" component is used to separate long sets of data.")],-1),J=t("p",null,[n("The "),t("code",null,"rounded"),n(" prop allows you to render pagination buttons with alternative styles.")],-1),K=t("p",null,[n("Pagination items can be manually deactivated using the "),t("code",null,"disabled"),n(" prop.")],-1),M=t("p",null,[n("Previous and next page icons can be customized with the "),t("code",null,"prev-icon"),n(" and "),t("code",null,"next-icon"),n(" props.")],-1),O=t("p",null,[n("Using the "),t("code",null,"length"),n(" prop you can set the length of "),t("code",null,"v-pagination"),n(", if the number of page buttons exceeds the parent container, it will truncate the list.")],-1),Q=t("p",null,[n("You can also manually set the maximum number of visible page buttons with the "),t("code",null,"total-visible"),n(" prop.")],-1),W=t("p",null,[n("Use "),t("code",null,"active-color"),n(" prop for create different color pagination.")],-1),X=t("p",null,[n("Use "),t("code",null,"size"),n(" prop to sets the height and width of the component. Default unit is px. Can also use the following predefined sizes: "),t("strong",null,"x-small"),n(", "),t("strong",null,"small"),n(", "),t("strong",null,"default"),n(", "),t("strong",null,"large"),n(", and "),t("strong",null,"x-large"),n(".")],-1),oe={__name:"pagination",setup(p){return(l,u)=>{const o=k,a=U,i=y,c=T,P=I,v=j,V=w,h=C,x=S;return m(),_(D,{class:"match-height"},{default:s(()=>[e(g,{cols:"12",md:"6"},{default:s(()=>[e(a,{title:"Basic",code:q},{default:s(()=>[H,e(o)]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:s(()=>[e(a,{title:"Circle",code:A},{default:s(()=>[J,e(i)]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:s(()=>[e(a,{title:"Disabled",code:F},{default:s(()=>[K,e(c)]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:s(()=>[e(a,{title:"Icons",code:N},{default:s(()=>[M,e(P)]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:s(()=>[e(a,{title:"Length",code:Y},{default:s(()=>[O,e(v)]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:s(()=>[e(a,{title:"Total visible",code:R},{default:s(()=>[Q,e(V)]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:s(()=>[e(a,{title:"Color",code:L},{default:s(()=>[W,e(h)]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:s(()=>[e(a,{title:"Size",code:G},{default:s(()=>[X,e(x)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{oe as default};
