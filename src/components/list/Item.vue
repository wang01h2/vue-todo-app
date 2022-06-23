<template>
  <div class="flex justify-start items-center h-12 bg-white w-full 2xl:h-20 2xl:h-20 shadow bg-white dark:bg-gray-300">
    <div class="w-full h-full flex justify-center items-center w-1/6">
      <!--          未选中-->
      <div class="w-5 h-5 border-gray-500 border-solid border-2 rounded-full cursor-pointer" v-if="!isDone" @click="unselected"></div>
      <!--            选中-->
      <div class="w-5 h-5 ring-gray-200 bg-gray-500 border-gray-200 border-solid border-4 rounded-full cursor-pointer xl:w-10 xl:h-10 xl:border-8" v-else></div>
    </div>
    <span :class="isDone?'line-through w-5/6 truncate text-gray-400 text-left text-xl xl:text-4xl':'w-5/6 truncate text-gray-600 text-left text-xl xl:text-4xl'">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
import {reactive, watch} from "vue";

interface Props {
  label?: string,
  isDone?: boolean,
  keyValue?: string,
  key?: string | number
}
const props = defineProps<Props>()
const itemData = reactive<Props>({
      label: props.label,
      isDone: props.isDone,
      keyValue: props.keyValue
    })
const emits = defineEmits(['unselectedClick'])
function unselected() {
  itemData.isDone = !itemData.isDone
  emits('unselectedClick', itemData)
}
</script>
