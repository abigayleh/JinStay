<template>
  <div>
    <div :class="largeHeader ? 'header-large p-4' : 'header-small p-2 px-4'" class="header">
      <div v-if="largeHeader" class="w-full h-full flex flex-col items-between">
        <div class="w-full flex justify-end items-between font-bold">
          <q-btn flat color="white" icon="language" :label="$t('Langauge')">
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
        <div class="max-w-full flex flex-1 justify-center">
          <div class="flex flex-col text-base w-full items-center justify-center">
            <div class="flex justify-center items-center">
              <span class="font-bold text-2xl pl-6 pr-1">{{ $t('JinStay') }}</span>
              <img class="w-6 h-6" src="@/assets/mapleLeaf.png" alt="Canada">
            </div>
            <div class="flex flex-col justify-center items-center">
              <div>{{ $t('Address') }}</div>
              <div>{{ $t('CityAddress') }}</div>
            </div>
          </div>
          <span class="font-bold sm:text-3xl text-2xl">{{ $t('WelcomeToToronto') }} 👋</span>
        </div>
        <div class="flex flex-nowrap max-w-full overflow-scroll text-base font-bold">
          <span style="min-width: max-content" class="cursor-pointer mr-2 hover:underline" @click="() => { $router.push('/home'); changeView('home') }">{{ $t('OurHome') }}</span>
          <span class="pl-2 pr-3">|</span>
          <span style="min-width: max-content" class="cursor-pointer mr-2 hover:underline" @click="() => { $router.push('/activities'); changeView('activities') }">{{ $t('ThingsToDo') }}</span>
          <span class="pl-2 pr-3">|</span>
          <span class="cursor-pointer mr-2 hover:underline" @click="() => { $router.push('/transportation'); changeView('transportation') }">{{ $t('TransportationTitle') }}</span>
          <span class="pl-2 pr-3">|</span>
          <span style="min-width: max-content" class="cursor-pointer mr-2 hover:underline" @click="() => { $router.push('/host'); changeView('host') }">{{ $t('AboutTheHost') }}</span>
        </div>
      </div>
      <div v-else class="w-full h-full flex flex-col items-between justify-between">
        <div class="w-full flex justify-between">
          <div class="flex justify-center items-center">
            <span class="font-bold text-2xl pr-1">{{ $t('JinStay') }}</span>
            <img class="w-6 h-6" src="@/assets/mapleLeaf.png" alt="Canada">
          </div>
          <div class="flex font-bold">
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
        </div>
        <div class="flex flex-nowrap overflow-scroll text-base font-bold">
          <span style="min-width: max-content" class="cursor-pointer mr-2 hover:underline" @click="() => { $router.push('/home'); changeView('home') }">{{ $t('OurHome') }}</span>
          <span class="pl-2 pr-3">|</span>
          <span style="min-width: max-content" class="cursor-pointer mr-2 hover:underline" @click="() => { $router.push('/activities'); changeView('activities') }">{{ $t('ThingsToDo') }}</span>
          <span class="pl-2 pr-3">|</span>
          <span class="cursor-pointer mr-2 hover:underline" @click="() => { $router.push('/transportation'); changeView('transportation') }">{{ $t('TransportationTitle') }}</span>
          <span class="pl-2 pr-3">|</span>
          <span style="min-width: max-content" class="cursor-pointer mr-2 hover:underline" @click="() => { $router.push('/host'); changeView('host') }">{{ $t('AboutTheHost') }}</span>
        </div>
      </div>
    </div>
    <div class="pt-64 flex items-center h-auto">
      <video ref="videoPlayer" width="100%" autoplay muted loop playsinline poster="@/assets/toronto.webp">
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
      videoLoaded: false,
      largeHeader: true,
      language: 'eng',
      languages: [
        { name: this.$t('English'), key: 'en' },
        { name: this.$t('Korean'), key: 'kr' }
      ]
    }
  },
  mounted() {
    const lang = localStorage.getItem('lang')
    if (lang !== null) {
      this.language = lang
    }
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    changeView (type) {
      setTimeout(() => {
        var element = document.getElementById(type);
        var headerOffset = 80;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
      }, 200)
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
      localStorage.setItem('lang', this.language)
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
    z-index: 5000;
    overflow: hidden;
  }

  .header-small {
    height: 80px;
  }

  .header-large {
    height: 256px;
  }

</style>
