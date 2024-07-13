<template>
  <div class="w-full flex flex-col text-lg p-4">
    <span>Welcome to your new home!</span>
    <span>A beautiful Queen Bed Studio Apartment located in Downtown Toronto ✨</span>
    <span>Sleeps: 3 😴</span>

    <div class="flex w-full no-wrap">
      <div class="flex flex-col w-full p-2">
        <span class="px-1">Bedroom:</span>
        <div class="w-full h-96">
          <q-carousel
            swipeable
            animated
            v-model="slide"
            thumbnails
            infinite
          >
            <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg"></q-carousel-slide>
            <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg"></q-carousel-slide>
            <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg"></q-carousel-slide>
            <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg"></q-carousel-slide>
          </q-carousel>
        </div>
      </div>
      <div class="flex flex-col w-full p-2">
        <span class="px-1">Kitchen:</span>
        <div class="w-full h-96">
          <q-carousel
            swipeable
            animated
            v-model="slide"
            thumbnails
            infinite
          >
            <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg"></q-carousel-slide>
            <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg"></q-carousel-slide>
            <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg"></q-carousel-slide>
            <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg"></q-carousel-slide>
          </q-carousel>
        </div>
      </div>
    </div>
    <div class="flex w-full no-wrap">
      <div class="flex flex-col w-full p-2">
        <span class="px-1">Living room:</span>
        <div class="w-full h-96">
          <q-carousel
            swipeable
            animated
            v-model="slide"
            thumbnails
            infinite
          >
            <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg"></q-carousel-slide>
            <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg"></q-carousel-slide>
            <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg"></q-carousel-slide>
            <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg"></q-carousel-slide>
          </q-carousel>
        </div>
      </div>
      <div class="flex flex-col w-full p-2">
        <span class="px-1">Bathroom:</span>
        <div class="w-full h-96">
          <q-carousel
            swipeable
            animated
            v-model="slide"
            thumbnails
            infinite
          >
            <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg"></q-carousel-slide>
            <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg"></q-carousel-slide>
            <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg"></q-carousel-slide>
            <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg"></q-carousel-slide>
          </q-carousel>
        </div>
      </div>
    </div>
    <div class="flex w-full no-wrap">
      <div class="flex flex-col w-full p-2">
        <span class="px-1">Interior:</span>
        <div class="w-full h-96">
          <q-carousel
            swipeable
            animated
            v-model="slide"
            thumbnails
            infinite
          >
            <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg"></q-carousel-slide>
            <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg"></q-carousel-slide>
            <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg"></q-carousel-slide>
            <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg"></q-carousel-slide>
          </q-carousel>
        </div>
      </div>
      <div class="flex flex-col w-full p-2">
        <span class="px-1">Exterior:</span>
        <div class="w-full h-96">
          <q-carousel
            swipeable
            animated
            v-model="slide"
            thumbnails
            infinite
          >
            <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg"></q-carousel-slide>
            <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg"></q-carousel-slide>
            <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg"></q-carousel-slide>
            <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg"></q-carousel-slide>
          </q-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  components: {
    
  },
  data() {
    return {
      slide: 1
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
