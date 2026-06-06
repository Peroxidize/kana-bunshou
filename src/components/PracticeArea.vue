<script setup lang="ts">
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

defineProps<{
  hira: String | null;
  kata: String | null;
  roma: String | null;
  isRevealed: Boolean;
}>();
const emit = defineEmits<{
  (e: "answer-submitted", result: "correct" | "incorrect" | "reveal"): void;
}>();
</script>

<template>
  <Card
    class="flex min-h-120 flex-col items-center justify-between rounded-none!
      px-8 py-4!"
  >
    <h3 class="text-muted-foreground text-2xl font-semibold">
      <span v-if="hira && !kata"> Write Hiragana for </span>
      <span v-if="!hira && kata"> Write Katakana for </span>
      <span v-if="hira && kata"> Write Hiragana and Katakana for </span>
      <span v-if="!hira && !kata"> Please select a column</span>
    </h3>

    <div class="flex gap-16">
      <span v-if="!isRevealed && (hira || kata)" class="text-8xl">{{
        roma
      }}</span>
      <span v-if="isRevealed && hira" class="font-kanji text-[200px]">{{
        hira
      }}</span>
      <span v-if="isRevealed && kata" class="font-kanji text-[200px]">{{
        kata
      }}</span>
    </div>

    <div class="flex gap-4">
      <Button
        v-if="!isRevealed && (hira || kata)"
        class="rounded-none!"
        @click="emit('answer-submitted', 'reveal')"
      >
        Reveal
      </Button>

      <Button
        v-if="isRevealed"
        class="rounded-none!"
        variant="destructive"
        @click="emit('answer-submitted', 'incorrect')"
      >
        Incorrect
      </Button>
      <Button
        v-if="isRevealed"
        class="rounded-none!"
        @click="emit('answer-submitted', 'correct')"
      >
        Correct
      </Button>
    </div>
  </Card>
</template>
