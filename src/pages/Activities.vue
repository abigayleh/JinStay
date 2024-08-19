<template>
  <div class="px-1" style="background-color: #f6f7f8;">
    <div class="flex w-full justify-center pt-10 pb-2">
      <span class="text-3xl font-bold text-red">Plan your trip ✈️</span>
    </div>
    <div class="flex px-2 sm:px-14 flex-col items-center no-wrap h-auto">
      <NavigationMap :filter="selected" />
    </div>
    <div class="w-full flex flex-nowrap overflow-x-scroll text-nowrap px-14 py-3">
      <q-btn class="rounded-3xl mr-2" :class="selected !== 'all' ? 'brightness-75' : ''" @click="selected = 'all'" color="indigo" text-color="white" label="All"></q-btn>
      <q-btn style="min-width: 136px;" class="rounded-3xl mr-2" :class="selected !== 'toDo' ? 'brightness-75' : ''" @click="selected = 'toDo'" color="red" text-color="white" label="Things to do"></q-btn>
      <q-btn class="rounded-3xl mr-2" :class="selected !== 'restaurants' ? 'brightness-75' : ''" @click="selected = 'restaurants'" color="blue-10" text-color="white" label="Restaurants"></q-btn>
      <q-btn class="rounded-3xl mr-2" :class="selected !== 'cafe' ? 'brightness-75' : ''" @click="selected = 'cafe'" color="orange" text-color="white" label="Cafes"></q-btn>
      <q-btn class="rounded-3xl mr-2" :class="selected !== 'shopping' ? 'brightness-75' : ''" @click="selected = 'shopping'" color="purple" text-color="white" label="Shopping"></q-btn>
      <q-btn class="rounded-3xl mr-2 " :class="selected !== 'market' ? 'brightness-75' : ''" @click="selected = 'market'" color="green" text-color="white" label="Supermarket"></q-btn>
      <q-btn class="rounded-3xl mr-2 " :class="selected !== 'seasonal' ? 'brightness-75' : ''" @click="selected = 'seasonal'" color="cyan" text-color="white" label="Seasonal"></q-btn>
    </div>
    <div v-if="selected === 'restaurants'" class="pl-20 flex flex-col">
      <span>👉 <b class="text-red">Pro tip:</b> In Canada it's customary to leave a 15-20% tip at restaurants</span>
      <span>If you're unsure the amount to leave, tipping the HST (tax) is a good standard!</span>
    </div>
    <div class="w-full py-4">
      <div v-if="selected === 'all' || selected === 'toDo'">
        <span @click="selected ='toDo'" class="cursor-pointer text-bold text-3xl flex justify-center text-red">Things to do 👉</span>
        <div class="flex no-wrap overflow-scroll" :class="selected === 'toDo' ? 'flex flex-col' : ''">
          <ActivitySquare
            @clickMoreInfo="() => {selected = 'toDo'; clickMoreInfo(0)}"  
            smallPhoto="https://preview.redd.it/s6vthxvvuc851.jpg?width=1080&crop=smart&auto=webp&s=1f6119482beac6f73b684cb53fa45ec3de624496"
            :photos="[
              'https://media.tacdn.com/media/attractions-splice-spp-674x446/12/33/6d/3e.jpg',
              'https://www.travelandleisure.com/thmb/_HL3sxR00kCnqnHUOqAulCMzXTU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cn-tower-observation-deck-TORONTOFAMILY0222-e8c3d2ba06414ccfa2a551ee460d6cab.jpg',
              'https://www.cntower.ca/sites/default/files/styles/16_9_scale_and_crop_medium/public/images/hours.jpg?h=5ce0254a&itok=UPwrStAG'
            ]"
            :likesIndex="0"
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
            @clickMoreInfo="() => {selected = 'toDo'; clickMoreInfo(1)}"  
            smallPhoto="https://s3-media0.fl.yelpcdn.com/bphoto/EsoNZxUsO5qRSvHmvnTnxg/348s.jpg"  
            :photos="[
              'https://seeyousoon.ca/wp-content/uploads/2020/07/Ripleys-Aquarium-of-Canada.jpg',
              'https://tirbnb.com/wp-content/uploads/2024/03/ripley-aquarium-toronto-building.jpg',
              'https://childslife.ca/wp-content/uploads/2022/03/RAC-1.jpg'
            ]"
            :likesIndex="1"
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
            @clickMoreInfo="() => {selected = 'toDo'; clickMoreInfo(2)}"  
            smallPhoto="https://i.pinimg.com/originals/87/3c/4f/873c4f20eb58b349e2813a81b7330bdf.jpg"  
            :photos="[
              'https://media.cntraveler.com/photos/5b2c068c8ba0800c6ed8d62a/16:9/w_2560,c_limit/St.-Lawrence-Market__GettyImages-148554964.jpg',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Toronto_-_ON_-_St_Lawrence_Market.jpg/2560px-Toronto_-_ON_-_St_Lawrence_Market.jpg',
              'https://facts.net/wp-content/uploads/2023/09/14-intriguing-facts-about-st-lawrence-market-toronto-1694436206.jpg'
            ]"
            :likesIndex="2" 
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
            @clickMoreInfo="() => {selected = 'toDo'; clickMoreInfo(3)}"  
            smallPhoto="https://cdn.getyourguide.com/img/tour/580594b2fbd324a2.jpeg/vertical_520_780.jpg"  
            :photos="[
              'https://media.cntraveler.com/photos/616480d36a69c761590b271a/16:9/w_2560,c_limit/Distillery%20District-57.jpg',
              'https://media.blogto.com/articles/20201120-distillery5.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70',
              'https://media.istockphoto.com/id/485612119/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%B2-%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D1%80%D0%B0%D0%B9%D0%BE%D0%BD-distillery-district-%D1%82%D0%BE%D1%80%D0%BE%D0%BD%D1%82%D0%BE.jpg?s=612x612&w=0&k=20&c=GiqY8ubl9w3rkjF8SI89amQW3JP1MtbByP6OqShwfDA='
            ]"
            :likesIndex="3"
            :largeView="selected === 'toDo'"
            title="Distillery District"
            type="Historical Landmark"
            typeIcon="historical"
            location="55 Mill St"
            walk=""
            subway="21 minutes"
            uber="8 minutes"
            child=""
            youth=""
            adult=""
            senior=""
            website="https://www.thedistillerydistrict.com"
            phone="+1 (416) 364-1177"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/Distillery+District,+Toronto,+ON,+Canada/@43.6467384,-79.3810554,15z/data=!3m2!4b1!5s0x882b34d819a55ff7:0xad7cf7bcaf4e239b!4m18!4m17!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x882b3517f4a2060d:0x8b5d6dfb77378fc7!2m2!1d-79.3597088!2d43.650155!2m3!6e0!7e2!8j1723140000!3e3?entry=ttu"
          />
          <ActivitySquare
            @clickMoreInfo="() => {selected = 'toDo'; clickMoreInfo(4)}"    
            smallPhoto="https://sothebys-com.brightspotcdn.com/dims4/default/3e2cf65/2147483647/strip/true/crop/2632x3900+0+0/resize/648x960!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2F51%2F12%2F3a89b54648b8bfb7baec59f9f0aa%2Fa-44523.jpg"  
            :photos="[
              'https://www.todocanada.ca/wp-content/uploads/6922629483_06fc2c0d60_b.jpg',
              'https://www.sartle.com/media/place/art-gallery-of-ontario.jpg',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Art_Gallery_of_Ontario_%2823782351913%29.jpg/2560px-Art_Gallery_of_Ontario_%2823782351913%29.jpg'
            ]"
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
            @clickMoreInfo="() => {selected = 'toDo'; clickMoreInfo(5)}"  
            smallPhoto="https://assets.simpleviewinc.com/simpleview/image/upload/crm/toronto/rsz_shutterstock_1715341101_5f3910fe-5056-a36f-2362d19bfc79fb17.jpg"  
            :photos="[
              'https://cdn.britannica.com/57/242557-050-698567ED/Castle-of-Casa-Loma-Toronto-Ontario-Canada.jpg',
              'https://hikingthegta.com/wp-content/uploads/2022/08/img_7387.jpg?w=624',
              'https://cdn.skyrisecities.com/sites/default/files/images/articles/2019/10/39451/39451-131023.jpg'
            ]"
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
            @clickMoreInfo="() => {selected = 'toDo'; clickMoreInfo(6)}"    
            smallPhoto="https://aws-tiqets-cdn.imgix.net/images/content/b065d37d00074c9caa3ead75b94f275f.jpg?auto=format&fit=crop&h=800&ixlib=python-3.2.1&q=70&w=800&s=6b3882d4c732bb1efa3cafdaa3f3512a"  
            :photos="[
              'https://www.rom.on.ca/sites/default/files/imce/ROM_strategic_plan_highlight.png',
              'https://www.sixteen-nine.net/wp-content/uploads/2021/08/MomentFactory_ROM_CentennialBall-scaled.jpg',
              'https://www.rom.on.ca/sites/default/files/imce/ROMGallery_F1_Rotunda_Website_DC.jpg'
            ]"
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
            @clickMoreInfo="() => {selected = 'toDo'; clickMoreInfo(7)}"    
            smallPhoto="https://live.staticflickr.com/2106/2466481344_0b4d39c4fe_c.jpg"  
            :photos="[
              'https://www.toronto.ca/wp-content/uploads/2017/12/8b4b-High-Park-Maple-Leaf.jpg',
              'https://media.cntraveler.com/photos/5b2c06854c18411aa3e9f5d3/16:9/w_2560,c_limit/High-Park_GettyImages-171589236.jpg',
              'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/49000/49157-High-Park.jpg'
            ]"
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
            @clickMoreInfo="() => {selected = 'toDo'; clickMoreInfo(8)}"    
            smallPhoto="https://www.tzwcadopt.ca/cdn/shop/products/5.png?v=1679413686"  
            :photos="[
              'https://images.hornblower.com/fit-in/1200x500/images/tours/tozoo/958aaca7-1129-4725-b16f-8604a66b0eb8.jpeg',
              'https://torontonicity.com/wp-content/uploads/2022/10/Giraffes-at-Toronto-Zoo-photo-courtesy-Toronto-Zoo-1.jpg',
              'https://facts.net/wp-content/uploads/2023/09/11-extraordinary-facts-about-toronto-zoo-1694773326.jpg'
            ]"
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
            @clickMoreInfo="() => {selected = 'toDo'; clickMoreInfo(9)}"    
            smallPhoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiZHhi8RBHRvb3M73_s7U4kn3l9ywWrYzFbw&s"  
            :photos="[
              'https://www.tclf.org/sites/default/files/thumbnails/image/42948_signature_EdwardsGardens.jpg',
              'https://www.yoplaces.ca/images/gallery/edwardsgarden/DSC_0059.jpg',
              'https://t4.ftcdn.net/jpg/03/61/11/17/360_F_361111758_yH54qvqIoc1hIrjsNUDMru5DcnSSz57n.jpg'
            ]"
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
            @clickMoreInfo="() => {selected = 'restaurants'; clickMoreInfo(0)}"  
            :likes="324"
            :dislikes="52"
            :largeView="selected === 'restaurants'"
            smallPhoto="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/7d/70/ea/course-6-surf-turf.jpg?w=1100&h=-1&s=1"
            :photos="[
              'https://dynamic-media-cdn.tripadvisor.com/media/photo-s/02/a2/e8/71/filename-img-5790-jpg.jpg?w=600&h=-1&s=1',
              'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/63/d2/e1/amazing-restaurant-for.jpg?w=1200&h=-1&s=1',
              'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/c0/ae/03/hauptgericht.jpg?w=1200&h=-1&s=1'
            ]"
            title="Canoe Restaurant and Bar"
            cuisine="🇺🇸 Western cuisine"
            location="66 Wellington St W"
            reservation="Reservation recommended"
            takeout="Takeout available"
            walk="8 minutes"
            subway=""
            uber=""
            recommendationOne=""
            recommendationTwo=""
            website="https://www.canoerestaurant.com"
            phone="+1 416-364-0054"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/INS+Market,+Front+Street+West,+Toronto,+ON,+Canada/@43.6447418,-79.3809071,17z/data=!3m1!5s0x882b31b95f52582d:0x20b5c47effb49f3d!4m17!4m16!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x882b34d357aead6f:0xba45926cb9d5214d!2m2!1d-79.3808476!2d43.6444303!2m3!6e0!7e2!8j1723717799?entry=ttu"
          />
          <RestaurantSquare
            @clickMoreInfo="() => {selected = 'restaurants'; clickMoreInfo(1)}"  
            :likes="324"
            :dislikes="52"
            :largeView="selected === 'restaurants'"
            smallPhoto="https://scontent-gmp1-1.xx.fbcdn.net/v/t1.6435-9/42867079_2106360159396047_8322875076017913856_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0327a3&_nc_ohc=dIp3qQs1Rx4Q7kNvgH7rMFx&_nc_ht=scontent-gmp1-1.xx&oh=00_AYBwCa9Yrw1GFh1py3bEqcqhTW_CaA8FJmklDmS5ywXGiw&oe=66E7F922"
            :photos="[
              'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/47/80/ce/lee-chen-on-214-king.jpg?w=1200&h=-1&s=1',
              'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/f0/1c/1f/photo1jpg.jpg?w=1200&h=-1&s=1',
              'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/ab/97/52/photo1jpg.jpg?w=1100&h=-1&s=1'
            ]"
            title="Lee Chen Asian Bistro"
            cuisine="🇨🇳 Chinese cuisine"
            location="214 King St W"
            reservation="Reservation recommended"
            takeout="Takeout available"
            walk="10 minute"
            subway="6 minute"
            uber=""
            recommendationOne="Steamed shrimp Dumplings ($12)"
            recommendationTwo="Soup dumplings ($12)"
            website="https://leechenbistro.com"
            phone="+1 (416) 519-8688"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/INS+Market,+Front+Street+West,+Toronto,+ON,+Canada/@43.6447418,-79.3809071,17z/data=!3m1!5s0x882b31b95f52582d:0x20b5c47effb49f3d!4m17!4m16!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x882b34d357aead6f:0xba45926cb9d5214d!2m2!1d-79.3808476!2d43.6444303!2m3!6e0!7e2!8j1723717799?entry=ttu"
          />
          <RestaurantSquare
            @clickMoreInfo="() => {selected = 'restaurants'; clickMoreInfo(2)}"  
            :likes="324"
            :dislikes="52"
            :largeView="selected === 'restaurants'"
            smallPhoto="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/a6/e4/e5/caption.jpg?w=1100&h=-1&s=1"
            :photos="[
              'https://lh5.googleusercontent.com/p/AF1QipP7DbU1sUvPU2U55Pv-mD6ZFUTv1CAmxpA_uOJD=w408-h255-k-no',
              'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/c7/b9/fe/360-the-restaurant-at.jpg?w=1200&h=-1&s=1',
              'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/ec/6a/12/photo3jpg.jpg?w=1200&h=-1&s=1'
            ]"
            title="360 Restaurant"
            cuisine="🇺🇸 Western cuisine"
            location="290 Bremner Blvd"
            reservation="Reservation recommended"
            takeout="Takeout not available"
            recommendationOne=""
            recommendationTwo=""
            walk="11 minutes"
            subway=""
            uber="7 minutes"
            website="https://www.cntower.ca/"
            phone="+1 416-868-6937"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/INS+Market,+Front+Street+West,+Toronto,+ON,+Canada/@43.6447418,-79.3809071,17z/data=!3m1!5s0x882b31b95f52582d:0x20b5c47effb49f3d!4m17!4m16!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x882b34d357aead6f:0xba45926cb9d5214d!2m2!1d-79.3808476!2d43.6444303!2m3!6e0!7e2!8j1723717799?entry=ttu"
          />
          <RestaurantSquare
            @clickMoreInfo="() => {selected = 'restaurants'; clickMoreInfo(3)}"  
            :likes="324"
            :dislikes="52"
            :largeView="selected === 'restaurants'"
            smallPhoto="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/5b/74/f5/food.jpg?w=1100&h=-1&s=1"
            :photos="[
              'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/ff/5f/fa/exterior-photo.jpg?w=1200&h=-1&s=1',
              'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/33/00/0e/caption.jpg?w=1200&h=-1&s=1',
              'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/a6/0a/f1/foie-gras-and-pork.jpg?w=1200&h=-1&s=1'
            ]"
            title="George Restaurant"
            cuisine="🇨🇦 Canadian cuisine"
            location="111C Queen St E"
            reservation="Reservation required"
            takeout="Takeout available"
            recommendationOne=""
            recommendationTwo=""
            walk="20 minutes"
            subway="12 minutes"
            uber=""
            website="http://www.georgeonqueen.com"
            phone="+1 416-863-6006"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/INS+Market,+Front+Street+West,+Toronto,+ON,+Canada/@43.6447418,-79.3809071,17z/data=!3m1!5s0x882b31b95f52582d:0x20b5c47effb49f3d!4m17!4m16!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x882b34d357aead6f:0xba45926cb9d5214d!2m2!1d-79.3808476!2d43.6444303!2m3!6e0!7e2!8j1723717799?entry=ttu"
          />
          <RestaurantSquare
            @clickMoreInfo="() => {selected = 'restaurants'; clickMoreInfo(4)}"  
            :likes="324"
            :dislikes="52"
            :largeView="selected === 'restaurants'"
            smallPhoto="https://sparkleshinylove.com/wp-content/uploads/2015/08/image48-e1439320942189.jpg"
            :photos="[
              'https://www.blogto.com/listings/restaurants/upload/2015/06/20150604-590-Exterior.jpg',
              'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/14/fa/e0/kasa-moto.jpg?w=1200&h=-1&s=1',
              'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/05/3e/0b/caption.jpg?w=1200&h=-1&s=1'
            ]"
            title="Kasa Moto"
            cuisine="🇨🇳 Japanese cuisine"
            location="115 Yorkville Ave"
            reservation="Required"
            takeout="Takeout available"
            walk=""
            subway="17 minutes"
            uber="16 minutes"
            recommendationOne="Jidori chicken ($35)"
            recommendationTwo="Wagyu skirt steak ($56)"
            website="https://kasamoto.ca/"
            phone="+1 647-477-0423"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/INS+Market,+Front+Street+West,+Toronto,+ON,+Canada/@43.6447418,-79.3809071,17z/data=!3m1!5s0x882b31b95f52582d:0x20b5c47effb49f3d!4m17!4m16!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x882b34d357aead6f:0xba45926cb9d5214d!2m2!1d-79.3808476!2d43.6444303!2m3!6e0!7e2!8j1723717799?entry=ttu"
          />
          <RestaurantSquare
            @clickMoreInfo="() => {selected = 'restaurants'; clickMoreInfo(5)}"  
            :likes="324"
            :dislikes="52"
            :largeView="selected === 'restaurants'"
            smallPhoto="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/c9/b5/1f/20161202-193353-largejpg_rotated_90.jpg?w=1200&h=-1&s=1"
            :photos="[
              'https://media.blogto.com/uploads/2023/01/20/1674229967-20230119-MothersDumplings-1.jpg?w=1400&cmd=resize&height=2500&quality=70',
              'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/39/c7/d1/img-20180518-114602-largejpg.jpg?w=1000&h=-1&s=1',
              'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/82/6b/fd/beef-and-chive-dumplings.jpg?w=1200&h=-1&s=1'
            ]"
            title="Mothers Dumplings"
            cuisine="🇨🇳 Chinese cuisine"
            location="421 Spadina Ave"
            reservation="Reservation recommended"
            takeout="Takeout available"
            walk=""
            subway="22 minutes"
            uber="14 minutes"
            recommendationOne="Peking Duck ($80)"
            recommendationTwo="Dim Sum ($5-8)"
            website="https://mothersdumplings.com/"
            phone="+1 416-217-2008"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/INS+Market,+Front+Street+West,+Toronto,+ON,+Canada/@43.6447418,-79.3809071,17z/data=!3m1!5s0x882b31b95f52582d:0x20b5c47effb49f3d!4m17!4m16!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x882b34d357aead6f:0xba45926cb9d5214d!2m2!1d-79.3808476!2d43.6444303!2m3!6e0!7e2!8j1723717799?entry=ttu"
          />
          <RestaurantSquare
            @clickMoreInfo="() => {selected = 'restaurants'; clickMoreInfo(6)}"  
            :likes="324"
            :dislikes="52"
            :largeView="selected === 'restaurants'"
            smallPhoto="https://s3-media0.fl.yelpcdn.com/bphoto/Q4haPED_m0ljxFhiz8eyNA/348s.jpg"
            :photos="[
              'https://lh3.googleusercontent.com/p/AF1QipMFmRFkO_-g1ToLYCYuAHYjLag7d2_qwMSsifjP=s680-w680-h510',
              'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/f5/29/06/photo1jpg.jpg?w=1200&h=-1&s=1',
              'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/ec/03/d7/photo1jpg.jpg?w=1200&h=-1&s=1'
            ]"
            title="Yummy Korean Food"
            cuisine="🇰🇷 Korean cuisine"
            location="620 Bloor St W"
            reservation="Reservation recommended"
            takeout="Takeout available"
            walk=""
            subway="22 minutes"
            uber="20 minutes"
            recommendationOne="Bulgogi ($10)"
            recommendationTwo="Kimchi stew ($8)"
            website="http://www.yummykorean.com/"
            phone="+1 647-345-6588"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/INS+Market,+Front+Street+West,+Toronto,+ON,+Canada/@43.6447418,-79.3809071,17z/data=!3m1!5s0x882b31b95f52582d:0x20b5c47effb49f3d!4m17!4m16!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x882b34d357aead6f:0xba45926cb9d5214d!2m2!1d-79.3808476!2d43.6444303!2m3!6e0!7e2!8j1723717799?entry=ttu"
          />
          <RestaurantSquare
            @clickMoreInfo="() => {selected = 'restaurants'; clickMoreInfo(7)}"  
            :likes="324"
            :dislikes="52"
            :largeView="selected === 'restaurants'"
            smallPhoto="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/08/22/88/photo1jpg.jpg?w=1200&h=-1&s=1"
            :photos="[
              'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/58/d7/46/20190921-114120-largejpg.jpg?w=1000&h=-1&s=1',
              'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/e7/4d/ed/photo0jpg.jpg?w=1200&h=-1&s=1',
              'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/80/bc/4b/20-cheeseburger.jpg?w=1200&h=-1&s=1'
            ]"
            title="Maple Leaf Tavern"
            cuisine="🇨🇦 Canadian cuisine"
            location="955 Gerrad St E"
            reservation="Reservation recommended"
            takeout="Takeout available"
            recommendationOne=""
            recommendationTwo=""
            walk=""
            subway="35 minutes"
            uber="18 minutes"
            website="https://mapleleaftavern.ca/"
            phone="+1 416-465-0955"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/INS+Market,+Front+Street+West,+Toronto,+ON,+Canada/@43.6447418,-79.3809071,17z/data=!3m1!5s0x882b31b95f52582d:0x20b5c47effb49f3d!4m17!4m16!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x882b34d357aead6f:0xba45926cb9d5214d!2m2!1d-79.3808476!2d43.6444303!2m3!6e0!7e2!8j1723717799?entry=ttu"
          />
          <RestaurantSquare
            @clickMoreInfo="() => {selected = 'restaurants'; clickMoreInfo(8)}"  
            :likes="324"
            :dislikes="52"
            :largeView="selected === 'restaurants'"
            smallPhoto="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/37/5a/af/sushi.jpg?w=1200&h=-1&s=1"
            :photos="[
              'https://lh5.googleusercontent.com/p/AF1QipNNnAXssmWSUyqLeWk99cnXLdGrqBdCH4XTw5cg=w408-h272-k-no',
              'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/25/ff/c4/japanese-fried-chicken.jpg?w=1200&h=-1&s=1',
              'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/26/0e/7b/pan-fried-udon-noodle.jpg?w=1200&h=-1&s=1'
            ]"
            title="Guu Izakaya"
            cuisine="🇨🇳 Japanese cuisine"
            location="1314 Queen Street W"
            reservation="Reservation not required"
            takeout="Takeout available"
            recommendationOne=""
            recommendationTwo=""
            walk=""
            subway="40 minutes"
            uber="20 minutes"
            website="https://www.guu-izakaya.com"
            phone="+1 647-351-1314"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/INS+Market,+Front+Street+West,+Toronto,+ON,+Canada/@43.6447418,-79.3809071,17z/data=!3m1!5s0x882b31b95f52582d:0x20b5c47effb49f3d!4m17!4m16!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x882b34d357aead6f:0xba45926cb9d5214d!2m2!1d-79.3808476!2d43.6444303!2m3!6e0!7e2!8j1723717799?entry=ttu"
          />
          <RestaurantSquare
            @clickMoreInfo="() => {selected = 'restaurants'; clickMoreInfo(9)}"  
            :likes="324"
            :dislikes="52"
            :largeView="selected === 'restaurants'"
            smallPhoto="https://fastly.4sqi.net/img/general/600x600/5593721_vb3H81vViNAI7gp1yIFZvt2yQtZJ2NbUo1ZWPvRC8yo.jpg"
            :photos="[
              'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/1b/dc/e7/chodang-soon-tofu.jpg?w=1200&h=-1&s=1',
              'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/1b/dc/e6/chodang-soon-tofu.jpg?w=1200&h=-1&s=1',
              'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/1b/dc/e8/chodang-soon-tofu.jpg?w=1200&h=-1&s=1'
            ]"
            title="Chodang Soon Tofu"
            cuisine="🇰🇷 Korean cuisine"
            location="5130 Dundas St W"
            reservation="Reservation not required"
            takeout="Takeout available"
            walk=""
            subway="48 minute"
            uber="30 minutes"
            recommendationOne="Chodang ($18)"
            recommendationTwo="Stone Bowl Bulgogi ($23)"
            website="http://chodangsoontofu.bu-bi.com/?doc=sub_02"
            phone="+1 416-234-1161"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/INS+Market,+Front+Street+West,+Toronto,+ON,+Canada/@43.6447418,-79.3809071,17z/data=!3m1!5s0x882b31b95f52582d:0x20b5c47effb49f3d!4m17!4m16!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x882b34d357aead6f:0xba45926cb9d5214d!2m2!1d-79.3808476!2d43.6444303!2m3!6e0!7e2!8j1723717799?entry=ttu"
          />
        </div>
      </div>
      <div v-if="selected === 'all' || selected === 'shopping'">
        <span @click="selected ='shopping'" class="text-bold cursor-pointer text-3xl flex justify-center text-red">Shopping 👉</span>
        <div class="flex no-wrap overflow-scroll" :class="selected === 'shopping' ? 'flex flex-col' : ''">
          <ShoppingSquare
            @clickMoreInfo="() => {selected = 'shopping'; clickMoreInfo(0)}"  
            :likes="324"
            :dislikes="52"
            :largeView="selected === 'shopping'"
            smallPhoto="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,g_xy_center,h_640,q_80,w_640,x_960,y_640/v1/clients/toronto/167_3_1464_jpeg_large_ede42653-7423-47bc-b76e-49bfd2086080.jpg"
            :photos="[
              'https://allthebestspots.com/wp-content/uploads/2024/01/Depositphotos_eaton-center_S.jpg',
              'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/49000/49319-Toronto-Eaton-Centre.jpg',
              'https://retailinsider.b-cdn.net/wp-content/uploads/2022/01/IMG_3478-scaled.jpg'
            ]"
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
            @clickMoreInfo="() => {selected = 'shopping'; clickMoreInfo(1)}"  
            :likes="27"
            :dislikes="120"  
            :largeView="selected === 'shopping'"
            smallPhoto="https://assets.cadillacfairview.com/transform/82c1319d-471a-4e7f-8af3-e23e8313bf5d/-Retail-Sherway-Gardens-Mall-Interior?io=transform:fill,width:1600&quality=80"
            :photos="[
              'https://images.ctfassets.net/70unvdt5g4gf/2lsnucM0wTYBkBcpNGPf76/92c5d71628adecdd5628e6c9730921a9/170519-Sherway-418-min.jpg',
              'https://images.ctfassets.net/70unvdt5g4gf/45TxYHVxgLYB6AGUhz1G7/36a628dfdc9c23088784424122ad2e9d/170519-Sherway-389-min__1_.jpg',
              'https://images.ctfassets.net/70unvdt5g4gf/2lsnucM0wTYBkBcpNGPf76/92c5d71628adecdd5628e6c9730921a9/170519-Sherway-418-min.jpg'
            ]"
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
            @clickMoreInfo="() => {selected = 'shopping'; clickMoreInfo(2)}"  
            :likes="120"
            :dislikes="52"  
            :largeView="selected === 'shopping'"
            smallPhoto="https://i.redd.it/yiy47ulawq681.jpg"
            :photos="[
              'https://blog.databid.com/hubfs/Square%20one-1.jpg',
              'https://www.todocanada.ca/wp-content/uploads/Michael-Muraz-Square-One-Shopping-Centre-011-Low-Res-1280x720.jpg',
              'https://www.insauga.com/wp-content/uploads/2022/12/70S_9462-scaled.jpg'
            ]"
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
          <ShoppingSquare
            @clickMoreInfo="() => {selected = 'shopping'; clickMoreInfo(3)}"  
            :likes="103"
            :dislikes="12"
            :largeView="selected === 'shopping'"
            smallPhoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShWKjyX6_Whpwrwt4xWwEEkESQODa8-hbWlQ&s"
            :photos="[
              'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/98/16/90/east-wing.jpg?w=1200&h=-1&s=1',
              'https://img1.10bestmedia.com/Images/Photos/323058/p-11162895846-4c814ff297-k_55_660x440.jpg',
              'https://upload.wikimedia.org/wikipedia/commons/5/58/Yorkdale_Mall.jpg'
            ]"
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
        </div>
      </div>
      <div v-if="selected === 'all' || selected === 'cafe'">
        <span @click="selected ='cafe'" class="text-bold cursor-pointer text-3xl flex justify-center text-red">Cafes 👉</span>
        <div class="flex no-wrap overflow-scroll" :class="selected === 'cafe' ? 'flex flex-col' : ''">
          <CafeSquare
            @clickMoreInfo="() => {selected = 'cafe'; clickMoreInfo(0)}"  
            :likes="120"
            :dislikes="52"  
            :largeView="selected === 'cafe'"
            smallPhoto="https://onecms-res.cloudinary.com/image/upload/v1700016361/mediacorp/8days/image/2023/11/15/tim_hortons_singapore_3.png"
            :photos="[
              'https://cdn.eateasily.com/restaurants/profile/app/400X300/1198.jpg',
              'https://www.yvr.ca/-/media/yvr/yvr-menu-option-2-images/tim-hortons-yvr.jpg?h=350&w=787&hash=1EF69669D07DB11EB7AF575859A146E4',
              'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/16/90/0d/20181018-123427-largejpg.jpg?w=1000&h=-1&s=1'
            ]"
            title="Tim Hortons"
            address="65 Front St W"
            walk="5 minutes"
            subway=""
            uber=""
            website="https://www.timhortons.com/store-locator/store/109436/65-front-str-w---bay-concourse--toronto--ontario--m5j-1e3"
            phone="+1 888-601-1616"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/Tim+Hortons,+York+Street,+Toronto,+ON,+Canada/@43.6454227,-79.3815252,17z/data=!3m2!4b1!5s0x882b31b95f52582d:0x20b5c47effb49f3d!4m17!4m16!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x882b34d30f14f071:0xaa18129910344868!2m2!1d-79.3825715!2d43.6461046!2m3!6e0!7e2!8j1723717799?entry=ttu"
          />
          <CafeSquare
            @clickMoreInfo="() => {selected = 'cafe'; clickMoreInfo(1)}"  
            :likes="27"
            :dislikes="120"  
            :largeView="selected === 'cafe'"
            smallPhoto="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/b9/6c/14/photo1jpg.jpg?w=1200&h=-1&s=1"
            :photos="[
              'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/a8/7f/24/pier-6.jpg?w=1200&h=-1&s=1',
              'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/a8/76/b9/beavertails.jpg?w=1200&h=-1&s=1',
              'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/b6/52/34/bt1.jpg?w=1200&h=-1&s=1'
            ]"
            title="BeaverTails Pastry"
            address="145 Queens Quay W"
            walk="10 minutes"
            subway="10 minutes"
            uber=""
            website="https://beavertails.com/"
            phone="+1 416-360-8245"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/BeaverTails+Toronto+Waterfront,+Queens+Quay+West,+Toronto,+ON,+Canada/@43.6428124,-79.3793814,16z/data=!3m2!4b1!5s0x882b31b95f52582d:0x20b5c47effb49f3d!4m17!4m16!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x89d4cbdb1e772fa1:0x36d13f2695a2d84e!2m2!1d-79.3800033!2d43.6397724!2m3!6e0!7e2!8j1723717799?entry=ttu"
          />
          <CafeSquare
            @clickMoreInfo="() => {selected = 'cafe'; clickMoreInfo(2)}"  
            :likes="120"
            :dislikes="52"  
            :largeView="selected === 'cafe'"
            smallPhoto="https://s3-media0.fl.yelpcdn.com/bphoto/FK5AfvYkMqVwnKCl30ji5Q/348s.jpg"
            :photos="[
              'https://static.wixstatic.com/media/1bec01_960a5f88b99b4cfba2b199ad4f5abf46~mv2.png/v1/fill/w_560,h_560,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ice_edited.png',
              'https://lh5.googleusercontent.com/p/AF1QipOgCkbG0w7J_xriY-CTbmvQvkcBzmm9uMVAYY_a=w408-h306-k-no',
              'https://tb-static.uber.com/prod/image-proc/processed_images/0cfda2e73747c44db1144df3cec25fb8/c9252e6c6cd289c588c3381bc77b1dfc.jpeg'
            ]"
            title="Ice Creamonology"
            address="250 Queens Quay W"
            walk="15 minutes"
            subway="10 minutes"
            uber=""
            website="https://www.icecreamonology.com"
            phone="+1 647-717-9848"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/Ice+Creamonology,+Queens+Quay+West,+Toronto,+ON,+Canada/@43.6423137,-79.3819519,16z/data=!3m2!4b1!5s0x882b31b95f52582d:0x20b5c47effb49f3d!4m17!4m16!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x882b35cbb5508e0d:0x262926fbbfd08041!2m2!1d-79.3848903!2d43.6393174!2m3!6e0!7e2!8j1723717799?entry=ttu"
          />
          <CafeSquare
            @clickMoreInfo="() => {selected = 'cafe'; clickMoreInfo(3)}"  
            :likes="324"
            :dislikes="52"
            :largeView="selected === 'cafe'"
            smallPhoto="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/d8/2c/6e/photo5jpg.jpg?w=1100&h=-1&s=1"
            :photos="[
              'https://lh5.googleusercontent.com/p/AF1QipNzVqVTpTo9ONly-GJKBMAZ-n8KhrW5NN_ftSvr=w408-h307-k-no',
              'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/66/84/8a/a-hefty-portion-of-regular.jpg?w=1200&h=-1&s=1',
              'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/28/01/20/photo0jpg.jpg?w=800&h=-1&s=1'
            ]"
            title="Nom Nom Nom Poutine"
            address="707 Dundas Street W"
            walk=""
            subway="25 minutes"
            uber="14 minutes"
            website="https://www.nomnomnom.ca/"
            phone="+1 647-636-0707"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/Nom+Nom+Nom+Poutine,+Dundas+Street+West,+Toronto,+ON,+Canada/@43.6502565,-79.3924927,14z/data=!3m2!4b1!5s0x882b31b95f52582d:0x20b5c47effb49f3d!4m13!4m12!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x882b34e86ee713ff:0xec9a5488b8be60a9!2m2!1d-79.4048188!2d43.6519983?entry=ttu"
          />
          <CafeSquare
            @clickMoreInfo="() => {selected = 'cafe'; clickMoreInfo(4)}"  
            :likes="103"
            :dislikes="12"
            :largeView="selected === 'cafe'"
            smallPhoto="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/40/fe/73/store-front.jpg?w=1200&h=-1&s=1"
            :photos="[
              'https://lh5.googleusercontent.com/p/AF1QipP3BaVaWWRQHt2xpMS7KBHPi15PIxno91UlxGKd=w448-h240-k-no',
              'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/4a/0b/ce/bison-burger-on-fresh.jpg?w=1200&h=-1&s=1',
              'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/4a/0c/46/wild-rice-omelet-a-taste.jpg?w=1200&h=-1&s=1'
            ]"
            title="Tea N Bannock"
            address="1294 Gerrard St E"
            walk=""
            subway="40 minutes"
            uber="18 minutes"
            website="https://www.teanbannock.ca/"
            phone="+1 416-220-2915"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/Tea+N+Bannock,+Gerrard+Street+East,+Toronto,+ON,+Canada/@43.6582215,-79.3543217,13z/data=!3m2!4b1!5s0x882b31b95f52582d:0x20b5c47effb49f3d!4m17!4m16!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x89d4cb870cf16c8f:0x2e6e3dd7d826980d!2m2!1d-79.3273376!2d43.671181!2m3!6e0!7e2!8j1723717799?entry=ttu"
          />
        </div>
      </div>
      <div v-if="selected === 'all' || selected === 'market'">
        <span @click="selected ='market'" class="text-bold cursor-pointer text-3xl flex justify-center text-red">Supermarkets 👉</span>
        <div class="flex no-wrap overflow-scroll" :class="selected === 'market' ? 'flex flex-col' : ''">
          <MarketSquare
            @clickMoreInfo="() => {selected = 'market'; clickMoreInfo(0)}"  
            :likes="120"
            :dislikes="52"  
            :largeView="selected === 'market'"
            smallPhoto="https://s3-media0.fl.yelpcdn.com/bphoto/oEeSHrXZDkhgHgo1-pZCIA/348s.jpg"
            :photos="[
              'https://777baystreet.com/wp-content/uploads/2022/04/INS_Store.jpeg',
              'https://insmarket.ca/wp-content/uploads/2022/09/home_page_image_s.jpg'
            ]"
            title="INS Market"
            address="65 Front St W"
            walk="2 minutes"
            subway=""
            uber=""
            website="https://www.insmarket.ca"
            phone="+1 416-364-2185"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/INS+Market,+Front+Street+West,+Toronto,+ON,+Canada/@43.6447418,-79.3809071,17z/data=!3m2!4b1!5s0x882b31b95f52582d:0x20b5c47effb49f3d!4m17!4m16!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x882b34d357aead6f:0xba45926cb9d5214d!2m2!1d-79.3808476!2d43.6444303!2m3!6e0!7e2!8j1723717799?entry=ttu"
          />
          <MarketSquare
            @clickMoreInfo="() => {selected = 'market'; clickMoreInfo(1)}"  
            :likes="103"
            :dislikes="12"
            :largeView="selected === 'market'"
            smallPhoto="https://lh3.googleusercontent.com/p/AF1QipPfVrAEs8hneG1obKKzcW6UZf-2RJy6z6GmMOBn=s680-w680-h510"
            :photos="[
              'https://lh3.googleusercontent.com/p/AF1QipM2XptWTAsuuLqW3e8bgmBnkVKjISNbR8pz69Eu=s680-w680-h510',
              'https://lh3.googleusercontent.com/p/AF1QipPUjDFVNAtcER2JMO2-c-C7dEPDEavv-eXNwZGv=s680-w680-h510',
              'https://lh3.googleusercontent.com/p/AF1QipPhwpzeP7t6h0FwnbN34QXyASN4EUxp0ZvfJAKG=s680-w680-h510'
            ]"
            title="Longo's"
            address="15 York St"
            walk="8 minutes"
            subway=""
            uber=""
            website="https://www.longos.com"
            phone="+1 416-366-1717"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/Longo's+Maple+Leaf+Square,+York+Street,+Toronto,+ON,+Canada/@43.6436855,-79.3813746,17z/data=!3m2!4b1!5s0x882b31b95f52582d:0x20b5c47effb49f3d!4m17!4m16!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x89d4cb2b4a82b3b7:0xc419b1c9703a086a!2m2!1d-79.3808566!2d43.6421081!2m3!6e0!7e2!8j1723717799?entry=ttu"
          />
          <MarketSquare
            @clickMoreInfo="() => {selected = 'market'; clickMoreInfo(2)}"  
            :likes="120"
            :dislikes="52"  
            :largeView="selected === 'market'"
            smallPhoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX-9mK-0JlJh-eNpBbONTJ1H1A5Yi8WNUiUA4ey1Y4NpD_JQUipik2UMk7a2aAluvoQpw&usqp=CAU"
            :photos="[
              'https://images2.minutemediacdn.com/image/upload/c_crop,w_4200,h_2362,x_0,y_349/c_fill,w_752,ar_16:9,f_auto,q_auto,g_auto/images/GettyImages/mmsport/mentalfloss/01g6k4t01fpszt02cys0.jpg',
              'https://ctmdesign.ca/wp-content/uploads/2021/02/CTM-Portfolio-711_YYC-Img2.png'
            ]"
            title="7-Eleven"
            address="372 Bay St"
            walk="10 minutes"
            subway=""
            uber=""
            website="https://www.7-eleven.ca"
            phone="+1 416-203-8350"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/7-Eleven,+@+Richmond,+372+Bay+Street,+Toronto,+ON,+Canada/@43.6493065,-79.3797479,16z/data=!3m2!4b1!5s0x882b31b95f52582d:0x20b5c47effb49f3d!4m17!4m16!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x882b34cd26a6f539:0x80af108e4b3e9bad!2m2!1d-79.3814207!2d43.6510075!2m3!6e0!7e2!8j1723717799?entry=ttu"
          />
          <MarketSquare
            @clickMoreInfo="() => {selected = 'market'; clickMoreInfo(3)}"  
            :likes="27"
            :dislikes="120"  
            :largeView="selected === 'market'"
            smallPhoto="https://lh3.googleusercontent.com/p/AF1QipPK03Za7gtlOy4CSQmnK7qHS_jAZwC9IK8QOqcS=s680-w680-h510"
            :photos="[
              'https://lh3.googleusercontent.com/p/AF1QipMTwF5iSrwtTFu-T1A4kcieyxf1GMiewpom4knw=s680-w680-h510',
              'https://lh3.googleusercontent.com/p/AF1QipOL-5vb22MEnOv4sD0CWu8t57LoNVHM_5soJB7n=s680-w680-h510',
              'https://lh3.googleusercontent.com/p/AF1QipN6NfnPk8HKgcufuZQ1GcrBCXmtLdBhuDOBluxP=s680-w680-h510'
            ]"
            title="Metro"
            address="80 Front St E"
            walk="12 minutes"
            subway=""
            uber=""
            website="https://www.metro.ca"
            phone="+1 416-703-9393"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/Metro,+80+Front+Street+East,+Toronto,+ON,+Canada/@43.6472327,-79.3765731,16z/data=!3m2!4b1!5s0x882b31b95f52582d:0x20b5c47effb49f3d!4m17!4m16!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x89d4cb31c95bab8d:0x56924e17328229fc!2m2!1d-79.3727345!2d43.6492034!2m3!6e0!7e2!8j1723717799?entry=ttu"
          />
          <MarketSquare
            @clickMoreInfo="() => {selected = 'market'; clickMoreInfo(4)}"  
            :likes="324"
            :dislikes="52"
            :largeView="selected === 'market'"
            smallPhoto="https://lh3.googleusercontent.com/p/AF1QipPTFnqnzE9A24mhxOC_Jq0rv9s7ahcUSativ5Ch=s680-w680-h510"
            :photos="[
              'https://lh3.googleusercontent.com/p/AF1QipNSp9ZsuiWjAXEDi39V58EptqNwzUSq3bLwEq5s=s680-w680-h510',
              'https://lh3.googleusercontent.com/p/AF1QipNrcnh-VP59zBcpAVi5nk9qbSO3BL1mmKRCvV-E=s680-w680-h510',
              'https://lh3.googleusercontent.com/p/AF1QipMGONtzk17tawEy8QEsY3aIaUHVJSsPLu_IcwFu=s680-w680-h510'
            ]"
            title="Loblaws"
            address="10 Lower Jarvis St"
            walk="20 minutes"
            subway="10 minutes"
            uber=""
            website="https://www.loblaws.ca"
            phone="+1 416-304-0611"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/Loblaws+Lower+Jarvis+Street,+Lower+Jarvis+Street,+Toronto,+ON,+Canada/@43.6452822,-79.3744797,16z/data=!3m2!4b1!5s0x882b31b95f52582d:0x20b5c47effb49f3d!4m17!4m16!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x89d4cb2f77623b11:0x90f02ec52a0d0e37!2m2!1d-79.369789!2d43.645427!2m3!6e0!7e2!8j1723717799?entry=ttu"
          />
        </div>
      </div>
      <div v-if="selected === 'all' || selected === 'seasonal'">
        <span @click="selected ='seasonal'" class="text-bold cursor-pointer text-3xl flex justify-center text-red">Seasonal 👉</span>
        <div class="flex no-wrap overflow-scroll" :class="selected === 'seasonal' ? 'flex flex-col' : ''">
          <SeasonalSquare
            @clickMoreInfo="() => {selected = 'seasonal'; clickMoreInfo(0)}"  
            :likes="103"
            :dislikes="12"
            :largeView="selected === 'seasonal'"
            smallPhoto="https://www.narcity.com/media-library/toronto-santa-claus-parade-route-will-cause-numerous-downtown-closures-next-weekend.jpg?id=25955521&width=600&height=600&coordinates=252%2C0%2C252%2C0"
            :photos="[
              'https://www.todocanada.ca/wp-content/uploads/Toronto-Santa-Claus-Parade.jpg',
              'https://www.ctvnews.ca/polopoly_fs/1.1043296.1353266390!/httpImage/image.jpeg_gen/derivatives/landscape_960/image.jpeg',
              'https://media.blogto.com/articles/20221014-santa-claus-parade-f.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70'
            ]"
            title="Santa Clause Parade"
            address="Christie Street - St Lawrence Market"
            walk="10 minutes"
            subway=""
            uber=""
            dates="Nov 24th"
            type="Parade"
            typeIcon="festival"
            website="https://www.thesantaclausparade.com/"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/St.+Lawrence+Market,+Toronto,+ON,+Canada/@43.6471791,-79.3754323,16z/data=!3m2!4b1!5s0x882b34d819a55ff7:0xad7cf7bcaf4e239b!4m13!4m12!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x89d4cb31b4dd275b:0xca0ab5acf1a5b6fd!2m2!1d-79.3715454!2d43.6486879?entry=ttu"
          />
          <SeasonalSquare
            @clickMoreInfo="() => {selected = 'seasonal'; clickMoreInfo(1)}"  
            :likes="120"
            :dislikes="52"  
            :largeView="selected === 'seasonal'"
            smallPhoto="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,g_xy_center,h_640,q_65,w_640,x_1713,y_1300/v1/clients/toronto/d69761ffbb1e75d903732f522dcdbd8fb5313c09_7964ebf6-fc8d-41a9-85cd-561a73fd1ffd.jpg"
            :photos="[
              'https://media.blogto.com/articles/20211124-cavalcade-of-lights-2021.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70',
              'https://www.toronto.ca/wp-content/uploads/2022/11/98eb-Social-Hero-Image-1--1024x681.jpg',
              'https://live.staticflickr.com/4014/4300087425_3d7925bfb0_b.jpg'
            ]"
            title="Cavalcade of Lights"
            address="100 Queen Street W"
            walk="15 minutes"
            subway="10 minutes"
            uber=""
            dates="November 23rd"
            type="Light show"
            typeIcon="festival"
            website="https://www.toronto.ca/explore-enjoy/festivals-events/cavalcade-of-lights/"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/INS+Market,+Front+Street+West,+Toronto,+ON,+Canada/@43.6447418,-79.3809071,17z/data=!3m1!5s0x882b31b95f52582d:0x20b5c47effb49f3d!4m17!4m16!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x882b34d357aead6f:0xba45926cb9d5214d!2m2!1d-79.3808476!2d43.6444303!2m3!6e0!7e2!8j1723717799?entry=ttu"
          />
          <SeasonalSquare
            @clickMoreInfo="() => {selected = 'seasonal'; clickMoreInfo(2)}"  
            :likes="120"
            :dislikes="52"  
            :largeView="selected === 'seasonal'"
            smallPhoto="https://travel.home.sndimg.com/content/dam/images/travel/fullrights/2015/12/14/new-years-world-toronto.jpg.rend.hgtvcom.1280.1920.suffix/1491592908849.jpeg"
            :photos="[
              'https://prod-static.curiocity.com/uploads/2021/12/BeFunky-collage-30.jpg',
              'https://i.pinimg.com/474x/7d/ec/9f/7dec9f59473ef6db7f8fd14b19463c5c.jpg',
              'https://travel.home.sndimg.com/content/dam/images/travel/fullrights/2015/12/14/new-years-world-toronto.jpg.rend.hgtvcom.1280.1920.suffix/1491592908849.jpeg'
            ]"
            title="New Year's Eve Celebration"
            address="100 Queen Street W"
            walk="15 minutes"
            subway="10 minutes"
            uber=""
            dates="December 31st"
            type="Festival"
            typeIcon="festival"
            website="https://www.insmarket.ca"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/INS+Market,+Front+Street+West,+Toronto,+ON,+Canada/@43.6447418,-79.3809071,17z/data=!3m1!5s0x882b31b95f52582d:0x20b5c47effb49f3d!4m17!4m16!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x882b34d357aead6f:0xba45926cb9d5214d!2m2!1d-79.3808476!2d43.6444303!2m3!6e0!7e2!8j1723717799?entry=ttu"
          />
          <SeasonalSquare
            @clickMoreInfo="() => {selected = 'seasonal'; clickMoreInfo(3)}"  
            :likes="27"
            :dislikes="120"  
            :largeView="selected === 'seasonal'"
            smallPhoto="https://i.pinimg.com/736x/4f/f0/70/4ff0700acdffbd97f1b01d6308923d86.jpg"
            :photos="[
              'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/toronto/nathan_phillips_square_skating_seeusoontravel_da2a4178-04bb-4960-b451-334239608735.jpg',
              'https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,g_xy_center,h_384,q_80,w_640,x_2448,y_2235/v1/clients/toronto/167_3_1482_jpeg_min_0e52e367-54ca-47cb-bab1-e1d1c9b9e548.jpg',
              'https://www.mybackyardicerink.com/images/outdoor-skating-rink-Nathan-Phillips-Square-Toronto-Canada.jpg'
            ]"
            title="Nathan Philips Square Ice Skating"
            address="100 Queen St W"
            walk="16 minutes"
            subway="10 minutes"
            uber=""
            dates="Nov-March"
            type="Ice skating"
            typeIcon="ice_skating"
            website="https://www.toronto.ca/data/parks/prd/facilities/complex/1089/index.html"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/INS+Market,+Front+Street+West,+Toronto,+ON,+Canada/@43.6447418,-79.3809071,17z/data=!3m1!5s0x882b31b95f52582d:0x20b5c47effb49f3d!4m17!4m16!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x882b34d357aead6f:0xba45926cb9d5214d!2m2!1d-79.3808476!2d43.6444303!2m3!6e0!7e2!8j1723717799?entry=ttu"
          />
          <SeasonalSquare
            @clickMoreInfo="() => {selected = 'seasonal'; clickMoreInfo(4)}"  
            :likes="324"
            :dislikes="52"
            :largeView="selected === 'seasonal'"
            smallPhoto="https://www.gotourscanada.com/wp-content/uploads/2017/12/TCM.jpg"
            :photos="[
              'https://www.narcity.com/media-library/the-distillery-winter-village-in-toronto-ontario.jpg?id=50292424&width=1245&height=700&coordinates=0%2C0%2C90%2C0',
              'https://photos.bringfido.com/events/4/2/0/41024/41024_33681.jpg?size=slide&density=2x',
              'https://bloximages.chicago2.vip.townnews.com/insidehalton.com/content/tncms/assets/v3/editorial/8/04/80412d03-9d1b-508b-a8be-c420ec495c43/63dcbe40c0ff8.image.jpg?crop=1000%2C563%2C0%2C84'
            ]"
            title="Toronto Christmas Market"
            address="55 Mill St"
            walk=""
            subway="20 minutes"
            uber="10 minutes"
            dates="Nov 13-Dec 31"
            type="Market"
            typeIcon="storefront"
            website="https://www.thedistillerywintervillage.com"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/INS+Market,+Front+Street+West,+Toronto,+ON,+Canada/@43.6447418,-79.3809071,17z/data=!3m1!5s0x882b31b95f52582d:0x20b5c47effb49f3d!4m17!4m16!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x882b34d357aead6f:0xba45926cb9d5214d!2m2!1d-79.3808476!2d43.6444303!2m3!6e0!7e2!8j1723717799?entry=ttu"
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
import CafeSquare from '@/components/CafeSquare.vue';
import MarketSquare from '@/components/MarketSquare.vue';
import SeasonalSquare from '@/components/SeasonalSquare.vue';
export default {
  name: 'ActivitesPage',
  components: {
    NavigationMap, ActivitySquare, RestaurantSquare, ShoppingSquare, CafeSquare, MarketSquare, SeasonalSquare
  },
  data() {
    return {
      selected: 'all',
    }
  },
  methods: {
    clickMoreInfo (index) {
      window.scrollTo({
        top: 1100 + (index * 730),
        behavior: 'smooth'
      });
    }
  }
}
</script>

