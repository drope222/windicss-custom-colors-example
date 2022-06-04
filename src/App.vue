<script setup lang="ts">
import { useDark } from './composables/useDark';
const { setDark, isDark } = useDark();
</script>

<template>
  <div class="example">
    <button @click="setDark" class="btn">setDark</button>
    <p class="pt-2">isDark: {{ isDark }}</p>
    <div class="dark bg-base-200/30 p-4 mt-5 rounded-lg">
      Example bg opacity
    </div>
  </div>
</template>
<style>
.example {
  @apply w-screen h-screen bg-base-100 p-5 text-[#4C566A] dark:text-[#ECEFF4];
}
.btn {
  @apply bg-[#88C0D0] bg-opacity-90 hover:bg-[#88C0D0] text-[#3B4252] font-medium p-2 rounded-md;
}
</style>
