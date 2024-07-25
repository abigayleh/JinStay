<template>
  <div class="w-full items-center flex flex-col text-lg p-4">
    <div class="flex flex-col w-fit p-2 px-4 text-center">
      <span class="text-bold pb-1">Welcome to your new home!</span>
      <span>A beautiful Queen Bed Studio Apartment located in Downtown Toronto ✨</span>
      <span>With prime access to Union station and plenty of locations in walking distance, this is the perfect location for your vacation!</span>
      <span>Have a nice stay, <b>JinStay</b> 🫰</span>
    </div>
    <div class="py-4 w-full flex justify-evenly">
      <div class="flex flex-col items-center h-fit border border-4 rounded-2xl p-4 text-center mb-4" style="border-color: red; width: 400px">
        <span class="text-bold pb-1 underline">Quick facts</span>
        <div class="pb-1 pr-4">
          <q-icon name="hotel" class="pr-2"></q-icon>
          <span>Sleeps: 3 people</span>
        </div>
        <div class="flex">
          <div class="pb-1 pr-4">
            <q-icon name="login" class="pr-2"></q-icon>
            <span>Check in: 3pm</span>
          </div>
          <div>
            <q-icon name="logout" class="pr-2"></q-icon>
            <span>Check out: 11am</span>
          </div>
        </div>
        <div class="pr-4 pb-1">
          <q-icon name="directions_walk" class="pr-2"></q-icon>
          <span>2 min walk from union station</span>
        </div>
        <div class="pr-4 pb-1">
          <q-icon name="local_taxi" class="pr-2"></q-icon>
          <span>30 min drive from Pearson Airport</span>
        </div>
        <div class="pr-4 pb-1">
          <q-icon name="subway" class="pr-2"></q-icon>
          <span>1 hour subway from Pearson Airport</span>
        </div>
      </div>
      <div class="flex flex-col border border-4 rounded-2xl p-4 px-6 text-center mb-4" style="border-color: red; width: 600px;">
        <span class="text-bold pb-1 underline">Amenities</span>
        <div class="flex">
          <div class="w-1/2 flex">
            <div class="pb-1 pr-4">
              <q-icon name="bed" class="pr-2"></q-icon>
              <span>Queen bed</span>
            </div>
            <div class="pb-1 pr-4">
              <q-icon name="computer" class="pr-2"></q-icon>
              <span>Designated workspace</span>
            </div>
            <div class="pb-1 pr-4">
              <q-icon name="wifi" class="pr-2"></q-icon>
              <span>Fast speed Wi-Fi</span>
            </div>
            <div class="pb-1 pr-4">
              <q-icon name="bathtub" class="pr-2"></q-icon>
              <span>Bathtub</span>
            </div>
          </div>
          <div class="w-1/2 flex">
            <div class="pb-1 pr-4">
              <q-icon name="fitness_center" class="pr-2"></q-icon>
              <span>Fitness centre</span>
            </div>
            <div class="pb-1 pr-4">
              <q-icon name="help_center" class="pr-2"></q-icon>
              <span>24/7 concierge service</span>
            </div>
            <div class="pb-1 pr-4">
              <q-icon name="wifi" class="pr-2"></q-icon>
              <span>Fast speed Wi-Fi</span>
            </div>
            <div class="pb-1 pr-4">
              <q-icon name="soap" class="pr-2"></q-icon>
              <span>Complimentary towletries</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col md:w-fit w-full h-fit border border-4 rounded-2xl p-2 px-4 text-center mb-4" style="border-color: red;">
        <span class="text-bold pb-1 underline">Cleaning procedure</span>
        <div class="flex flex-col">
          <span>-> Sanitization of all cutlery</span>
          <span>-> Bedding washed with bleach</span>
        </div>
      </div>
    </div>
    <span class="w-full text-center text-3xl">Take a look 👉</span>
    <div class="flex w-full">
      <div class="flex items-center flex-col w-full md:w-1/2 p-4">
        <span>Bedroom:</span>
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
        <span>Kitchen:</span>
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
        <span>Living room:</span>
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
        <span>Bathroom:</span>
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
        <span>Interior:</span>
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
        <span>Exterior:</span>
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
  }
}
</script>

<style>
</style>
