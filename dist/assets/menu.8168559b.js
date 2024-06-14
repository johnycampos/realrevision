import{o as u,c as O,w as e,a as t,aa as s,aP as r,aQ as c,aF as B,dq as p,dr as l,f as n,a5 as a,$ as g,dl as T,ab as L,al as x,cV as y,ar as f,at as k,au as $,a6 as C,V as _,e as D}from"./index.4bc17e10.js";import{V as P}from"./VTooltip.6547da95.js";import{b as S,e as A,V as j}from"./VCard.2c35d430.js";import{_ as I}from"./AppCardCode.e951a0d9.js";import"./vue.runtime.esm-bundler.9a01116a.js";const F=n(" Dropdown w/ Tooltip "),E=a("span",null,"I am a Tooltip",-1),G={__name:"DemoMenuActivatorAndTooltip",setup(V){const i=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(d,m)=>(u(),O(l,{top:""},{activator:e(({props:o})=>[t(P,{location:"top"},{activator:e(({props:v})=>[t(s,r(c(B(o,v))),{default:e(()=>[F]),_:2},1040)]),default:e(()=>[E]),_:2},1024)]),default:e(()=>[t(p,{items:i})]),_:1}))}},H=n(" Menu as Popover "),J=n(" Gingerbread bear claw cake. Souffl\xE9 candy sesame snaps chocolate ice cream cake. Dessert candy canes oat cake pudding cupcake. Bear claw sweet wafer bonbon drag\xE9e toffee. "),N={__name:"DemoMenuPopover",setup(V){const i=g(!1);return(d,m)=>(u(),O(l,{modelValue:i.value,"onUpdate:modelValue":m[0]||(m[0]=o=>i.value=o),location:"top"},{activator:e(({props:o})=>[t(s,r(c(o)),{default:e(()=>[H]),_:2},1040)]),default:e(()=>[t(j,{"max-width":"300"},{default:e(()=>[t(p,null,{default:e(()=>[t(T,{"prepend-avatar":L(x),title:"John Leider",subtitle:"Founder of Vuetify"},null,8,["prepend-avatar"])]),_:1}),t(y),t(S,null,{default:e(()=>[J]),_:1}),t(A,null,{default:e(()=>[t(s,{icon:"mdi-heart-outline"}),t(s,{icon:"mdi-bookmark-outline"}),t(s,{icon:"mdi-thumb-down-outline"})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},R=n(" On hover "),X={__name:"DemoMenuOpenOnHover",setup(V){const i=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(d,m)=>(u(),O(l,{"open-on-hover":""},{activator:e(({props:o})=>[t(s,r(c(o)),{default:e(()=>[R]),_:2},1040)]),default:e(()=>[t(p,{items:i})]),_:1}))}},Y={class:"demo-space-x"},U=n(" Top "),q=n(" Bottom "),z=n(" Start "),Q=n(" End "),W={__name:"DemoMenuLocation",setup(V){const i=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(d,m)=>(u(),f("div",Y,[t(l,{location:"top"},{activator:e(({props:o})=>[t(s,r(c(o)),{default:e(()=>[U]),_:2},1040)]),default:e(()=>[t(p,{items:i})]),_:1}),t(l,{location:"bottom"},{activator:e(({props:o})=>[t(s,r(c(o)),{default:e(()=>[q]),_:2},1040)]),default:e(()=>[t(p,{items:i})]),_:1}),t(l,{location:"start"},{activator:e(({props:o})=>[t(s,r(c(o)),{default:e(()=>[z]),_:2},1040)]),default:e(()=>[t(p,{items:i})]),_:1}),t(l,{location:"end"},{activator:e(({props:o})=>[t(s,r(c(o)),{default:e(()=>[Q]),_:2},1040)]),default:e(()=>[t(p,{items:i})]),_:1})]))}},K={class:"demo-space-x"},Z=n(" Scale Transition "),tt=n(" Slide X Transition "),et=n(" Slide Y Transition "),ot={__name:"DemoMenuCustomTransitions",setup(V){const i=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(d,m)=>(u(),f("div",K,[t(l,{transition:"scale-transition"},{activator:e(({props:o})=>[t(s,r(c(o)),{default:e(()=>[Z]),_:2},1040)]),default:e(()=>[t(p,{items:i})]),_:1}),t(l,{transition:"slide-x-transition"},{activator:e(({props:o})=>[t(s,r(c(o)),{default:e(()=>[tt]),_:2},1040)]),default:e(()=>[t(p,{items:i})]),_:1}),t(l,{transition:"slide-y-transition"},{activator:e(({props:o})=>[t(s,r(c(o)),{default:e(()=>[et]),_:2},1040)]),default:e(()=>[t(p,{items:i})]),_:1})]))}},nt={class:"demo-space-x"},it={__name:"DemoMenuBasic",setup(V){const i=["primary","secondary","success","info","warning","error"],d=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(m,o)=>(u(),f("div",nt,[(u(),f(k,null,$(i,v=>t(l,{key:v},{activator:e(({props:h})=>[t(s,B({color:v},h),{default:e(()=>[n(C(v),1)]),_:2},1040,["color"])]),default:e(()=>[t(p,{items:d})]),_:2},1024)),64))]))}},at={ts:`<script lang="ts" setup>
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu transition="scale-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Scale Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-x-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide X Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-y-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide Y Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`,js:`<script setup>
const items = [
  {
    title: 'Option 1',
    value: 'Option 1'
  },
  {
    title: 'Option 2',
    value: 'Option 2'
  },
  {
    title: 'Option 3',
    value: 'Option 3'
  }
]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu transition="scale-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Scale Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-x-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide X Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-y-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide Y Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`},st={ts:`<script lang="ts" setup>
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <VMenu open-on-hover>
    <template #activator="{ props }">
      <VBtn v-bind="props">
        On hover
      </VBtn>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
`,js:`<script setup>
const items = [
  {
    title: 'Option 1',
    value: 'Option 1'
  },
  {
    title: 'Option 2',
    value: 'Option 2'
  },
  {
    title: 'Option 3',
    value: 'Option 3'
  }
]
<\/script>

<template>
  <VMenu open-on-hover>
    <template #activator="{ props }">
      <VBtn v-bind="props">
        On hover
      </VBtn>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
`},pt={ts:`<script lang="ts" setup>
const menusVariant = ['primary', 'secondary', 'success', 'info', 'warning', 'error']
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu
      v-for="menu in menusVariant"
      :key="menu"
    >
      <template #activator="{ props }">
        <VBtn
          :color="menu"
          v-bind="props"
        >
          {{ menu }}
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`,js:`<script setup>
const menusVariant = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'error'
]
const items = [
  {
    title: 'Option 1',
    value: 'Option 1'
  },
  {
    title: 'Option 2',
    value: 'Option 2'
  },
  {
    title: 'Option 3',
    value: 'Option 3'
  }
]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu
      v-for="menu in menusVariant"
      :key="menu"
    >
      <template #activator="{ props }">
        <VBtn
          :color="menu"
          v-bind="props"
        >
          {{ menu }}
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`},lt={ts:`<script lang="ts" setup>
import { mergeProps } from 'vue'

const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <VMenu top>
    <template #activator="{ props: menuProps }">
      <VTooltip location="top">
        <template #activator="{ props: tooltipProps }">
          <VBtn v-bind="mergeProps(menuProps, tooltipProps)">
            Dropdown w/ Tooltip
          </VBtn>
        </template>
        <span>I am a Tooltip</span>
      </VTooltip>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
`,js:`<script setup>
import { mergeProps } from 'vue'

const items = [
  {
    title: 'Option 1',
    value: 'Option 1'
  },
  {
    title: 'Option 2',
    value: 'Option 2'
  },
  {
    title: 'Option 3',
    value: 'Option 3'
  }
]
<\/script>

<template>
  <VMenu top>
    <template #activator="{ props: menuProps }">
      <VTooltip location="top">
        <template #activator="{ props: tooltipProps }">
          <VBtn v-bind="mergeProps(menuProps, tooltipProps)">
            Dropdown w/ Tooltip
          </VBtn>
        </template>
        <span>I am a Tooltip</span>
      </VTooltip>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
`},rt={ts:`<script lang="ts" setup>
import avatar1 from '@/assets/images/avatars/avatar-1.png'
const menu = ref(false)
<\/script>

<template>
  <VMenu
    v-model="menu"
    location="top"
  >
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Menu as Popover
      </VBtn>
    </template>

    <VCard
      max-width="300"
    >
      <VList>
        <VListItem
          :prepend-avatar="avatar1"
          title="John Leider"
          subtitle="Founder of Vuetify"
        />
      </VList>

      <VDivider />

      <VCardText>
        Gingerbread bear claw cake. Souffl\xE9 candy sesame snaps chocolate ice cream cake.
        Dessert candy canes oat cake pudding cupcake. Bear claw sweet wafer bonbon drag\xE9e toffee.
      </VCardText>

      <VCardActions>
        <VBtn icon="mdi-heart-outline" />
        <VBtn icon="mdi-bookmark-outline" />
        <VBtn icon="mdi-thumb-down-outline" />
      </VCardActions>
    </VCard>
  </VMenu>
</template>
`,js:`<script setup>
import avatar1 from '@/assets/images/avatars/avatar-1.png'

const menu = ref(false)
<\/script>

<template>
  <VMenu
    v-model="menu"
    location="top"
  >
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Menu as Popover
      </VBtn>
    </template>

    <VCard
      max-width="300"
    >
      <VList>
        <VListItem
          :prepend-avatar="avatar1"
          title="John Leider"
          subtitle="Founder of Vuetify"
        />
      </VList>

      <VDivider />

      <VCardText>
        Gingerbread bear claw cake. Souffl\xE9 candy sesame snaps chocolate ice cream cake.
        Dessert candy canes oat cake pudding cupcake. Bear claw sweet wafer bonbon drag\xE9e toffee.
      </VCardText>

      <VCardActions>
        <VBtn icon="mdi-heart-outline" />
        <VBtn icon="mdi-bookmark-outline" />
        <VBtn icon="mdi-thumb-down-outline" />
      </VCardActions>
    </VCard>
  </VMenu>
</template>
`},ct={ts:`<script lang="ts" setup>
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu location="top">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Top
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="bottom">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Bottom
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="start">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Start
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="end">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          End
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`,js:`<script setup>
const items = [
  {
    title: 'Option 1',
    value: 'Option 1'
  },
  {
    title: 'Option 2',
    value: 'Option 2'
  },
  {
    title: 'Option 3',
    value: 'Option 3'
  }
]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu location="top">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Top
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="bottom">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Bottom
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="start">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Start
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="end">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          End
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`},mt=a("p",null," Remember to put the element that activates the menu in the activator slot. ",-1),ut=a("p",null,[n("Vuetify comes with 3 standard transitions, "),a("code",null,"scale"),n(", "),a("code",null,"slide-x"),n(" and "),a("code",null,"slide-y"),n(". Use "),a("code",null,"transition"),n(" prop to add transition to a menu.")],-1),dt=a("p",null,[n("Menu can be offset relative to the activator by using the "),a("code",null,"location"),n(" prop.")],-1),vt=a("p",null,[n("Menus can be accessed using hover instead of clicking with the "),a("code",null,"open-on-hover"),n(" prop.")],-1),Vt=a("p",null,"A menu can be configured to be static when opened, allowing it to function as a popover. This can be useful when there are multiple interactive items within the menu contents.",-1),_t=a("p",null,[n("With the new "),a("code",null,"v-slot"),n(" syntax, nested activators such as those seen with a "),a("code",null,"v-menu"),n(" and "),a("code",null,"v-tooltip"),n(" attached to the same activator button, need a particular setup in order to function correctly")],-1),bt={__name:"menu",setup(V){return(i,d)=>{const m=it,o=I,v=ot,h=W,M=X,b=N,w=G;return u(),O(D,{class:"match-height"},{default:e(()=>[t(_,{cols:"12",md:"6"},{default:e(()=>[t(o,{title:"Basic",code:pt},{default:e(()=>[mt,t(m)]),_:1},8,["code"])]),_:1}),t(_,{cols:"12",md:"6"},{default:e(()=>[t(o,{title:"Custom transitions",code:at},{default:e(()=>[ut,t(v)]),_:1},8,["code"])]),_:1}),t(_,{cols:"12",md:"6"},{default:e(()=>[t(o,{title:"Location",code:ct},{default:e(()=>[dt,t(h)]),_:1},8,["code"])]),_:1}),t(_,{cols:"12",md:"6"},{default:e(()=>[t(o,{title:"Open on hover",code:st},{default:e(()=>[vt,t(M)]),_:1},8,["code"])]),_:1}),t(_,{cols:"12",md:"6"},{default:e(()=>[t(o,{title:"Popover",code:rt},{default:e(()=>[Vt,t(b)]),_:1},8,["code"])]),_:1}),t(_,{cols:"12",md:"6"},{default:e(()=>[t(o,{title:"Activator and tooltip",code:lt},{default:e(()=>[_t,t(w)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{bt as default};
