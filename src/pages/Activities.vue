<template>
  <div class="h-screen px-16">
    <div class="flex flex-col items-center no-wrap h-auto">
      <NavigationMap />
    </div>
    <div class="w-full flex overflow-x-scroll no-wrap py-3">
      <q-btn class="rounded-3xl mr-2" color="red" text-color="white" label="All"></q-btn>
      <q-btn class="rounded-3xl mr-2" color="red" text-color="white" label="Landmarks"></q-btn>
      <q-btn class="rounded-3xl mr-2" color="red" text-color="white" label="Things to do"></q-btn>
      <q-btn class="rounded-3xl mr-2" color="red" text-color="white" label="Shopping"></q-btn>
      <q-btn class="rounded-3xl mr-2" color="red" text-color="white" label="Restaurants"></q-btn>
    </div>
    <div class="w-full py-4">
      <span class="text-bold text-3xl flex justify-center text-red">Restaurants</span>
      <div class="md:w-1/2 w-full flex flex-col items-center justify-center py-4 my-8 border border-4 rounded-xl" style="border-color: red;">
        <span class="text-lg pb-2">Han Ba Tang</span>
        <div class="flex items-center justify-evenly w-full pb-2">
          <span>🇰🇷 Korean Cuisine</span>
          <div class="flex items-center">
            <q-icon name="location_on" class="pr-2"></q-icon>
            <span>4862 Yonge St</span>
          </div>
          <div class="flex items-center">
            <q-icon name="event_seat" class="pr-2"></q-icon>
            <span>Reservation required</span>
          </div>
          <div class="flex items-center">
            <q-icon name="takeout_dining" class="pr-2"></q-icon>
            <span>Takeout available</span>
          </div>
        </div>
        <div class="flex items-center pb-2 justify-center">
          <q-icon name="train" class="pr-2"></q-icon>
          <span>20 minutes by subway</span>
          <span class="pl-1">(Yonge-University subway line)</span>
        </div>
        <span>Recommendations:</span>
        <div class="flex pb-4">
          <span class="pr-2">⭐️ Pork Bone Soup - $15</span>
          <span>⭐️ Bulgogi Bibimbap - $14</span>
        </div>
        <div class="flex items-center">
          <q-icon name="open_in_new" class="pr-2"></q-icon>
          <a class="hover:underline" target="_blank" href="https://hanbatang.ca">Website</a>
        </div>
        <div class="flex items-center">
          <q-icon name="call" class="pr-2"></q-icon>
          <span>+1 (416) 546-8218</span>
        </div>
        <div class="flex items-center">
          <q-icon name="map" class="pr-2"></q-icon>
          <a class="hover:underline" target="_blank" href="https://www.google.com/maps/dir/Union+Station+Toronto,+Front+Street+West,+Toronto,+ON,+Canada/Han+Ba+Tang,+Yonge+Street,+North+York,+ON,+Canada/@43.7072743,-79.4508689,12z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x882b350e38f30029:0xddf7c32c7703346a!2m2!1d-79.3804062!2d43.6453197!1m5!1m1!1s0x882b2d64f91a4439:0x3e0fd5b3d55de893!2m2!1d-79.4115261!2d43.7628825?entry=ttu">Directions from Union Station</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationMap from '../components/NavigationMap.vue';
export default {
  name: 'ActivitesPage',
  components: {
    NavigationMap
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
