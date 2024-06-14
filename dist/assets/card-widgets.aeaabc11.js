import{o as b,c as x,w as t,a as e,a5 as s,a9 as m,k as B,ab as p,aq as N,aN as k,Z as T,a2 as M,cX as C,aa as g,ar as P,au as F,a6 as A,a7 as E,ag as j,at as I,f as _,$ as h,cW as c,e as R,V as v,cV as Y,dq as U,dl as G,dn as X,dp as q,cZ as J}from"./index.4bc17e10.js";import{V as Z,a as L}from"./VTimelineItem.2b69ee5d.js";import{b as y,V as w,a as z,c as S,d as D}from"./VCard.2c35d430.js";import{V as W}from"./vue3-apexcharts.common.72907ff0.js";import"./vue.runtime.esm-bundler.9a01116a.js";const K=s("div",{class:"d-flex justify-space-between align-center flex-wrap"},[s("h4",{class:"text-base font-weight-semibold me-1"}," 8 Invoices have been paid "),s("small",{class:"text-xs text-no-wrap"},"Wednesday")],-1),Q=s("p",{class:"mb-0"}," Invoices have been paid to the company. ",-1),ee={class:"d-flex align-center mt-2"},te=s("span",{class:"font-weight-semibold text-sm"},"invoice.pdf",-1),se=s("div",{class:"d-flex justify-space-between align-center flex-wrap"},[s("h4",{class:"text-base font-weight-medium me-1"}," Create a new project for client \u{1F60E} "),s("small",{class:"text-xs text-no-wrap"},"April, 18")],-1),ae=s("p",{class:"mb-1"}," Invoices have been paid to the company. ",-1),oe={class:"d-flex align-center mt-3"},le=s("div",null,[s("p",{class:"font-weight-medium mb-0"}," John Doe (Client) ")],-1),re=s("div",{class:"d-flex justify-space-between align-center flex-wrap"},[s("h4",{class:"text-base font-weight-medium me-1"}," Order #37745 from September "),s("small",{class:"text-xs text-no-wrap"},"January, 10")],-1),ne=s("p",{class:"mb-0"}," Invoices have been paid to the company. ",-1),ie={__name:"CardWidgetsActivityTimeline",setup($){return(n,u)=>(b(),x(w,{title:"Activity Timeline"},{default:t(()=>[e(y,null,{default:t(()=>[e(Z,{density:"compact",align:"start","line-inset":"8","truncate-line":"both"},{default:t(()=>[e(L,{"dot-color":"error",size:"x-small"},{default:t(()=>[K,Q,s("span",ee,[e(m,{color:"error",icon:"mdi-file-pdf-box",class:"me-1"}),te])]),_:1}),e(L,{"dot-color":"primary",size:"x-small"},{default:t(()=>[se,ae,s("div",oe,[e(B,{size:"24",class:"me-2",image:p(N)},null,8,["image"]),le])]),_:1}),e(L,{"dot-color":"info",size:"x-small"},{default:t(()=>[re,ne]),_:1})]),_:1})]),_:1})]),_:1}))}},ce=_("Analytics"),de={class:"me-n3"},ue={class:"text-sm font-weight-semibold"},pe={class:"me-6 mb-0"},fe={class:"text-sm font-weight-semibold me-6"},he={__name:"CardWidgetsAnalytics",setup($){const n=k(),{theme:u}=T(),{thresholds:d}=M(),f=C(u,()=>{const i=h(n.current.value.colors),l=h(n.current.value.variables),r=`rgba(${c(String(l.value["border-color"]))},${l.value["border-opacity"]})`;return{chart:{offsetY:-25,stacked:!0,parentHeightOffset:0,toolbar:{show:!1}},plotOptions:{bar:{borderRadius:10,columnWidth:"35%",endingShape:"rounded",startingShape:"rounded"}},legend:{show:!1},grid:{borderColor:r,strokeDashArray:10,padding:{left:-15,right:-5}},dataLabels:{enabled:!1},stroke:{width:6,curve:"smooth",lineCap:"round",colors:[i.value.surface]},colors:[i.value.success,i.value.secondary,i.value.warning],xaxis:{labels:{show:!1},axisTicks:{show:!1},crosshairs:{opacity:0},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},responsive:[{breakpoint:d.value.xl,options:{plotOptions:{bar:{columnWidth:"40%"}}}},{breakpoint:d.value.lg,options:{plotOptions:{bar:{columnWidth:"50%"}}}},{breakpoint:d.value.sm,options:{plotOptions:{bar:{columnWidth:"35%"}}}},{breakpoint:430,options:{plotOptions:{bar:{columnWidth:"45%"}}}}]}}),a=[{name:"Product A",data:[16e3,12e3,16e3,18e3,15e3,35e3,16e3]},{name:"Product B",data:[1e4,12e3,1e4,0,1e4,1e4,1e4]},{name:"Product C",data:[0,15e3,0,0,12e3,0,1e4]}],o=[{title:"Revenue",amount:"$845k",percentage:"82%",profit:!0},{title:"Transactions",amount:"$12.5k",percentage:"52%",profit:!1},{title:"Total Profit",amount:"$27.6k",percentage:"42%",profit:!0}];return(i,l)=>(b(),x(w,null,{default:t(()=>[e(S,null,{append:t(()=>[s("div",de,[e(g,{icon:"",size:"x-small",color:"default",variant:"text"},{default:t(()=>[e(m,{size:"24",icon:"mdi-dots-vertical"})]),_:1})])]),default:t(()=>[e(z,null,{default:t(()=>[ce]),_:1})]),_:1}),e(y,null,{default:t(()=>[e(p(W),{type:"bar",options:p(f),series:a,height:210},null,8,["options"]),(b(),P(I,null,F(o,(r,O)=>s("div",{key:r.title,class:j(["d-flex align-center",O>0?"mt-3":""])},[s("h6",ue,A(r.title),1),e(E),s("p",pe,A(r.amount),1),s("h6",fe,A(r.percentage),1),e(m,{color:r.profit?"success":"error",icon:r.profit?"mdi-chevron-up":"mdi-chevron-down"},null,8,["color","icon"])],2)),64))]),_:1})]),_:1}))}},me=_("Performance"),_e={class:"me-n3"},ve={__name:"CardWidgetsPerformance",setup($){const n=k(),{theme:u}=T(),d=C(u,()=>{const a=h(n.current.value.colors),o=h(n.current.value.variables),i=`rgba(${c(a.value["on-surface"])},${o.value["medium-emphasis-opacity"]})`,l=`rgba(${c(a.value["on-surface"])},${o.value["disabled-opacity"]})`,r=`rgba(${c(String(o.value["border-color"]))},${o.value["border-opacity"]})`;return{chart:{parentHeightOffset:0,toolbar:{show:!1}},colors:[a.value.primary,a.value.info],plotOptions:{radar:{size:110,polygons:{strokeColors:r,connectorColors:r}}},legend:{labels:{colors:i}},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:[a.value.primary,a.value.info],shadeIntensity:1,type:"vertical",opacityFrom:1,opacityTo:.9,stops:[0,100]}},labels:["Jan","Feb","Mar","Apr","May","Jun"],markers:{size:0},xaxis:{labels:{show:!0,style:{fontSize:"14px",colors:[l,l,l,l,l,l]}}},yaxis:{show:!1},grid:{show:!1}}}),f=[{name:"Income",data:[70,90,90,90,80,90]},{name:"Net Worth",data:[120,80,100,80,100,80]}];return(a,o)=>(b(),x(w,null,{default:t(()=>[e(S,null,{append:t(()=>[s("div",_e,[e(g,{icon:"",size:"x-small",color:"default",variant:"text"},{default:t(()=>[e(m,{size:"24",icon:"mdi-dots-vertical"})]),_:1})])]),default:t(()=>[e(z,null,{default:t(()=>[me]),_:1})]),_:1}),e(y,null,{default:t(()=>[e(p(W),{type:"radar",options:p(d),series:f,height:295},null,8,["options"])]),_:1})]),_:1}))}},be=_("Revenue Report"),ge={class:"me-n3"},ye={__name:"CardWidgetsRevenueReport",setup($){const n=k(),{theme:u}=T(),d=C(u,()=>{const a=h(n.current.value.colors),o=h(n.current.value.variables),i=`rgba(${c(a.value["on-surface"])},${o.value["disabled-opacity"]})`;return{chart:{stacked:!0,parentHeightOffset:0,toolbar:{show:!1}},grid:{yaxis:{lines:{show:!1}},padding:{left:0,right:0}},legend:{offsetY:8,markers:{radius:15},labels:{colors:i}},stroke:{width:2,colors:[a.value.surface]},dataLabels:{enabled:!1},colors:[a.value.success,a.value.secondary],plotOptions:{bar:{borderRadius:8,columnWidth:"50%",endingShape:"rounded",startingShape:"rounded"}},states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],crosshairs:{opacity:0},labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{enabled:!1}}}),f=[{name:"Earning",data:[95,177,284,256,105,63,168,218,72]},{name:"Expense",data:[-145,-80,-60,-180,-100,-60,-85,-75,-100]}];return(a,o)=>(b(),x(w,null,{default:t(()=>[e(S,null,{append:t(()=>[s("div",ge,[e(g,{icon:"",size:"x-small",color:"default",variant:"text"},{default:t(()=>[e(m,{size:"24",icon:"mdi-dots-vertical"})]),_:1})])]),default:t(()=>[e(z,null,{default:t(()=>[be]),_:1})]),_:1}),e(y,null,{default:t(()=>[e(p(W),{type:"bar",options:p(d),series:f,height:240},null,8,["options"])]),_:1})]),_:1}))}},xe=_("Sales Overview"),$e={class:"me-n3"},we={class:"d-flex align-center"},ke={class:"me-3"},Te=s("div",null,[s("p",{class:"mb-0"}," Number of Sales "),s("h6",{class:"text-h6"}," $86,400 ")],-1),Ce={class:"mb-1"},ze={class:"text-base font-weight-semibold mb-0"},Se={__name:"CardWidgetsSalesOverview",setup($){const n=k(),{theme:u}=T(),d=C(u,()=>{const o=h(n.current.value.colors),i=h(n.current.value.variables),l=`rgba(${c(o.value["on-surface"])},${i.value["medium-emphasis-opacity"]})`,r=`rgba(${c(o.value["on-surface"])},${i.value["high-emphasis-opacity"]})`;return{chart:{sparkline:{enabled:!0}},colors:[o.value.primary,`rgba(${c(o.value.primary)}, 0.7)`,`rgba(${c(o.value.primary)}, 0.5)`,o.value.background],stroke:{width:0},legend:{show:!1},dataLabels:{enabled:!1},labels:["Apparel","Electronics","FMCG","Other Sales"],states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},plotOptions:{pie:{customScale:.9,donut:{size:"70%",labels:{show:!0,name:{offsetY:25,color:l},value:{offsetY:-15,fontWeight:600,fontSize:"24px",color:r,formatter:O=>`${O}k`},total:{show:!0,label:"Weekly Sales",fontSize:"12px",color:l,formatter:O=>`${O.globals.seriesTotals.reduce((V,H)=>V+H)}k`}}}}}}}),f=[12,25,13,50],a=[{product:"Apparel",sales:"$1,840"},{product:"Electronic",sales:"$11,420"},{product:"FMCG",sales:"$1,840"},{product:"Other Sales",sales:"$11,420"}];return(o,i)=>(b(),x(w,null,{default:t(()=>[e(S,null,{append:t(()=>[s("div",$e,[e(g,{icon:"",size:"x-small",color:"default",variant:"text"},{default:t(()=>[e(m,{size:"24",icon:"mdi-dots-vertical"})]),_:1})])]),default:t(()=>[e(z,null,{default:t(()=>[xe]),_:1})]),_:1}),e(y,{class:"pt-11"},{default:t(()=>[e(R,null,{default:t(()=>[e(v,{sm:"6",cols:"12"},{default:t(()=>[e(p(W),{type:"donut",options:p(d),series:f,height:220},null,8,["options"])]),_:1}),e(v,{cols:"12",sm:"6"},{default:t(()=>[s("div",we,[s("div",ke,[e(B,{rounded:"",color:"primary",variant:"tonal"},{default:t(()=>[e(m,{icon:"mdi-currency-usd"})]),_:1})]),Te]),e(Y,{class:"my-3"}),e(R,null,{default:t(()=>[(b(),P(I,null,F(a,l=>e(v,{key:l.product,cols:"6"},{default:t(()=>[s("p",Ce,[e(m,{icon:"mdi-checkbox-blank-circle",color:"primary",size:"12",class:"me-2"}),s("span",null,A(l.product),1)]),s("p",ze,A(l.sales),1)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},We=_("Sales State"),Oe=_("Total $42,580 Sales"),Ve={class:"me-n3 mt-n3"},Ae={__name:"CardWidgetsSalesState",setup($){const n=k(),{theme:u}=T(),d=C(u,()=>{const a=h(n.current.value.colors);return{chart:{offsetY:-30,parentHeightOffset:0,toolbar:{show:!1}},tooltip:{enabled:!1},dataLabels:{enabled:!1},stroke:{width:5,curve:"smooth"},grid:{show:!1,padding:{left:0,top:-40,right:0}},fill:{type:"gradient",gradient:{opacityTo:.7,opacityFrom:.5,shadeIntensity:1,stops:[0,90,100],colorStops:[[{offset:0,opacity:.6,color:a.value.primary},{offset:100,opacity:.1,color:a.value.surface}]]}},theme:{monochrome:{enabled:!0,shadeTo:"light",shadeIntensity:1,color:a.value.primary}},xaxis:{type:"numeric",labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{show:!1},markers:{size:1,offsetY:1,offsetX:-10,strokeWidth:5,colors:["transparent"],strokeColors:"transparent",discrete:[{size:8,seriesIndex:0,dataPointIndex:5,strokeColor:a.value.primary,fillColor:a.value.surface}]}}}),f=[{name:"Traffic Rate",data:[300,450,350,600,500,700]}];return(a,o)=>(b(),x(w,null,{default:t(()=>[e(S,null,{append:t(()=>[s("div",Ve,[e(g,{icon:"",size:"x-small",color:"default",variant:"text"},{default:t(()=>[e(m,{size:"24",icon:"mdi-dots-vertical"})]),_:1})])]),default:t(()=>[e(z,null,{default:t(()=>[We]),_:1}),e(D,null,{default:t(()=>[Oe]),_:1})]),_:1}),e(p(W),{type:"area",options:p(d),series:f,height:295},null,8,["options"])]),_:1}))}};const Re=s("h6",{class:"text-h6"}," Total Profit ",-1),Be=_(" $482.85k "),Pe=_("Last month balance $234.40k"),Fe={class:"mt-n7 me-n3"},Ie=_(" View Report "),Le={__name:"CardWidgetsTotalProfit",setup($){const n=k(),{theme:u}=T(),{thresholds:d}=M(),f=C(u,()=>{const i=h(n.current.value.colors),l=h(n.current.value.variables),r=`rgba(${c(i.value["on-surface"])},${l.value["disabled-opacity"]})`,O=`rgba(${c(String(l.value["border-color"]))},${l.value["border-opacity"]})`;return{chart:{stacked:!0,parentHeightOffset:0,toolbar:{show:!1}},plotOptions:{bar:{borderRadius:10,columnWidth:"35%",endingShape:"rounded",startingShape:"rounded"}},xaxis:{axisTicks:{show:!1},crosshairs:{opacity:0},axisBorder:{show:!1},categories:[2016,2017,2018,2019,2020,2021,2022],labels:{style:{fontSize:"12px",colors:r,fontFamily:"inter"}}},yaxis:{labels:{style:{fontSize:"12px",colors:r,fontFamily:"inter"},formatter:V=>V>999?`${(V/1e3).toFixed(0)}k`:`${V}`}},colors:[i.value.primary,i.value.success,i.value.secondary],grid:{borderColor:O,strokeDashArray:7,padding:{bottom:-10}},legend:{show:!1},dataLabels:{enabled:!1},stroke:{width:6,curve:"smooth",lineCap:"round",colors:[i.value.surface]},states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},responsive:[{breakpoint:d.value.xl,options:{plotOptions:{bar:{columnWidth:"45%"}}}},{breakpoint:d.value.lg,options:{plotOptions:{bar:{columnWidth:"50%"}}}},{breakpoint:d.value.sm,options:{plotOptions:{bar:{columnWidth:"45%"}}}},{breakpoint:430,options:{plotOptions:{bar:{columnWidth:"55%"}}}}]}}),a=[{name:"Product A",data:[29e3,22e3,25e3,18500,29e3,2e4,34500]},{name:"Product B",data:[0,16e3,11e3,15500,0,12500,9500]},{name:"Product C",data:[0,0,0,14e3,0,11500,12e3]}],o=[{avatar:{icon:"mdi-trending-up",color:"success"},title:"$48,568.20",subtitle:"Total Profit"},{avatar:{icon:"mdi-account-outline",color:"primary"},title:"$38,453.25",subtitle:"Total Income"},{avatar:{icon:"mdi-cellphone-link",color:"secondary"},title:"$2,453.45",subtitle:"Total Expense"}];return(i,l)=>(b(),x(w,null,{default:t(()=>[e(R,{"no-gutters":""},{default:t(()=>[e(v,{cols:"12",sm:"7",class:"responsive-border"},{default:t(()=>[e(y,null,{default:t(()=>[Re,e(p(W),{type:"bar",options:p(f),series:a,height:280},null,8,["options"])]),_:1})]),_:1}),e(v,{cols:"12",sm:"5"},{default:t(()=>[e(S,null,{append:t(()=>[s("div",Fe,[e(g,{icon:"",size:"x-small",color:"default",variant:"text"},{default:t(()=>[e(m,{size:"24",icon:"mdi-dots-vertical"})]),_:1})])]),default:t(()=>[e(z,{class:"text-h5"},{default:t(()=>[Be]),_:1}),e(D,null,{default:t(()=>[Pe]),_:1})]),_:1}),e(y,{class:"pt-2"},{default:t(()=>[e(U,{class:"card-list"},{default:t(()=>[(b(),P(I,null,F(o,r=>e(G,{key:r.title},{prepend:t(()=>[e(B,{color:r.avatar.color,variant:"tonal",rounded:""},{default:t(()=>[e(m,{icon:r.avatar.icon},null,8,["icon"])]),_:2},1032,["color"])]),default:t(()=>[e(X,{class:"font-weight-semibold"},{default:t(()=>[_(A(r.title),1)]),_:2},1024),e(q,null,{default:t(()=>[_(A(r.subtitle),1)]),_:2},1024)]),_:2},1024)),64))]),_:1}),e(g,{block:"",class:"mt-6"},{default:t(()=>[Ie]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},Ye=_("Total Profit"),De={class:"me-n3"},Me={class:"mt-16"},Je=s("p",{class:"text-xs mb-2 mt-4"}," 18k new sales ",-1),He=_(" This Year "),Ne={__name:"CardWidgetsTotalProfitRadialBar",setup($){const n=k(),{theme:u}=T(),d=C(u,()=>{const a=h(n.current.value.colors),o=h(n.current.value.variables),i=`rgba(${c(a.value["on-surface"])},${o.value["high-emphasis-opacity"]})`;return{chart:{sparkline:{enabled:!0}},stroke:{dashArray:5},colors:[a.value.primary],states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},plotOptions:{radialBar:{endAngle:90,startAngle:-90,hollow:{size:"55%"},track:{background:a.value.background},dataLabels:{name:{show:!1},value:{offsetY:-5,fontSize:"20px",fontWeight:500,color:i,formatter:l=>{const r=l*35250/100;return r>999?`${(r/1e3).toFixed(1)}k`:`${r}`}}}}}}}),f=[80];return(a,o)=>(b(),x(w,null,{default:t(()=>[e(S,null,{append:t(()=>[s("div",De,[e(g,{icon:"",size:"x-small",color:"default",variant:"text"},{default:t(()=>[e(m,{size:"24",icon:"mdi-dots-vertical"})]),_:1})])]),default:t(()=>[e(z,null,{default:t(()=>[Ye]),_:1})]),_:1}),e(y,{class:"text-center"},{default:t(()=>[e(p(W),{type:"radialBar",options:p(d),series:f,height:243},null,8,["options"]),s("div",Me,[Je,e(J,{color:"primary",size:"small"},{default:t(()=>[He]),_:1})])]),_:1})]),_:1}))}},Ee=_("Total Revenue"),je={class:"me-n3"},Ue={class:"d-flex justify-space-around mt-2"},Ge={class:"d-flex align-center"},Xe=s("h6",{class:"text-sm font-weight-semibold"}," 856 ",-1),qe=s("span",{class:"text-xs"},"New User",-1),Ze={class:"d-flex align-center"},Ke=s("h6",{class:"text-sm font-weight-semibold"}," 345 ",-1),Qe=s("span",{class:"text-xs"},"Returning",-1),et={class:"d-flex align-center"},tt=s("h6",{class:"text-sm font-weight-semibold"}," 258 ",-1),st=s("span",{class:"text-xs"},"Referrals",-1),at={__name:"CardWidgetsTotalRevenue",setup($){const n=k(),{theme:u}=T(),d=C(u,()=>{const a=h(n.current.value.colors),o=h(n.current.value.variables),i=`rgba(${c(a.value["on-surface"])},${o.value["medium-emphasis-opacity"]})`,l=`rgba(${c(a.value["on-surface"])},${o.value["high-emphasis-opacity"]})`;return{chart:{sparkline:{enabled:!0}},labels:["Returning","New Users","Referrals"],legend:{show:!1},stroke:{lineCap:"round"},colors:[a.value.primary,a.value.success,a.value.warning],states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},plotOptions:{radialBar:{hollow:{size:"40%"},track:{background:"transparent",margin:10},dataLabels:{name:{offsetY:28,color:i},value:{fontSize:"2.125rem",offsetY:-12,color:l,formatter(r){return`${r}k`}},total:{show:!0,label:`${new Date().getFullYear()}`,color:i,fontSize:"12px",formatter(r){return`${r.globals.seriesTotals.reduce((O,V)=>O+V)}k`}}}}}}}),f=[71,78,86];return(a,o)=>(b(),x(w,null,{default:t(()=>[e(S,null,{append:t(()=>[s("div",je,[e(g,{icon:"",size:"x-small",color:"default",variant:"text"},{default:t(()=>[e(m,{size:"24",icon:"mdi-dots-vertical"})]),_:1})])]),default:t(()=>[e(z,null,{default:t(()=>[Ee]),_:1})]),_:1}),e(y,null,{default:t(()=>[e(p(W),{type:"radialBar",options:p(d),series:f,height:243},null,8,["options"]),s("div",Ue,[s("div",null,[s("div",Ge,[e(m,{size:"12",color:"success",icon:"mdi-checkbox-blank-circle",class:"me-1"}),Xe]),qe]),e(Y,{vertical:""}),s("div",null,[s("div",Ze,[e(m,{size:"12",color:"primary",icon:"mdi-checkbox-blank-circle",class:"me-1"}),Ke]),Qe]),e(Y,{vertical:""}),s("div",null,[s("div",et,[e(m,{size:"12",color:"warning",icon:"mdi-checkbox-blank-circle",class:"me-1"}),tt]),st])])]),_:1})]),_:1}))}},ot=s("p",{class:"mb-0"}," Total Sales ",-1),lt=s("p",{class:"mb-0"}," $21,845 ",-1),rt={class:"mt-n7 me-n3"},nt={__name:"CardWidgetsTotalSales",setup($){const n=k(),{theme:u}=T(),d=C(u,()=>{const a=h(n.current.value.colors),o=h(n.current.value.variables),i=`rgba(${c(a.value["on-surface"])},${o.value["disabled-opacity"]})`;return{chart:{parentHeightOffset:0,toolbar:{show:!1}},fill:{type:"gradient",gradient:{opacityTo:.2,opacityFrom:1,shadeIntensity:0,type:"horizontal",stops:[0,100,100]}},stroke:{width:5,curve:"smooth",lineCap:"round"},legend:{show:!1},colors:[a.value.success],grid:{show:!1,padding:{left:0,right:0,bottom:-10}},xaxis:{axisTicks:{show:!1},axisBorder:{show:!1},categories:["Jan","Feb","Mar","Apr","May","Jun"],labels:{style:{colors:i}}},yaxis:{labels:{show:!1}},tooltip:{enabled:!1}}}),f=[{name:"Total Sales",data:[0,258,30,240,150,400]}];return(a,o)=>(b(),x(w,null,{default:t(()=>[e(S,null,{append:t(()=>[s("div",rt,[e(g,{icon:"",size:"x-small",color:"default",variant:"text"},{default:t(()=>[e(m,{size:"24",icon:"mdi-dots-vertical"})]),_:1})])]),default:t(()=>[e(z,null,{default:t(()=>[ot,lt]),_:1})]),_:1}),e(y,null,{default:t(()=>[e(p(W),{type:"line",options:p(d),series:f,height:206},null,8,["options"])]),_:1})]),_:1}))}},it=_("Total Visitors"),ct={class:"me-n3"},dt={__name:"CardWidgetsTotalVisitors",setup($){const n=k(),{theme:u}=T(),d=C(u,()=>{const a=h(n.current.value.colors),o=h(n.current.value.variables),i=`rgba(${c(a.value["on-surface"])},${o.value["medium-emphasis-opacity"]})`,l=`rgba(${c(a.value["on-surface"])},${o.value["high-emphasis-opacity"]})`;return{colors:[a.value.primary,`rgba(${c(a.value.primary)}, 0.7)`,`rgba(${c(a.value.primary)}, 0.5)`,a.value.background],stroke:{width:0},dataLabels:{enabled:!1},legend:{show:!0,position:"bottom",labels:{colors:i}},labels:["FR","UK","ESP","USA"],states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},plotOptions:{pie:{customScale:.9,donut:{size:"70%",labels:{show:!0,name:{offsetY:25,color:i},value:{offsetY:-15,fontWeight:600,color:l,formatter:r=>`${r}%`},total:{show:!0,label:"Weekly Visits",fontSize:"12px",color:i,formatter:r=>`${r.globals.seriesTotals.reduce((O,V)=>O+V)}%`}}}}}}}),f=[12,25,13,50];return(a,o)=>(b(),x(w,null,{default:t(()=>[e(S,null,{append:t(()=>[s("div",ct,[e(g,{icon:"",size:"x-small",color:"default",variant:"text"},{default:t(()=>[e(m,{size:"24",icon:"mdi-dots-vertical"})]),_:1})])]),default:t(()=>[e(z,null,{default:t(()=>[it]),_:1})]),_:1}),e(y,null,{default:t(()=>[e(p(W),{type:"donut",options:p(d),series:f,height:292},null,8,["options"])]),_:1})]),_:1}))}},ut=_("Total Visits"),pt={class:"me-n3"},ft=s("p",{class:"text-xs mb-2"}," 42.2k new visits ",-1),ht=_(" This year "),mt={__name:"CardWidgetsTotalVisits",setup($){const n=k(),{theme:u}=T(),d=C(u,()=>{const a=h(n.current.value.colors),o=h(n.current.value.variables),i=`rgba(${c(a.value["on-surface"])},${o.value["medium-emphasis-opacity"]})`,l=`rgba(${c(a.value["on-surface"])},${o.value["high-emphasis-opacity"]})`;return{chart:{sparkline:{enabled:!0}},labels:["Cricket"],stroke:{lineCap:"round"},grid:{padding:{top:-10}},colors:[a.value.info],fill:{type:"gradient",gradient:{shade:"light",type:"horizontal",shadeIntensity:.2,inverseColors:!1,opacityFrom:1,opacityTo:.1,stops:[0,90]}},states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},plotOptions:{radialBar:{endAngle:180,startAngle:-180,inverseOrder:!0,hollow:{size:"62%"},track:{background:a.value.background},dataLabels:{name:{offsetY:26},value:{offsetY:-14,fontSize:"24px",fontWeight:500,color:l,formatter:r=>`${r}k`},total:{show:!0,label:"Growth",fontSize:"14px",fontWeight:400,color:i}}}}}}),f=[78];return(a,o)=>(b(),x(w,null,{default:t(()=>[e(S,null,{append:t(()=>[s("div",pt,[e(g,{icon:"",size:"x-small",color:"default",variant:"text"},{default:t(()=>[e(m,{size:"24",icon:"mdi-dots-vertical"})]),_:1})])]),default:t(()=>[e(z,null,{default:t(()=>[ut]),_:1})]),_:1}),e(y,{class:"text-center"},{default:t(()=>[e(p(W),{type:"radialBar",options:p(d),series:f,height:199},null,8,["options"]),ft,e(J,{color:"info",size:"small"},{default:t(()=>[ht]),_:1})]),_:1})]),_:1}))}},_t=_("Weekly Overview"),vt={class:"me-n3"},bt=s("div",{class:"d-flex align-center mb-3"},[s("h5",{class:"text-h5 me-4"}," 45% "),s("p",{class:"mb-0"}," Your sales performance is 45% \u{1F60E} better compared to last month ")],-1),gt=_(" Details "),yt={__name:"CardWidgetsWeeklyOverview",setup($){const n=k(),{theme:u}=T(),d=C(u,()=>{const a=h(n.current.value.colors),o=h(n.current.value.variables),i=`rgba(${c(a.value["on-surface"])},${o.value["disabled-opacity"]})`,l=`rgba(${c(String(o.value["border-color"]))},${o.value["border-opacity"]})`;return{chart:{offsetY:-10,offsetX:-15,parentHeightOffset:0,toolbar:{show:!1}},plotOptions:{bar:{borderRadius:9,distributed:!0,columnWidth:"40%",endingShape:"rounded",startingShape:"rounded"}},stroke:{width:2,colors:[a.value.surface]},legend:{show:!1},grid:{borderColor:l,strokeDashArray:7},dataLabels:{enabled:!1},colors:[a.value.background,a.value.background,a.value.background,a.value.primary,a.value.background,a.value.background],states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},xaxis:{categories:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],tickPlacement:"on",labels:{show:!1},crosshairs:{opacity:0},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{show:!0,tickAmount:4,labels:{style:{colors:i,fontSize:"12px"},formatter:r=>`${r>999?`${(r/1e3).toFixed(0)}`:r}k`}}}}),f=[{data:[37,57,45,75,57,40,65]}];return(a,o)=>(b(),x(w,null,{default:t(()=>[e(S,null,{append:t(()=>[s("div",vt,[e(g,{icon:"",size:"x-small",color:"default",variant:"text"},{default:t(()=>[e(m,{size:"24",icon:"mdi-dots-vertical"})]),_:1})])]),default:t(()=>[e(z,null,{default:t(()=>[_t]),_:1})]),_:1}),e(y,null,{default:t(()=>[e(p(W),{type:"bar",options:p(d),series:f,height:200},null,8,["options"]),bt,e(g,{block:""},{default:t(()=>[gt]),_:1})]),_:1})]),_:1}))}},xt=_("Weekly Sales"),$t=_("Total 85.4k Sales"),wt={class:"mt-n7 me-n3"},kt={class:"text-base"},Tt={class:"text-sm text-no-wrap"},Ct={__name:"CardWidgetsWeeklySales",setup($){const n=k(),{theme:u}=T(),d=C(u,()=>{const o=h(n.current.value.colors),i=h(n.current.value.variables),l=`rgba(${c(o.value["on-surface"])},${i.value["disabled-opacity"]})`;return{chart:{parentHeightOffset:0,toolbar:{show:!1}},plotOptions:{bar:{borderRadius:4,distributed:!0,columnWidth:"60%",endingShape:"rounded",startingShape:"rounded"}},legend:{show:!1},dataLabels:{enabled:!1},colors:[`rgba(${c(o.value.primary)}, 0.1)`,`rgba(${c(o.value.primary)}, 0.1)`,`rgba(${c(o.value.primary)}, 0.1)`,`rgba(${c(o.value.primary)}, 0.1)`,o.value.primary,`rgba(${c(o.value.primary)}, 0.1)`,`rgba(${c(o.value.primary)}, 0.1)`],states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},xaxis:{categories:["S","M","T","W","T","F","S"],axisTicks:{show:!1},crosshairs:{opacity:0},axisBorder:{show:!1},tickPlacement:"on",labels:{style:{fontSize:"12px",colors:l}}},yaxis:{show:!1},grid:{show:!1,padding:{top:-15,left:-10,right:-10}},tooltip:{enabled:!1}}}),f=[{data:[40,60,50,60,90,40,50]}],a=[{avatar:{icon:"mdi-trending-up",color:"primary"},title:"34.6k",subtitle:"Sales"},{avatar:{icon:"mdi-currency-usd",color:"success"},title:"$482k",subtitle:"Total Profit"}];return(o,i)=>(b(),x(w,null,{default:t(()=>[e(S,null,{append:t(()=>[s("div",wt,[e(g,{icon:"",color:"default",size:"x-small",variant:"text"},{default:t(()=>[e(m,{size:"24",icon:"mdi-dots-vertical"})]),_:1})])]),default:t(()=>[e(z,null,{default:t(()=>[xt]),_:1}),e(D,null,{default:t(()=>[$t]),_:1})]),_:1}),e(y,null,{default:t(()=>[e(p(W),{type:"bar",options:p(d),series:f,height:203},null,8,["options"])]),_:1}),e(y,{class:"d-flex justify-space-around"},{default:t(()=>[(b(),P(I,null,F(a,l=>s("div",{key:l.title,class:"d-flex align-center me-3"},[s("div",null,[e(B,{rounded:"",color:l.avatar.color,variant:"tonal",class:"me-3"},{default:t(()=>[e(m,{icon:l.avatar.icon},null,8,["icon"])]),_:2},1032,["color"])]),s("div",null,[s("h6",kt,A(l.title),1),s("span",Tt,A(l.subtitle),1)])])),64))]),_:1})]),_:1}))}};const At={__name:"card-widgets",setup($){return(n,u)=>(b(),x(R,null,{default:t(()=>[e(v,{cols:"12",md:"8"},{default:t(()=>[e(Le)]),_:1}),e(v,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(dt)]),_:1}),e(v,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(Ct)]),_:1}),e(v,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(at)]),_:1}),e(v,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(yt)]),_:1}),e(v,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(ve)]),_:1}),e(v,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(he)]),_:1}),e(v,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(Ae)]),_:1}),e(v,{cols:"12",sm:"6",md:"3"},{default:t(()=>[e(Ne)]),_:1}),e(v,{cols:"12",sm:"4",md:"3"},{default:t(()=>[e(nt)]),_:1}),e(v,{cols:"12",sm:"4",md:"3"},{default:t(()=>[e(mt)]),_:1}),e(v,{cols:"12",sm:"4",md:"3"},{default:t(()=>[e(ye)]),_:1}),e(v,{cols:"12",md:"6"},{default:t(()=>[e(ie)]),_:1}),e(v,{cols:"12",md:"6"},{default:t(()=>[e(Se)]),_:1})]),_:1}))}};export{At as default};
