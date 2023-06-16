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
     titleAnimationComplete.value = true;
     console.log('title complete', titleAnimationComplete);
    });

  });

</script>

<template>
  <section class="page bg-cover w-full h-full grid-cols-12 grid-rows-6">

    <div class="bg-burgundy
              row-start-1
              row-span-6
              col-start-1
              sm:col-end-4"
    ></div>

    <h1 v-show="!plusButtonComplete"
       class="title
              text-right
              sm:col-start-3
              md:col-start-2
              lg:col-start-1
              sm:col-span-9
              sm:row-start-3
              sm:row-span-2
              bg-white
              sm:text-[length:var(--text-ultraJumbotron-2)]
              md:text-[length:var(--text-ultraJumbotron-5)]"
    >
      Explore
    </h1>

    <Transition name="titleAnimation">
      <h1 id="animatedTitle"
          v-show="plusButtonComplete"
          class="title
              text-right
              sm:col-start-3
              md:col-start-2
              lg:col-start-1
              sm:col-span-9
              sm:row-start-3
              sm:row-span-2
              bg-white
              sm:text-[length:var(--text-ultraJumbotron-2)]
              md:text-[length:var(--text-ultraJumbotron-5)]"
    >
      Explore
    </h1>
    </Transition>

    <img class="
               .plusButton
               sm:w-[var(--xTiny-1-3)]
               col-start-3
               col-end-4
               row-start-5
               row-end-6
               "
      v-show="!plusButtonClicked"
      @click="plusButtonClicked = true"
      src="./assets/Plus.svg"
    />
    <Transition name="plusButtonAnimation">
      <img v-show="plusButtonClicked"
           class=".plusButton
           sm:w-[var(--xTiny-1-3)]
           col-start-3
           col-end-4
           row-start-5
           row-end-6"
           id="plusButton"
           src="./assets/Plus.svg"
      />
    </Transition>

  </section>
  <!--<section class="page bg-cover bg-center">

    <div class="sidebar bg-burgundy sm:w-[var(--tiny-2-3)] md:w-[var(--xSmall-2-4)] lg:w-[var(--loMed-1-5)] z-10"></div>
    
    <article class="titleArea z-20 w-full h-full">
      
      <h1 class="title align-middle sm:text-[length:var(--text-ultraJumbotron-2)] md:text-[length:var(--text-ultraJumbotron-3)] z-30">
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

        <div class="buttonShell">

          <img v-show="!plusButtonClicked" @click="plusButtonClicked = true" src="./assets/Plus.svg" class=".plusButton sm:w-[var(--xTiny-1-3)]"/>
          <Transition name="plusButtonAnimation">
            <img v-show="plusButtonClicked" id="plusButton" src="./assets/Plus.svg" class="plusButton sm:w-[var(--xTiny-1-3)]"/>
          </Transition>

          <Transition name="textFrameAnimation">
            <article v-show="plusButtonComplete" class="textFrame sm:w-[var(--xTiny-1-3)] sm:h-[var(--xTiny-1-3)] bg-white z-70">

            </article>
          </Transition>

        </div>
        
        <p class="details text-white align-center sm:text-[length:var(--text-widget-3)] md:text-[length:var(--text-article-3)]">more details</p>
      
      </div>

    </article>
  </section>-->
</template>

<style scoped>

.page{
  display: grid;
  /*width: 100%;
  height: 100%;*/
  /*grid-template-columns: repeat(22, 1fr);
  grid-template-rows: repeat(22, 1fr);*/
  /*grid-template-columns: 1fr var(--loMed-1-3) var(--tiny-1-4) var(--loMed-2-4) var(--loMed-2-4) 1fr;
  grid-template-rows: 1fr var(--tiny-1-4) var(--tiny-2-5) var(--loMed-2-3) var(--tiny-1-6) 1fr;*/
  background-image: url('./assets/background.jpg');
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
}

  /*.page{
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr var(--loMed-2-3) auto 1fr;
    background-image: url('./assets/background.jpg');
  }*/

  /*.sidebar{
    /*grid-area:1/1/23/6;*/
    /*min-width: var(--xSmall-1-3);
  }*/

  /*.sidebar{
    grid-area: 1/1/5/2;
    display: block;
  }*/

  .titleArea{
    grid-area: 3/2/4/5;
    display: grid;
    grid-template-columns: var(--xTiny-2-4) auto 1fr;
    grid-template-rows: auto 1fr;
  }
  
  .title{
    font-family: 'Prata', serif;
    pointer-events: none;
   /* grid-area: 1/1/2/3;*/
    align-self: left;
    width: min-content;
    text-align: left;
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

  /*.title{
    font-family: 'Prata', serif;
    pointer-events: none;
    grid-area: 1/1/2/3;
    align-self: left;
    width: min-content;
    text-align: left;
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
  }*/

  .plusBtnContainer{
    display: grid;
    grid-area: 2/2/3/3;
    justify-self: left;
    align-self: start;
    column-gap: var(--micro-1-5);
    grid-template-columns: var(--xTiny-1-3) auto;
  }
  .buttonShell{
    grid-area: 1/1/2/2;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }

  .plusButton{
    /*grid-area: 1/1/2/2;*/
    /*grid-row: 1;
    grid-column: 1;*/
    /*justify-self: left;*/
    /*justify-self: flex-start;*/
    align-self: end;
  }
  .textFrame{
    display: block;
    position: relative;
    top: var(--hiMed-1-5);
    /*grid-area:1/1/2/2;*/
    border-radius: 50%;
    z-index: 100;
    /*grid-row: 1;
    grid-column: 1;*/
    justify-self: flex-start;
    position:absolute;
    -webkit-transform-origin: bottom left;
  }

  .details{
    grid-area: 1/2/2/3;
    justify-self: flex-end;
    text-align: right;
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

  @keyframes textFrameAnimationSequence{
    from {
      border-radius: 50%;
      /*width: var(--xTiny-1-3);
      height: var(--xTiny-1-3);*/
    }
    to {
      border-radius: 0;
      width: var(--hiMed-1-9);
      height: var(--hiMed-2-5);
      transform: translateY(-10vh);
      transform: translateX(3vw);
      /*top: 2px;*/
    }
  }

  .textFrameAnimation-enter-active{
    animation: textFrameAnimationSequence .5s ease-out forwards;
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