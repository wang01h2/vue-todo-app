<template>
  <div class="flex justify-start items-center w-full h-full shadow bg-white">
    <div class="w-1/6 h-2/5 flex justify-center items-center">
      <!--          未选中-->
      <div class="w-5 h-5 border-gray-500 border-solid border-2 rounded-full cursor-pointer" v-show="!isDone" @click="unselected"></div>
      <!--            选中-->
      <div class="w-5 h-5 ring-gray-200 bg-gray-500 border-gray-200 border-solid border-4 rounded-full cursor-pointer xl:w-10 xl:h-10 xl:border-8" v-show="isDone"></div>
    </div>
    <span :class="isDone?'line-through w-5/6 truncate text-gray-400 text-left text-xl xl:text-4xl':'w-5/6 truncate text-gray-600 text-left text-xl xl:text-4xl'">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
import {reactive, watch} from "vue";

interface Props {
  label?: string,
  isDone?: boolean,
  keyValue?: string
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
