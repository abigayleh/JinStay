<template>
  <div class="w-full" style="height:600px">
    <l-map class="rounded" ref="map" v-model:zoom="zoom" :options="{scrollWheelZoom: false}" :center="center">
      <l-tile-layer
        :url="url"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-marker class="marker" :lat-lng="airportMarker">
        <l-tooltip>{{ $t('PearsonAirport') }}</l-tooltip>
        <l-icon :iconUrl="require('@/assets/airplane.png')" :iconSize="[150, 90]"></l-icon>
      </l-marker>
      <l-marker class="marker" :lat-lng="houseMarker">
        <l-tooltip>{{ $t('JinStay') }} 🫶</l-tooltip>
        <l-icon :iconUrl="require('@/assets/house.png')" :iconSize="[150, 90]"></l-icon>
      </l-marker>
      <l-marker
        v-for="(marker, index) in shoppingMarkers"
        :key="index"
        :lat-lng="marker"
        class="marker"
        @click="handleScroll(index)"
      >
        <l-tooltip>{{ shoppingTitles[index] }}</l-tooltip>
        <l-icon :iconUrl="require('@/assets/shopping.png')" :iconSize="[150, 90]"></l-icon>
      </l-marker>
      <l-marker
        v-for="(marker, index) in activityMarkers"
        :key="index"
        :lat-lng="marker"
        class="marker"
        @click="handleScroll(index)"
      >
        <l-tooltip>{{ activityTitles[index] }}</l-tooltip>
        <l-icon :iconUrl="require('@/assets/activites.png')" :iconSize="[150, 90]"></l-icon>
      </l-marker>
      <l-marker
        v-for="(marker, index) in restaurantMarkers"
        :key="index"
        :lat-lng="marker"
        class="marker"
        @click="handleScroll(index)"
      >
        <l-tooltip>{{ restaurantTitles[index] }}</l-tooltip>
        <l-icon :iconUrl="require('@/assets/restaurant.png')" :iconSize="[150, 90]"></l-icon>
      </l-marker>
      <l-marker
        v-for="(marker, index) in cafeMarkers"
        :key="index"
        :lat-lng="marker"
        class="marker"
        @click="handleScroll(index)"
      >
        <l-tooltip>{{ cafeTitles[index] }}</l-tooltip>
        <l-icon :iconUrl="require('@/assets/cafe.png')" :iconSize="[150, 90]"></l-icon>
      </l-marker>
      <l-marker
        v-for="(marker, index) in marketMarkers"
        :key="index"
        :lat-lng="marker"
        class="marker"
        @click="handleScroll(index)"
      >
        <l-tooltip>{{ marketTitles[index] }}</l-tooltip>
        <l-icon :iconUrl="require('@/assets/market.png')" :iconSize="[150, 90]"></l-icon>
      </l-marker>
      <l-marker
        v-for="(marker, index) in seasonalMarkers"
        :key="index"
        :lat-lng="marker"
        class="marker"
        @click="handleScroll(index)"
      >
        <l-tooltip>{{ seasonalTitles[index] }}</l-tooltip>
        <l-icon :iconUrl="require('@/assets/seasonal.png')" :iconSize="[150, 90]"></l-icon>
      </l-marker>
    </l-map>
  </div>
</template>
<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LIcon, LTooltip } from "@vue-leaflet/vue-leaflet";

export default {
  name: 'NavigationMap',
  props: {
    filter: {
      type: String,
      required: true
    },
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    LTooltip
  },
  data() {
    return {
      zoom: 13,
      center: [43.6452, -79.3806],
      url: 'http://services.arcgisonline.com/arcgis/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}',
      houseMarker: [43.6452, -79.3806],
      airportMarker: [43.6771, -79.6334],
      activityTitles: [
        this.$t('CNTower'),
        this.$t('RoyalMuseum'),
        this.$t('Aquarium'),
        this.$t('Distillery'),
        this.$t('ArtGallery'),
        this.$t('Zoo'),
        this.$t('HighPark'),
        this.$t('StLawrence'),
        this.$t('CasaLoma'),
        this.$t('EdwardsGarden'),
      ],
      activityMarkers: [
        [43.6426, -79.3871],
        [43.6677, -79.3948],
        [43.6422, -79.3866],
        [43.6503, -79.3596],
        [43.6536, -79.3925],
        [43.8179, -79.1854],
        [43.6465, -79.4637],
        [43.6487, -79.3715],
        [43.6780, -79.4094],
        [43.7338, -79.3579]
      ],
      restaurantTitles: [
        this.$t('Canoe'),
        this.$t('LeeChen'),
        this.$t('360Restaurant'),
        this.$t('George'),
        this.$t('KasaMoto'),
        this.$t('MothersDumplings'),
        this.$t('YummyKorean'),
        this.$t('MapleLeaf'),
        this.$t('GuuIzakaya'),
        this.$t('ChodangSoonTofu'),
      ],
      restaurantMarkers: [
        [43.6476, -79.3793],
        [43.6714, -79.3884],
        [43.6426, -79.3871],
        [43.6521, -79.3725],
        [43.6711, -79.3896],
        [43.6565, -79.3983],
        [43.6641, -79.4102],
        [43.6691, -79.3342],
        [43.6682, -79.3912],
        [43.6551, -79.5584]
      ],
      shoppingTitles: [
        this.$t('EatonCentre'),
        this.$t('Yorkdale'),
        this.$t('Sherway'),
        this.$t('SquareOne'),
      ],
      shoppingMarkers: [
        [43.654434, -79.3807],
        [43.7254, -79.4522],
        [43.6119, -79.5571],
        [43.5930, -79.6425]
      ],
      cafeTitles: [
        this.$t('Tims'),
        this.$t('Beavertails'),
        this.$t('IceCreamonology'),
        this.$t('NomNomNom'),
        this.$t('TeaNBannock'),
      ],
      cafeMarkers: [
        [43.6452, -79.3807], // Tim Hortons (near Union Station)
        [43.6426, -79.3871], // BeaverTails Pastry
        [43.6588, -79.3806], // Ice Creamonology
        [43.6473, -79.3747], // Nom Nom Nom Poutine
        [43.6609, -79.3483]  // Tea N Bannock
      ],
      marketTitles: [
        this.$t('INS'),
        this.$t('Longos'),
        this.$t('7Eleven'),
        this.$t('Metro'),
        this.$t('Loblaws'),
      ],
      marketMarkers: [
        [43.6455, -79.3783], // INS Market (near Union Station)
        [43.6445, -79.3801], // Longos (Brookfield Place near Union Station)
        [43.6461, -79.3802], // 7-Eleven (Front St near Union Station)
        [43.6463, -79.3767], // Metro (Metro Centre near Union Station)
        [43.6425, -79.3810]  // Loblaws (Maple Leaf Square near Union Station)
      ],
      seasonalTitles: [
        this.$t('Cavalcade'),
        this.$t('NewYears'),
        this.$t('NathanPhilips'),
        this.$t('TorontoChristmas'),
        this.$t('SantaClause'),
      ],
      seasonalMarkers: [
        [43.6535, -79.3841],
        [43.6535, -79.3841],
        [43.6535, -79.3841],
        [43.6503, -79.3595],
        [43.7336, -79.4152]
      ]
    };
  },
  methods: {
    handleScroll (index) {
      if (this.filter.length > 1) {
        window.scrollTo({
          top: 2000,
          behavior: 'smooth'
        });
      } else {
        window.scrollTo({
          top: 1200 + (index * 450),
          behavior: 'smooth'
        });
      }
    }
  },
  watch: {
    filter () {
      this.activityMarkers = []
      this.restaurantMarkers = []
      this.shoppingMarkers = []
      this.cafeMarkers = []
      this.marketMarkers = []
      this.seasonalMarkers = []
      if (this.filter === 'all') {
        this.activityMarkers = [
        [43.6426, -79.3871],
        [43.6677, -79.3948],
        [43.6422, -79.3866],
        [43.6503, -79.3596],
        [43.6536, -79.3925],
        [43.8179, -79.1854],
        [43.6465, -79.4637],
        [43.6487, -79.3715],
        [43.6780, -79.4094],
        [43.7338, -79.3579]
      ]
      this.restaurantMarkers = [
        [43.6476, -79.3793],
        [43.6714, -79.3884],
        [43.6426, -79.3871],
        [43.6521, -79.3725],
        [43.6711, -79.3896],
        [43.6565, -79.3983],
        [43.6641, -79.4102],
        [43.6691, -79.3342],
        [43.6682, -79.3912],
        [43.6551, -79.5584]
      ]
      this.shoppingMarkers = [
        [43.654434, -79.3807],
        [43.7254, -79.4522],
        [43.6119, -79.5571],
        [43.5930, -79.6425]
      ]
      this.cafeMarkers = [
        [43.6452, -79.3807], // Tim Hortons (near Union Station)
        [43.6426, -79.3871], // BeaverTails Pastry
        [43.6588, -79.3806], // Ice Creamonology
        [43.6473, -79.3747], // Nom Nom Nom Poutine
        [43.6609, -79.3483]  // Tea N Bannock
      ]
      this.marketMarkers = [
        [43.6455, -79.3783], // INS Market (near Union Station)
        [43.6445, -79.3801], // Longos (Brookfield Place near Union Station)
        [43.6461, -79.3802], // 7-Eleven (Front St near Union Station)
        [43.6463, -79.3767], // Metro (Metro Centre near Union Station)
        [43.6425, -79.3810]  // Loblaws (Maple Leaf Square near Union Station)
      ]
      this.seasonalMarkers = [
        [43.6535, -79.3841],
        [43.6535, -79.3841],
        [43.6535, -79.3841],
        [43.6503, -79.3595],
        [43.7336, -79.4152]
      ]
      } else if (this.filter === 'toDo') {
        this.activityMarkers = [
        [43.6426, -79.3871],
        [43.6677, -79.3948],
        [43.6422, -79.3866],
        [43.6503, -79.3596],
        [43.6536, -79.3925],
        [43.8179, -79.1854],
        [43.6465, -79.4637],
        [43.6487, -79.3715],
        [43.6780, -79.4094],
        [43.7338, -79.3579]
      ]
      } else if (this.filter === 'shopping') {
        this.shoppingMarkers = [
        [43.654434, -79.3807],
        [43.7254, -79.4522],
        [43.6119, -79.5571],
        [43.5930, -79.6425]
      ]
      } else if (this.filter === 'restaurants') {
        this.restaurantMarkers = [
        [43.6476, -79.3793],
        [43.6714, -79.3884],
        [43.6426, -79.3871],
        [43.6521, -79.3725],
        [43.6711, -79.3896],
        [43.6565, -79.3983],
        [43.6641, -79.4102],
        [43.6691, -79.3342],
        [43.6682, -79.3912],
        [43.6551, -79.5584]
      ]
      } else if (this.filter === 'cafe') {
        this.cafeMarkers = [
        [43.6452, -79.3807], // Tim Hortons (near Union Station)
        [43.6426, -79.3871], // BeaverTails Pastry
        [43.6588, -79.3806], // Ice Creamonology
        [43.6473, -79.3747], // Nom Nom Nom Poutine
        [43.6609, -79.3483]  // Tea N Bannock
      ]
      } else if (this.filter === 'market') {
        this.marketMarkers = [
        [43.6455, -79.3783], // INS Market (near Union Station)
        [43.6445, -79.3801], // Longos (Brookfield Place near Union Station)
        [43.6461, -79.3802], // 7-Eleven (Front St near Union Station)
        [43.6463, -79.3767], // Metro (Metro Centre near Union Station)
        [43.6425, -79.3810]  // Loblaws (Maple Leaf Square near Union Station)
      ]
      } else {
        this.seasonalMarkers = [
        [43.6535, -79.3841],
        [43.6535, -79.3841],
        [43.6535, -79.3841],
        [43.6503, -79.3595],
        [43.7336, -79.4152]
      ]
      }
    }
  }
};
</script>

<style scoped>
  .marker {
    z-index: 1;
  }
  .marker:hover {
    z-index: 100;
  }
</style>