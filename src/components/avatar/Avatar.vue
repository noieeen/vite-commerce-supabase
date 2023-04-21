<template>
  <div>
    <img v-if="src" :src="src" alt="Avatar" class="rounded-md" :style="{ height: size + 'em', width: size + 'em' }" />
    <div v-else class="avatar no-image" :style="{ height: size + 'em', width: size + 'em' }" />

    <div :style="{ width: size + 'em' }">
      <label class="btn btn-success mt-2" for="single">
        {{ uploading ? 'Uploading ...' : 'Upload' }}
      </label>
      <input style="visibility: hidden; position: absolute" type="file" id="single" accept="image/*" @change="uploadAvatar" :disabled="uploading" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs, watch } from 'vue';
import useSupabase from '@/libs/supabase';

interface Props {
  path: string;
  size: number;
}

const props = withDefaults(defineProps<Props>(), {
  path: '',
  size: 0,
});
const { path, size } = toRefs(props);

const { client } = useSupabase();

const emit = defineEmits(['upload', 'update:path']);
const uploading = ref<boolean>(false);
const src = ref<string>('');
const files = ref();

const downloadImage = async () => {
  try {
    const { data, error } = await client.storage.from('avatars').download(path.value);
    if (error) throw error;
    src.value = URL.createObjectURL(data);
  } catch (error) {
    console.error('Error downloading image: ', error);
  }
};

const uploadAvatar = async (evt: any) => {
  files.value = evt.target.files;
  try {
    uploading.value = true;
    if (!files.value || files.value.length === 0) {
      throw new Error('You must select an image to upload.');
    }

    const file = files.value[0];
    const fileExt = file.name.split('.').pop();
    const filePath = `${Math.random()}.${fileExt}`;

    let { error: uploadError } = await client.storage.from('avatars').upload(filePath, file);

    if (uploadError) throw uploadError;
    emit('update:path', filePath);
    emit('upload');
  } catch (error) {
    console.error(error);
  } finally {
    uploading.value = false;
  }
};

watch(path, () => {
  if (path.value) downloadImage();
});
</script>
