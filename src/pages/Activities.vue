<template>
  <div class="px-1" style="background-color: #f6f7f8;">
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
            :photos="[
              'https://media.tacdn.com/media/attractions-splice-spp-674x446/12/33/6d/3e.jpg',
              'https://www.travelandleisure.com/thmb/_HL3sxR00kCnqnHUOqAulCMzXTU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cn-tower-observation-deck-TORONTOFAMILY0222-e8c3d2ba06414ccfa2a551ee460d6cab.jpg',
              'https://www.cntower.ca/sites/default/files/styles/16_9_scale_and_crop_medium/public/images/hours.jpg?h=5ce0254a&itok=UPwrStAG'
            ]"
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
            smallPhoto="https://s3-media0.fl.yelpcdn.com/bphoto/EsoNZxUsO5qRSvHmvnTnxg/348s.jpg"  
            :photos="[
              'https://seeyousoon.ca/wp-content/uploads/2020/07/Ripleys-Aquarium-of-Canada.jpg',
              'https://tirbnb.com/wp-content/uploads/2024/03/ripley-aquarium-toronto-building.jpg',
              'https://childslife.ca/wp-content/uploads/2022/03/RAC-1.jpg'
            ]"
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
            smallPhoto="https://cdn.getyourguide.com/img/tour/580594b2fbd324a2.jpeg/vertical_520_780.jpg"  
            :photos="[
              'https://media.cntraveler.com/photos/616480d36a69c761590b271a/16:9/w_2560,c_limit/Distillery%20District-57.jpg',
              'https://media.blogto.com/articles/20201120-distillery5.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70',
              'https://media.istockphoto.com/id/485612119/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%B2-%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D1%80%D0%B0%D0%B9%D0%BE%D0%BD-distillery-district-%D1%82%D0%BE%D1%80%D0%BE%D0%BD%D1%82%D0%BE.jpg?s=612x612&w=0&k=20&c=GiqY8ubl9w3rkjF8SI89amQW3JP1MtbByP6OqShwfDA='
            ]"
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
            smallPhoto="https://i.pinimg.com/originals/87/3c/4f/873c4f20eb58b349e2813a81b7330bdf.jpg"  
            :photos="[
              'https://media.cntraveler.com/photos/5b2c068c8ba0800c6ed8d62a/16:9/w_2560,c_limit/St.-Lawrence-Market__GettyImages-148554964.jpg',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Toronto_-_ON_-_St_Lawrence_Market.jpg/2560px-Toronto_-_ON_-_St_Lawrence_Market.jpg',
              'https://facts.net/wp-content/uploads/2023/09/14-intriguing-facts-about-st-lawrence-market-toronto-1694436206.jpg'
            ]"
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
            :likes="324"
            :dislikes="52"
            :largeView="selected === 'restaurants'"
            smallPhoto="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,g_xy_center,h_640,q_80,w_640,x_960,y_640/v1/clients/toronto/167_3_1464_jpeg_large_ede42653-7423-47bc-b76e-49bfd2086080.jpg"
            :photos="[
              'https://allthebestspots.com/wp-content/uploads/2024/01/Depositphotos_eaton-center_S.jpg',
              'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/49000/49319-Toronto-Eaton-Centre.jpg',
              'https://retailinsider.b-cdn.net/wp-content/uploads/2022/01/IMG_3478-scaled.jpg'
            ]"
            title="Chodang Soon Tofu"
            cuisine="🇰🇷 Korean cuisine"
            location="5130 Dundas St W"
            reservation="Not required"
            takeout="Available"
            walk=""
            subway="48 minute"
            uber="30 minutes"
            recommendationOne="Chodang ($18)"
            recommendationTwo="Stone Bowl Bulgogi ($23)"
            website="http://chodangsoontofu.bu-bi.com/?doc=sub_02"
            phone="+1 416-234-1161"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/INS+Market,+Front+Street+West,+Toronto,+ON,+Canada/@43.6447418,-79.3809071,17z/data=!3m1!5s0x882b31b95f52582d:0x20b5c47effb49f3d!4m17!4m16!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x882b34d357aead6f:0xba45926cb9d5214d!2m2!1d-79.3808476!2d43.6444303!2m3!6e0!7e2!8j1723717799?entry=ttu"
          />
          <RestaurantSquare
            :likes="324"
            :dislikes="52"
            :largeView="selected === 'restaurants'"
            smallPhoto="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,g_xy_center,h_640,q_80,w_640,x_960,y_640/v1/clients/toronto/167_3_1464_jpeg_large_ede42653-7423-47bc-b76e-49bfd2086080.jpg"
            :photos="[
              'https://allthebestspots.com/wp-content/uploads/2024/01/Depositphotos_eaton-center_S.jpg',
              'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/49000/49319-Toronto-Eaton-Centre.jpg',
              'https://retailinsider.b-cdn.net/wp-content/uploads/2022/01/IMG_3478-scaled.jpg'
            ]"
            title="Yummy Korean Food"
            cuisine="🇰🇷 Korean cuisine"
            location="620 Bloor St W"
            reservation="Recommended"
            takeout="Available"
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
            :likes="324"
            :dislikes="52"
            :largeView="selected === 'restaurants'"
            smallPhoto="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,g_xy_center,h_640,q_80,w_640,x_960,y_640/v1/clients/toronto/167_3_1464_jpeg_large_ede42653-7423-47bc-b76e-49bfd2086080.jpg"
            :photos="[
              'https://allthebestspots.com/wp-content/uploads/2024/01/Depositphotos_eaton-center_S.jpg',
              'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/49000/49319-Toronto-Eaton-Centre.jpg',
              'https://retailinsider.b-cdn.net/wp-content/uploads/2022/01/IMG_3478-scaled.jpg'
            ]"
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
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/INS+Market,+Front+Street+West,+Toronto,+ON,+Canada/@43.6447418,-79.3809071,17z/data=!3m1!5s0x882b31b95f52582d:0x20b5c47effb49f3d!4m17!4m16!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x882b34d357aead6f:0xba45926cb9d5214d!2m2!1d-79.3808476!2d43.6444303!2m3!6e0!7e2!8j1723717799?entry=ttu"
          />
          <RestaurantSquare
            :likes="324"
            :dislikes="52"
            :largeView="selected === 'restaurants'"
            smallPhoto="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,g_xy_center,h_640,q_80,w_640,x_960,y_640/v1/clients/toronto/167_3_1464_jpeg_large_ede42653-7423-47bc-b76e-49bfd2086080.jpg"
            :photos="[
              'https://allthebestspots.com/wp-content/uploads/2024/01/Depositphotos_eaton-center_S.jpg',
              'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/49000/49319-Toronto-Eaton-Centre.jpg',
              'https://retailinsider.b-cdn.net/wp-content/uploads/2022/01/IMG_3478-scaled.jpg'
            ]"
            title="Mothers Dumplings"
            cuisine="🇨🇳 Chinese cuisine"
            location="421 Spadina Ave"
            reservation="Recommended"
            takeout="Available"
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
            :likes="324"
            :dislikes="52"
            :largeView="selected === 'restaurants'"
            smallPhoto="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,g_xy_center,h_640,q_80,w_640,x_960,y_640/v1/clients/toronto/167_3_1464_jpeg_large_ede42653-7423-47bc-b76e-49bfd2086080.jpg"
            :photos="[
              'https://allthebestspots.com/wp-content/uploads/2024/01/Depositphotos_eaton-center_S.jpg',
              'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/49000/49319-Toronto-Eaton-Centre.jpg',
              'https://retailinsider.b-cdn.net/wp-content/uploads/2022/01/IMG_3478-scaled.jpg'
            ]"
            title="Kasa Moto"
            cuisine="🇨🇳 Japanese cuisine"
            location="115 Yorkville Ave"
            reservation="Required"
            takeout="Available"
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
            :likes="324"
            :dislikes="52"
            :largeView="selected === 'restaurants'"
            smallPhoto="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,g_xy_center,h_640,q_80,w_640,x_960,y_640/v1/clients/toronto/167_3_1464_jpeg_large_ede42653-7423-47bc-b76e-49bfd2086080.jpg"
            :photos="[
              'https://allthebestspots.com/wp-content/uploads/2024/01/Depositphotos_eaton-center_S.jpg',
              'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/49000/49319-Toronto-Eaton-Centre.jpg',
              'https://retailinsider.b-cdn.net/wp-content/uploads/2022/01/IMG_3478-scaled.jpg'
            ]"
            title="Guu Izakaya"
            cuisine="🇨🇳 Japanese cuisine"
            location="1314 Queen Street W"
            reservation="Not required"
            takeout="Available"
            walk=""
            subway="40 minutes"
            uber="20 minutes"
            website="https://www.guu-izakaya.com"
            phone="+1 647-351-1314"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/INS+Market,+Front+Street+West,+Toronto,+ON,+Canada/@43.6447418,-79.3809071,17z/data=!3m1!5s0x882b31b95f52582d:0x20b5c47effb49f3d!4m17!4m16!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x882b34d357aead6f:0xba45926cb9d5214d!2m2!1d-79.3808476!2d43.6444303!2m3!6e0!7e2!8j1723717799?entry=ttu"
          />
          <RestaurantSquare
            :likes="324"
            :dislikes="52"
            :largeView="selected === 'restaurants'"
            smallPhoto="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,g_xy_center,h_640,q_80,w_640,x_960,y_640/v1/clients/toronto/167_3_1464_jpeg_large_ede42653-7423-47bc-b76e-49bfd2086080.jpg"
            :photos="[
              'https://allthebestspots.com/wp-content/uploads/2024/01/Depositphotos_eaton-center_S.jpg',
              'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/49000/49319-Toronto-Eaton-Centre.jpg',
              'https://retailinsider.b-cdn.net/wp-content/uploads/2022/01/IMG_3478-scaled.jpg'
            ]"
            title="Canoe Restaurant and Bar"
            cuisine="🇺🇸 Western cuisine"
            location="66 Wellington St W"
            reservation="Recommended"
            takeout="Available"
            walk="8 minutes"
            subway=""
            uber=""
            website="https://www.canoerestaurant.com"
            phone="+1 416-364-0054"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/INS+Market,+Front+Street+West,+Toronto,+ON,+Canada/@43.6447418,-79.3809071,17z/data=!3m1!5s0x882b31b95f52582d:0x20b5c47effb49f3d!4m17!4m16!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x882b34d357aead6f:0xba45926cb9d5214d!2m2!1d-79.3808476!2d43.6444303!2m3!6e0!7e2!8j1723717799?entry=ttu"
          />
          <RestaurantSquare
            :likes="324"
            :dislikes="52"
            :largeView="selected === 'restaurants'"
            smallPhoto="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,g_xy_center,h_640,q_80,w_640,x_960,y_640/v1/clients/toronto/167_3_1464_jpeg_large_ede42653-7423-47bc-b76e-49bfd2086080.jpg"
            :photos="[
              'https://allthebestspots.com/wp-content/uploads/2024/01/Depositphotos_eaton-center_S.jpg',
              'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/49000/49319-Toronto-Eaton-Centre.jpg',
              'https://retailinsider.b-cdn.net/wp-content/uploads/2022/01/IMG_3478-scaled.jpg'
            ]"
            title="360 Restaurant"
            cuisine="🇺🇸 Western cuisine"
            location="290 Bremner Blvd"
            reservation="Recommended"
            takeout="Not available"
            walk="11 minutes"
            subway=""
            uber="7 minutes"
            website="https://www.cntower.ca/"
            phone="+1 416-868-6937"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/INS+Market,+Front+Street+West,+Toronto,+ON,+Canada/@43.6447418,-79.3809071,17z/data=!3m1!5s0x882b31b95f52582d:0x20b5c47effb49f3d!4m17!4m16!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x882b34d357aead6f:0xba45926cb9d5214d!2m2!1d-79.3808476!2d43.6444303!2m3!6e0!7e2!8j1723717799?entry=ttu"
          />
          <RestaurantSquare
            :likes="324"
            :dislikes="52"
            :largeView="selected === 'restaurants'"
            smallPhoto="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,g_xy_center,h_640,q_80,w_640,x_960,y_640/v1/clients/toronto/167_3_1464_jpeg_large_ede42653-7423-47bc-b76e-49bfd2086080.jpg"
            :photos="[
              'https://allthebestspots.com/wp-content/uploads/2024/01/Depositphotos_eaton-center_S.jpg',
              'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/49000/49319-Toronto-Eaton-Centre.jpg',
              'https://retailinsider.b-cdn.net/wp-content/uploads/2022/01/IMG_3478-scaled.jpg'
            ]"
            title="Maple Leaf Tavern"
            cuisine="🇨🇦 Canadian cuisine"
            location="955 Gerrad St E"
            reservation="Recommended"
            takeout="Available"
            walk=""
            subway="35 minutes"
            uber="18 minutes"
            website="https://mapleleaftavern.ca/"
            phone="+1 416-465-0955"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/INS+Market,+Front+Street+West,+Toronto,+ON,+Canada/@43.6447418,-79.3809071,17z/data=!3m1!5s0x882b31b95f52582d:0x20b5c47effb49f3d!4m17!4m16!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x882b34d357aead6f:0xba45926cb9d5214d!2m2!1d-79.3808476!2d43.6444303!2m3!6e0!7e2!8j1723717799?entry=ttu"
          />
          <RestaurantSquare
            :likes="324"
            :dislikes="52"
            :largeView="selected === 'restaurants'"
            smallPhoto="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,g_xy_center,h_640,q_80,w_640,x_960,y_640/v1/clients/toronto/167_3_1464_jpeg_large_ede42653-7423-47bc-b76e-49bfd2086080.jpg"
            :photos="[
              'https://allthebestspots.com/wp-content/uploads/2024/01/Depositphotos_eaton-center_S.jpg',
              'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/49000/49319-Toronto-Eaton-Centre.jpg',
              'https://retailinsider.b-cdn.net/wp-content/uploads/2022/01/IMG_3478-scaled.jpg'
            ]"
            title="George Restaurant"
            cuisine="🇨🇦 Canadian cuisine"
            location="111C Queen St E"
            reservation="Required"
            takeout="Available"
            walk="20 minutes"
            subway="12 minutes"
            uber=""
            website="http://www.georgeonqueen.com"
            phone="+1 416-863-6006"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/INS+Market,+Front+Street+West,+Toronto,+ON,+Canada/@43.6447418,-79.3809071,17z/data=!3m1!5s0x882b31b95f52582d:0x20b5c47effb49f3d!4m17!4m16!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x882b34d357aead6f:0xba45926cb9d5214d!2m2!1d-79.3808476!2d43.6444303!2m3!6e0!7e2!8j1723717799?entry=ttu"
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
          <ShoppingSquare
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
        </div>
      </div>
      <div v-if="selected === 'all' || selected === 'cafe'">
        <span @click="selected ='cafe'" class="text-bold cursor-pointer text-3xl flex justify-center text-red">Cafes 👉</span>
        <div class="flex no-wrap overflow-scroll" :class="selected === 'cafe' ? 'flex flex-col' : ''">
          <CafeSquare
            :likes="324"
            :dislikes="52"
            :largeView="selected === 'cafe'"
            smallPhoto="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,g_xy_center,h_640,q_80,w_640,x_960,y_640/v1/clients/toronto/167_3_1464_jpeg_large_ede42653-7423-47bc-b76e-49bfd2086080.jpg"
            :photos="[
              'https://allthebestspots.com/wp-content/uploads/2024/01/Depositphotos_eaton-center_S.jpg',
              'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/49000/49319-Toronto-Eaton-Centre.jpg',
              'https://retailinsider.b-cdn.net/wp-content/uploads/2022/01/IMG_3478-scaled.jpg'
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
            :likes="103"
            :dislikes="12"
            :largeView="selected === 'cafe'"
            smallPhoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShWKjyX6_Whpwrwt4xWwEEkESQODa8-hbWlQ&s"
            :photos="[
              'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/98/16/90/east-wing.jpg?w=1200&h=-1&s=1',
              'https://img1.10bestmedia.com/Images/Photos/323058/p-11162895846-4c814ff297-k_55_660x440.jpg',
              'https://upload.wikimedia.org/wikipedia/commons/5/58/Yorkdale_Mall.jpg'
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
          <CafeSquare
            :likes="27"
            :dislikes="120"  
            :largeView="selected === 'cafe'"
            smallPhoto="https://assets.cadillacfairview.com/transform/82c1319d-471a-4e7f-8af3-e23e8313bf5d/-Retail-Sherway-Gardens-Mall-Interior?io=transform:fill,width:1600&quality=80"
            :photos="[
              'https://images.ctfassets.net/70unvdt5g4gf/2lsnucM0wTYBkBcpNGPf76/92c5d71628adecdd5628e6c9730921a9/170519-Sherway-418-min.jpg',
              'https://images.ctfassets.net/70unvdt5g4gf/45TxYHVxgLYB6AGUhz1G7/36a628dfdc9c23088784424122ad2e9d/170519-Sherway-389-min__1_.jpg',
              'https://images.ctfassets.net/70unvdt5g4gf/2lsnucM0wTYBkBcpNGPf76/92c5d71628adecdd5628e6c9730921a9/170519-Sherway-418-min.jpg'
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
            :likes="120"
            :dislikes="52"  
            :largeView="selected === 'cafe'"
            smallPhoto="https://i.redd.it/yiy47ulawq681.jpg"
            :photos="[
              'https://blog.databid.com/hubfs/Square%20one-1.jpg',
              'https://www.todocanada.ca/wp-content/uploads/Michael-Muraz-Square-One-Shopping-Centre-011-Low-Res-1280x720.jpg',
              'https://www.insauga.com/wp-content/uploads/2022/12/70S_9462-scaled.jpg'
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
            :likes="120"
            :dislikes="52"  
            :largeView="selected === 'cafe'"
            smallPhoto="https://i.redd.it/yiy47ulawq681.jpg"
            :photos="[
              'https://blog.databid.com/hubfs/Square%20one-1.jpg',
              'https://www.todocanada.ca/wp-content/uploads/Michael-Muraz-Square-One-Shopping-Centre-011-Low-Res-1280x720.jpg',
              'https://www.insauga.com/wp-content/uploads/2022/12/70S_9462-scaled.jpg'
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
        </div>
      </div>
      <div v-if="selected === 'all' || selected === 'market'">
        <span @click="selected ='market'" class="text-bold cursor-pointer text-3xl flex justify-center text-red">Supermarkets 👉</span>
        <div class="flex no-wrap overflow-scroll" :class="selected === 'market' ? 'flex flex-col' : ''">
          <MarketSquare
            :likes="324"
            :dislikes="52"
            :largeView="selected === 'market'"
            smallPhoto="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,g_xy_center,h_640,q_80,w_640,x_960,y_640/v1/clients/toronto/167_3_1464_jpeg_large_ede42653-7423-47bc-b76e-49bfd2086080.jpg"
            :photos="[
              'https://allthebestspots.com/wp-content/uploads/2024/01/Depositphotos_eaton-center_S.jpg',
              'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/49000/49319-Toronto-Eaton-Centre.jpg',
              'https://retailinsider.b-cdn.net/wp-content/uploads/2022/01/IMG_3478-scaled.jpg'
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
          <MarketSquare
            :likes="103"
            :dislikes="12"
            :largeView="selected === 'market'"
            smallPhoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShWKjyX6_Whpwrwt4xWwEEkESQODa8-hbWlQ&s"
            :photos="[
              'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/98/16/90/east-wing.jpg?w=1200&h=-1&s=1',
              'https://img1.10bestmedia.com/Images/Photos/323058/p-11162895846-4c814ff297-k_55_660x440.jpg',
              'https://upload.wikimedia.org/wikipedia/commons/5/58/Yorkdale_Mall.jpg'
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
            :likes="27"
            :dislikes="120"  
            :largeView="selected === 'market'"
            smallPhoto="https://assets.cadillacfairview.com/transform/82c1319d-471a-4e7f-8af3-e23e8313bf5d/-Retail-Sherway-Gardens-Mall-Interior?io=transform:fill,width:1600&quality=80"
            :photos="[
              'https://images.ctfassets.net/70unvdt5g4gf/2lsnucM0wTYBkBcpNGPf76/92c5d71628adecdd5628e6c9730921a9/170519-Sherway-418-min.jpg',
              'https://images.ctfassets.net/70unvdt5g4gf/45TxYHVxgLYB6AGUhz1G7/36a628dfdc9c23088784424122ad2e9d/170519-Sherway-389-min__1_.jpg',
              'https://images.ctfassets.net/70unvdt5g4gf/2lsnucM0wTYBkBcpNGPf76/92c5d71628adecdd5628e6c9730921a9/170519-Sherway-418-min.jpg'
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
            :likes="120"
            :dislikes="52"  
            :largeView="selected === 'market'"
            smallPhoto="https://i.redd.it/yiy47ulawq681.jpg"
            :photos="[
              'https://blog.databid.com/hubfs/Square%20one-1.jpg',
              'https://www.todocanada.ca/wp-content/uploads/Michael-Muraz-Square-One-Shopping-Centre-011-Low-Res-1280x720.jpg',
              'https://www.insauga.com/wp-content/uploads/2022/12/70S_9462-scaled.jpg'
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
            :likes="120"
            :dislikes="52"  
            :largeView="selected === 'market'"
            smallPhoto="https://i.redd.it/yiy47ulawq681.jpg"
            :photos="[
              'https://blog.databid.com/hubfs/Square%20one-1.jpg',
              'https://www.todocanada.ca/wp-content/uploads/Michael-Muraz-Square-One-Shopping-Centre-011-Low-Res-1280x720.jpg',
              'https://www.insauga.com/wp-content/uploads/2022/12/70S_9462-scaled.jpg'
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
        </div>
      </div>
      <div v-if="selected === 'all' || selected === 'seasonal'">
        <span @click="selected ='seasonal'" class="text-bold cursor-pointer text-3xl flex justify-center text-red">Seasonal 👉</span>
        <div class="flex no-wrap overflow-scroll" :class="selected === 'seasonal' ? 'flex flex-col' : ''">
          <SeasonalSquare
            :likes="324"
            :dislikes="52"
            :largeView="selected === 'seasonal'"
            smallPhoto="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,g_xy_center,h_640,q_80,w_640,x_960,y_640/v1/clients/toronto/167_3_1464_jpeg_large_ede42653-7423-47bc-b76e-49bfd2086080.jpg"
            :photos="[
              'https://allthebestspots.com/wp-content/uploads/2024/01/Depositphotos_eaton-center_S.jpg',
              'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/49000/49319-Toronto-Eaton-Centre.jpg',
              'https://retailinsider.b-cdn.net/wp-content/uploads/2022/01/IMG_3478-scaled.jpg'
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
          <SeasonalSquare
            :likes="103"
            :dislikes="12"
            :largeView="selected === 'seasonal'"
            smallPhoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShWKjyX6_Whpwrwt4xWwEEkESQODa8-hbWlQ&s"
            :photos="[
              'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/98/16/90/east-wing.jpg?w=1200&h=-1&s=1',
              'https://img1.10bestmedia.com/Images/Photos/323058/p-11162895846-4c814ff297-k_55_660x440.jpg',
              'https://upload.wikimedia.org/wikipedia/commons/5/58/Yorkdale_Mall.jpg'
            ]"
            title="Winterlicious"
            address="1552 Avenue Rd"
            walk=""
            subway="37 minutes"
            uber="35 minutes"
            dates="Jan 31-Feb 13"
            type="Food"
            typeIcon="lunch_dining"
            website="https://www.toronto.ca/explore-enjoy/festivals-events/winterlicious/"
            directions="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/INS+Market,+Front+Street+West,+Toronto,+ON,+Canada/@43.6447418,-79.3809071,17z/data=!3m1!5s0x882b31b95f52582d:0x20b5c47effb49f3d!4m17!4m16!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x882b34d357aead6f:0xba45926cb9d5214d!2m2!1d-79.3808476!2d43.6444303!2m3!6e0!7e2!8j1723717799?entry=ttu"
          />
          <SeasonalSquare
            :likes="27"
            :dislikes="120"  
            :largeView="selected === 'seasonal'"
            smallPhoto="https://assets.cadillacfairview.com/transform/82c1319d-471a-4e7f-8af3-e23e8313bf5d/-Retail-Sherway-Gardens-Mall-Interior?io=transform:fill,width:1600&quality=80"
            :photos="[
              'https://images.ctfassets.net/70unvdt5g4gf/2lsnucM0wTYBkBcpNGPf76/92c5d71628adecdd5628e6c9730921a9/170519-Sherway-418-min.jpg',
              'https://images.ctfassets.net/70unvdt5g4gf/45TxYHVxgLYB6AGUhz1G7/36a628dfdc9c23088784424122ad2e9d/170519-Sherway-389-min__1_.jpg',
              'https://images.ctfassets.net/70unvdt5g4gf/2lsnucM0wTYBkBcpNGPf76/92c5d71628adecdd5628e6c9730921a9/170519-Sherway-418-min.jpg'
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
            :likes="120"
            :dislikes="52"  
            :largeView="selected === 'seasonal'"
            smallPhoto="https://i.redd.it/yiy47ulawq681.jpg"
            :photos="[
              'https://blog.databid.com/hubfs/Square%20one-1.jpg',
              'https://www.todocanada.ca/wp-content/uploads/Michael-Muraz-Square-One-Shopping-Centre-011-Low-Res-1280x720.jpg',
              'https://www.insauga.com/wp-content/uploads/2022/12/70S_9462-scaled.jpg'
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
            :likes="120"
            :dislikes="52"  
            :largeView="selected === 'seasonal'"
            smallPhoto="https://i.redd.it/yiy47ulawq681.jpg"
            :photos="[
              'https://blog.databid.com/hubfs/Square%20one-1.jpg',
              'https://www.todocanada.ca/wp-content/uploads/Michael-Muraz-Square-One-Shopping-Centre-011-Low-Res-1280x720.jpg',
              'https://www.insauga.com/wp-content/uploads/2022/12/70S_9462-scaled.jpg'
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

