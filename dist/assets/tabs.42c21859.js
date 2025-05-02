import{V as l,a as b}from"./VTabs.670ac95e.js";import{$ as w,a0 as z,o as c,ar as m,a as e,w as t,at as d,au as f,c as k,f as a,a6 as g,a5 as n,aa as y,_ as q,a9 as h,V as _,e as F}from"./index.a1270b37.js";import{V as v,a as I}from"./VWindowItem.9c56a5a8.js";import{_ as B}from"./AppCardCode.748b95d1.js";import"./vue.runtime.esm-bundler.cc528c31.js";import"./VCard.64685768.js";const N={class:"text-center mt-9"},A=a(" Remove Tab "),O=a(" Add Tab "),U={__name:"DemoTabsDynamic",setup(T){const s=w(3),u=w(0);return z(s,r=>{u.value=r-1}),(r,o)=>(c(),m(d,null,[e(b,{modelValue:u.value,"onUpdate:modelValue":o[0]||(o[0]=i=>u.value=i)},{default:t(()=>[(c(!0),m(d,null,f(s.value,i=>(c(),k(l,{key:i,value:i},{default:t(()=>[a(" Tab "+g(i),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),n("div",N,[e(y,{disabled:!s.value,variant:"text",onClick:o[1]||(o[1]=i=>s.value--)},{default:t(()=>[A]),_:1},8,["disabled"]),e(y,{variant:"text",onClick:o[2]||(o[2]=i=>s.value++)},{default:t(()=>[O]),_:1})])],64))}},M={class:"text-center"},E=a(" Previous "),H=a(" Next "),R={__name:"DemoTabsProgrammaticNavigation",setup(T){const s=w(0),u=["Appetizers","Entrees","Deserts","Cocktails"],r="Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.",o=u.length,i=()=>{s.value!==1&&(s.value-=1)},p=()=>{s.value!==o&&(s.value+=1)};return(W,x)=>(c(),m(d,null,[e(b,{modelValue:s.value,"onUpdate:modelValue":x[0]||(x[0]=V=>s.value=V),grow:""},{default:t(()=>[(c(!0),m(d,null,f(u.length,V=>(c(),k(l,{key:V,value:V},{default:t(()=>[a(g(u[V-1]),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),e(I,{modelValue:s.value,"onUpdate:modelValue":x[1]||(x[1]=V=>s.value=V),class:"mt-5"},{default:t(()=>[(c(!0),m(d,null,f(u.length,V=>(c(),k(v,{key:V,value:V},{default:t(()=>[a(g(r))]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),n("div",M,[e(y,{variant:"text",onClick:i},{default:t(()=>[E]),_:1}),e(y,{variant:"text",onClick:p},{default:t(()=>[H]),_:1})])],64))}},G={__name:"DemoTabsGrow",setup(T){const s=w("Appetizers"),u=["Appetizers","Entrees","Deserts","Cocktails"],r="hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice drag\xE9e macaroon.";return(o,i)=>(c(),m(d,null,[e(b,{modelValue:s.value,"onUpdate:modelValue":i[0]||(i[0]=p=>s.value=p),grow:""},{default:t(()=>[(c(),m(d,null,f(u,p=>e(l,{key:p,value:p},{default:t(()=>[a(g(p),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),e(I,{modelValue:s.value,"onUpdate:modelValue":i[1]||(i[1]=p=>s.value=p),class:"mt-6"},{default:t(()=>[(c(),m(d,null,f(u,p=>e(v,{key:p,value:p},{default:t(()=>[a(g(r))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])],64))}},L={},J=a(" Fixed Tab 1 "),K=a(" Fixed Tab 2 "),Q=a(" Fixed Tab 3 "),X=a(" Fixed Tab 4 ");function Y(T,s){return c(),k(b,{"fixed-tabs":""},{default:t(()=>[e(l,null,{default:t(()=>[J]),_:1}),e(l,null,{default:t(()=>[K]),_:1}),e(l,null,{default:t(()=>[Q]),_:1}),e(l,null,{default:t(()=>[X]),_:1})]),_:1})}const Z=q(L,[["render",Y]]),ee={};function te(T,s){return c(),k(b,{"next-icon":"mdi-arrow-right","prev-icon":"mdi-arrow-left","show-arrows":""},{default:t(()=>[(c(),m(d,null,f(10,u=>e(l,{key:u},{default:t(()=>[a(" Item "+g(u),1)]),_:2},1024)),64))]),_:1})}const ae=q(ee,[["render",te]]),se={};function oe(T,s){return c(),k(b,{"show-arrows":""},{default:t(()=>[(c(),m(d,null,f(10,u=>e(l,{key:u,value:u},{default:t(()=>[a(" Item "+g(u),1)]),_:2},1032,["value"])),64))]),_:1})}const ne=q(se,[["render",oe]]),ie={},le=a("Home"),ue=a("Service"),ce=a("Account"),re=a("Home"),me=a("Service"),de=a("Account"),pe=a("Home"),be=a("Service"),Te=a("Account");function Ve(T,s){return c(),m(d,null,[e(b,null,{default:t(()=>[e(l,null,{default:t(()=>[le]),_:1}),e(l,null,{default:t(()=>[ue]),_:1}),e(l,null,{default:t(()=>[ce]),_:1})]),_:1}),e(b,{centered:""},{default:t(()=>[e(l,null,{default:t(()=>[re]),_:1}),e(l,null,{default:t(()=>[me]),_:1}),e(l,null,{default:t(()=>[de]),_:1})]),_:1}),e(b,{end:""},{default:t(()=>[e(l,null,{default:t(()=>[pe]),_:1}),e(l,null,{default:t(()=>[be]),_:1}),e(l,null,{default:t(()=>[Te]),_:1})]),_:1})],64)}const _e=q(ie,[["render",Ve]]),ve={class:"d-flex flex-row gap-2"},fe=a(" Option 1 "),ge=a(" Option 2 "),he=a(" Option 3 "),we=n("p",null," Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero. ",-1),ke=n("p",{class:"mb-0"}," Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio. ",-1),Ie=n("p",null," Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis. ",-1),xe=n("p",{class:"mb-0"}," Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ",-1),ye=n("p",null," Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. ",-1),qe=n("p",{class:"mb-0"}," Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis. ",-1),We={__name:"DemoTabsVerticalPill",setup(T){const s=w(0);return(u,r)=>(c(),m("div",ve,[e(b,{modelValue:s.value,"onUpdate:modelValue":r[0]||(r[0]=o=>s.value=o),direction:"vertical",class:"v-tabs-pill"},{default:t(()=>[e(l,null,{default:t(()=>[e(h,{start:"",icon:"mdi-account-outline",size:22}),fe]),_:1}),e(l,null,{default:t(()=>[e(h,{start:"",icon:"mdi-lock-outline",size:22}),ge]),_:1}),e(l,null,{default:t(()=>[e(h,{start:"",icon:"mdi-access-point",size:22}),he]),_:1})]),_:1},8,["modelValue"]),e(I,{modelValue:s.value,"onUpdate:modelValue":r[1]||(r[1]=o=>s.value=o)},{default:t(()=>[e(v,null,{default:t(()=>[we,ke]),_:1}),e(v,null,{default:t(()=>[Ie,xe]),_:1}),e(v,null,{default:t(()=>[ye,qe]),_:1})]),_:1},8,["modelValue"])]))}},$e={class:"d-flex flex-row gap-2"},Pe=a(" Option 1 "),Ce=a(" Option 2 "),De=a(" Option 3 "),Se=n("p",null," Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero. ",-1),je=n("p",{class:"mb-0"}," Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio. ",-1),ze=n("p",null," Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis. ",-1),Fe=n("p",{class:"mb-0"}," Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ",-1),Be=n("p",null," Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. ",-1),Ne=n("p",{class:"mb-0"}," Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis. ",-1),Ae={__name:"DemoTabsVertical",setup(T){const s=w(0);return(u,r)=>(c(),m("div",$e,[e(b,{modelValue:s.value,"onUpdate:modelValue":r[0]||(r[0]=o=>s.value=o),direction:"vertical"},{default:t(()=>[e(l,null,{default:t(()=>[e(h,{start:"",icon:"mdi-account-outline",size:"22"}),Pe]),_:1}),e(l,null,{default:t(()=>[e(h,{start:"",icon:"mdi-lock-outline",size:22}),Ce]),_:1}),e(l,null,{default:t(()=>[e(h,{start:"",icon:"mdi-access-point",size:22}),De]),_:1})]),_:1},8,["modelValue"]),e(I,{modelValue:s.value,"onUpdate:modelValue":r[1]||(r[1]=o=>s.value=o)},{default:t(()=>[e(v,null,{default:t(()=>[Se,je]),_:1}),e(v,null,{default:t(()=>[ze,Fe]),_:1}),e(v,null,{default:t(()=>[Be,Ne]),_:1})]),_:1},8,["modelValue"])]))}},Oe=n("span",null,"Recent",-1),Ue=n("span",null,"Favorites",-1),Me=n("span",null,"Nearby",-1),Ee={__name:"DemoTabsStacked",setup(T){const s=w("tab-1"),u="Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.";return(r,o)=>(c(),m(d,null,[e(b,{modelValue:s.value,"onUpdate:modelValue":o[0]||(o[0]=i=>s.value=i),grow:"",stacked:""},{default:t(()=>[e(l,{value:"tab-1"},{default:t(()=>[e(h,{icon:"mdi-phone",class:"mb-2"}),Oe]),_:1}),e(l,{value:"tab-2"},{default:t(()=>[e(h,{icon:"mdi-heart-outline",class:"mb-2"}),Ue]),_:1}),e(l,{value:"tab-3"},{default:t(()=>[e(h,{icon:"mdi-account-box-outline",class:"mb-2"}),Me]),_:1})]),_:1},8,["modelValue"]),e(I,{modelValue:s.value,"onUpdate:modelValue":o[1]||(o[1]=i=>s.value=i),class:"mt-5"},{default:t(()=>[(c(),m(d,null,f(3,i=>e(v,{key:i,value:`tab-${i}`},{default:t(()=>[a(g(u))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])],64))}},He=a("Tab One"),Re=a("Tab Two"),Ge=a("Tab Three"),Le={__name:"DemoTabsBasicPill",setup(T){const s=w(0),u="Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.";return(r,o)=>(c(),m(d,null,[e(b,{modelValue:s.value,"onUpdate:modelValue":o[0]||(o[0]=i=>s.value=i),class:"v-tabs-pill"},{default:t(()=>[e(l,null,{default:t(()=>[He]),_:1}),e(l,null,{default:t(()=>[Re]),_:1}),e(l,null,{default:t(()=>[Ge]),_:1})]),_:1},8,["modelValue"]),e(I,{modelValue:s.value,"onUpdate:modelValue":o[1]||(o[1]=i=>s.value=i),class:"mt-5"},{default:t(()=>[(c(),m(d,null,f(3,i=>e(v,{key:i},{default:t(()=>[a(g(u))]),_:2},1024)),64))]),_:1},8,["modelValue"])],64))}},Je=a("Tab One"),Ke=a("Tab Two"),Qe=a("Tab Three"),Xe={__name:"DemoTabsBasic",setup(T){const s=w(0),u="Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.";return(r,o)=>(c(),m(d,null,[e(b,{modelValue:s.value,"onUpdate:modelValue":o[0]||(o[0]=i=>s.value=i)},{default:t(()=>[e(l,null,{default:t(()=>[Je]),_:1}),e(l,null,{default:t(()=>[Ke]),_:1}),e(l,null,{default:t(()=>[Qe]),_:1})]),_:1},8,["modelValue"]),e(I,{modelValue:s.value,"onUpdate:modelValue":o[1]||(o[1]=i=>s.value=i),class:"mt-5"},{default:t(()=>[(c(),m(d,null,f(3,i=>e(v,{key:i},{default:t(()=>[a(g(u))]),_:2},1024)),64))]),_:1},8,["modelValue"])],64))}},Ye={ts:`<script lang="ts" setup>
const currentTab = ref('tab-1')
const tabItemText = 'Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
    stacked
  >
    <VTab value="tab-1">
      <VIcon
        icon="mdi-phone"
        class="mb-2"
      />
      <span>Recent</span>
    </VTab>

    <VTab value="tab-2">
      <VIcon
        icon="mdi-heart-outline"
        class="mb-2"
      />
      <span>Favorites</span>
    </VTab>

    <VTab value="tab-3">
      <VIcon
        icon="mdi-account-box-outline"
        class="mb-2"
      />
      <span>Nearby</span>
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="i in 3"
      :key="i"
      :value="\`tab-\${i}\`"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>
</template>
`,js:`<script setup>
const currentTab = ref('tab-1')
const tabItemText = 'Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
    stacked
  >
    <VTab value="tab-1">
      <VIcon
        icon="mdi-phone"
        class="mb-2"
      />
      <span>Recent</span>
    </VTab>

    <VTab value="tab-2">
      <VIcon
        icon="mdi-heart-outline"
        class="mb-2"
      />
      <span>Favorites</span>
    </VTab>

    <VTab value="tab-3">
      <VIcon
        icon="mdi-account-box-outline"
        class="mb-2"
      />
      <span>Nearby</span>
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="i in 3"
      :key="i"
      :value="\`tab-\${i}\`"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>
</template>
`},Ze={ts:`<script lang="ts" setup>
const currentTab = ref(0)
const items = ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']
const tabItemText = 'Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.'
const totalTabs = items.length

const preTab = () => {
  if (currentTab.value !== 1)
    currentTab.value -= 1
}

const nextTab = () => {
  if (currentTab.value !== totalTabs)
    currentTab.value += 1
}
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
  >
    <VTab
      v-for="item in items.length"
      :key="item"
      :value="item"
    >
      {{ items[item - 1] }}
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in items.length"
      :key="item"
      :value="item"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>

  <div class="text-center">
    <VBtn
      variant="text"
      @click="preTab"
    >
      Previous
    </VBtn>

    <VBtn
      variant="text"
      @click="nextTab"
    >
      Next
    </VBtn>
  </div>
</template>
`,js:`<script setup>
const currentTab = ref(0)
const items = [
  'Appetizers',
  'Entrees',
  'Deserts',
  'Cocktails'
]
const tabItemText = 'Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.'
const totalTabs = items.length
const preTab = () => {
  if (currentTab.value !== 1)
    currentTab.value -= 1
}
const nextTab = () => {
  if (currentTab.value !== totalTabs)
    currentTab.value += 1
}
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
  >
    <VTab
      v-for="item in items.length"
      :key="item"
      :value="item"
    >
      {{ items[item - 1] }}
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in items.length"
      :key="item"
      :value="item"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>

  <div class="text-center">
    <VBtn
      variant="text"
      @click="preTab"
    >
      Previous
    </VBtn>

    <VBtn
      variant="text"
      @click="nextTab"
    >
      Next
    </VBtn>
  </div>
</template>
`},et={ts:`<template>
  <VTabs show-arrows>
    <VTab
      v-for="i in 10"
      :key="i"
      :value="i"
    >
      Item {{ i }}
    </VTab>
  </VTabs>
</template>
`,js:`<template>
  <VTabs show-arrows>
    <VTab
      v-for="i in 10"
      :key="i"
      :value="i"
    >
      Item {{ i }}
    </VTab>
  </VTabs>
</template>
`},tt={ts:`<template>
  <!-- Default -->
  <VTabs>
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>

  <!-- Center -->
  <VTabs centered>
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>

  <!-- Right -->
  <VTabs end>
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>
</template>
`,js:`<template>
  <!-- Default -->
  <VTabs>
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>

  <!-- Center -->
  <VTabs centered>
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>

  <!-- Right -->
  <VTabs end>
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>
</template>
`},at={ts:`<script lang="ts" setup>
const currentTab = ref(0)
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs v-model="currentTab">
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in 3"
      :key="item"
    >
      {{ tabItemContent }}
    </VWindowItem>
  </VWindow>
</template>
`,js:`<script setup>
const currentTab = ref(0)
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs v-model="currentTab">
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in 3"
      :key="item"
    >
      {{ tabItemContent }}
    </VWindowItem>
  </VWindow>
</template>
`},st={ts:`<script lang="ts" setup>
const currentTab = ref(0)
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    class="v-tabs-pill"
  >
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in 3"
      :key="item"
    >
      {{ tabItemContent }}
    </VWindowItem>
  </VWindow>
</template>
`,js:`<script setup>
const currentTab = ref(0)
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    class="v-tabs-pill"
  >
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in 3"
      :key="item"
    >
      {{ tabItemContent }}
    </VWindowItem>
  </VWindow>
</template>
`},ot={ts:`<script setup lang="ts">
const currentTab = ref(0)
<\/script>

<template>
  <div class="d-flex flex-row gap-2">
    <VTabs
      v-model="currentTab"
      direction="vertical"
    >
      <VTab>
        <VIcon
          start
          icon="mdi-account-outline"
          size="22"
        />
        Option 1
      </VTab>

      <VTab>
        <VIcon
          start
          icon="mdi-lock-outline"
          :size="22"
        />
        Option 2
      </VTab>

      <VTab>
        <VIcon
          start
          icon="mdi-access-point"
          :size="22"
        />
        Option 3
      </VTab>
    </VTabs>

    <VWindow v-model="currentTab">
      <VWindowItem>
        <p>
          Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
        </p>

        <p class="mb-0">
          Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
        </p>
      </VWindowItem>

      <VWindowItem>
        <p>
          Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
        </p>

        <p class="mb-0">
          Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
        </p>
      </VWindowItem>

      <VWindowItem>
        <p>
          Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
        </p>

        <p class="mb-0">
          Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
        </p>
      </VWindowItem>
    </VWindow>
  </div>
</template>
`,js:`<script setup>

const currentTab = ref(0)
<\/script>

<template>
  <div class="d-flex flex-row gap-2">
    <VTabs
      v-model="currentTab"
      direction="vertical"
    >
      <VTab>
        <VIcon
          start
          icon="mdi-account-outline"
          size="22"
        />
        Option 1
      </VTab>

      <VTab>
        <VIcon
          start
          icon="mdi-lock-outline"
          :size="22"
        />
        Option 2
      </VTab>

      <VTab>
        <VIcon
          start
          icon="mdi-access-point"
          :size="22"
        />
        Option 3
      </VTab>
    </VTabs>

    <VWindow v-model="currentTab">
      <VWindowItem>
        <p>
          Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
        </p>

        <p class="mb-0">
          Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
        </p>
      </VWindowItem>

      <VWindowItem>
        <p>
          Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
        </p>

        <p class="mb-0">
          Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
        </p>
      </VWindowItem>

      <VWindowItem>
        <p>
          Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
        </p>

        <p class="mb-0">
          Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
        </p>
      </VWindowItem>
    </VWindow>
  </div>
</template>
`},nt={ts:`<script setup lang="ts">
const currentTab = ref(0)
<\/script>

<template>
  <div class="d-flex flex-row gap-2">
    <VTabs
      v-model="currentTab"
      direction="vertical"
      class="v-tabs-pill"
    >
      <VTab>
        <VIcon
          start
          icon="mdi-account-outline"
          :size="22"
        />
        Option 1
      </VTab>

      <VTab>
        <VIcon
          start
          icon="mdi-lock-outline"
          :size="22"
        />
        Option 2
      </VTab>

      <VTab>
        <VIcon
          start
          icon="mdi-access-point"
          :size="22"
        />
        Option 3
      </VTab>
    </VTabs>

    <VWindow v-model="currentTab">
      <VWindowItem>
        <p>
          Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
        </p>

        <p class="mb-0">
          Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
        </p>
      </VWindowItem>

      <VWindowItem>
        <p>
          Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
        </p>

        <p class="mb-0">
          Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
        </p>
      </VWindowItem>

      <VWindowItem>
        <p>
          Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
        </p>

        <p class="mb-0">
          Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
        </p>
      </VWindowItem>
    </VWindow>
  </div>
</template>
`,js:`<script setup>

const currentTab = ref(0)
<\/script>

<template>
  <div class="d-flex flex-row gap-2">
    <VTabs
      v-model="currentTab"
      direction="vertical"
      class="v-tabs-pill"
    >
      <VTab>
        <VIcon
          start
          icon="mdi-account-outline"
          :size="22"
        />
        Option 1
      </VTab>

      <VTab>
        <VIcon
          start
          icon="mdi-lock-outline"
          :size="22"
        />
        Option 2
      </VTab>

      <VTab>
        <VIcon
          start
          icon="mdi-access-point"
          :size="22"
        />
        Option 3
      </VTab>
    </VTabs>

    <VWindow v-model="currentTab">
      <VWindowItem>
        <p>
          Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
        </p>

        <p class="mb-0">
          Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
        </p>
      </VWindowItem>

      <VWindowItem>
        <p>
          Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
        </p>

        <p class="mb-0">
          Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
        </p>
      </VWindowItem>

      <VWindowItem>
        <p>
          Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
        </p>

        <p class="mb-0">
          Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
        </p>
      </VWindowItem>
    </VWindow>
  </div>
</template>
`},it={ts:`<script lang="ts" setup>
const currentTab = ref('Appetizers')
const items = ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice drag\xE9e macaroon.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
  >
    <VTab
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ item }}
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-6"
  >
    <VWindowItem
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>
</template>
`,js:`<script setup>
const currentTab = ref('Appetizers')
const items = [
  'Appetizers',
  'Entrees',
  'Deserts',
  'Cocktails'
]
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice drag\xE9e macaroon.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
  >
    <VTab
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ item }}
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-6"
  >
    <VWindowItem
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>
</template>
`},lt={ts:`<template>
  <VTabs
    next-icon="mdi-arrow-right"
    prev-icon="mdi-arrow-left"
    show-arrows
  >
    <VTab
      v-for="i in 10"
      :key="i"
    >
      Item {{ i }}
    </VTab>
  </VTabs>
</template>
`,js:`<template>
  <VTabs
    next-icon="mdi-arrow-right"
    prev-icon="mdi-arrow-left"
    show-arrows
  >
    <VTab
      v-for="i in 10"
      :key="i"
    >
      Item {{ i }}
    </VTab>
  </VTabs>
</template>
`},ut={ts:`<script lang="ts" setup>
const totalTabs = ref(3)
const currentTab = ref(0)

watch(totalTabs, newValue => {
  currentTab.value = newValue - 1
})
<\/script>

<template>
  <VTabs v-model="currentTab">
    <VTab
      v-for="n in totalTabs"
      :key="n"
      :value="n"
    >
      Tab {{ n }}
    </VTab>
  </VTabs>

  <!-- buttons -->
  <div class="text-center mt-9">
    <VBtn
      :disabled="!totalTabs"
      variant="text"
      @click="totalTabs--"
    >
      Remove Tab
    </VBtn>

    <VBtn
      variant="text"
      @click="totalTabs++"
    >
      Add Tab
    </VBtn>
  </div>
</template>
`,js:`<script setup>
const totalTabs = ref(3)
const currentTab = ref(0)
watch(totalTabs, newValue => {
  currentTab.value = newValue - 1
})
<\/script>

<template>
  <VTabs v-model="currentTab">
    <VTab
      v-for="n in totalTabs"
      :key="n"
      :value="n"
    >
      Tab {{ n }}
    </VTab>
  </VTabs>

  <!-- buttons -->
  <div class="text-center mt-9">
    <VBtn
      :disabled="!totalTabs"
      variant="text"
      @click="totalTabs--"
    >
      Remove Tab
    </VBtn>

    <VBtn
      variant="text"
      @click="totalTabs++"
    >
      Add Tab
    </VBtn>
  </div>
</template>
`},ct={ts:`<template>
  <VTabs fixed-tabs>
    <VTab>
      Fixed Tab 1
    </VTab>
    <VTab>
      Fixed Tab 2
    </VTab>
    <VTab>
      Fixed Tab 3
    </VTab>
    <VTab>
      Fixed Tab 4
    </VTab>
  </VTabs>
</template>
`,js:`<template>
  <VTabs fixed-tabs>
    <VTab>
      Fixed Tab 1
    </VTab>
    <VTab>
      Fixed Tab 2
    </VTab>
    <VTab>
      Fixed Tab 3
    </VTab>
    <VTab>
      Fixed Tab 4
    </VTab>
  </VTabs>
</template>
`},rt=n("p",null,[a("The "),n("code",null,"v-tabs"),a(" component is used for hiding content behind a selectable item.")],-1),mt=n("p",null,[a("Use our custom class "),n("code",null,".v-tabs-pill"),a(" along with "),n("code",null,"v-tabs"),a(" component to style pill tabs.")],-1),dt=n("p",null,[a("Using "),n("code",null,"stacked"),a(" prop you can have buttons that use both icons and text.")],-1),pt=n("p",null,[a("The "),n("code",null,"vertical"),a(" prop allows for "),n("code",null,"v-tab"),a(" components to stack vertically.")],-1),bt=n("p",null,"Use our custom class .v-tabs-pill along with v-tabs component to style pill tabs.",-1),Tt=n("p",null,[a("Use "),n("code",null,"centered"),a(", "),n("code",null,"right"),a(" prop to change the tabs alignment.")],-1),Vt=n("p",null,"If the tab items overflow their container, pagination controls will appear on desktop.",-1),_t=n("p",null,[n("code",null,"prev-icon"),a(" and "),n("code",null,"next-icon"),a(" props can be used for applying custom pagination icons.")],-1),vt=n("p",null,[a("The "),n("code",null,"fixed-tabs"),a(" prop forces "),n("code",null,"v-tab"),a(" to take up all available space up to the maximum width (300px).")],-1),ft=n("p",null,[a("The "),n("code",null,"grow"),a(" prop will make the tab items take up all available space up to a maximum width of 300px.")],-1),gt=n("p",null,[a("Tabs can be dynamically added and removed. This allows you to update to any number and the "),n("code",null,"v-tabs"),a(" component will react.")],-1),qt={__name:"tabs",setup(T){return(s,u)=>{const r=Xe,o=B,i=Le,p=Ee,W=Ae,x=We,V=_e,$=ne,P=ae,C=Z,D=G,S=R,j=U;return c(),k(F,{class:"match-height"},{default:t(()=>[e(_,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Basic",code:at},{default:t(()=>[rt,e(r)]),_:1},8,["code"])]),_:1}),e(_,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Basic Pill",code:st},{default:t(()=>[mt,e(i)]),_:1},8,["code"])]),_:1}),e(_,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Stacked",code:Ye},{default:t(()=>[dt,e(p)]),_:1},8,["code"])]),_:1}),e(_,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Vertical",code:ot},{default:t(()=>[pt,e(W)]),_:1},8,["code"])]),_:1}),e(_,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Vertical Pill",code:nt},{default:t(()=>[bt,e(x)]),_:1},8,["code"])]),_:1}),e(_,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Alignment",code:tt},{default:t(()=>[Tt,e(V)]),_:1},8,["code"])]),_:1}),e(_,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Pagination",code:et},{default:t(()=>[Vt,e($)]),_:1},8,["code"])]),_:1}),e(_,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Custom Icons",code:lt},{default:t(()=>[_t,e(P)]),_:1},8,["code"])]),_:1}),e(_,{cols:"12"},{default:t(()=>[e(o,{title:"Fixed",code:ct},{default:t(()=>[vt,e(C)]),_:1},8,["code"])]),_:1}),e(_,{cols:"12"},{default:t(()=>[e(o,{title:"Grow",code:it},{default:t(()=>[ft,e(D)]),_:1},8,["code"])]),_:1}),e(_,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Programmatic Navigation",code:Ze},{default:t(()=>[e(S)]),_:1},8,["code"])]),_:1}),e(_,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Dynamic",code:ut},{default:t(()=>[gt,e(j)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{qt as default};
