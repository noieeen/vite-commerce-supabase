<template>
  <div @click="onClickSelect(product.id)">
    <div class="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
      <span v-if="!url" class="indicator-item indicator-center indicator-middle badge badge-secondary">Loading...</span>
      <img v-if="url" :src="url" alt="Product Image" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
    </div>
    <div class="mt-4 flex justify-between">
      <div>
        <h3 class="text-sm text-gray-700">
          <span aria-hidden="true" class="absolute inset-0" />
          {{ product.name }}
        </h3>
        <p class="mt-1 text-sm text-gray-500">{{ product.category_desc }}</p>
      </div>
      <p class="text-sm font-medium text-gray-900">{{ product.price ? Intl.NumberFormat('en-US').format(product.price) : 0 }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router';
import productModel from '@/models/product/product';
import { ref, watch } from 'vue';
interface Props {
  product: Product.Item;
}

const props = defineProps<Props>();
const url = ref<string>('');

const { getProductImageUrl } = productModel();

const productImg = async () => {
  if (props.product.image_url) {
    url.value = (await getProductImageUrl(props.product.image_url)).url;
  }
};

function onClickSelect(productId: number) {
  router.push({ path: '/product-detail/' + productId });
}

watch(
  () => {
    props.product;
  },
  async () => {
    await productImg();
  },
  { deep: true, immediate: true },
);
</script>

<style scoped></style>
