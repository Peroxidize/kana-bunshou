<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { type KanaRow } from "@/chars";
import { onMounted, ref } from "vue";

const props = defineProps({
  name: String,
  kanaRow: Array<KanaRow>,
});

const checkBoxStates = ref<Record<string, boolean>>({});

function checkAll() {
  if (props.kanaRow) {
    props.kanaRow.forEach((row) => {
      checkBoxStates.value[row.name] = true;
      handleCheckboxChange(true, row.name);
    });
  }
}

function uncheckAll() {
  if (props.kanaRow) {
    props.kanaRow.forEach((row) => {
      checkBoxStates.value[row.name] = false;
      handleCheckboxChange(false, row.name);
    });
  }
}

function handleCheckboxChange(
  checked: boolean | "indeterminate",
  name: string,
) {
  if (checked === "indeterminate") {
    return;
  }

  localStorage.setItem(name, JSON.stringify(checked));
}

onMounted(() => {
  if (props.kanaRow) {
    props.kanaRow.forEach((row) => {
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
    <div class="flex justify-between">
      <h3 class="text-lg font-semibold">{{ name }}</h3>
      <div class="flex items-center">
        <Button variant="link" @click="checkAll">check all</Button>
        <Separator orientation="vertical" class="max-h-4" />
        <Button variant="link" @click="uncheckAll">uncheck all</Button>
      </div>
    </div>

    <Separator class="mb-4" />

    <div class="flex flex-row">
      <template v-for="item in kanaRow">
        <div
          class="-mr-px flex flex-col items-center justify-center border
            bg-neutral-800"
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
                (checked) => handleCheckboxChange(checked, item.name)
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
