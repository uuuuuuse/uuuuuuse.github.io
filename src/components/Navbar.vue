<template>
  <header
    ref="navbar"
    class="z-40 w-full h-14 flex justify-between items-center"
    p="x-4 md:x-5"
    font="ui"
    bg="white dark:gray-700"
    :class="[
      isFixed &&
        'fixed -top-14 left-0 transition duration-300 border-b border-gray-200 dark:border-gray-600',
      isVisible && 'translate-y-full shadow-nav',
      !isFixed && !isVisible && 'absolute top-0 left-0'
    ]"
  >
    <router-link
      font="bold"
      un-text="gray-600 hover:black dark:(gray-300 hover:white)"
      to="/"
    >
      <span text="lg">$ cd /home/</span>
      <div i-fa6-solid:angle-right class="prompt inline-block" />
      <span class="blink">_</span>
    </router-link>
    <nav class="flex space-x-4">
      <router-link to="/projects" title="Projects" class="nav-item">
        <div i-ph:rocket-launch-duotone class="md:hidden" />
        <span class="lt-md:hidden">项目</span>
      </router-link>

      <router-link to="/posts" title="Blog" class="nav-item">
        <div i-majesticons:paper-fold-text-line class="md:hidden" />
        <span class="lt-md:hidden">博客</span>
      </router-link>

      <router-link to="/resume" class="nav-item">
        <!-- <div i-majesticons:paper-fold-text-line class="md:hidden" /> -->
        <span class="lt-md:hidden">简历</span>
      </router-link>

      <button
        class="nav-item !outline-none"
        title="Toggle dark"
        @click="toggleDark()"
      >
        <div i="carbon-sun dark:carbon-moon" />
      </button>

      <slot />
    </nav>
  </header>
</template>

<script setup lang="ts">
import { toggleDark } from "~/composables/dark";
import { isClient } from "~/utils";

const navbar = ref<HTMLElement | null>(null);
const isFixed = ref(false);
const isVisible = ref(false);

if (isClient) {
  const { y, directions } = useScroll(document);

  watch(y, () => {
    // let setFix = navbar.value && y.value > navbar.value!.offsetHeight;
    // isVisible.value = setFix;
    // isFixed.value = setFix;
    if (directions.top) {
      // scrolling up
      if (y.value > 0 && isFixed.value) isVisible.value = true;
      else {
        isVisible.value = false;
        isFixed.value = false;
      }
    } else if (directions.bottom) {
      // scrolling down
      isVisible.value = false;
      if (navbar.value && y.value > navbar.value!.offsetHeight)
        isFixed.value = true;
    }
  });
}
</script>

<style scoped>
.prompt {
  vertical-align: -0.2em;
  font-size: 0.85em;
}

.blink {
  animation: blinker 1s none infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>
