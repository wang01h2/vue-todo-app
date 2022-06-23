<template>
  <div class="w-screen h-full bg-gray-50 dark:bg-gray-900 flex flex-col">
    <div class="header-view w-auto h-56 xl:h-72 2xl:h-72 flex justify-evenly flex-wrap items-center">
      <h1 class="text-5xl text-center w-full pt-10 dark:text-white dark:text-opacity-75 xl:pt-14 2xl:pt-16"> 👋 Hello </h1>
      <h2 class="text-4xl text-blue-500 text-center w-full dark:text-opacity-75">ToDo</h2>
    </div>
    <div class="flex justify-center items-center flex-col">
      <index class="w-3/4 h-12 bg-white xl:h-20 xl:w-4/12 2xl:h-20 2xl:w-4/12"
             :input-model="inputValue"
             @input-complete="enterCallBack"></index>
            <ul class="w-3/4 bg-white xl:w-4/12 2xl:w-4/12">
              <li v-for="item in itemList">
                <item :key="item['key']"
                      :key-value="item['key']"
                      :label="item['label']"
                      :is-done="item['isDone']"
                      @unselected-click="unselectedEvent"
                ></item>
              </li>
            </ul>
    </div>
    <div class="h-16 mt-12">
      <p class="text-xs text-gray-300 text-opacity-40 text-center">Hello welcomeTo Todo</p>
      <p class="text-xs text-gray-300 text-opacity-40 text-center">version: 1.0beta</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Index from "../components/list/Index";
import Item from "../components/list/Item";
import { ref } from "vue";

interface DataType {
  label?: string,
  isDone?: boolean,
  keyValue?: string,
  key?: string | number
}
const inputValue = ref('')
let itemList = ref([] as any[])
/*
* 开始处理逻辑
* 控制状态
* :inputModel: 输入绑定数据，string类型
* :isDone: 是否点击了完成 boolean
* 事件：
* @unselected-click: 完成事项事件
* */

function enterCallBack(data: DataType) {
  // 接收 index组件传递来的对象
  if(data) itemList.value.unshift(data)
}
function unselectedEvent(data: DataType) {
  for (let item of itemList.value) {
    if(item.key === data.keyValue) {
      item.isDone = data.isDone
    }
  }
}

</script>
