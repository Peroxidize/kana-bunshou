<script setup lang="ts">
import Header from "@/components/Header.vue";
import PracticeArea from "@/components/PracticeArea.vue";
import Options from "@/components/Options.vue";
import { hiraArr, hiraCombArr, kataArr, kataCombArr } from "@/chars";
</script>

<template>
  <main class="mx-auto my-12 max-w-5xl space-y-8 px-4">
    <Header />
    <PracticeArea />
    <Options
      :hiraArr="hiraArr"
      :hiraCombArr="hiraCombArr"
      :kataArr="kataArr"
      :kataCombArr="kataCombArr"
    />
  </main>
</template>
