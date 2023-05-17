<template>
  <div class="overflow-x-auto">
    <table class="table w-full">
      <!-- head -->
      <thead>
        <tr>
          <th>#</th>
          <th v-for="(header, index) in tableHeader" :key="index">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <!-- row -->
        <tr v-for="(data, index) in tableData" :key="index" @click="onClickTable(data.key)">
          <th>{{ index + 1 }}</th>
          <td v-for="(cell, cellIndex) in data.value" :key="cellIndex">{{ cell }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref, watch } from 'vue';
interface Props {
  header?: [];
  data: [];
}

const props = defineProps<Props>();

const tableHeader = ref<any>([]);
const tableData = ref<any>([]);

function loadData() {
  console.log(props.data);
  if (props.data.length > 0) {
    // set header
    const header_temp = props.data.map((key,value)=>Object.keys(key));
    tableHeader.value = header_temp[0]


    // set data
    tableData.value = props.data.map((value:any, index) => {
      return { key: value.id as number, value: Object.values(value) };
    });
  }
}

function onClickTable(value: any) {
  console.log(value);
}

watch(
  () => {
    props.data;
  },
  () => {
    loadData();
  },
  { deep: true, immediate: true },
);
</script>

<style scoped></style>
