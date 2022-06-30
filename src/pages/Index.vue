<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import Index from '../components/list/Index'
import Item from '../components/list/Item'

interface DataType {
  label?: string
  isDone?: boolean
  keyValue?: string
  key?: string
}
const STORAGE_KEY = 'todo-data'
const inputValue = ref('')

const filters = {
  all: (todos: DataType[]) => todos,
  uncompleted: (todos: DataType[]) => todos.filter(todo => !todo.isDone),
  completed: (todos: DataType[]) => todos.filter(todo => todo.isDone),
}
// state
const todos = ref(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'))
const visibility = ref('all')
// derived state
// const all = computed(() => filters[visibility.value](todos.value))
const completedList = computed(() => filters.completed(todos.value))
const uncompletedList = computed(() => filters.uncompleted(todos.value))
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
      keyValue: '003',
      key: '003',
    },
    {
      label: '吃个橙子 🍊️',
      isDone: false,
      keyValue: '002',
      key: '002',
    },
    {
      label: '喝杯咖啡 ☕️',
      isDone: true,
      keyValue: '001',
      key: '001',
    },
  ]
  // 如果数据不存在，初始化
  if (todos.value.length === 0)
    setData(arr, STORAGE_KEY)
})

function enterCallBack(data: DataType) {
  // 接收 index组件传递来的对象
  if (data)
    todos.value.unshift(data)
  SAVE()
}

/*
* 目前的思路是，如果 = true,把这个item放到已关闭的数组中，自然而然在下面
* name: localstorage中的key
* */
function unselectedEvent(data: DataType) {
  todos.value.forEach((item: DataType) => {
    if (item.key === data.keyValue)
      item.isDone = !item.isDone
  })
  SAVE()
}
/*
* 只有未完成的才能够编辑
* */
function editEvent(data: DataType) {
  for (const item of todos.value) {
    if (item.key === data.keyValue)
      item.label = data.label
  }
  SAVE()
}

/*
* 只有已完成的才能删除，所以只删除已完成的数据
* */
function deleteEvent(obj: DataType) {
  todos.value.forEach((item: DataType, index: number) => {
    if (item.key === obj.keyValue)
      todos.value.splice(index, 1)
  })
  SAVE()
}

/*
* name: localstorage中的key
* */
function setData(data: DataType[], name: string) {
  window.localStorage.setItem(name, JSON.stringify(data))
}

function SAVE() {
  setData(todos.value, STORAGE_KEY)
}
</script>

<template>
  <div class="todo-view w-screen flex flex-col items-center">
    <div class="header-view w-auto h-56 xl:h-72 2xl:h-72 flex justify-evenly flex-wrap items-center">
      <h1 class="text-6xl text-center w-full pt-10 dark:text-white dark:text-opacity-75 xl:pt-14 2xl:pt-16">
        👋
        Hello
      </h1>
      <h2 class="text-5xl text-blue-500 text-center w-full dark:text-opacity-75">
        ToDo
      </h2>
    </div>
    <index
      class="w-5/6 h-16 bg-white xl:h-20 xl:w-4/12 2xl:h-20 2xl:w-4/12"
      :input-model="inputValue"
      @input-complete="enterCallBack"
    />
    <div ref="scroll" class="flex justify-center items-center flex-col w-5/6 bg-white xl:w-4/12 2xl:w-4/12">
      <ul class="w-full">
        <li v-for="item in uncompletedList" :key="item.key">
          <item
            :key="item.key"
            :key-value="item.key"
            :label="item.label"
            :is-done="item.isDone"
            @unselected-click="unselectedEvent"
            @edit-call-back="editEvent"
          />
        </li>
      </ul>
      <ul class="w-full">
        <li v-for="item in completedList" :key="item.key">
          <item
            :key="item.key"
            :key-value="item.key"
            :label="item.label"
            :is-done="item.isDone"
            @unselected-click="unselectedEvent"
            @delete-call-back="deleteEvent"
          />
        </li>
      </ul>
    </div>
    <div class="h-16 mt-12">
      <p class="text-xs text-gray-300 text-opacity-40 text-center select-none dark:text-gray-400 dark:text-opacity-10">
        双击编辑待办事项
      </p>
      <p class="text-xs text-gray-300 text-opacity-40 text-center select-none dark:text-gray-400 dark:text-opacity-10">
        Power by: wang01h2
      </p>
    </div>
  </div>
</template>
