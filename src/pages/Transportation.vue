<template>
  <div class="w-full flex flex-col py-4">
    <span class="w-full text-center font-bold text-xl pb-2">{{ $t('TorontoTransportation') }}</span>
    <div class="w-full flex flex-col items-center">
      <div class="w-fit border-4 p-3 px-8 rounded-xl" style="border-color: red;">
        <div class="flex justify-center">
          <span class="text-xl font-bold underline">{{ $t('QuickJump') }}</span>
        </div>
        <div class="flex flex-col text-lg">
          <span class="my-1 cursor-pointer hover:underline" @click="handleScroll(1230)">{{ $t('Transportation') }}</span>
          <span class="my-1 ml-6 text-base cursor-pointer hover:underline" @click="handleScroll(1230)">{{ $t('FromPearsonAirport') }}</span>
          <span class="my-1 ml-6 text-base cursor-pointer hover:underline" @click="handleScroll(1510)">{{ $t('GeneralTransportation') }}</span>
          <span class="my-1 cursor-pointer hover:underline" @click="handleScroll(2750)">{{ $t('Payment') }}</span>
          <span class="my-1 cursor-pointer hover:underline" @click="handleScroll(2900)">{{ $t('HelpfulApps') }}</span>
        </div>
      </div>
    </div>
    <div class="pt-8 pb-6 w-full flex justify-evenly items-center text-base font-bold">
      <a href="https://www.urbanrail.net/am/toro/Toronto-metro-map.png" target="_blank" class="hover:underline cursor-pointer">Open Subway line map 🚇</a>
      <a href="https://www.google.com/maps/dir///@43.6565783,-79.4075055,14z?entry=ttu" target="_blank" class="hover:underline cursor-pointer">Plan your route 🛣️</a>
      <a href="https://assets.metrolinx.com/image/upload/s--QiImbry3--/c_limit,f_auto,q_auto,w_3840/v1/Images/GO/system-map" target="_blank" class="hover:underline cursor-pointer">Open Go Train map 🚃</a>
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
            <div class="flex flex-col">
              <div style="width: 300px; height: 200px;">
                <img class="rounded w-full h-full" src="https://upload.wikimedia.org/wikipedia/commons/a/aa/UPXatMimico.jpg" alt="Canada">
              </div>
              <div>
                <span>✅ Debit/Credit</span>
                <span>✅ Cash</span>
                <span>❌ PRESTO</span>
              </div>
            </div>
          </div>
          <div class="flex flex-col items-center">
            <span class="px-8">{{ $t('UPExpressInfo') }}</span>
            <span>25 minutes</span>
            <span>$12 one way, kids under 12 are free</span>
            <span>Comes every 15 minutes</span>
            <span>Accepts PRESTO card</span>
            <span>Board at Terminal 1 of the airport (UP Express terminal is located in the main lobby of Terminal 1)</span>
          </div>
        </div>
        <div class="flex items-center justify-evenly w-full flex-row no-wrap py-2">
          <div class="flex flex-col">
            <span class="font-bold">Taxi</span>
            <div style="width: 300px; height: 200px;">
              <img class="rounded w-full h-full" src="https://upload.wikimedia.org/wikipedia/commons/a/aa/UPXatMimico.jpg" alt="Canada">
            </div>
          </div>
          <span>30-45 minutes (traffic depending)</span>
          <span>$60-75</span>
        </div>
        <div class="flex items-center justify-evenly w-full flex-row no-wrap py-2">
          <div class="flex flex-col">
            <span class="font-bold">Uber</span>
            <div style="width: 300px; height: 200px;">
              <img class="rounded w-full h-full" src="https://upload.wikimedia.org/wikipedia/commons/a/aa/UPXatMimico.jpg" alt="Canada">
            </div>
          </div>
          <span>Use the app to connect to a driver. Click <span class="cursor-pointer hover:underline" @click="handleScroll(2900)">here</span> to see more</span>
          <span>30-45 minutes (traffic depending)</span>
          <span>$50-70</span>
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
          <span>$3.35 per use</span>
          <a href="https://www.ttc.ca/riding-the-ttc/Updates/New-TTC-fares" target="_blank" class="hover:underline cursor-pointer">See details here</a>
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
          <span>$7 day pass</span>
          <span>$15 3 day pass</span>
          <span>Purchase at Bike Share Toronto kiosks or mobile app</span>
          <span></span>
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
            <span>$4 for the card, then load money for the subway</span>
            <span>Can be reloaded at subway stations (PRESTO machines) or online</span>
            <span>Accepted on TTC, GO Transit, UP Express</span>
            <div class="flex flex-col pl-8">
              <span class="font-bold">{{ $t('WhereToBuy') }}</span>
              <span>PRESTO machines (found at subway stations)</span>
              <a href="https://www.prestocard.ca/en/find-an-outlet/customer-service-outlets" target="_blank" class="hover:underline cursor-pointer">Map of PRESTO customer service outlets</a>
              <span>{{ $t('Online') }}</span>
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
        <div class="flex items-center justify-evenly w-full no-wrap py-2">
          <div class="flex flex-col">
            <span class="font-bold pb-2">Beck Taxi</span>
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
    handleScroll (y) {
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  }
}
</script>

<style>
</style>
