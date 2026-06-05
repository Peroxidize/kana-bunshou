<script setup lang="ts">
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
</script>

<template>
  <Card
    class="flex min-h-100 flex-col items-center justify-between rounded-none!
      px-8 py-4!"
  >
    <h3 class="text-muted-foreground text-2xl font-semibold">
      Write Hiragana of
    </h3>
    <span class="text-6xl">sha</span>
    <Button class="rounded-none!">Reveal</Button>
  </Card>
</template>
