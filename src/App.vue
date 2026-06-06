<script setup lang="ts">
import Header from "@/components/Header.vue";
import PracticeArea from "@/components/PracticeArea.vue";
import Options from "@/components/Options.vue";
import { computed, onMounted, provide, ref, watch } from "vue";
import {
  hiraArr,
  hiraCombArr,
  kataArr,
  kataCombArr,
  type KanaRow,
} from "@/chars";

const chars: Array<KanaRow> = [
  ...hiraArr,
  ...hiraCombArr,
  ...kataArr,
  ...kataCombArr,
];
const checkBoxStates = ref<Record<string, boolean>>({});
const kana = ref<Array<{ hira: string; kata: string; roma: string }>>([]);
const score = ref<{ currentScore: number; total: number }>({
  currentScore: 0,
  total: 0,
});
const isRevealed = ref(false);

function handleCheckboxChange(
  checked: boolean | "indeterminate",
  name: string,
) {
  if (checked === "indeterminate") {
    return;
  }

  checkBoxStates.value[name] = checked;
  localStorage.setItem(name, JSON.stringify(checked));
  randomizedOrder();
}

function randomizedOrder() {
  isRevealed.value = false;
  const result: string[] = [];
  const kanaAcc: Array<{ hira: string; kata: string; roma: string }> = [];

  Object.entries(checkBoxStates.value).forEach(([key, val]) => {
    if (val) {
      result.push(key);
    }
  });

  if (result.length === 0) {
    kana.value = [];
    return;
  }

  result.forEach((val) => {
    if (val.includes("hira")) {
      const kataName = "kata" + val.slice(4);
      const index = result.indexOf(kataName);
      if (index > -1) {
        result.splice(index, 1);
        const hira = chars.find((element) => element.name === val)!.items;
        const kata = chars.find((element) => element.name === kataName)!.items;

        hira.forEach((hira, index) => {
          kanaAcc.push({
            hira: hira.kana,
            kata: kata[index].kana,
            roma: hira.roma,
          });
        });

        return;
      }
    }

    const kanaArr = chars.find((element) => element.name === val)!.items;
    const kanaType = chars.find((element) => element.name === val)!.type;
    kanaArr.forEach((val) => {
      if (kanaType.includes("hira")) {
        kanaAcc.push({ hira: val.kana, kata: "", roma: val.roma });
      } else {
        kanaAcc.push({ hira: "", kata: val.kana, roma: val.roma });
      }
    });
  });

  const filteredResult = kanaAcc.filter((kana) => kana.hira || kana.kata);
  const randomAcc: Array<{ hira: string; kata: string; roma: string }> = [];
  while (filteredResult.length > 0) {
    const randomIndex = Math.floor(Math.random() * filteredResult.length);
    randomAcc.push(filteredResult.splice(randomIndex, 1)[0]);
  }

  kana.value = randomAcc;
}

function handleAnswer(answer: "correct" | "incorrect" | "reveal") {
  if (answer === "reveal") {
    isRevealed.value = true;
    return;
  }

  if (answer === "correct") {
    score.value.currentScore++;
    score.value.total++;
    isRevealed.value = false;
  } else {
    score.value.total++;
    isRevealed.value = false;
  }

  kana.value.shift();
}

watch(
  () => kana.value.length,
  (newLength) => {
    const hasActiveFilters = Object.values(checkBoxStates.value).some(Boolean);
    if (newLength === 0 && hasActiveFilters) {
      randomizedOrder();
    }
  },
);

const head = computed(() => {
  return kana.value[0];
});

provide("updateCheckbox", handleCheckboxChange);
provide("checkBoxStates", checkBoxStates);

onMounted(() => {
  randomizedOrder();
});
</script>

<template>
  <main class="mx-auto my-12 max-w-5xl space-y-8 px-4">
    <Header :currentScore="score.currentScore" :total="score.total" />
    <PracticeArea
      :hira="head?.hira ?? null"
      :kata="head?.kata ?? null"
      :roma="head?.roma ?? null"
      :isRevealed="isRevealed"
      @answer-submitted="handleAnswer"
    />
    <Options />
  </main>
</template>
