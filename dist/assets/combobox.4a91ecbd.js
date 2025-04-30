import{V as u}from"./VCombobox.8321e1e0.js";import{$ as r,o as d,c as p,a0 as h,ak as x,w as s,a as e,dn as y,a5 as a,a6 as g,dl as I,f as i,V as n,cZ as P,k as D,e as f}from"./index.1a258bbd.js";import{_ as w}from"./AppCardCode.6c8a8473.js";import"./filter.e9e303b2.js";import"./vue.runtime.esm-bundler.86261bcd.js";import"./VCard.319647d9.js";const U={__name:"DemoComboboxClearable",setup(V){const o=r(["Vuetify","Programming"]),m=["Programming","Design","Vue","Vuetify"];return(c,t)=>(d(),p(u,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=l=>o.value=l),items:m,label:"Combobox",multiple:"",clearable:""},null,8,["modelValue"]))}},L=i(' No results matching "'),k=i('". Press '),A=a("kbd",null,"enter",-1),$=i(" to create a new one "),N={__name:"DemoComboboxNoDataWithChips",setup(V){const o=["Gaming","Programming","Vue","Vuetify"],m=r(["Vuetify"]),c=r(null);return h(m,t=>{t.length>5&&x(()=>m.value.pop())}),(t,l)=>(d(),p(u,{modelValue:m.value,"onUpdate:modelValue":l[0]||(l[0]=b=>m.value=b),"search-input":c.value,"onUpdate:search-input":l[1]||(l[1]=b=>c.value=b),items:o,"hide-selected":"","hide-no-data":!1,hint:"Maximum of 5 tags",label:"Add some tags",multiple:"","persistent-hint":"","small-chips":""},{"no-data":s(()=>[e(I,null,{default:s(()=>[e(y,null,{default:s(()=>[L,a("strong",null,g(c.value),1),k,A,$]),_:1})]),_:1})]),_:1},8,["modelValue","search-input"]))}},R={__name:"DemoComboboxMultiple",setup(V){const o=r(["Vuetify","Programming"]),m=["Programming","Design","Vue","Vuetify"];return(c,t)=>(d(),p(f,null,{default:s(()=>[e(n,{cols:"12"},{default:s(()=>[e(u,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=l=>o.value=l),items:m,label:"Select a favorite activity or create a new one",multiple:""},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:s(()=>[e(u,{modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=l=>o.value=l),items:m,label:"I use chips",multiple:"",chips:""},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:s(()=>[e(u,{modelValue:o.value,"onUpdate:modelValue":t[2]||(t[2]=l=>o.value=l),label:"I'm readonly",chips:"",multiple:"",readonly:""},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:s(()=>[e(u,{modelValue:o.value,"onUpdate:modelValue":t[3]||(t[3]=l=>o.value=l),items:m,label:"I use selection slot",multiple:""},{selection:s(({item:l})=>[e(P,{class:"mt-1"},{default:s(()=>[e(D,{start:"",color:"primary"},{default:s(()=>[i(g(String(l.title).charAt(0).toUpperCase()),1)]),_:2},1024),i(" "+g(l.title),1)]),_:2},1024)]),_:1},8,["modelValue"])]),_:1})]),_:1}))}},T={__name:"DemoComboboxVariant",setup(V){const o=r(["Programming"]),m=["Programming","Design","Vue","Vuetify"];return(c,t)=>(d(),p(f,null,{default:s(()=>[e(n,{cols:"12"},{default:s(()=>[e(u,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=l=>o.value=l),items:m,multiple:"",chips:"",variant:"solo",label:"solo"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:s(()=>[e(u,{modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=l=>o.value=l),multiple:"",chips:"",items:m,variant:"outlined",label:"Outlined"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:s(()=>[e(u,{modelValue:o.value,"onUpdate:modelValue":t[2]||(t[2]=l=>o.value=l),multiple:"",chips:"",items:m,variant:"underlined",label:"Underlined"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:s(()=>[e(u,{modelValue:o.value,"onUpdate:modelValue":t[3]||(t[3]=l=>o.value=l),multiple:"",chips:"",items:m,variant:"filled",label:"Filled"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:s(()=>[e(u,{modelValue:o.value,"onUpdate:modelValue":t[4]||(t[4]=l=>o.value=l),multiple:"",chips:"",items:m,variant:"plain",label:"Plain"},null,8,["modelValue"])]),_:1})]),_:1}))}},S={__name:"DemoComboboxDensity",setup(V){const o=r(["Vuetify","Programming"]),m=["Programming","Design","Vue","Vuetify"];return(c,t)=>(d(),p(u,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=l=>o.value=l),items:m,label:"Combobox",density:"compact",multiple:""},null,8,["modelValue"]))}},j={__name:"DemoComboboxBasic",setup(V){const o=r("Programming"),m=["Programming","Design","Vue","Vuetify"];return(c,t)=>(d(),p(u,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=l=>o.value=l),items:m},null,8,["modelValue"]))}},B={ts:`<script lang="ts" setup>
const selectedItem = ref('Programming')
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VCombobox
    v-model="selectedItem"
    :items="items"
  />
</template>
`,js:`<script setup>
const selectedItem = ref('Programming')
const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify'
]
<\/script>

<template>
  <VCombobox
    v-model="selectedItem"
    :items="items"
  />
</template>
`},M={ts:`<script lang="ts" setup>
const select = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    multiple
    clearable
  />
</template>
`,js:`<script setup>
const select = ref([
  'Vuetify',
  'Programming'
])
const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify'
]
<\/script>

<template>
  <VCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    multiple
    clearable
  />
</template>
`},W={ts:`<script lang="ts" setup>
const selectedItem = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        label="Select a favorite activity or create a new one"
        multiple
      />
    </VCol>

    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        label="I use chips"
        multiple
        chips
      />
    </VCol>

    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        label="I'm readonly"
        chips
        multiple
        readonly
      />
    </VCol>

    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        label="I use selection slot"
        multiple
      >
        <template #selection="{ item }">
          <VChip class="mt-1">
            <VAvatar
              start
              color="primary"
            >
              {{ String(item.title).charAt(0).toUpperCase() }}
            </VAvatar>
            {{ item.title }}
          </VChip>
        </template>
      </VCombobox>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const selectedItem = ref([
  'Vuetify',
  'Programming'
])
const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify'
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        label="Select a favorite activity or create a new one"
        multiple
      />
    </VCol>

    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        label="I use chips"
        multiple
        chips
      />
    </VCol>

    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        label="I'm readonly"
        chips
        multiple
        readonly
      />
    </VCol>

    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        label="I use selection slot"
        multiple
      >
        <template #selection="{ item }">
          <VChip class="mt-1">
            <VAvatar
              start
              color="primary"
            >
              {{ String(item.title).charAt(0).toUpperCase() }}
            </VAvatar>
            {{ item.title }}
          </VChip>
        </template>
      </VCombobox>
    </VCol>
  </VRow>
</template>
`},F={ts:`<script lang="ts" setup>
const select = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    density="compact"
    multiple
  />
</template>
`,js:`<script setup>
const select = ref([
  'Vuetify',
  'Programming'
])
const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify'
]
<\/script>

<template>
  <VCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    density="compact"
    multiple
  />
</template>
`},G={ts:`<script lang="ts" setup>
const selectedItem = ref(['Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        multiple
        chips
        variant="solo"
        label="solo"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        variant="outlined"
        label="Outlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        variant="underlined"
        label="Underlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        variant="filled"
        label="Filled"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        variant="plain"
        label="Plain"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const selectedItem = ref(['Programming'])
const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify'
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        multiple
        chips
        variant="solo"
        label="solo"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        variant="outlined"
        label="Outlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        variant="underlined"
        label="Underlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        variant="filled"
        label="Filled"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        variant="plain"
        label="Plain"
      />
    </VCol>
  </VRow>
</template>
`},O={ts:`<script lang="ts" setup>
const items = ['Gaming', 'Programming', 'Vue', 'Vuetify']
const selectedList = ref(['Vuetify'])
const search = ref(null)

watch(selectedList, value => {
  if (value.length > 5)
    nextTick(() => selectedList.value.pop())
})
<\/script>

<template>
  <VCombobox
    v-model="selectedList"
    v-model:search-input="search"
    :items="items"
    hide-selected
    :hide-no-data="false"
    hint="Maximum of 5 tags"
    label="Add some tags"
    multiple
    persistent-hint
    small-chips
  >
    <template #no-data>
      <VListItem>
        <VListItemTitle>
          No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
        </VListItemTitle>
      </VListItem>
    </template>
  </VCombobox>
</template>
`,js:`<script setup>
const items = [
  'Gaming',
  'Programming',
  'Vue',
  'Vuetify'
]
const selectedList = ref(['Vuetify'])
const search = ref(null)
watch(selectedList, value => {
  if (value.length > 5)
    nextTick(() => selectedList.value.pop())
})
<\/script>

<template>
  <VCombobox
    v-model="selectedList"
    v-model:search-input="search"
    :items="items"
    hide-selected
    :hide-no-data="false"
    hint="Maximum of 5 tags"
    label="Add some tags"
    multiple
    persistent-hint
    small-chips
  >
    <template #no-data>
      <VListItem>
        <VListItemTitle>
          No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
        </VListItemTitle>
      </VListItem>
    </template>
  </VCombobox>
</template>
`},Y=a("p",null,"With Combobox, you can allow a user to create new values that may not be present in a provided items list.",-1),Z=a("p",null,[i(" You can use "),a("code",null,"Density"),i(" prop to reduce combobox height and lower max height of list items. Available options are: "),a("code",null,"default"),i(", "),a("code",null,"comfortable"),i(", and "),a("code",null,"compact"),i(". ")],-1),q=a("p",null,[i("Use "),a("code",null,"solo"),i(", "),a("code",null,"outlined"),i(", "),a("code",null,"underlined"),i(", "),a("code",null,"filled"),i(" and "),a("code",null,"plain"),i(" options of "),a("code",null,"variant"),i(" prop to change the look of combobox. ")],-1),z=a("p",null,"Previously known as tags - user is allowed to enter more than 1 value",-1),E=a("p",null,"Previously known as tags - user is allowed to enter more than 1 value",-1),H=a("p",null,[i("Use "),a("code",null,"clearable"),i(" prop to clear combobox.")],-1),le={__name:"combobox",setup(V){return(o,m)=>{const c=j,t=w,l=S,b=T,C=R,v=N,_=U;return d(),p(f,{class:"match-height"},{default:s(()=>[e(n,{cols:"12",md:"6"},{default:s(()=>[e(t,{title:"Basic",code:B},{default:s(()=>[Y,e(c)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:s(()=>[e(t,{title:"Density",code:F},{default:s(()=>[Z,e(l)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:s(()=>[e(t,{title:"Variant",code:G},{default:s(()=>[q,e(b)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:s(()=>[e(t,{title:"Multiple",code:W},{default:s(()=>[z,e(C)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:s(()=>[e(t,{title:"No data with chips",code:O},{default:s(()=>[E,e(v)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:s(()=>[e(t,{title:"Clearable",code:M},{default:s(()=>[H,e(_)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{le as default};
