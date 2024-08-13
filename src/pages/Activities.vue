<template>
  <div class="background px-1">
    <div class="flex w-full justify-center pt-10 pb-2">
      <span class="text-3xl font-bold text-red">Plan your trip ✈️</span>
    </div>
    <div class="flex px-14 flex-col items-center no-wrap h-auto">
      <NavigationMap :filter="filter" />
    </div>
    <div class="w-full flex overflow-x-scroll no-wrap px-14 py-3">
      <q-btn class="rounded-3xl mr-2" :class="selected === 'toDo' ? 'brightness-75' : ''" @click="selected = 'toDo'" color="red" text-color="white" label="Things to do"></q-btn>
      <q-btn class="rounded-3xl mr-2" :class="selected === 'restaurants' ? 'brightness-75' : ''" @click="selected = 'restaurants'" color="blue" text-color="white" label="Restaurants"></q-btn>
      <q-btn class="rounded-3xl mr-2" :class="selected === 'shopping' ? 'brightness-75' : ''" @click="selected = 'shopping'" color="orange" text-color="white" label="Cafes"></q-btn>
      <q-btn class="rounded-3xl mr-2" :class="selected === 'shopping' ? 'brightness-75' : ''" @click="selected = 'shopping'" color="purple" text-color="white" label="Shopping"></q-btn>
      <q-btn class="rounded-3xl mr-2 " :class="selected === 'shopping' ? 'brightness-75' : ''" @click="selected = 'shopping'" color="green" text-color="white" label="Supermarket"></q-btn>
    </div>
    <div v-if="filter[0] === 'restaurants'" class="pl-20 flex flex-col">
      <span>👉 <b class="text-red">Pro tip:</b> In Canada it's customary to leave a 15-20% tip at restaurants</span>
      <span>If you're unsure the amount to leave, tipping the HST (tax) is a good standard!</span>
    </div>
    <div class="w-full py-4">
      <div v-if="selected === 'all' || selected === 'toDo'">
        <span @click="selected ='toDo'" class="cursor-pointer text-bold text-3xl flex justify-center text-red">Things to do 👉</span>
        <div class="flex no-wrap overflow-scroll" :class="selected === 'toDo' ? 'flex flex-col' : ''">
          <ActivitySquare
            smallPhoto="https://preview.redd.it/s6vthxvvuc851.jpg?width=1080&crop=smart&auto=webp&s=1f6119482beac6f73b684cb53fa45ec3de624496"
            photo="https://media.tacdn.com/media/attractions-splice-spp-674x446/12/33/6d/3e.jpg"
            :likes="120"
            :dislikes="52"  
            :largeView="selected === 'toDo'"
            title="CN Tower"
            type="Landmark"
            location="290 Bremner Blvd"
            walk="13 minutes"
            subway=""
            uber="3 minutes"
            child="Child (4-12) - $32"
            adult="Adult (13+) - $45"
            senior="Senior (65+) - $32"
            website="https://www.cntower.ca"
            phone="+1 (416) 868-6937"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/CN+Tower,+Bremner+Boulevard,+Toronto,+ON,+Canada/@43.6437449,-79.3948629,15z/data=!3m2!4b1!5s0x882b34d819a55ff7:0xad7cf7bcaf4e239b!4m13!4m12!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x882b34d68bf33a9b:0x15edd8c4de1c7581!2m2!1d-79.3870568!2d43.6425662?entry=ttu"
          />
          <ActivitySquare
            photo="https://www.rom.on.ca/sites/default/files/imce/ROM_strategic_plan_highlight.png"
            :likes="120"
            :dislikes="52"  
            :largeView="selected === 'toDo'"
            title="Royal Ontario Museum"
            type="Museum"
            typeIcon="museum"
            location="100 Queens Park"
            walk=""
            subway="26 minutes"
            uber="8 minutes"
            child="Child (4-14) - $16"
            youth="Youth (15-19) - $20"
            adult="Adult (20-64) - $26"
            senior="Senior (65+) - $21"
            website="https://www.rom.on.ca/en"
            phone="+1 (416) 586-8000"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/Royal+Ontario+Museum,+Queens+Park,+Toronto,+ON,+Canada/@43.6575272,-79.4075899,14z/data=!3m2!4b1!5s0x882b34d819a55ff7:0xad7cf7bcaf4e239b!4m13!4m12!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x882b34baf3dae513:0xc98434e11ec5f592!2m2!1d-79.3947771!2d43.6677097?entry=ttu"
          />
          <ActivitySquare
            photo="https://seeyousoon.ca/wp-content/uploads/2020/07/Ripleys-Aquarium-of-Canada.jpg"
            :likes="120"
            :dislikes="52"  
            :largeView="selected === 'toDo'"
            title="Ripleys Aquarium of Canada"
            type="Museum"
            typeIcon="museum"
            location="288 Bremner Blvd"
            walk="12 minutes"
            subway=""
            uber="4 minutes"
            child="Child (3-5) - $13.50"
            youth="Youth (6-13) - $30"
            adult="Adult (14-64) - $46"
            senior="Senior (65+) - $30"
            website="https://www.ripleys.com/attractions/ripleys-aquarium-of-canada"
            phone="+1 (416) 351-3474"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/Ripley's+Aquarium+of+Canada,+Bremner+Boulevard,+Toronto,+ON,+Canada/@43.6437276,-79.3948629,15z/data=!3m2!4b1!5s0x882b34d819a55ff7:0xad7cf7bcaf4e239b!4m13!4m12!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x882b34d5d5b6045b:0x8daf1a19298c213d!2m2!1d-79.3866022!2d43.6421785?entry=ttu"
          />
          <ActivitySquare
            photo="https://media.cntraveler.com/photos/616480d36a69c761590b271a/16:9/w_2560,c_limit/Distillery%20District-57.jpg"
            :likes="120"
            :dislikes="52"    
            :largeView="selected === 'toDo'"
            title="Distillery District"
            type="Dining & Shopping"
            typeIcon="store_front"
            location="55 Mill Street Toronto"
            walk=""
            subway="23 minutes"
            uber="6 minutes"
            adult=""
            website="https://www.thedistillerydistrict.com"
            phone="+1 (416) 364-1177"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/Distillery+District,+Old+Toronto,+Toronto,+ON,+Canada/@43.6494132,-79.3905821,14z/data=!3m2!4b1!5s0x882b34d819a55ff7:0xad7cf7bcaf4e239b!4m13!4m12!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x89d4cb3dc701c609:0xc3e729dcdb566a16!2m2!1d-79.35958!2d43.6503055?entry=ttu"
          />
          <ActivitySquare
            photo="https://www.todocanada.ca/wp-content/uploads/6922629483_06fc2c0d60_b.jpg"
            :likes="120"
            :dislikes="52"    
            :largeView="selected === 'toDo'"
            title="Art Gallery of Ontario"
            type="Art Gallery"
            typeIcon="museum"
            location="317 Dundas St W"
            walk=""
            subway="24 minutes"
            uber="6 minutes"
            child=""
            youth="Youth - $15"
            adult="Adult - $30"
            senior=""
            website="https://ago.ca"
            phone="+1 (416) 979-6648"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/Art+Gallery+of+Ontario,+Dundas+Street+West,+Toronto,+ON,+Canada/@43.6467484,-79.4080196,14z/data=!3m2!4b1!5s0x882b34d819a55ff7:0xad7cf7bcaf4e239b!4m13!4m12!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x882b34c5ed5319bd:0xda277755ede046af!2m2!1d-79.3925123!2d43.6536066?entry=ttu"
          />
          <ActivitySquare
            photo="https://images.hornblower.com/fit-in/1200x500/images/tours/tozoo/958aaca7-1129-4725-b16f-8604a66b0eb8.jpeg"
            :likes="120"
            :dislikes="52"    
            :largeView="selected === 'toDo'"
            title="Toronto Zoo"
            type="Zoo"
            typeIcon="pets"
            location="2000 Meadowvale Rd"
            walk=""
            subway="1 hour"
            uber="30 minutes"
            child="Child (3-12) - $25"
            youth=""
            adult="Adult (13-64) - $35"
            senior="Senior (65+) - $30"
            website="https://www.torontozoo.com"
            phone="+1 (416) 392-5900"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/Ripley's+Aquarium+of+Canada,+Bremner+Boulevard,+Toronto,+ON,+Canada/@43.6437276,-79.3948629,15z/data=!3m2!4b1!5s0x882b34d819a55ff7:0xad7cf7bcaf4e239b!4m13!4m12!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x882b34d5d5b6045b:0x8daf1a19298c213d!2m2!1d-79.3866022!2d43.6421785?entry=ttu"
          />
          <ActivitySquare
            photo="https://www.toronto.ca/wp-content/uploads/2017/12/8b4b-High-Park-Maple-Leaf.jpg"
            :likes="120"
            :dislikes="52"    
            :largeView="selected === 'toDo'"
            title="High Park"
            type="Park"
            typeIcon="nature"
            location="1873 Bloor St W"
            walk=""
            subway="40 minutes"
            uber="30 minutes"
            child=""
            youth=""
            adult=""
            senior=""
            website="https://www.highparktoronto.com"
            phone="+1 (416) 338-0338"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/High+Park,+Bloor+Street+West,+Toronto,+ON,+Canada/@43.6542897,-79.5103999,12z/data=!3m2!4b1!5s0x882b34d819a55ff7:0xad7cf7bcaf4e239b!4m18!4m17!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x882b35d32336f705:0x1bcc825a300ee67!2m2!1d-79.4636903!2d43.6465479!2m3!6e0!7e2!8j1723140000!3e3?entry=ttu"
          />
          <ActivitySquare
            photo="https://media.cntraveler.com/photos/5b2c068c8ba0800c6ed8d62a/16:9/w_2560,c_limit/St.-Lawrence-Market__GettyImages-148554964.jpg"
            :likes="120"
            :dislikes="52"    
            :largeView="selected === 'toDo'"
            title="St. Lawrence Market"
            type="Market"
            typeIcon="store_front"
            location="92-95 Front St. E"
            walk="13 minutes"
            subway=""
            uber="7 minutes"
            child=""
            youth=""
            adult=""
            senior=""
            website="https://www.stlawrencemarket.com"
            phone="+1 (416) 392-7219"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/St.+Lawrence+Market,+Toronto,+ON,+Canada/@43.6471786,-79.3862782,15z/data=!3m2!4b1!5s0x882b34d819a55ff7:0xad7cf7bcaf4e239b!4m18!4m17!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x89d4cb31b4dd275b:0xca0ab5acf1a5b6fd!2m2!1d-79.3715454!2d43.6486879!2m3!6e0!7e2!8j1723140000!3e3?entry=ttu"
          />
          <ActivitySquare
            photo="https://cdn.britannica.com/57/242557-050-698567ED/Castle-of-Casa-Loma-Toronto-Ontario-Canada.jpg"
            :likes="120"
            :dislikes="52"   
            :largeView="selected === 'toDo'"
            title="Casa Loma"
            type="Castle"
            typeIcon="castle"
            location="1 Austin Terrace"
            walk=""
            subway="24 minutes"
            uber="30 minutes"
            child="Child (4-13) - $25"
            youth="Youth (14-17) - $35"
            adult="Adult (18-64) - $40"
            senior="Senior (65+) - $35"
            website="https://casaloma.ca"
            phone="+1 (416) 923-1171"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/Casa+Loma,+Old+Toronto,+Toronto,+ON,+Canada/@43.6669375,-79.4380967,13z/data=!3m2!4b1!5s0x882b34d819a55ff7:0xad7cf7bcaf4e239b!4m18!4m17!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x882b33622b6bf9dd:0x589f556a98f282b2!2m2!1d-79.4110854!2d43.6845696!2m3!6e0!7e2!8j1723140000!3e3?entry=ttu"
          />
          <ActivitySquare
            photo="https://www.tclf.org/sites/default/files/thumbnails/image/42948_signature_EdwardsGardens.jpg"
            :likes="120"
            :dislikes="52"    
            :largeView="selected === 'toDo'"
            title="Edwards Gardens"
            type="Park"
            typeIcon="nature"
            location="755 Lawrence Ave E"
            walk=""
            subway="1 hour"
            uber="45 minutes"
            child=""
            youth=""
            adult=""
            senior=""
            website="https://torontobotanicalgarden.ca/get-gardening/public-gardens/edwards-gardens/"
            phone="+1 (416) 392-8188"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/Edwards+Gardens,+Lawrence+Avenue+East,+North+York,+ON,+Canada/@43.6911352,-79.4581621,12z/data=!3m2!4b1!5s0x882b34d819a55ff7:0xad7cf7bcaf4e239b!4m18!4m17!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x89d4cd4059a27c19:0x8589764fbf5646e7!2m2!1d-79.357924!2d43.7338039!2m3!6e0!7e2!8j1723140000!3e3?entry=ttu"
          />
        </div>
      </div>
      <div v-if="selected === 'all' || selected === 'restaurants'">
        <span @click="selected ='restaurants'" class="cursor-pointer text-bold text-3xl flex justify-center text-red">Restaurants 👉</span>
        <div class="flex no-wrap overflow-scroll" :class="selected === 'restaurants' ? 'flex flex-col' : ''">
          <RestaurantSquare
            :title="$t('HanBaTang')"
            :cuisine="$t('KoreanCuisine')"
            :location="$t('4862YongeSt')"
            reservation="Recommended"
            :takeout="$t('TakeoutAvailable')"
            :subway="$t('20MinutesBySubway')"
            uber="50 minute uber"
            :recommendationOne="$t('PorkBoneSoup')"
            :recommendationTwo="$t('BulgogiBibimbap')"
            website="https://hanbatang.ca"
            phone="+1 (416) 546-8218"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/Han+Ba+Tang,+Yonge+Street,+North+York,+ON,+Canada/@43.7072743,-79.4508689,12z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x882b2d64f91a4439:0x3e0fd5b3d55de893!2m2!1d-79.4115261!2d43.7628825?entry=ttu"
          />
          <RestaurantSquare
            title="Lee Chen Asian Bistro"
            cuisine="🇨🇳 Chinese cuisine"
            location="214 King St W"
            reservation="Recommended"
            takeout="Available"
            walk="10 minute walk"
            subway="6 minute subway"
            uber=""
            recommendationOne="Steamed shrimp Dumplings ($12)"
            recommendationTwo="Soup dumplings ($12)"
            website="https://leechenbistro.com"
            phone="+1 (416) 519-8688"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/Lee+Chen+Asian+Bistro,+King+Street+West,+Toronto,+ON,+Canada/@43.6465837,-79.3886425,16z/data=!3m2!4b1!5s0x882b34d819a55ff7:0xad7cf7bcaf4e239b!4m18!4m17!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x882b34d19d261df3:0x83289b0c0192e2a!2m2!1d-79.3866356!2d43.6473696!2m3!6e0!7e2!8j1723140000!3e3?entry=ttu"
          />
          <RestaurantSquare
            title="JaBistro"
            cuisine="🇨🇳 Japanese cuisine"
            location="222 Richmond St W"
            reservation="Required"
            takeout="Available"
            walk="15 minute walk"
            subway="9 minute subway"
            uber=""
            recommendationOne="Omakase lunch ($88)"
            recommendationTwo="Omakase dinner ($145)"
            website="https://www.jabistro.com"
            phone="+1 (647) 748-0222"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/JaBistro,+Richmond+Street+West,+Toronto,+ON,+Canada/@43.6465837,-79.3886425,16z/data=!3m1!5s0x882b34d819a55ff7:0xad7cf7bcaf4e239b!4m18!4m17!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x882b34d1d5dce365:0x6ae23a63feb7c48b!2m2!1d-79.3881626!2d43.64979!2m3!6e0!7e2!8j1723140000!3e3?entry=ttu"
          />
          <RestaurantSquare
            title="Canoe Restaurant and Bar"
            cuisine="🇺🇸 Western cuisine"
            location="66 Wellington St W"
            reservation="Recommended"
            takeout="Available"
            walk="8 minute walk"
            subway=""
            uber="3 minute uber"
            website="https://www.canoerestaurant.com"
            phone="+1 (416) 364-0054"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/JaBistro,+Richmond+Street+West,+Toronto,+ON,+Canada/@43.6465837,-79.3886425,16z/data=!3m1!5s0x882b34d819a55ff7:0xad7cf7bcaf4e239b!4m18!4m17!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x882b34d1d5dce365:0x6ae23a63feb7c48b!2m2!1d-79.3881626!2d43.64979!2m3!6e0!7e2!8j1723140000!3e3?entry=ttu"
          />
          <RestaurantSquare
            title="Maple Leaf Tavern"
            cuisine="🇨🇦 Canadian cuisine"
            location="66 Wellington St W"
            reservation="Recommended"
            takeout="Available"
            walk="8 minute walk"
            subway=""
            uber="3 minute uber"
            website="https://www.canoerestaurant.com"
            phone="+1 (416) 364-0054"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/JaBistro,+Richmond+Street+West,+Toronto,+ON,+Canada/@43.6465837,-79.3886425,16z/data=!3m1!5s0x882b34d819a55ff7:0xad7cf7bcaf4e239b!4m18!4m17!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x882b34d1d5dce365:0x6ae23a63feb7c48b!2m2!1d-79.3881626!2d43.64979!2m3!6e0!7e2!8j1723140000!3e3?entry=ttu"
          />
        </div>
      </div>
      <div v-if="selected === 'all' || selected === 'shopping'">
        <span @click="selected ='shopping'" class="text-bold cursor-pointer text-3xl flex justify-center text-red">Shopping 👉</span>
        <div class="flex no-wrap overflow-scroll" :class="selected === 'shopping' ? 'flex flex-col' : ''">
          <ShoppingSquare
            :likes="324"
            :dislikes="52"
            :largeView="selected === 'shopping'"
            image="https://allthebestspots.com/wp-content/uploads/2024/01/Depositphotos_eaton-center_S.jpg"
            title="Eaton Centre"
            address="220 Yonge St"
            stores="255 stores"
            walk="15 minutes"
            subway=""
            uber="4 minutes"
            website="https://shops.cadillacfairview.com/property/cf-toronto-eaton-centre"
            phone="+1 416-598-8560"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/Eaton+Centre,+Yonge+Street,+Toronto,+ON,+Canada/@43.650139,-79.3904687,15z/data=!3m2!4b1!5s0x882b31b95f52582d:0x20b5c47effb49f3d!4m13!4m12!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x882b34cb510746bd:0x8b89147b8cbbc837!2m2!1d-79.3806994!2d43.6544382?entry=ttu"
          />
          <ShoppingSquare
            :likes="103"
            :dislikes="12"
            :largeView="selected === 'shopping'"
            image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/98/16/90/east-wing.jpg?w=1200&h=-1&s=1"
            title="Yorkdale Shopping Centre"
            address="3401 Dufferin St"
            stores="270 stores"
            walk=""
            subway="1 hour"
            uber="27 minutes"
            website="https://yorkdale.com"
            phone="+1 416-789-3261"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/3401+Dufferin+St,+North+York,+ON+M6A+3A1,+Canada/@43.6707989,-79.8027636,10z/data=!3m2!4b1!5s0x882b31b95f52582d:0x20b5c47effb49f3d!4m13!4m12!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x882b3235ba3275ad:0x21f678375497bf4a!2m2!1d-79.4528087!2d43.7251083?entry=ttu"
          />
          <ShoppingSquare
            :likes="27"
            :dislikes="120"  
            :largeView="selected === 'shopping'"
            image="https://images.ctfassets.net/70unvdt5g4gf/2lsnucM0wTYBkBcpNGPf76/92c5d71628adecdd5628e6c9730921a9/170519-Sherway-418-min.jpg"
            title="Sherway Gardens"
            address="220 Yonge St"
            stores="215 stores"
            walk=""
            subway="1 hour"
            uber="14 minutes"
            website="https://shops.cadillacfairview.com/property/cf-sherway-gardens"
            phone="+1 416-621-1070"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/Sherway+Gardens,+The+West+Mall,+Etobicoke,+ON,+Canada/@43.6311567,-79.7991707,10z/data=!3m1!5s0x882b31b95f52582d:0x20b5c47effb49f3d!4m14!4m13!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x882b4806de464d0d:0x231db41dd5d2cc91!2m2!1d-79.5571072!2d43.6118804!3e3?entry=ttu"
          />
          <ShoppingSquare
            :likes="120"
            :dislikes="52"  
            :largeView="selected === 'shopping'"
            image="https://blog.databid.com/hubfs/Square%20one-1.jpg"
            title="Square One Shopping Centre"
            address="100 City Centre Dr"
            stores="360+ stores"
            walk=""
            subway="1 hour"
            uber="24 minutes"
            website="https://shopsquareone.com"
            phone="+1 905-270-7771"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/Square+One+Shopping+Centre,+City+Centre+Drive,+Mississauga,+ON,+Canada/@43.6401801,-79.8421216,10z/data=!3m2!4b1!5s0x882b31b95f52582d:0x20b5c47effb49f3d!4m13!4m12!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x882b47149e001f97:0xf50b13c4cabe7fbc!2m2!1d-79.6424732!2d43.5930011?entry=ttu"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationMap from '../components/NavigationMap.vue';
import ActivitySquare from '@/components/ActivitySquare.vue';
import RestaurantSquare from '@/components/RestaurantSquare.vue';
import ShoppingSquare from '@/components/ShoppingSquare.vue';
export default {
  name: 'ActivitesPage',
  components: {
    NavigationMap, ActivitySquare, RestaurantSquare, ShoppingSquare
  },
  data() {
    return {
      image: '@/assets/background.jpg',
      selected: 'all',
      filter: ['shopping', 'restaurants', 'acitivies']
    }
  },
  methods: {
  },
  watch: {
    selected () {
      window.scrollTo({
        top: 1650,
        behavior: 'smooth'
      });
      if (this.selected === 'all') {
        this.filter = ['shopping', 'restaurants', 'acitivies']
      } else if (this.selected === 'shopping') {
        this.filter = ['shopping']
      } else if (this.selected === 'activites') {
        this.filter = ['activities']
      } else {
        this.filter = ['restaurants']
      }
    }
  }
}
</script>

<style>
  .background {
    background-color: #F8F8F8;
  }
</style>
