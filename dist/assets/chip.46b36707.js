import{$ as h,o as r,c as u,w as i,a as e,aP as P,aQ as z,cZ as t,dl as E,dm as W,aa as w,a9 as _,dn as L,dp as A,dq as M,dr as J,f as o,_ as b,ar as C,k as $,ab as S,al as T,aq as j,am as N,d9 as B,a5 as s,b as f,V as d,e as U}from"./index.4bc17e10.js";import{V as F}from"./VCombobox.f2fe9253.js";import{_ as Y}from"./AppCardCode.e951a0d9.js";import"./filter.4e418f21.js";import"./vue.runtime.esm-bundler.9a01116a.js";import"./VCard.2c35d430.js";const R=o(" VueJS "),q=o("VueJS"),O=o("The Progressive JavaScript Framework"),Q={__name:"DemoChipExpandable",setup(p){const l=h(!1);return(m,n)=>(r(),u(J,{modelValue:l.value,"onUpdate:modelValue":n[1]||(n[1]=a=>l.value=a),transition:"scale-transition"},{activator:i(({props:a})=>[e(t,P(z(a)),{default:i(()=>[R]),_:2},1040)]),default:i(()=>[e(M,null,{default:i(()=>[e(E,null,{append:i(()=>[e(W,{class:"ms-1"},{default:i(()=>[e(w,{icon:"",variant:"text",size:"x-small",color:"default",onClick:n[0]||(n[0]=a=>l.value=!1)},{default:i(()=>[e(_,{size:"20",icon:"mdi-close"})]),_:1})]),_:1})]),default:i(()=>[e(L,null,{default:i(()=>[q]),_:1}),e(A,null,{default:i(()=>[O]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},Z={__name:"DemoChipInSelects",setup(p){const l=h(["Programming","Playing video games","Sleeping"]),m=h(["Streaming","Eating","Programming","Playing video games","Sleeping"]);return(n,a)=>(r(),u(F,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=v=>l.value=v),chips:"",clearable:"",multiple:"","closable-chips":"","clear-icon":"mdi-close-circle-outline",items:m.value,label:"Your favorite hobbies","prepend-icon":"mdi-filter-variant"},null,8,["modelValue","items"]))}},G={},H={class:"demo-space-x"},K=o(" x-small chip "),X=o(" small chip "),ee=o("Default"),ie=o(" large chip "),oe=o(" x-large chip ");function te(p,l){return r(),C("div",H,[e(t,{size:"x-small"},{default:i(()=>[K]),_:1}),e(t,{size:"small"},{default:i(()=>[X]),_:1}),e(t,null,{default:i(()=>[ee]),_:1}),e(t,{size:"large"},{default:i(()=>[ie]),_:1}),e(t,{size:"x-large"},{default:i(()=>[oe]),_:1})])}const se=b(G,[["render",te]]),ae={class:"demo-space-x"},le=s("span",null,"John Doe",-1),re=s("span",null,"Darcy Nooser",-1),ce=s("span",null,"Felicia Risker",-1),ne=s("span",null,"Minnie Mostly",-1),pe={__name:"DemoChipWithAvatar",setup(p){return(l,m)=>(r(),C("div",ae,[e(t,{pill:""},{default:i(()=>[e($,{start:"",image:S(T)},null,8,["image"]),le]),_:1}),e(t,{pill:""},{default:i(()=>[e($,{start:"",image:S(j)},null,8,["image"]),re]),_:1}),e(t,null,{default:i(()=>[e($,{start:"",image:S(N)},null,8,["image"]),ce]),_:1}),e(t,null,{default:i(()=>[e($,{start:"",image:S(B)},null,8,["image"]),ne]),_:1})]))}},de={},he={class:"demo-space-x"},ue=o(" Account "),me=o(" Premium "),Ve=o(" 1 Year "),_e=o(" Notification "),Ce=o(" Message "),ve=o(" Warning "),fe=o(" Error ");function be(p,l){return r(),C("div",he,[e(t,null,{default:i(()=>[e(_,{start:"",size:"18",icon:"mdi-account-outline"}),ue]),_:1}),e(t,{color:"primary"},{default:i(()=>[e(_,{start:"",size:"18",icon:"mdi-star-outline"}),me]),_:1}),e(t,{color:"secondary"},{default:i(()=>[e(_,{start:"",size:"18",icon:"mdi-cake"}),Ve]),_:1}),e(t,{color:"success"},{default:i(()=>[e(_,{start:"",size:"18",icon:"mdi-bell-outline"}),_e]),_:1}),e(t,{color:"info"},{default:i(()=>[e(_,{start:"",size:"18",icon:"mdi-forum-outline"}),Ce]),_:1}),e(t,{color:"warning"},{default:i(()=>[e(_,{start:"",size:"18",icon:"mdi-alert-outline"}),ve]),_:1}),e(t,{color:"error"},{default:i(()=>[e(_,{start:"",size:"18",icon:"mdi-alert-circle-outline"}),fe]),_:1})])}const ge=b(de,[["render",be]]),ye={class:"demo-space-x"},$e=o(" Default "),Se=o(" Primary "),Ie=o(" Secondary "),xe=o(" Success "),De=o(" Info "),ke=o(" Warning "),Pe=o(" Error "),ze={__name:"DemoChipClosable",setup(p){const l=h(!0),m=h(!0),n=h(!0),a=h(!0),v=h(!0),g=h(!0),y=h(!0);return(I,c)=>(r(),C("div",ye,[l.value?(r(),u(t,{key:0,closable:"","onClick:close":c[0]||(c[0]=V=>l.value=!l.value)},{default:i(()=>[$e]),_:1})):f("",!0),m.value?(r(),u(t,{key:1,closable:"",color:"primary","onClick:close":c[1]||(c[1]=V=>m.value=!m.value)},{default:i(()=>[Se]),_:1})):f("",!0),n.value?(r(),u(t,{key:2,closable:"",color:"secondary","onClick:close":c[2]||(c[2]=V=>n.value=!n.value)},{default:i(()=>[Ie]),_:1})):f("",!0),a.value?(r(),u(t,{key:3,closable:"",color:"success","onClick:close":c[3]||(c[3]=V=>a.value=!a.value)},{default:i(()=>[xe]),_:1})):f("",!0),v.value?(r(),u(t,{key:4,closable:"",color:"info","onClick:close":c[4]||(c[4]=V=>v.value=!v.value)},{default:i(()=>[De]),_:1})):f("",!0),g.value?(r(),u(t,{key:5,closable:"",color:"warning","onClick:close":c[5]||(c[5]=V=>g.value=!g.value)},{default:i(()=>[ke]),_:1})):f("",!0),y.value?(r(),u(t,{key:6,closable:"",color:"error","onClick:close":c[6]||(c[6]=V=>y.value=!y.value)},{default:i(()=>[Pe]),_:1})):f("",!0)]))}},Ee={},We={class:"demo-space-x"},we=o(" Default "),Le=o(" Primary "),Ae=o(" Secondary "),Me=o(" Success "),Je=o(" Info "),Te=o(" Warning "),je=o(" Error ");function Ne(p,l){return r(),C("div",We,[e(t,{label:""},{default:i(()=>[we]),_:1}),e(t,{label:"",color:"primary"},{default:i(()=>[Le]),_:1}),e(t,{label:"",color:"secondary"},{default:i(()=>[Ae]),_:1}),e(t,{label:"",color:"success"},{default:i(()=>[Me]),_:1}),e(t,{label:"",color:"info"},{default:i(()=>[Je]),_:1}),e(t,{label:"",color:"warning"},{default:i(()=>[Te]),_:1}),e(t,{label:"",color:"error"},{default:i(()=>[je]),_:1})])}const Be=b(Ee,[["render",Ne]]),Ue={},Fe={class:"demo-space-x"},Ye=o(" Default "),Re=o(" Primary "),qe=o(" Secondary "),Oe=o(" Success "),Qe=o(" Info "),Ze=o(" Warning "),Ge=o(" Error ");function He(p,l){return r(),C("div",Fe,[e(t,{variant:"outlined"},{default:i(()=>[Ye]),_:1}),e(t,{color:"primary",variant:"outlined"},{default:i(()=>[Re]),_:1}),e(t,{color:"secondary",variant:"outlined"},{default:i(()=>[qe]),_:1}),e(t,{color:"success",variant:"outlined"},{default:i(()=>[Oe]),_:1}),e(t,{color:"info",variant:"outlined"},{default:i(()=>[Qe]),_:1}),e(t,{color:"warning",variant:"outlined"},{default:i(()=>[Ze]),_:1}),e(t,{color:"error",variant:"outlined"},{default:i(()=>[Ge]),_:1})])}const Ke=b(Ue,[["render",He]]),Xe={},ei={class:"demo-space-x"},ii=o(" Default "),oi=o(" Primary "),ti=o(" Secondary "),si=o(" Success "),ai=o(" Info "),li=o(" Warning "),ri=o(" Error ");function ci(p,l){return r(),C("div",ei,[e(t,{variant:"elevated"},{default:i(()=>[ii]),_:1}),e(t,{color:"primary",variant:"elevated"},{default:i(()=>[oi]),_:1}),e(t,{color:"secondary",variant:"elevated"},{default:i(()=>[ti]),_:1}),e(t,{color:"success",variant:"elevated"},{default:i(()=>[si]),_:1}),e(t,{color:"info",variant:"elevated"},{default:i(()=>[ai]),_:1}),e(t,{color:"warning",variant:"elevated"},{default:i(()=>[li]),_:1}),e(t,{color:"error",variant:"elevated"},{default:i(()=>[ri]),_:1})])}const ni=b(Xe,[["render",ci]]),pi={},di={class:"demo-space-x"},hi=o(" Default "),ui=o(" Primary "),mi=o(" Secondary "),Vi=o(" Success "),_i=o(" Info "),Ci=o(" Warning "),vi=o(" Error ");function fi(p,l){return r(),C("div",di,[e(t,null,{default:i(()=>[hi]),_:1}),e(t,{color:"primary"},{default:i(()=>[ui]),_:1}),e(t,{color:"secondary"},{default:i(()=>[mi]),_:1}),e(t,{color:"success"},{default:i(()=>[Vi]),_:1}),e(t,{color:"info"},{default:i(()=>[_i]),_:1}),e(t,{color:"warning"},{default:i(()=>[Ci]),_:1}),e(t,{color:"error"},{default:i(()=>[vi]),_:1})])}const bi=b(pi,[["render",fi]]),gi={ts:`<template>
  <div class="demo-space-x">
    <VChip>
      <VIcon
        start
        size="18"
        icon="mdi-account-outline"
      />
      Account
    </VChip>

    <VChip color="primary">
      <VIcon
        start
        size="18"
        icon="mdi-star-outline"
      />
      Premium
    </VChip>

    <VChip color="secondary">
      <VIcon
        start
        size="18"
        icon="mdi-cake"
      />
      1 Year
    </VChip>

    <VChip color="success">
      <VIcon
        start
        size="18"
        icon="mdi-bell-outline"
      />
      Notification
    </VChip>

    <VChip color="info">
      <VIcon
        start
        size="18"
        icon="mdi-forum-outline"
      />
      Message
    </VChip>

    <VChip color="warning">
      <VIcon
        start
        size="18"
        icon="mdi-alert-outline"
      />
      Warning
    </VChip>

    <VChip color="error">
      <VIcon
        start
        size="18"
        icon="mdi-alert-circle-outline"
      />
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip>
      <VIcon
        start
        size="18"
        icon="mdi-account-outline"
      />
      Account
    </VChip>

    <VChip color="primary">
      <VIcon
        start
        size="18"
        icon="mdi-star-outline"
      />
      Premium
    </VChip>

    <VChip color="secondary">
      <VIcon
        start
        size="18"
        icon="mdi-cake"
      />
      1 Year
    </VChip>

    <VChip color="success">
      <VIcon
        start
        size="18"
        icon="mdi-bell-outline"
      />
      Notification
    </VChip>

    <VChip color="info">
      <VIcon
        start
        size="18"
        icon="mdi-forum-outline"
      />
      Message
    </VChip>

    <VChip color="warning">
      <VIcon
        start
        size="18"
        icon="mdi-alert-outline"
      />
      Warning
    </VChip>

    <VChip color="error">
      <VIcon
        start
        size="18"
        icon="mdi-alert-circle-outline"
      />
      Error
    </VChip>
  </div>
</template>
`},yi={ts:`<template>
  <div class="demo-space-x">
    <VChip>
      Default
    </VChip>

    <VChip color="primary">
      Primary
    </VChip>

    <VChip color="secondary">
      Secondary
    </VChip>

    <VChip color="success">
      Success
    </VChip>

    <VChip color="info">
      Info
    </VChip>

    <VChip color="warning">
      Warning
    </VChip>

    <VChip color="error">
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip>
      Default
    </VChip>

    <VChip color="primary">
      Primary
    </VChip>

    <VChip color="secondary">
      Secondary
    </VChip>

    <VChip color="success">
      Success
    </VChip>

    <VChip color="info">
      Info
    </VChip>

    <VChip color="warning">
      Warning
    </VChip>

    <VChip color="error">
      Error
    </VChip>
  </div>
</template>
`},$i={ts:`<script lang="ts" setup>
const chips = ref(['Programming', 'Playing video games', 'Sleeping'])
const items = ref(['Streaming', 'Eating', 'Programming', 'Playing video games', 'Sleeping'])
<\/script>

<template>
  <VCombobox
    v-model="chips"
    chips
    clearable
    multiple
    closable-chips
    clear-icon="mdi-close-circle-outline"
    :items="items"
    label="Your favorite hobbies"
    prepend-icon="mdi-filter-variant"
  />
</template>
`,js:`<script setup>
const chips = ref([
  'Programming',
  'Playing video games',
  'Sleeping'
])
const items = ref([
  'Streaming',
  'Eating',
  'Programming',
  'Playing video games',
  'Sleeping'
])
<\/script>

<template>
  <VCombobox
    v-model="chips"
    chips
    clearable
    multiple
    closable-chips
    clear-icon="mdi-close-circle-outline"
    :items="items"
    label="Your favorite hobbies"
    prepend-icon="mdi-filter-variant"
  />
</template>
`},Si={ts:`<script lang="ts" setup>
const isDefaultChipVisible = ref(true)
const isPrimaryChipVisible = ref(true)
const isSecondaryChipVisible = ref(true)
const isSuccessChipVisible = ref(true)
const isInfoChipVisible = ref(true)
const isWarningChipVisible = ref(true)
const isErrorChipVisible = ref(true)
<\/script>

<template>
  <div class="demo-space-x">
    <VChip
      v-if="isDefaultChipVisible"
      closable
      @click:close="isDefaultChipVisible = !isDefaultChipVisible"
    >
      Default
    </VChip>

    <VChip
      v-if="isPrimaryChipVisible"
      closable
      color="primary"
      @click:close="isPrimaryChipVisible = !isPrimaryChipVisible"
    >
      Primary
    </VChip>

    <VChip
      v-if="isSecondaryChipVisible"
      closable
      color="secondary"
      @click:close="isSecondaryChipVisible = !isSecondaryChipVisible"
    >
      Secondary
    </VChip>

    <VChip
      v-if="isSuccessChipVisible"
      closable
      color="success"
      @click:close="isSuccessChipVisible = !isSuccessChipVisible"
    >
      Success
    </VChip>

    <VChip
      v-if="isInfoChipVisible"
      closable
      color="info"
      @click:close="isInfoChipVisible = !isInfoChipVisible"
    >
      Info
    </VChip>

    <VChip
      v-if="isWarningChipVisible"
      closable
      color="warning"
      @click:close="isWarningChipVisible = !isWarningChipVisible"
    >
      Warning
    </VChip>

    <VChip
      v-if="isErrorChipVisible"
      closable
      color="error"
      @click:close="isErrorChipVisible = !isErrorChipVisible"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<script setup>
const isDefaultChipVisible = ref(true)
const isPrimaryChipVisible = ref(true)
const isSecondaryChipVisible = ref(true)
const isSuccessChipVisible = ref(true)
const isInfoChipVisible = ref(true)
const isWarningChipVisible = ref(true)
const isErrorChipVisible = ref(true)
<\/script>

<template>
  <div class="demo-space-x">
    <VChip
      v-if="isDefaultChipVisible"
      closable
      @click:close="isDefaultChipVisible = !isDefaultChipVisible"
    >
      Default
    </VChip>

    <VChip
      v-if="isPrimaryChipVisible"
      closable
      color="primary"
      @click:close="isPrimaryChipVisible = !isPrimaryChipVisible"
    >
      Primary
    </VChip>

    <VChip
      v-if="isSecondaryChipVisible"
      closable
      color="secondary"
      @click:close="isSecondaryChipVisible = !isSecondaryChipVisible"
    >
      Secondary
    </VChip>

    <VChip
      v-if="isSuccessChipVisible"
      closable
      color="success"
      @click:close="isSuccessChipVisible = !isSuccessChipVisible"
    >
      Success
    </VChip>

    <VChip
      v-if="isInfoChipVisible"
      closable
      color="info"
      @click:close="isInfoChipVisible = !isInfoChipVisible"
    >
      Info
    </VChip>

    <VChip
      v-if="isWarningChipVisible"
      closable
      color="warning"
      @click:close="isWarningChipVisible = !isWarningChipVisible"
    >
      Warning
    </VChip>

    <VChip
      v-if="isErrorChipVisible"
      closable
      color="error"
      @click:close="isErrorChipVisible = !isErrorChipVisible"
    >
      Error
    </VChip>
  </div>
</template>
`},Ii={ts:`<template>
  <div class="demo-space-x">
    <VChip size="x-small">
      x-small chip
    </VChip>

    <VChip size="small">
      small chip
    </VChip>

    <VChip>Default</VChip>

    <VChip size="large">
      large chip
    </VChip>

    <VChip size="x-large">
      x-large chip
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip size="x-small">
      x-small chip
    </VChip>

    <VChip size="small">
      small chip
    </VChip>

    <VChip>Default</VChip>

    <VChip size="large">
      large chip
    </VChip>

    <VChip size="x-large">
      x-large chip
    </VChip>
  </div>
</template>
`},xi={ts:`<template>
  <div class="demo-space-x">
    <VChip label>
      Default
    </VChip>

    <VChip
      label
      color="primary"
    >
      Primary
    </VChip>

    <VChip
      label
      color="secondary"
    >
      Secondary
    </VChip>

    <VChip
      label
      color="success"
    >
      Success
    </VChip>

    <VChip
      label
      color="info"
    >
      Info
    </VChip>

    <VChip
      label
      color="warning"
    >
      Warning
    </VChip>

    <VChip
      label
      color="error"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip label>
      Default
    </VChip>

    <VChip
      label
      color="primary"
    >
      Primary
    </VChip>

    <VChip
      label
      color="secondary"
    >
      Secondary
    </VChip>

    <VChip
      label
      color="success"
    >
      Success
    </VChip>

    <VChip
      label
      color="info"
    >
      Info
    </VChip>

    <VChip
      label
      color="warning"
    >
      Warning
    </VChip>

    <VChip
      label
      color="error"
    >
      Error
    </VChip>
  </div>
</template>
`},Di={ts:`<template>
  <div class="demo-space-x">
    <VChip variant="outlined">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="outlined"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="outlined"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="outlined"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="outlined"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="outlined"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="outlined"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip variant="outlined">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="outlined"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="outlined"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="outlined"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="outlined"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="outlined"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="outlined"
    >
      Error
    </VChip>
  </div>
</template>
`},ki={ts:`<script lang="ts" setup>
const isMenuVisible = ref(false)
<\/script>

<template>
  <VMenu
    v-model="isMenuVisible"
    transition="scale-transition"
  >
    <!-- v-menu activator -->
    <template #activator="{ props }">
      <VChip v-bind="props">
        VueJS
      </VChip>
    </template>

    <!-- v-menu list -->
    <VList>
      <VListItem>
        <VListItemTitle>VueJS</VListItemTitle>
        <VListItemSubtitle>The Progressive JavaScript Framework</VListItemSubtitle>

        <template #append>
          <VListItemAction class="ms-1">
            <VBtn
              icon
              variant="text"
              size="x-small"
              color="default"
              @click="isMenuVisible = false"
            >
              <VIcon
                size="20"
                icon="mdi-close"
              />
            </VBtn>
          </VListItemAction>
        </template>
      </VListItem>
    </VList>
  </VMenu>
</template>
`,js:`<script setup>

const isMenuVisible = ref(false)
<\/script>

<template>
  <VMenu
    v-model="isMenuVisible"
    transition="scale-transition"
  >
    <!-- v-menu activator -->
    <template #activator="{ props }">
      <VChip v-bind="props">
        VueJS
      </VChip>
    </template>

    <!-- v-menu list -->
    <VList>
      <VListItem>
        <VListItemTitle>VueJS</VListItemTitle>
        <VListItemSubtitle>The Progressive JavaScript Framework</VListItemSubtitle>

        <template #append>
          <VListItemAction class="ms-1">
            <VBtn
              icon
              variant="text"
              size="x-small"
              color="default"
              @click="isMenuVisible = false"
            >
              <VIcon
                size="20"
                icon="mdi-close"
              />
            </VBtn>
          </VListItemAction>
        </template>
      </VListItem>
    </VList>
  </VMenu>
</template>
`},Pi={ts:`<script setup lang="ts">
import avatar1 from '@/assets/images/avatars/avatar-1.png'
import avatar2 from '@/assets/images/avatars/avatar-2.png'
import avatar3 from '@/assets/images/avatars/avatar-3.png'
import avatar4 from '@/assets/images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VChip pill>
      <VAvatar
        start
        :image="avatar1"
      />
      <span>John Doe</span>
    </VChip>

    <VChip pill>
      <VAvatar
        start
        :image="avatar2"
      />
      <span>Darcy Nooser</span>
    </VChip>

    <VChip>
      <VAvatar
        start
        :image="avatar3"
      />
      <span>Felicia Risker</span>
    </VChip>

    <VChip>
      <VAvatar
        start
        :image="avatar4"
      />
      <span>Minnie Mostly</span>
    </VChip>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@/assets/images/avatars/avatar-1.png'
import avatar2 from '@/assets/images/avatars/avatar-2.png'
import avatar3 from '@/assets/images/avatars/avatar-3.png'
import avatar4 from '@/assets/images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VChip pill>
      <VAvatar
        start
        :image="avatar1"
      />
      <span>John Doe</span>
    </VChip>

    <VChip pill>
      <VAvatar
        start
        :image="avatar2"
      />
      <span>Darcy Nooser</span>
    </VChip>

    <VChip>
      <VAvatar
        start
        :image="avatar3"
      />
      <span>Felicia Risker</span>
    </VChip>

    <VChip>
      <VAvatar
        start
        :image="avatar4"
      />
      <span>Minnie Mostly</span>
    </VChip>
  </div>
</template>
`},zi={ts:`<template>
  <div class="demo-space-x">
    <VChip variant="elevated">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="elevated"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="elevated"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="elevated"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="elevated"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="elevated"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="elevated"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip variant="elevated">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="elevated"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="elevated"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="elevated"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="elevated"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="elevated"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="elevated"
    >
      Error
    </VChip>
  </div>
</template>
`},Ei=s("p",null,[o("Use "),s("code",null,"color"),o(" prop to change the background color of chips.")],-1),Wi=s("p",null,[o("Use "),s("code",null,"elevated"),o(" variant option to create filled chips.")],-1),wi=s("p",null,[o("Use "),s("code",null,"outlined"),o(" variant option to create outline border chips.")],-1),Li=s("p",null,[o("Label chips use the "),s("code",null,"v-card"),o(" border-radius. Use "),s("code",null,"label"),o(" prop to create label chips.")],-1),Ai=s("p",null,[o("Closable chips can be controlled with a "),s("code",null,"v-model"),o(".")],-1),Mi=s("p",null,"Chips can use text or any icon available in the Material Icons font library.",-1),Ji=s("p",null,[o("Use "),s("code",null,"pill"),o(" prop to remove the "),s("code",null,"v-avatar"),o(" padding.")],-1),Ti=s("p",null,[o("The "),s("code",null,"v-chip"),o(" component can have various sizes from "),s("code",null,"x-small"),o(" to "),s("code",null,"x-large"),o(".")],-1),ji=s("p",null,[o("Selects can use "),s("code",null,"chips"),o(" to display the selected data. Try adding your own tags below.")],-1),Ni=s("p",null,[o("Chips can be combined with "),s("code",null,"v-menu"),o(" to enable a specific set of actions for a chip.")],-1),Oi={__name:"chip",setup(p){return(l,m)=>{const n=bi,a=Y,v=ni,g=Ke,y=Be,I=ze,c=ge,V=pe,x=se,D=Z,k=Q;return r(),u(U,{class:"match-height"},{default:i(()=>[e(d,{cols:"12",md:"6"},{default:i(()=>[e(a,{title:"Color",code:yi},{default:i(()=>[Ei,e(n)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:i(()=>[e(a,{title:"Elevated",code:zi},{default:i(()=>[Wi,e(v)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:i(()=>[e(a,{title:"Outlined",code:Di},{default:i(()=>[wi,e(g)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:i(()=>[e(a,{title:"Label",code:xi},{default:i(()=>[Li,e(y)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:i(()=>[e(a,{title:"Closable",code:Si},{default:i(()=>[Ai,e(I)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:i(()=>[e(a,{title:"With Icon",code:gi},{default:i(()=>[Mi,e(c)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:i(()=>[e(a,{title:"With Avatar",code:Pi},{default:i(()=>[Ji,e(V)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:i(()=>[e(a,{title:"Sizes",code:Ii},{default:i(()=>[Ti,e(x)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:i(()=>[e(a,{title:"In Selects",code:$i},{default:i(()=>[ji,e(D)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:i(()=>[e(a,{title:"Expandable",code:ki},{default:i(()=>[Ni,e(k)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Oi as default};
