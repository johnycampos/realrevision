import{da as E,A as Q,u as $,a as e,d3 as ae,n as le,s as te,y as oe,l as se,d8 as ie,bk as L,D as re,H as ne,M as ce,C as ue,$ as m,O as R,p as K,j as de,S as pe,a_ as M,d0 as me,g as ge,B as be,o as f,c as C,w as a,aP as T,aQ as j,aa as d,e as X,V as g,ad as _,ae as fe,a7 as v,f as i,a5 as b,a9 as Ve,dq as H,dx as W,dl as B,cV as P,dm as A,aF as he,ar as I,at as N,a0 as ve,dy as ke,dz as ye,au as Ce,dA as we}from"./index.a1270b37.js";import{b as k,e as y,V,c as De,a as _e}from"./VCard.64685768.js";import{V as Be}from"./VAutocomplete.bfb8e756.js";import{V as h}from"./VDialog.c7da9616.js";import{V as S}from"./VCheckbox.f7e0499a.js";import{_ as Te}from"./AppCardCode.748b95d1.js";import"./filter.df0c1ae2.js";import"./vue.runtime.esm-bundler.cc528c31.js";const Y=E()({name:"VToolbarTitle",props:{text:String,...Q()},setup(o,s){let{slots:r}=s;return $(()=>{var l;const t=!!(r.default||r.text||o.text);return e(o.tag,{class:"v-toolbar-title"},{default:()=>[t&&e("div",{class:"v-toolbar-title__placeholder"},[r.text?r.text():o.text,(l=r.default)==null?void 0:l.call(r)])]})}),{}}}),je=[null,"prominent","default","comfortable","compact"],xe=ae({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:o=>je.includes(o)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...le(),...te(),...oe(),...Q({tag:"header"}),...se()},"v-toolbar"),Ae=E()({name:"VToolbar",props:xe(),setup(o,s){var r;let{slots:l}=s;const{backgroundColorClasses:t,backgroundColorStyles:u}=ie(L(o,"color")),{borderClasses:p}=re(o),{elevationClasses:w}=ne(o),{roundedClasses:D}=ce(o),{themeClasses:x}=ue(o),n=m(!!(o.extended||(r=l.extension)!=null&&r.call(l))),c=R(()=>parseInt(Number(o.height)+(o.density==="prominent"?Number(o.height):0)-(o.density==="comfortable"?8:0)-(o.density==="compact"?16:0),10)),z=R(()=>n.value?parseInt(Number(o.extensionHeight)+(o.density==="prominent"?Number(o.extensionHeight):0)-(o.density==="comfortable"?4:0)-(o.density==="compact"?8:0),10):0);return K({VBtn:{variant:"text"}}),$(()=>{var U,F,q,J,G;const Z=!!(o.title||l.title),ee=!!(l.image||o.image),O=(U=l.extension)==null?void 0:U.call(l);return n.value=!!(o.extended||O),e(o.tag,{class:["v-toolbar",{"v-toolbar--absolute":o.absolute,"v-toolbar--collapse":o.collapse,"v-toolbar--flat":o.flat,"v-toolbar--floating":o.floating,[`v-toolbar--density-${o.density}`]:!0},t.value,p.value,w.value,D.value,x.value],style:[u.value]},{default:()=>[ee&&e("div",{key:"image",class:"v-toolbar__image"},[e(de,{defaults:{VImg:{cover:!0,src:o.image}}},{default:()=>[l.image?(F=l.image)==null?void 0:F.call(l):e(pe,null,null)]})]),e("div",{class:"v-toolbar__content",style:{height:M(c.value)}},[l.prepend&&e("div",{class:"v-toolbar__prepend"},[(q=l.prepend)==null?void 0:q.call(l)]),Z&&e(Y,{key:"title",text:o.title},{text:l.title}),(J=l.default)==null?void 0:J.call(l),l.append&&e("div",{class:"v-toolbar__append"},[(G=l.append)==null?void 0:G.call(l)])]),e(me,null,{default:()=>[n.value&&e("div",{class:"v-toolbar__extension",style:{height:M(z.value)}},[O])]})]})}),{contentHeight:c,extensionHeight:z}}}),Se=ge({name:"VToolbarItems",props:be({variant:"text"}),setup(o,s){let{slots:r}=s;return K({VBtn:{color:L(o,"color"),height:"inherit",variant:L(o,"variant")}}),$(()=>{var l;return e("div",{class:"v-toolbar-items"},[(l=r.default)==null?void 0:l.call(r)])}),{}}}),Le=i(" Open Dialog "),Pe=i(" Close "),$e=i(" Save "),Ie={__name:"DemoDialogForm",setup(o){const s=m(!1),r=m(""),l=m(""),t=m(""),u=m(""),p=m(""),w=m(),D=m([]);return(x,n)=>(f(),C(h,{modelValue:s.value,"onUpdate:modelValue":n[9]||(n[9]=c=>s.value=c),"max-width":"600"},{activator:a(({props:c})=>[e(d,T(j(c)),{default:a(()=>[Le]),_:2},1040)]),default:a(()=>[e(V,{title:"User Profile"},{default:a(()=>[e(k,null,{default:a(()=>[e(X,null,{default:a(()=>[e(g,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(_,{modelValue:r.value,"onUpdate:modelValue":n[0]||(n[0]=c=>r.value=c),label:"First Name"},null,8,["modelValue"])]),_:1}),e(g,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(_,{modelValue:l.value,"onUpdate:modelValue":n[1]||(n[1]=c=>l.value=c),label:"Middle Name"},null,8,["modelValue"])]),_:1}),e(g,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(_,{modelValue:t.value,"onUpdate:modelValue":n[2]||(n[2]=c=>t.value=c),label:"Last Name","persistent-hint":""},null,8,["modelValue"])]),_:1}),e(g,{cols:"12"},{default:a(()=>[e(_,{modelValue:u.value,"onUpdate:modelValue":n[3]||(n[3]=c=>u.value=c),label:"Email"},null,8,["modelValue"])]),_:1}),e(g,{cols:"12"},{default:a(()=>[e(_,{modelValue:p.value,"onUpdate:modelValue":n[4]||(n[4]=c=>p.value=c),label:"Password",type:"password"},null,8,["modelValue"])]),_:1}),e(g,{cols:"12",sm:"6"},{default:a(()=>[e(fe,{modelValue:w.value,"onUpdate:modelValue":n[5]||(n[5]=c=>w.value=c),items:["0-17","18-29","30-54","54+"],label:"Age"},null,8,["modelValue"])]),_:1}),e(g,{cols:"12",sm:"6"},{default:a(()=>[e(Be,{modelValue:D.value,"onUpdate:modelValue":n[6]||(n[6]=c=>D.value=c),multiple:"",items:["Skiing","Ice hockey","Soccer","Basketball","Hockey","Reading","Writing","Coding","Basejump"],label:"Interests"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(y,null,{default:a(()=>[e(v),e(d,{color:"error",onClick:n[7]||(n[7]=c=>s.value=!1)},{default:a(()=>[Pe]),_:1}),e(d,{color:"success",onClick:n[8]||(n[8]=c=>s.value=!1)},{default:a(()=>[$e]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}};const Ne=i(" Open Dialog "),ze=i("Settings"),Ue=i(" Save "),Fe=i("User Controls"),qe=i("General"),Je={__name:"DemoDialogFullscreen",setup(o){const s=m(!1);return(r,l)=>(f(),C(h,{modelValue:s.value,"onUpdate:modelValue":l[2]||(l[2]=t=>s.value=t),fullscreen:"",scrim:!1,transition:"dialog-bottom-transition"},{activator:a(({props:t})=>[e(d,T(j(t)),{default:a(()=>[Ne]),_:2},1040)]),default:a(()=>[e(V,null,{default:a(()=>[b("div",null,[e(Ae,{color:"primary"},{default:a(()=>[e(d,{icon:"",variant:"plain",onClick:l[0]||(l[0]=t=>s.value=!1)},{default:a(()=>[e(Ve,{color:"white",icon:"mdi-close"})]),_:1}),e(Y,null,{default:a(()=>[ze]),_:1}),e(v),e(Se,null,{default:a(()=>[e(d,{variant:"text",onClick:l[1]||(l[1]=t=>s.value=!1)},{default:a(()=>[Ue]),_:1})]),_:1})]),_:1})]),e(H,{lines:"two"},{default:a(()=>[e(W,null,{default:a(()=>[Fe]),_:1}),e(B,{title:"Content filtering",subtitle:"Set the content filtering level to restrict apps that can be downloaded"}),e(B,{title:"Password",subtitle:"Require password for purchase or use password to restrict purchase"})]),_:1}),e(P),e(H,{lines:"two","select-strategy":"classic"},{default:a(()=>[e(W,null,{default:a(()=>[qe]),_:1}),e(B,{title:"Notifications",subtitle:"Notify me about updates to apps or games that I downloaded",value:"Notifications"},{prepend:a(({isActive:t})=>[e(A,{start:""},{default:a(()=>[e(S,{"model-value":t,color:"primary"},null,8,["model-value"])]),_:2},1024)]),_:1}),e(B,{title:"Sound",subtitle:"Auto-update apps at any time. Data charges may apply",value:"Sound"},{prepend:a(({isActive:t})=>[e(A,{start:""},{default:a(()=>[e(S,{"model-value":t,color:"primary"},null,8,["model-value"])]),_:2},1024)]),_:1}),e(B,{title:"Auto-add widgets",subtitle:"Automatically add home screen widgets",value:"Auto-add widgets"},{prepend:a(({isActive:t})=>[e(A,{start:""},{default:a(()=>[e(S,{"model-value":t,color:"primary"},null,8,["model-value"])]),_:2},1024)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},Ge=i(" Open Dialog "),Oe=i(" Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. Candy tootsie roll sweet lemon drops tart cotton candy jujubes topping chupa chups. Biscuit icing pastry chocolate bar lollipop. Lemon drops oat cake chocolate cake dessert chocolate. Carrot cake ice cream bonbon tart tootsie roll cupcake dessert gingerbread. Apple pie dessert sweet candy bonbon. Sugar plum gummies powder brownie dessert candy canes candy canes candy. Sweet liquorice danish jujubes tart marshmallow cake. Danish chocolate bar icing dessert bonbon. Chocolate liquorice candy donut shortbread bonbon jujubes tart. Marshmallow cupcake marzipan icing pie drag\xE9e toffee. Cupcake souffl\xE9 pastry oat cake icing sesame snaps oat cake. Lollipop cheesecake cake tiramisu chocolate cake croissant. Donut candy canes sweet roll ice cream toffee gingerbread. Jelly-o biscuit oat cake cheesecake jujubes. Pudding chocolate biscuit gummies sesame snaps. Lemon drops candy canes chupa chups pudding muffin jujubes cupcake danish. Wafer chocolate oat cake sweet chocolate muffin. Pie drag\xE9e souffl\xE9 oat cake toffee drag\xE9e gummi bears. Jelly-o chocolate jelly fruitcake tart muffin icing sweet. Gummies pie lollipop carrot cake gingerbread sweet. Marshmallow tiramisu chocolate cake cake marshmallow. Pudding fruitcake shortbread biscuit powder cake. Drag\xE9e cookie cheesecake chupa chups toffee wafer. Wafer donut pudding chocolate shortbread cheesecake. Cupcake sweet roll lollipop chupa chups donut croissant carrot cake chocolate cake. Toffee souffl\xE9 biscuit gingerbread fruitcake. Jelly beans pudding jelly-o gingerbread apple pie ice cream. Muffin halvah cookie topping muffin sugar plum. Bonbon dessert cake tiramisu marzipan apple pie. Jelly beans caramels icing cake cake tiramisu dessert dessert jelly-o. Halvah ice cream cotton candy chupa chups cheesecake pudding cheesecake cupcake gummies. Croissant cookie candy canes cake chocolate. Pie cotton candy caramels sweet cake liquorice. Bear claw oat cake candy danish jelly-o fruitcake muffin sugar plum cupcake. Pudding cake cake lollipop chupa chups topping apple pie jelly oat cake. Pie candy canes tiramisu gummies icing cotton candy fruitcake marshmallow drag\xE9e. Pudding caramels muffin cookie cookie cupcake brownie ice cream. Liquorice lemon drops lemon drops cotton candy biscuit jelly-o jujubes topping. Lemon drops sweet drag\xE9e dessert sugar plum chocolate topping sugar plum oat cake. Muffin candy canes bonbon cotton candy liquorice gingerbread sesame snaps chocolate bar. Muffin gingerbread sesame snaps cake donut pie gingerbread souffl\xE9 croissant. Topping tart shortbread toffee jelly-o gingerbread cheesecake cupcake cake. Pudding powder icing marshmallow bear claw sesame snaps carrot cake. Jelly beans dessert tiramisu shortbread gummi bears gummies cotton candy. Tiramisu liquorice cookie pastry caramels icing tootsie roll. Pudding croissant tootsie roll jelly-o jelly beans gummi bears. Shortbread candy canes biscuit candy donut marshmallow candy canes. Fruitcake marshmallow chocolate bar sweet roll tart gummi bears brownie cupcake drag\xE9e. Cheesecake gummies sesame snaps souffl\xE9 jelly beans halvah bonbon tootsie roll. Sesame snaps marzipan cupcake candy cheesecake lollipop. Donut candy jelly-o liquorice topping gummi bears halvah. Pie sweet sweet jujubes bear claw marshmallow pudding lollipop tiramisu. Tiramisu tootsie roll topping chocolate cake tootsie roll cotton candy brownie. Jelly beans biscuit caramels cake toffee toffee lemon drops dessert. Toffee chupa chups tart bonbon brownie cake shortbread. Gummies marshmallow topping drag\xE9e chocolate bar. Chupa chups donut cheesecake cookie fruitcake muffin. Jelly-o cupcake cheesecake chocolate bar cupcake wafer. Liquorice muffin marzipan cotton candy cake lemon drops cake brownie. "),Re=i(" Disagree "),Me=i(" Agree "),He={__name:"DemoDialogOverflowed",setup(o){const s=m(!1);return(r,l)=>(f(),C(h,{modelValue:s.value,"onUpdate:modelValue":l[2]||(l[2]=t=>s.value=t),class:"v-dialog-sm"},{activator:a(({props:t})=>[e(d,he({color:"primary"},t),{default:a(()=>[Ge]),_:2},1040)]),default:a(()=>[e(V,{title:"Use Google's location service?"},{default:a(()=>[e(k,null,{default:a(()=>[Oe]),_:1}),e(y,null,{default:a(()=>[e(v),e(d,{color:"error",onClick:l[0]||(l[0]=t=>s.value=!1)},{default:a(()=>[Re]),_:1}),e(d,{color:"success",onClick:l[1]||(l[1]=t=>s.value=!1)},{default:a(()=>[Me]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},We=i(" Open Dialog "),Ee=i(" Biscuit fruitcake marshmallow jelly beans jujubes halvah cupcake topping. Chocolate cookie jelly-o toffee tart oat cake. Tart sugar plum gingerbread halvah muffin sweet. Cake halvah tart souffl\xE9 pudding. "),Qe=i(" Close "),Ke=i(" Open Dialog 2 "),Xe=i("I'm a nested dialog."),Ye=i(" Close "),Ze={__name:"DemoDialogNesting",setup(o){const s=m(!1),r=m(!1);return(l,t)=>(f(),I(N,null,[e(d,{onClick:t[0]||(t[0]=u=>s.value=!0)},{default:a(()=>[We]),_:1}),e(h,{modelValue:s.value,"onUpdate:modelValue":t[3]||(t[3]=u=>s.value=u),class:"v-dialog-sm"},{default:a(()=>[e(V,{title:"Dialog"},{default:a(()=>[e(k,null,{default:a(()=>[Ee]),_:1}),e(y,null,{default:a(()=>[e(v),e(d,{color:"error",onClick:t[1]||(t[1]=u=>s.value=!1)},{default:a(()=>[Qe]),_:1}),e(d,{onClick:t[2]||(t[2]=u=>r.value=!r.value)},{default:a(()=>[Ke]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(h,{modelValue:r.value,"onUpdate:modelValue":t[5]||(t[5]=u=>r.value=u),class:"v-dialog-sm"},{default:a(()=>[e(V,{title:"Dialog 2"},{default:a(()=>[e(k,null,{default:a(()=>[Xe]),_:1}),e(y,null,{default:a(()=>[e(v),e(d,{onClick:t[4]||(t[4]=u=>r.value=!1)},{default:a(()=>[Ye]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}},ea=i(" Start loading "),aa=b("p",{class:"mb-2"}," Please stand by ",-1),la={__name:"DemoDialogLoader",setup(o){const s=m(!1);return ve(s,r=>{!r||setTimeout(()=>{s.value=!1},4e3)}),(r,l)=>(f(),I(N,null,[e(d,{disabled:s.value,onClick:l[0]||(l[0]=t=>s.value=!0)},{default:a(()=>[ea]),_:1},8,["disabled"]),e(h,{modelValue:s.value,"onUpdate:modelValue":l[1]||(l[1]=t=>s.value=t),width:"300"},{default:a(()=>[e(V,{color:"primary",width:"300"},{default:a(()=>[e(k,{class:"pt-3"},{default:a(()=>[aa,e(ke,{indeterminate:"",color:"white",class:"mb-0"})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}},ta=i(" Open Dialog "),oa=i("Select Country"),sa=i(" Close "),ia=i(" Save "),ra={__name:"DemoDialogScrollable",setup(o){const s=[{label:"Bahamas, The",value:"bahamas"},{label:"Bahrain",value:"bahrain"},{label:"Bangladesh",value:"bangladesh"},{label:"Barbados",value:"barbados"},{label:"Belarus",value:"belarus"},{label:"Belgium",value:"belgium"},{label:"Belize",value:"belize"},{label:"Benin",value:"benin"},{label:"Bhutan",value:"bhutan"},{label:"Bolivia",value:"bolivia"},{label:"Bosnia and Herzegovina",value:"bosnia"},{label:"Botswana",value:"botswana"},{label:"Brazil",value:"brazil"},{label:"Brunei",value:"brunei"},{label:"Bulgaria",value:"bulgaria"},{label:"Burkina Faso",value:"burkina"}],r=m(""),l=m(!1);return(t,u)=>(f(),C(h,{modelValue:l.value,"onUpdate:modelValue":u[3]||(u[3]=p=>l.value=p),scrollable:"","max-width":"350"},{activator:a(({props:p})=>[e(d,T(j(p)),{default:a(()=>[ta]),_:2},1040)]),default:a(()=>[e(V,null,{default:a(()=>[e(De,null,{default:a(()=>[e(_e,null,{default:a(()=>[oa]),_:1})]),_:1}),e(P),e(k,{style:{height:"300px"}},{default:a(()=>[e(ye,{modelValue:r.value,"onUpdate:modelValue":u[0]||(u[0]=p=>r.value=p),inline:!1},{default:a(()=>[(f(),I(N,null,Ce(s,p=>e(we,{key:p.label,label:p.label,value:p.value,color:"primary"},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),e(P),e(y,{class:"pt-3"},{default:a(()=>[e(v),e(d,{color:"error",onClick:u[1]||(u[1]=p=>l.value=!1)},{default:a(()=>[sa]),_:1}),e(d,{color:"success",onClick:u[2]||(u[2]=p=>l.value=!1)},{default:a(()=>[ia]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},na=i(" Open Dialog "),ca=i(" Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running. "),ua=i(" Disagree "),da=i(" Agree "),pa={__name:"DemoDialogPersistent",setup(o){const s=m(!1);return(r,l)=>(f(),C(h,{modelValue:s.value,"onUpdate:modelValue":l[2]||(l[2]=t=>s.value=t),persistent:"",class:"v-dialog-sm"},{activator:a(({props:t})=>[e(d,T(j(t)),{default:a(()=>[na]),_:2},1040)]),default:a(()=>[e(V,{title:"Use Google's location service?"},{default:a(()=>[e(k,null,{default:a(()=>[ca]),_:1}),e(y,null,{default:a(()=>[e(v),e(d,{color:"error",onClick:l[0]||(l[0]=t=>s.value=!1)},{default:a(()=>[ua]),_:1}),e(d,{color:"success",onClick:l[1]||(l[1]=t=>s.value=!1)},{default:a(()=>[da]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},ma=i(" Click Me "),ga=i(" Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. "),ba=i(" I accept "),fa={__name:"DemoDialogBasic",setup(o){const s=m(!1);return(r,l)=>(f(),C(h,{modelValue:s.value,"onUpdate:modelValue":l[1]||(l[1]=t=>s.value=t),width:"500"},{activator:a(({props:t})=>[e(d,T(j(t)),{default:a(()=>[ma]),_:2},1040)]),default:a(()=>[e(V,{title:"Privacy Policy"},{default:a(()=>[e(k,null,{default:a(()=>[ga]),_:1}),e(y,null,{default:a(()=>[e(v),e(d,{onClick:l[0]||(l[0]=t=>s.value=!1)},{default:a(()=>[ba]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},Va={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard>
      <!-- Toolbar -->
      <div>
        <VToolbar color="primary">
          <VBtn
            icon
            variant="plain"
            @click="isDialogVisible = false"
          >
            <VIcon
              color="white"
              icon="mdi-close"
            />
          </VBtn>

          <VToolbarTitle>Settings</VToolbarTitle>

          <VSpacer />

          <VToolbarItems>
            <VBtn
              variant="text"
              @click="isDialogVisible = false"
            >
              Save
            </VBtn>
          </VToolbarItems>
        </VToolbar>
      </div>

      <!-- List -->
      <VList lines="two">
        <VListSubheader>User Controls</VListSubheader>
        <VListItem
          title="Content filtering"
          subtitle="Set the content filtering level to restrict apps that can be downloaded"
        />
        <VListItem
          title="Password"
          subtitle="Require password for purchase or use password to restrict purchase"
        />
      </VList>

      <VDivider />

      <!-- List -->
      <VList
        lines="two"
        select-strategy="classic"
      >
        <VListSubheader>General</VListSubheader>

        <VListItem
          title="Notifications"
          subtitle="Notify me about updates to apps or games that I downloaded"
          value="Notifications"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Sound"
          subtitle="Auto-update apps at any time. Data charges may apply"
          value="Sound"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Auto-add widgets"
          subtitle="Automatically add home screen widgets"
          value="Auto-add widgets"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>
      </VList>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
</style>
`,js:`<script setup>

const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard>
      <!-- Toolbar -->
      <div>
        <VToolbar color="primary">
          <VBtn
            icon
            variant="plain"
            @click="isDialogVisible = false"
          >
            <VIcon
              color="white"
              icon="mdi-close"
            />
          </VBtn>

          <VToolbarTitle>Settings</VToolbarTitle>

          <VSpacer />

          <VToolbarItems>
            <VBtn
              variant="text"
              @click="isDialogVisible = false"
            >
              Save
            </VBtn>
          </VToolbarItems>
        </VToolbar>
      </div>

      <!-- List -->
      <VList lines="two">
        <VListSubheader>User Controls</VListSubheader>
        <VListItem
          title="Content filtering"
          subtitle="Set the content filtering level to restrict apps that can be downloaded"
        />
        <VListItem
          title="Password"
          subtitle="Require password for purchase or use password to restrict purchase"
        />
      </VList>

      <VDivider />

      <!-- List -->
      <VList
        lines="two"
        select-strategy="classic"
      >
        <VListSubheader>General</VListSubheader>

        <VListItem
          title="Notifications"
          subtitle="Notify me about updates to apps or games that I downloaded"
          value="Notifications"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Sound"
          subtitle="Auto-update apps at any time. Data charges may apply"
          value="Sound"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Auto-add widgets"
          subtitle="Automatically add home screen widgets"
          value="Auto-add widgets"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>
      </VList>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
</style>
`},ha={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    width="500"
  >
    <!-- Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Click Me
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="Privacy Policy">
      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies.
      </VCardText>

      <VCardActions>
        <VSpacer />
        <VBtn @click="isDialogVisible = false">
          I accept
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>

const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    width="500"
  >
    <!-- Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Click Me
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="Privacy Policy">
      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies.
      </VCardText>

      <VCardActions>
        <VSpacer />
        <VBtn @click="isDialogVisible = false">
          I accept
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
`},va={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <VCardText>
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      </VCardText>

      <VCardActions>
        <VSpacer />
        <VBtn
          color="error"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn
          color="success"
          @click="isDialogVisible = false"
        >
          Agree
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>

const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <VCardText>
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      </VCardText>

      <VCardActions>
        <VSpacer />
        <VBtn
          color="error"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn
          color="success"
          @click="isDialogVisible = false"
        >
          Agree
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
`},ka={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn
        color="primary"
        v-bind="props"
      >
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. Candy tootsie roll sweet lemon drops tart cotton candy jujubes topping chupa chups. Biscuit icing pastry chocolate bar lollipop. Lemon drops oat cake chocolate cake dessert chocolate. Carrot cake ice cream bonbon tart tootsie roll cupcake dessert gingerbread. Apple pie dessert sweet candy bonbon. Sugar plum gummies powder brownie dessert candy canes candy canes candy.

        Sweet liquorice danish jujubes tart marshmallow cake. Danish chocolate bar icing dessert bonbon. Chocolate liquorice candy donut shortbread bonbon jujubes tart. Marshmallow cupcake marzipan icing pie drag\xE9e toffee. Cupcake souffl\xE9 pastry oat cake icing sesame snaps oat cake. Lollipop cheesecake cake tiramisu chocolate cake croissant. Donut candy canes sweet roll ice cream toffee gingerbread. Jelly-o biscuit oat cake cheesecake jujubes. Pudding chocolate biscuit gummies sesame snaps. Lemon drops candy canes chupa chups pudding muffin jujubes cupcake danish. Wafer chocolate oat cake sweet chocolate muffin. Pie drag\xE9e souffl\xE9 oat cake toffee drag\xE9e gummi bears. Jelly-o chocolate jelly fruitcake tart muffin icing sweet.

        Gummies pie lollipop carrot cake gingerbread sweet. Marshmallow tiramisu chocolate cake cake marshmallow. Pudding fruitcake shortbread biscuit powder cake. Drag\xE9e cookie cheesecake chupa chups toffee wafer. Wafer donut pudding chocolate shortbread cheesecake. Cupcake sweet roll lollipop chupa chups donut croissant carrot cake chocolate cake. Toffee souffl\xE9 biscuit gingerbread fruitcake. Jelly beans pudding jelly-o gingerbread apple pie ice cream. Muffin halvah cookie topping muffin sugar plum. Bonbon dessert cake tiramisu marzipan apple pie. Jelly beans caramels icing cake cake tiramisu dessert dessert jelly-o. Halvah ice cream cotton candy chupa chups cheesecake pudding cheesecake cupcake gummies. Croissant cookie candy canes cake chocolate.

        Pie cotton candy caramels sweet cake liquorice. Bear claw oat cake candy danish jelly-o fruitcake muffin sugar plum cupcake. Pudding cake cake lollipop chupa chups topping apple pie jelly oat cake. Pie candy canes tiramisu gummies icing cotton candy fruitcake marshmallow drag\xE9e. Pudding caramels muffin cookie cookie cupcake brownie ice cream. Liquorice lemon drops lemon drops cotton candy biscuit jelly-o jujubes topping. Lemon drops sweet drag\xE9e dessert sugar plum chocolate topping sugar plum oat cake. Muffin candy canes bonbon cotton candy liquorice gingerbread sesame snaps chocolate bar. Muffin gingerbread sesame snaps cake donut pie gingerbread souffl\xE9 croissant. Topping tart shortbread toffee jelly-o gingerbread cheesecake cupcake cake. Pudding powder icing marshmallow bear claw sesame snaps carrot cake. Jelly beans dessert tiramisu shortbread gummi bears gummies cotton candy. Tiramisu liquorice cookie pastry caramels icing tootsie roll.

        Pudding croissant tootsie roll jelly-o jelly beans gummi bears. Shortbread candy canes biscuit candy donut marshmallow candy canes. Fruitcake marshmallow chocolate bar sweet roll tart gummi bears brownie cupcake drag\xE9e. Cheesecake gummies sesame snaps souffl\xE9 jelly beans halvah bonbon tootsie roll. Sesame snaps marzipan cupcake candy cheesecake lollipop. Donut candy jelly-o liquorice topping gummi bears halvah. Pie sweet sweet jujubes bear claw marshmallow pudding lollipop tiramisu. Tiramisu tootsie roll topping chocolate cake tootsie roll cotton candy brownie. Jelly beans biscuit caramels cake toffee toffee lemon drops dessert. Toffee chupa chups tart bonbon brownie cake shortbread. Gummies marshmallow topping drag\xE9e chocolate bar. Chupa chups donut cheesecake cookie fruitcake muffin. Jelly-o cupcake cheesecake chocolate bar cupcake wafer. Liquorice muffin marzipan cotton candy cake lemon drops cake brownie.
      </VCardText>

      <VCardActions>
        <VSpacer />
        <VBtn
          color="error"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn
          color="success"
          @click="isDialogVisible = false"
        >
          Agree
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>

const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn
        color="primary"
        v-bind="props"
      >
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. Candy tootsie roll sweet lemon drops tart cotton candy jujubes topping chupa chups. Biscuit icing pastry chocolate bar lollipop. Lemon drops oat cake chocolate cake dessert chocolate. Carrot cake ice cream bonbon tart tootsie roll cupcake dessert gingerbread. Apple pie dessert sweet candy bonbon. Sugar plum gummies powder brownie dessert candy canes candy canes candy.

        Sweet liquorice danish jujubes tart marshmallow cake. Danish chocolate bar icing dessert bonbon. Chocolate liquorice candy donut shortbread bonbon jujubes tart. Marshmallow cupcake marzipan icing pie drag\xE9e toffee. Cupcake souffl\xE9 pastry oat cake icing sesame snaps oat cake. Lollipop cheesecake cake tiramisu chocolate cake croissant. Donut candy canes sweet roll ice cream toffee gingerbread. Jelly-o biscuit oat cake cheesecake jujubes. Pudding chocolate biscuit gummies sesame snaps. Lemon drops candy canes chupa chups pudding muffin jujubes cupcake danish. Wafer chocolate oat cake sweet chocolate muffin. Pie drag\xE9e souffl\xE9 oat cake toffee drag\xE9e gummi bears. Jelly-o chocolate jelly fruitcake tart muffin icing sweet.

        Gummies pie lollipop carrot cake gingerbread sweet. Marshmallow tiramisu chocolate cake cake marshmallow. Pudding fruitcake shortbread biscuit powder cake. Drag\xE9e cookie cheesecake chupa chups toffee wafer. Wafer donut pudding chocolate shortbread cheesecake. Cupcake sweet roll lollipop chupa chups donut croissant carrot cake chocolate cake. Toffee souffl\xE9 biscuit gingerbread fruitcake. Jelly beans pudding jelly-o gingerbread apple pie ice cream. Muffin halvah cookie topping muffin sugar plum. Bonbon dessert cake tiramisu marzipan apple pie. Jelly beans caramels icing cake cake tiramisu dessert dessert jelly-o. Halvah ice cream cotton candy chupa chups cheesecake pudding cheesecake cupcake gummies. Croissant cookie candy canes cake chocolate.

        Pie cotton candy caramels sweet cake liquorice. Bear claw oat cake candy danish jelly-o fruitcake muffin sugar plum cupcake. Pudding cake cake lollipop chupa chups topping apple pie jelly oat cake. Pie candy canes tiramisu gummies icing cotton candy fruitcake marshmallow drag\xE9e. Pudding caramels muffin cookie cookie cupcake brownie ice cream. Liquorice lemon drops lemon drops cotton candy biscuit jelly-o jujubes topping. Lemon drops sweet drag\xE9e dessert sugar plum chocolate topping sugar plum oat cake. Muffin candy canes bonbon cotton candy liquorice gingerbread sesame snaps chocolate bar. Muffin gingerbread sesame snaps cake donut pie gingerbread souffl\xE9 croissant. Topping tart shortbread toffee jelly-o gingerbread cheesecake cupcake cake. Pudding powder icing marshmallow bear claw sesame snaps carrot cake. Jelly beans dessert tiramisu shortbread gummi bears gummies cotton candy. Tiramisu liquorice cookie pastry caramels icing tootsie roll.

        Pudding croissant tootsie roll jelly-o jelly beans gummi bears. Shortbread candy canes biscuit candy donut marshmallow candy canes. Fruitcake marshmallow chocolate bar sweet roll tart gummi bears brownie cupcake drag\xE9e. Cheesecake gummies sesame snaps souffl\xE9 jelly beans halvah bonbon tootsie roll. Sesame snaps marzipan cupcake candy cheesecake lollipop. Donut candy jelly-o liquorice topping gummi bears halvah. Pie sweet sweet jujubes bear claw marshmallow pudding lollipop tiramisu. Tiramisu tootsie roll topping chocolate cake tootsie roll cotton candy brownie. Jelly beans biscuit caramels cake toffee toffee lemon drops dessert. Toffee chupa chups tart bonbon brownie cake shortbread. Gummies marshmallow topping drag\xE9e chocolate bar. Chupa chups donut cheesecake cookie fruitcake muffin. Jelly-o cupcake cheesecake chocolate bar cupcake wafer. Liquorice muffin marzipan cotton candy cake lemon drops cake brownie.
      </VCardText>

      <VCardActions>
        <VSpacer />
        <VBtn
          color="error"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn
          color="success"
          @click="isDialogVisible = false"
        >
          Agree
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
`},ya={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
const firstName = ref('')
const middleName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const age = ref()
const interest = ref<string[]>([])
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    max-width="600"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="User Profile">
      <VCardText>
        <VRow>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <VTextField
              v-model="firstName"
              label="First Name"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <VTextField
              v-model="middleName"
              label="Middle Name"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <VTextField
              v-model="lastName"
              label="Last Name"
              persistent-hint
            />
          </VCol>
          <VCol cols="12">
            <VTextField
              v-model="email"
              label="Email"
            />
          </VCol>
          <VCol cols="12">
            <VTextField
              v-model="password"
              label="Password"
              type="password"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <VSelect
              v-model="age"
              :items="['0-17', '18-29', '30-54', '54+']"
              label="Age"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <VAutocomplete
              v-model="interest"
              multiple
              :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
              label="Interests"
            />
          </VCol>
        </VRow>
      </VCardText>

      <VCardActions>
        <VSpacer />
        <VBtn
          color="error"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn
          color="success"
          @click="isDialogVisible = false"
        >
          Save
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
const firstName = ref('')
const middleName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const age = ref()
const interest = ref([])
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    max-width="600"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="User Profile">
      <VCardText>
        <VRow>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <VTextField
              v-model="firstName"
              label="First Name"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <VTextField
              v-model="middleName"
              label="Middle Name"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <VTextField
              v-model="lastName"
              label="Last Name"
              persistent-hint
            />
          </VCol>
          <VCol cols="12">
            <VTextField
              v-model="email"
              label="Email"
            />
          </VCol>
          <VCol cols="12">
            <VTextField
              v-model="password"
              label="Password"
              type="password"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <VSelect
              v-model="age"
              :items="['0-17', '18-29', '30-54', '54+']"
              label="Age"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <VAutocomplete
              v-model="interest"
              multiple
              :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
              label="Interests"
            />
          </VCol>
        </VRow>
      </VCardText>

      <VCardActions>
        <VSpacer />
        <VBtn
          color="error"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn
          color="success"
          @click="isDialogVisible = false"
        >
          Save
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
`},Ca={ts:`<script lang="ts" setup>
const countryList = [
  { label: 'Bahamas, The', value: 'bahamas' },
  { label: 'Bahrain', value: 'bahrain' },
  { label: 'Bangladesh', value: 'bangladesh' },

  { label: 'Barbados', value: 'barbados' },
  { label: 'Belarus', value: 'belarus' },
  { label: 'Belgium', value: 'belgium' },
  { label: 'Belize', value: 'belize' },
  { label: 'Benin', value: 'benin' },
  { label: 'Bhutan', value: 'bhutan' },
  { label: 'Bolivia', value: 'bolivia' },
  { label: 'Bosnia and Herzegovina', value: 'bosnia' },

  { label: 'Botswana', value: 'botswana' },
  { label: 'Brazil', value: 'brazil' },
  { label: 'Brunei', value: 'brunei' },
  { label: 'Bulgaria', value: 'bulgaria' },
  { label: 'Burkina Faso', value: 'burkina' },
]

const selectedCountry = ref('')
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    scrollable
    max-width="350"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard>
      <VCardItem>
        <VCardTitle>Select Country</VCardTitle>
      </VCardItem>

      <VDivider />
      <VCardText style="height: 300px;">
        <VRadioGroup
          v-model="selectedCountry"
          :inline="false"
        >
          <VRadio
            v-for="country in countryList"
            :key="country.label"
            :label="country.label"
            :value="country.value"
            color="primary"
          />
        </VRadioGroup>
      </VCardText>

      <VDivider />

      <VCardActions class="pt-3">
        <VSpacer />
        <VBtn
          color="error"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn
          color="success"
          @click="isDialogVisible = false"
        >
          Save
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const countryList = [
  {
    label: 'Bahamas, The',
    value: 'bahamas'
  },
  {
    label: 'Bahrain',
    value: 'bahrain'
  },
  {
    label: 'Bangladesh',
    value: 'bangladesh'
  },
  {
    label: 'Barbados',
    value: 'barbados'
  },
  {
    label: 'Belarus',
    value: 'belarus'
  },
  {
    label: 'Belgium',
    value: 'belgium'
  },
  {
    label: 'Belize',
    value: 'belize'
  },
  {
    label: 'Benin',
    value: 'benin'
  },
  {
    label: 'Bhutan',
    value: 'bhutan'
  },
  {
    label: 'Bolivia',
    value: 'bolivia'
  },
  {
    label: 'Bosnia and Herzegovina',
    value: 'bosnia'
  },
  {
    label: 'Botswana',
    value: 'botswana'
  },
  {
    label: 'Brazil',
    value: 'brazil'
  },
  {
    label: 'Brunei',
    value: 'brunei'
  },
  {
    label: 'Bulgaria',
    value: 'bulgaria'
  },
  {
    label: 'Burkina Faso',
    value: 'burkina'
  }
]
const selectedCountry = ref('')
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    scrollable
    max-width="350"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard>
      <VCardItem>
        <VCardTitle>Select Country</VCardTitle>
      </VCardItem>

      <VDivider />
      <VCardText style="height: 300px;">
        <VRadioGroup
          v-model="selectedCountry"
          :inline="false"
        >
          <VRadio
            v-for="country in countryList"
            :key="country.label"
            :label="country.label"
            :value="country.value"
            color="primary"
          />
        </VRadioGroup>
      </VCardText>

      <VDivider />

      <VCardActions class="pt-3">
        <VSpacer />
        <VBtn
          color="error"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn
          color="success"
          @click="isDialogVisible = false"
        >
          Save
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
`},wa={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)

watch(isDialogVisible, value => {
  if (!value)
    return

  setTimeout(() => {
    isDialogVisible.value = false
  }, 4000)
})
<\/script>

<template>
  <!-- Dialog Activator -->
  <VBtn
    :disabled="isDialogVisible"
    @click="isDialogVisible = true"
  >
    Start loading
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    width="300"
  >
    <VCard
      color="primary"
      width="300"
    >
      <VCardText class="pt-3">
        <p class="mb-2">
          Please stand by
        </p>
        <VProgressLinear
          indeterminate
          color="white"
          class="mb-0"
        />
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
watch(isDialogVisible, value => {
  if (!value)
    return
  setTimeout(() => {
    isDialogVisible.value = false
  }, 4000)
})
<\/script>

<template>
  <!-- Dialog Activator -->
  <VBtn
    :disabled="isDialogVisible"
    @click="isDialogVisible = true"
  >
    Start loading
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    width="300"
  >
    <VCard
      color="primary"
      width="300"
    >
      <VCardText class="pt-3">
        <p class="mb-2">
          Please stand by
        </p>
        <VProgressLinear
          indeterminate
          color="white"
          class="mb-0"
        />
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},Da={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
const isDialogTwoShow = ref(false)
<\/script>

<template>
  <VBtn @click="isDialogVisible = true">
    Open Dialog
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <VCard title="Dialog">
      <VCardText>
        Biscuit fruitcake marshmallow jelly beans jujubes halvah cupcake topping. Chocolate cookie jelly-o toffee tart oat cake. Tart sugar plum gingerbread halvah muffin sweet. Cake halvah tart souffl\xE9 pudding.
      </VCardText>

      <VCardActions>
        <VSpacer />
        <VBtn
          color="error"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogTwoShow = !isDialogTwoShow">
          Open Dialog 2
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>

  <!-- Dialog 2 -->
  <VDialog
    v-model="isDialogTwoShow"
    class="v-dialog-sm"
  >
    <VCard title="Dialog 2">
      <VCardText>I'm a nested dialog.</VCardText>
      <VCardActions>
        <VSpacer />
        <VBtn @click="isDialogTwoShow = false">
          Close
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
const isDialogTwoShow = ref(false)
<\/script>

<template>
  <VBtn @click="isDialogVisible = true">
    Open Dialog
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <VCard title="Dialog">
      <VCardText>
        Biscuit fruitcake marshmallow jelly beans jujubes halvah cupcake topping. Chocolate cookie jelly-o toffee tart oat cake. Tart sugar plum gingerbread halvah muffin sweet. Cake halvah tart souffl\xE9 pudding.
      </VCardText>

      <VCardActions>
        <VSpacer />
        <VBtn
          color="error"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogTwoShow = !isDialogTwoShow">
          Open Dialog 2
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>

  <!-- Dialog 2 -->
  <VDialog
    v-model="isDialogTwoShow"
    class="v-dialog-sm"
  >
    <VCard title="Dialog 2">
      <VCardText>I'm a nested dialog.</VCardText>
      <VCardActions>
        <VSpacer />
        <VBtn @click="isDialogTwoShow = false">
          Close
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
`},_a=b("p",null,"A dialog contains two slots, one for its activator and one for its content (default). Good for Privacy Policies.",-1),Ba=b("p",null,[i("Use "),b("code",null,"persistent"),i(" prop to create persistent dialog.")],-1),Ta=b("p",null,[i("Use "),b("code",null,"scrollable"),i(" prop to create scrollable dialog.")],-1),ja=b("p",null,[i("The "),b("code",null,"v-dialog"),i(" component makes it easy to create a customized loading experience for your application.")],-1),xa=b("p",null,"Dialogs can be nested: you can open one dialog from another.",-1),Aa=b("p",null,"Modals that do not fit within the available window space will scroll the container.",-1),Sa=b("p",null,"Due to limited space, full-screen dialogs may be more appropriate for mobile devices than dialogs used on devices with larger screens.",-1),La=b("p",null,"Just a simple example of a form in a dialog.",-1),Ja={__name:"dialog",setup(o){return(s,r)=>{const l=fa,t=Te,u=pa,p=ra,w=la,D=Ze,x=He,n=Je,c=Ie;return f(),C(X,null,{default:a(()=>[e(g,{cols:"12",md:"6"},{default:a(()=>[e(t,{title:"Basic",code:ha},{default:a(()=>[_a,e(l)]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:a(()=>[e(t,{title:"Persistent",code:va},{default:a(()=>[Ba,e(u)]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:a(()=>[e(t,{title:"Scrollable",code:Ca},{default:a(()=>[Ta,e(p)]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:a(()=>[e(t,{title:"Loader",code:wa},{default:a(()=>[ja,e(w)]),_:1},8,["code"])]),_:1}),e(g,{col:"12",md:"6"},{default:a(()=>[e(t,{title:"Nesting",code:Da},{default:a(()=>[xa,e(D)]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:a(()=>[e(t,{title:"Overflowed",code:ka},{default:a(()=>[Aa,e(x)]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:a(()=>[e(t,{title:"Fullscreen",code:Va},{default:a(()=>[Sa,e(n)]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:a(()=>[e(t,{title:"Form",code:ya},{default:a(()=>[La,e(c)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Ja as default};
