<script setup lang="ts">
import { ref, watch } from 'vue'

interface Props {
  inputModel: string
}

const props = defineProps<Props>()
const emits = defineEmits(['inputComplete'])
const inputValue = ref('')
const inputChange = ref(false)
watch(
  () => props.inputModel,
  (newValue) => {
    inputValue.value = newValue
  },
)

function inputCallBack() {
  const obj = {
    label: inputValue.value,
    isDone: false,
    key: Math.round(Math.random() * 900000).toString(),
  }
  // 如果输入了内容才能返回callback
  if (inputValue.value)
    emits('inputComplete', obj)
  inputValue.value = ''
  inputChange.value = false
}
</script>

<template>
  <div class="index-view">
    <div class="flex justify-start items-center w-full h-full dark:bg-gray-300 shadow">
      <div class="w-1/6 h-2/5 select-none" />
      <input
        v-model.trim="inputValue"
        type="text"
        class="w-4/6 h-4/5 text-gray-600 border border-transparent dark:bg-gray-300 focus:outline-none text-left text-2xl xl:text-4xl 2xl:text-4xl"
        placeholder="需要做些什么?"
        @change="inputChange = true"
        @keyup.enter="inputCallBack"
      >
      <button
        v-if="inputChange"
        class="w-1/6 h-full text-gray-500 text-center select-none text-2xl xl:text-4xl"
        @click="inputCallBack"
      >
        +
      </button>
    </div>
  </div>
</template>
