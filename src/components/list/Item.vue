<template>
  <div class="item-view flex justify-start items-center h-16 bg-white w-full xl:h-20 2xl:h-20 shadow bg-white dark:bg-gray-300">
    <div class="w-full h-full flex justify-center items-center w-1/6">
      <!--          未选中-->
      <div class="w-5 h-5 select-none border-gray-500 border-solid border-2 rounded-full cursor-pointer xl:w-8 xl:h-8 2xl:w-8 2xl:h-8"
           v-if="!itemData.isDone"
           @click="unselected"></div>
      <!--            选中-->
      <div
          class="w-5 h-5 select-none ring-gray-200 bg-gray-500 border-gray-200 border-solid border-4 rounded-full cursor-pointer xl:w-10 xl:h-10 xl:border-8"
          v-else @click="unselected"></div>
    </div>
    <span
        :class="isDone?'w-4/6 line-through truncate select-none text-gray-400 text-left text-2xl xl:text-4xl':'w-5/6 select-none truncate text-gray-600 text-left text-2xl xl:text-4xl'"
        v-if="!edit"
        @dblclick="labelClick">{{ label }}</span>
    <input type="text"
           :class="itemData.isDone?'w-4/6 text-gray-600 border border-transparent dark:bg-gray-300 focus:outline-none text-left text-2xl xl:text-4xl':'w-5/6 text-gray-600 border border-transparent dark:bg-gray-300 focus:outline-none text-left text-2xl xl:text-4xl'"
           v-model="itemData.label"
           v-else
           placeholder="需要做些什么?"
           @blur="editCallBack"
           @change="editCallBack"
           @keydown.enter="editCallBack" />
    <div class="w-1/6 h-full z-50 flex justify-center items-center cursor-pointer"
         v-if="itemData.isDone && !edit"
         @click="deleteCallBack">
      <p class="text-red-400 text-opacity-75 select-none">删除</p>
    </div>
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
let isSwipe = ref(false)
const props = defineProps<Props>()
const itemData = reactive<Props>({
  label: props.label,
  isDone: props.isDone,
  keyValue: props.keyValue,
})
const emits = defineEmits(['unselectedClick', 'editCallBack', 'deleteCallBack'])

function unselected() {
  itemData.isDone = !itemData.isDone
  emits('unselectedClick', itemData)
}

function labelClick() {
  edit.value = !edit.value
}

function editCallBack() {
  if (edit.value) {
    if (itemData.label) {
      edit.value = !edit.value
      emits('editCallBack', itemData)
    }
  } else {
    edit.value = false
  }
}

function deleteCallBack() {
  if (itemData.label) emits('deleteCallBack', itemData)
}
</script>
