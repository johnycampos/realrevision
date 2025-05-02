import{o as f,c as z,w as e,ar as v,au as R,a as t,af as a,f as o,a6 as H,at as $,$ as _,db as I,a9 as m,ab as c,a5 as s,aa as B,k as d,S as i,al as l,_ as k,V as u,e as D}from"./index.a1270b37.js";import{V as O,a as S}from"./VTabs.670ac95e.js";import{_ as W}from"./AppCardCode.748b95d1.js";import"./vue.runtime.esm-bundler.cc528c31.js";import"./VCard.64685768.js";const E={__name:"DemoBadgeTabs",setup(V){const r=[{badge:"3",content:"Item One"},{badge:"1",content:"Item Two"},{badge:"2",content:"Item Three"}];return(p,g)=>(f(),z(S,{grow:"","show-arrows":""},{default:e(()=>[(f(),v($,null,R(r,n=>t(O,{key:n.content,value:n.content},{default:e(()=>[t(a,{content:n.badge,"offset-x":-12,"offset-y":-4},{default:e(()=>[o(H(n.content),1)]),_:2},1032,["content"])]),_:2},1032,["value"])),64))]),_:1}))}},C={class:"demo-space-x"},N={__name:"DemoBadgeShowOnHover",setup(V){const r=_(),p=_(),g=_(),n=I(p),b=I(r),h=I(g);return(w,x)=>(f(),v("div",C,[t(a,{content:"3",transition:"slide-x-transition","model-value":c(n)},{default:e(()=>[t(m,{ref_key:"tRefTwitterBadge",ref:p,size:"25",icon:"mdi-twitter"},null,512)]),_:1},8,["model-value"]),t(a,{content:"5",transition:"scale-transition","model-value":c(b)},{default:e(()=>[t(m,{ref_key:"tRefInstagramBadge",ref:r,size:"25",icon:"mdi-instagram"},null,512)]),_:1},8,["model-value"]),t(a,{content:"1",transition:"slide-x-transition","model-value":c(h)},{default:e(()=>[t(m,{ref_key:"tRefWhatsappBadge",ref:g,size:"25",icon:"mdi-whatsapp"},null,512)]),_:1},8,["model-value"])]))}},j={class:"d-flex align-center"},Y={class:"demo-space-x"},P=o(" Send Message "),M=o(" Clear Notifications "),F={__name:"DemoBadgeDynamicNotifications",setup(V){const r=_();return(p,g)=>(f(),v("div",j,[t(a,{content:r.value,"model-value":!!r.value,color:"success",class:"me-5"},{default:e(()=>[t(m,{size:"40",icon:"mdi-vuetify"})]),_:1},8,["content","model-value"]),s("div",Y,[t(B,{onClick:g[0]||(g[0]=n=>r.value=(r.value||0)+1)},{default:e(()=>[P]),_:1}),t(B,{color:"error",onClick:g[1]||(g[1]=n=>r.value=0)},{default:e(()=>[M]),_:1})])]))}},L={class:"demo-space-x"},U={__name:"DemoBadgeAvatarStatus",setup(V){return(r,p)=>(f(),v("div",L,[t(a,{dot:"",bordered:"",color:"success",location:"bottom end","offset-x":5,"offset-y":1},{default:e(()=>[t(d,{size:"large"},{default:e(()=>[t(i,{src:c(l)},null,8,["src"])]),_:1})]),_:1}),t(a,{dot:"",bordered:"",color:"warning",location:"bottom end","offset-x":5,"offset-y":1},{default:e(()=>[t(d,{size:"large"},{default:e(()=>[t(i,{src:c(l)},null,8,["src"])]),_:1})]),_:1}),t(a,{dot:"",bordered:"",color:"error",location:"bottom end","offset-x":5,"offset-y":1},{default:e(()=>[t(d,{size:"large"},{default:e(()=>[t(i,{src:c(l)},null,8,["src"])]),_:1})]),_:1})]))}},q={class:"demo-space-x"},G={__name:"DemoBadgeIcon",setup(V){return(r,p)=>(f(),v("div",q,[t(a,null,{badge:e(()=>[t(m,{icon:"mdi-information-variant"})]),default:e(()=>[t(d,null,{default:e(()=>[t(i,{src:c(l)},null,8,["src"])]),_:1})]),_:1}),t(a,{icon:"mdi-lock-open-outline"},{default:e(()=>[t(d,null,{default:e(()=>[t(i,{src:c(l)},null,8,["src"])]),_:1})]),_:1})]))}},J={class:"demo-space-x"},K={__name:"DemoBadgePosition",setup(V){return(r,p)=>(f(),v("div",J,[t(a,{content:"1",location:"end top"},{default:e(()=>[t(d,{size:"48"},{default:e(()=>[t(i,{src:c(l)},null,8,["src"])]),_:1})]),_:1}),t(a,{location:"bottom start",content:"2"},{default:e(()=>[t(d,{size:"48"},{default:e(()=>[t(i,{src:c(l)},null,8,["src"])]),_:1})]),_:1}),t(a,{location:"bottom end",content:"3"},{default:e(()=>[t(d,{size:"48"},{default:e(()=>[t(i,{src:c(l)},null,8,["src"])]),_:1})]),_:1}),t(a,{location:"top start",content:"4"},{default:e(()=>[t(d,{size:"48"},{default:e(()=>[t(i,{src:c(l)},null,8,["src"])]),_:1})]),_:1})]))}},Q={},X={class:"demo-space-x"};function Z(V,r){return f(),v("div",X,[t(a,{dot:"",color:"primary"},{default:e(()=>[t(m,{size:"25",icon:"mdi-instagram"})]),_:1}),t(a,{dot:"",color:"secondary"},{default:e(()=>[t(m,{size:"25",icon:"mdi-instagram"})]),_:1}),t(a,{dot:"",color:"success"},{default:e(()=>[t(m,{size:"25",icon:"mdi-instagram"})]),_:1}),t(a,{dot:"",color:"info"},{default:e(()=>[t(m,{size:"25",icon:"mdi-instagram"})]),_:1}),t(a,{dot:"",color:"warning"},{default:e(()=>[t(m,{size:"25",icon:"mdi-instagram"})]),_:1}),t(a,{dot:"",color:"error"},{default:e(()=>[t(m,{size:"25",icon:"mdi-instagram"})]),_:1})])}const tt=k(Q,[["render",Z]]),et={class:"demo-space-x d-flex align-center flex-wrap"},at=o(" Default "),ot=o(" Border "),st={__name:"DemoBadgeStyle",setup(V){return(r,p)=>(f(),v("div",et,[t(a,{content:"1"},{default:e(()=>[t(B,{variant:"tonal"},{default:e(()=>[at]),_:1})]),_:1}),t(a,{content:"5",bordered:""},{default:e(()=>[t(B,{variant:"tonal"},{default:e(()=>[ot]),_:1})]),_:1}),t(a,{dot:"",location:"bottom end","offset-x":"3","offset-y":"3"},{default:e(()=>[t(d,{size:"48"},{default:e(()=>[t(i,{src:c(l)},null,8,["src"])]),_:1})]),_:1}),t(a,{inline:"",content:"5"},{default:e(()=>[t(d,{size:"48"},{default:e(()=>[t(i,{src:c(l)},null,8,["src"])]),_:1})]),_:1}),t(a,{rounded:"sm",content:"5"},{default:e(()=>[t(d,{size:"48"},{default:e(()=>[t(i,{src:c(l)},null,8,["src"])]),_:1})]),_:1})]))}},nt={ts:`<script lang="ts" setup>
const tRefInstagramBadge = ref()
const tRefTwitterBadge = ref()
const tRefWhatsappBadge = ref()

const showTwitterBadgeOnHover = useElementHover(tRefTwitterBadge)
const showInstagramBadgeOnHover = useElementHover(tRefInstagramBadge)
const showWhatsappBadgeOnHover = useElementHover(tRefWhatsappBadge)
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="3"
      transition="slide-x-transition"
      :model-value="showTwitterBadgeOnHover"
    >
      <VIcon
        ref="tRefTwitterBadge"
        size="25"
        icon="mdi-twitter"
      />
    </VBadge>

    <VBadge
      content="5"
      transition="scale-transition"
      :model-value="showInstagramBadgeOnHover"
    >
      <VIcon
        ref="tRefInstagramBadge"
        size="25"
        icon="mdi-instagram"
      />
    </VBadge>

    <VBadge
      content="1"
      transition="slide-x-transition"
      :model-value="showWhatsappBadgeOnHover"
    >
      <VIcon
        ref="tRefWhatsappBadge"
        size="25"
        icon="mdi-whatsapp"
      />
    </VBadge>
  </div>
</template>
`,js:`<script setup>
const tRefInstagramBadge = ref()
const tRefTwitterBadge = ref()
const tRefWhatsappBadge = ref()
const showTwitterBadgeOnHover = useElementHover(tRefTwitterBadge)
const showInstagramBadgeOnHover = useElementHover(tRefInstagramBadge)
const showWhatsappBadgeOnHover = useElementHover(tRefWhatsappBadge)
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="3"
      transition="slide-x-transition"
      :model-value="showTwitterBadgeOnHover"
    >
      <VIcon
        ref="tRefTwitterBadge"
        size="25"
        icon="mdi-twitter"
      />
    </VBadge>

    <VBadge
      content="5"
      transition="scale-transition"
      :model-value="showInstagramBadgeOnHover"
    >
      <VIcon
        ref="tRefInstagramBadge"
        size="25"
        icon="mdi-instagram"
      />
    </VBadge>

    <VBadge
      content="1"
      transition="slide-x-transition"
      :model-value="showWhatsappBadgeOnHover"
    >
      <VIcon
        ref="tRefWhatsappBadge"
        size="25"
        icon="mdi-whatsapp"
      />
    </VBadge>
  </div>
</template>
`},rt={ts:`<script lang="ts" setup>
const notifications = ref<number>()
<\/script>

<template>
  <div class="d-flex align-center">
    <VBadge
      :content="notifications"
      :model-value="!!notifications"
      color="success"
      class="me-5"
    >
      <VIcon
        size="40"
        icon="mdi-vuetify"
      />
    </VBadge>

    <div class="demo-space-x">
      <VBtn @click="notifications = (notifications || 0) + 1">
        Send Message
      </VBtn>

      <VBtn
        color="error"
        @click="notifications = 0"
      >
        Clear Notifications
      </VBtn>
    </div>
  </div>
</template>
`,js:`<script setup>

const notifications = ref()
<\/script>

<template>
  <div class="d-flex align-center">
    <VBadge
      :content="notifications"
      :model-value="!!notifications"
      color="success"
      class="me-5"
    >
      <VIcon
        size="40"
        icon="mdi-vuetify"
      />
    </VBadge>

    <div class="demo-space-x">
      <VBtn @click="notifications = (notifications || 0) + 1">
        Send Message
      </VBtn>

      <VBtn
        color="error"
        @click="notifications = 0"
      >
        Clear Notifications
      </VBtn>
    </div>
  </div>
</template>
`},ct={ts:`<script setup lang="ts">
import avatar1 from '@/assets/images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x d-flex align-center flex-wrap">
    <!-- \u{1F449} default -->
    <VBadge content="1">
      <VBtn variant="tonal">
        Default
      </VBtn>
    </VBadge>

    <!-- \u{1F449} bordered -->
    <VBadge
      content="5"
      bordered
    >
      <VBtn variant="tonal">
        Border
      </VBtn>
    </VBadge>

    <!-- \u{1F449} dot -->
    <VBadge
      dot
      location="bottom end"
      offset-x="3"
      offset-y="3"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- \u{1F449} inline -->
    <VBadge
      inline
      content="5"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- \u{1F449} Rounded -->
    <VBadge
      rounded="sm"
      content="5"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@/assets/images/avatars/avatar-1.png'

<\/script>

<template>
  <div class="demo-space-x d-flex align-center flex-wrap">
    <!-- \u{1F449} default -->
    <VBadge content="1">
      <VBtn variant="tonal">
        Default
      </VBtn>
    </VBadge>

    <!-- \u{1F449} bordered -->
    <VBadge
      content="5"
      bordered
    >
      <VBtn variant="tonal">
        Border
      </VBtn>
    </VBadge>

    <!-- \u{1F449} dot -->
    <VBadge
      dot
      location="bottom end"
      offset-x="3"
      offset-y="3"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- \u{1F449} inline -->
    <VBadge
      inline
      content="5"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- \u{1F449} Rounded -->
    <VBadge
      rounded="sm"
      content="5"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},dt={ts:`<script setup lang="ts">
import avatar1 from '@/assets/images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <!-- avatar -->
    <VBadge>
      <template #badge>
        <VIcon icon="mdi-information-variant" />
      </template>

      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- icon -->
    <VBadge icon="mdi-lock-open-outline">
      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@/assets/images/avatars/avatar-1.png'

<\/script>

<template>
  <div class="demo-space-x">
    <!-- avatar -->
    <VBadge>
      <template #badge>
        <VIcon icon="mdi-information-variant" />
      </template>

      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- icon -->
    <VBadge icon="mdi-lock-open-outline">
      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},it={ts:`<script setup lang="ts">
import avatar1 from '@/assets/images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      dot
      bordered
      color="success"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      dot
      bordered
      color="warning"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      dot
      bordered
      color="error"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@/assets/images/avatars/avatar-1.png'

<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      dot
      bordered
      color="success"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      dot
      bordered
      color="warning"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      dot
      bordered
      color="error"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},lt={ts:`<template>
  <div class="demo-space-x">
    <VBadge
      dot
      color="primary"
    >
      <VIcon
        size="25"
        icon="mdi-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="secondary"
    >
      <VIcon
        size="25"
        icon="mdi-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="success"
    >
      <VIcon
        size="25"
        icon="mdi-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="info"
    >
      <VIcon
        size="25"
        icon="mdi-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="warning"
    >
      <VIcon
        size="25"
        icon="mdi-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="error"
    >
      <VIcon
        size="25"
        icon="mdi-instagram"
      />
    </VBadge>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBadge
      dot
      color="primary"
    >
      <VIcon
        size="25"
        icon="mdi-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="secondary"
    >
      <VIcon
        size="25"
        icon="mdi-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="success"
    >
      <VIcon
        size="25"
        icon="mdi-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="info"
    >
      <VIcon
        size="25"
        icon="mdi-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="warning"
    >
      <VIcon
        size="25"
        icon="mdi-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="error"
    >
      <VIcon
        size="25"
        icon="mdi-instagram"
      />
    </VBadge>
  </div>
</template>
`},mt={ts:`<script setup lang="ts">
const tabs = [
  {
    badge: '3',
    content: 'Item One',
  },
  {
    badge: '1',
    content: 'Item Two',
  },
  {
    badge: '2',
    content: 'Item Three',
  },
]
<\/script>

<template>
  <VTabs
    grow
    show-arrows
  >
    <VTab
      v-for="tab in tabs"
      :key="tab.content"
      :value="tab.content"
    >
      <VBadge
        :content="tab.badge"
        :offset-x="-12"
        :offset-y="-4"
      >
        {{ tab.content }}
      </VBadge>
    </VTab>
  </VTabs>
</template>
`,js:`<script setup>
const tabs = [
  {
    badge: '3',
    content: 'Item One'
  },
  {
    badge: '1',
    content: 'Item Two'
  },
  {
    badge: '2',
    content: 'Item Three'
  }
]
<\/script>

<template>
  <VTabs
    grow
    show-arrows
  >
    <VTab
      v-for="tab in tabs"
      :key="tab.content"
      :value="tab.content"
    >
      <VBadge
        :content="tab.badge"
        :offset-x="-12"
        :offset-y="-4"
      >
        {{ tab.content }}
      </VBadge>
    </VTab>
  </VTabs>
</template>
`},gt={ts:`<script setup lang="ts">
import avatar1 from '@/assets/images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <!-- \u{1F449} Top End -->
    <VBadge
      content="1"
      location="end top"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- \u{1F449} Bottom Start -->
    <VBadge
      location="bottom start"
      content="2"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- \u{1F449} Bottom End -->
    <VBadge
      location="bottom end"
      content="3"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- \u{1F449} top Start -->
    <VBadge
      location="top start"
      content="4"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@/assets/images/avatars/avatar-1.png'

<\/script>

<template>
  <div class="demo-space-x">
    <!-- \u{1F449} Top End -->
    <VBadge
      content="1"
      location="end top"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- \u{1F449} Bottom Start -->
    <VBadge
      location="bottom start"
      content="2"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- \u{1F449} Bottom End -->
    <VBadge
      location="bottom end"
      content="3"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- \u{1F449} top Start -->
    <VBadge
      location="top start"
      content="4"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},ft=s("p",null,[o("You can use various props like "),s("code",null,"bordered"),o(", "),s("code",null,"dot"),o(", "),s("code",null,"inline"),o(", "),s("code",null,"rounded"),o(" etc. to style the badge.")],-1),pt=s("p",null,[o("Use "),s("code",null,"color"),o(" prop to create various background badges.")],-1),Vt=s("p",null,[o("You can use "),s("code",null,"location"),o(" prop to change the position of the badge. Possible values are "),s("code",null,"top-end"),o(", "),s("code",null,"bottom-end"),o(", "),s("code",null,"bottom-start"),o(", "),s("code",null,"top-start"),o(".")],-1),ut=s("p",null,[o("You can use "),s("code",null,"icon"),o(" prop or use "),s("code",null,"slot"),o(" to render the icon")],-1),vt=s("p",null,"You can use badge with avatar as status.",-1),_t=s("p",null,"You can incorporate badges with dynamic content to make things such as a notification system.",-1),Bt=s("p",null,"You can do many things with visibility control, for example, show badge on hover.",-1),bt=s("p",null,"Badges help convey information to the user in a variety of ways.",-1),At={__name:"badge",setup(V){return(r,p)=>{const g=st,n=W,b=tt,h=K,w=G,x=U,A=F,y=N,T=E;return f(),z(D,{class:"match-height"},{default:e(()=>[t(u,{cols:"12",md:"6"},{default:e(()=>[t(n,{title:"Style",code:ct},{default:e(()=>[ft,t(g)]),_:1},8,["code"])]),_:1}),t(u,{cols:"12",md:"6"},{default:e(()=>[t(n,{title:"Color",code:lt},{default:e(()=>[pt,t(b)]),_:1},8,["code"])]),_:1}),t(u,{cols:"12",md:"6"},{default:e(()=>[t(n,{title:"Position",code:gt},{default:e(()=>[Vt,t(h)]),_:1},8,["code"])]),_:1}),t(u,{cols:"12",md:"6"},{default:e(()=>[t(n,{title:"Icon",code:dt},{default:e(()=>[ut,t(w)]),_:1},8,["code"])]),_:1}),t(u,{cols:"12",md:"6"},{default:e(()=>[t(n,{title:"Avatar Status",code:it},{default:e(()=>[vt,t(x)]),_:1},8,["code"])]),_:1}),t(u,{cols:"12",md:"6"},{default:e(()=>[t(n,{title:"Dynamic notifications",code:rt},{default:e(()=>[_t,t(A)]),_:1},8,["code"])]),_:1}),t(u,{cols:"12",md:"6"},{default:e(()=>[t(n,{title:"Show on hover",code:nt},{default:e(()=>[Bt,t(y)]),_:1},8,["code"])]),_:1}),t(u,{cols:"12",md:"6"},{default:e(()=>[t(n,{title:"Tabs",code:mt},{default:e(()=>[bt,t(T)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{At as default};
