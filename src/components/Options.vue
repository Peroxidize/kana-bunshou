<script setup lang="ts">
import { Card } from "@/components/ui/card";
import KanaRow from "@/components/KanaRow.vue";
import { hiraArr, hiraCombArr, kataArr, kataCombArr } from "@/chars";
</script>

<template>
  <div>
    <h2 class="bg-muted -mb-px border border-[#ffffff1a] p-4 text-xl font-bold">
      Options
    </h2>
    <Card class="space-y-4 rounded-none! px-8">
      <KanaRow name="Hiragana" :kanaRow="hiraArr" />
      <KanaRow name="Hiragana Combinations" :kanaRow="hiraCombArr" />
      <KanaRow name="Katakana" :kanaRow="kataArr" />
      <KanaRow name="Katakana Combinations" :kanaRow="kataCombArr" />
    </Card>
  </div>
</template>
