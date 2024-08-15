<template>
  <div>
    <div :class="largeHeader ? 'header-large' : 'header-small'" class="header">
     <div class="flex w-full" :class="largeHeader ? '' : 'justify-between flex-row-reverse'">
        <div class="pr-4 font-bold" :class="largeHeader ? 'flex w-full justify-end' : 'pt-5'">
          <q-btn flat color="white" icon="language" label="LANGUAGE">
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
        <div :class="largeHeader ? 'flex flex-col text-base w-full items-center justify-center' : 'mt-4'">
          <div class="flex justify-center items-center">
            <span class="font-bold text-2xl pl-6 pr-1">{{ $t('JinStay') }}</span>
            <img class="w-6 h-6" src="@/assets/mapleLeaf.png" alt="Canada">
          </div>
          <div v-if="largeHeader" class="flex flex-col justify-center items-center">
            <div>{{ $t('Address') }}</div>
            <div>{{ $t('CityAddress') }}</div>
          </div>
        </div>
        <div v-if="!largeHeader" class="h-min w-full flex items-center overflow-x-scroll pl-5 mb-4 text-base font-bold">
          <span class="cursor-pointer mr-2 hover:underline" @click="$router.push('/home')">OUR HOME</span>
          <span class="pl-2 pr-3">|</span>
          <span class="cursor-pointer mr-2 hover:underline" @click="$router.push('/activities')">THINGS TO DO</span>
          <span class="pl-2 pr-3">|</span>
          <span class="cursor-pointer mr-2 hover:underline" @click="$router.push('/transportation')">TRANSPORTATION</span>
          <span class="pl-2 pr-3">|</span>
          <span class="cursor-pointer mr-2 hover:underline" @click="$router.push('/host')">ABOUT THE HOST</span>
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
        { name: 'English', key: 'en' },
        { name: 'Korean', key: 'kr' }
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
  },
  watch: {
    language () {
      this.$i18n.locale = this.language
    }
  }
}
</script>

<style scoped>
  @import "tailwindcss/base";
  @import "tailwindcss/components";
  @import "tailwindcss/utilities";

  .header {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    transition: height 0.5s ease;
    background-color: red;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 100;
    overflow: hidden;
  }

  .header-small {
    height: 80px;
  }

  .header-large {
    height: 256px;
  }

</style>
