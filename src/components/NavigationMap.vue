<template>
  <div class="w-full" style="height:600px">
    <l-map ref="map" v-model:zoom="zoom" :center="center">
      <l-tile-layer
        :url="url"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-marker :lat-lng="marker"></l-marker>
    </l-map>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";

export default {
  name: 'NavigationMap',
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data() {
    return {
      zoom: 14,
      center: [43.6452, -79.3806],
      url: 'http://services.arcgisonline.com/arcgis/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}',
      marker: [43.6452, -79.3806],
    };
  },
};
</script>

<style></style>