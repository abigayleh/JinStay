<template>
  <div class="h-screen">
    <div class="w-full flex flex-col overflow-x-scroll no-wrap py-3 px-2">
      <div class="flex w-full items-center justify-center text-3xl pb-10">
        <q-icon name="flight_takeoff" size="lg" class="pr-2"></q-icon>
        <span class="px-2">Seoul -> Toronto</span>
        <q-icon name="flight_land" size="lg" class="pr-2"></q-icon>
      </div>
      <div class="flex items-center justify-evenly pb-4">
        <img class="rounded h-96" src="@/assets/hanbokBoth.jpg" alt="Canada">
        <img class="rounded h-72" src="@/assets/jinStayLogo.png" alt="Canada">
        <img class="rounded h-96" src="@/assets/workJinnie.jpg" alt="Canada">
      </div>
      <div class="flex flex-col pl-6">
        <span class="font-bold text-2xl">Experienced 5-star hotelier</span>
        <span class="pb-4">In Seoul, I have experience working at both Marriot and Grand Hyatt hotels, accummulating over 2 years of pristine experience before deciding to take my adventure to Canada.
          I've always loved my job as a hotelier. The feeling I get when helping make someones vacation memorable and just that little bit better is worth so much to me. I also love the 
          ability to talk with all kinds of people from difference cultures and backgrounds, and not only help them but learn from them and evolve myself in the process. I push myself everyday
          to always do more and make great experiences for people. Through AirBnb I'm truly happy being able to help and interact with people. 
        </span>
        <span class="font-bold text-2xl">Seoul to Toronto</span>
        <span class="pb-4">Born and raised in Seoul, it's always been my dream to expand my hotelier experience overseas and take on a greater challenge to push myself further.
          I met my girlfriend, a Newfoundlander, in Seoul where we decided to make the move to Toronto together. She's made my dream possible and I'm able to bring the joys
          I've found in Toronto to tourists visiting here as well
        </span>
        <span class="font-bold text-2xl">Foodie and traveler</span>
        <span class="pb-4">I've been lucky enough to embark on many trips of my own, and have many more planned for the future. Most trip memories are outlined by the best food we ate. One of my favorite
          parts of living in Toronto is having the ability to enjoy so many differnt kinds of cuisine all in one place. You can make a Toronto trip feel like a world tour if you know the right
          places to go, which don't worry I'm not looking to gatekeep any of that information! 
        </span>
        <div class="flex items-center justify-evenly pb-4">
          <img class="rounded h-72 py-1" src="@/assets/steak.jpg" alt="Canada">
          <img class="rounded h-72 py-1" src="@/assets/pho.jpg" alt="Canada">
          <img class="rounded h-72 py-1" src="@/assets/hanshik.jpg" alt="Canada">
        </div>
        <span class="font-bold text-2xl">Animal lover</span>
        <span class="pb-4">My girlfriend and I have always bonded over our love of animals, and make many plans to get as many pets as possible, our house and budget dependent. I still have
          all of my social media handles named after our first hamster together, Hammy. 
        </span>
        <div class="flex items-center justify-evenly pb-4">
          <img class="rounded h-72 py-1" src="@/assets/hammy.jpg" alt="Canada">
          <img class="rounded h-72 py-1" src="@/assets/teokie.jpg" alt="Canada">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutTheHost',
  components: {
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
