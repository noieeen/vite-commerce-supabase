<template>
  <div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
    <!-- <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
      <div
        class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
      />
    </div> -->
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ isEdit ? product.name : 'Create Product' }}</h2>
      <p class="mt-2 text-lg leading-8 text-gray-600">Add Product Detail</p>
    </div>
    <div class="mx-auto mt-16 max-w-xl sm:mt-20">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">Product ID</label>
          <div class="mt-2.5">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autocomplete="given-name"
              class="input input-bordered input-primary"
              :value="product.id"
              :disabled="true"
            />
          </div>
        </div>
        <div>
          <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Product SKU</label>
          <div class="mt-2.5">
            <input
              type="text"
              name="last-name"
              id="last-name"
              autocomplete="family-name"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              :value="product.SKU"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="company" class="block text-sm font-semibold leading-6 text-gray-900">Product Name</label>
          <div class="mt-2.5">
            <input
              type="text"
              name="company"
              id="company"
              autocomplete="organization"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              :value="product.name"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Product Description</label>
          <div class="mt-2.5">
            <textarea
              name="message"
              id="message"
              rows="4"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              :value="product.description"
            />
          </div>
        </div>
        {{ product.categoryId + ':' + product.categoryDesc }}
        <base-combobox
          :selected="{ id: product.categoryId, value: product.categoryDesc }"
          :data="productCategories"
          :class="'block text-sm font-semibold leading-6 text-gray-900'"
          @update="(value)=>{
            product.categoryId = value.id;
            product.categoryDesc = value.value
          }"
        />

        <div class="sm:col-span-2">
          <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Category</label>
          <div class="mt-2.5">
            <input
              type="number"
              name="email"
              id="email"
              autocomplete="email"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              :value="product.categoryId"
            />
          </div>
        </div>
        <div>
          <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">Price</label>
          <div class="mt-2.5">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autocomplete="given-name"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              :value="product.price"
            />
          </div>
        </div>
        <div>
          <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Stock</label>
          <div class="mt-2.5">
            <input
              type="text"
              name="last-name"
              id="last-name"
              autocomplete="family-name"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              :value="product.stock"
            />
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Product Image</label>
          <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div class="text-center">
              <PhotoIcon class="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
              <div class="mt-4 flex text-sm leading-6 text-gray-600">
                <label
                  for="file-upload"
                  class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                </label>
                <p class="pl-1">or drag and drop</p>
              </div>
              <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Add More Images</label>
          <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div class="text-center">
              <PhotoIcon class="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
              <div class="mt-4 flex text-sm leading-6 text-gray-600">
                <label
                  for="file-upload"
                  class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                </label>
                <p class="pl-1">or drag and drop</p>
              </div>
              <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB, Max 4 files</p>
            </div>
          </div>
        </div>

        <!-- <div class="sm:col-span-2">
          <label for="phone-number" class="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
          <div class="relative mt-2.5">
            <div class="absolute inset-y-0 left-0 flex items-center">
              <label for="country" class="sr-only">Country</label>
              <select
                id="country"
                name="country"
                class="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              >
                <option>US</option>
                <option>CA</option>
                <option>EU</option>
              </select>
              <ChevronDownIcon class="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="tel"
              name="phone-number"
              id="phone-number"
              autocomplete="tel"
              class="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div> -->

        <SwitchGroup as="div" class="flex gap-x-4 sm:col-span-2">
          <div class="flex h-6 items-center">
            <Switch
              v-model="product.isActive"
              :class="[
                product.isActive ? 'bg-indigo-600' : 'bg-gray-200',
                'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
              ]"
            >
              <span class="sr-only">Agree to policies</span>
              <span
                aria-hidden="true"
                :class="[
                  product.isActive ? 'translate-x-3.5' : 'translate-x-0',
                  'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out',
                ]"
              />
            </Switch>
          </div>
          <SwitchLabel class="text-sm leading-6 text-gray-600">
            Set to draft
            {{ ' ' }}
          </SwitchLabel>
        </SwitchGroup>
      </div>
      <div class="mt-10">
        <div v-if="isEdit">
          <button type="submit" class="btn btn-success w-full" @click="onClickSave">Save Changes</button>
          <button class="btn btn-error w-full mt-3" @click="onClickDelete">Delete {{ product.name }}</button>
        </div>
        <button v-else type="submit" class="btn btn-primary w-full" @click="onClickSave">Create</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, onMounted } from 'vue';
import { ChevronDownIcon } from '@heroicons/vue/20/solid';
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue';

import { useRoute } from 'vue-router';
import productModel from '@/models/product/product';
import router from '@/router';
import useValidationModal from '@/components/modal/useValidateModal';
import useValidationToast from '@/components/toast/useValidateToast';
import BaseCombobox from '@/components/combobox/BaseCombobox.vue';

interface ProductImage {
  src: string;
  alt: string;
}

interface ProductBreadcrumb {
  id: number;
  name: string;
  href: string;
}

interface ProductColor {
  name: string;
  class: string;
  selectedClass: string;
}

interface ProductSize {
  name: string;
  inStock: boolean;
}
interface Product {
  id: number;
  name: string;
  SKU: string;
  price: string | number;
  stock: number;
  href: string;
  breadcrumbs: ProductBreadcrumb[];
  images: ProductImage[];
  colors: ProductColor[];
  sizes: ProductSize[];
  description: string;
  highlights: string[];
  details: string;
  isActive: boolean;
  categoryId: number;
  categoryDesc: string;
}

const { fetchProduct } = productModel();
const { openWarningModal } = useValidationModal();
const { openSuccessToast } = useValidationToast();

const productId = ref<number>(0);
const productConstant = {
  id: 0,
  name: '',
  SKU: '',
  price: '',
  stock: 0,
  href: '',
  breadcrumbs: [],
  images: [],
  colors: [],
  sizes: [],
  description: '',
  highlights: [],
  details: '',
  isActive: false,
  categoryId: 0,
  categoryDesc: '',
};

const product = ref<Product>(productConstant);
const reviews = { href: '#', average: 4, totalCount: 117 };

const isLoading = ref<boolean>(false);
const isEdit = ref<boolean>(false);
const productCategories = ref<{ id: number; value: string }[]>([
  { id: 1, value: 'Man' },
  { id: 2, value: 'Women' },
  { id: 3, value: 'Kid' },
]);

async function fetchProductDetail() {
  isLoading.value = true;
  try {
    const { product: item } = await fetchProduct(productId.value);
    if (item) {
      product.value = {
        id: item.id,
        name: item.name,
        SKU: item.SKU,
        price: item.price,
        stock: item.stock,
        href: item.id,
        breadcrumbs: [
          { id: 0, name: 'Products', href: 0 },
          { id: item.category_id, name: item.category_desc ? item.category_desc : 'category_desc', href: item.id },
        ],
        images: [],
        colors: [],
        sizes: [],
        description: item.description,
        highlights: [],
        details: item.description,
        isActive: item.is_active,
        categoryId: item.category_id,
        categoryDesc: item.category_desc,
      };
    }
  } catch (error) {}
}

function updatedProduct() {
  openSuccessToast(
    `${product.value.name} ${isEdit ? 'updated' : 'created'}.`,
    '',
    '',
    true,
    true,
    () => {},
    () => {},
    true,
    2000,
  );
}

function deleteProduct() {
  openSuccessToast(
    `${product.value.name} deleted.`,
    '',
    '',
    true,
    true,
    () => {},
    () => {},
    true,
    1500,
  );
}

function onClickSave() {
  updatedProduct();
}

function onClickDelete() {
  openWarningModal('Are you sure ?', `Delete ${product.value.name}`, 'Delete', false, false, () => {
    deleteProduct();
  });
}

onBeforeMount(() => {
  productId.value = Number(useRoute().params.productId);
  if (productId.value == 0) {
    isEdit.value = false;
  } else {
    isEdit.value = true;
  }
});

onMounted(async () => {
  if (isEdit.value) await fetchProductDetail();
});
</script>
