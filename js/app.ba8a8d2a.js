(function(){"use strict";var e={5082:function(e,a,n){var t=n(9798),s=(n(4645),n(4220)),r=n(7700),l=n.p+"img/mapleLeaf.c50cff13.png",o=n.p+"media/torontoVideo.e3507cd3.mp4";const i=(0,s.Lk)("span",{class:"font-bold text-2xl pl-6 pr-1"},"JinStay",-1),c=(0,s.Lk)("img",{class:"w-6 h-6",src:l,alt:"Canada"},null,-1),d=[i,c],u={key:0,class:"flex flex-col justify-center items-center"},p=(0,s.Lk)("div",null,"123 Main Street",-1),m=(0,s.Lk)("div",null,"Toronto, ON",-1),f=[p,m],g={key:0,class:"w-full flex items-center overflow-x-scroll no-wrap px-2"},v=(0,s.Lk)("span",null,"|",-1),x=(0,s.Lk)("span",null,"|",-1),h={key:0,class:"font-bold text-3xl py-10"},b={class:"flex items-center h-auto"},k={ref:"videoPlayer",width:"100%",autoplay:"",muted:"",loop:""},w=(0,s.Lk)("source",{src:o,type:"video/mp4"},null,-1);function L(e,a,n,t,l,o){const i=(0,s.g2)("q-item-section"),c=(0,s.g2)("q-item"),p=(0,s.g2)("q-separator"),m=(0,s.g2)("q-list"),L=(0,s.g2)("q-menu"),y=(0,s.g2)("q-btn"),j=(0,s.g2)("router-view"),F=(0,s.gN)("close-popup");return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.Lk)("div",{class:(0,r.C4)([l.largeHeader?"h-64":"fixed h-22 py-2","w-full transition-all duration-500 text-white bg-red flex flex-col justify-between items-center"]),style:{"z-index":"5000"}},[(0,s.Lk)("div",{class:(0,r.C4)(["flex w-full",l.largeHeader?"":"justify-between flex-row-reverse"])},[(0,s.Lk)("div",{class:(0,r.C4)(l.largeHeader?"flex w-full justify-end":"")},[(0,s.bF)(y,{flat:"",color:"white",icon:"language",label:"Language"},{default:(0,s.k6)((()=>[(0,s.bF)(L,null,{default:(0,s.k6)((()=>[(0,s.bF)(m,{style:{"min-width":"100px"}},{default:(0,s.k6)((()=>[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(l.languages,(e=>(0,s.bo)(((0,s.uX)(),(0,s.Wv)(c,{key:e.key,clickable:"",onClick:a=>l.language=e.key},{default:(0,s.k6)((()=>[(0,s.bF)(i,null,{default:(0,s.k6)((()=>[(0,s.eW)((0,r.v_)(e.name),1)])),_:2},1024)])),_:2},1032,["onClick"])),[[F]]))),128)),(0,s.bF)(p)])),_:1})])),_:1})])),_:1})],2),(0,s.Lk)("div",{class:(0,r.C4)(l.largeHeader?"flex flex-col text-base w-full items-center justify-center":"")},[(0,s.Lk)("div",{class:(0,r.C4)([(l.largeHeader,"animated-text"),"flex justify-center items-center"])},d,2),l.largeHeader?((0,s.uX)(),(0,s.CE)("div",u,f)):(0,s.Q3)("",!0)],2),l.largeHeader?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("div",g,[(0,s.bF)(y,{class:"cursor-pointer rounded-3xl mr-2 hover:underline",onClick:a[0]||(a[0]=a=>e.$router.push("/home")),flat:"","text-color":"white",label:"Our home"}),v,(0,s.bF)(y,{class:"cursor-pointer rounded-3xl mr-2 hover:underline",onClick:a[1]||(a[1]=a=>e.$router.push("/activities")),flat:"","text-color":"white",label:"Things to do"}),x,(0,s.bF)(y,{class:"cursor-pointer rounded-3xl mr-2 hover:underline",onClick:a[2]||(a[2]=a=>e.$router.push("/transportation")),flat:"","text-color":"white",label:"Transportation"})]))],2),l.largeHeader?((0,s.uX)(),(0,s.CE)("span",h,(0,r.v_)("eng"===l.language?"Welcome to Toronto":"토론토에 오신것을 환영합니다")+" 👋",1)):(0,s.Q3)("",!0)],2),(0,s.Lk)("div",b,[(0,s.Lk)("video",k,[w,(0,s.eW)(" Your browser does not support the video tag. ")],512)]),(0,s.bF)(j)])}var y={name:"App",components:{},data(){return{largeHeader:!0,language:"eng",languages:[{name:"English",key:"eng"},{name:"Korean",key:"kor"},{name:"French",key:"fre"}]}},mounted(){this.$refs.videoPlayer.addEventListener("ended",this.restartVideo),window.addEventListener("scroll",this.handleScroll)},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll)},methods:{restartVideo(){this.$refs.videoPlayer.currentTime=0,this.$refs.videoPlayer.play()},handleScroll(){window.scrollY>100?this.largeHeader=!1:this.largeHeader=!0}}},j=n(1317),F=n(278),_=n(8106),C=n(5668),T=n(3359),q=n(1484),A=n(5861),P=n(515),O=n(2110),S=n.n(O);const E=(0,j.A)(y,[["render",L]]);var V=E;S()(y,"components",{QBtn:F.A,QMenu:_.A,QList:C.A,QItem:T.A,QItemSection:q.A,QSeparator:A.A}),S()(y,"directives",{ClosePopup:P.A});var M=n(5220);const Q={class:"w-full flex flex-col text-lg p-4"},G=(0,s.Lk)("span",null,"Welcome to your new home!",-1),H=(0,s.Lk)("span",null,"A beautiful Queen Bed Studio Apartment located in Downtown Toronto ✨",-1),N=(0,s.Lk)("span",null,"Sleeps: 3 😴",-1),U={class:"flex w-full no-wrap"},z={class:"flex flex-col w-full p-2"},B=(0,s.Lk)("span",{class:"px-1"},"Bedroom:",-1),J={class:"w-full h-96"},I={class:"flex flex-col w-full p-2"},X=(0,s.Lk)("span",{class:"px-1"},"Kitchen:",-1),Y={class:"w-full h-96"},W={class:"flex w-full no-wrap"},K={class:"flex flex-col w-full p-2"},R=(0,s.Lk)("span",{class:"px-1"},"Living room:",-1),$={class:"w-full h-96"},D={class:"flex flex-col w-full p-2"},Z=(0,s.Lk)("span",{class:"px-1"},"Bathroom:",-1),ee={class:"w-full h-96"},ae={class:"flex w-full no-wrap"},ne={class:"flex flex-col w-full p-2"},te=(0,s.Lk)("span",{class:"px-1"},"Interior:",-1),se={class:"w-full h-96"},re={class:"flex flex-col w-full p-2"},le=(0,s.Lk)("span",{class:"px-1"},"Exterior:",-1),oe={class:"w-full h-96"};function ie(e,a,n,t,r,l){const o=(0,s.g2)("q-carousel-slide"),i=(0,s.g2)("q-carousel");return(0,s.uX)(),(0,s.CE)("div",Q,[G,H,N,(0,s.Lk)("div",U,[(0,s.Lk)("div",z,[B,(0,s.Lk)("div",J,[(0,s.bF)(i,{swipeable:"",animated:"",modelValue:r.slide,"onUpdate:modelValue":a[0]||(a[0]=e=>r.slide=e),thumbnails:"",infinite:""},{default:(0,s.k6)((()=>[(0,s.bF)(o,{name:1,"img-src":"https://cdn.quasar.dev/img/mountains.jpg"}),(0,s.bF)(o,{name:2,"img-src":"https://cdn.quasar.dev/img/parallax1.jpg"}),(0,s.bF)(o,{name:3,"img-src":"https://cdn.quasar.dev/img/parallax2.jpg"}),(0,s.bF)(o,{name:4,"img-src":"https://cdn.quasar.dev/img/quasar.jpg"})])),_:1},8,["modelValue"])])]),(0,s.Lk)("div",I,[X,(0,s.Lk)("div",Y,[(0,s.bF)(i,{swipeable:"",animated:"",modelValue:r.slide,"onUpdate:modelValue":a[1]||(a[1]=e=>r.slide=e),thumbnails:"",infinite:""},{default:(0,s.k6)((()=>[(0,s.bF)(o,{name:1,"img-src":"https://cdn.quasar.dev/img/mountains.jpg"}),(0,s.bF)(o,{name:2,"img-src":"https://cdn.quasar.dev/img/parallax1.jpg"}),(0,s.bF)(o,{name:3,"img-src":"https://cdn.quasar.dev/img/parallax2.jpg"}),(0,s.bF)(o,{name:4,"img-src":"https://cdn.quasar.dev/img/quasar.jpg"})])),_:1},8,["modelValue"])])])]),(0,s.Lk)("div",W,[(0,s.Lk)("div",K,[R,(0,s.Lk)("div",$,[(0,s.bF)(i,{swipeable:"",animated:"",modelValue:r.slide,"onUpdate:modelValue":a[2]||(a[2]=e=>r.slide=e),thumbnails:"",infinite:""},{default:(0,s.k6)((()=>[(0,s.bF)(o,{name:1,"img-src":"https://cdn.quasar.dev/img/mountains.jpg"}),(0,s.bF)(o,{name:2,"img-src":"https://cdn.quasar.dev/img/parallax1.jpg"}),(0,s.bF)(o,{name:3,"img-src":"https://cdn.quasar.dev/img/parallax2.jpg"}),(0,s.bF)(o,{name:4,"img-src":"https://cdn.quasar.dev/img/quasar.jpg"})])),_:1},8,["modelValue"])])]),(0,s.Lk)("div",D,[Z,(0,s.Lk)("div",ee,[(0,s.bF)(i,{swipeable:"",animated:"",modelValue:r.slide,"onUpdate:modelValue":a[3]||(a[3]=e=>r.slide=e),thumbnails:"",infinite:""},{default:(0,s.k6)((()=>[(0,s.bF)(o,{name:1,"img-src":"https://cdn.quasar.dev/img/mountains.jpg"}),(0,s.bF)(o,{name:2,"img-src":"https://cdn.quasar.dev/img/parallax1.jpg"}),(0,s.bF)(o,{name:3,"img-src":"https://cdn.quasar.dev/img/parallax2.jpg"}),(0,s.bF)(o,{name:4,"img-src":"https://cdn.quasar.dev/img/quasar.jpg"})])),_:1},8,["modelValue"])])])]),(0,s.Lk)("div",ae,[(0,s.Lk)("div",ne,[te,(0,s.Lk)("div",se,[(0,s.bF)(i,{swipeable:"",animated:"",modelValue:r.slide,"onUpdate:modelValue":a[4]||(a[4]=e=>r.slide=e),thumbnails:"",infinite:""},{default:(0,s.k6)((()=>[(0,s.bF)(o,{name:1,"img-src":"https://cdn.quasar.dev/img/mountains.jpg"}),(0,s.bF)(o,{name:2,"img-src":"https://cdn.quasar.dev/img/parallax1.jpg"}),(0,s.bF)(o,{name:3,"img-src":"https://cdn.quasar.dev/img/parallax2.jpg"}),(0,s.bF)(o,{name:4,"img-src":"https://cdn.quasar.dev/img/quasar.jpg"})])),_:1},8,["modelValue"])])]),(0,s.Lk)("div",re,[le,(0,s.Lk)("div",oe,[(0,s.bF)(i,{swipeable:"",animated:"",modelValue:r.slide,"onUpdate:modelValue":a[5]||(a[5]=e=>r.slide=e),thumbnails:"",infinite:""},{default:(0,s.k6)((()=>[(0,s.bF)(o,{name:1,"img-src":"https://cdn.quasar.dev/img/mountains.jpg"}),(0,s.bF)(o,{name:2,"img-src":"https://cdn.quasar.dev/img/parallax1.jpg"}),(0,s.bF)(o,{name:3,"img-src":"https://cdn.quasar.dev/img/parallax2.jpg"}),(0,s.bF)(o,{name:4,"img-src":"https://cdn.quasar.dev/img/quasar.jpg"})])),_:1},8,["modelValue"])])])])])}var ce={name:"HomePage",components:{},data(){return{slide:1}},methods:{}},de=n(6989),ue=n(942);const pe=(0,j.A)(ce,[["render",ie]]);var me=pe;S()(ce,"components",{QCarousel:de.A,QCarouselSlide:ue.A});var fe=n.p+"img/cityMapper.14113e69.png",ge=n.p+"img/transit.da72c98d.png";const ve={class:"w-full flex flex-col py-4"},xe=(0,s.Fv)('<span class="w-full text-center font-bold text-xl pb-2">Toronto Transportation 🚌</span><div class="w-full flex flex-col items-center"><span class="text-lg">Quick jump:</span><div class="flex flex-col text-lg"><span class="cursor-pointer">• Transportation:</span><span class="ml-4 text-base cursor-pointer">• From Pearson Airport</span><span class="ml-4 text-base cursor-pointer">• General transportation</span><span class="cursor-pointer">• Payment</span><span class="cursor-pointer">• Helpful apps</span></div></div>',2),he=(0,s.Lk)("div",{class:"px-4"},[(0,s.Lk)("div",{class:"flex items-center justify-center flex-row no-wrap py-2"},[(0,s.Lk)("div",{class:"flex flex-col"},[(0,s.Lk)("span",{class:"font-bold"},"UP Express"),(0,s.Lk)("div",{class:"w-1/2"},[(0,s.Lk)("img",{class:"rounded",src:"https://upload.wikimedia.org/wikipedia/commons/a/aa/UPXatMimico.jpg",alt:"Canada"})])]),(0,s.Lk)("span",{class:"mx-4"},"This airport-dedicated train service connects Toronto Pearson International Airport with downtown, mainly used for airport access and departures.")])],-1),be=(0,s.Lk)("div",{class:"px-4"},[(0,s.Lk)("div",{class:"flex items-center justify-center flex-row no-wrap py-2"},[(0,s.Lk)("div",{class:"flex flex-col w-1/2"},[(0,s.Lk)("span",{class:"font-bold"},"Subway"),(0,s.Lk)("img",{class:"rounded",src:"https://d3d0lqu00lnqvz.cloudfront.net/media/media/a0103c46-7dc7-4df0-b488-fdc41e4de918.jpg",alt:"Canada"})]),(0,s.Lk)("span",{class:"mx-4"},"Toronto's subway system is operated by the TTC (Toronto Transit Commission) and spans various routes across the city.")]),(0,s.Lk)("div",{class:"flex items-center justify-center flex-row no-wrap py-2"},[(0,s.Lk)("div",{class:"flex flex-col w-1/2"},[(0,s.Lk)("span",{class:"font-bold"},"Bus"),(0,s.Lk)("img",{class:"rounded",src:"https://arrivein.com/wp-content/uploads/2020/07/Blog-Image-Public-Transit-Toronto-bike-rack-scaled.jpg",alt:"Canada"})]),(0,s.Lk)("span",{class:"mx-4"},"Toronto features numerous bus routes that connect major streets and neighborhoods throughout the city.")]),(0,s.Lk)("div",{class:"flex items-center justify-center flex-row no-wrap py-2"},[(0,s.Lk)("div",{class:"flex flex-col w-1/2"},[(0,s.Lk)("span",{class:"font-bold"},"Streetcar"),(0,s.Lk)("img",{class:"rounded",src:"https://www.railway-technology.com/wp-content/uploads/sites/13/2023/11/Shutterstock_1791383147.jpg",alt:"Canada"})]),(0,s.Lk)("span",{class:"mx-4"},"Streetcars operate in downtown Toronto and some surrounding areas, serving as a key mode of public transportation alongside subways and buses.")]),(0,s.Lk)("div",{class:"flex items-center justify-center flex-row no-wrap py-2"},[(0,s.Lk)("div",{class:"flex flex-col w-1/2"},[(0,s.Lk)("span",{class:"font-bold"},"GO Train"),(0,s.Lk)("img",{class:"rounded",src:"https://d3d0lqu00lnqvz.cloudfront.net/media/media/a0103c46-7dc7-4df0-b488-fdc41e4de918.jpg",alt:"Canada"})]),(0,s.Lk)("span",{class:"mx-4"},"Connecting Toronto with its suburban areas, GO Train lines are operated by GO Transit, primarily used for weekday commuting.")]),(0,s.Lk)("div",{class:"flex items-center justify-center flex-row no-wrap py-2"},[(0,s.Lk)("div",{class:"flex flex-col w-1/2"},[(0,s.Lk)("span",{class:"font-bold"},"Bike share"),(0,s.Lk)("img",{class:"rounded",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/BikeShareToronto_Temperance_St_at_Cloud_Gardens.JPG/260px-BikeShareToronto_Temperance_St_at_Cloud_Gardens.JPG",alt:"Canada"})]),(0,s.Lk)("span",{class:"mx-4"},"Toronto operates a bike share program, ideal for short-distance travel within downtown areas.")])],-1),ke=(0,s.Lk)("div",{class:"flex flex-col px-4 py-2"},[(0,s.Lk)("div",{class:"flex items-center justify-center flex-row no-wrap"},[(0,s.Lk)("div",{class:"flex flex-col w-1/2"},[(0,s.Lk)("span",{class:"font-bold"},"PRESTO"),(0,s.Lk)("img",{class:"rounded",src:"https://lh4.googleusercontent.com/nLJ_eIdJseHppJifU-jkk_2G7Rle_Yrw0QRpcRUmm7VsZ9DVG8e41u9LjeQGnh7yU5w5gg2NGFiJNTFVolizja8Yy6KH2eFeP8BZMhVoQa6p4EQYx-hKuPk87D0UnYIzeV_hAhL6YceoPYZ2UQNdmnOcLrb-pgmyq1UqLYym0NoWGwn8NplJ5p-OvE2ioOuKIbN_gDI9",alt:"Canada"})]),(0,s.Lk)("div",{class:"flex items-center"},[(0,s.Lk)("span",{class:"mx-4"},"The PRESTO card is free and allows you to board public transportation based on the loaded amount."),(0,s.Lk)("div",{class:"flex flex-col pl-8"},[(0,s.Lk)("span",{class:"font-bold"},"Where to buy:"),(0,s.Lk)("span",null," • Large supermarkets"),(0,s.Lk)("span",null," • Online"),(0,s.Lk)("span",null," • Most historical sites")])])])],-1),we=(0,s.Lk)("div",{class:"flex flex-col py-2 px-4"},[(0,s.Lk)("div",{class:"flex items-center justify-center flex-row no-wrap py-2"},[(0,s.Lk)("div",{class:"flex w-1/2 flex-col justify-center"},[(0,s.Lk)("span",{class:"font-bold text-nowrap pb-2"},"Maps/Google Maps"),(0,s.Lk)("div",{class:"flex flex-row no-wrap items-center"},[(0,s.Lk)("img",{class:"w-1/4 rounded",src:"https://www.apple.com/v/maps/d/images/overview/intro_icon__dfyvjc1ohbcm_large.png",alt:"Canada"}),(0,s.Lk)("img",{class:"w-1/4 rounded",src:"https://www.google.com/images/branding/product/2x/maps_96in128dp.png",alt:"Canada"})])]),(0,s.Lk)("span",{class:"mx-4 text-wrap"},"iPhone or Android users can use their installed maps app to create routes using Toronto transportation")]),(0,s.Lk)("div",{class:"flex items-center justify-center flex-row no-wrap py-2"},[(0,s.Lk)("div",{class:"w-1/2 flex flex-col"},[(0,s.Lk)("span",{class:"font-bold pb-2"},"Citymapper"),(0,s.Lk)("div",{class:"flex flex-row no-wrap"},[(0,s.Lk)("img",{class:"w-1/4 mr-3 rounded",src:"https://w7.pngwing.com/pngs/421/750/png-transparent-citymapper-transit-android-bus-android-angle-grass-web-application-thumbnail.png",alt:"Canada"}),(0,s.Lk)("img",{class:"w-1/4 rounded",src:fe,alt:"Canada"})])]),(0,s.Lk)("span",{class:"mx-4"},"iPhone or Android users can use their installed maps app to create routes using Toronto transportation")]),(0,s.Lk)("div",{class:"flex items-center justify-center no-wrap py-2"},[(0,s.Lk)("div",{class:"w-1/2 flex flex-col"},[(0,s.Lk)("span",{class:"font-bold pb-2"},"Transit"),(0,s.Lk)("div",{class:"flex flex-row justify-center no-wrap"},[(0,s.Lk)("img",{class:"w-1/4 mr-3 rounded",src:"https://img.masstransitmag.com/files/base/cygnus/mass/image/2021/01/icon.5ff36696179d1.png?auto=format%2Ccompress&w=640&width=640",alt:"Canada"}),(0,s.Lk)("img",{class:"w-1/4 rounded",src:ge,alt:"Canada"})])]),(0,s.Lk)("div",null,[(0,s.Lk)("span",{class:"mx-4"},"iPhone or Android users can use their installed maps app to create routes using Toronto transportation")])])],-1);function Le(e,a,n,t,r,l){const o=(0,s.g2)("q-expansion-item");return(0,s.uX)(),(0,s.CE)("div",ve,[xe,(0,s.bF)(o,{"expand-separator":"",icon:"flight_takeoff",label:"From Toronto Pearson Airport","default-opened":""},{default:(0,s.k6)((()=>[he])),_:1}),(0,s.bF)(o,{"expand-separator":"",icon:"train",label:"General transportation","default-opened":""},{default:(0,s.k6)((()=>[be])),_:1}),(0,s.bF)(o,{"expand-separator":"",icon:"payments",label:"Payment","default-opened":""},{default:(0,s.k6)((()=>[ke])),_:1}),(0,s.bF)(o,{"expand-separator":"",icon:"phone_iphone",label:"Helpful apps","default-opened":""},{default:(0,s.k6)((()=>[we])),_:1})])}var ye={name:"TransportationPage",components:{},data(){return{}},methods:{}},je=n(1655);const Fe=(0,j.A)(ye,[["render",Le]]);var _e=Fe;S()(ye,"components",{QExpansionItem:je.A});const Ce={class:"h-screen"},Te={class:"flex flex-col items-center no-wrap h-auto px-20"},qe={class:"w-full flex overflow-x-scroll no-wrap py-3 px-2"};function Ae(e,a,n,t,r,l){const o=(0,s.g2)("NavigationMap"),i=(0,s.g2)("q-btn");return(0,s.uX)(),(0,s.CE)("div",Ce,[(0,s.Lk)("div",Te,[(0,s.bF)(o)]),(0,s.Lk)("div",qe,[(0,s.bF)(i,{class:"rounded-3xl mr-2",color:"red","text-color":"white",label:"All"}),(0,s.bF)(i,{class:"rounded-3xl mr-2",color:"red","text-color":"white",label:"Landmarks"}),(0,s.bF)(i,{class:"rounded-3xl mr-2",color:"red","text-color":"white",label:"Things to do"}),(0,s.bF)(i,{class:"rounded-3xl mr-2",color:"red","text-color":"white",label:"Shopping"}),(0,s.bF)(i,{class:"rounded-3xl mr-2",color:"red","text-color":"white",label:"Restaurants"})])])}const Pe={class:"w-full",style:{height:"600px"}};function Oe(e,a,n,t,r,l){const o=(0,s.g2)("l-tile-layer"),i=(0,s.g2)("l-marker"),c=(0,s.g2)("l-map");return(0,s.uX)(),(0,s.CE)("div",Pe,[(0,s.bF)(c,{ref:"map",zoom:r.zoom,"onUpdate:zoom":a[0]||(a[0]=e=>r.zoom=e),center:r.center},{default:(0,s.k6)((()=>[(0,s.bF)(o,{url:r.url,"layer-type":"base",name:"OpenStreetMap"},null,8,["url"]),(0,s.bF)(i,{"lat-lng":r.marker},null,8,["lat-lng"])])),_:1},8,["zoom","center"])])}var Se=n(7778),Ee={name:"NavigationMap",components:{LMap:Se.Do,LTileLayer:Se.a,LMarker:Se.li},data(){return{zoom:14,center:[43.6452,-79.3806],url:"http://services.arcgisonline.com/arcgis/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}",marker:[43.6452,-79.3806]}}};const Ve=(0,j.A)(Ee,[["render",Oe]]);var Me=Ve,Qe={name:"ActivitesPage",components:{NavigationMap:Me},data(){return{}},methods:{}};const Ge=(0,j.A)(Qe,[["render",Ae]]);var He=Ge;S()(Qe,"components",{QBtn:F.A});const Ne=[{path:"/",redirect:"/home"},{path:"/home",component:me},{path:"/transportation",component:_e},{path:"/activities",component:He}],Ue=(0,M.aE)({history:(0,M.LA)(),routes:Ne});var ze=Ue,Be=n(6334),Je=n(4093),Ie=n(1594),Xe={config:{},plugins:{},iconSet:Je.A,lang:Ie.A};(0,t.Ef)(V).use(Be.A,Xe).use(ze).mount("#app")}},a={};function n(t){var s=a[t];if(void 0!==s)return s.exports;var r=a[t]={exports:{}};return e[t].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(a,t,s,r){if(!t){var l=1/0;for(d=0;d<e.length;d++){t=e[d][0],s=e[d][1],r=e[d][2];for(var o=!0,i=0;i<t.length;i++)(!1&r||l>=r)&&Object.keys(n.O).every((function(e){return n.O[e](t[i])}))?t.splice(i--,1):(o=!1,r<l&&(l=r));if(o){e.splice(d--,1);var c=s();void 0!==c&&(a=c)}}return a}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[t,s,r]}}(),function(){n.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(a,{a:a}),a}}(),function(){var e,a=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(t,s){if(1&s&&(t=this(t)),8&s)return t;if("object"===typeof t&&t){if(4&s&&t.__esModule)return t;if(16&s&&"function"===typeof t.then)return t}var r=Object.create(null);n.r(r);var l={};e=e||[null,a({}),a([]),a(a)];for(var o=2&s&&t;"object"==typeof o&&!~e.indexOf(o);o=a(o))Object.getOwnPropertyNames(o).forEach((function(e){l[e]=function(){return t[e]}}));return l["default"]=function(){return t},n.d(r,l),r}}(),function(){n.d=function(e,a){for(var t in a)n.o(a,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(a,t){return n.f[t](e,a),a}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{24:"37272fdd",26:"b8caa69b",71:"fb18853f",139:"7cdb5cc6",249:"d9aa7a46"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={},a="JinStay:";n.l=function(t,s,r,l){if(e[t])e[t].push(s);else{var o,i;if(void 0!==r)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==t||u.getAttribute("data-webpack")==a+r){o=u;break}}o||(i=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,n.nc&&o.setAttribute("nonce",n.nc),o.setAttribute("data-webpack",a+r),o.src=t),e[t]=[s];var p=function(a,n){o.onerror=o.onload=null,clearTimeout(m);var s=e[t];if(delete e[t],o.parentNode&&o.parentNode.removeChild(o),s&&s.forEach((function(e){return e(n)})),a)return a(n)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=p.bind(null,o.onerror),o.onload=p.bind(null,o.onload),i&&document.head.appendChild(o)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/JinStay/"}(),function(){var e={524:0};n.f.j=function(a,t){var s=n.o(e,a)?e[a]:void 0;if(0!==s)if(s)t.push(s[2]);else{var r=new Promise((function(n,t){s=e[a]=[n,t]}));t.push(s[2]=r);var l=n.p+n.u(a),o=new Error,i=function(t){if(n.o(e,a)&&(s=e[a],0!==s&&(e[a]=void 0),s)){var r=t&&("load"===t.type?"missing":t.type),l=t&&t.target&&t.target.src;o.message="Loading chunk "+a+" failed.\n("+r+": "+l+")",o.name="ChunkLoadError",o.type=r,o.request=l,s[1](o)}};n.l(l,i,"chunk-"+a,a)}},n.O.j=function(a){return 0===e[a]};var a=function(a,t){var s,r,l=t[0],o=t[1],i=t[2],c=0;if(l.some((function(a){return 0!==e[a]}))){for(s in o)n.o(o,s)&&(n.m[s]=o[s]);if(i)var d=i(n)}for(a&&a(t);c<l.length;c++)r=l[c],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(d)},t=self["webpackChunkJinStay"]=self["webpackChunkJinStay"]||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))}();var t=n.O(void 0,[504],(function(){return n(5082)}));t=n.O(t)})();
//# sourceMappingURL=app.ba8a8d2a.js.map