<template>
  <div style="background-color: #f6f7f8;">
    <div class="w-full flex flex-col overflow-x-scroll no-wrap py-3 px-2">
      <div class="flex w-full items-center justify-center text-3xl py-10">
        <q-icon name="flight_takeoff" size="lg" class="pr-2"></q-icon>
        <span class="px-2">{{ $t('SeoulTorontoTitle') }}</span>
        <q-icon name="flight_land" size="lg" class="pr-2"></q-icon>
      </div>
      <div class="flex items-center justify-center pb-4">
        <img class="rounded-xl xl:h-80 lg:h-72 sm:h-48 h-32" src="@/assets/hanbokBoth.jpg" alt="Canada">
        <img class="rounded xl:h-72 lg:h-60 sm:h-28 h-24 xl:px-20 lg:px-12 px-4" src="@/assets/jinStayLogo.png" alt="Canada">
        <img class="rounded-xl xl:h-80 lg:h-72 sm:h-48 h-32" src="@/assets/workJinnie.jpg" alt="Canada">
      </div>
      <div class="w-full px-2 flex flex-col items-center text-base">
        <div class="sm:w-9/12 w-full mb-4 bg-white rounded-lg flex flex-col p-4 shadow-md hover:shadow-xl cursor-pointer">
          <span class="font-bold text-2xl pb-2">{{ $t('ExperiencedHotelier') }}</span>
          <span class="pb-4">{{ $t('HotelierInfo') }}</span>
        </div>
        <div class="sm:w-9/12 w-full mb-4 bg-white rounded-lg flex flex-col p-4 shadow-md hover:shadow-xl cursor-pointer">
          <span class="font-bold text-2xl pb-2">{{ $t('SeoulToToronto') }}</span>
          <span class="pb-4">{{ $t('SeoulTorontoInfo') }}</span>
        </div>
        <div class="sm:w-9/12 w-full mb-4 bg-white rounded-lg flex flex-col p-4 shadow-md hover:shadow-xl cursor-pointer">
          <span class="font-bold text-2xl pb-2">{{ $t('Foodie') }}</span>
          <span class="pb-4">{{ $t('FoodieInfo') }}</span>
          <div class="flex flex-nowrap items-center justify-center pb-4">
            <img class="lg:h-80 md:h-64 sm:h-48 h-32 rounded-xl mx-1 py-1" src="@/assets/pho.jpg" alt="Canada">
            <img class="lg:h-80 md:h-64 sm:h-48 h-32 rounded-xl mx-1 py-1" src="@/assets/steak.jpg" alt="Canada">
            <img class="lg:h-80 md:h-64 sm:h-48 h-32 rounded-xl mx-1 py-1" src="@/assets/hanshik.jpg" alt="Canada">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutTheHost',
  components: {
  },
  data() {
    return {
    }
  },
  mounted () {
    window.scrollTo({top: 1050, behavior: 'smooth'})
  },
  methods: {
  }
}
</script>

<style>
</style>
