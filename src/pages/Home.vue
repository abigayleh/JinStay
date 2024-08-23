<template>
  <div id="home" class="w-full items-center flex flex-col text-lg overflow-hidden" style="background-color: #f6f7f8;">
    <span class="pt-8 pb-4 sm:text-3xl text-2xl font-bold text-red">{{ $t('Welcome') }} 🏡</span>
    <div class="relative flex flex-col w-fit p-2 px-4 text-center">
      <span>{{ $t('HomeInformation') }}</span>
      <span>{{ $t('HomeLocation') }}</span>
      <span>{{ $t('HaveANiceDay') }}<b @click="startConfetti()" class="hover:underline cursor-pointer">{{ $t('JinStay') }}</b> 🫰</span>
      <canvas ref="confettiCanvas" style="z-index: 5000; position: absolute; bottom: 0; left: 0; width: 100%; height: 100%; pointer-events: none;"></canvas>
    </div>
    <div class="py-4 w-full flex justify-evenly">
      <div class="h-fit flex flex-col items-center rounded-2xl p-8 text-center mb-8 bg-white shadow-md hover:shadow-xl cursor-pointer" style="width: 400px">
        <span class="text-bold pb-1 underline pb-4 text-xl sm:w-fit w-full">{{ $t('QuickFacts') }}</span>
        <div class="pb-2 pr-4">
          <q-icon name="hotel" class="pr-2"></q-icon>
          <span>{{ $t('Sleeps3') }}</span>
        </div>
        <div class="flex sm:flex-row flex-col">
          <div class="pb-2 pr-4">
            <q-icon name="login" class="pr-2"></q-icon>
            <span>{{ $t('CheckIn') }}</span>
          </div>
          <div class="pb-2">
            <q-icon name="logout" class="pr-2"></q-icon>
            <span>{{ $t('CheckOut') }}</span>
          </div>
        </div>
        <div class="pr-4 pb-2">
          <q-icon name="directions_walk" class="pr-2"></q-icon>
          <span>{{ $t('WalkFromUnionStation') }}</span>
        </div>
        <div class="pr-4 pb-2">
          <q-icon name="local_taxi" class="pr-2"></q-icon>
          <span>{{ $t('DriveFromAirport') }}</span>
        </div>
        <div class="pr-4 pb-2">
          <q-icon name="subway" class="pr-2"></q-icon>
          <span>{{ $t('SubwayFromAirport') }}</span>
        </div>
      </div>
      <div class="amenities w-full mx-4 flex flex-col flex-nowrap rounded-2xl py-8 text-center mb-8 bg-white shadow-md hover:shadow-xl cursor-pointer">
        <span class="text-bold underline text-xl">{{ $t('Amenities') }}</span>
        <div class="h-full flex flex-col justify-center items-center flex-wrap text-base">
          <div class="pl-5 pb-4">
            <div class="pt-2 pr-12 py-1 flex items-center">
              <q-icon name="location_city" class="pr-2"></q-icon>
              <span>{{ $t('DowntownView') }}</span>
            </div>
            <div class="pb-2 py-1 text-start">
              <q-icon name="key" class="pr-2"></q-icon>
              <span>{{ $t('SelfCheckIn') }}</span>
            </div>
          </div>
          <div class="flex flex-col m-2" style="width: 266px;">
            <div class="font-bold border border-2 p-3 mb-2 text-center rounded" style="background-color: rgba(255, 0, 0, 0.4); height: 50px;">{{ $t('BedroomLaundry') }}</div>
            <div class="border border-2 flex flex-col p-3 pl-4 text-start rounded" style="height: 134px;">
              <div class="pt-2 py-1 pr-4 flex items-center">
                <q-icon name="bed" class="pr-2"></q-icon>
                <span>{{ $t('QueenBed') }}</span>
              </div>
              <div class="py-1 pr-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-520v320h560v-320H200Zm0-80h560v-160H200v160Zm280 360q-33 0-56.5-23.5T400-320q0-27 15-57.5T480-480q50 72 65 102.5t15 57.5q0 33-23.5 56.5T480-240Zm200-400q17 0 28.5-11.5T720-680q0-17-11.5-28.5T680-720q-17 0-28.5 11.5T640-680q0 17 11.5 28.5T680-640ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-480v-160 160Z"/></svg>
                <span class="pl-1">{{ $t('WasherDryer') }}</span>
              </div>
              <div class="py-1 pr-4 flex items-center">
                <q-icon name="checkroom" class="pr-2"></q-icon>
                <span>{{ $t('Hangers') }}</span>
              </div>
            </div>
          </div>
          <div class="flex flex-col m-2" style="width: 266px;">
              <div class="font-bold border border-2 p-3 mb-2 text-center rounded" style="background-color: rgba(255, 0, 0, 0.4); height: 50px;">{{ $t('Bathroom') }}</div>
              <div class="border border-2 flex flex-col p-3 pl-4 text-start rounded" style="height: 220px;">
                <div class="pt-2 py-1 pb-1 pr-4 flex items-center">
                  <img class="w-6 h-6 mr-1.5" src="@/assets/hair-dryer.png" alt="Canada">
                  <span>{{ $t('HairDryer') }}</span>
                </div>
                <div class="py-1 pr-4 flex items-center">
                  <q-icon name="bathtub" class="pr-2"></q-icon>
                  <span>{{ $t('Bathtub') }}</span>
                </div>
                <div class="py-1 pr-4 flex items-center">
                  <q-icon name="soap" class="pr-2"></q-icon>
                  <span style="width: 180px;">{{ $t('Shampoo') }}</span>
                </div>
                <div class="py-1 pr-4 flex items-center">
                  <q-icon name="soap" class="pr-2"></q-icon>
                  <span>{{ $t('Towels') }}</span>
                </div>
                <div class="py-1 pr-4 flex items-center">
                  <q-icon name="water" class="pr-2"></q-icon>
                  <span>{{ $t('HotWater') }}</span>
                </div>
            </div>
          </div>
          <div class="flex flex-col m-2" style="width: 266px;">
            <div class="font-bold border border-2 p-3 mb-2 text-center rounded" style="background-color: rgba(255, 0, 0, 0.4); height: 50px;">{{ $t('KitchenDining') }}</div>
            <div class="border border-2 flex flex-col p-3 pl-4 text-start text-center rounded" style="height: 300px;">
              <div class="pt-2 py-1 pb-1 pr-4">
                <q-icon name="kitchen" class="pr-2"></q-icon>
                <span>{{ $t('Refrigerator') }}</span>
              </div>
              <div class="py-1 pr-4">
                <q-icon name="microwave" class="pr-2"></q-icon>
                <span>{{ $t('Microwave') }}</span>
              </div>
              <div class="py-1 pr-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M177-560q14-36 4.5-64T149-680q-33-40-43.5-75.5T102-840h78q-8 38-2.5 62t28.5 52q38 46 48.5 81.5t.5 84.5h-78Zm160 0q14-36 5-64t-32-56q-33-40-44-75.5t-4-84.5h78q-8 38-2.5 62t28.5 52q38 46 48.5 81.5t.5 84.5h-78Zm160 0q14-36 5-64t-32-56q-33-40-44-75.5t-4-84.5h78q-8 38-2.5 62t28.5 52q38 46 48.5 81.5t.5 84.5h-78ZM200-160q-50 0-85-35t-35-85v-200h561q5-34 27-59.5t54-36.5l185-62 25 76-185 62q-12 4-19.5 14.5T720-462v182q0 50-35 85t-85 35H200Zm0-80h400q17 0 28.5-11.5T640-280v-120H160v120q0 17 11.5 28.5T200-240Zm200-80Z"/></svg>
                <span class="pl-1">{{ $t('CookingBasics') }}</span>
              </div>
              <div class="py-1 pr-4">
                <q-icon name="restaurant" class="pr-2"></q-icon>
                <span>{{ $t('DishesSilverware') }}</span>
              </div>
              <div class="py-1 pr-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-520v320h560v-320H200Zm0-80h560v-160H200v160Zm280 360q-33 0-56.5-23.5T400-320q0-27 15-57.5T480-480q50 72 65 102.5t15 57.5q0 33-23.5 56.5T480-240Zm200-400q17 0 28.5-11.5T720-680q0-17-11.5-28.5T680-720q-17 0-28.5 11.5T640-680q0 17 11.5 28.5T680-640ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-480v-160 160Z"/></svg>
                <span class="pl-1">{{ $t('Dishwasher') }}</span>
              </div>
              <div class="py-1 pr-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M360-120v-120H80v-80h280q33 0 56.5 23.5T440-240v120h-80Zm160 0v-120q0-33 23.5-56.5T600-320h280v80H600v120h-80ZM240-360q-50 0-85-35t-35-85v-160h720v160q0 50-35 85t-85 35H240Zm0-80h480q17 0 28.5-11.5T760-480v-80H200v80q0 17 11.5 28.5T240-440ZM120-680v-80h240v-40q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800v40h240v80H120Zm80 240v-120 120Z"/></svg>
                <span class="pl-1">{{ $t('Stove') }}</span>
              </div>
              <div class="py-1 pr-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-360v280h560v-280h-80v200H280v-200h-80Zm160 120h240v-120H360v120ZM200-560h560v-200H200v200Zm120-80q-17 0-28.5-11.5T280-680q0-17 11.5-28.5T320-720q17 0 28.5 11.5T360-680q0 17-11.5 28.5T320-640Zm160 0q-17 0-28.5-11.5T440-680q0-17 11.5-28.5T480-720q17 0 28.5 11.5T520-680q0 17-11.5 28.5T480-640Zm160 0q-17 0-28.5-11.5T600-680q0-17 11.5-28.5T640-720q17 0 28.5 11.5T680-680q0 17-11.5 28.5T640-640Z"/></svg>
                <span class="pl-1">{{ $t('Oven') }}</span>
              </div>
              <div class="py-1 pr-4">
                <q-icon name="coffee_maker" class="pr-2"></q-icon>
                <span>{{ $t('CoffeeMaker') }}</span>
              </div>
            </div>
          </div>
          <div class="flex flex-col m-2" style="width: 266px;">
            <div class="font-bold border border-2 p-3 mb-2 text-center rounded" style="background-color: rgba(255, 0, 0, 0.4); height: 50px;">{{ $t('Outdoor') }}</div>
            <div class="border border-2 flex flex-col p-3 pl-4 text-start rounded" style="height: 200px;">
              <div class="pt-2 pb-1 pr-4">
                <q-icon name="local_taxi" class="pr-2"></q-icon>
                <span>{{ $t('PaidParking') }}</span>
              </div>
              <div class="pb-1 pr-4">
                <q-icon name="chair_alt" class="pr-2"></q-icon>
                <span>{{ $t('OutdoorFurniture') }}</span>
              </div>
              <div class="pb-1 pr-4">
                <q-icon name="balcony" class="pr-2"></q-icon>
                <span>{{ $t('PrivateBalcony') }}</span>
              </div>
              <div class="pb-1 pr-4">
                <q-icon name="fitness_center" class="pr-2"></q-icon>
                <span>{{ $t('FitnessCenter') }}</span>
              </div>
              <div class="pb-1 pr-4">
                <q-icon name="help_center" class="pr-2"></q-icon>
                <span>{{ $t('Concierge') }}</span>
              </div>
            </div>
          </div>
          <div class="flex flex-col m-2" style="width: 266px;">
            <div class="font-bold border border-2 p-3 mb-2 text-center rounded" style="background-color: rgba(255, 0, 0, 0.4); height: 50px;">{{ $t('Entertainment') }}</div>
            <div class="border border-2 flex flex-col p-3 pl-4 text-start rounded" style="height: 160px;">
              <div class="pt-2 pb-1 pr-4">
                <q-icon name="tv" class="pr-2"></q-icon>
                <span>{{ $t('TV') }}</span>
              </div>
              <div class="flex flex-nowrap pt-2 pb-1 pr-4">
                <q-icon name="sports_esports" class="pr-2"></q-icon>
                <div class="flex">
                  <span>{{ $t('PS4') }} {{ $t('Youtube') }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col m-2" style="width: 266px;">
            <div class="font-bold border border-2 p-3 mb-2 text-center rounded" style="background-color: rgba(255, 0, 0, 0.4); height: 50px;">{{ $t('Internet') }}</div>
            <div class="border border-2 flex flex-col p-3 pl-4 text-start rounded" style="height: 105px;">
              <div class="pt-2 pb-1 pr-4">
                <q-icon name="wifi" class="pr-2"></q-icon>
                <span>{{ $t('WiFi') }}</span>
              </div>
              <div class="pb-1 pr-4">
                <q-icon name="computer" class="pr-2"></q-icon>
                <span>{{ $t('DesignatedWorkspace') }}</span>
              </div>
            </div>
          </div>
          <div class="flex flex-col m-2" style="width: 266px;">
            <div class="font-bold border border-2 p-3 mb-2 text-center rounded" style="background-color: rgba(255, 0, 0, 0.4); height: 50px;">{{ $t('HomeSafety') }}</div>
            <div class="border border-2 flex flex-col p-3 pl-4 rounded text-start" style="height: 105px;">
              <div class="pt-2 pb-1 pr-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M440-120v-200h80v200h-80Zm323-101L621-362l57-57 141 142-56 56Zm-566 0-56-56 141-142 57 57-142 141Zm3-539v40h560v-40H200Zm124 120 12 40h288l12-40H324Zm12 120q-26 0-47-15.5T260-576l-20-64h-40q-33 0-56.5-23.5T120-720v-120h720v120q0 33-23.5 56.5T760-640h-40l-26 68q-9 23-29 37.5T620-520H336ZM200-760v40-40Z"/></svg>
                <span class="pl-1">{{ $t('SmokeAlarm') }}</span>
              </div>
              <div class="pb-1 pr-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M440-120v-200h80v200h-80Zm323-101L621-362l57-57 141 142-56 56Zm-566 0-56-56 141-142 57 57-142 141Zm3-539v40h560v-40H200Zm124 120 12 40h288l12-40H324Zm12 120q-26 0-47-15.5T260-576l-20-64h-40q-33 0-56.5-23.5T120-720v-120h720v120q0 33-23.5 56.5T760-640h-40l-26 68q-9 23-29 37.5T620-520H336ZM200-760v40-40Z"/></svg>
                <span class="pl-1">{{ $t('CarbonMonoxide') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-fit flex flex-col items-center rounded-2xl mx-4 py-8 text-center mb-4 bg-white shadow-md hover:shadow-xl cursor-pointer">
        <span class="text-bold pb-1 text-xl underline pb-4">{{ $t('CleaningProcedure') }}</span>
        <span class="w-full px-10" style="max-width: 1200px;">{{ $t('Cleanliness') }}</span>
        <div class="flex justify-center text-base">
          <div class="flex flex-col m-4" style="width: 300px;">
            <div class="border border-2 p-3 mb-2 font-bold rounded" style="background-color: rgba(255, 0, 0, 0.4); height: 50px;">{{ $t('Kitchen') }}</div>
            <div class="border border-2 flex flex-col p-4 rounded text-start" style="height: 230px;">
              <span><b class="text-xl">•</b> {{ $t('WashDishes') }}</span>
              <span><b class="text-xl">•</b> {{ $t('WipeDown') }}</span>
              <span><b class="text-xl">•</b> {{ $t('EmptyTrash') }}</span>
            </div>
          </div>
          <div class="flex flex-col m-4" style="width: 300px;">
            <div class="border border-2 p-3 mb-2 rounded font-bold" style="background-color: rgba(255, 0, 0, 0.4); height: 50px;">{{ $t('Bathroom') }}</div>
            <div class="border border-2 flex flex-col p-4 rounded text-start" style="height: 230px;">
              <span><b class="text-xl">•</b> {{ $t('WashTowels') }}</span>
              <span><b class="text-xl">•</b> {{ $t('CleanSink') }}</span>
              <span><b class="text-xl">•</b> {{ $t('CleanMirror') }}</span>
              <span><b class="text-xl">•</b> {{ $t('ReplaceToilet') }}</span>
              <span><b class="text-xl">•</b> {{ $t('EmptyTrash') }}</span>
            </div>
          </div>
          <div class="flex flex-col m-4" style="width: 300px;">
            <div class="border border-2 p-3 mb-2 font-bold rounded" style="background-color: rgba(255, 0, 0, 0.4); height: 50px;">{{ $t('LivingAreas') }}</div>
            <div class="border border-2 flex flex-col p-3 text-start rounded" style="height: 230px;">
              <span><b class="text-xl">•</b> {{ $t('Vacuum') }}</span>
              <span><b class="text-xl">•</b> {{ $t('Dust') }}</span>
              <span><b class="text-xl">•</b> {{ $t('Sanitize') }}</span>
              <span><b class="text-xl">•</b> {{ $t('Organize') }}</span>
            </div>
          </div>
          <div class="flex flex-col m-4" style="width: 300px;">
            <div class="border border-2 p-3 mb-2 font-bold rounded" style="background-color: rgba(255, 0, 0, 0.4); height: 50px;">{{ $t('Bedroom') }}</div>
            <div class="border border-2 flex flex-col p-3 text-start rounded" style="height: 230px;">
              <span><b class="text-xl">•</b> {{ $t('WashBedding') }}</span>
              <span><b class="text-xl">•</b> {{ $t('DustBed') }}</span>
              <span><b class="text-xl">•</b> {{ $t('VacuumBed') }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <span class="w-full text-center text-3xl">{{ $t('TakeALook') }}</span>
    <div class="flex w-full">
      <div class="flex items-center flex-col w-full md:w-1/2 p-4">
        <span>{{ $t('Bedroom') }}</span>
        <div class="w-full">
          <q-carousel
            class="rounded"
            swipeable
            animated
            v-model="bedroomSlide"
            v-model:fullscreen="bedroomFullscreen"
            thumbnails
            infinite
          >
            <q-carousel-slide :name="1" img-src="https://www.redfin.com/blog/wp-content/uploads/2022/09/spacejoy-xkJ2_THgKmk-unsplash.jpg"></q-carousel-slide>
            <q-carousel-slide :name="2" img-src="https://www.thespruce.com/thmb/_KV9dWxG8m6TE9_4dJ8sl4bfJ2U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Sliding-Door-Curtain-Studio-Bedroom-587e8e323df78c17b6b94156.jpg"></q-carousel-slide>
            <template v-slot:control>
              <q-carousel-control
                position="bottom-right"
                :offset="[18, 18]"
              >
                <q-btn
                  push round dense color="white" text-color="black"
                  :icon="bedroomFullscreen ? 'fullscreen_exit' : 'fullscreen'"
                  @click="bedroomFullscreen = !bedroomFullscreen"
                ></q-btn>
              </q-carousel-control>
            </template>
          </q-carousel>
        </div>
      </div>
      <div class="flex items-center flex-col w-full md:w-1/2 p-4">
        <span>{{ $t('Kitchen') }}</span>
        <div class="w-full">
          <q-carousel
            class="rounded"
            swipeable
            animated
            v-model="kitchenSlide"
            v-model:fullscreen="kitchenFullscreen"
            thumbnails
            infinite
          >
            <q-carousel-slide :name="1" img-src="https://i0.wp.com/cocolapinedesign.com/wp-content/uploads/MEDBE5AA638576B4079899D18F81FD90EE4.jpg?resize=1140%2C761&ssl=1"></q-carousel-slide>
            <q-carousel-slide :name="2" img-src="https://i.pinimg.com/736x/d0/62/a6/d062a64528c2292b1c086602515cda68.jpg"></q-carousel-slide>
            <q-carousel-slide :name="3" img-src="https://stylebyemilyhenderson.com/wp-content/uploads/2023/03/CleoMurnane_10-copy.jpg"></q-carousel-slide>
            <template v-slot:control>
              <q-carousel-control
                position="bottom-right"
                :offset="[18, 18]"
              >
                <q-btn
                  push round dense color="white" text-color="black"
                  :icon="kitchenFullscreen ? 'fullscreen_exit' : 'fullscreen'"
                  @click="kitchenFullscreen = !kitchenFullscreen"
                ></q-btn>
              </q-carousel-control>
            </template>
          </q-carousel>
        </div>
      </div>
    </div>
    <div class="flex w-full">
      <div class="flex items-center flex-col w-full md:w-1/2 p-4">
        <span>{{ $t('LivingRoom') }}</span>
        <div class="w-full">
          <q-carousel
            class="rounded"
            swipeable
            animated
            v-model="livingSlide"
            v-model:fullscreen="livingFullscreen"
            thumbnails
            infinite
          >
            <q-carousel-slide :name="1" img-src="https://www.thespruce.com/thmb/cPaZ1eA5WqKLYH4kSry7wrMYsDM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/EleanorEmail-847750221ae1499c972c977f279d2d5e.png"></q-carousel-slide>
            <q-carousel-slide :name="2" img-src="https://erikaward.com/wp-content/uploads/2013/05/simple-balcony-ideas-affordable.jpg"></q-carousel-slide>
            <q-carousel-slide :name="3" img-src="https://i.pinimg.com/originals/4a/8c/eb/4a8cebd3201eda76725bbadc070fced6.jpg"></q-carousel-slide>
            <template v-slot:control>
              <q-carousel-control
                position="bottom-right"
                :offset="[18, 18]"
              >
                <q-btn
                  push round dense color="white" text-color="black"
                  :icon="livingFullscreen ? 'fullscreen_exit' : 'fullscreen'"
                  @click="livingFullscreen = !livingFullscreen"
                ></q-btn>
              </q-carousel-control>
            </template>
          </q-carousel>
        </div>
      </div>
      <div class="flex items-center flex-col w-full md:w-1/2 p-4">
        <span>{{ $t('Bathroom') }}</span>
        <div class="w-full">
          <q-carousel
            class="rounded"
            swipeable
            animated
            v-model="bathroomSlide"
            v-model:fullscreen="bathroomFullscreen"
            thumbnails
            infinite
          >
            <q-carousel-slide :name="1" img-src="https://cdn.decoist.com/wp-content/uploads/2018/08/Penny-tiled-hexagonal-flooring-for-the-small-apartment-bathroom.jpg"></q-carousel-slide>
            <q-carousel-slide :name="2" img-src="https://www.thespruce.com/thmb/V2Eu3ElIahWzL3X2eUPsiFcB4fM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/smarter-safer-cleaning-supply-storage-ideas-5190439-05-4a4e010eaa204e7799505b7db95783c7.jpg"></q-carousel-slide>
            <q-carousel-slide :name="3" img-src="https://i.pinimg.com/474x/2d/c0/6b/2dc06bcc98e57249ea318aa498cc622c.jpg"></q-carousel-slide>
            <template v-slot:control>
              <q-carousel-control
                position="bottom-right"
                :offset="[18, 18]"
              >
                <q-btn
                  push round dense color="white" text-color="black"
                  :icon="bathroomFullscreen ? 'fullscreen_exit' : 'fullscreen'"
                  @click="bathroomFullscreen = !bathroomFullscreen"
                ></q-btn>
              </q-carousel-control>
            </template>
          </q-carousel>
        </div>
      </div>
    </div>
    <div class="flex w-full">
      <div class="flex items-center flex-col w-full md:w-1/2 p-4">
        <span>{{ $t('Interior') }}</span>
        <div class="w-full">
          <q-carousel
            class="rounded"
            swipeable
            animated
            v-model="interiorSlide"
            v-model:fullscreen="interiorFullscreen"
            thumbnails
            infinite
          >
            <q-carousel-slide :name="1" img-src="https://www.oyster.com/wp-content/uploads/sites/35/2019/05/lobby-v3757767-1440-1024x683.jpg"></q-carousel-slide>
            <q-carousel-slide :name="2" img-src="https://unity.re/wp-content/uploads/2017/07/top-3-rooftop-pools-king-west-lavelle-.jpg"></q-carousel-slide>
            <q-carousel-slide :name="3" img-src="https://www.onekingwest.com/wp-content/uploads/Fitness-centre-01-min.jpg"></q-carousel-slide>
            <q-carousel-slide :name="4" img-src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/514540810.jpg?k=51341b4ef8be48a78858f2b29d1dfe2436336ee1e999f73d9415af99d9506039&o=&hp=1"></q-carousel-slide>
            <template v-slot:control>
              <q-carousel-control
                position="bottom-right"
                :offset="[18, 18]"
              >
                <q-btn
                  push round dense color="white" text-color="black"
                  :icon="interiorFullscreen ? 'fullscreen_exit' : 'fullscreen'"
                  @click="interiorFullscreen = !interiorFullscreen"
                ></q-btn>
              </q-carousel-control>
            </template>
          </q-carousel>
        </div>
      </div>
      <div class="flex items-center flex-col w-full md:w-1/2 p-4">
        <span>{{ $t('Exterior') }}</span>
        <div class="w-full">
          <q-carousel
            class="rounded"
            swipeable
            animated
            v-model="exteriorSlide"
            v-model:fullscreen="exteriorFullscreen"
            thumbnails
            infinite
          >
            <q-carousel-slide :name="1" img-src="https://media.strata.ca/property-images/353/02_1KingStreetWest_1_King_West_Condos_Exterior-1500.jpg"></q-carousel-slide>
            <q-carousel-slide :name="2" img-src="https://media.strata.ca/property-images/353/07_1KingStreetWest_1_King_West_Condos_Subway-1500.jpg"></q-carousel-slide>
            <q-carousel-slide :name="3" img-src="https://www.onekingwest.com/wp-content/uploads/hotel-entrance-1.jpg"></q-carousel-slide>
            <template v-slot:control>
              <q-carousel-control
                position="bottom-right"
                :offset="[18, 18]"
              >
                <q-btn
                  push round dense color="white" text-color="black"
                  :icon="exteriorFullscreen ? 'fullscreen_exit' : 'fullscreen'"
                  @click="exteriorFullscreen = !exteriorFullscreen"
                ></q-btn>
              </q-carousel-control>
            </template>
          </q-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import confetti from 'canvas-confetti';
export default {
  name: 'HomePage',
  components: {
    
  },
  data() {
    return {
      bedroomSlide: 1,
      bedroomFullscreen: false,
      kitchenSlide: 1,
      kitchenFullscreen: false,
      livingSlide: 1,
      livingFullscreen: false,
      bathroomSlide: 1,
      bathroomFullscreen: false,
      interiorSlide: 1,
      interiorFullscreen: false,
      exteriorSlide: 1,
      exteriorFullscreen: false
    }
  },
  methods: {
    startConfetti () {
      const canvas = this.$refs.confettiCanvas;
      const myConfetti = confetti.create(canvas, {
        resize: true,
        useWorker: true
      });
      myConfetti({
          particleCount: 200,
          spread: 70,
          origin: { y: 1 }
        });
    }
  }
}
</script>

<style scoped>
  canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  .amenities {
    max-width: 900px;
    height: 1940px;
    @media (min-width: 640px) {
      height: 1060px;
    }
    @media (min-width: 860px) {
      height: 760px;
    }
  }
</style>
