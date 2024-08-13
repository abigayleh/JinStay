<template>
  <div class="w-full" style="height:600px">
    <l-map ref="map" v-model:zoom="zoom" :center="center">
      <l-tile-layer
        :url="url"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-marker class="marker" :lat-lng="airportMarker">
        <l-tooltip>Pearson Airport</l-tooltip>
        <l-icon :iconUrl="require('@/assets/airplane.png')" :iconSize="[150, 90]"></l-icon>
      </l-marker>
      <l-marker class="marker" :lat-lng="houseMarker">
        <l-tooltip>JinStay 🫶</l-tooltip>
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
      type: Array,
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
      zoom: 11,
      center: [43.6452, -79.3806],
      url: 'http://services.arcgisonline.com/arcgis/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}',
      houseMarker: [43.6452, -79.3806],
      airportMarker: [43.6771, -79.6334],
      activityTitles: [
        'CN Tower',
        'Royal Ontario Museum',
        'Ripleys Aquarium of Canada',
        'Distillery District',
        'Art Gallery of Ontario',
        'Toronto Zoo',
        'High Park',
        'St. Lawrence Market',
        'Casa Loma',
        'Edwards Gardens'
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
      shoppingTitles: [
        'Eaton Centre',
        'Yorkdale Shopping Centre',
        'Sherway Gardens',
        'Square One Shopping Centre'
      ],
      shoppingMarkers: [
        [43.654434, -79.3807],
        [43.7254, -79.4522],
        [43.6119, -79.5571],
        [43.5930, -79.6425]
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
      if (this.filter.includes('shopping')) {
        this.shoppingMarkers = [
          [43.654434, -79.3807],
          [43.7254, -79.4522],
          [43.6119, -79.5571],
          [43.5930, -79.6425]
        ]
      } else {
        this.shoppingMarkers = []
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