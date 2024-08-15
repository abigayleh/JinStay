<template>
  <div class="py-5 p-3 flex justify-center">
    <div v-if="largeView" class="w-full flex flex-col items-center justify-center py-4 mx-3 bg-white rounded-xl shadow-md" style="max-width: 1000px;">
      <span class="text-lg pb-2">{{ title }}</span>
      <div class="flex py-4">
        <q-carousel
          class="rounded h-64 w-96"
          swipeable
          animated
          arrows
          v-model="slideIndex"
          infinite
        >
          <q-carousel-slide :name="1" :img-src="photos[0]"></q-carousel-slide>
          <q-carousel-slide :name="2" :img-src="photos[1]"></q-carousel-slide>
          <q-carousel-slide :name="3" :img-src="photos[2]"></q-carousel-slide>
        </q-carousel>
        <div style="width: 450px;" class="flex flex-col justify-center items-center">
          <div class="w-full flex">
            <div class="w-1/2 flex flex-col flex-nowrap items-center justify-center">
              <div class="flex items-center pb-2">
                <q-icon name="location_on" class="pr-4"></q-icon>
                <span>{{ address }}</span>
              </div>
              <div v-if="walk !== ''" class="flex items-center pb-2 justify-center">
                <q-icon name="directions_walk" class="pr-2"></q-icon>
                <span>{{ walk }}</span>
              </div>
              <div v-if="subway !== ''" class="flex items-center pb-2 justify-center">
                <q-icon name="directions_walk" class="pr-6"></q-icon>
                <span>{{ subway }}</span>
              </div>
            </div>
            <div class="w-1/2 flex flex-col items-center justify-center">
              <div v-if="uber !== ''" class="flex items-center ml-6 pb-2 justify-center">
                <q-icon name="train" class="pr-2"></q-icon>
                <span>{{ uber }}</span>
              </div>
            </div>
          </div>
          <div class="w-full flex flex-col items-center py-2 pb-5">
            <span class="text-base py-1">Would you recommend here?</span>
            <div>
              <q-btn class="rounded-l-full" size="sm" :label="likes" @click="onClick('like')" :color="isLiked ? 'green' : grey" icon="thumb_up"></q-btn>
              <q-btn class="rounded-r-full" size="sm" :label="dislikes" @click="onClick('dislike')" :color="isDisliked ? 'red' : grey" icon="thumb_down"></q-btn>
            </div>
          </div>
          <div class="flex items-center py-1">
            <q-icon name="open_in_new" class="pr-2"></q-icon>
            <a class="hover:underline" target="_blank" :href="website">{{ $t('Website') }}</a>
          </div>
          <div class="flex items-center pb-1">
            <q-icon name="call" class="pr-2"></q-icon>
            <span>{{ phone }}</span>
          </div>
          <div class="flex items-center pb-1">
            <q-icon name="map" class="pr-2"></q-icon>
            <a class="hover:underline" target="_blank" :href="directions">Directions from Union Station</a>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="flex flex-col flex-nowrap items-center justify-center pt-5 bg-white rounded-xl shadow-md hover:shadow-lg cursor-pointer" style="height: 330px; width: 500px;">
      <span class="text-lg font-bold">{{ title }}</span>
      <div class="w-full h-full flex px-4">
        <div class="flex justify-center items-center pr-2">
          <img class="h-56 rounded" :src="smallPhoto" alt="Canada">
        </div>
        <div class="flex-1 flex flex-col items-center justify-center">
          <div class="flex flex-col pb-2">
            <div class="flex flex-nowrap justify-evenly w-full items-center pb-2">
              <div v-if="walk !== ''" class="flex items-center pb-2 justify-center pr-4">
                <q-icon name="directions_walk" class="pr-2"></q-icon>
                <span>{{ walk }}</span>
              </div>
              <div v-if="subway !== ''" class="flex items-center pb-2 justify-center pr-4">
                <q-icon name="train" class="pr-2"></q-icon>
                <span>{{ subway }}</span>
              </div>
              <div v-if="uber !== ''" class="flex items-center pb-2 justify-center pr-4">
                <q-icon name="local_taxi" class="pr-2"></q-icon>
                <span>{{ uber }}</span>
              </div>
            </div>
          </div>
          <div class="flex items-center flex-col pb-2">
            <div class="flex items-center">
              <q-icon name="open_in_new" class="pr-2"></q-icon>
              <a class="hover:underline" target="_blank" :href="website">{{ $t('Website') }}</a>
            </div>
            <div class="flex items-center">
              <q-icon name="call" class="pr-2"></q-icon>
              <span>{{ phone }}</span>
            </div>
            <div class="flex items-center">
              <q-icon name="map" class="pr-2"></q-icon>
              <a class="hover:underline" target="_blank" :href="directions">Directions from Union Station</a>
            </div>
          </div>
          <div class="pt-4">
            <q-icon name="info" class="pr-2"></q-icon>
            <span class="cursor-pointer hover:underline">More info</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CafeSquare',
  props: {
    likes: {
      type: Number,
      required: true
    },
    dislikes: {
      type: Number,
      required: true
    },
    largeView: {
      type: Boolean,
      required: true
    },
    smallPhoto: {
      type: String,
      required: true
    },
    photos: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    walk: {
      type: String,
      required: true
    },
    subway: {
      type: String,
      required: true
    },
    uber: {
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
  },
  data() {
    return {
      slideIndex: 1,
      isLiked: false,
      isDisliked: false
    }
  },
  methods: {
    onClick (type) {
      if (type === 'like' && this.isLiked) {
        this.isLiked = false
      } else if (type === 'dislike' && this.isDisliked) {
        this.isDisliked = false
      } else if (type === 'like') {
        this.isLiked = true
        this.isDisliked = false
      } else {
        this.isLiked = false
        this.isDisliked = true
      }
    }
  }
}
</script>

<style>
</style>
