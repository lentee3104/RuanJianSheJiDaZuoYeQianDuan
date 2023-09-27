<script setup lang="ts">
import {reactive, ref, watch} from 'vue'

interface TaskItem {
    content: string;
    isDone: boolean;
}

const list: TaskItem[] = reactive([]);

let taskContent = ref("");

let strInStorage = localStorage.getItem('list')??'[]'
list.push(...JSON.parse(strInStorage));

watch(list, ()=>{
    localStorage.setItem("list", JSON.stringify(list))
    console.log("list 被修改");
})

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
    <h1 class="text-red text-2xl">Todo List</h1>
    <div class="flex w-20em gap-x-2">
        <el-input type="text" v-model="taskContent" />
        <el-button type="primary" @click="addNewTask()"><i class="i-ant-design-plus-circle-outlined"></i> 添加</el-button>
    </div>
    <div v-auto-animate>
        <div v-for="(item, index) in list" class="taskItem">
            <el-checkbox type="checkbox" v-model="item.isDone" />
            <div :class="{isTaskDone: item.isDone}" class="grow">{{item.content}}</div>
            <el-button type="danger" size="small" @click="deleteTask(index)"><i class="i-ant-design-delete-outlined"></i> 删除</el-button>
        </div>
    </div>

</template>

<style scoped>
.taskItem {
    --at-apply: flex p-2 gap-x-2 items-center w-20em
}

.isTaskDone {
    --at-apply: line-through;
}
</style>
