import{$ as _,o as c,c as p,w as n,a as e,aF as w,a9 as C,_ as g,ar as f,a5 as l,a6 as D,at as V,au as U,V as d,e as S,f as s}from"./index.1a258bbd.js";import{V as i}from"./VRating.3682cafe.js";import{V as j}from"./VSlider.cf205e12.js";import{_ as k}from"./AppCardCode.6c8a8473.js";import"./VSliderTrack.f7e90e70.js";import"./vue.runtime.esm-bundler.86261bcd.js";import"./VCard.319647d9.js";const F={__name:"DemoRatingItemSlot",setup(r){const o=_(4.5);return(m,a)=>(c(),p(i,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=t=>o.value=t)},{item:n(t=>[e(C,w(t,{size:25,color:t.isFilled?"success":"secondary",class:"me-3",icon:t.isFilled?"mdi-emoticon-excited-outline":"mdi-emoticon-sad-outline"}),null,16,["color","icon"])]),_:1},8,["modelValue"]))}},I={__name:"DemoRatingIncremented",setup(r){const o=_(4.5);return(m,a)=>(c(),p(i,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=t=>o.value=t),"half-increments":"",hover:""},null,8,["modelValue"]))}},B={};function T(r,o){return c(),p(i,{hover:""})}const L=g(B,[["render",T]]),M={};function N(r,o){return c(),p(i,{readonly:"","model-value":4})}const H=g(M,[["render",N]]),P={};function A(r,o){return c(),p(i,{clearable:""})}const E=g(P,[["render",A]]),q=l("div",{class:"text-caption"}," Custom length ",-1),G={class:"font-weight-semibold mb-0"},J={__name:"DemoRatingLength",setup(r){const o=_(5),m=_(2);return(a,t)=>(c(),f(V,null,[q,e(j,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=u=>o.value=u),min:1,max:7},null,8,["modelValue"]),e(i,{modelValue:m.value,"onUpdate:modelValue":t[1]||(t[1]=u=>m.value=u),length:o.value},null,8,["modelValue","length"]),l("p",G," Model: "+D(m.value),1)],64))}},K={class:"d-flex flex-column"},O={__name:"DemoRatingSize",setup(r){const o=_(4);return(m,a)=>(c(),f("div",K,[e(i,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=t=>o.value=t),size:"x-small"},null,8,["modelValue"]),e(i,{modelValue:o.value,"onUpdate:modelValue":a[1]||(a[1]=t=>o.value=t),size:"small"},null,8,["modelValue"]),e(i,{modelValue:o.value,"onUpdate:modelValue":a[2]||(a[2]=t=>o.value=t)},null,8,["modelValue"]),e(i,{modelValue:o.value,"onUpdate:modelValue":a[3]||(a[3]=t=>o.value=t),size:"large"},null,8,["modelValue"]),e(i,{modelValue:o.value,"onUpdate:modelValue":a[4]||(a[4]=t=>o.value=t),size:"x-large"},null,8,["modelValue"])]))}},Q={class:"d-flex flex-column"},W={__name:"DemoRatingColors",setup(r){const o=_(4),m=["primary","secondary","success","info","warning","error"];return(a,t)=>(c(),f("div",Q,[(c(),f(V,null,U(m,u=>e(i,{key:u,modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=v=>o.value=v),color:u},null,8,["modelValue","color"])),64))]))}},X={};function Y(r,o){return c(),p(i,{density:"compact"})}const Z=g(X,[["render",Y]]),ee={};function te(r,o){return c(),p(i)}const oe=g(ee,[["render",te]]),ne={ts:`<template>
  <VRating />
</template>
`,js:`<template>
  <VRating />
</template>
`},le={ts:`<template>
  <VRating hover />
</template>
`,js:`<template>
  <VRating hover />
</template>
`},ae={ts:`<template>
  <VRating density="compact" />
</template>
`,js:`<template>
  <VRating density="compact" />
</template>
`},se={ts:`<script lang="ts" setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating
    v-model="rating"
    half-increments
    hover
  />
</template>
`,js:`<script setup>

const rating = ref(4.5)
<\/script>

<template>
  <VRating
    v-model="rating"
    half-increments
    hover
  />
</template>
`},ie={ts:`<script lang="ts" setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating v-model="rating">
    <template #item="props">
      <VIcon
        v-bind="props"
        :size="25"
        :color="props.isFilled ? 'success' : 'secondary'"
        class="me-3"
        :icon="props.isFilled ? 'mdi-emoticon-excited-outline' : 'mdi-emoticon-sad-outline'"
      />
    </template>
  </VRating>
</template>
`,js:`<script setup>

const rating = ref(4.5)
<\/script>

<template>
  <VRating v-model="rating">
    <template #item="props">
      <VIcon
        v-bind="props"
        :size="25"
        :color="props.isFilled ? 'success' : 'secondary'"
        class="me-3"
        :icon="props.isFilled ? 'mdi-emoticon-excited-outline' : 'mdi-emoticon-sad-outline'"
      />
    </template>
  </VRating>
</template>
`},ce={ts:`<script lang="ts" setup>
const rating = ref(4)
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-model="rating"
      size="x-small"
    />

    <VRating
      v-model="rating"
      size="small"
    />

    <VRating v-model="rating" />

    <VRating
      v-model="rating"
      size="large"
    />

    <VRating
      v-model="rating"
      size="x-large"
    />
  </div>
</template>
`,js:`<script setup>

const rating = ref(4)
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-model="rating"
      size="x-small"
    />

    <VRating
      v-model="rating"
      size="small"
    />

    <VRating v-model="rating" />

    <VRating
      v-model="rating"
      size="large"
    />

    <VRating
      v-model="rating"
      size="x-large"
    />
  </div>
</template>
`},re={ts:`<template>
  <VRating clearable />
</template>
`,js:`<template>
  <VRating clearable />
</template>
`},de={ts:`<script lang="ts" setup>
const length = ref(5)
const rating = ref(2)
<\/script>

<template>
  <div class="text-caption">
    Custom length
  </div>

  <VSlider
    v-model="length"
    :min="1"
    :max="7"
  />

  <VRating
    v-model="rating"
    :length="length"
  />
  <p class="font-weight-semibold mb-0">
    Model: {{ rating }}
  </p>
</template>
`,js:`<script setup>
const length = ref(5)
const rating = ref(2)
<\/script>

<template>
  <div class="text-caption">
    Custom length
  </div>

  <VSlider
    v-model="length"
    :min="1"
    :max="7"
  />

  <VRating
    v-model="rating"
    :length="length"
  />
  <p class="font-weight-semibold mb-0">
    Model: {{ rating }}
  </p>
</template>
`},me={ts:`<template>
  <VRating
    readonly
    :model-value="4"
  />
</template>
`,js:`<template>
  <VRating
    readonly
    :model-value="4"
  />
</template>
`},ue={ts:`<script lang="ts" setup>
const rating = ref(4)
const ratingColors = ['primary', 'secondary', 'success', 'info', 'warning', 'error']
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-for="color in ratingColors"
      :key="color"
      v-model="rating"
      :color="color"
    />
  </div>
</template>
`,js:`<script setup>
const rating = ref(4)
const ratingColors = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'error'
]
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-for="color in ratingColors"
      :key="color"
      v-model="rating"
      :color="color"
    />
  </div>
</template>
`},pe=l("p",null,[s("The "),l("code",null,"v-rating"),s(" component provides a simple interface for gathering user feedback.")],-1),_e=l("p",null,[s("Control the space occupied by "),l("code",null,"v-rating"),s(" items using the "),l("code",null,"density"),s(" prop.")],-1),ge=l("p",null,[s("The "),l("code",null,"v-rating"),s(" component can be colored as you want, you can set both selected and not selected colors.")],-1),fe=l("p",null,[s("Utilize the same sizing classes available in "),l("code",null,"v-icon"),s(" or provide your own with the "),l("code",null,"size"),s(" prop.")],-1),ve=l("p",null,[s("Change the number of items by modifying the the "),l("code",null,"length"),s(" prop.")],-1),Ve=l("p",null,[s("Use "),l("code",null,"clearable"),s(" prop to allows for the component to be cleared. Triggers when the icon containing the current value is clicked.")],-1),he=l("p",null,[s("For ratings that are not meant to be changed you can use "),l("code",null,"readonly"),s(" prop.")],-1),Re=l("p",null,"Provides visual feedback when hovering over icons",-1),xe=l("p",null,[s("The "),l("code",null,"half-increments"),s(" prop increases the granularity of the ratings, allow for .5 values as well.")],-1),ye=l("p",null,"Slots enable advanced customization possibilities and provide you with more freedom in how you display the rating.",-1),Se={__name:"rating",setup(r){return(o,m)=>{const a=oe,t=k,u=Z,v=W,h=O,R=J,x=E,y=H,b=L,z=I,$=F;return c(),p(S,{class:"match-height"},{default:n(()=>[e(d,{cols:"12",md:"6"},{default:n(()=>[e(t,{title:"Basic",code:ne},{default:n(()=>[pe,e(a)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:n(()=>[e(t,{title:"Density",code:ae},{default:n(()=>[_e,e(u)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:n(()=>[e(t,{title:"Colors",code:ue},{default:n(()=>[ge,e(v)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:n(()=>[e(t,{title:"Size",code:ce},{default:n(()=>[fe,e(h)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:n(()=>[e(t,{title:"Length",code:de},{default:n(()=>[ve,e(R)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:n(()=>[e(t,{title:"Clearable",code:re},{default:n(()=>[Ve,e(x)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:n(()=>[e(t,{title:"Readonly",code:me},{default:n(()=>[he,e(y)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:n(()=>[e(t,{title:"Hover",code:le},{default:n(()=>[Re,e(b)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:n(()=>[e(t,{title:"Incremented",code:se},{default:n(()=>[xe,e(z)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:n(()=>[e(t,{title:"Item slot",code:ie},{default:n(()=>[ye,e($)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Se as default};
