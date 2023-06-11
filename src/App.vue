<script setup lang="ts">
</script>

<template>
  <section class="page bg-cover bg-center">
    <div class="sidebar bg-burgundy sm:w-[var(--tiny-2-3)] md:w-[var(--xSmall-2-4)] lg:w-[var(--loMed-1-5)] z-10"></div>
    <article class="titleArea z-20 w-full h-full">
      <h1 class="title align-middle sm:text-[length:var(--text-ultraJumbotron-1)] md:text-[length:var(--text-ultraJumbotron-2)] text-white">Explore</h1>
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
    grid-template-rows: auto, 1fr;
    place-items: center;
    font-family: 'Prata', serif;
  }

  .title{
    grid-area: 1/2/2/3;
  }

  @media(min-width: 1014px){
    .titleArea{
      grid-template-columns: var(--small-2-4) auto 1fr;
    }
  }
</style>
