<template>
  <div class="h-screen">
    <div class="w-full flex flex-col overflow-x-scroll no-wrap py-3 px-2">
      <div class="flex w-full items-center justify-center text-3xl py-10">
        <q-icon name="flight_takeoff" size="lg" class="pr-2"></q-icon>
        <span class="px-2">{{ $t('SeoulTorontoTitle') }}</span>
        <q-icon name="flight_land" size="lg" class="pr-2"></q-icon>
      </div>
      <div class="flex items-center justify-evenly pb-4">
        <img class="rounded md:h-96 h-48" src="@/assets/hanbokBoth.jpg" alt="Canada">
        <img class="rounded md:h-72 h-28" src="@/assets/jinStayLogo.png" alt="Canada">
        <img class="rounded md:h-96 h-48" src="@/assets/workJinnie.jpg" alt="Canada">
      </div>
      <div class="flex flex-col pl-6">
        <span class="font-bold text-2xl">{{ $t('ExperiencedHotelier') }}</span>
        <span class="pb-4">{{ $t('HotelierInfo') }}</span>
        <span class="font-bold text-2xl">{{ $t('SeoulToToronto') }}</span>
        <span class="pb-4">{{ $t('SeoulTorontoInfo') }}</span>
        <span class="font-bold text-2xl">{{ $t('Foodie') }}</span>
        <span class="pb-4">{{ $t('FoodieInfo') }}</span>
        <div class="flex flex-nowrap items-center justify-evenly pb-4">
          <img class="rounded w-1/4 mx-1 py-1" src="@/assets/pho.jpg" alt="Canada">
          <img class="rounded w-1/2 mx-1 py-1" src="@/assets/steak.jpg" alt="Canada">
          <img class="rounded w-1/4 mx-1 py-1" src="@/assets/hanshik.jpg" alt="Canada">
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
  methods: {
  }
}
</script>

<style>
</style>
