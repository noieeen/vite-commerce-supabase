<!--
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="product in products" :key="product.id" class="group relative">
          <product-item :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductItem from './components/ProductItem.vue';
// components
import BaseTable from '@/components/table/Table.vue';
import Pagination from '@/components/pagination/Pagination.vue';
import { onMounted, ref } from 'vue';
import productModel from '@/models/product/product';
const { fetchProducts } = productModel();

interface Product {
  id: number;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  price: string | number;
  color: string;
}

const products = ref<Product[]>([]);

async function getProducts() {
  const tempProducts = await fetchProducts('', 1, 1000);
  tempProducts.productList.map((item: any) => {
    products.value.push({
      id: item.id,
      name: item.name,
      href: item.id,
      imageSrc: item.image_url,
      imageAlt: item.description,
      price: item.price,
      color: '',
    });
  });
}

onMounted(async () => {
  await getProducts();
});

</script>
