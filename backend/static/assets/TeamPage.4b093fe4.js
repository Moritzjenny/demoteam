import{_}from"./plugin-vue_export-helper.21dcd24c.js";import{z as m,r as f,o as g,A as u,B as p,C as e,D as a,J as t,R as y,N as h,O as v,P as k}from"./index.e7c05ef9.js";import{P as S,S as b}from"./SubPageHeaderComponent.3ed9f016.js";const x={class:"row"},C={class:"col-lg-4 mb-4"},T={class:"my-flip-inner my-flip-right"},F={class:"my-flip-inner-wrapper"},w={class:"my-flip-side my-flip-front"},z={class:"my-flip-image my-flip-image--1"},E=["src"],q={class:"my-flip-details"},B={class:"my-flip-heading"},D={class:"my-flip-text"},M={class:"my-flip-side my-flip-back"},A={class:"my-flip-back-inner"},G={class:"my-flip-price"},P={class:"my-flip-back-text"},I=m({__name:"TeamCardComponent",props:{imageUrl:{type:String,required:!0},name:{type:String,required:!0},subTitle:{type:String,required:!0},description:{type:String,required:!0}},setup(n){const r=f("ontouchstart"in window||navigator.maxTouchPoints>0);return g(()=>{r.value&&document.querySelectorAll(".my-flip-inner-wrapper").forEach(s=>{let l=!1;s.addEventListener("touchend",()=>{l=!l;const c=s.querySelector(".my-flip-front"),d=s.querySelector(".my-flip-back");c&&d&&(l?(c.style.transform="rotateY(-180deg)",d.style.transform="rotateY(0)"):(c.style.transform="rotateY(0)",d.style.transform="rotateY(180deg)"))})})}),(o,s)=>(u(),p("section",null,[e("div",x,[e("div",C,[e("div",null,[e("div",T,[e("div",F,[e("div",w,[e("div",z,[e("img",{class:"q-pt-md",src:n.imageUrl,alt:""},null,8,E)]),e("div",q,[e("h4",B,a(n.name),1),e("div",D,[e("p",null,a(n.subTitle),1)])])]),e("div",M,[e("div",A,[e("div",G,[e("div",null,a(n.name),1)]),e("div",P,[e("p",null,a(n.description),1)])])])])])])])])]))}});var i=_(I,[["__scopeId","data-v-b760b31c"]]);const $=n=>(v("data-v-2d12631b"),n=n(),k(),n),K=$(()=>e("div",{style:{height:"100px"}},null,-1)),U={class:"team-component-card-container q-my-xl"},Y=m({__name:"TeamComponent",setup(n){return(r,o)=>(u(),p(h,null,[K,t(S,{color:"#383838",shadowed:!1,style:{"justify-content":"center","align-content":"center"},class:"flex column"},{default:y(()=>[e("div",U,[t(i,{"image-url":"1.png",name:"Gian Cla","sub-title":"a.k.a Gianci (Coach)",description:`10. Saison/Season

Somit ist er der erfahrenste im Demofahren und gleichzeitig im Bier trinken.

`}),t(i,{"image-url":"2.png",name:"Frederik ","sub-title":"a.k.a Fredi (Social Media Manager)",description:`Seine st\xE4rken: Ass to the grass, Videos schneiden und Social Media betreuen
Seine schw\xE4chen: Uhrzeit lesen und p\xFCnktlich sein.`}),t(i,{"image-url":"3.png",name:"Mevina","sub-title":"a.k.a. Mevi",description:`
Zu unserer Erleichterung lacht sie ab den (oft dummen) Spr\xFCchen ihrer 7 m\xE4nnlichen Teamkollegen und legt selbst noch einen besseren Spruch obendrauf.
`}),t(i,{"image-url":"4.png",name:"Giancarlo","sub-title":"a.k.a. GC",description:"Er kommt zu den Trainings nie mit seinen eigenen St\xF6cken, mit einem Riesenslalomski und zu sp\xE4t."}),t(i,{"image-url":"5.png",name:"Liam","sub-title":"a.k.a. Lungo",description:"Ab und zu ein paar Minuten zu sp\xE4t dran, liegt der Grund daf\xFCr in seinen aussergew\xF6hnlich langen Duschzeremonien."}),t(i,{"image-url":"6.png",name:"Florian","sub-title":"a.k.a. Flo",description:"Trotz seines Alters kann er den Buchstaben R noch nicht richtig aussprechen. Daf\xFCr weiss er was zu tun ist, wenn der Beamer kaputt geht."}),t(i,{"image-url":"7.png",name:"Samuel","sub-title":"a.k.a Sam",description:"Bester Trick auf den Skiern: 360 pants drop."}),t(i,{"image-url":"8.png",name:"Sean","sub-title":"a.k.a Das Schaf",description:"Seine H\xFCfte macht sogar Kim Kardashian Konkurrenz und schafft dadurch auch Ass to the Grass ohne viel Knick."})])]),_:1})],64))}});var j=_(Y,[["__scopeId","data-v-2d12631b"]]);const L={class:"row justify-evenly"},H=m({__name:"TeamPage",setup(n){return(r,o)=>(u(),p(h,null,[t(b,{title:"Unser Team","header-image":"../team.jpg"}),e("div",L,[t(j)])],64))}});export{H as default};
