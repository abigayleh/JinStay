<template>
  <div class="py-5 p-3 flex justify-center">
    <div v-if="!largeView" class="flex flex-col flex-nowrap items-center pt-5 bg-white rounded-xl border border-2" style="width: 500px; height: 330px;">
      <span class="text-lg font-bold">{{ title }}</span>
      <div class="h-full w-full flex items-evenly px-4">
        <div class="flex justify-center items-center">
          <img class="h-56 rounded" src="https://preview.redd.it/s6vthxvvuc851.jpg?width=1080&crop=smart&auto=webp&s=1f6119482beac6f73b684cb53fa45ec3de624496" alt="Canada">
        </div>
        <div class="flex-1 flex flex-col items-center justify-center">
          <div class="pb-5">
            <div class="flex items-center justify-center w-full pb-2">
              <div class="flex justify-center items-center pr-4">
                <div v-if="type === 'Landmark'">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M80-120v-80h160v-160h-80v-80h84q12-75 66.5-129.5T440-636v-204h280v160H520v44q75 12 129.5 66.5T716-440h84v80h-80v160h160v80H80Zm240-80h120v-160H320v160Zm200 0h120v-160H520v160ZM326-440h308q-14-53-57-86.5T480-560q-54 0-97 33.5T326-440Zm154 0Z"/></svg>
                </div>
                <q-icon v-else :name="typeIcon" class="pr-1"></q-icon>
                <span class="pl-1">{{ type }}</span>
              </div>
            </div>
            <div class="w-full flex justify-between">
              <div v-if="walk !== ''" class="flex items-center pb-2 justify-center pr-4">
                <q-icon name="directions_walk" class="pr-2"></q-icon>
                <span>{{ walk }}</span>
              </div>
              <div v-if="subway !== ''" class="flex items-center pb-2 justify-center pr-4">
                <q-icon name="train" class="pr-2"></q-icon>
                <span>{{ subway }}</span>
              </div>
              <div class="flex items-center pb-2 justify-center">
                <q-icon name="local_taxi" class="pr-2"></q-icon>
                <span>{{ uber }}</span>
              </div>
            </div>
          </div>
          <div class="flex flex-col items-center">
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
    <div v-else class="w-full flex flex-col items-center justify-center py-4 mx-3 my-8 border border-4 rounded-xl" style="border-color: red; max-width: 1000px;">
      <span class="text-lg pb-2">{{ title }}</span>
      <div class="flex flex-nowrap py-4 pl-2">
        <div>
          <img class="rounded h-64" :src="photo" alt="Canada">
        </div>
        <div style="width: 450px;" class="flex flex-col justify-center items-center">
          <div class="w-full flex">
            <div class="w-1/2 flex flex-col flex-nowrap items-center justify-center">
              <div class="flex items-center pb-2">
                <div v-if="type === 'Landmark'">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M80-120v-80h160v-160h-80v-80h84q12-75 66.5-129.5T440-636v-204h280v160H520v44q75 12 129.5 66.5T716-440h84v80h-80v160h160v80H80Zm240-80h120v-160H320v160Zm200 0h120v-160H520v160ZM326-440h308q-14-53-57-86.5T480-560q-54 0-97 33.5T326-440Zm154 0Z"/></svg>
                </div>
                <q-icon v-else :name="typeIcon" class="pr-1"></q-icon>
                <span>{{ type }}</span>
              </div>
              <div v-if="walk !== ''" class="flex items-center pb-2 justify-center">
                <q-icon name="directions_walk" class="pr-2"></q-icon>
                <span>{{ walk }}</span>
              </div>
              <div v-if="subway !== ''" class="flex items-center pb-2 justify-center">
                <q-icon name="train" class="pr-6"></q-icon>
                <span>{{ subway }}</span>
              </div>
            </div>
            <div class="w-1/2 flex flex-col items-center justify-center">
              <div class="flex items-center pb-2">
                <q-icon name="location_on" class="pr-2"></q-icon>
                <span>{{ location }}</span>
              </div>
              <div v-if="uber !== ''" class="flex items-center pb-2 justify-center">
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
  </div>
</template>

<script>
export default {
  name: 'ActivitySquare',
  props: {
    likes: {
      type: Number,
      required: true
    },
    dislikes: {
      type: Number,
      required: true
    },
    photo: {
      type: String,
      required: true
    },
    largeView: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    typeIcon: {
      type: String,
      required: true
    },
    location: {
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
    child: {
      type: String,
      required: true
    },
    adult: {
      type: String,
      required: true
    },
    senior: {
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
  }
}
</script>

<style>
</style>
