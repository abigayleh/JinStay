<template>
  <div class="w-full flex flex-col py-4" style="background-color: #f6f7f8;">
    <span class="w-full text-center font-bold text-2xl pb-2">{{ $t('TorontoTransportation') }}</span>
    <div class="w-full flex flex-col items-center">
      <div class="w-fit pt-3 p-5 px-14 bg-white rounded-xl shadow-md hover:shadow-lg cursor-pointer">
        <div class="flex justify-center">
          <span class="text-lg font-bold underline pb-1">{{ $t('QuickJump') }}</span>
        </div>
        <div class="flex flex-col text-base">
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
        class="text-center font-bold text-lg"
        label="✈️ From Toronto Pearson Airport"
        default-opened
      >
      <div class="flex flex-col items-center justify-center px-4 font-normal text-base py-4">
        <div class="flex flex-col items-center justify-evenly w-9/12 flex-row no-wrap py-2 bg-white rounded-lg cursor-pointer shadow-md hover:shadow-xl mb-6">
          <span class="font-bold text-center pt-2">{{ $t('UPExpress') }}</span>
          <div class="flex flex-nowrap items-center px-10 py-4">
            <div class="flex flex-col">
              <div class="flex flex-col">
                <div style="width: 400px; height: 270px;">
                  <img class="rounded w-full h-full" src="https://upload.wikimedia.org/wikipedia/commons/a/aa/UPXatMimico.jpg" alt="Canada">
                </div>
                <div class="text-sm pt-2">
                  <span class="pr-2">✅ Debit/Credit</span>
                  <span class="pr-2">✅ Cash</span>
                  <span class="pr-2">✅ PRESTO</span>
                </div>
              </div>
            </div>
            <div class="flex flex-col items-center justify-center">
              <span class="px-24 pb-4">{{ $t('UPExpressInfo') }}</span>
              <div class="flex items-center pb-1">
                <q-icon name="timelapse" class="pr-1"></q-icon>
                <span>25 minutes</span>
              </div>
              <div class="flex items-center pb-1">
                <q-icon name="attach_money" class="pr-1"></q-icon>
                <span>$12 one-way (kids under 12 are free)</span>
              </div>
              <div class="flex items-center pb-1">
                <q-icon name="schedule" class="pr-1"></q-icon>
                <span>Comes every 15 minutes</span>
              </div>
              <div class="flex items-center">
                <q-icon name="location_on" class="pr-1"></q-icon>
                <span>Main lobby of Pearson Airport Terminal 1 (UP Express terminal)</span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center justify-evenly w-9/12 flex-row no-wrap py-2 bg-white rounded-lg cursor-pointer shadow-md hover:shadow-xl mb-6">
          <span class="font-bold text-center pt-2">Taxi</span>
          <div class="w-full flex flex-nowrap px-10 py-4">
            <div class="flex flex-col">
              <div class="flex flex-col">
                <div style="width: 400px; height: 270px;">
                  <img class="rounded w-full h-full" src="https://media.blogto.com/articles/20200430-airportlimo2.jpg?w=1200&cmd=resize_then_crop&height=630&quality=70" alt="Canada">
                </div>
                <div class="text-sm pt-2">
                  <span class="pr-2">✅ Debit/Credit</span>
                  <span class="pr-2">✅ Cash</span>
                  <span class="pr-2">❌ PRESTO</span>
                </div>
              </div>
            </div>
            <div class="flex-1 flex flex-col items-center justify-center">
              <div class="flex items-center pb-2">
                <q-icon name="timelapse" class="pr-1"></q-icon>
                <span>30-45 minutes (traffic depending)</span>
              </div>
              <div class="flex items-center pb-2">
                <q-icon name="attach_money" class="pr-1"></q-icon>
                <span>$60-75</span>
              </div>
              <div class="flex items-center">
                <q-icon name="location_on" class="pr-1"></q-icon>
                <div class="flex flex-col">
                  <span>Terminal 1: Door D</span>
                  <span>Terminal 3: Door D, E, F</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center justify-evenly w-9/12 flex-row no-wrap py-2 bg-white rounded-lg cursor-pointer shadow-md hover:shadow-xl mb-6">
          <span class="font-bold text-center pt-2">Uber</span>
          <div class="w-full flex flex-nowrap px-10 py-4">
            <div class="flex flex-col">
              <div class="flex flex-col">
                <div style="width: 400px; height: 270px;">
                  <img class="rounded w-full h-full" src="https://assets-global.website-files.com/63ff9cd42186283f0e990e08/65d635cda06cdba37c76afa6_MOZCO%20Mateusz%20Szymanski%20Getty%20Images.jpg" alt="Canada">
                </div>
                <div class="text-sm pt-2">
                  <span class="pr-2">✅ Debit/Credit</span>
                  <span class="pr-2">✅ Cash</span>
                  <span class="pr-2">❌ PRESTO</span>
                </div>
              </div>
            </div>
            <div class="flex-1 flex flex-col items-center justify-center">
              <div class="flex items-center pb-2">
                <q-icon name="timelapse" class="pr-1"></q-icon>
                <span>30-45 minutes (traffic depending)</span>
              </div>
              <div class="flex items-center pb-2">
                <q-icon name="attach_money" class="pr-1"></q-icon>
                <span>$50-70</span>
              </div>
              <div class="flex items-center">
                <q-icon name="location_on" class="pr-1"></q-icon>
                <div class="flex flex-col">
                  <span>Terminal 1: Door Q</span>
                  <span>Terminal 3: Door D</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-expansion-item>
    <q-expansion-item
        expand-separator
        class="text-center font-bold text-lg"
        label="🚍 General transportation"
        default-opened
      >
      <div class="flex flex-col items-center justify-center px-4 font-normal text-base py-4">
        <div class="flex flex-col items-center justify-evenly w-9/12 flex-row no-wrap py-2 bg-white rounded-lg cursor-pointer shadow-md hover:shadow-xl mb-6">
          <span class="font-bold text-center pt-2">Subway</span>
          <div class="w-full flex flex-nowrap px-10 py-4">
            <div class="flex flex-col">
              <div class="flex flex-col">
                <div style="width: 400px; height: 270px;">
                  <img class="rounded w-full h-full" src="https://d3d0lqu00lnqvz.cloudfront.net/media/media/a0103c46-7dc7-4df0-b488-fdc41e4de918.jpg" alt="Canada">
                </div>
                <div class="text-sm pt-2">
                  <span class="pr-2">✅ Debit/Credit</span>
                  <span class="pr-2">✅ Cash</span>
                  <span class="pr-2">✅ PRESTO</span>
                </div>
              </div>
            </div>
            <div class="flex-1 flex flex-col items-center justify-center">
              <span class="px-8 pb-4">{{ $t('SubwayInfo') }}</span>
              <div class="flex items-center pb-2">
                <q-icon name="attach_money" class="pr-1"></q-icon>
                <span>$3.35 per use</span>
              </div>
              <a href="https://www.ttc.ca/riding-the-ttc/Updates/New-TTC-fares" target="_blank" class="hover:underline cursor-pointer">See more here</a>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center justify-evenly w-9/12 flex-row no-wrap py-2 bg-white rounded-lg cursor-pointer shadow-md hover:shadow-xl mb-6">
          <span class="font-bold text-center pt-2">Bus</span>
          <div class="w-full flex flex-nowrap px-10 py-4">
            <div class="flex flex-col">
              <div class="flex flex-col">
                <div style="width: 400px; height: 270px;">
                  <img class="rounded w-full h-full" src="https://arrivein.com/wp-content/uploads/2020/07/Blog-Image-Public-Transit-Toronto-bike-rack-scaled.jpg" alt="Canada">
                </div>
                <div class="text-sm pt-2">
                  <span class="pr-2">✅ Debit/Credit</span>
                  <span class="pr-2">✅ Cash</span>
                  <span class="pr-2">✅ PRESTO</span>
                </div>
              </div>
            </div>
            <div class="flex-1 flex flex-col items-center justify-center">
              <span class="px-8 pb-4">{{ $t('BusInfo') }}</span>
              <div class="flex items-center pb-2">
                <q-icon name="attach_money" class="pr-1"></q-icon>
                <span>$3.35 per use</span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center justify-evenly w-9/12 flex-row no-wrap py-2 bg-white rounded-lg cursor-pointer shadow-md hover:shadow-xl mb-6">
          <span class="font-bold text-center pt-2">Streetcar</span>
          <div class="w-full flex flex-nowrap px-10 py-4">
            <div class="flex flex-col">
              <div class="flex flex-col">
                <div style="width: 400px; height: 270px;">
                  <img class="rounded w-full h-full" src="https://www.railway-technology.com/wp-content/uploads/sites/13/2023/11/Shutterstock_1791383147.jpg" alt="Canada">
                </div>
                <div class="text-sm pt-2">
                  <span class="pr-2">✅ Debit/Credit</span>
                  <span class="pr-2">✅ Cash</span>
                  <span class="pr-2">✅ PRESTO</span>
                </div>
              </div>
            </div>
            <div class="flex-1 flex flex-col items-center justify-center">
              <span class="px-8 pb-4">{{ $t('StreetcarInfo') }}</span>
              <div class="flex items-center pb-2">
                <q-icon name="attach_money" class="pr-1"></q-icon>
                <span>$3.25 per use</span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center justify-evenly w-9/12 flex-row no-wrap py-2 bg-white rounded-lg cursor-pointer shadow-md hover:shadow-xl mb-6">
          <span class="font-bold text-center pt-2">GOTrain</span>
          <div class="w-full flex flex-nowrap px-10 py-4">
            <div class="flex flex-col">
              <div class="flex flex-col">
                <div style="width: 400px; height: 270px;">
                  <img class="rounded w-full h-full" src="https://d3d0lqu00lnqvz.cloudfront.net/media/media/a0103c46-7dc7-4df0-b488-fdc41e4de918.jpg" alt="Canada">
                </div>
                <div class="text-sm pt-2">
                  <span class="pr-2">✅ Debit/Credit</span>
                  <span class="pr-2">✅ Cash</span>
                  <span class="pr-2">✅ PRESTO</span>
                </div>
              </div>
            </div>
            <div class="flex-1 flex flex-col items-center justify-center">
              <span class="px-8 pb-4">{{ $t('GOTrainInfo') }}</span>
              <div class="flex items-center pb-2">
                <q-icon name="attach_money" class="pr-1"></q-icon>
                <span>$37.70 for short trips</span>
              </div>
              <a href="https://www.gotransit.com/en/ways-to-pay/fare-information" target="_blank" class="hover:underline cursor-pointer">See more here</a>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center justify-evenly w-9/12 flex-row no-wrap py-2 bg-white rounded-lg cursor-pointer shadow-md hover:shadow-xl mb-6">
          <span class="font-bold text-center pt-2">Bikeshare</span>
          <div class="w-full flex flex-nowrap px-10 py-4">
            <div class="flex flex-col">
              <div class="flex flex-col">
                <div style="width: 400px; height: 270px;">
                  <img class="rounded w-full h-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/BikeShareToronto_Temperance_St_at_Cloud_Gardens.JPG/260px-BikeShareToronto_Temperance_St_at_Cloud_Gardens.JPG" alt="Canada">
                </div>
                <div class="text-sm pt-2">
                  <span class="pr-2">✅ Debit/Credit</span>
                  <span class="pr-2">❌ Cash</span>
                  <span class="pr-2">✅ PRESTO</span>
                </div>
              </div>
            </div>
            <div class="flex-1 flex flex-col items-center justify-center">
              <span class="px-8 pb-4">{{ $t('BikeShareInfo') }}</span>
              <span class="px-8 pb-4">Purchase at Bike Share kiosk or <span @click="handleScroll(6000)" class="underline cursor-pointer">mobile app</span></span>
              <div class="flex items-center pb-2">
                <q-icon name="attach_money" class="pr-1"></q-icon>
                <div class="flex flex-col">
                  <span class="pb-1">$0.12/min for classic bike</span>
                  <span class="pb-1">$0.20/min for e-bike</span>
                  <span class="pb-1">$15 for 90 minute ride</span>
                </div>
              </div>
              <a href="https://bikesharetoronto.com" target="_blank" class="hover:underline cursor-pointer">See more here</a>
            </div>
          </div>
        </div>
      </div>
    </q-expansion-item>
    <q-expansion-item
        expand-separator
        class="text-center font-bold text-lg"
        label="💳 Payment"
        default-opened
      >
      <div class="flex flex-col items-center justify-center px-4 font-normal text-base py-4">
        <div class="flex flex-col items-center justify-evenly w-9/12 flex-row no-wrap py-2 bg-white rounded-lg cursor-pointer shadow-md hover:shadow-xl mb-6">
          <span class="font-bold text-center pt-2">PRESTO</span>
          <div class="w-full flex flex-nowrap items-center px-10 py-4">
            <div class="flex flex-col">
              <div style="width: 400px; height: 270px;">
                <img class="rounded w-full h-full" src="https://cdn.mobilesyrup.com/wp-content/uploads/2021/10/presto-card-scaled.jpg" alt="Canada">
              </div>
            </div>
            <div class="flex-1 flex flex-col items-center justify-center">
              <span class="px-8 pb-4">{{ $t('PRESTOInfo') }}</span>
              <div class="flex items-center pb-2">
                <q-icon name="attach_money" class="pr-1"></q-icon>
                <div class="flex flex-col">
                  <span class="pb-1">$4 to buy card</span>
                  <span class="pb-1">Reload per use</span>
                </div>
              </div>
              <div class="flex flex-nowrap items-center pb-2">
                <q-icon name="location_on" class="pr-1"></q-icon>
                <span>Can be purchased/reloaded at subway stations (PRESTO machines), <a target="_blank" href="https://www.prestocard.ca/en/" class="underline cursor-pointer">online</a> or through their <span @click="handleScroll(6000)" class="underline cursor-pointer">app</span></span>
              </div>
              <a href="https://www.prestocard.ca/en/find-an-outlet/customer-service-outlets" target="_blank" class="hover:underline cursor-pointer">🗺️ Map of PRESTO customer service outlets</a>
            </div>
          </div>
        </div>
      </div>
    </q-expansion-item>
    <q-expansion-item
        expand-separator
        class="text-center font-bold text-lg"
        label="📱 Helpful apps"
        default-opened
      >
      <div class="flex flex-col items-center justify-center px-4 font-normal text-base py-4">
        <div class="flex flex-col items-center justify-evenly w-9/12 flex-row no-wrap py-2 bg-white rounded-lg cursor-pointer shadow-md hover:shadow-xl mb-6">
          <span class="font-bold text-center pt-2">{{ $t('Maps/GoogleMaps') }}</span>
          <div class="w-full flex flex-nowrap px-10 py-4">
            <div class="flex flex-row no-wrap items-center">
              <div style="width: 90px; height: 90px;">
                <img class="rounded w-full h-full" src="https://www.apple.com/v/maps/d/images/overview/intro_icon__dfyvjc1ohbcm_large.png" alt="Canada">
              </div>
              <div style="width: 140px; height: 140px;">
                <img class="rounded w-full h-full" src="https://www.google.com/images/branding/product/2x/maps_96in128dp.png" alt="Canada">
              </div>
            </div>
            <div class="flex-1 flex flex-col items-center justify-center">
              <span class="px-8 pb-4">{{ $t('MapsInfo') }}</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center justify-evenly w-9/12 flex-row no-wrap py-2 bg-white rounded-lg cursor-pointer shadow-md hover:shadow-xl mb-6">
          <span class="font-bold text-center pt-2">{{ $t('Citymapper') }}</span>
          <div class="w-full flex flex-nowrap px-10 py-4">
            <div class="flex flex-row no-wrap">
              <div style="width: 100px; height: 100px;" class="mr-5">
                <img class="rounded w-full h-full" src="https://w7.pngwing.com/pngs/421/750/png-transparent-citymapper-transit-android-bus-android-angle-grass-web-application-thumbnail.png" alt="Canada">
              </div>
              <div style="width: 100px; height: 100px;">
                <img class="rounded w-full h-full" src="@/assets/cityMapper.png" alt="Canada">
              </div>
            </div>
            <div class="flex-1 flex flex-col items-center justify-center">
              <span class="px-8 pb-4">Provides real-time transit navigation in Toronto, offering detailed directions, route options, and live updates for buses, subways, and streetcars.</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center justify-evenly w-9/12 flex-row no-wrap py-2 bg-white rounded-lg cursor-pointer shadow-md hover:shadow-xl mb-6">
          <span class="font-bold text-center pt-2">{{ $t('Transit') }}</span>
          <div class="w-full flex flex-nowrap px-10 py-4">
            <div class="flex flex-row justify-center no-wrap">
              <div style="width: 100px; height: 100px;" class="mr-5">
                <img class="rounded w-full h-full" src="https://img.masstransitmag.com/files/base/cygnus/mass/image/2021/01/icon.5ff36696179d1.png?auto=format%2Ccompress&w=640&width=640" alt="Canada">
              </div>
              <div style="width: 100px; height: 100px;">
                <img class="rounded w-full h-full" src="@/assets/transit.png" alt="Canada">
              </div>
            </div>
            <div class="flex-1 flex flex-col items-center justify-center">
              <span class="px-8 pb-4">A user-friendly app that helps Toronto commuters track real-time public transit schedules, find nearby routes, and plan efficient trips across the city.</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center justify-evenly w-9/12 flex-row no-wrap py-2 bg-white rounded-lg cursor-pointer shadow-md hover:shadow-xl mb-6">
          <span class="font-bold text-center pt-2">PRESTO</span>
          <div class="w-full flex flex-nowrap px-10 py-4">
            <div class="flex flex-row justify-center no-wrap">
              <div style="width: 90px; height: 90px;" class="mt-1 mr-5">
                <img class="rounded w-full h-full" src="https://play-lh.googleusercontent.com/5WT8xYEj_hBJjP4RGGlBjhyGlCz9G5NjFTUSLs-rTklu2nM1t_c_h3Nr-HXmbFwbcw" alt="Canada">
              </div>
              <div style="width: 100px; height: 100px;">
                <img class="rounded w-full h-full" src="@/assets/transit.png" alt="Canada">
              </div>
            </div>
            <div class="flex-1 flex flex-col items-center justify-center">
              <span class="px-8 pb-4">Toronto’s digital fare payment system for public transit, allowing users to load funds, tap to pay, and track their balance on buses, streetcars, and the subway.</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center justify-evenly w-9/12 flex-row no-wrap py-2 bg-white rounded-lg cursor-pointer shadow-md hover:shadow-xl mb-6">
          <span class="font-bold text-center pt-2">Bike Share</span>
          <div class="w-full flex flex-nowrap px-10 py-4">
            <div class="flex flex-row justify-center no-wrap">
              <div style="width: 120px; height: 120px;" class="mr-3">
                <img class="rounded w-full h-full" src="https://play-lh.googleusercontent.com/e_xNbbCshJae9YC0bUD1navMYg0dotUoO_8X5BKe4b_ZNgj0Tpj94bo1w3oy4HwGz9c" alt="Canada">
              </div>
              <div style="width: 100px; height: 100px;" class="mt-2">
                <img class="rounded w-full h-full" src="@/assets/transit.png" alt="Canada">
              </div>
            </div>
            <div class="flex-1 flex flex-col items-center justify-center">
              <span class="px-8 pb-4">Toronto offers a convenient and eco-friendly way to travel the city, with thousands of bikes available for rent at docking stations across the city.</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center justify-evenly w-9/12 flex-row no-wrap py-2 bg-white rounded-lg cursor-pointer shadow-md hover:shadow-xl mb-6">
          <span class="font-bold text-center pt-2">Beck Taxi</span>
          <div class="w-full flex flex-nowrap px-10 py-4">
            <div class="flex flex-row justify-center no-wrap">
              <div style="width: 95px; height: 95px;" class="mr-5 mt-1">
                <img class="rounded w-full h-full" src="https://play-lh.googleusercontent.com/_NS-xBCcV4bdqeiIgGAkEQtULQdEXny6tgoss0rti-MlUqQdzVDsZLUrxuRsEFn-7Q8" alt="Canada">
              </div>
              <div style="width: 100px; height: 100px;">
                <img class="rounded w-full h-full" src="@/assets/transit.png" alt="Canada">
              </div>
            </div>
            <div class="flex-1 flex flex-col items-center justify-center">
              <span class="px-8 pb-4">One of Toronto's most trusted taxi services, offering reliable rides through its easy-to-use app, where users can book, track, and pay for their trips.</span>
            </div>
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
