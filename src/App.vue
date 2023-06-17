<script setup lang="ts">
  import {ref} from 'vue';
  import type { Ref } from 'vue';
  import {onMounted} from 'vue';
  import {animate} from 'motion';

  let plusButtonComplete: Ref<boolean> = ref(false);
  let plusButtonClicked: Ref<boolean> = ref(false);
  let titleAnimationComplete: Ref<boolean> = ref(false);
  let textFrameAnimationComplete: Ref<boolean> = ref(false);
  let closeTextFrameClicked: Ref<boolean> = ref(false);

  const plusButtonControl = ()=>{
    plusButtonClicked.value = true;
    plusButtonComplete.value = true;
    document.getElementById('textContainer')!.style.pointerEvents = 'auto';
    setTimeout(() => {
      plusButtonClicked.value = false;
    }, 1000)
  }
  
  const toggleBack = ()=>{
    closeTextFrameClicked.value = true;
    setTimeout(() => {
      closeTextFrameClicked.value = false;
      plusButtonComplete.value = false;
    }, 100)
    document.getElementById('textContainer')!.style.pointerEvents = 'none';
    console.log(plusButtonClicked.value, closeTextFrameClicked.value);
  }
</script>

<template>
  <section class="page bg-cover w-full h-full grid-cols-12 grid-rows-6">

    <div class="bg-burgundy
              row-start-1
              row-span-6
              col-start-1
              sm:col-end-4"
    ></div>

    <h1 class="title
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
        :class="{titleAnimationLeave : plusButtonComplete, titleAnimationEnter: closeTextFrameClicked}"
    >
      Explore
    </h1>

    <img class="
               .plusButton
               sm:w-[var(--xTiny-1-3)]
               col-start-3
               col-end-4
               row-start-5
               row-end-6
               "
      :class="{plusButtonAnimation:plusButtonClicked}"
      @click="plusButtonControl"
      src="./assets/Plus.svg"
    />
    <p class="
        details
        text-white
        align-center
        sm:text-[length:var(--text-widget-3)]
        md:text-[length:var(--text-article-3)]
        col-start-3
        col-end-9
        row-start-5
        row-end-6"
    >
      more details
    </p>

    <section v-show="plusButtonComplete" 
            class="
              textContainer
              col-start-3
              sm:col-end-11
              md:col-end-10
              lg:col-end-6
              row-start-2
              row-end-6"
              id="textContainer"
    >
  
      <article
          id="textFrame"
          class="textFrame
                sm:w-[var(--xTiny-1-3)]
                sm:h-[var(--xTiny-1-3)]
                bg-white z-70"
          :class="{textFrameEnterAnimation : plusButtonComplete, textFrameLeaveAnimation : closeTextFrameClicked}"
        >
        
          <article id="textContent" :class="{contentEnterAnimation: plusButtonComplete}">
            <p @click="toggleBack" class="closeButton text-burgundy text-[length:var(--text-article-3)]">X</p>

            <article class="contentShell">
              <h2 class="contentTitle
                        text-burgundy
                         text-[length:var(--text-title-3)]"
              >
                Explore
              </h2>

              <p class="sm:text-[length:var(--text-)] lg:text-[length:var(--text-caption-1)]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam vestibulum morbi blandit cursus risus at. Fringilla urna porttitor rhoncus dolor. Eu feugiat pretium nibh ipsum consequat nisl vel. Cras adipiscing enim eu turpis egestas pretium aenean. Id faucibus nisl tincidunt eget nullam non nisi. Mauris pellentesque pulvinar pellentesque habitant morbi tristique. Mi in nulla posuere sollicitudin. Ultrices tincidunt arcu non sodales neque. Purus in mollis nunc sed id semper risus in hendrerit.
              </p>

              <button class="
                            readMoreButton
                            my-5
                            text-[length:var(--text-widget-1)]
                            text-white
                            tracking-widest"
              >
                READ MORE

              </button>

            </article>

          </article>

        </article>

    </section>
  </section>
</template>

<style scoped>

.page{
  display: grid;
  background-image: url('./assets/background.jpg');
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
}
  
  .title{
    font-family: 'Prata', serif;
    pointer-events: none;
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
    transition: background-position-x;
  }

  @keyframes titleLeaveAnimationSequence{
    from {
      background-position-x: 50%;
    }
    to {
      background-position-x: -700%;
    }
  }
  
  @keyframes titleEnterAnimationSequence{
    from {
      background-position-x: -700%;
    }
    to {
      background-position-x: 50%;
    }
  }
  .titleAnimationLeave{
    animation: titleLeaveAnimationSequence .5s forwards;
  }
  
  .titleAnimationEnter{
    animation: titleEnterAnimationSequence .5s forwards;
  }

  @keyframes contentEnterAnimationSequence{
    0% {
      transform: translateX(-200%);
      opacity: 0;
    }

    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .contentEnterAnimation{
    animation: contentEnterAnimationSequence .3s ease-in forwards;
  }

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
    grid-row: 1;
    grid-column: 1;
  }

  @keyframes plusButtonAnimationSequence{
    0% {transform: scale(1)}
    70% {transform: scale(0.4)}
    98% {transform: scale(1.1)}
    100% {transform: scale(1)}
  }
  .plusButtonAnimation{
    animation: plusButtonAnimationSequence .3s forwards;
  }

  .textContainer{
    position: relative;
    display: block;
    overflow: hidden;

  }
  .textFrame{
    grid-area: 5/3/6/4;
    display: grid;
    position: relative;
    top: 50vh;
    border-radius: 50%;
    z-index: 100;
    -webkit-transform-origin: bottom left;
    transform-origin: bottom left;
    overflow-y: scroll;
  }

  @keyframes textFrameEnterAnimationSequence{
    0% {
      border-radius: 50%;
    }
    100% {
      border-radius: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }

  .textFrameEnterAnimation{
    animation: textFrameEnterAnimationSequence .3s ease-out forwards;
  }

  .textFrameLeaveAnimation{
    animation: textFrameLeaveAnimationSequence .3s ease-out forwards;
  }

  @keyframes textFrameLeaveAnimationSequence{
    0%{
      border-radius: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
    100%{
      border-radius: 50%;
      top: 50vh;
      width: var(--xTiny-1-3);
      height: var(--xTiny-1-3);
    }
  }

  .textContent{
    display: grid;
    grid-auto-flow: column;
  }

  .closeButton{
    justify-self: right;
    text-align: right;
    margin-right: 1rem;
    cursor: pointer;
  }

  .contentTitle{
    font-family: 'Prata', serif;
  }

  .contentShell{
    width: 77%;
    margin: 0 auto;
  }
  .readMoreButton{
    display: block;
    padding: var(--micro-1-1) var(--xTiny-1-3);
    background-image: linear-gradient(90deg,
    rgba(97, 24, 24, 1),
    rgba(163, 103, 84, 1));
  }

  .details{
    text-align: left;
    margin-left: 3rem;
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