import{_ as a,c as n,b as s,t as _,h as u,m as v,g as h,o as c,q as l,p as r,a as f}from"./index-2778199a.js";const p={name:"Directive",data(){return{img:'<img src="https://img2.baidu.com/it/u=3217543765,3223180824&fm=253&fmt=auto&app=120&f=JPEG" alt="">',sum:1,numOnce:100}},methods:{numOnceAdd(){this.numOnce++}}},i=o=>(r("data-v-8414f2fe"),o=o(),f(),o),x=i(()=>s("div",{class:"title"}," Directive ",-1)),g={class:"box"},k=i(()=>s("h4",null,"v-html",-1)),O={class:"html_text"},b={class:"img_left img_box"},y={class:"img_right img_box"},D=["innerHTML"],w=i(()=>s("h4",null,"v-if / v-else-if / v-else",-1)),S={key:0,class:"if_text"},B={key:1,class:"if_text"},I={key:2,class:"if_text"},T=i(()=>s("h4",null,"v-show",-1)),A={class:"if_text"},E=i(()=>s("h4",null,"v-once",-1)),H={class:"once_text"};function L(o,t,M,N,e,d){return c(),n("div",null,[x,s("div",g,[k,s("div",O,[s("div",b,_(e.img),1),s("div",y,[s("div",{class:"sa",innerHTML:e.img},null,8,D)])]),w,e.sum===1?(c(),n("div",S,"第一个div")):e.sum===2?(c(),n("div",B,"第二个div")):(c(),n("div",I,"第三个div")),T,u(s("div",A,"第一个show",512),[[v,e.sum===1]]),E,s("span",H,_(e.numOnce),1),t[0]||(l(-1),t[0]=s("span",{class:"once_text"},[h(_(e.numOnce),1)]),l(1),t[0]),s("button",{onClick:t[1]||(t[1]=(...m)=>d.numOnceAdd&&d.numOnceAdd(...m))},"numOnce ++")])])}const q=a(p,[["render",L],["__scopeId","data-v-8414f2fe"]]);export{q as default};
