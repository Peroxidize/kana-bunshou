<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { type KanaRow } from "@/chars";
import { inject, onMounted, ref, type Ref } from "vue";

const { kanaRow, name} = defineProps({
  name: String,
  kanaRow: Array<KanaRow>,
});
const updateCheckbox = inject<
  (checked: boolean | string, name: string) => void
>("updateCheckbox", () => {});
const checkBoxStates = inject<Ref<Record<string, boolean>>>(
  "checkBoxStates",
  ref<Record<string, boolean>>({}),
);

function checkAll() {
  if (kanaRow) {
    kanaRow.forEach((row) => {
      checkBoxStates.value[row.name] = true;
      updateCheckbox(true, row.name);
    });
  }
}

function uncheckAll() {
  if (kanaRow) {
    kanaRow.forEach((row) => {
      checkBoxStates.value[row.name] = false;
      updateCheckbox(false, row.name);
    });
  }
}

onMounted(() => {
  if (kanaRow) {
    kanaRow.forEach((row) => {
      const result = localStorage.getItem(row.name);
      if (result) {
        checkBoxStates.value[row.name] = JSON.parse(result);
      }
    });
  }
});
</script>

<template>
  <div>
    <div
      class="flex flex-col items-center gap-2 sm:flex-row sm:justify-between
        sm:gap-0"
    >
      <h3 class="text-lg font-semibold">{{ name }}</h3>
      <div class="flex flex-col gap-0 sm:flex-row sm:items-center">
        <Button variant="link" @click="checkAll">check all</Button>

        <Separator orientation="vertical" class="hidden sm:block sm:min-h-4" />

        <Button variant="link" @click="uncheckAll">uncheck all</Button>
      </div>
    </div>

    <Separator class="mb-4" />

    <div class="flex flex-row flex-wrap">
      <template v-for="item in kanaRow">
        <div
          class="-mr-px flex shrink-0 flex-col items-center justify-center
            border bg-neutral-800"
        >
          <div
            class="flex w-full items-center justify-center border-b
              bg-neutral-800 px-4 py-2"
          >
            <Checkbox
              :id="item.name"
              :value="item.name"
              v-model="checkBoxStates[item.name]"
              @update:modelValue="
                (checked) => updateCheckbox(checked, item.name)
              "
            />
          </div>
          <div class="flex flex-col">
            <template v-for="kana in item.items">
              <div
                class="mt-2 flex h-16 flex-col items-center justify-center
                  px-2.5"
              >
                <span class="text-xl font-medium">{{ kana.kana }}</span>
                <span>{{ kana.roma }}</span>
              </div>
            </template>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
