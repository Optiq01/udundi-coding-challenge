<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <section class="page bg-cover bg-center">
    <div class="sidebar bg-burgundy sm:w-[var(--xSmall-1-3)] md:w-[var(--small-2-4)] lg:w-[var(--loMed-2-5)] z-10"></div>
  </section>
</template>

<style scoped>
  .page{
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr var(--loMed-1-3) var(--hiMed-2-3);
    background-image: url('./assets/background.jpg');
  }

  .sidebar{
    grid-area: 1/1/4/2;
    display: block;
    --baseSize-w: var(--loMed-1-3);
  }
</style>
