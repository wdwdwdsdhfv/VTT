import{_ as x,j as i,y as r,c as D,b as l,h as p,v as _,u as h,l as m,o as g,p as I,a as V,G as v}from"./index-2778199a.js";const o=c=>(I("data-v-cd76743f"),c=c(),V(),c),w=o(()=>l("div",{class:"title"}," 防抖(Debounce)与节流(Throttle) ",-1)),A={class:"Debouncebox"},B=o(()=>l("span",null,"普通搜索:",-1)),S=o(()=>l("br",null,null,-1)),U=o(()=>l("span",null,"防抖搜索:",-1)),k=o(()=>l("br",null,null,-1)),E=o(()=>l("span",null,"节流搜索:",-1)),F={__name:"DebounceAndThrottle",setup(c){let n=i(""),a=i(""),u=i("");r(()=>n.value,(s,t)=>{v({message:`${s}, this is a success message.普通搜索`,type:"success",duration:1e3})});const f=y(s=>{v({message:`${s}, this is a success message.防抖搜索`,type:"success",duration:1e3})},1e3);r(()=>a.value,(s,t)=>{f(s)});const b=T(s=>{v({message:`${s}, this is a success message.节流搜索`,type:"success",duration:1e3})},1e3);r(()=>u.value,(s,t)=>{b(s)});function y(s,t){let e=null;return(...d)=>{e&&clearTimeout(e),e=setTimeout(()=>{s.apply(this,d)},t)}}function T(s,t){let e=null;return(...d)=>{e||(e=setTimeout(()=>{s.apply(this,d),e=null},t))}}return(s,t)=>(g(),D("div",null,[w,l("div",A,[B,p(l("input",{type:"text",placeholder:"普通搜索","onUpdate:modelValue":t[0]||(t[0]=e=>m(n)?n.value=e:n=e)},null,512),[[_,h(n)]]),S,U,p(l("input",{type:"text",placeholder:"防抖搜索","onUpdate:modelValue":t[1]||(t[1]=e=>m(a)?a.value=e:a=e)},null,512),[[_,h(a)]]),k,E,p(l("input",{type:"text",placeholder:"节流搜索","onUpdate:modelValue":t[2]||(t[2]=e=>m(u)?u.value=e:u=e)},null,512),[[_,h(u)]])])]))}},j=x(F,[["__scopeId","data-v-cd76743f"]]);export{j as default};
