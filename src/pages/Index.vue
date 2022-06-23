<template>
  <div class="w-screen h-screen bg-gray-50">
    <div class="header-view w-auto h-1/4 flex justify-evenly flex-wrap items-center">
      <h1 class="text-5xl text-center w-full pt-10 xl:pt-14 2xl:pt-16"> 👋 Hello </h1>
      <h2 class="text-4xl text-blue-500 text-center w-full">ToDo</h2>
    </div>
    <div class="flex justify-center items-center">
      <index class="w-3/4 h-12 flex justify-center shadow bg-white xl:h-20 xl:w-4/12 2xl:h-20 2xl:w-4/12">
<!--        item list-->
        <item></item>
      </index>
    </div>
  </div>
</template>

<script setup lang="ts">
import Index from "../components/list/Index";
import Item from "../components/list/Item";


/*
* 开始处理逻辑
* 控制状态
* :inputModel: 输入绑定数据，string类型
*
* 事件：
* @isDone: 是否点击了完成 boolean
* @inputComplete: input回车之后显示的状态 boolean
*
* */



</script>
