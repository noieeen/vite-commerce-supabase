<template>
  <div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ isEdit ? product.name : 'Create Product' }}</h2>
      <p class="mt-2 text-lg leading-8 text-gray-600">Add Product Detail</p>
    </div>
    <div class="mx-auto mt-16 max-w-xl sm:mt-20">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label for="pid" class="block text-sm font-semibold leading-6 text-gray-900">Product ID</label>
          <div class="mt-2.5">
            <input
              type="text"
              name="pid"
              id="pid"
              autocomplete="pid"
              class="input input-bordered input-primary"
              v-model="product.id"
              :disabled="true"
            />
          </div>
        </div>
        <div>
          <label for="sku" class="block text-sm font-semibold leading-6 text-gray-900">Product SKU</label>
          <div class="mt-2.5">
            <input
              type="text"
              name="sku"
              id="sku"
              autocomplete="sku"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              v-model="product.SKU"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="p-name" class="block text-sm font-semibold leading-6 text-gray-900">Product Name</label>
          <div class="mt-2.5">
            <input
              type="text"
              name="p-name"
              id="p-name"
              autocomplete="p-name"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              v-model="product.name"
              placeholder="Product Name"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="p-desc" class="block text-sm font-semibold leading-6 text-gray-900">Product Description</label>
          <div class="mt-2.5">
            <textarea
              name="p-desc"
              id="p-desc"
              rows="4"
              autocomplete="p-desc"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              v-model="product.description"
              placeholder="Product Description"
            />
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="p-category" class="block text-sm font-semibold leading-6 text-gray-900">Category</label>
          <div class="mt-2.5">
            <base-combobox
              :selected="{ id: product.category_id, value: product.category_desc }"
              :data="productCategories"
              :class="'block text-sm font-semibold leading-6 text-gray-900'"
              name="p-category"
              id="p-category"
              @update="dropdownUpdate"
            />
          </div>
        </div>
        <div>
          <label for="p-price" class="block text-sm font-semibold leading-6 text-gray-900">Price</label>
          <div class="mt-2.5">
            <input
              type="number"
              name="p-price"
              id="p-price"
              autocomplete="p-price"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              v-model="product.price"
              placeholder="e.g. 1,000"
            />
          </div>
        </div>
        <div>
          <label for="p-stock" class="block text-sm font-semibold leading-6 text-gray-900">Stock</label>
          <div class="mt-2.5">
            <input
              type="number"
              name="p-stock"
              id="p-stock"
              autocomplete="p-stock"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              v-model="product.stock"
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
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    class="sr-only"
                    @change="onChangeProductUpload"
                    accept="image/*"
                    :disabled="loadingUpload"
                  />
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
              v-model="product.is_active"
              :class="[
                !product.is_active ? 'bg-indigo-600' : 'bg-gray-200',
                'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
              ]"
            >
              <span class="sr-only">Agree to policies</span>
              <span
                aria-hidden="true"
                :class="[
                  !product.is_active ? 'translate-x-3.5' : 'translate-x-0',
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
          <button type="submit" class="btn btn-success w-full" :disabled="isLoading" @click="onClickSave">Save Changes</button>
          <button class="btn btn-error w-full mt-3" :disabled="isLoading" @click="onClickDelete">Delete {{ product.name }}</button>
        </div>
        <button v-else type="submit" class="btn btn-primary w-full" :disabled="isLoading" @click="onClickSave">Create</button>
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
import categoryModel from '@/models/category/category';

// interface ProductImage {
//   src: string;
//   alt: string;
// }

// interface ProductBreadcrumb {
//   id: number;
//   name: string;
//   href: string;
// }

// interface ProductColor {
//   name: string;
//   class: string;
//   selectedClass: string;
// }

// interface ProductSize {
//   name: string;
//   inStock: boolean;
// }
// interface Product {
//   id: number;
//   name: string;
//   SKU: string;
//   price: number | null;
//   stock: number;
//   href: string;
//   breadcrumbs: ProductBreadcrumb[];
//   images: ProductImage[];
//   colors: ProductColor[];
//   sizes: ProductSize[];
//   description: string;
//   highlights: string[];
//   details: string;
//   isActive: boolean;
//   categoryId: number;
//   categoryDesc: string;
// }

const { fetchProduct, fetchRunningId, uploadProductImage, createProduct, updateProduct } = productModel();
const { fetchAllCategories } = categoryModel();
const { openWarningModal, openSuccessModal } = useValidationModal();
const { openSuccessToast } = useValidationToast();

const productId = ref<number>(0);
const productConstant: Product.Detail = {
  id: 0,
  name: '',
  SKU: '',
  price: 0,
  stock: 0,
  image_url: '',
  description: '',
  category_desc: '',
  is_active: false,
  is_delete: false,
  category_id: 0,
};

const product = ref<Product.Detail>(productConstant);
// const reviews = { href: '#', average: 4, totalCount: 117 };

const isLoading = ref<boolean>(false);
const loadingUpload = ref<boolean>(false);

const isEdit = ref<boolean>(false);
const productCategories = ref<{ id: number; value: string }[]>([]);

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
        image_url: item.image_url,
        description: item.description ?? '',
        is_active: item.is_active,
        category_id: item.category_id,
        category_desc: item.category_desc,
      };
    }
  } catch (error) {}
  isLoading.value = false;
}

async function fetchCategory() {
  const { data } = await fetchAllCategories();
  if (data) {
    productCategories.value = data.map((item: any) => {
      return { id: item.id, value: item.name };
    });
  }
}

async function getRunningId() {
  let { runningId } = await fetchRunningId();
  if (runningId) {
    product.value.id = runningId;
    product.value.SKU = `product-${runningId < 10 ? `00` + runningId : runningId < 100 ? `0` + runningId : runningId}`;
  }
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

async function onClickSave() {
  isLoading.value = true;
  if (isEdit.value) {
    await updatedProduct();
  } else {
    await addNewProduct();
  }
  isLoading.value = false;
}

const addNewProduct = async () => {
  const { data, error } = await createProduct(product.value);
  if (error) {
    openWarningModal('Something Wrong', error.message);
  }

  openSuccessToast('Add New Product Success', product.value.name + 'has been created');

  router.push('' + product.value.id);
};
const updatedProduct = async () => {
  const { data, error } = await updateProduct(product.value);
  if (error) {
    openWarningModal('Something Wrong', error.message);
  }

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

  // router.push('20');
  window.location.reload();
};

function onClickDelete() {
  openWarningModal('Are you sure ?', `Delete ${product.value.name}`, 'Delete', false, false, () => {
    deleteProduct();
  });
}

const dropdownUpdate = (value: any) => {
  console.log(value);

  product.value.category_id = value.id;
  product.value.category_desc = value.value;
};

const onChangeProductUpload = async (evt: any) => {
  loadingUpload.value = true;
  const files = evt.target.files;
  try {
    if (!files || files.length === 0) {
      throw new Error('You must select an image to upload.');
    }

    const file = files[0];
    const { data, error } = await uploadProductImage(file);
    if (error) throw error;
    if (data) {
      console.log(data.path);
    }
    loadingUpload.value = false;
  } catch (error) {
    console.error(error);
    loadingUpload.value = false;
  }
};

onBeforeMount(() => {
  productId.value = Number(useRoute().params.productId);
  if (productId.value == 0) {
    isEdit.value = false;
  } else {
    isEdit.value = true;
  }
});

onMounted(async () => {
  await fetchCategory();
  if (isEdit.value) {
    await fetchProductDetail();
  } else {
    await getRunningId();
  }
});
</script>
