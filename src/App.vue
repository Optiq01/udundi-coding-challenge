<script setup lang="ts">
  import {ref} from 'vue';
  import type { Ref } from 'vue';
  import {onMounted} from 'vue';
  import {animate} from 'motion';

  let plusButtonComplete: Ref<boolean> = ref(false);
  let plusButtonClicked: Ref<boolean> = ref(false);
  let titleAnimationComplete: Ref<boolean> = ref(false);

  onMounted(()=>{

    const animatedTitle = document.getElementById('animatedTitle');

    document.getElementById('plusButton')!.addEventListener('animationend', ()=>{
     plusButtonComplete.value = true;
     console.log('button complete', plusButtonComplete);
    });
    
    animatedTitle!.addEventListener('animationend', ()=>{
      animatedTitle!.style.opacity = '0';
     //titleAnimationComplete.value = true;
     console.log('title complete', titleAnimationComplete);
    });

  });

</script>

<template>
  <section class="page bg-cover bg-center">
    <div class="sidebar bg-burgundy sm:w-[var(--tiny-2-3)] md:w-[var(--xSmall-2-4)] lg:w-[var(--loMed-1-5)] z-10"></div>
    <article class="titleArea z-20 w-full h-full">
      <h1 v-if="!plusButtonComplete" class="title align-middle sm:text-[length:var(--text-ultraJumbotron-2)] md:text-[length:var(--text-ultraJumbotron-3)] z-30">
        Explore
      </h1>
      <Transition name="titleAnimation">
        <h1 v-show="plusButtonComplete" id="animatedTitle" class="title align-middle sm:text-[length:var(--text-ultraJumbotron-2)] md:text-[length:var(--text-ultraJumbotron-3)]">
          <span>
            Explore
          </span>
        </h1>
      </Transition>
      <div class="plusBtnContainer gap-[var(--micro-1-3)] z-60">
        <img v-show="!plusButtonClicked" @click="plusButtonClicked = true" src="./assets/Plus.svg" class="sm:w-[var(--xTiny-1-3)]"/>
        <Transition name="plusButtonAnimation">
          <img v-show="plusButtonClicked" id="plusButton" src="./assets/Plus.svg" class="sm:w-[var(--xTiny-1-3)]"/>
        </Transition>
        <p class="text-white align-center sm:text-[length:var(--text-widget-3)] md:text-[length:var(--text-article-3)]">more details</p>
      </div>
    </article>
  </section>
</template>

<style scoped>
  .page{
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr var(--loMed-2-3) auto 1fr;
    background-image: url('./assets/background.jpg');
  }

  .sidebar{
    grid-area: 1/1/5/2;
    display: block;
  }

  .titleArea{
    grid-area: 2/1/3/3;
    display: grid;
    grid-template-columns: var(--xTiny-2-4) auto 1fr;
    grid-template-rows: auto 1fr;
    font-family: 'Prata', serif;
  }

  .title{
    pointer-events: none;
    grid-area: 1/2/2/3;
    place-self: center;
    position: relative;
    background: linear-gradient(90deg,
      rgba(255,255,255,0) 0%,
      rgba(255,255,255,1) 5%,
      rgba(255,255,255,1) 100%);
    background-size: 130%;
    background-position-x: 50%;
    background-repeat: no-repeat;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .plusBtnContainer{
    display: grid;
    grid-area: 2/2/3/3;
    justify-self: left;
    align-self: start;
    grid-template-columns: auto auto;
  }

  @keyframes plusButtonAnimationSequence{
    0% {transform: scale(1)}
    70% {transform: scale(0.4)}
    98% {transform: scale(1.1)}
    100% {transform: scale(1)}
  }
  .plusButtonAnimation-enter-active{
    animation: plusButtonAnimationSequence .3s ease-out;
  }

  @keyframes titleAnimationSequence{
    0% {
      background-position-x: 50%;
    }
    100% {
      background-position-x: -700%;
      opacity: 0;
    }
  }

  .titleAnimation-enter-active{
    animation: titleAnimationSequence .5s ease-out forwards;
    animation-fill-mode: forwards;
    -webkit-animation-fill-mode: forwards;
  }



  @media(min-width: 500px){
    .plusBtnContainer{
      grid-area: 1/2/2/3;
      align-self: last baseline;
    }
  }

  @media(min-width: 1014px){
    .titleArea{
      grid-template-columns: var(--small-2-4) auto 1fr;
    }
  }
</style>