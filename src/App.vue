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
    <div style="display: flex; width: 20em; gap: 0.5em">
        <el-input type="text" v-model="taskContent" />
        <el-button type="primary" @click="addNewTask()">添加</el-button>
    </div>
    <div>
        <div v-for="(item, index) in list" class="taskItem">
            <el-checkbox type="checkbox" v-model="item.isDone" />
            <div :class="{isTaskDone: item.isDone}">{{item.content}}</div>
            <el-button type="danger" size="small" @click="deleteTask(index)">删除</el-button>
        </div>
    </div>

</template>

<style scoped>
.taskItem {
    display: flex;
    padding: 0.5em;
    gap: 0.5em;
    justify-items: center;
}

.isTaskDone {
    text-decoration: line-through;
}
</style>
