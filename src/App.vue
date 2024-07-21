<template>
  <div>
    <div :class="largeHeader ? 'h-64' : 'fixed h-22 py-2'" class="w-full transition-all duration-500 text-white bg-red flex flex-col justify-between items-center" style="z-index: 5000;">
     <div class="flex w-full" :class="largeHeader ? '' : 'justify-between flex-row-reverse'">
        <div :class="largeHeader ? 'flex w-full justify-end' : ''">
          <q-btn flat color="white" icon="language" label="Language">
            <q-menu>
              <q-list style="min-width: 100px">
                <q-item v-for="lang in languages" :key="lang.key" clickable v-close-popup @click="language = lang.key">
                  <q-item-section>{{ lang.name }}</q-item-section>
                </q-item>
                <q-separator></q-separator>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
        <div :class="largeHeader ? 'flex flex-col text-base w-full items-center justify-center' : ''">
          <div :class="largeHeader ? 'animated-text' : 'animated-text'" class="flex justify-center items-center">
            <span class="font-bold text-2xl pl-6 pr-1">JinStay</span>
            <img class="w-6 h-6" src="@/assets/mapleLeaf.png" alt="Canada">
          </div>
          <div v-if="largeHeader" class="flex flex-col justify-center items-center">
            <div>123 Main Street</div>
            <div>Toronto, ON</div>
          </div>
        </div>
        <div v-if="!largeHeader" class="w-full flex items-center overflow-x-scroll no-wrap px-2">
          <q-btn class="cursor-pointer rounded-3xl mr-2 hover:underline" @click="$router.push('/home')" flat text-color="white" label="Our home"></q-btn>
          <span>|</span>
          <q-btn class="cursor-pointer rounded-3xl mr-2 hover:underline" @click="$router.push('/activities')" flat text-color="white" label="Things to do"></q-btn>
          <span>|</span>
          <q-btn class="cursor-pointer rounded-3xl mr-2 hover:underline" @click="$router.push('/transportation')" flat text-color="white" label="Transportation"></q-btn>
          <span>|</span>
          <q-btn class="cursor-pointer rounded-3xl mr-2 hover:underline" @click="$router.push('/host')" flat text-color="white" label="About the host"></q-btn>
        </div>
      </div>
      <span v-if="largeHeader" class="font-bold text-3xl py-10">{{ language === 'eng' ? 'Welcome to Toronto' : '토론토에 오신것을 환영합니다' }} 👋</span>
    </div>
    <div class="flex items-center h-auto">
      <video ref="videoPlayer" width="100%" autoplay muted loop>
        <source src="@/assets/torontoVideo.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      largeHeader: true,
      language: 'eng',
      languages: [
        { name: 'English', key: 'eng' },
        { name: 'Korean', key: 'kor' },
        { name: 'French', key: 'fre' }
      ]
    }
  },
  mounted() {
    this.$refs.videoPlayer.addEventListener('ended', this.restartVideo);
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    restartVideo() {
      this.$refs.videoPlayer.currentTime = 0;
      this.$refs.videoPlayer.play();
    },
    handleScroll() {
      if (window.scrollY > 100) {
        this.largeHeader = false
      } else {
        this.largeHeader  =true
      }
    }
  }
}
</script>

<style>
  @import "tailwindcss/base";
  @import "tailwindcss/components";
  @import "tailwindcss/utilities";

  .animated-text {
    animation: slideLeft 5s linear infinite;
  }
</style>
