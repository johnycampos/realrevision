import{m as q,u as E,V as H,a as z,g as L}from"./VSliderTrack.cdae96f7.js";import{g as J,d1 as K,ay as Q,$ as _,aV as X,d2 as Z,O,u as ee,aC as le,a,aF as ae,aG as te,o as g,c as S,w as n,a9 as se,V as k,e as oe,a5 as i,f as d}from"./index.a1270b37.js";import{_ as ue}from"./AppCardCode.748b95d1.js";import"./vue.runtime.esm-bundler.cc528c31.js";import"./VCard.64685768.js";const $=J({name:"VRangeSlider",props:{...K(),...Q(),...q(),strict:Boolean,modelValue:{type:Array,default:()=>[0,0]}},emits:{"update:focused":s=>!0,"update:modelValue":s=>!0},setup(s,o){let{slots:r}=o;const e=_(),l=_(),R=_();function b(u){if(!e.value||!l.value)return;const m=L(u,e.value.$el,s.direction),v=L(u,l.value.$el,s.direction),f=Math.abs(m),V=Math.abs(v);return f<V||f===V&&m<0?e.value.$el:l.value.$el}const{activeThumbRef:c,hasLabels:C,max:T,min:M,mousePressed:A,onSliderMousedown:N,onSliderTouchstart:W,position:B,roundValue:Y,trackContainerRef:G}=E({props:s,handleSliderMouseUp:u=>{var m;t.value=c.value===((m=e.value)==null?void 0:m.$el)?[u,t.value[1]]:[t.value[0],u]},handleMouseMove:u=>{var m;const[v,f]=t.value;if(!s.strict&&v===f&&v!==M.value){var V,h,p;c.value=u>v?(V=l.value)==null?void 0:V.$el:(h=e.value)==null?void 0:h.$el,(p=c.value)==null||p.focus()}c.value===((m=e.value)==null?void 0:m.$el)?t.value=[Math.min(u,f),f]:t.value=[v,Math.max(v,u)]},getActiveThumb:b}),t=X(s,"modelValue",void 0,u=>!u||!u.length?[0,0]:u.map(m=>Y(m))),{isFocused:U,focus:F,blur:P}=Z(s),j=O(()=>B(t.value[0])),I=O(()=>B(t.value[1]));return ee(()=>{const[u,m]=le(s);return a(te,ae({class:["v-slider","v-range-slider",{"v-slider--has-labels":!!r["tick-label"]||C.value,"v-slider--focused":U.value,"v-slider--pressed":A.value,"v-slider--disabled":s.disabled}],ref:R},u,{focused:U.value}),{...r,default:v=>{var f,V;let{id:h}=v;return a("div",{class:"v-slider__container",onMousedown:N,onTouchstartPassive:W},[a("input",{id:`${h.value}_start`,name:s.name||h.value,disabled:s.disabled,readonly:s.readonly,tabindex:"-1",value:t.value[0]},null),a("input",{id:`${h.value}_stop`,name:s.name||h.value,disabled:s.disabled,readonly:s.readonly,tabindex:"-1",value:t.value[1]},null),a(H,{ref:G,start:j.value,stop:I.value},{"tick-label":r["tick-label"]}),a(z,{ref:e,focused:U&&c.value===((f=e.value)==null?void 0:f.$el),modelValue:t.value[0],"onUpdate:modelValue":p=>t.value=[p,t.value[1]],onFocus:p=>{var x,w;if(F(),c.value=(x=e.value)==null?void 0:x.$el,t.value[0]===t.value[1]&&t.value[1]===M.value&&p.relatedTarget!==((w=l.value)==null?void 0:w.$el)){var y,D;(y=e.value)==null||y.$el.blur(),(D=l.value)==null||D.$el.focus()}},onBlur:()=>{P(),c.value=void 0},min:M.value,max:t.value[1],position:j.value},{"thumb-label":r["thumb-label"]}),a(z,{ref:l,focused:U&&c.value===((V=l.value)==null?void 0:V.$el),modelValue:t.value[1],"onUpdate:modelValue":p=>t.value=[t.value[0],p],onFocus:p=>{var x,w;if(F(),c.value=(x=l.value)==null?void 0:x.$el,t.value[0]===t.value[1]&&t.value[0]===T.value&&p.relatedTarget!==((w=e.value)==null?void 0:w.$el)){var y,D;(y=l.value)==null||y.$el.blur(),(D=e.value)==null||D.$el.focus()}},onBlur:()=>{P(),c.value=void 0},min:t.value[0],max:T.value,position:I.value},{"thumb-label":r["thumb-label"]})])}})}),{}}}),ne={__name:"DemoRangeSliderVertical",setup(s){const o=_([20,40]);return(r,e)=>(g(),S($,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=l=>o.value=l),direction:"vertical"},null,8,["modelValue"]))}},ie={__name:"DemoRangeSliderThumbLabel",setup(s){const o=["Winter","Spring","Summer","Fall"],r=["mdi-snowflake","mdi-leaf","mdi-fire","mdi-water"],e=_([1,2]);return(l,R)=>(g(),S($,{modelValue:e.value,"onUpdate:modelValue":R[0]||(R[0]=b=>e.value=b),tick:o,min:"0",max:"3",step:1,"show-ticks":"always","thumb-label":"","tick-size":"4"},{"thumb-label":n(({modelValue:b})=>[a(se,{icon:r[b]},null,8,["icon"])]),_:1},8,["modelValue"]))}},re={__name:"DemoRangeSliderStep",setup(s){const o=_([20,40]);return(r,e)=>(g(),S($,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=l=>o.value=l),step:"10"},null,8,["modelValue"]))}},de={__name:"DemoRangeSliderColor",setup(s){const o=_([10,60]);return(r,e)=>(g(),S($,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=l=>o.value=l),color:"success","track-color":"secondary"},null,8,["modelValue"]))}},ce={__name:"DemoRangeSliderDisabled",setup(s){const o=_([30,60]);return(r,e)=>(g(),S($,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=l=>o.value=l),disabled:"",value:"30",label:"Disabled"},null,8,["modelValue"]))}},me={__name:"DemoRangeSliderBasic",setup(s){const o=_([10,60]);return(r,e)=>(g(),S($,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=l=>o.value=l)},null,8,["modelValue"]))}},pe={ts:`<script setup lang="ts">
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60
])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`},ve={ts:`<script lang="ts" setup>
const slidersValues = ref([30, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    value="30"
    label="Disabled"
  />
</template>
`,js:`<script setup>
const slidersValues = ref([
  30,
  60
])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    value="30"
    label="Disabled"
  />
</template>
`},fe={ts:`<script lang="ts" setup>
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
    track-color="secondary"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
    track-color="secondary"
  />
</template>
`},_e={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`},Ve={ts:`<script lang="ts" setup>
const seasons = ['Winter', 'Spring', 'Summer', 'Fall']
const icons = ['mdi-snowflake', 'mdi-leaf', 'mdi-fire', 'mdi-water']
const sliderValues = ref([1, 2])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`,js:`<script setup>
const seasons = [
  'Winter',
  'Spring',
  'Summer',
  'Fall'
]
const icons = [
  'mdi-snowflake',
  'mdi-leaf',
  'mdi-fire',
  'mdi-water'
]
const sliderValues = ref([
  1,
  2
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`},be={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`},he=i("p",null,[d("The "),i("code",null,"v-slider"),d(" component is a better visualization of the number input.")],-1),ge=i("p",null,[d("You cannot interact with "),i("code",null,"disabled"),d(" sliders.")],-1),Se=i("p",null,[d("Use "),i("code",null,"color"),d(" prop to the sets the slider color. "),i("code",null,"track-color"),d(" prop to sets the color of slider's unfilled track.")],-1),Re=i("p",null,[i("code",null,"v-range-slider"),d(" can have steps other than 1. This can be helpful for some applications where you need to adjust values with more or less accuracy.")],-1),ke=i("p",null,[d(" Using the "),i("code",null,"tick-labels"),d(" prop along with the "),i("code",null,"thumb-label"),d(" slot, you can create a very customized solution. ")],-1),$e=i("p",null,[d("You can use the "),i("code",null,"vertical"),d(" prop to switch sliders to a vertical orientation. If you need to change the height of the slider, use css.")],-1),Ue={__name:"range-slider",setup(s){return(o,r)=>{const e=me,l=ue,R=ce,b=de,c=re,C=ie,T=ne;return g(),S(oe,null,{default:n(()=>[a(k,{cols:"12",md:"6"},{default:n(()=>[a(l,{title:"Basic",code:pe},{default:n(()=>[he,a(e)]),_:1},8,["code"])]),_:1}),a(k,{cols:"12",md:"6"},{default:n(()=>[a(l,{title:"Disabled",code:ve},{default:n(()=>[ge,a(R)]),_:1},8,["code"])]),_:1}),a(k,{cols:"12",md:"6"},{default:n(()=>[a(l,{title:"Color",code:fe},{default:n(()=>[Se,a(b)]),_:1},8,["code"])]),_:1}),a(k,{cols:"12",md:"6"},{default:n(()=>[a(l,{title:"Step",code:_e},{default:n(()=>[Re,a(c)]),_:1},8,["code"])]),_:1}),a(k,{cols:"12",md:"6"},{default:n(()=>[a(l,{title:"Thumb label",code:Ve},{default:n(()=>[ke,a(C)]),_:1},8,["code"])]),_:1}),a(k,{cols:"12",md:"6"},{default:n(()=>[a(l,{title:"Vertical",code:be},{default:n(()=>[$e,a(T)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Ue as default};
