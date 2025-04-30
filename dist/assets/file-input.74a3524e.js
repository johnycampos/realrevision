import{g as le,ay as te,du as ne,aJ as ae,cQ as ie,aV as oe,O as y,dO as T,$ as I,u as se,aB as ce,aC as ue,aL as pe,a as e,aO as re,aF as N,at as j,cZ as O,aY as de,aG as me,aT as _e,aZ as M,ak as fe,a0 as he,o as p,c as r,w as a,ar as ve,au as Fe,f as t,a6 as Ve,_ as F,V as c,e as E,a5 as n}from"./index.1a258bbd.js";import{_ as ge}from"./AppCardCode.6c8a8473.js";import"./vue.runtime.esm-bundler.86261bcd.js";import"./VCard.319647d9.js";const u=le({name:"VFileInput",inheritAttrs:!1,props:{chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,hint:String,persistentHint:Boolean,placeholder:String,showSize:{type:[Boolean,Number],default:!1,validator:l=>typeof l=="boolean"||[1e3,1024].includes(l)},...te({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:l=>ne(l).every(o=>o!=null&&typeof o=="object")},...ae({clearable:!0})},emits:{"click:control":l=>!0,"update:modelValue":l=>!0},setup(l,o){let{attrs:d,emit:V,slots:i}=o;const{t:h}=ie(),m=oe(l,"modelValue"),k=y(()=>typeof l.showSize!="boolean"?l.showSize:void 0),S=y(()=>{var s;return((s=m.value)!=null?s:[]).reduce((_,v)=>{let{size:w=0}=v;return _+w},0)}),$=y(()=>T(S.value,k.value)),C=y(()=>{var s;return((s=m.value)!=null?s:[]).map(_=>{const{name:v="",size:w=0}=_;return l.showSize?`${v} (${T(w,k.value)})`:v})}),x=y(()=>{var v;var s;const _=(v=(s=m.value)==null?void 0:s.length)!=null?v:0;return l.showSize?h(l.counterSizeString,_,$.value):h(l.counterString,_)}),D=I(),B=I(),g=I(!1),f=I(),Y=y(()=>l.messages.length?l.messages:l.persistentHint?l.hint:"");function A(){if(f.value!==document.activeElement){var s;(s=f.value)==null||s.focus()}g.value||(g.value=!0)}function H(s){M(l["onClick:prepend"],s),R(s)}function R(s){var _;(_=f.value)==null||_.click(),V("click:control",s)}function Z(s){s.stopPropagation(),A(),fe(()=>{m.value=[],f!=null&&f.value&&(f.value.value=""),M(l["onClick:clear"],s)})}return se(()=>{const s=!!(i.counter||l.counter),_=!!(s||i.details),[v,w]=ce(d),[{modelValue:bl,...G}]=ue(l),[J]=pe(l);return e(me,N({ref:D,modelValue:m.value,"onUpdate:modelValue":z=>m.value=z,class:"v-file-input","onClick:prepend":H,"onClick:append":l["onClick:append"]},v,G,{messages:Y.value}),{...i,default:z=>{let{isDisabled:P,isDirty:L,isReadonly:Q,isValid:W}=z;return e(re,N({ref:B,"prepend-icon":l.prependIcon,"onClick:control":R,"onClick:clear":Z,"onClick:prependInner":l["onClick:prependInner"],"onClick:appendInner":l["onClick:appendInner"]},J,{active:L.value||g.value,dirty:L.value,focused:g.value,error:W.value===!1}),{...i,default:q=>{let{props:{class:K,...X}}=q;return e(j,null,[e("input",N({ref:f,type:"file",readonly:Q.value,disabled:P.value,multiple:l.multiple,name:l.name,onClick:b=>{b.stopPropagation(),A()},onChange:b=>{var U;if(!b.target)return;const ee=b.target;m.value=[...(U=ee.files)!=null?U:[]]},onFocus:A,onBlur:()=>g.value=!1},X,w),null),e("div",{class:K},[m.value.length>0&&(i.selection?i.selection({fileNames:C.value,totalBytes:S.value,totalBytesReadable:$.value}):l.chips?C.value.map(b=>e(O,{key:b,size:"small",color:l.color},{default:()=>[b]})):C.value.join(", "))])])}})},details:_?z=>{var P;return e(j,null,[(P=i.details)==null?void 0:P.call(i,z),s&&e(j,null,[e("span",null,null),e(de,{active:!!m.value.length,value:x.value},i.counter)])])}:void 0})}),_e({},D,B,f)}}),be={__name:"DemoFileInputLoading",setup(l){const o=I(),d=I(!0);return he(o,()=>{d.value=!o.value[0]}),(V,i)=>(p(),r(u,{modelValue:o.value,"onUpdate:modelValue":i[0]||(i[0]=h=>o.value=h),loading:d.value,color:"primary",label:"File input"},null,8,["modelValue","loading"]))}},Ie={__name:"DemoFileInputSelectionSlot",setup(l){const o=I([]);return(d,V)=>(p(),r(u,{modelValue:o.value,"onUpdate:modelValue":V[0]||(V[0]=i=>o.value=i),multiple:"",placeholder:"Upload your documents",label:"File input","prepend-icon":"mdi-paperclip"},{selection:a(({fileNames:i})=>[(p(!0),ve(j,null,Fe(i,h=>(p(),r(O,{key:h,label:"",size:"small",variant:"outlined",color:"primary",class:"me-2"},{default:a(()=>[t(Ve(h),1)]),_:2},1024))),128))]),_:1},8,["modelValue"]))}},ye={__name:"DemoFileInputValidation",setup(l){const o=[d=>!d||!d.length||d[0].size<1e6||"Avatar size should be less than 1 MB!"];return(d,V)=>(p(),r(u,{rules:o,label:"Avatar",accept:"image/png, image/jpeg, image/bmp",placeholder:"Pick an avatar","prepend-icon":"mdi-camera-outline"}))}},Ce={};function we(l,o){return p(),r(u,{"show-size":"",label:"File input"})}const ze=F(Ce,[["render",we]]),ke={};function Se(l,o){return p(),r(u,{label:"File input","prepend-icon":"mdi-camera-outline"})}const $e=F(ke,[["render",Se]]),De={};function Be(l,o){return p(),r(u,{multiple:"",label:"File input"})}const Pe=F(De,[["render",Be]]),je={};function xe(l,o){return p(),r(u,{"show-size":"",counter:"",multiple:"",label:"File input"})}const Ae=F(je,[["render",xe]]),Ne={};function Re(l,o){return p(),r(u,{chips:"",label:"File input w/ chips"})}const Le=F(Ne,[["render",Re]]),Ue={};function Te(l,o){return p(),r(u,{accept:"image/*",label:"File input"})}const Me=F(Ue,[["render",Te]]),Oe={};function Ee(l,o){return p(),r(E,null,{default:a(()=>[e(c,{cols:"12",sm:"6"},{default:a(()=>[e(u,{label:"Outlined"})]),_:1}),e(c,{cols:"12",sm:"6"},{default:a(()=>[e(u,{label:"Filled",variant:"filled"})]),_:1}),e(c,{cols:"12",sm:"6"},{default:a(()=>[e(u,{label:"Solo",variant:"solo"})]),_:1}),e(c,{cols:"12",sm:"6"},{default:a(()=>[e(u,{label:"Plain",variant:"plain"})]),_:1}),e(c,{cols:"12",sm:"6"},{default:a(()=>[e(u,{label:"Underlined",variant:"underlined",density:"default"})]),_:1})]),_:1})}const Ye=F(Oe,[["render",Ee]]),He={};function Ze(l,o){return p(),r(u,{label:"File input",density:"compact"})}const Ge=F(He,[["render",Ze]]),Je={};function Qe(l,o){return p(),r(u,{label:"File input"})}const We=F(Je,[["render",Qe]]),qe={ts:`<template>
  <VFileInput
    accept="image/*"
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    accept="image/*"
    label="File input"
  />
</template>
`},Ke={ts:`<template>
  <VFileInput
    label="File input"
    density="compact"
  />
</template>
`,js:`<template>
  <VFileInput
    label="File input"
    density="compact"
  />
</template>
`},Xe={ts:`<script lang="ts" setup>
const rules = [
  (fileList: FileList) => !fileList || !fileList.length || fileList[0].size < 1000000 || 'Avatar size should be less than 1 MB!',
]
<\/script>

<template>
  <VFileInput
    :rules="rules"
    label="Avatar"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Pick an avatar"
    prepend-icon="mdi-camera-outline"
  />
</template>
`,js:`<script setup>

const rules = [fileList => !fileList || !fileList.length || fileList[0].size < 1000000 || 'Avatar size should be less than 1 MB!']
<\/script>

<template>
  <VFileInput
    :rules="rules"
    label="Avatar"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Pick an avatar"
    prepend-icon="mdi-camera-outline"
  />
</template>
`},el={ts:`<template>
  <VFileInput
    label="File input"
    prepend-icon="mdi-camera-outline"
  />
</template>
`,js:`<template>
  <VFileInput
    label="File input"
    prepend-icon="mdi-camera-outline"
  />
</template>
`},ll={ts:`<template>
  <VFileInput
    multiple
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    multiple
    label="File input"
  />
</template>
`},tl={ts:`<template>
  <VFileInput
    show-size
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    show-size
    label="File input"
  />
</template>
`},nl={ts:`<script setup lang="ts">
const file = ref()
const loading = ref(true)

watch(file, () => {
  loading.value = !file.value[0]
})
<\/script>

<template>
  <VFileInput
    v-model="file"
    :loading="loading"
    color="primary"
    label="File input"
  />
</template>
`,js:`<script setup>
const file = ref()
const loading = ref(true)
watch(file, () => {
  loading.value = !file.value[0]
})
<\/script>

<template>
  <VFileInput
    v-model="file"
    :loading="loading"
    color="primary"
    label="File input"
  />
</template>
`},al={ts:`<template>
  <VFileInput label="File input" />
</template>
`,js:`<template>
  <VFileInput label="File input" />
</template>
`},il={ts:`<script lang="ts" setup>
const files = ref<File[]>([])
<\/script>

<template>
  <VFileInput
    v-model="files"
    multiple
    placeholder="Upload your documents"
    label="File input"
    prepend-icon="mdi-paperclip"
  >
    <template #selection="{ fileNames }">
      <template
        v-for="fileName in fileNames"
        :key="fileName"
      >
        <VChip
          label
          size="small"
          variant="outlined"
          color="primary"
          class="me-2"
        >
          {{ fileName }}
        </VChip>
      </template>
    </template>
  </VFileInput>
</template>
`,js:`<script setup>

const files = ref([])
<\/script>

<template>
  <VFileInput
    v-model="files"
    multiple
    placeholder="Upload your documents"
    label="File input"
    prepend-icon="mdi-paperclip"
  >
    <template #selection="{ fileNames }">
      <template
        v-for="fileName in fileNames"
        :key="fileName"
      >
        <VChip
          label
          size="small"
          variant="outlined"
          color="primary"
          class="me-2"
        >
          {{ fileName }}
        </VChip>
      </template>
    </template>
  </VFileInput>
</template>
`},ol={ts:`<template>
  <VFileInput
    show-size
    counter
    multiple
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    show-size
    counter
    multiple
    label="File input"
  />
</template>
`},sl={ts:`<template>
  <VFileInput
    chips
    label="File input w/ chips"
  />
</template>
`,js:`<template>
  <VFileInput
    chips
    label="File input w/ chips"
  />
</template>
`},cl={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Plain"
        variant="plain"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Underlined"
        variant="underlined"
        density="default"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Plain"
        variant="plain"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Underlined"
        variant="underlined"
        density="default"
      />
    </VCol>
  </VRow>
</template>
`},ul=n("p",null,[t("The "),n("code",null,"v-file-input"),t(" component is used to selecting files.")],-1),pl=n("p",null,[t("You can reduces the file input height with "),n("code",null,"density"),t(" prop. Available options are: "),n("code",null,"default"),t(", "),n("code",null,"comfortable"),t(", and "),n("code",null,"compact"),t(".")],-1),rl=n("p",null,[t("use "),n("code",null,"solo"),t(", "),n("code",null,"filled"),t(", "),n("code",null,"outlined"),t(", "),n("code",null,"plain"),t(" and "),n("code",null,"underlined"),t(" option of "),n("code",null,"variant"),t(" prop to change the look of file input.")],-1),dl=n("p",null,[n("code",null,"v-file-input"),t(" component can accept only specific media formats/file types if you want.")],-1),ml=n("p",null,[t("Use "),n("code",null,"chip"),t(" prop to display the selected file as a chip.")],-1),_l=n("p",null,[t("When using the "),n("code",null,"show-size"),t(" property along with "),n("code",null,"counter"),t(", the total number of files and size will be displayed under the input.")],-1),fl=n("p",null,[t(" The "),n("code",null,"v-file-input"),t(" can contain multiple files at the same time when using the "),n("code",null,"multiple"),t(" prop. ")],-1),hl=n("p",null,[t(" The "),n("code",null,"v-file-input"),t(" has a default "),n("code",null,"prepend-icon"),t(" that can be set on the component or adjusted globally. ")],-1),vl=n("p",null,[t("The displayed size of the selected file(s) can be configured with the "),n("code",null,"show-size"),t(" property.")],-1),Fl=n("p",null,[t("You can use the "),n("code",null,"rules"),t(" prop to create your own custom validation parameters.")],-1),Vl=n("p",null,[t("Using the "),n("code",null,"selection"),t(" slot, you can customize the appearance of your input selections.")],-1),gl=n("p",null,[t("Use "),n("code",null,"loading"),t(" prop to displays linear progress bar.")],-1),zl={__name:"file-input",setup(l){return(o,d)=>{const V=We,i=ge,h=Ge,m=Ye,k=Me,S=Le,$=Ae,C=Pe,x=$e,D=ze,B=ye,g=Ie,f=be;return p(),r(E,{class:"match-height"},{default:a(()=>[e(c,{cols:"12",md:"6"},{default:a(()=>[e(i,{title:"Basic",code:al},{default:a(()=>[ul,e(V)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:a(()=>[e(i,{title:"Density",code:Ke},{default:a(()=>[pl,e(h)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12"},{default:a(()=>[e(i,{title:"Variant",code:cl},{default:a(()=>[rl,e(m)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:a(()=>[e(i,{title:"Accept",code:qe},{default:a(()=>[dl,e(k)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:a(()=>[e(i,{title:"Chips",code:sl},{default:a(()=>[ml,e(S)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:a(()=>[e(i,{title:"Counter",code:ol},{default:a(()=>[_l,e($)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:a(()=>[e(i,{title:"Multiple",code:ll},{default:a(()=>[fl,e(C)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:a(()=>[e(i,{title:"Prepend icon",code:el},{default:a(()=>[hl,e(x)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:a(()=>[e(i,{title:"Show size",code:tl},{default:a(()=>[vl,e(D)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:a(()=>[e(i,{title:"Validation",code:Xe},{default:a(()=>[Fl,e(B)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:a(()=>[e(i,{title:"Selection slot",code:il},{default:a(()=>[Vl,e(g)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:a(()=>[e(i,{title:"Loading",code:nl},{default:a(()=>[gl,e(f)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{zl as default};
