<script setup lang="ts">
import {reactive, ref} from 'vue'

interface TaskItem {
    content: string;
    isDone: boolean;
}

const list: TaskItem[] = reactive([
    {content: "test1", isDone: false},
    {content: "test2", isDone: false}
]);

let taskContent = ref("");

function addNewTask(){
    const newTask = {content: taskContent.value, isDone: false};
    list.push(newTask);
    taskContent.value = "";
}
function deleteTask(index: number){
    list.splice(index,1);
}
</script>

<template>
    <h1>Todo List</h1>
    <div>
        <input type="text" v-model="taskContent">
        <button @click="addNewTask()">添加</button>
    </div>
    <div>
        <div v-for="(item, index) in list" class="taskItem">
            <input type="checkbox" v-model="item.isDone">
            <div :class="{isTaskDone: item.isDone}">{{item.content}}</div>
            <button @click="deleteTask(index)">删除</button>
        </div>
    </div>

</template>

<style scoped>
.taskItem {
    display: flex
}

.isTaskDone {
    text-decoration: line-through;
}
</style>
