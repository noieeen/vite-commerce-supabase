<template>
  <div class="">
    <Combobox v-model="propsSelected" @update:model-value="(value:comboBoxData)=> emit('update',value)" by="id">
      <div class="relative mt-1">
        <div
          class="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm"
        >
          <ComboboxInput
            class="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
            :displayValue="(propsData:any) => propsData.value"
            @change="query = $event.target.value"
          />
          <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
          </ComboboxButton>
        </div>
        <TransitionRoot leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0" @after-leave="query = ''">
          <ComboboxOptions
            class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            <div v-if="filteredData.length === 0 && query !== ''" class="relative cursor-default select-none py-2 px-4 text-gray-700">
              Nothing found.
            </div>

            <ComboboxOption v-for="(item, index) in filteredData" as="template" :key="index" :value="item" v-slot="{ propsSelected, active }">
              <li
                class="relative cursor-default select-none py-2 pl-10 pr-4"
                :class="{
                  'bg-primary text-white': active,
                  'text-gray-900': !active,
                }"
              >
                <span class="block truncate" :class="{ 'font-medium': propsSelected, 'font-normal': !propsSelected }">
                  {{ item.value }}
                </span>
                <span
                  v-if="propsSelected"
                  class="absolute inset-y-0 left-0 flex items-center pl-3"
                  :class="{ 'text-white': active, 'text-primary': !active }"
                >
                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                </span>
              </li>
            </ComboboxOption>
          </ComboboxOptions>
        </TransitionRoot>
      </div>
    </Combobox>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { Combobox, ComboboxInput, ComboboxButton, ComboboxOptions, ComboboxOption, TransitionRoot } from '@headlessui/vue';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid';

interface comboBoxData {
  id: number;
  value: string;
}

interface Props {
  selected?: comboBoxData;
  data?: comboBoxData[];
  class?: string;
}

const props = withDefaults(defineProps<Props>(), { class: '' });
const emit = defineEmits(['update']);

const query = ref<string>('');
const propsSelected = ref<comboBoxData>();
const propsData = ref<comboBoxData[]>([]);
const comboboxConst = { id: 0, value: 'Select' } as comboBoxData;

propsSelected.value = comboboxConst;
propsData.value.push(comboboxConst);

watch(
  () => {
    props.selected;
  },
  () => {
    if (props.selected) {
      propsSelected.value = props.selected;
    }
  },
  { immediate: true, deep: true },
);

watch(
  () => {
    props.data;
  },
  () => {
    if (props.data?.length) {
      propsData.value = props.data;
    }
  },
  { immediate: true, deep: true },
);

const filteredData = computed(() =>
  query.value === ''
    ? propsData.value
    : propsData.value.filter((item) => item.value.toLowerCase().replace(/\s+/g, '').includes(query.value.toLowerCase().replace(/\s+/g, ''))),
);
</script>
