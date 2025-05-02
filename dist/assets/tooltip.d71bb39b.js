import{o as s,ar as _,a as t,w as o,aa as e,S as x,ab as y,d9 as g,k as S,a9 as V,aF as m,f as n,a5 as a,_ as u,$ as H,c as T,V as d,e as b}from"./index.a1270b37.js";import{V as i}from"./VTooltip.85e07579.js";import{_ as D}from"./AppCardCode.748b95d1.js";import"./vue.runtime.esm-bundler.cc528c31.js";import"./VCard.64685768.js";const k={class:"demo-space-x"},E=n(" Button "),I=n(" Tooltip "),A=n(" Tooltip on Avatar "),w=a("span",null,"Tooltip on Icon",-1),F={__name:"DemoTooltipTooltipOnVariousElements",setup(c){return(l,v)=>(s(),_("div",k,[t(e,null,{default:o(()=>[E,t(i,{location:"top",activator:"parent"},{default:o(()=>[I]),_:1})]),_:1}),t(S,{color:"info"},{default:o(()=>[t(x,{src:y(g)},null,8,["src"]),t(i,{location:"top",activator:"parent"},{default:o(()=>[A]),_:1})]),_:1}),t(i,{location:"top"},{activator:o(({props:r})=>[t(V,m(r,{size:"30",icon:"mdi-account-outline"}),null,16)]),default:o(()=>[w]),_:1})]))}},j={},X={class:"demo-space-x"},C=n(" scale transition "),M=a("span",null,"Scale Transition",-1),P=n(" scroll X transition "),z=a("span",null,"Scroll X Transition",-1),N=n(" scroll y transition "),Y=a("span",null,"Scroll Y Transition",-1);function L(c,l){return s(),_("div",X,[t(e,null,{default:o(()=>[C,t(i,{location:"top",transition:"scale-transition",activator:"parent"},{default:o(()=>[M]),_:1})]),_:1}),t(e,null,{default:o(()=>[P,t(i,{location:"top",activator:"parent",transition:"scroll-x-transition"},{default:o(()=>[z]),_:1})]),_:1}),t(e,null,{default:o(()=>[N,t(i,{location:"top",activator:"parent",transition:"scroll-y-transition"},{default:o(()=>[Y]),_:1})]),_:1})])}const U=u(j,[["render",L]]),R={class:"demo-space-x"},q=n(" toggle tooltip "),G=a("span",null,"Programmatic tooltip",-1),J={__name:"DemoTooltipVModelSupport",setup(c){const l=H(!1);return(v,r)=>(s(),_("div",R,[t(e,{onClick:r[0]||(r[0]=p=>l.value=!l.value)},{default:o(()=>[q]),_:1}),t(i,{"model-value":l.value,location:"top"},{activator:o(({props:p})=>[t(V,m(p,{icon:"mdi-instagram"}),null,16)]),default:o(()=>[G]),_:1},8,["model-value"])]))}},K={},Q=a("span",null,"Open Delay On Hover",-1),W=n(),Z=a("span",null,"Open Delay On Hover",-1);function tt(c,l){return s(),T(e,{variant:"outlined"},{default:o(()=>[Q,W,t(i,{"open-delay":"500",location:"top",activator:"parent"},{default:o(()=>[Z]),_:1})]),_:1})}const ot=u(K,[["render",tt]]),nt={},at={class:"demo-space-x"},it=a("span",null,"Open On Hover",-1),et=n(" Open On Hover "),lt=a("span",null,"Open On click",-1),pt=n(" Open On click "),st=a("span",null,"Open On Hover + Focus",-1),ct=n(" Open On Hover + Focus ");function rt(c,l){return s(),_("div",at,[t(e,{variant:"outlined"},{default:o(()=>[it,t(i,{activator:"parent",location:"top"},{default:o(()=>[et]),_:1})]),_:1}),t(e,{variant:"outlined",color:"primary"},{default:o(()=>[lt,t(i,{"open-on-click":"","open-on-hover":!1,location:"top",activator:"parent"},{default:o(()=>[pt]),_:1})]),_:1}),t(e,{variant:"outlined"},{default:o(()=>[st,t(i,{"open-on-focus":"",location:"top",activator:"parent"},{default:o(()=>[ct]),_:1})]),_:1})])}const dt=u(nt,[["render",rt]]),_t={},ut={class:"demo-space-x"},vt=n(" Tooltip on End "),Vt=n(" End Tooltip "),mt=n(" Tooltip on Start "),Tt=n(" Start Tooltip "),ft=n(" Tooltip on Top "),Bt=n(" Top Tooltip "),ht=n(" Tooltip on Bottom "),Ot=n(" Bottom Tooltip ");function $t(c,l){return s(),_("div",ut,[t(e,{variant:"outlined"},{default:o(()=>[vt,t(i,{activator:"parent",location:"end"},{default:o(()=>[Vt]),_:1})]),_:1}),t(e,{variant:"outlined"},{default:o(()=>[mt,t(i,{activator:"parent",location:"start"},{default:o(()=>[Tt]),_:1})]),_:1}),t(e,{variant:"outlined"},{default:o(()=>[ft,t(i,{activator:"parent",location:"top"},{default:o(()=>[Bt]),_:1})]),_:1}),t(e,{variant:"outlined"},{default:o(()=>[ht,t(i,{activator:"parent",location:"bottom"},{default:o(()=>[Ot]),_:1})]),_:1})])}const xt=u(_t,[["render",$t]]),yt={ts:`<script lang="ts" setup>
const isTooltipVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn @click="isTooltipVisible = !isTooltipVisible">
      toggle tooltip
    </VBtn>

    <VTooltip
      :model-value="isTooltipVisible"
      location="top"
    >
      <template #activator="{ props }">
        <VIcon
          v-bind="props"
          icon="mdi-instagram"
        />
      </template>
      <span>Programmatic tooltip</span>
    </VTooltip>
  </div>
</template>
`,js:`<script setup>

const isTooltipVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn @click="isTooltipVisible = !isTooltipVisible">
      toggle tooltip
    </VBtn>

    <VTooltip
      :model-value="isTooltipVisible"
      location="top"
    >
      <template #activator="{ props }">
        <VIcon
          v-bind="props"
          icon="mdi-instagram"
        />
      </template>
      <span>Programmatic tooltip</span>
    </VTooltip>
  </div>
</template>
`},gt={ts:`<template>
  <!-- Delay on open -->
  <VBtn variant="outlined">
    <span>Open Delay On Hover</span> <VTooltip
      open-delay="500"
      location="top"
      activator="parent"
    >
      <span>Open Delay On Hover</span>
    </VTooltip>
  </VBtn>
</template>
`,js:`<template>
  <!-- Delay on open -->
  <VBtn variant="outlined">
    <span>Open Delay On Hover</span> <VTooltip
      open-delay="500"
      location="top"
      activator="parent"
    >
      <span>Open Delay On Hover</span>
    </VTooltip>
  </VBtn>
</template>
`},St={ts:`<script setup lang="ts">
import avatar4 from '@/assets/images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn>
      Button
      <VTooltip
        location="top"
        activator="parent"
      >
        Tooltip
      </VTooltip>
    </VBtn>

    <VAvatar color="info">
      <VImg :src="avatar4" />
      <VTooltip
        location="top"
        activator="parent"
      >
        Tooltip on Avatar
      </VTooltip>
    </VAvatar>

    <VTooltip location="top">
      <template #activator="{ props }">
        <VIcon
          v-bind="props"
          size="30"
          icon="mdi-account-outline"
        />
      </template>
      <span>Tooltip on Icon</span>
    </VTooltip>
  </div>
</template>
`,js:`<script setup>
import avatar4 from '@/assets/images/avatars/avatar-4.png'

<\/script>

<template>
  <div class="demo-space-x">
    <VBtn>
      Button
      <VTooltip
        location="top"
        activator="parent"
      >
        Tooltip
      </VTooltip>
    </VBtn>

    <VAvatar color="info">
      <VImg :src="avatar4" />
      <VTooltip
        location="top"
        activator="parent"
      >
        Tooltip on Avatar
      </VTooltip>
    </VAvatar>

    <VTooltip location="top">
      <template #activator="{ props }">
        <VIcon
          v-bind="props"
          size="30"
          icon="mdi-account-outline"
        />
      </template>
      <span>Tooltip on Icon</span>
    </VTooltip>
  </div>
</template>
`},Ht={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="outlined">
      Tooltip on End
      <VTooltip
        activator="parent"
        location="end"
      >
        End Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="outlined">
      Tooltip on Start
      <VTooltip
        activator="parent"
        location="start"
      >
        Start Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="outlined">
      Tooltip on Top
      <VTooltip
        activator="parent"
        location="top"
      >
        Top Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="outlined">
      Tooltip on Bottom
      <VTooltip
        activator="parent"
        location="bottom"
      >
        Bottom Tooltip
      </VTooltip>
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="outlined">
      Tooltip on End
      <VTooltip
        activator="parent"
        location="end"
      >
        End Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="outlined">
      Tooltip on Start
      <VTooltip
        activator="parent"
        location="start"
      >
        Start Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="outlined">
      Tooltip on Top
      <VTooltip
        activator="parent"
        location="top"
      >
        Top Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="outlined">
      Tooltip on Bottom
      <VTooltip
        activator="parent"
        location="bottom"
      >
        Bottom Tooltip
      </VTooltip>
    </VBtn>
  </div>
</template>
`},bt={ts:`<template>
  <div class="demo-space-x">
    <!-- open on hover -->
    <VBtn variant="outlined">
      <span>Open On Hover</span>
      <VTooltip
        activator="parent"
        location="top"
      >
        Open On Hover
      </VTooltip>
    </VBtn>

    <!-- open on click -->
    <VBtn
      variant="outlined"
      color="primary"
    >
      <span>Open On click</span>

      <VTooltip
        open-on-click
        :open-on-hover="false"
        location="top"
        activator="parent"
      >
        Open On click
      </VTooltip>
    </VBtn>

    <!-- open on focus -->
    <VBtn variant="outlined">
      <span>Open On Hover + Focus</span>
      <VTooltip
        open-on-focus
        location="top"
        activator="parent"
      >
        Open On Hover + Focus
      </VTooltip>
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <!-- open on hover -->
    <VBtn variant="outlined">
      <span>Open On Hover</span>
      <VTooltip
        activator="parent"
        location="top"
      >
        Open On Hover
      </VTooltip>
    </VBtn>

    <!-- open on click -->
    <VBtn
      variant="outlined"
      color="primary"
    >
      <span>Open On click</span>

      <VTooltip
        open-on-click
        :open-on-hover="false"
        location="top"
        activator="parent"
      >
        Open On click
      </VTooltip>
    </VBtn>

    <!-- open on focus -->
    <VBtn variant="outlined">
      <span>Open On Hover + Focus</span>
      <VTooltip
        open-on-focus
        location="top"
        activator="parent"
      >
        Open On Hover + Focus
      </VTooltip>
    </VBtn>
  </div>
</template>
`},Dt={ts:`<template>
  <div class="demo-space-x">
    <!-- Scale transition -->
    <VBtn>
      scale transition
      <VTooltip
        location="top"
        transition="scale-transition"
        activator="parent"
      >
        <span>Scale Transition</span>
      </VTooltip>
    </VBtn>

    <!-- Scroll x transition -->
    <VBtn>
      scroll X transition
      <VTooltip
        location="top"
        activator="parent"
        transition="scroll-x-transition"
      >
        <span>Scroll X Transition</span>
      </VTooltip>
    </VBtn>

    <!-- Scroll y transition -->
    <VBtn>
      scroll y transition
      <VTooltip
        location="top"
        activator="parent"
        transition="scroll-y-transition"
      >
        <span>Scroll Y Transition</span>
      </VTooltip>
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <!-- Scale transition -->
    <VBtn>
      scale transition
      <VTooltip
        location="top"
        transition="scale-transition"
        activator="parent"
      >
        <span>Scale Transition</span>
      </VTooltip>
    </VBtn>

    <!-- Scroll x transition -->
    <VBtn>
      scroll X transition
      <VTooltip
        location="top"
        activator="parent"
        transition="scroll-x-transition"
      >
        <span>Scroll X Transition</span>
      </VTooltip>
    </VBtn>

    <!-- Scroll y transition -->
    <VBtn>
      scroll y transition
      <VTooltip
        location="top"
        activator="parent"
        transition="scroll-y-transition"
      >
        <span>Scroll Y Transition</span>
      </VTooltip>
    </VBtn>
  </div>
</template>
`},kt=a("p",null,[n("Use the "),a("code",null,"location"),n(" prop to specify on which side of the element the tooltip should show")],-1),Et=a("p",null,[n("Delay (in ms) after which tooltip opens (when "),a("code",null,"open-on-hover"),n(" prop is set to true)")],-1),It=a("p",null,[n("Tooltip visibility can be programmatically changed using "),a("code",null,"v-model"),n(".")],-1),At=a("p",null,[n("Use "),a("code",null,"transition"),n(" prop to sets the component transition.")],-1),wt=a("p",null,"Tooltips can wrap any element.",-1),Pt={__name:"tooltip",setup(c){return(l,v)=>{const r=xt,p=D,f=dt,B=ot,h=J,O=U,$=F;return s(),T(b,null,{default:o(()=>[t(d,{cols:"12"},{default:o(()=>[t(p,{title:"Location",code:Ht},{default:o(()=>[kt,t(r)]),_:1},8,["code"])]),_:1}),t(d,{cols:"12"},{default:o(()=>[t(p,{title:"Events",code:bt},{default:o(()=>[t(f)]),_:1},8,["code"])]),_:1}),t(d,{cols:"12"},{default:o(()=>[t(p,{title:"Delay On Hover",code:gt},{default:o(()=>[Et,t(B)]),_:1},8,["code"])]),_:1}),t(d,{cols:"12"},{default:o(()=>[t(p,{title:"V-Model Support",code:yt},{default:o(()=>[It,t(h)]),_:1},8,["code"])]),_:1}),t(d,{cols:"12"},{default:o(()=>[t(p,{title:"Transition",code:Dt},{default:o(()=>[At,t(O)]),_:1},8,["code"])]),_:1}),t(d,{cols:"12"},{default:o(()=>[t(p,{title:"Tooltip on Various Elements",code:St},{default:o(()=>[wt,t($)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Pt as default};
