import{_ as d,j as s,c as _,f as v,u as l,h as f,v as h,b as t,l as V,t as x,o as m,p as C,a as I}from"./index-2778199a.js";import{I as T}from"./InputTextChild-ceebba4f.js";const b=a=>(C("data-v-bca0909f"),a=a(),I(),a),P={class:""},S=b(()=>t("span",null,"从子组件（InputTextChild.vue）接收到的值：",-1)),y={__name:"passValParent",setup(a){let e=s(""),n=s("这句话该由父组件（PassValParent）传递到子组件（InputTextChild.vue）.");function i(){n.value+=e.value}let o=s("");function r(p){o.value=p}return(p,u)=>(m(),_("div",P,[v(T,{title:l(n),onOutEventTest:r},null,8,["title"]),f(t("input",{type:"text",class:"inputs",placeholder:"文本框中的内容会被发送","onUpdate:modelValue":u[0]||(u[0]=c=>V(e)?e.value=c:e=c)},null,512),[[h,l(e)]]),t("button",{class:"btn1",onClick:i}," 发送到子组件"),t("div",null,[S,t("span",null,x(l(o)),1)])]))}},F=d(y,[["__scopeId","data-v-bca0909f"]]);export{F as default};
