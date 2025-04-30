import{_ as y,$ as m,O as k,dP as g,o as V,ar as z,a5 as o,a6 as $,a as e,w as t,c as v,ab as f,bp as R,k as F,b as I,dg as M,a9 as O,aa as w,at as T,aw as L,ax as E,dQ as Y,V as c,ad as x,e as b,f as d,as as N}from"./index.1a258bbd.js";import{V as u}from"./VSlider.cf205e12.js";import{_ as G}from"./AppCardCode.6c8a8473.js";import"./VSliderTrack.f7e90e70.js";import"./vue.runtime.esm-bundler.86261bcd.js";import"./VCard.319647d9.js";const Q=p=>(L("data-v-4731ec23"),p=p(),E(),p),q={class:"d-flex justify-space-between ma-4"},H=["textContent"],J=Q(()=>o("span",{class:"subheading font-weight-light me-1"},"BPM",-1)),K={__name:"DemoSliderAppendAndPrepend",setup(p){const a=m(40),r=40,n=218,s=m(!1),l=k(()=>a.value<100?"primary":a.value<125?"success":a.value<140?"info":a.value<175?"warning":"error"),i=k(()=>`${60/a.value}s`),C=g(a,r,n);return(S,_)=>(V(),z(T,null,[o("div",q,[o("div",null,[o("span",{class:"text-6xl font-weight-light",textContent:$(a.value)},null,8,H),J,e(M,null,{default:t(()=>[s.value?(V(),v(F,{key:0,color:f(l),style:R({animationDuration:f(i)}),class:"mb-1 v-avatar--metronome",size:"12"},null,8,["color","style"])):I("",!0)]),_:1})]),o("div",null,[e(w,{color:f(l),icon:"",elevation:"0",onClick:_[0]||(_[0]=h=>s.value=!s.value)},{default:t(()=>[e(O,{size:"large",icon:s.value?"mdi-pause":"mdi-play"},null,8,["icon"])]),_:1},8,["color"])])]),e(u,{modelValue:a.value,"onUpdate:modelValue":_[3]||(_[3]=h=>a.value=h),color:f(l),step:1,min:r,max:n,"track-color":"secondary"},{prepend:t(()=>[e(w,{size:"small",variant:"text",icon:"mdi-minus",color:f(l),onClick:_[1]||(_[1]=h=>C.value--)},null,8,["color"])]),append:t(()=>[e(w,{size:"small",variant:"text",icon:"mdi-plus",color:f(l),onClick:_[2]||(_[2]=h=>C.value++)},null,8,["color"])]),_:1},8,["modelValue","color"])],64))}},W=y(K,[["__scopeId","data-v-4731ec23"]]),X={style:{width:"3rem"}},Z={style:{width:"3rem"}},ee={style:{width:"3rem"}},le={__name:"DemoSliderAppendTextField",setup(p){const a=m(161),r=m(105),n=m(255);return(s,l)=>(V(),z(T,null,[e(Y,{style:R({background:`rgb(${a.value}, ${r.value}, ${n.value})`}),height:"150px"},null,8,["style"]),e(b,{class:"mt-5"},{default:t(()=>[e(c,{cols:"12"},{default:t(()=>[e(u,{modelValue:a.value,"onUpdate:modelValue":l[1]||(l[1]=i=>a.value=i),max:255,step:1,"prepend-icon":"mdi-alpha-r"},{append:t(()=>[o("div",X,[e(x,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=i=>a.value=i),type:"number",variant:"underlined",max:255},null,8,["modelValue"])])]),_:1},8,["modelValue"])]),_:1}),e(c,{cols:"12"},{default:t(()=>[e(u,{modelValue:r.value,"onUpdate:modelValue":l[3]||(l[3]=i=>r.value=i),max:255,step:1,"prepend-icon":"mdi-alpha-g"},{append:t(()=>[o("div",Z,[e(x,{modelValue:r.value,"onUpdate:modelValue":l[2]||(l[2]=i=>r.value=i),type:"number",variant:"underlined",max:255},null,8,["modelValue"])])]),_:1},8,["modelValue"])]),_:1}),e(c,{cols:"12"},{default:t(()=>[e(u,{modelValue:n.value,"onUpdate:modelValue":l[5]||(l[5]=i=>n.value=i),max:255,step:1,"prepend-icon":"mdi-alpha-b"},{append:t(()=>[o("div",ee,[e(x,{modelValue:n.value,"onUpdate:modelValue":l[4]||(l[4]=i=>n.value=i),type:"number",variant:"underlined",max:255},null,8,["modelValue"])])]),_:1},8,["modelValue"])]),_:1})]),_:1})],64))}},te={__name:"DemoSliderVertical",setup(p){const a=m(10);return(r,n)=>(V(),v(u,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=s=>a.value=s),direction:"vertical"},null,8,["modelValue"]))}},oe=o("div",{class:"text-caption"}," Show ticks when using slider ",-1),ae=o("div",{class:"text-caption"}," Always show ticks ",-1),se=o("div",{class:"text-caption"}," Tick size ",-1),ie=o("div",{class:"text-caption"}," Tick labels ",-1),ne={__name:"DemoSliderTicks",setup(p){const a=m(0),r=m(1),n={0:"Figs",1:"Lemon",2:"Pear",3:"Apple"};return(s,l)=>(V(),v(b,null,{default:t(()=>[e(c,{cols:"12"},{default:t(()=>[oe,e(u,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=i=>a.value=i),step:10,"show-ticks":""},null,8,["modelValue"])]),_:1}),e(c,{cols:"12"},{default:t(()=>[ae,e(u,{modelValue:a.value,"onUpdate:modelValue":l[1]||(l[1]=i=>a.value=i),step:10,"show-ticks":"always"},null,8,["modelValue"])]),_:1}),e(c,{cols:"12"},{default:t(()=>[se,e(u,{modelValue:a.value,"onUpdate:modelValue":l[2]||(l[2]=i=>a.value=i),step:10,"show-ticks":"always","tick-size":"4"},null,8,["modelValue"])]),_:1}),e(c,{cols:"12"},{default:t(()=>[ie,e(u,{modelValue:r.value,"onUpdate:modelValue":l[3]||(l[3]=i=>r.value=i),ticks:n,max:3,step:"1","show-ticks":"always","tick-size":"4"},null,8,["modelValue"])]),_:1})]),_:1}))}},de=o("div",{class:"text-caption"}," Show thumb when using slider ",-1),re=o("div",{class:"text-caption"}," Always show thumb label ",-1),ce=o("div",{class:"text-caption"}," Custom thumb size ",-1),ue=o("div",{class:"text-caption"}," Custom thumb label ",-1),me={__name:"DemoSliderThumb",setup(p){const a=["\u{1F62D}","\u{1F622}","\u2639\uFE0F","\u{1F641}","\u{1F610}","\u{1F642}","\u{1F60A}","\u{1F601}","\u{1F604}","\u{1F60D}"],r=m(45);return(n,s)=>(V(),v(b,null,{default:t(()=>[e(c,{cols:"12"},{default:t(()=>[de,e(u,{modelValue:r.value,"onUpdate:modelValue":s[0]||(s[0]=l=>r.value=l),"thumb-label":""},null,8,["modelValue"])]),_:1}),e(c,{cols:"12"},{default:t(()=>[re,e(u,{modelValue:r.value,"onUpdate:modelValue":s[1]||(s[1]=l=>r.value=l),"thumb-label":"always"},null,8,["modelValue"])]),_:1}),e(c,{cols:"12"},{default:t(()=>[ce,e(u,{modelValue:r.value,"onUpdate:modelValue":s[2]||(s[2]=l=>r.value=l),"thumb-size":30,"thumb-label":"always"},null,8,["modelValue"])]),_:1}),e(c,{cols:"12"},{default:t(()=>[ue,e(u,{modelValue:r.value,"onUpdate:modelValue":s[3]||(s[3]=l=>r.value=l),"thumb-label":"always"},{"thumb-label":t(({modelValue:l})=>[d($(a[Math.min(Math.floor(l/10),9)]),1)]),_:1},8,["modelValue"])]),_:1})]),_:1}))}},pe={};function Ve(p,a){return V(),v(u,{step:10,"show-ticks":"","thumb-size":13,"tick-size":3,"track-size":2})}const ve=y(pe,[["render",Ve]]),_e={__name:"DemoSliderMinAndMax",setup(p){const a=m(-50),r=m(90),n=m(40);return(s,l)=>(V(),v(u,{modelValue:n.value,"onUpdate:modelValue":l[1]||(l[1]=i=>n.value=i),max:r.value,min:a.value,step:1},{append:t(()=>[e(x,{modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=i=>n.value=i),variant:"underlined",type:"number",style:{width:"60px"}},null,8,["modelValue"])]),_:1},8,["modelValue","max","min"]))}},be={__name:"DemoSliderValidation",setup(p){const a=m(30),r=[n=>n<=40||"Only 40 in stock"];return(n,s)=>(V(),v(u,{modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=l=>a.value=l),error:a.value>40,rules:r,step:10,"thumb-label":"always","show-ticks":""},null,8,["modelValue","error"]))}},fe={__name:"DemoSliderStep",setup(p){const a=m(0);return(r,n)=>(V(),v(u,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=s=>a.value=s),min:0,max:1,step:.2,"thumb-label":""},null,8,["modelValue","step"]))}},he={__name:"DemoSliderIcons",setup(p){const a=m(0),r=m(0),n=g(0,0,100);return(s,l)=>(V(),v(b,null,{default:t(()=>[e(c,{cols:"12"},{default:t(()=>[e(u,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=i=>a.value=i),"prepend-icon":"mdi-volume-high"},null,8,["modelValue"])]),_:1}),e(c,{cols:"12"},{default:t(()=>[e(u,{modelValue:r.value,"onUpdate:modelValue":l[1]||(l[1]=i=>r.value=i),"append-icon":"mdi-alarm"},null,8,["modelValue"])]),_:1}),e(c,{cols:"12"},{default:t(()=>[e(u,{modelValue:f(n),"onUpdate:modelValue":l[2]||(l[2]=i=>N(n)?n.value=i:null),"append-icon":"mdi-magnify-plus-outline","prepend-icon":"mdi-magnify-minus-outline","onClick:append":l[3]||(l[3]=i=>n.value+=10),"onClick:prepend":l[4]||(l[4]=i=>n.value-=10)},null,8,["modelValue"])]),_:1})]),_:1}))}},Ce=o("div",{class:"text-caption"}," color ",-1),xe=o("div",{class:"text-caption"}," track-color ",-1),we=o("div",{class:"text-caption"}," thumb-color ",-1),ye={__name:"DemoSliderColors",setup(p){const a=m(25),r=m(75),n=m(50);return(s,l)=>(V(),v(b,null,{default:t(()=>[e(c,{cols:"12"},{default:t(()=>[Ce,e(u,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=i=>a.value=i),color:"error"},null,8,["modelValue"])]),_:1}),e(c,{cols:"12"},{default:t(()=>[xe,e(u,{modelValue:r.value,"onUpdate:modelValue":l[1]||(l[1]=i=>r.value=i),"track-color":"error"},null,8,["modelValue"])]),_:1}),e(c,{cols:"12"},{default:t(()=>[we,e(u,{modelValue:n.value,"onUpdate:modelValue":l[2]||(l[2]=i=>n.value=i),"thumb-color":"error","thumb-label":"always"},null,8,["modelValue"])]),_:1})]),_:1}))}},Se={},ke=o("div",{class:"text-caption"}," Disabled ",-1),ge=o("div",{class:"text-caption"}," Readonly ",-1);function ze(p,a){return V(),v(b,null,{default:t(()=>[e(c,{cols:"12"},{default:t(()=>[ke,e(u,{disabled:"",label:"Disabled","model-value":30})]),_:1}),e(c,{cols:"12"},{default:t(()=>[ge,e(u,{readonly:"",label:"Readonly","model-value":30})]),_:1})]),_:1})}const $e=y(Se,[["render",ze]]),Re={__name:"DemoSliderBasic",setup(p){const a=m(30);return(r,n)=>(V(),v(b,null,{default:t(()=>[e(c,{cols:"12"},{default:t(()=>[e(u)]),_:1}),e(c,{cols:"12"},{default:t(()=>[e(u,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=s=>a.value=s)},null,8,["modelValue"])]),_:1})]),_:1}))}},Te={ts:`<script setup lang="ts">
const sliderValue = ref(30)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="sliderValue"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>

const sliderValue = ref(30)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="sliderValue"
      />
    </VCol>
  </VRow>
</template>
`},De={ts:`<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Disabled
      </div>
      <VSlider
        disabled
        label="Disabled"
        :model-value="30"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Readonly
      </div>
      <VSlider
        readonly
        label="Readonly"
        :model-value="30"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Disabled
      </div>
      <VSlider
        disabled
        label="Disabled"
        :model-value="30"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Readonly
      </div>
      <VSlider
        readonly
        label="Readonly"
        :model-value="30"
      />
    </VCol>
  </VRow>
</template>
`},Ue={ts:`<script lang="ts" setup>
const sliderColorValue = ref(25)
const sliderTrackColorValue = ref(75)
const sliderThumbColorValue = ref(50)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        color
      </div>
      <VSlider
        v-model="sliderColorValue"
        color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        track-color
      </div>
      <VSlider
        v-model="sliderTrackColorValue"
        track-color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        thumb-color
      </div>
      <VSlider
        v-model="sliderThumbColorValue"
        thumb-color="error"
        thumb-label="always"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const sliderColorValue = ref(25)
const sliderTrackColorValue = ref(75)
const sliderThumbColorValue = ref(50)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        color
      </div>
      <VSlider
        v-model="sliderColorValue"
        color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        track-color
      </div>
      <VSlider
        v-model="sliderTrackColorValue"
        track-color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        thumb-color
      </div>
      <VSlider
        v-model="sliderThumbColorValue"
        thumb-color="error"
        thumb-label="always"
      />
    </VCol>
  </VRow>
</template>
`},Ae={ts:`<script lang="ts" setup>
const mediaSlider = ref(0)
const alarmSlider = ref(0)
const zoomInOut = useClamp(0, 0, 100) // useClamp(value, min, max)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider
        v-model="mediaSlider"
        prepend-icon="mdi-volume-high"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="alarmSlider"
        append-icon="mdi-alarm"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="zoomInOut"
        append-icon="mdi-magnify-plus-outline"
        prepend-icon="mdi-magnify-minus-outline"
        @click:append="zoomInOut += 10"
        @click:prepend="zoomInOut -= 10"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const mediaSlider = ref(0)
const alarmSlider = ref(0)
const zoomInOut = useClamp(0, 0, 100)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider
        v-model="mediaSlider"
        prepend-icon="mdi-volume-high"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="alarmSlider"
        append-icon="mdi-alarm"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="zoomInOut"
        append-icon="mdi-magnify-plus-outline"
        prepend-icon="mdi-magnify-minus-outline"
        @click:append="zoomInOut += 10"
        @click:prepend="zoomInOut -= 10"
      />
    </VCol>
  </VRow>
</template>
`},Pe={ts:`<script lang="ts" setup>
const value = ref(0)
const fruits = ref(1)
const ticksLabels = { 0: 'Figs', 1: 'Lemon', 2: 'Pear', 3: 'Apple' }
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show ticks when using slider
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show ticks
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick size
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick labels
      </div>
      <VSlider
        v-model="fruits"
        :ticks="ticksLabels"
        :max="3"
        step="1"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const value = ref(0)
const fruits = ref(1)
const ticksLabels = {
  0: 'Figs',
  1: 'Lemon',
  2: 'Pear',
  3: 'Apple'
}
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show ticks when using slider
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show ticks
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick size
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick labels
      </div>
      <VSlider
        v-model="fruits"
        :ticks="ticksLabels"
        :max="3"
        step="1"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>
  </VRow>
</template>
`},je={ts:`<script lang="ts" setup>
const satisfactionEmojis = ['\u{1F62D}', '\u{1F622}', '\u2639\uFE0F', '\u{1F641}', '\u{1F610}', '\u{1F642}', '\u{1F60A}', '\u{1F601}', '\u{1F604}', '\u{1F60D}']
const slider = ref(45)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show thumb when using slider
      </div>
      <VSlider
        v-model="slider"
        thumb-label
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb size
      </div>
      <VSlider
        v-model="slider"
        :thumb-size="30"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      >
        <template #thumb-label="{ modelValue }">
          {{ satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)] }}
        </template>
      </VSlider>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const satisfactionEmojis = [
  '\u{1F62D}',
  '\u{1F622}',
  '\u2639\uFE0F',
  '\u{1F641}',
  '\u{1F610}',
  '\u{1F642}',
  '\u{1F60A}',
  '\u{1F601}',
  '\u{1F604}',
  '\u{1F60D}'
]
const slider = ref(45)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show thumb when using slider
      </div>
      <VSlider
        v-model="slider"
        thumb-label
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb size
      </div>
      <VSlider
        v-model="slider"
        :thumb-size="30"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      >
        <template #thumb-label="{ modelValue }">
          {{ satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)] }}
        </template>
      </VSlider>
    </VCol>
  </VRow>
</template>
`},Be={ts:`<script lang="ts" setup>
const value = ref(10)
<\/script>

<template>
  <VSlider
    v-model="value"
    direction="vertical"
  />
</template>
`,js:`<script setup>

const value = ref(10)
<\/script>

<template>
  <VSlider
    v-model="value"
    direction="vertical"
  />
</template>
`},Fe={ts:`<script lang="ts" setup>
const value = ref(30)
const rules = [(v: number) => v <= 40 || 'Only 40 in stock']
<\/script>

<template>
  <VSlider
    v-model="value"
    :error="value > 40"
    :rules="rules"
    :step="10"
    thumb-label="always"
    show-ticks
  />
</template>
`,js:`<script setup>
const value = ref(30)
const rules = [v => v <= 40 || 'Only 40 in stock']
<\/script>

<template>
  <VSlider
    v-model="value"
    :error="value > 40"
    :rules="rules"
    :step="10"
    thumb-label="always"
    show-ticks
  />
</template>
`},Ie={ts:`<script lang="ts" setup>
const min = ref(-50)
const max = ref(90)
const slider = ref(40)
<\/script>

<template>
  <VSlider
    v-model="slider"
    :max="max"
    :min="min"
    :step="1"
  >
    <template #append>
      <VTextField
        v-model="slider"
        variant="underlined"
        type="number"
        style="width: 60px ;"
      />
    </template>
  </VSlider>
</template>
`,js:`<script setup>
const min = ref(-50)
const max = ref(90)
const slider = ref(40)
<\/script>

<template>
  <VSlider
    v-model="slider"
    :max="max"
    :min="min"
    :step="1"
  >
    <template #append>
      <VTextField
        v-model="slider"
        variant="underlined"
        type="number"
        style="width: 60px ;"
      />
    </template>
  </VSlider>
</template>
`},Me={ts:`<template>
  <VSlider
    :step="10"
    show-ticks
    :thumb-size="13"
    :tick-size="3"
    :track-size="2"
  />
</template>
`,js:`<template>
  <VSlider
    :step="10"
    show-ticks
    :thumb-size="13"
    :tick-size="3"
    :track-size="2"
  />
</template>
`},Oe={ts:`<script lang="ts" setup>
const value = ref(0)
<\/script>

<template>
  <VSlider
    v-model="value"
    :min="0"
    :max="1"
    :step="0.2"
    thumb-label
  />
</template>
`,js:`<script setup>

const value = ref(0)
<\/script>

<template>
  <VSlider
    v-model="value"
    :min="0"
    :max="1"
    :step="0.2"
    thumb-label
  />
</template>
`},Le={ts:`<script lang="ts" setup>
const redColorValue = ref(161)
const greenColorValue = ref(105)
const blueColorValue = ref(255)
<\/script>

<template>
  <VResponsive
    :style="{ background: \`rgb(\${redColorValue}, \${greenColorValue}, \${blueColorValue})\` }"
    height="150px"
  />

  <VRow class="mt-5">
    <VCol cols="12">
      <!-- R -->
      <VSlider
        v-model="redColorValue"
        :max="255"
        :step="1"
        prepend-icon="mdi-alpha-r"
      >
        <template #append>
          <div style="width: 3rem;">
            <VTextField
              v-model="redColorValue"
              type="number"
              variant="underlined"
              :max="255"
            />
          </div>
        </template>
      </VSlider>
    </VCol>

    <VCol cols="12">
      <!-- G -->
      <VSlider
        v-model="greenColorValue"
        :max="255"
        :step="1"
        prepend-icon="mdi-alpha-g"
      >
        <template #append>
          <div style="width: 3rem;">
            <VTextField
              v-model="greenColorValue"
              type="number"
              variant="underlined"
              :max="255"
            />
          </div>
        </template>
      </VSlider>
    </VCol>

    <VCol cols="12">
      <!-- B -->
      <VSlider
        v-model="blueColorValue"
        :max="255"
        :step="1"
        prepend-icon="mdi-alpha-b"
      >
        <template #append>
          <div style="width: 3rem;">
            <VTextField
              v-model="blueColorValue"
              type="number"
              variant="underlined"
              :max="255"
            />
          </div>
        </template>
      </VSlider>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const redColorValue = ref(161)
const greenColorValue = ref(105)
const blueColorValue = ref(255)
<\/script>

<template>
  <VResponsive
    :style="{ background: \`rgb(\${redColorValue}, \${greenColorValue}, \${blueColorValue})\` }"
    height="150px"
  />

  <VRow class="mt-5">
    <VCol cols="12">
      <!-- R -->
      <VSlider
        v-model="redColorValue"
        :max="255"
        :step="1"
        prepend-icon="mdi-alpha-r"
      >
        <template #append>
          <div style="width: 3rem;">
            <VTextField
              v-model="redColorValue"
              type="number"
              variant="underlined"
              :max="255"
            />
          </div>
        </template>
      </VSlider>
    </VCol>

    <VCol cols="12">
      <!-- G -->
      <VSlider
        v-model="greenColorValue"
        :max="255"
        :step="1"
        prepend-icon="mdi-alpha-g"
      >
        <template #append>
          <div style="width: 3rem;">
            <VTextField
              v-model="greenColorValue"
              type="number"
              variant="underlined"
              :max="255"
            />
          </div>
        </template>
      </VSlider>
    </VCol>

    <VCol cols="12">
      <!-- B -->
      <VSlider
        v-model="blueColorValue"
        :max="255"
        :step="1"
        prepend-icon="mdi-alpha-b"
      >
        <template #append>
          <div style="width: 3rem;">
            <VTextField
              v-model="blueColorValue"
              type="number"
              variant="underlined"
              :max="255"
            />
          </div>
        </template>
      </VSlider>
    </VCol>
  </VRow>
</template>
`},Ee={ts:`<script lang="ts" setup>
const bpm = ref(40)
const min = 40
const max = 218
const isPlaying = ref(false)

const color = computed(() => {
  if (bpm.value < 100)
    return 'primary'
  if (bpm.value < 125)
    return 'success'
  if (bpm.value < 140)
    return 'info'
  if (bpm.value < 175)
    return 'warning'

  return 'error'
})

const animationDuration = computed(() => {
  return \`\${60 / bpm.value}s\`
})

const bmpControl = useClamp(bpm, min, max)
<\/script>

<template>
  <div class="d-flex justify-space-between ma-4">
    <div>
      <span
        class="text-6xl font-weight-light"
        v-text="bpm"
      />
      <span class="subheading font-weight-light me-1">BPM</span>

      <VFadeTransition>
        <VAvatar
          v-if="isPlaying"
          :color="color"
          :style="{
            animationDuration,
          }"
          class="mb-1 v-avatar--metronome"
          size="12"
        />
      </VFadeTransition>
    </div>

    <div>
      <VBtn
        :color="color"
        icon
        elevation="0"
        @click="isPlaying = !isPlaying"
      >
        <VIcon
          size="large"
          :icon="isPlaying ? 'mdi-pause' : 'mdi-play'"
        />
      </VBtn>
    </div>
  </div>

  <VSlider
    v-model="bpm"
    :color="color"
    :step="1"
    :min="min"
    :max="max"
    track-color="secondary"
  >
    <template #prepend>
      <VBtn
        size="small"
        variant="text"
        icon="mdi-minus"
        :color="color"
        @click="bmpControl--"
      />
    </template>

    <template #append>
      <VBtn
        size="small"
        variant="text"
        icon="mdi-plus"
        :color="color"
        @click="bmpControl++"
      />
    </template>
  </VSlider>
</template>

<style lang="scss" scoped>
  @keyframes metronome-example {
    from {
      transform: scale(0.5);
    }

    to {
      transform: scale(1);
    }
  }

  .v-avatar--metronome {
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-name: metronome-example;
  }
</style>
`,js:`<script setup>
const bpm = ref(40)
const min = 40
const max = 218
const isPlaying = ref(false)
const color = computed(() => {
  if (bpm.value < 100)
    return 'primary'
  if (bpm.value < 125)
    return 'success'
  if (bpm.value < 140)
    return 'info'
  if (bpm.value < 175)
    return 'warning'
  
  return 'error'
})
const animationDuration = computed(() => {
  return \`\${60 / bpm.value}s\`
})
const bmpControl = useClamp(bpm, min, max)
<\/script>

<template>
  <div class="d-flex justify-space-between ma-4">
    <div>
      <span
        class="text-6xl font-weight-light"
        v-text="bpm"
      />
      <span class="subheading font-weight-light me-1">BPM</span>

      <VFadeTransition>
        <VAvatar
          v-if="isPlaying"
          :color="color"
          :style="{
            animationDuration,
          }"
          class="mb-1 v-avatar--metronome"
          size="12"
        />
      </VFadeTransition>
    </div>

    <div>
      <VBtn
        :color="color"
        icon
        elevation="0"
        @click="isPlaying = !isPlaying"
      >
        <VIcon
          size="large"
          :icon="isPlaying ? 'mdi-pause' : 'mdi-play'"
        />
      </VBtn>
    </div>
  </div>

  <VSlider
    v-model="bpm"
    :color="color"
    :step="1"
    :min="min"
    :max="max"
    track-color="secondary"
  >
    <template #prepend>
      <VBtn
        size="small"
        variant="text"
        icon="mdi-minus"
        :color="color"
        @click="bmpControl--"
      />
    </template>

    <template #append>
      <VBtn
        size="small"
        variant="text"
        icon="mdi-plus"
        :color="color"
        @click="bmpControl++"
      />
    </template>
  </VSlider>
</template>

<style lang="scss" scoped>
  @keyframes metronome-example {
    from {
      transform: scale(0.5);
    }

    to {
      transform: scale(1);
    }
  }

  .v-avatar--metronome {
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-name: metronome-example;
  }
</style>
`},Ye=o("p",null,[d("The "),o("code",null,"v-slider"),d(" component is a better visualization of the number input.")],-1),Ne=o("p",null,[d("You cannot interact with "),o("code",null,"disabled"),d(" and "),o("code",null,"readonly"),d(" sliders.")],-1),Ge=o("p",null,[d("You can set the colors of the slider using the props "),o("code",null,"color"),d(", "),o("code",null,"track-color"),d(" and "),o("code",null,"thumb-color"),d(".")],-1),Qe=o("p",null,[d("You can add icons to the slider with the "),o("code",null,"append-icon"),d(" and "),o("code",null,"prepend-icon"),d(" props.")],-1),qe=o("p",null,[d("Using the "),o("code",null,"step"),d(" prop you can control the precision of the slider, and how much it should move each step.")],-1),He=o("p",null,[d("Vuetify includes simple validation through the "),o("code",null,"rules"),d(" prop.")],-1),Je=o("p",null,[d("You can set "),o("code",null,"min"),d(" and "),o("code",null,"max"),d(" values of sliders.")],-1),Ke=o("p",null,[d("Use "),o("code",null,"thumb-size"),d(", "),o("code",null,"tick-size"),d(", and "),o("code",null,"track-size"),d(" prop to increase and decrease the size of thumb, tick and track. ")],-1),We=o("p",null,[d("You can display a thumb label while sliding or always with the "),o("code",null,"thumb-label"),d(" prop.")],-1),Xe=o("p",null,"Tick marks represent predetermined values to which the user can move the slider.",-1),Ze=o("p",null,[d(" You can use the "),o("code",null,"vertical"),d(" prop to switch sliders to a vertical orientation. ")],-1),el=o("p",null,[d("Sliders can be combined with other components in its "),o("code",null,"append"),d(" slot, such as "),o("code",null,"v-text-field"),d(", to add additional functionality to the component.")],-1),ll=o("p",null,[d("Use slots such as "),o("code",null,"append"),d(" and "),o("code",null,"prepend"),d(" to easily customize the "),o("code",null,"v-slider"),d(" to fit any situation.")],-1),dl={__name:"slider",setup(p){return(a,r)=>{const n=Re,s=G,l=$e,i=ye,C=he,S=fe,_=be,h=_e,D=ve,U=me,A=ne,P=te,j=le,B=W;return V(),v(b,{class:"match-height"},{default:t(()=>[e(c,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Basic",code:Te},{default:t(()=>[Ye,e(n)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Disabled and Readonly",code:De},{default:t(()=>[Ne,e(l)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Colors",code:Ue},{default:t(()=>[Ge,e(i)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Icons",code:Ae},{default:t(()=>[Qe,e(C)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Step",code:Oe},{default:t(()=>[qe,e(S)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Validation",code:Fe},{default:t(()=>[He,e(_)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Min and Max",code:Ie},{default:t(()=>[Je,e(h)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Size",code:Me},{default:t(()=>[Ke,e(D)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Thumb",code:je},{default:t(()=>[We,e(U)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Ticks",code:Pe},{default:t(()=>[Xe,e(A)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Vertical",code:Be},{default:t(()=>[Ze,e(P)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Append text field",code:Le},{default:t(()=>[el,e(j)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Append and prepend",code:Ee},{default:t(()=>[ll,e(B)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{dl as default};
