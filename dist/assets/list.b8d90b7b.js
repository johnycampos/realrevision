import{o as n,c as u,w as t,ar as V,au as b,a as e,a9 as _,dn as I,a6 as C,dl as d,at as L,dq as f,a5 as c,al as H,aq as $,am as U,d9 as R,an as F,dx as T,k as D,aa as B,cV as N,f as i,$ as M,aF as A,dF as w,_ as P,dm as k,dp as x,V as h,e as W}from"./index.a1270b37.js";import{V as S}from"./VCheckbox.f7e0499a.js";import{_ as O}from"./AppCardCode.748b95d1.js";import{b as l}from"./VCard.64685768.js";import"./vue.runtime.esm-bundler.cc528c31.js";const q={__name:"DemoListShaped",setup(v){const s=[{text:"Cupcake sesame snaps dessert marzipan.",icon:"mdi-instagram"},{text:"Jelly beans jelly-o gummi bears chupa chups marshmallow.",icon:"mdi-facebook"},{text:"Bonbon macaroon gummies pie jelly",icon:"mdi-twitter"}];return(o,p)=>(n(),u(f,null,{default:t(()=>[(n(),V(L,null,b(s,(a,r)=>e(d,{key:r,value:a,rounded:"shaped"},{prepend:t(()=>[e(_,{icon:a.icon,class:"me-3"},null,8,["icon"])]),default:t(()=>[e(I,{textContent:C(a.text)},null,8,["textContent"])]),_:2},1032,["value"])),64))]),_:1}))}};const K=["innerHTML"],Q={__name:"DemoListThreeLine",setup(v){const s=[{type:"subheader",title:"Today"},{prependAvatar:H,title:"Brunch this weekend?",subtitle:`<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`},{type:"divider",inset:!0},{prependAvatar:$,title:"Summer BBQ",subtitle:`<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`},{type:"divider",inset:!0},{prependAvatar:U,title:"Oui oui",subtitle:'<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?'},{type:"divider",inset:!0},{prependAvatar:R,title:"Birthday gift",subtitle:'<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?'},{type:"divider",inset:!0},{prependAvatar:F,title:"Recipe to try",subtitle:'<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'}];return(o,p)=>(n(),u(f,{id:"three-line-list",lines:"three",items:s,"item-props":"",density:"compact"},{subtitle:t(({subtitle:a})=>[c("div",{innerHTML:a},null,8,K)]),_:1}))}},E=i(" Folders "),Y=i(" Files "),X={__name:"DemoListTwoLinesAndSubheader",setup(v){const s=[{color:"blue",icon:"mdi-clipboard-text",subtitle:"Jan 20, 2014",title:"Vacation itinerary"},{color:"amber",icon:"mdi-gesture-tap-button",subtitle:"Jan 10, 2014",title:"Kitchen remodel"}],o=[{subtitle:"Jan 9, 2014",title:"Photos"},{subtitle:"Jan 17, 2014",title:"Recipes"},{subtitle:"Jan 28, 2014",title:"Work"}];return(p,a)=>(n(),u(f,{lines:"two"},{default:t(()=>[e(T,{inset:""},{default:t(()=>[E]),_:1}),(n(),V(L,null,b(o,r=>e(d,{key:r.title,title:r.title,subtitle:r.subtitle},{prepend:t(()=>[e(D,{color:"secondary",variant:"tonal"},{default:t(()=>[e(_,{size:26,icon:"mdi-folder-outline"})]),_:1})]),append:t(()=>[e(B,{variant:"text",color:"default",icon:"mdi-information-outline"})]),_:2},1032,["title","subtitle"])),64)),e(N,{inset:""}),e(T,{inset:""},{default:t(()=>[Y]),_:1}),(n(),V(L,null,b(s,r=>e(d,{key:r.title,title:r.title,subtitle:r.subtitle},{prepend:t(()=>[e(D,{color:"secondary",variant:"tonal"},{default:t(()=>[e(_,{size:26,icon:r.icon},null,8,["icon"])]),_:2},1024)]),append:t(()=>[e(B,{variant:"text",color:"default",icon:"mdi-information-outline"})]),_:2},1032,["title","subtitle"])),64))]),_:1}))}},Z={__name:"DemoListSubGroup",setup(v){const s=M(["Users","Admin"]),o=[["Management","mdi-account-multiple-outline"],["Settings","mdi-cog-outline"]],p=[["Create","mdi-plus-outline"],["Read","mdi-file-outline"],["Update","mdi-update"],["Delete","mdi-delete-outline"]];return(a,r)=>(n(),u(f,{opened:s.value,"onUpdate:opened":r[0]||(r[0]=m=>s.value=m)},{default:t(()=>[e(d,{title:"Home",value:"Home"},{prepend:t(()=>[e(_,{size:"24",icon:"mdi-home-outline",class:"me-3"})]),_:1}),e(w,{value:"Users"},{activator:t(({props:m})=>[e(d,A(m,{title:"Users"}),{prepend:t(()=>[e(_,{size:"24",icon:"mdi-account-circle-outline",class:"me-3"})]),_:2},1040)]),default:t(()=>[e(w,{value:"Admin"},{activator:t(({props:m})=>[e(d,A(m,{title:"Admin"}),null,16)]),default:t(()=>[(n(),V(L,null,b(o,([m,y],g)=>e(d,{key:g,value:m,title:m},{prepend:t(()=>[e(_,{size:"24",icon:y,class:"me-3"},null,8,["icon"])]),_:2},1032,["value","title"])),64))]),_:1}),e(w,{value:"Actions"},{activator:t(({props:m})=>[e(d,A(m,{title:"Actions"}),null,16)]),default:t(()=>[(n(),V(L,null,b(p,([m,y],g)=>e(d,{key:g,value:m,title:m},{prepend:t(()=>[e(_,{size:"24",icon:y,class:"me-3"},null,8,["icon"])]),_:2},1032,["value","title"])),64))]),_:1})]),_:1})]),_:1},8,["opened"]))}},ee={},te=i("General"),ie=i("Notifications"),ae=i("Notify me about updates to apps or games that I downloaded"),se=i("Sound"),le=i("Auto-update apps at any time. Data charges may apply"),ne=i("Auto-add widgets"),oe=i("Automatically add home screen widgets when downloads complete");function re(v,s){return n(),u(f,{lines:"three",density:"compact","select-strategy":"classic"},{default:t(()=>[e(T,null,{default:t(()=>[te]),_:1}),e(d,{value:"notifications"},{prepend:t(({isActive:o})=>[e(k,{start:""},{default:t(()=>[e(S,{"model-value":o,color:"primary",class:"mt-2"},null,8,["model-value"])]),_:2},1024)]),default:t(()=>[e(I,null,{default:t(()=>[ie]),_:1}),e(x,null,{default:t(()=>[ae]),_:1})]),_:1}),e(d,{value:"sound"},{prepend:t(({isActive:o})=>[e(k,{start:""},{default:t(()=>[e(S,{"model-value":o,color:"primary",class:"mt-2"},null,8,["model-value"])]),_:2},1024)]),default:t(()=>[e(I,null,{default:t(()=>[se]),_:1}),e(x,null,{default:t(()=>[le]),_:1})]),_:1}),e(d,{value:"widgets"},{prepend:t(({isActive:o})=>[e(k,{start:""},{default:t(()=>[e(S,{"model-value":o,color:"primary",class:"mt-2"},null,8,["model-value"])]),_:2},1024)]),default:t(()=>[e(I,null,{default:t(()=>[ne]),_:1}),e(x,null,{default:t(()=>[oe]),_:1})]),_:1})]),_:1})}const me=P(ee,[["render",re]]),de={__name:"DemoListNav",setup(v){const s=[{title:"My Files",value:1,prependIcon:"mdi-folder-outline"},{title:"Shared with me",value:2,prependIcon:"mdi-account-multiple-outline"},{title:"Starred",value:3,prependIcon:"mdi-star-outline"},{title:"Recent",value:4,prependIcon:"mdi-history"},{title:"Offline",value:5,prependIcon:"mdi-check-circle-outline"},{title:"Uploads",value:6,prependIcon:"mdi-upload-outline"},{title:"Backups",value:7,prependIcon:"mdi-cloud-upload-outline"}];return(o,p)=>(n(),u(f,{nav:"",lines:!1},{default:t(()=>[(n(),V(L,null,b(s,a=>e(d,{key:a.value,value:a.value},{prepend:t(()=>[e(_,{icon:a.prependIcon,class:"me-3"},null,8,["icon"])]),default:t(()=>[e(I,null,{default:t(()=>[i(C(a.title),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1}))}},ce={__name:"DemoListDensity",setup(v){const s=[{title:"halvah icing marshmallow",value:1},{title:"Cake caramels donut danish muffin biscuit",value:2},{title:"Chocolate cake pie lollipop",value:3},{title:"Apple pie toffee pudding gummi bears",value:4},{title:"Jujubes chupa chups cheesecake tart",value:5},{title:"Candy fruitcake bonbon sesame snaps dessert",value:6},{title:"Candy wafer tiramisu sugar plum sweet.",value:7},{title:"Toffee gingerbread muffin macaroon cotton candy bonbon lollipop.",value:8}];return(o,p)=>(n(),u(f,{density:"compact",items:s}))}},pe={__name:"DemoListRounded",setup(v){const s=[{title:"Cupcake sesame snaps dessert marzipan.",value:1,prependIcon:"mdi-instagram"},{title:"Jelly beans jelly-o gummi bears chupa chups marshmallow.",value:2,prependIcon:"mdi-facebook"},{title:"Bonbon macaroon gummies pie jelly",value:3,prependIcon:"mdi-twitter"},{title:"halvah icing marshmallow",value:4,prependIcon:"mdi-instagram"}];return(o,p)=>(n(),u(f,null,{default:t(()=>[(n(),V(L,null,b(s,a=>e(d,{key:a.title,value:a.value,rounded:"xl"},{prepend:t(()=>[e(_,{icon:a.prependIcon,class:"me-3"},null,8,["icon"])]),default:t(()=>[e(I,null,{default:t(()=>[i(C(a.title),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1}))}},ue={__name:"DemoListBasic",setup(v){const s=["Cras justo odio","Dapibus ac facilisis in","Morbi leo risus","Porta ac consectetur ac"];return(o,p)=>(n(),u(f,{items:s}))}},ve={ts:`<template>
  <VList
    lines="three"
    density="compact"
    select-strategy="classic"
  >
    <VListSubheader>General</VListSubheader>

    <VListItem value="notifications">
      <template #prepend="{ isActive }">
        <VListItemAction start>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-2"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Notifications</VListItemTitle>
      <VListItemSubtitle>Notify me about updates to apps or games that I downloaded</VListItemSubtitle>
    </VListItem>

    <VListItem value="sound">
      <template #prepend="{ isActive }">
        <VListItemAction start>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-2"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Sound</VListItemTitle>
      <VListItemSubtitle>Auto-update apps at any time. Data charges may apply</VListItemSubtitle>
    </VListItem>

    <VListItem value="widgets">
      <template #prepend="{ isActive }">
        <VListItemAction start>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-2"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Auto-add widgets</VListItemTitle>
      <VListItemSubtitle>Automatically add home screen widgets when downloads complete</VListItemSubtitle>
    </VListItem>
  </VList>
</template>
`,js:`<template>
  <VList
    lines="three"
    density="compact"
    select-strategy="classic"
  >
    <VListSubheader>General</VListSubheader>

    <VListItem value="notifications">
      <template #prepend="{ isActive }">
        <VListItemAction start>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-2"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Notifications</VListItemTitle>
      <VListItemSubtitle>Notify me about updates to apps or games that I downloaded</VListItemSubtitle>
    </VListItem>

    <VListItem value="sound">
      <template #prepend="{ isActive }">
        <VListItemAction start>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-2"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Sound</VListItemTitle>
      <VListItemSubtitle>Auto-update apps at any time. Data charges may apply</VListItemSubtitle>
    </VListItem>

    <VListItem value="widgets">
      <template #prepend="{ isActive }">
        <VListItemAction start>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-2"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Auto-add widgets</VListItemTitle>
      <VListItemSubtitle>Automatically add home screen widgets when downloads complete</VListItemSubtitle>
    </VListItem>
  </VList>
</template>
`},he={ts:`<script lang="ts" setup>
const items = [
  { text: 'Cupcake sesame snaps dessert marzipan.', icon: 'mdi-instagram' },
  { text: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.', icon: 'mdi-facebook' },
  { text: 'Bonbon macaroon gummies pie jelly', icon: 'mdi-twitter' },
]
<\/script>

<template>
  <VList>
    <VListItem
      v-for="(item, i) in items"
      :key="i"
      :value="item"
      rounded="shaped"
    >
      <template #prepend>
        <VIcon
          :icon="item.icon"
          class="me-3"
        />
      </template>
      <!-- eslint-disable-next-line vue/no-v-text-v-html-on-component -->
      <VListItemTitle v-text="item.text" />
    </VListItem>
  </VList>
</template>
`,js:`<script setup>
const items = [
  {
    text: 'Cupcake sesame snaps dessert marzipan.',
    icon: 'mdi-instagram'
  },
  {
    text: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.',
    icon: 'mdi-facebook'
  },
  {
    text: 'Bonbon macaroon gummies pie jelly',
    icon: 'mdi-twitter'
  }
]
<\/script>

<template>
  <VList>
    <VListItem
      v-for="(item, i) in items"
      :key="i"
      :value="item"
      rounded="shaped"
    >
      <template #prepend>
        <VIcon
          :icon="item.icon"
          class="me-3"
        />
      </template>
      <!-- eslint-disable-next-line vue/no-v-text-v-html-on-component -->
      <VListItemTitle v-text="item.text" />
    </VListItem>
  </VList>
</template>
`},_e={ts:`<script lang="ts" setup>
const items = [
  { title: 'halvah icing marshmallow', value: 1 },
  { title: 'Cake caramels donut danish muffin biscuit', value: 2 },
  { title: 'Chocolate cake pie lollipop', value: 3 },
  { title: 'Apple pie toffee pudding gummi bears', value: 4 },
  { title: 'Jujubes chupa chups cheesecake tart', value: 5 },
  { title: 'Candy fruitcake bonbon sesame snaps dessert', value: 6 },
  { title: 'Candy wafer tiramisu sugar plum sweet.', value: 7 },
  { title: 'Toffee gingerbread muffin macaroon cotton candy bonbon lollipop.', value: 8 },
]
<\/script>

<template>
  <VList
    density="compact"
    :items="items"
  />
</template>
`,js:`<script setup>
const items = [
  {
    title: 'halvah icing marshmallow',
    value: 1
  },
  {
    title: 'Cake caramels donut danish muffin biscuit',
    value: 2
  },
  {
    title: 'Chocolate cake pie lollipop',
    value: 3
  },
  {
    title: 'Apple pie toffee pudding gummi bears',
    value: 4
  },
  {
    title: 'Jujubes chupa chups cheesecake tart',
    value: 5
  },
  {
    title: 'Candy fruitcake bonbon sesame snaps dessert',
    value: 6
  },
  {
    title: 'Candy wafer tiramisu sugar plum sweet.',
    value: 7
  },
  {
    title: 'Toffee gingerbread muffin macaroon cotton candy bonbon lollipop.',
    value: 8
  }
]
<\/script>

<template>
  <VList
    density="compact"
    :items="items"
  />
</template>
`},fe={ts:`<script lang="ts" setup>
const items = [
  { title: 'My Files', value: 1, prependIcon: 'mdi-folder-outline' },
  { title: 'Shared with me', value: 2, prependIcon: 'mdi-account-multiple-outline' },
  { title: 'Starred', value: 3, prependIcon: 'mdi-star-outline' },
  { title: 'Recent', value: 4, prependIcon: 'mdi-history' },
  { title: 'Offline', value: 5, prependIcon: 'mdi-check-circle-outline' },
  { title: 'Uploads', value: 6, prependIcon: 'mdi-upload-outline' },
  { title: 'Backups', value: 7, prependIcon: 'mdi-cloud-upload-outline' },
]
<\/script>

<template>
  <VList
    nav
    :lines="false"
  >
    <VListItem
      v-for="item in items"
      :key="item.value"
      :value="item.value"
    >
      <template #prepend>
        <VIcon
          :icon="item.prependIcon"
          class="me-3"
        />
      </template>

      <VListItemTitle>
        {{ item.title }}
      </VListItemTitle>
    </VListItem>
  </VList>
</template>
`,js:`<script setup>
const items = [
  {
    title: 'My Files',
    value: 1,
    prependIcon: 'mdi-folder-outline'
  },
  {
    title: 'Shared with me',
    value: 2,
    prependIcon: 'mdi-account-multiple-outline'
  },
  {
    title: 'Starred',
    value: 3,
    prependIcon: 'mdi-star-outline'
  },
  {
    title: 'Recent',
    value: 4,
    prependIcon: 'mdi-history'
  },
  {
    title: 'Offline',
    value: 5,
    prependIcon: 'mdi-check-circle-outline'
  },
  {
    title: 'Uploads',
    value: 6,
    prependIcon: 'mdi-upload-outline'
  },
  {
    title: 'Backups',
    value: 7,
    prependIcon: 'mdi-cloud-upload-outline'
  }
]
<\/script>

<template>
  <VList
    nav
    :lines="false"
  >
    <VListItem
      v-for="item in items"
      :key="item.value"
      :value="item.value"
    >
      <template #prepend>
        <VIcon
          :icon="item.prependIcon"
          class="me-3"
        />
      </template>

      <VListItemTitle>
        {{ item.title }}
      </VListItemTitle>
    </VListItem>
  </VList>
</template>
`},Ve={ts:`<script lang="ts" setup>
import avatar1 from '@/assets/images/avatars/avatar-1.png'
import avatar2 from '@/assets/images/avatars/avatar-2.png'
import avatar3 from '@/assets/images/avatars/avatar-3.png'
import avatar4 from '@/assets/images/avatars/avatar-4.png'
import avatar5 from '@/assets/images/avatars/avatar-5.png'

const items = [
  { type: 'subheader', title: 'Today' },
  {
    prependAvatar: avatar1,
    title: 'Brunch this weekend?',
    subtitle: '<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?',
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: avatar2,
    title: 'Summer BBQ',
    subtitle: '<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.',
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: avatar3,
    title: 'Oui oui',
    subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: avatar4,
    title: 'Birthday gift',
    subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: avatar5,
    title: 'Recipe to try',
    subtitle: '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
  },
]
<\/script>

<template>
  <VList
    id="three-line-list"
    lines="three"
    :items="items"
    item-props
    density="compact"
  >
    <template #subtitle="{ subtitle }">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="subtitle" />
    </template>
  </VList>
</template>

<style lang="scss">
#three-line-list {
  .v-list-item-title {
    margin-block-end: 0.25rem;
  }

  .v-divider {
    margin-block: 0.25rem;
  }
}
</style>
`,js:`<script setup>
import avatar1 from '@/assets/images/avatars/avatar-1.png'
import avatar2 from '@/assets/images/avatars/avatar-2.png'
import avatar3 from '@/assets/images/avatars/avatar-3.png'
import avatar4 from '@/assets/images/avatars/avatar-4.png'
import avatar5 from '@/assets/images/avatars/avatar-5.png'

const items = [
  {
    type: 'subheader',
    title: 'Today'
  },
  {
    prependAvatar: avatar1,
    title: 'Brunch this weekend?',
    subtitle: '<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?'
  },
  {
    type: 'divider',
    inset: true
  },
  {
    prependAvatar: avatar2,
    title: 'Summer BBQ',
    subtitle: '<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.'
  },
  {
    type: 'divider',
    inset: true
  },
  {
    prependAvatar: avatar3,
    title: 'Oui oui',
    subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?'
  },
  {
    type: 'divider',
    inset: true
  },
  {
    prependAvatar: avatar4,
    title: 'Birthday gift',
    subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?'
  },
  {
    type: 'divider',
    inset: true
  },
  {
    prependAvatar: avatar5,
    title: 'Recipe to try',
    subtitle: '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'
  }
]
<\/script>

<template>
  <VList
    id="three-line-list"
    lines="three"
    :items="items"
    item-props
    density="compact"
  >
    <template #subtitle="{ subtitle }">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="subtitle" />
    </template>
  </VList>
</template>

<style lang="scss">
#three-line-list {
  .v-list-item-title {
    margin-block-end: 0.25rem;
  }

  .v-divider {
    margin-block: 0.25rem;
  }
}
</style>
`},be={ts:`<script setup lang="ts">
const items = ['Cras justo odio', 'Dapibus ac facilisis in', 'Morbi leo risus', 'Porta ac consectetur ac']
<\/script>

<template>
  <VList :items="items" />
</template>
`,js:`<script setup>
const items = [
  'Cras justo odio',
  'Dapibus ac facilisis in',
  'Morbi leo risus',
  'Porta ac consectetur ac'
]
<\/script>

<template>
  <VList :items="items" />
</template>
`},Le={ts:`<script lang="ts" setup>
const files = [
  {
    color: 'blue',
    icon: 'mdi-clipboard-text',
    subtitle: 'Jan 20, 2014',
    title: 'Vacation itinerary',
  },
  {
    color: 'amber',
    icon: 'mdi-gesture-tap-button',
    subtitle: 'Jan 10, 2014',
    title: 'Kitchen remodel',
  },
]
const folders = [
  {
    subtitle: 'Jan 9, 2014',
    title: 'Photos',
  },
  {
    subtitle: 'Jan 17, 2014',
    title: 'Recipes',
  },
  {
    subtitle: 'Jan 28, 2014',
    title: 'Work',
  },
]
<\/script>

<template>
  <VList lines="two">
    <VListSubheader inset>
      Folders
    </VListSubheader>

    <VListItem
      v-for="folder in folders"
      :key="folder.title"
      :title="folder.title"
      :subtitle="folder.subtitle"
    >
      <template #prepend>
        <VAvatar
          color="secondary"
          variant="tonal"
        >
          <VIcon
            :size="26"
            icon="mdi-folder-outline"
          />
        </VAvatar>
      </template>

      <template #append>
        <VBtn
          variant="text"
          color="default"
          icon="mdi-information-outline"
        />
      </template>
    </VListItem>

    <VDivider inset />

    <VListSubheader inset>
      Files
    </VListSubheader>

    <VListItem
      v-for="file in files"
      :key="file.title"
      :title="file.title"
      :subtitle="file.subtitle"
    >
      <template #prepend>
        <VAvatar
          color="secondary"
          variant="tonal"
        >
          <VIcon
            :size="26"
            :icon="file.icon"
          />
        </VAvatar>
      </template>

      <template #append>
        <VBtn
          variant="text"
          color="default"
          icon="mdi-information-outline"
        />
      </template>
    </VListItem>
  </VList>
</template>
`,js:`<script setup>
const files = [
  {
    color: 'blue',
    icon: 'mdi-clipboard-text',
    subtitle: 'Jan 20, 2014',
    title: 'Vacation itinerary'
  },
  {
    color: 'amber',
    icon: 'mdi-gesture-tap-button',
    subtitle: 'Jan 10, 2014',
    title: 'Kitchen remodel'
  }
]
const folders = [
  {
    subtitle: 'Jan 9, 2014',
    title: 'Photos'
  },
  {
    subtitle: 'Jan 17, 2014',
    title: 'Recipes'
  },
  {
    subtitle: 'Jan 28, 2014',
    title: 'Work'
  }
]
<\/script>

<template>
  <VList lines="two">
    <VListSubheader inset>
      Folders
    </VListSubheader>

    <VListItem
      v-for="folder in folders"
      :key="folder.title"
      :title="folder.title"
      :subtitle="folder.subtitle"
    >
      <template #prepend>
        <VAvatar
          color="secondary"
          variant="tonal"
        >
          <VIcon
            :size="26"
            icon="mdi-folder-outline"
          />
        </VAvatar>
      </template>

      <template #append>
        <VBtn
          variant="text"
          color="default"
          icon="mdi-information-outline"
        />
      </template>
    </VListItem>

    <VDivider inset />

    <VListSubheader inset>
      Files
    </VListSubheader>

    <VListItem
      v-for="file in files"
      :key="file.title"
      :title="file.title"
      :subtitle="file.subtitle"
    >
      <template #prepend>
        <VAvatar
          color="secondary"
          variant="tonal"
        >
          <VIcon
            :size="26"
            :icon="file.icon"
          />
        </VAvatar>
      </template>

      <template #append>
        <VBtn
          variant="text"
          color="default"
          icon="mdi-information-outline"
        />
      </template>
    </VListItem>
  </VList>
</template>
`},Ie={ts:`<script lang="ts" setup>
const open = ref(['Users', 'Admin'])

const admins = [
  ['Management', 'mdi-account-multiple-outline'],
  ['Settings', 'mdi-cog-outline'],
]
const cruds = [
  ['Create', 'mdi-plus-outline'],
  ['Read', 'mdi-file-outline'],
  ['Update', 'mdi-update'],
  ['Delete', 'mdi-delete-outline'],
]
<\/script>

<template>
  <VList v-model:opened="open">
    <VListItem
      title="Home"
      value="Home"
    >
      <template #prepend>
        <VIcon
          size="24"
          icon="mdi-home-outline"
          class="me-3"
        />
      </template>
    </VListItem>

    <VListGroup value="Users">
      <template #activator="{ props }">
        <VListItem
          v-bind="props"
          title="Users"
        >
          <template #prepend>
            <VIcon
              size="24"
              icon="mdi-account-circle-outline"
              class="me-3"
            />
          </template>
        </VListItem>
      </template>

      <VListGroup value="Admin">
        <template #activator="{ props }">
          <VListItem
            v-bind="props"
            title="Admin"
          />
        </template>

        <VListItem
          v-for="([title, icon], i) in admins"
          :key="i"
          :value="title"
          :title="title"
        >
          <template #prepend>
            <VIcon
              size="24"
              :icon="icon"
              class="me-3"
            />
          </template>
        </VListItem>
      </VListGroup>

      <VListGroup value="Actions">
        <template #activator="{ props }">
          <VListItem
            v-bind="props"
            title="Actions"
          />
        </template>

        <VListItem
          v-for="([title, icon], i) in cruds"
          :key="i"
          :value="title"
          :title="title"
        >
          <template #prepend>
            <VIcon
              size="24"
              :icon="icon"
              class="me-3"
            />
          </template>
        </VListItem>
      </VListGroup>
    </VListGroup>
  </VList>
</template>
`,js:`<script setup>
const open = ref([
  'Users',
  'Admin'
])
const admins = [
  [
    'Management',
    'mdi-account-multiple-outline'
  ],
  [
    'Settings',
    'mdi-cog-outline'
  ]
]
const cruds = [
  [
    'Create',
    'mdi-plus-outline'
  ],
  [
    'Read',
    'mdi-file-outline'
  ],
  [
    'Update',
    'mdi-update'
  ],
  [
    'Delete',
    'mdi-delete-outline'
  ]
]
<\/script>

<template>
  <VList v-model:opened="open">
    <VListItem
      title="Home"
      value="Home"
    >
      <template #prepend>
        <VIcon
          size="24"
          icon="mdi-home-outline"
          class="me-3"
        />
      </template>
    </VListItem>

    <VListGroup value="Users">
      <template #activator="{ props }">
        <VListItem
          v-bind="props"
          title="Users"
        >
          <template #prepend>
            <VIcon
              size="24"
              icon="mdi-account-circle-outline"
              class="me-3"
            />
          </template>
        </VListItem>
      </template>

      <VListGroup value="Admin">
        <template #activator="{ props }">
          <VListItem
            v-bind="props"
            title="Admin"
          />
        </template>

        <VListItem
          v-for="([title, icon], i) in admins"
          :key="i"
          :value="title"
          :title="title"
        >
          <template #prepend>
            <VIcon
              size="24"
              :icon="icon"
              class="me-3"
            />
          </template>
        </VListItem>
      </VListGroup>

      <VListGroup value="Actions">
        <template #activator="{ props }">
          <VListItem
            v-bind="props"
            title="Actions"
          />
        </template>

        <VListItem
          v-for="([title, icon], i) in cruds"
          :key="i"
          :value="title"
          :title="title"
        >
          <template #prepend>
            <VIcon
              size="24"
              :icon="icon"
              class="me-3"
            />
          </template>
        </VListItem>
      </VListGroup>
    </VListGroup>
  </VList>
</template>
`},ye={ts:`<script lang="ts" setup>
const items = [
  {
    title: 'Cupcake sesame snaps dessert marzipan.',
    value: 1,
    prependIcon: 'mdi-instagram',

  },
  {
    title: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.',
    value: 2,
    prependIcon: 'mdi-facebook',
  },
  {
    title: 'Bonbon macaroon gummies pie jelly',
    value: 3,
    prependIcon: 'mdi-twitter',
  },
  {
    title: 'halvah icing marshmallow',
    value: 4,
    prependIcon: 'mdi-instagram',
  },
]
<\/script>

<template>
  <VList>
    <VListItem
      v-for="item in items"
      :key="item.title"
      :value="item.value"
      rounded="xl"
    >
      <template #prepend>
        <VIcon
          :icon="item.prependIcon"
          class="me-3"
        />
      </template>

      <VListItemTitle>
        {{ item.title }}
      </VListItemTitle>
    </VListItem>
  </VList>
</template>
`,js:`<script setup>
const items = [
  {
    title: 'Cupcake sesame snaps dessert marzipan.',
    value: 1,
    prependIcon: 'mdi-instagram'
  },
  {
    title: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.',
    value: 2,
    prependIcon: 'mdi-facebook'
  },
  {
    title: 'Bonbon macaroon gummies pie jelly',
    value: 3,
    prependIcon: 'mdi-twitter'
  },
  {
    title: 'halvah icing marshmallow',
    value: 4,
    prependIcon: 'mdi-instagram'
  }
]
<\/script>

<template>
  <VList>
    <VListItem
      v-for="item in items"
      :key="item.title"
      :value="item.value"
      rounded="xl"
    >
      <template #prepend>
        <VIcon
          :icon="item.prependIcon"
          class="me-3"
        />
      </template>

      <VListItemTitle>
        {{ item.title }}
      </VListItemTitle>
    </VListItem>
  </VList>
</template>
`},ge=c("code",null,"v-list",-1),Ae=i(" component can contain an avatar, content, actions and much more."),we=i("You can make "),ke=c("code",null,"v-list-item",-1),xe=i(" rounded using "),Se=c("code",null,"rounded",-1),Te=i(" prop."),Ce=i("Use "),De=c("code",null,"density",-1),Be=i(" prop to adjusts the spacing within the component. Available options are: "),je=c("code",null,"default",-1),Je=i(", "),ze=c("code",null,"comfortable",-1),Ge=i(", and "),He=c("code",null,"compact",-1),$e=i("."),Ue=i("Lists can receive an alternative "),Re=c("code",null,"nav",-1),Fe=i(" styling that reduces the width "),Ne=c("code",null,"v-list-item",-1),Me=i(" takes up as well as adding a border radius."),Pe=i("A "),We=c("code",null,"three-line",-1),Oe=i(" list with actions. Utilizing "),qe=c("code",null,"v-list-group",-1),Ke=i(", easily connect actions to your tiles."),Qe=i(" Using the "),Ee=c("code",null,"v-list-group",-1),Ye=i(" component you can create up to 2 levels in depth using the sub-group prop. "),Xe=i("Lists can contain subheaders, dividers, and can contain 1 or more lines. The subtitle will overflow with ellipsis if it extends past one line."),Ze=i("For three line lists, the subtitle will clamp vertically at 2 lines and then ellipsis. This feature uses line-clamp and is not supported in all browsers."),et=i(" Shaped lists have rounded borders on one side of the "),tt=c("code",null,"v-list-item",-1),it=i(". "),rt={__name:"list",setup(v){return(s,o)=>{const p=ue,a=O,r=pe,m=ce,y=de,g=me,j=Z,J=X,z=Q,G=q;return n(),u(W,{class:"match-height"},{default:t(()=>[e(h,{cols:"12",md:"6"},{default:t(()=>[e(a,{title:"Basic","no-padding":"",code:be},{default:t(()=>[e(l,null,{default:t(()=>[ge,Ae]),_:1}),e(l,null,{default:t(()=>[e(p)]),_:1})]),_:1},8,["code"])]),_:1}),e(h,{cols:"12",md:"6"},{default:t(()=>[e(a,{title:"Rounded","no-padding":"",code:ye},{default:t(()=>[e(l,null,{default:t(()=>[we,ke,xe,Se,Te]),_:1}),e(l,null,{default:t(()=>[e(r)]),_:1})]),_:1},8,["code"])]),_:1}),e(h,{cols:"12",md:"6"},{default:t(()=>[e(a,{title:"Density",code:_e,"no-padding":""},{default:t(()=>[e(l,null,{default:t(()=>[Ce,De,Be,je,Je,ze,Ge,He,$e]),_:1}),e(l,null,{default:t(()=>[e(m)]),_:1})]),_:1},8,["code"])]),_:1}),e(h,{cols:"12",md:"6"},{default:t(()=>[e(a,{title:"Nav","no-padding":"",code:fe},{default:t(()=>[e(l,null,{default:t(()=>[Ue,Re,Fe,Ne,Me]),_:1}),e(l,null,{default:t(()=>[e(y)]),_:1})]),_:1},8,["code"])]),_:1}),e(h,{cols:"12",md:"6"},{default:t(()=>[e(a,{title:"Action and item group","no-padding":"",code:ve},{default:t(()=>[e(l,null,{default:t(()=>[Pe,We,Oe,qe,Ke]),_:1}),e(l,null,{default:t(()=>[e(g)]),_:1})]),_:1},8,["code"])]),_:1}),e(h,{cols:"12",md:"6"},{default:t(()=>[e(a,{title:"Sub Group","no-padding":"",code:Ie},{default:t(()=>[e(l,null,{default:t(()=>[Qe,Ee,Ye]),_:1}),e(l,null,{default:t(()=>[e(j)]),_:1})]),_:1},8,["code"])]),_:1}),e(h,{cols:"12",md:"6"},{default:t(()=>[e(a,{title:"Two lines and subheader","no-padding":"",code:Le},{default:t(()=>[e(l,null,{default:t(()=>[Xe]),_:1}),e(l,null,{default:t(()=>[e(J)]),_:1})]),_:1},8,["code"])]),_:1}),e(h,{cols:"12",md:"6"},{default:t(()=>[e(a,{title:"Three Line","no-padding":"",code:Ve},{default:t(()=>[e(l,null,{default:t(()=>[Ze]),_:1}),e(l,null,{default:t(()=>[e(z)]),_:1})]),_:1},8,["code"])]),_:1}),e(h,{cols:"12",md:"6"},{default:t(()=>[e(a,{title:"Shaped","no-padding":"",code:he},{default:t(()=>[e(l,null,{default:t(()=>[et,tt,it]),_:1}),e(l,null,{default:t(()=>[e(G)]),_:1})]),_:1},8,["code"])]),_:1})]),_:1})}}};export{rt as default};
