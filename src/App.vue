<script setup lang="ts">
import {reactive, ref, watch} from 'vue'
import TaskInput from '@/TaskInput.vue'
import TaskList from '@/TaskList.vue'

interface TaskItem {
    content: string;
    isDone: boolean;
}

const list: TaskItem[] = reactive([]);

let strInStorage = localStorage.getItem('list')??'[]'
list.push(...JSON.parse(strInStorage));

watch(list, ()=>{
    localStorage.setItem("list", JSON.stringify(list))
    console.log("list 被修改");
})

function addNewTask(taskContent: string){
    const newTask = {content: taskContent, isDone: false};
    list.push(newTask);
}
</script>

<template>
    <h1 class="text-red text-2xl">Todo List</h1>

    <task-input @newTask="addNewTask"></task-input>

    <task-list :tasklist="list"></task-list>

</template>

<style scoped>
</style>
