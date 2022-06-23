<template>
  <div class="todo-view w-screen flex flex-col items-center">
    <div class="header-view w-auto h-56 xl:h-72 2xl:h-72 flex justify-evenly flex-wrap items-center">
      <h1 class="text-6xl text-center w-full pt-10 dark:text-white dark:text-opacity-75 xl:pt-14 2xl:pt-16"> 👋
        Hello </h1>
      <h2 class="text-5xl text-blue-500 text-center w-full dark:text-opacity-75">ToDo</h2>
    </div>
    <index class="w-5/6 h-16 bg-white xl:h-20 xl:w-4/12 2xl:h-20 2xl:w-4/12"
           :input-model="inputValue"
           @input-complete="enterCallBack">
    </index>
    <div class="flex justify-center items-center flex-col w-5/6 bg-white xl:w-4/12 2xl:w-4/12">
      <ul class="w-full">
        <li v-for="item in itemList">
          <item :key="item['key']"
                :key-value="item['key']"
                :label="item['label']"
                :is-done="item['isDone']"
                @unselected-click="unselectedEvent"
                @edit-call-back="editEvent"
          ></item>
        </li>
      </ul>
    </div>
    <div class="h-16 mt-12">
      <p class="text-xs text-gray-300 text-opacity-40 text-center">双击编辑待办事项</p>
      <p class="text-xs text-gray-300 text-opacity-40 text-center">Power by: wang01h2</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Index from "../components/list/Index";
import Item from "../components/list/Item";
import {onMounted, ref} from "vue";

interface DataType {
  label?: string,
  isDone?: boolean,
  keyValue?: string,
  key?: string
}

const inputValue = ref('')
let itemList = ref<DataType[]>([])

/*
* 开始处理逻辑
* 控制状态
* :inputModel: 输入绑定数据，string类型
* :isDone: 是否点击了完成 boolean
* 事件：
* @unselected-click: 完成事项事件
* @edit-call-back: 编辑代办事项事件
* */

onMounted(() => {
  const arr: DataType[] = [
    {
      label: '美好的一天开始啦~ 💃',
      isDone: false,
      keyValue: '002',
      key: '002'},
    {
      label: '吃个橙子 🍊️',
      isDone: false,
      keyValue: '002',
      key: '002'},
    {
      label: '喝杯咖啡 ☕️',
      isDone: true,
      keyValue: '001',
      key: '001'}
  ]
  if(!getData()) {
    itemList.value = arr
  } else {
    itemList.value = getData()
  }
})

function enterCallBack(data: DataType) {
  // 接收 index组件传递来的对象
  if (data) itemList.value.unshift(data)
  console.log('enterCallBack', itemList.value)
  setData(itemList.value)
}

function unselectedEvent(data: DataType) {
  for (let item of itemList.value) {
    if (item.key === data.keyValue) {
      item.isDone = data.isDone
    }
  }
  setData(itemList.value)
}

function editEvent(data: DataType) {
  for (let item of itemList.value) {
    if (item.key === data.keyValue) {
      item.label = data.label
    }
  }
  setData(itemList.value)
}

function setData(data: DataType[]) {
  window.localStorage.setItem('todo-data', JSON.stringify(data))
}

function getData() {
  if(window.localStorage.getItem('todo-data')) {
    return JSON.parse(window.localStorage.getItem('todo-data') as string)
  } else {
    return false
  }
}
</script>
