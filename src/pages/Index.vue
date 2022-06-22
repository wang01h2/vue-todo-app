<template>
  <div class="w-screen h-screen bg-gray-50">
    <div class="header-view w-auto h-1/4 flex justify-evenly flex-wrap items-center">
      <h1 class="text-5xl text-center w-full pt-10 xl:pt-14 2xl:pt-16"> 👋 Hello </h1>
      <h2 class="text-4xl text-blue-500 text-center w-full">ToDo</h2>
    </div>
    <div class="flex justify-center items-center">
      <index class="w-3/4 h-12 flex justify-center shadow bg-white xl:h-20 xl:w-4/12 2xl:h-20 2xl:w-4/12">
        <div class="flex justify-start items-center w-full">
          <div class="w-1/6 h-2/5 flex justify-center items-center">
            <!--          未选中-->
            <div class="w-5 h-5 border-gray-500 border-solid border-2 rounded-full" v-show="false"></div>
<!--            选中-->
            <div class="w-5 h-5 ring-gray-200 bg-gray-500 border-gray-200 border-solid border-4 rounded-full xl:w-10 xl:h-10 xl:border-8"></div>
          </div>
          <span class="line-through truncate text-gray-400 text-left text-xl xl:text-4xl">早睡早起</span>
          <input type="text" class="line-through w-4/5 h-4/5 text-gray-600 border border-transparent focus:outline-none text-xl" placeholder="需要做些什么?" v-show="false">
        </div>
<!--        <item class="w-full"></item>-->
      </index>
    </div>
  </div>
</template>

<script setup lang="ts">
import Index from "../components/list/Index";
import Item from "../components/list/Item";

</script>
