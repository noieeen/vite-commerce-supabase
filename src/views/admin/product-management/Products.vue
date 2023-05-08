@@ -2,6 +2,20 @@
<template>
  <div>
    <div><h5>Product Management</h5></div>
    <div>
      <base-table :data="tableData" />
      <pagination />
    </div>
  </div>
</template>

<script setup lang="ts">
// components
import BaseTable from '@/components/table/Table.vue';
import Pagination from '@/components/pagination/Pagination.vue';
import { onMounted, ref } from 'vue';
import productModel from '@/models/product/product';
const { fetchProducts } = productModel();

const products = ref<any>();
const tableData = ref<[]>([]);

async function getProducts() {
  products.value = await fetchProducts('', 1, 10);
  tableData.value = products.value.productList;
  console.log(tableData.value);
}

onMounted(async () => {
  await getProducts();
});
</script>

<style scoped lang="scss"></style>
