<template>
  <div class="w-screen h-screen bg-gray-50 dark:bg-gray-800">
    <div class="header-view w-auto h-1/4 flex justify-evenly flex-wrap items-center">
      <h1 class="text-5xl text-center w-full pt-10 xl:pt-14 2xl:pt-16"> 👋 Hello </h1>
      <h2 class="text-4xl text-blue-500 text-center w-full">ToDo</h2>
    </div>
    <div class="flex justify-center items-center">
      <index class="w-3/4 h-12 bg-white xl:h-20 xl:w-4/12 2xl:h-20 2xl:w-4/12"
             :input-model="inputValue"
             @input-complete="enterCallBack">
<!--        item list-->
        <item v-if="itemList.length > 0"
              v-for="item in itemList"
              :key="item.key"
              :key-value="item.key"
              :label="item.label"
              :is-done="item.isDone"
              @unselected-click="unselectedEvent"
        ></item>
      </index>
    </div>
  </div>
</template>

<script setup lang="ts">
import Index from "../components/list/Index";
import Item from "../components/list/Item";
import { ref } from "vue";

const inputValue = ref('')
let itemList = ref([])
/*
* 开始处理逻辑
* 控制状态
* :inputModel: 输入绑定数据，string类型
* :isDone: 是否点击了完成 boolean
* 事件：
* @unselected-click: 完成事项事件
* */

function enterCallBack(data: object) {
  // 接收 index组件传递来的对象
  if(data) itemList.value.unshift(data)
}
function unselectedEvent(data: object) {
  for (let item of itemList.value) {
    if(item.key === data.keyValue) {
      item.isDone = data.isDone
    }
  }
}

</script>
