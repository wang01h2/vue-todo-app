<template>
  <div class="index-view">
    <div class="flex justify-start items-center w-full h-full dark:bg-gray-300 shadow">
      <div class="w-1/6 h-2/5 flex justify-center items-center"></div>
      <input type="text" class="w-4/5 h-4/5 text-gray-600 border border-transparent dark:bg-gray-300 focus:outline-none text-left text-xl xl:text-4xl" placeholder="需要做些什么?"
             v-model.trim="inputValue"
             @keyup.enter="inputCallBack">
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineEmits, ref, watch} from "vue";

interface Props {
  inputModel: string,
}
const props = defineProps<Props>()
let inputValue = ref('')
const emits = defineEmits(['inputComplete'])
watch(
    () => props.inputModel,
    (newValue) => {
      inputValue.value = newValue
    }
)
function inputCallBack() {
  const obj = {
    label: inputValue.value,
    isDone: false,
    key: Math.round(Math.random() * 900000).toString()
  }
  // 如果输入了内容才能返回callback
  if(inputValue.value) emits('inputComplete', obj)
  inputValue.value = ''
}
</script>
