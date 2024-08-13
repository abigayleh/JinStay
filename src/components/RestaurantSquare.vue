<template>
  <div class="flex flex-col items-center justify-center py-4 mx-3 my-8 bg-white rounded-xl border border-2" style="min-width: 375px;">
    <span class="text-lg pb-2">{{ $t('HanBaTang') }}</span>
    <div class="flex items-center justify-evenly w-full pb-2">
      <span>{{ $t('KoreanCuisine') }}</span>
      <div class="flex items-center">
        <q-icon name="location_on" class="pr-2"></q-icon>
        <span>{{ $t('4862YongeSt') }}</span>
      </div>
      <div class="flex items-center">
        <q-icon name="event_seat" class="pr-2"></q-icon>
        <span>{{ $t('ReservationRequired') }}</span>
      </div>
      <div class="flex items-center">
        <q-icon name="takeout_dining" class="pr-2"></q-icon>
        <span>{{ $t('TakeoutAvailable') }}</span>
      </div>
    </div>
    <div class="flex items-center pb-2 justify-center">
      <q-icon name="train" class="pr-2"></q-icon>
      <span>{{ $t('20MinutesBySubway') }}</span>
      <span class="pl-1">{{ $t('YongeUniversitySubwayLine') }}</span>
    </div>
    <span>{{ $t('Recommendations') }}</span>
    <div class="flex pb-4">
      <span class="pr-2">{{ $t('PorkBoneSoup') }}</span>
      <span>{{ $t('BulgogiBibimbap') }}</span>
    </div>
    <div class="flex items-center">
      <q-icon name="open_in_new" class="pr-2"></q-icon>
      <a class="hover:underline" target="_blank" href="https://hanbatang.ca">{{ $t('Website') }}</a>
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
</template>

<script>
export default {
  name: 'ActivitySquare',
  props: {
    title: {
      type: String,
      required: true
    },
    cuisine: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    reservation: {
      type: String,
      required: true
    },
    takeout: {
      type: String,
      required: true
    },
    bySubway: {
      type: String,
      required: true
    },
    subwayLine: {
      type: String,
      required: true
    },
    recommendationOne: {
      type: String,
      required: true
    },
    recommendationTwo: {
      type: String,
      required: true
    },
    website: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    directions: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
</style>
