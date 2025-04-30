import{$ as c,o as u,c as V,w as l,ar as R,au as f,a as o,dA as r,at as _,dz as p,a5 as a,f as t,cV as b,V as v,e as O}from"./index.1a258bbd.js";import{_ as h}from"./AppCardCode.6c8a8473.js";import"./vue.runtime.esm-bundler.86261bcd.js";import"./VCard.319647d9.js";const $={__name:"DemoRadioValidation",setup(m){const i=c(1),s=[d=>d!==3?!0:"Do not select the third one!"];return(d,e)=>(u(),V(p,{modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=n=>i.value=n),inline:"",rules:s},{default:l(()=>[(u(),R(_,null,f(3,n=>o(r,{key:n,error:i.value===3,label:`Radio ${n}`,value:n},null,8,["error","label","value"])),64))]),_:1},8,["modelValue"]))}},x={__name:"DemoRadioIcon",setup(m){const i=c(1);return(s,d)=>(u(),V(p,{modelValue:i.value,"onUpdate:modelValue":d[0]||(d[0]=e=>i.value=e),"false-icon":"mdi-bell-off-outline","true-icon":"mdi-bell-outline"},{default:l(()=>[(u(),R(_,null,f(2,e=>o(r,{key:e,label:`Radio ${e}`,value:e},null,8,["label","value"])),64))]),_:1},8,["modelValue"]))}},L=a("div",null,[t("Your favorite "),a("strong",null,"search engine")],-1),w=a("div",null,[t("Of course it's "),a("strong",{class:"text-success"},"Google")],-1),C=a("div",null,[t("Definitely "),a("strong",{class:"text-primary"},"Duckduckgo")],-1),U={__name:"DemoRadioLabelSlot",setup(m){const i=c("Duckduckgo");return(s,d)=>(u(),V(p,{modelValue:i.value,"onUpdate:modelValue":d[0]||(d[0]=e=>i.value=e)},{label:l(()=>[L]),default:l(()=>[o(r,{value:"Google"},{label:l(()=>[w]),_:1}),o(r,{value:"Duckduckgo"},{label:l(()=>[C]),_:1})]),_:1},8,["modelValue"]))}},S={__name:"DemoRadioDensity",setup(m){const i=c("radio-1"),s=c("radio-1");return(d,e)=>(u(),R(_,null,[o(p,{modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=n=>i.value=n)},{default:l(()=>[o(r,{label:"Option 1",value:"radio-1",density:"compact"}),o(r,{label:"Option 2",value:"radio-2",density:"compact"})]),_:1},8,["modelValue"]),o(b,{class:"my-3"}),o(p,{modelValue:s.value,"onUpdate:modelValue":e[1]||(e[1]=n=>s.value=n),inline:""},{default:l(()=>[o(r,{label:"Option 1",value:"radio-1",density:"compact"}),o(r,{label:"Option 2",value:"radio-2",density:"compact"})]),_:1},8,["modelValue"])],64))}},I={__name:"DemoRadioInline",setup(m){const i=c("radio-1"),s=c("radio-1");return(d,e)=>(u(),R(_,null,[o(p,{modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=n=>i.value=n)},{default:l(()=>[o(r,{label:"Option 1",value:"radio-1"}),o(r,{label:"Option 2",value:"radio-2"})]),_:1},8,["modelValue"]),o(b,{class:"my-4"}),o(p,{modelValue:s.value,"onUpdate:modelValue":e[1]||(e[1]=n=>s.value=n),inline:""},{default:l(()=>[o(r,{label:"Option 1",value:"radio-1"}),o(r,{label:"Option 2",value:"radio-2"})]),_:1},8,["modelValue"])],64))}},j={__name:"DemoRadioColors",setup(m){const i=c("primary"),s=["Primary","Secondary","Success","Info","Warning","Error"];return(d,e)=>(u(),V(p,{modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=n=>i.value=n),inline:""},{default:l(()=>[a("div",null,[(u(),R(_,null,f(s,n=>o(r,{key:n,label:n,color:n.toLocaleLowerCase(),value:n.toLocaleLowerCase()},null,8,["label","color","value"])),64))])]),_:1},8,["modelValue"]))}},B={class:""},A={__name:"DemoRadioBasic",setup(m){const i=c(1);return(s,d)=>(u(),R("div",B,[o(p,{modelValue:i.value,"onUpdate:modelValue":d[0]||(d[0]=e=>i.value=e)},{default:l(()=>[(u(),R(_,null,f(2,e=>o(r,{key:e,label:`Radio ${e}`,value:e},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]))}},E={ts:`<script lang="ts" setup>
const radioGroup = ref(1)
<\/script>

<template>
  <div class="">
    <VRadioGroup v-model="radioGroup">
      <VRadio
        v-for="n in 2"
        :key="n"
        :label="\`Radio \${n}\`"
        :value="n"
      />
    </VRadioGroup>
  </div>
</template>
`,js:`<script setup>

const radioGroup = ref(1)
<\/script>

<template>
  <div class="">
    <VRadioGroup v-model="radioGroup">
      <VRadio
        v-for="n in 2"
        :key="n"
        :label="\`Radio \${n}\`"
        :value="n"
      />
    </VRadioGroup>
  </div>
</template>
`},N={ts:`<script lang="ts" setup>
const selectedRadio = ref('primary')
const colorsRadio = ['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error']
<\/script>

<template>
  <VRadioGroup
    v-model="selectedRadio"
    inline
  >
    <div>
      <VRadio
        v-for="radio in colorsRadio"
        :key="radio"
        :label="radio"
        :color="radio.toLocaleLowerCase()"
        :value="radio.toLocaleLowerCase()"
      />
    </div>
  </VRadioGroup>
</template>
`,js:`<script setup>
const selectedRadio = ref('primary')
const colorsRadio = [
  'Primary',
  'Secondary',
  'Success',
  'Info',
  'Warning',
  'Error'
]
<\/script>

<template>
  <VRadioGroup
    v-model="selectedRadio"
    inline
  >
    <div>
      <VRadio
        v-for="radio in colorsRadio"
        :key="radio"
        :label="radio"
        :color="radio.toLocaleLowerCase()"
        :value="radio.toLocaleLowerCase()"
      />
    </div>
  </VRadioGroup>
</template>
`},P={ts:`<script lang="ts" setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>

  <VDivider class="my-4" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>

  <VDivider class="my-4" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>
</template>
`},T={ts:`<script lang="ts" setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>

  <VDivider class="my-3" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>

  <VDivider class="my-3" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>
</template>
`},W={ts:`<script lang="ts" setup>
const radios = ref('Duckduckgo')
<\/script>

<template>
  <VRadioGroup v-model="radios">
    <template #label>
      <div>Your favorite <strong>search engine</strong></div>
    </template>

    <VRadio value="Google">
      <template #label>
        <div>Of course it's <strong class="text-success">Google</strong></div>
      </template>
    </VRadio>

    <VRadio value="Duckduckgo">
      <template #label>
        <div>Definitely <strong class="text-primary">Duckduckgo</strong></div>
      </template>
    </VRadio>
  </VRadioGroup>
</template>
`,js:`<script setup>

const radios = ref('Duckduckgo')
<\/script>

<template>
  <VRadioGroup v-model="radios">
    <template #label>
      <div>Your favorite <strong>search engine</strong></div>
    </template>

    <VRadio value="Google">
      <template #label>
        <div>Of course it's <strong class="text-success">Google</strong></div>
      </template>
    </VRadio>

    <VRadio value="Duckduckgo">
      <template #label>
        <div>Definitely <strong class="text-primary">Duckduckgo</strong></div>
      </template>
    </VRadio>
  </VRadioGroup>
</template>
`},Y={ts:`<script lang="ts" setup>
const radioGroup = ref(1)
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    false-icon="mdi-bell-off-outline"
    true-icon="mdi-bell-outline"
  >
    <VRadio
      v-for="n in 2"
      :key="n"
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>

const radioGroup = ref(1)
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    false-icon="mdi-bell-off-outline"
    true-icon="mdi-bell-outline"
  >
    <VRadio
      v-for="n in 2"
      :key="n"
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
`},F={ts:`<script lang="ts" setup>
const radioGroup = ref(1)
const rules = [(value: number) => (value !== 3 ? true : 'Do not select the third one!')]
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    inline
    :rules="rules"
  >
    <VRadio
      v-for="n in 3"
      :key="n"
      :error="radioGroup === 3 "
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>
const radioGroup = ref(1)
const rules = [value => value !== 3 ? true : 'Do not select the third one!']
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    inline
    :rules="rules"
  >
    <VRadio
      v-for="n in 3"
      :key="n"
      :error="radioGroup === 3 "
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
`},z=a("p",null,[t("The "),a("code",null,"v-radio"),t(" component is a simple radio button.")],-1),H=a("p",null,[t("Radios can be colored by using any of the built-in colors and contextual names using the "),a("code",null,"color"),t(" prop.")],-1),M=a("p",null,[t("Use "),a("code",null,"inline"),t(" prop to displays radio buttons in row.")],-1),q=a("p",null,[t("Use "),a("code",null,"density"),t(" prop to adjusts the spacing within the component. Available options are: "),a("code",null,"default"),t(", "),a("code",null,"comfortable"),t(", and "),a("code",null,"compact"),t(".")],-1),J=a("p",null,[t("Radio Group labels can be defined in "),a("code",null,"label"),t(" slot - that will allow to use HTML content.")],-1),K=a("p",null,[t("Use "),a("code",null,"false-icon"),t(" and "),a("code",null,"true-icon"),t(" prop to set icon on inactive and active state.")],-1),Q=a("p",null,[t("Use "),a("code",null,"rules"),t(" prop to validate a radio. Accepts a mixed array of types "),a("code",null,"function"),t(", "),a("code",null,"boolean"),t(" and "),a("code",null,"string"),t(". Functions pass an input value as an argument and must return either "),a("code",null,"true"),t(" / "),a("code",null,"false"),t(" or a string containing an error message.")],-1),ao={__name:"radio",setup(m){return(i,s)=>{const d=A,e=h,n=j,G=I,y=S,g=U,D=x,k=$;return u(),V(O,{class:"match-height"},{default:l(()=>[o(v,{cols:"12",md:"6"},{default:l(()=>[o(e,{title:"Basic",code:E},{default:l(()=>[z,o(d)]),_:1},8,["code"])]),_:1}),o(v,{cols:"12",md:"6"},{default:l(()=>[o(e,{title:"Colors",code:N},{default:l(()=>[H,o(n)]),_:1},8,["code"])]),_:1}),o(v,{cols:"12",md:"6"},{default:l(()=>[o(e,{title:"Inline",code:P},{default:l(()=>[M,o(G)]),_:1},8,["code"])]),_:1}),o(v,{cols:"12",md:"6"},{default:l(()=>[o(e,{title:"Density",code:T},{default:l(()=>[q,o(y)]),_:1},8,["code"])]),_:1}),o(v,{cols:"12",md:"6"},{default:l(()=>[o(e,{title:"Label Slot",code:W},{default:l(()=>[J,o(g)]),_:1},8,["code"])]),_:1}),o(v,{cols:"12",md:"6"},{default:l(()=>[o(e,{title:"Icon",code:Y},{default:l(()=>[K,o(D)]),_:1},8,["code"])]),_:1}),o(v,{cols:"12",md:"6"},{default:l(()=>[o(e,{title:"Validation",code:F},{default:l(()=>[Q,o(k)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{ao as default};
