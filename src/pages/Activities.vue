<template>
  <div class="h-screen">
    <div class="flex flex-col items-center no-wrap h-auto px-20">
      <NavigationMap />
    </div>
    <div class="w-full flex overflow-x-scroll no-wrap py-3 px-2">
      <q-btn class="rounded-3xl mr-2" color="red" text-color="white" label="All"></q-btn>
      <q-btn class="rounded-3xl mr-2" color="red" text-color="white" label="Landmarks"></q-btn>
      <q-btn class="rounded-3xl mr-2" color="red" text-color="white" label="Things to do"></q-btn>
      <q-btn class="rounded-3xl mr-2" color="red" text-color="white" label="Shopping"></q-btn>
      <q-btn class="rounded-3xl mr-2" color="red" text-color="white" label="Restaurants"></q-btn>
    </div>
  </div>
</template>

<script>
import NavigationMap from '../components/NavigationMap.vue';
export default {
  name: 'ActivitesPage',
  components: {
    NavigationMap
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
