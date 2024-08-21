<template>
  <div id="transportation" class="w-full flex flex-col py-4" style="background-color: #f6f7f8;">
    <span class="w-full text-center pt-8 pb-4 sm:text-3xl text-2xl font-bold text-red">{{ $t('TorontoTransportation') }}</span>
    <div class="w-full flex flex-col items-center">
      <div class="w-fit pt-3 p-5 px-14 bg-white rounded-xl shadow-md hover:shadow-lg cursor-pointer">
        <div class="flex justify-center">
          <span class="text-lg font-bold underline pb-1">{{ $t('QuickJump') }}</span>
        </div>
        <div class="flex flex-col text-base">
          <span class="my-1 cursor-pointer hover:underline" @click="handleScroll('airport')">{{ $t('Transportation') }}</span>
          <span class="my-1 ml-6 text-base cursor-pointer hover:underline" @click="handleScroll('airport')">{{ $t('FromPearsonAirport') }}</span>
          <span class="my-1 ml-6 text-base cursor-pointer hover:underline" @click="handleScroll('general')">{{ $t('GeneralTransportation') }}</span>
          <span class="my-1 cursor-pointer hover:underline" @click="handleScroll('payment')">{{ $t('Payment') }}</span>
          <span class="my-1 cursor-pointer hover:underline" @click="handleScroll('apps')">{{ $t('HelpfulApps') }}</span>
        </div>
      </div>
    </div>
    <div class="pt-8 pb-6 w-full flex justify-evenly items-center text-base font-bold">
      <a href="https://www.urbanrail.net/am/toro/Toronto-metro-map.png" target="_blank" class="hover:underline cursor-pointer">{{ $t('SubwayLineMap') }}</a>
      <a href="https://www.google.com/maps/dir///@43.6565783,-79.4075055,14z?entry=ttu" target="_blank" class="hover:underline cursor-pointer">{{ $t('PlanRoute') }}</a>
      <a href="https://assets.metrolinx.com/image/upload/s--QiImbry3--/c_limit,f_auto,q_auto,w_3840/v1/Images/GO/system-map" target="_blank" class="hover:underline cursor-pointer">{{ $t('GoTrain') }}</a>
    </div>
    <q-expansion-item
        id="airport"    
        expand-separator
        class="text-center font-bold text-lg"
        :label="$t('FromPearsonAirport')"
        default-opened
      >
      <div class="flex flex-col items-center justify-center py-4 px-8 font-normal text-base">
        <div class="w-full h-full flex flex-col items-center justify-evenly flex-row no-wrap py-2 bg-white rounded-xl cursor-pointer shadow-md hover:shadow-xl mb-6" style="max-width: 1000px;">
          <span class="font-bold text-center py-4">{{ $t('UPExpress') }}</span>
          <div class="w-full flex md:flex-row flex-col flex-nowrap py-4 pl-2">
            <div class="flex-1 flex flex-nowrap flex-col items-center">
              <q-carousel
                v-model="index"
                class="rounded md:h-full h-72 w-10/12"
              >
                <q-carousel-slide :name="0" img-src="https://upload.wikimedia.org/wikipedia/commons/a/aa/UPXatMimico.jpg"></q-carousel-slide>
              </q-carousel>
              <div class="text-sm pt-3 pb-6">
                <span class="pr-2">✅ {{ $t('DebitCredit') }}</span>
                <span class="pr-2">✅ {{ $t('Cash') }}</span>
                <span class="pr-2">✅ {{ $t('PRESTO') }}</span>
              </div>
            </div>
            <div class="pr-6 w-fit md:max-w-sm flex flex-col items-center justify-center">
              <span class="pb-4">{{ $t('UPExpressInfo') }}</span>
              <div class="flex items-center pb-1">
                <q-icon name="timelapse" class="pr-1"></q-icon>
                <span>{{ $t('UPExpressTime') }}</span>
              </div>
              <div class="flex items-center pb-1">
                <span>{{ $t('UPExpressCost') }}</span>
              </div>
              <div class="flex items-center pb-6">
                <q-icon name="schedule" class="pr-1"></q-icon>
                <span>{{ $t('UPExpressFreq') }}</span>
              </div>
              <div class="pb-6 flex flex-nowrap justify-center items-center">
                <q-icon name="location_on" class="pr-1"></q-icon>
                <span>{{ $t('UPExpressWhere') }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full flex flex-col items-center justify-evenly flex-row no-wrap py-2 bg-white rounded-xl cursor-pointer shadow-md hover:shadow-xl mb-6" style="max-width: 1000px;">
          <span class="font-bold text-center py-4">{{ $t('Taxi') }}</span>
          <div class="w-full min-h-96 flex md:flex-row flex-col flex-nowrap py-4 pl-2">
            <div class="flex-1 flex flex-nowrap flex-col items-center">
              <q-carousel
                v-model="index"
                class="rounded md:h-full h-72 w-10/12"
              >
                <q-carousel-slide :name="0" img-src="https://media.blogto.com/articles/20200430-airportlimo2.jpg?w=1200&cmd=resize_then_crop&height=630&quality=70"></q-carousel-slide>
              </q-carousel>
              <div class="text-sm pt-3 pb-6">
                <span class="pr-2">✅ {{ $t('DebitCredit') }}</span>
                <span class="pr-2">✅ {{ $t('Cash') }}</span>
                <span class="pr-2">❌ {{ $t('PRESTO') }}</span>
              </div>
            </div>
            <div class="pr-6 md:w-fit md:max-w-sm w-full flex flex-col items-center justify-center">
              <div class="flex items-center pb-1">
                <q-icon name="timelapse" class="pr-1"></q-icon>
                <span>{{ $t('TaxiTime') }}</span>
              </div>
              <div class="flex items-center pb-4">
                <span>{{ $t('TaxiCost') }}</span>
              </div>
              <div class="flex items-center pb-4">
                <q-icon name="location_on" class="pr-2"></q-icon>
                <div class="flex flex-col items-start">
                  <span>{{ $t('TaxiWhereOne') }}</span>
                  <span>{{ $t('TaxiWhereTwo') }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full h-full flex flex-col items-center justify-evenly flex-row no-wrap py-2 bg-white rounded-xl cursor-pointer shadow-md hover:shadow-xl mb-6" style="max-width: 1000px;">
          <span class="font-bold text-center py-4">{{ $t('Uber') }}</span>
          <div class="w-full flex md:flex-row flex-col flex-nowrap py-4 pl-2">
            <div class="min-h-96 flex-1 flex flex-nowrap flex-col items-center">
              <q-carousel
                v-model="index"
                class="rounded md:h-full h-72 w-10/12"
              >
                <q-carousel-slide :name="0" img-src="https://assets-global.website-files.com/63ff9cd42186283f0e990e08/65d635cda06cdba37c76afa6_MOZCO%20Mateusz%20Szymanski%20Getty%20Images.jpg"></q-carousel-slide>
              </q-carousel>
              <div class="text-sm py-3 pb-6">
                <span class="pr-2">✅ {{ $t('DebitCredit') }}</span>
                <span class="pr-2">✅ {{ $t('Cash') }}</span>
                <span class="pr-2">❌ {{ $t('PRESTO') }}</span>
              </div>
            </div>
            <div class="pr-6 md:w-fit md:max-w-sm w-full flex flex-col items-center justify-center">
              <div class="flex items-center pb-1">
                <q-icon name="timelapse" class="pr-1"></q-icon>
                <span>{{ $t('UberTime') }}</span>
              </div>
              <div class="flex items-center pb-6">
                <span>{{ $t('UberCost') }}</span>
              </div>
              <div class="flex items-center pb-6">
                <q-icon name="location_on" class="pr-2"></q-icon>
                <div class="flex flex-col">
                  <span>{{ $t('UberWhereOne') }}</span>
                  <span>{{ $t('UberWhereTwo') }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-expansion-item>
    <q-expansion-item
        id="general"    
        expand-separator
        class="text-center font-bold text-lg"
        :label="$t('GeneralTransportation')"
        default-opened
      >
      <div class="flex flex-col items-center justify-center px-4 font-normal text-base py-4">
        <div class="w-full h-full flex flex-col items-center justify-evenly flex-row no-wrap py-2 bg-white rounded-xl cursor-pointer shadow-md hover:shadow-xl mb-6" style="max-width: 1000px;">
          <span class="font-bold text-center py-4">{{ $t('Subway') }}</span>
          <div class="min-h-96 w-full flex md:flex-row flex-col flex-nowrap py-4 pl-2">
            <div class="flex-1 flex flex-nowrap flex-col items-center">
              <q-carousel
                v-model="index"
                class="rounded md:h-full h-72 w-10/12"
              >
                <q-carousel-slide :name="0" img-src="https://d3d0lqu00lnqvz.cloudfront.net/media/media/a0103c46-7dc7-4df0-b488-fdc41e4de918.jpg"></q-carousel-slide>
              </q-carousel>
              <div class="text-sm pt-3 pb-6">
                <span class="pr-2">✅ {{ $t('DebitCredit') }}</span>
                <span class="pr-2">✅ {{ $t('Cash') }}</span>
                <span class="pr-2">✅ {{ $t('PRESTO') }}</span>
              </div>
            </div>
            <div class="pr-6 w-fit md:max-w-sm flex flex-col items-center justify-center pb-6">
              <span class="px-8 pb-4">{{ $t('SubwayInfo') }}</span>
              <div class="flex items-center">
                <span>{{ $t('SubwayCost') }}</span>
              </div>
              <a href="https://www.ttc.ca/riding-the-ttc/Updates/New-TTC-fares" target="_blank" class="hover:underline cursor-pointer text-sm">{{ $t('SeeMoreHere') }}</a>
            </div>
          </div>
        </div>
        <div class="w-full h-full flex flex-col items-center justify-evenly flex-row no-wrap py-2 bg-white rounded-xl cursor-pointer shadow-md hover:shadow-xl mb-6" style="max-width: 1000px;">
          <span class="font-bold text-center py-4">{{ $t('Bus') }}</span>
          <div class="min-h-96 w-full flex md:flex-row flex-col flex-nowrap py-4 pl-2">
            <div class="flex-1 flex flex-nowrap flex-col items-center">
              <q-carousel
                v-model="index"
                class="rounded md:h-full h-72 w-10/12"
              >
                <q-carousel-slide :name="0" img-src="https://arrivein.com/wp-content/uploads/2020/07/Blog-Image-Public-Transit-Toronto-bike-rack-scaled.jpg"></q-carousel-slide>
              </q-carousel>
              <div class="text-sm pt-3 pb-6">
                <span class="pr-2">✅ {{ $t('DebitCredit') }}</span>
                <span class="pr-2">✅ {{ $t('Cash') }}</span>
                <span class="pr-2">✅ {{ $t('PRESTO') }}</span>
              </div>
            </div>
            <div class="pr-6 w-fit md:max-w-sm flex flex-col items-center justify-center">
              <span class="px-8 pb-4">{{ $t('BusInfo') }}</span>
              <div class="flex items-center pb-6">
                <span>{{ $t('SubwayCost') }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full h-full flex flex-col items-center justify-evenly flex-row no-wrap py-2 bg-white rounded-xl cursor-pointer shadow-md hover:shadow-xl mb-6" style="max-width: 1000px;">
          <span class="font-bold text-center py-4">{{ $t('Streetcar') }}</span>
          <div class="min-h-96 w-full flex md:flex-row flex-col flex-nowrap py-4 pl-2">
            <div class="flex-1 flex flex-nowrap flex-col items-center">
              <q-carousel
                v-model="index"
                class="rounded md:h-full h-72 w-10/12"
              >
                <q-carousel-slide :name="0" img-src="https://www.railway-technology.com/wp-content/uploads/sites/13/2023/11/Shutterstock_1791383147.jpg"></q-carousel-slide>
              </q-carousel>
              <div class="text-sm pt-3 pb-6">
                <span class="pr-2">✅ {{ $t('DebitCredit') }}</span>
                <span class="pr-2">✅ {{ $t('Cash') }}</span>
                <span class="pr-2">✅ {{ $t('PRESTO') }}</span>
              </div>
            </div>
            <div class="pr-6 w-fit md:max-w-sm flex flex-col items-center justify-center">
              <span class="px-8 pb-4">{{ $t('StreetcarInfo') }}</span>
              <div class="flex items-center pb-6">
                <span>{{ $t('SubwayCost') }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full h-full flex flex-col items-center justify-evenly flex-row no-wrap py-2 bg-white rounded-xl cursor-pointer shadow-md hover:shadow-xl mb-6" style="max-width: 1000px;">
          <span class="font-bold text-center py-4">{{ $t('GOTrain') }}</span>
          <div class="min-h-96 w-full flex md:flex-row flex-col flex-nowrap py-4 pl-2">
            <div class="flex-1 flex flex-nowrap flex-col items-center">
              <q-carousel
                v-model="index"
                class="rounded md:h-full h-72 w-10/12"
              >
                <q-carousel-slide :name="0" img-src="https://d3d0lqu00lnqvz.cloudfront.net/media/media/a0103c46-7dc7-4df0-b488-fdc41e4de918.jpg"></q-carousel-slide>
              </q-carousel>
              <div class="text-sm pt-3 pb-6">
                <span class="pr-2">✅ {{ $t('DebitCredit') }}</span>
                <span class="pr-2">✅ {{ $t('Cash') }}</span>
                <span class="pr-2">✅ {{ $t('PRESTO') }}</span>
              </div>
            </div>
            <div class="w-fit md:max-w-sm flex flex-col items-center justify-center pb-6">
              <span class="px-8 pb-4">{{ $t('GOTrainInfo') }}</span>
              <div class="flex items-center">
                <span>{{ $t('GOTrainCost') }}</span>
              </div>
              <a href="https://www.gotransit.com/en/ways-to-pay/fare-information" target="_blank" class="hover:underline cursor-pointer text-sm">{{ $t('SeeMoreHere') }}</a>
            </div>
          </div>
        </div>
        <div class="p-6 w-full h-full flex flex-col items-center justify-evenly flex-row no-wrap py-2 bg-white rounded-xl cursor-pointer shadow-md hover:shadow-xl mb-6" style="max-width: 1000px;">
          <span class="font-bold text-center py-4">{{ $t('Bikeshare') }}</span>
          <div class="w-full flex md:flex-row flex-col flex-nowrap py-4 pl-2">
            <div class="flex-1 flex flex-nowrap flex-col items-center">
              <q-carousel
                v-model="index"
                class="rounded md:h-full h-72 w-10/12"
              >
                <q-carousel-slide :name="0" img-src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/BikeShareToronto_Temperance_St_at_Cloud_Gardens.JPG/260px-BikeShareToronto_Temperance_St_at_Cloud_Gardens.JPG"></q-carousel-slide>
              </q-carousel>
              <div class="text-sm pt-3 pb-6">
                <span class="pr-2">✅ {{ $t('DebitCredit') }}</span>
                <span class="pr-2">❌ {{ $t('Cash') }}</span>
                <span class="pr-2">✅ {{ $t('PRESTO') }}</span>
              </div>
            </div>
            <div class="w-fit md:max-w-sm flex flex-col items-center justify-center pb-6">
              <span class="px-8 pb-4">{{ $t('BikeShareInfo') }}</span>
              <span class="px-8 pb-4">{{ $t('BikeShareKiosk') }} <span @click="handleScroll(6000)" class="underline cursor-pointer">{{ $t('MobileApp') }}</span></span>
              <div class="flex items-center">
                <div class="flex flex-col items-start">
                  <span class="pb-1">{{ $t('ClassicBike') }}</span>
                  <span class="pb-1">{{ $t('EBike') }}</span>
                  <span class="pb-1">{{ $t('DailyRide') }}</span>
                </div>
              </div>
              <a href="https://bikesharetoronto.com" target="_blank" class="hover:underline cursor-pointer text-sm">{{ $t('SeeMoreHere') }}</a>
            </div>
          </div>
        </div>
      </div>
    </q-expansion-item>
    <q-expansion-item
        id="payment"    
        expand-separator
        class="text-center font-bold text-lg"
        :label="$t('Payment')"
        default-opened
      >
      <div class="flex flex-col items-center justify-center px-4 font-normal text-base py-4">
        <div class="p-6 w-full h-full flex flex-col items-center justify-evenly flex-row no-wrap py-2 bg-white rounded-xl cursor-pointer shadow-md hover:shadow-xl mb-6" style="max-width: 1000px;">
          <span class="font-bold text-center py-4">{{ $t('PRESTO') }}</span>
          <div class="w-full flex md:flex-row flex-col flex-nowrap py-4 pl-2">
            <div class="flex-1 flex flex-nowrap flex-col items-center">
              <q-carousel
                v-model="index"
                class="rounded md:h-full h-72 w-10/12"
              >
                <q-carousel-slide :name="0" img-src="https://cdn.mobilesyrup.com/wp-content/uploads/2021/10/presto-card-scaled.jpg"></q-carousel-slide>
              </q-carousel>
            </div>
            <div class="pb-6 w-fit md:max-w-sm flex flex-col items-center justify-center">
              <span class="px-8 py-2">{{ $t('PRESTOInfo') }}</span>
              <div class="flex items-center pb-6">{{ $t('PrestoCost') }}</div>
              <div class="flex flex-nowrap items-center pb-2">
                <q-icon name="location_on" class="pr-1"></q-icon>
                <span>{{ $t('PrestoWhereOne') }}<a target="_blank" href="https://www.prestocard.ca/en/" class="underline cursor-pointer">{{ $t('PrestoWhereTwo') }}</a>{{ $t('PrestoWhereThree') }}<span @click="handleScroll(6000)" class="underline cursor-pointer">{{ $t('PrestoWhereFour') }}</span></span>
              </div>
              <a href="https://www.prestocard.ca/en/find-an-outlet/customer-service-outlets" target="_blank" class="cursor-pointer">🗺️ <u>{{ $t('PrestoMap') }}</u></a>
            </div>
          </div>
        </div>
      </div>
    </q-expansion-item>
    <q-expansion-item
        id="apps"    
        expand-separator
        class="text-center font-bold text-lg"
        :label="$t('HelpfulApps')"
        default-opened
      >
      <div class="flex flex-col items-center justify-center px-4 font-normal text-base py-4">
        <div class="flex flex-col items-center justify-evenly sm:w-9/12 w-full flex-row no-wrap py-4 pt-6 bg-white rounded-lg cursor-pointer shadow-md hover:shadow-xl mb-6" style="max-width: 1000px;">
          <span class="font-bold text-center">{{ $t('Maps/GoogleMaps') }}</span>
          <div class="w-full flex md:flex-row flex-col flex-nowrap px-10 py-2">
            <div class="flex flex-row no-wrap justify-center items-center">
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
        <div class="flex flex-col items-center justify-evenly sm:w-9/12 w-full flex-row no-wrap py-4 pt-6 bg-white rounded-lg cursor-pointer shadow-md hover:shadow-xl mb-6" style="max-width: 1000px;">
          <span class="font-bold text-center pt-2">{{ $t('Citymapper') }}</span>
          <div class="w-full flex sm:flex-row flex-col flex-nowrap px-10 py-4">
            <div class="flex flex-col no-wrap justify-center items-center hover:underline">
              <a href="https://citymapper.com/webapp" target="_blank" class="text-sm pt-1">
                <div class="mb-1" style="width: 100px; height: 100px;">
                  <img class="rounded w-full h-full " src="https://w7.pngwing.com/pngs/421/750/png-transparent-citymapper-transit-android-bus-android-angle-grass-web-application-thumbnail.png" alt="Canada">
                </div>
                {{ $t('DownloadHere') }}
              </a>
            </div>
            <div class="flex-1 flex flex-col items-center justify-center">
              <span class="px-8 py-4">{{ $t('CitymapperInfo') }}</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center justify-evenly sm:w-9/12 w-full flex-row no-wrap py-4 pt-6 bg-white rounded-lg cursor-pointer shadow-md hover:shadow-xl mb-6" style="max-width: 1000px;">
          <span class="font-bold text-center pt-2">{{ $t('Transit') }}</span>
          <div class="w-full flex sm:flex-row flex-col flex-nowrap px-10 py-4">
            <div class="flex flex-row no-wrap justify-center items-center">
              <a href="https://transitapp.com" target="_blank" class="text-sm pt-1 hover:underline">
                <div class="mb-1" style="width: 100px; height: 100px;">
                  <img class="rounded w-full h-full" src="https://img.masstransitmag.com/files/base/cygnus/mass/image/2021/01/icon.5ff36696179d1.png?auto=format%2Ccompress&w=640&width=640" alt="Canada">
                </div>
                {{ $t('DownloadHere') }}
              </a>
            </div>
            <div class="flex-1 flex flex-col items-center justify-center">
              <span class="px-8 py-4">{{ $t('TransitInfo') }}</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center justify-evenly sm:w-9/12 w-full flex-row no-wrap py-4 pt-6 bg-white rounded-lg cursor-pointer shadow-md hover:shadow-xl mb-6" style="max-width: 1000px;">
          <span class="font-bold text-center pt-2">{{ $t('PRESTO') }}</span>
          <div class="w-full flex sm:flex-row flex-col flex-nowrap px-10 py-4">
            <div class="flex flex-row no-wrap justify-center items-center">
              <a href="https://www.prestocard.ca/en/about/presto-app" target="_blank" class="text-sm pt-1 hover:underline">
                <div class="mb-1" style="width: 100px; height: 100px;">
                  <img class="rounded w-full h-full" src="https://play-lh.googleusercontent.com/5WT8xYEj_hBJjP4RGGlBjhyGlCz9G5NjFTUSLs-rTklu2nM1t_c_h3Nr-HXmbFwbcw" alt="Canada">
                </div>
                {{ $t('DownloadHere') }}
              </a>
            </div>
            <div class="flex-1 flex flex-col items-center justify-center">
              <span class="px-8 py-4">{{ $t('PrestoInfo') }}</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center justify-evenly sm:w-9/12 w-full flex-row no-wrap py-4 pt-6 bg-white rounded-lg cursor-pointer shadow-md hover:shadow-xl mb-6" style="max-width: 1000px;">
          <span class="font-bold text-center pt-2">{{ $t('BikeShareApp') }}</span>
          <div class="w-full flex sm:flex-row flex-col flex-nowrap px-10 py-4">
            <div class="flex flex-row no-wrap justify-center items-center">
              <a href="https://bikesharetoronto.com/mobile-app/" target="_blank" class="text-sm pt-1 hover:underline">
                <div class="mb-1" style="width: 100px; height: 100px;">
                  <img class="rounded w-full h-full" src="https://play-lh.googleusercontent.com/e_xNbbCshJae9YC0bUD1navMYg0dotUoO_8X5BKe4b_ZNgj0Tpj94bo1w3oy4HwGz9c" alt="Canada">
                </div>
                {{ $t('DownloadHere') }}
              </a>
            </div>
            <div class="flex-1 flex flex-col items-center justify-center">
              <span class="px-8 py-4">{{ $t('BikeShareAppInfo') }}</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center justify-evenly sm:w-9/12 w-full flex-row no-wrap py-4 pt-6 bg-white rounded-lg cursor-pointer shadow-md hover:shadow-xl mb-6" style="max-width: 1000px;">
          <span class="font-bold text-center pt-2">{{ $t('BeckTaxi') }}</span>
          <div class="w-full flex sm:flex-row flex-col flex-nowrap px-10 py-4">
            <div class="flex flex-row no-wrap justify-center items-center">
              <a href="https://becktaxi.com" target="_blank" class="text-sm pt-1 hover:underline">
                <div class="mb-1" style="width: 100px; height: 100px;">
                  <img class="rounded w-full h-full" src="https://play-lh.googleusercontent.com/_NS-xBCcV4bdqeiIgGAkEQtULQdEXny6tgoss0rti-MlUqQdzVDsZLUrxuRsEFn-7Q8" alt="Canada">
                </div>
                {{ $t('DownloadHere') }}
              </a>
            </div>
            <div class="flex-1 flex flex-col items-center justify-center">
              <span class="px-8 py-4">{{ $t('BeckTaxiInfo') }}</span>
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
      index: 0
    }
  },
  mounted () {
    var element = document.getElementById('transportation');
    var headerOffset = 80;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
  },
  methods: {
    handleScroll (el) {
      var element = document.getElementById(el);
      var headerOffset = 80;
      var elementPosition = element.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
      });
    }
  }
}
</script>

<style>
</style>
