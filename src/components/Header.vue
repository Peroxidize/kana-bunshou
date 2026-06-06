<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { Card } from "@/components/ui/card";

defineProps({
  currentScore: Number,
  total: Number,
});

const time = ref(0);
let timer: ReturnType<typeof setInterval> | null = null;

const formattedTime = computed(() => {
  const minutes = Math.floor(time.value / 60);
  const seconds = time.value % 60;

  const mm = String(minutes).padStart(2, "0");
  const ss = String(seconds).padStart(2, "0");

  return `${mm}:${ss}`;
});

onMounted(() => {
  timer = setInterval(() => {
    time.value = time.value + 1;
  }, 1000);
});

onUnmounted(() => {
  if (timer) {
    clearInterval(timer);
  }
});
</script>

<template>
  <Card
    class="flex flex-col items-center justify-between rounded-none! px-8 py-4!
      sm:flex-row"
  >
    <h3 class="text-2xl font-semibold">Kana Bunshou</h3>

    <div class="flex gap-6">
      <div class="min-w- flex flex-col items-center">
        <span class="text-muted-foreground text-sm tracking-widest uppercase"
          >Session</span
        >
        <span class="font-mono">{{ formattedTime }}</span>
      </div>

      <div class="flex flex-col items-center">
        <span class="text-muted-foreground text-sm tracking-widest uppercase"
          >Score</span
        >
        <span class="font-mono">{{ currentScore }} / {{ total }}</span>
      </div>
    </div>
  </Card>
</template>
