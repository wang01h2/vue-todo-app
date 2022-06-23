<template>
  <div class="flex justify-start items-center h-16 bg-white w-full xl:h-20 2xl:h-20 shadow bg-white dark:bg-gray-300">
    <div class="w-full h-full flex justify-center items-center w-1/6">
      <!--          未选中-->
      <div class="w-5 h-5 border-gray-500 border-solid border-2 rounded-full cursor-pointer xl:w-8 xl:h-8 2xl:w-8 2xl:h-8" v-if="!itemData.isDone"
           @click="unselected"></div>
      <!--            选中-->
      <div
          class="w-5 h-5 ring-gray-200 bg-gray-500 border-gray-200 border-solid border-4 rounded-full cursor-pointer xl:w-10 xl:h-10 xl:border-8"
          v-else @click="unselected"></div>
    </div>
    <span
        :class="isDone?'line-through w-5/6 truncate text-gray-400 text-left text-2xl xl:text-4xl':'w-5/6 truncate text-gray-600 text-left text-xl xl:text-4xl'"
        v-if="!edit" @click="labelClick">{{ label }}</span>
    <input type="text"
           class="w-5/6 text-gray-600 border border-transparent dark:bg-gray-300 focus:outline-none text-left text-xl xl:text-4xl"
           v-model="itemData.label"
           v-else
           placeholder="需要做些什么?"
           @change="editCallBack"
           @blur="editCallBack"
           @keydown.enter="editCallBack">
  </div>
</template>

<script setup lang="ts">
import {reactive, ref} from "vue";

interface Props {
  label?: string,
  isDone?: boolean,
  keyValue?: string,
  key?: string | number
}

let edit = ref(false)
const props = defineProps<Props>()
const itemData = reactive<Props>({
  label: props.label,
  isDone: props.isDone,
  keyValue: props.keyValue
})
const emits = defineEmits(['unselectedClick', 'editCallBack'])

function unselected() {
  itemData.isDone = !itemData.isDone
  emits('unselectedClick', itemData)
}

function labelClick() {
  edit.value = !edit.value
}

function editCallBack() {
  if (edit.value) {
    if (itemData.label) emits('editCallBack', itemData)
    edit.value = !edit.value
  } else {
    edit.value = false
  }
}
</script>
