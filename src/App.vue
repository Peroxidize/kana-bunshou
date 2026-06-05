<script setup lang="ts">
import Header from "@/components/Header.vue";
import PracticeArea from "@/components/PracticeArea.vue";
import Options from "@/components/Options.vue";
import { provide, ref } from "vue";

const checkBoxStates = ref<Record<string, boolean>>({});

function handleCheckboxChange(
  checked: boolean | "indeterminate",
  name: string,
) {
  if (checked === "indeterminate") {
    return;
  }

  checkBoxStates.value[name] = checked;
  localStorage.setItem(name, JSON.stringify(checked));
}

provide("updateCheckbox", handleCheckboxChange);
provide("checkBoxStates", checkBoxStates);
</script>

<template>
  <main class="mx-auto my-12 max-w-5xl space-y-8 px-4">
    <Header />
    <PracticeArea />
    <Options />
  </main>
</template>
