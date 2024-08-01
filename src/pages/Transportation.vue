<template>
  <div class="w-full flex flex-col py-4">
    <span class="w-full text-center font-bold text-xl pb-2">{{ $t('TorontoTransportation') }}</span>
    <div class="w-full flex flex-col items-center">
      <span class="text-lg">{{ $t('QuickJump') }}</span>
      <div class="flex flex-col text-lg">
        <span class="cursor-pointer">{{ $t('Transportation') }}</span>
        <span class="ml-4 text-base cursor-pointer">{{ $t('FromPearsonAirport') }}</span>
        <span class="ml-4 text-base cursor-pointer">{{ $t('GeneralTransportation') }}</span>
        <span class="cursor-pointer">{{ $t('Payment') }}</span>
        <span class="cursor-pointer">{{ $t('HelpfulApps') }}</span>
      </div>
    </div>
    <q-expansion-item
        expand-separator
        icon="flight_takeoff"
        label="From Toronto Pearson Airport"
        default-opened
      >
      <div class="px-4">
        <div class="flex items-center justify-evenly w-full flex-row no-wrap py-2">
          <div class="flex flex-col">
            <span class="font-bold">{{ $t('UPExpress') }}</span>
            <div style="width: 300px; height: 200px;">
              <img class="rounded w-full h-full" src="https://upload.wikimedia.org/wikipedia/commons/a/aa/UPXatMimico.jpg" alt="Canada">
            </div>
          </div>
          <span class="px-8">{{ $t('UPExpressInfo') }}</span>
        </div>
      </div>
    </q-expansion-item>
    <q-expansion-item
        expand-separator
        icon="train"
        label="General transportation"
        default-opened
      >
      <div class="px-4">
        <div class="flex items-center justify-evenly w-full flex-row no-wrap py-2">
          <div class="flex flex-col">
            <span class="font-bold">{{ $t('Subway') }}</span>
            <div style="width: 300px; height: 200px;">
              <img class="rounded w-full h-full" src="https://d3d0lqu00lnqvz.cloudfront.net/media/media/a0103c46-7dc7-4df0-b488-fdc41e4de918.jpg" alt="Canada">
            </div>
          </div>
          <span class="px-8">{{ $t('SubwayInfo') }}</span>
        </div>
        <div class="flex items-center justify-evenly w-full flex-row no-wrap py-2">
          <div class="flex flex-col">
            <span class="font-bold">{{ $t('Bus') }}</span>
            <div style="width: 300px; height: 200px;">
              <img class="rounded h-full w-full" src="https://arrivein.com/wp-content/uploads/2020/07/Blog-Image-Public-Transit-Toronto-bike-rack-scaled.jpg" alt="Canada">
            </div>
          </div>
          <span class="px-8">{{ $t('BusInfo') }}</span>
        </div>
        <div class="flex items-center justify-center flex-row no-wrap py-2">
          <div class="flex flex-col">
            <span class="font-bold">{{ $t('Streetcar') }}</span>
            <div style="width: 300px; height: 200px;">
              <img class="rounded h-full w-full" src="https://www.railway-technology.com/wp-content/uploads/sites/13/2023/11/Shutterstock_1791383147.jpg" alt="Canada">
            </div>
          </div>
          <span class="px-8">{{ $t('StreetcarInfo') }}</span>
        </div>
        <div class="flex items-center justify-evenly w-full flex-row no-wrap py-2">
          <div class="flex flex-col">
            <span class="font-bold">{{ $t('GOTrain') }}</span>
            <div style="width: 300px; height: 200px;">
              <img class="rounded w-full h-full" src="https://d3d0lqu00lnqvz.cloudfront.net/media/media/a0103c46-7dc7-4df0-b488-fdc41e4de918.jpg" alt="Canada">
            </div>
          </div>
          <span class="px-8">{{ $t('GOTrainInfo') }}</span>
        </div>
        <div class="flex items-center justify-evenly w-full flex-row no-wrap py-2">
          <div class="flex flex-col">
            <span class="font-bold">{{ $t('BikeShare') }}</span>
            <div style="width: 300px; height: 200px;">
              <img class="rounded w-full h-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/BikeShareToronto_Temperance_St_at_Cloud_Gardens.JPG/260px-BikeShareToronto_Temperance_St_at_Cloud_Gardens.JPG" alt="Canada">
            </div>
          </div>
          <span class="px-8">{{ $t('BikeShareInfo') }}</span>
        </div>
      </div>
    </q-expansion-item>
    <q-expansion-item
        expand-separator
        icon="payments"
        label="Payment"
        default-opened
      >
      <div class="flex flex-col px-4 py-2">
        <div class="flex items-center justify-evenly w-full flex-row no-wrap">
          <div class="flex flex-col">
            <span class="font-bold">{{ $t('PRESTO') }}</span>
            <div style="width: 300px; height: 200px;">
              <img class="rounded h-full w-full" src="https://lh4.googleusercontent.com/nLJ_eIdJseHppJifU-jkk_2G7Rle_Yrw0QRpcRUmm7VsZ9DVG8e41u9LjeQGnh7yU5w5gg2NGFiJNTFVolizja8Yy6KH2eFeP8BZMhVoQa6p4EQYx-hKuPk87D0UnYIzeV_hAhL6YceoPYZ2UQNdmnOcLrb-pgmyq1UqLYym0NoWGwn8NplJ5p-OvE2ioOuKIbN_gDI9" alt="Canada">
            </div>
          </div>
          <div class="flex items-center px-8">
            <span class="mx-4">{{ $t('PRESTOInfo') }}</span>
            <div class="flex flex-col pl-8">
              <span class="font-bold">{{ $t('WhereToBuy') }}</span>
              <span>{{ $t('LargeSupermarkets') }}</span>
              <span>{{ $t('Online') }}</span>
              <span>{{ $t('MostHistoricalSites') }}</span>
            </div>
          </div>
        </div>
      </div>
    </q-expansion-item>
    <q-expansion-item
        expand-separator
        icon="phone_iphone"
        label="Helpful apps"
        default-opened
      >
      <div class="flex flex-col py-2 px-4">
        <div class="flex items-center justify-evenly w-full flex-row no-wrap py-2">
          <div class="flex flex-col justify-center">
            <span class="font-bold text-nowrap pb-2">{{ $t('Maps/GoogleMaps') }}</span>
            <div class="flex flex-row no-wrap items-center">
              <div style="width: 150px; height: 150px;">
                <img class="rounded w-full h-full" src="https://www.apple.com/v/maps/d/images/overview/intro_icon__dfyvjc1ohbcm_large.png" alt="Canada">
              </div>
              <div style="width: 150px; height: 150px;">
                <img class="rounded w-full h-full" src="https://www.google.com/images/branding/product/2x/maps_96in128dp.png" alt="Canada">
              </div>
            </div>
          </div>
          <span class="px-8">{{ $t('MapsInfo') }}</span>
        </div>
        <div class="flex items-center justify-evenly w-full flex-row no-wrap py-2">
          <div class="flex flex-col">
            <span class="font-bold pb-2">{{ $t('Citymapper') }}</span>
            <div class="flex flex-row no-wrap">
              <div style="width: 150px; height: 150px;">
                <img class="rounded w-full h-full" src="https://w7.pngwing.com/pngs/421/750/png-transparent-citymapper-transit-android-bus-android-angle-grass-web-application-thumbnail.png" alt="Canada">
              </div>
              <div style="width: 150px; height: 150px;">
                <img class="rounded w-full h-full" src="@/assets/cityMapper.png" alt="Canada">
              </div>
            </div>
          </div>
          <span class="px-8">{{ $t('MapsInfo') }}</span>
        </div>
        <div class="flex items-center justify-evenly w-full no-wrap py-2">
          <div class="flex flex-col">
            <span class="font-bold pb-2">{{ $t('Transit') }}</span>
            <div class="flex flex-row justify-center no-wrap">
              <div style="width: 150px; height: 150px;">
                <img class="rounded w-full h-full" src="https://img.masstransitmag.com/files/base/cygnus/mass/image/2021/01/icon.5ff36696179d1.png?auto=format%2Ccompress&w=640&width=640" alt="Canada">
              </div>
              <div style="width: 150px; height: 150px;">
                <img class="rounded w-full h-full" src="@/assets/transit.png" alt="Canada">
              </div>
            </div>
          </div>
          <div>
            <span class="px-8">{{ $t('MapsInfo') }}</span>
          </div>
        </div>
      </div>
    </q-expansion-item>
  </div>
</template>

<script>
export default {
  name: 'TransportationPage',
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
