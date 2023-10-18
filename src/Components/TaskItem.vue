<script setup lang="ts">
import {inject,ref} from 'vue'
import type {ITodoListService} from '@/Types/ITodoListService'

const props = defineProps(['item','itemIndex'])
const todoListService = inject<ITodoListService>('todoListService')!

const isEditMode = ref(false);

const newContent = ref("");

function onEdit(){
    isEditMode.value=true
    newContent.value= props.item.content
}

function onOk(){
    isEditMode.value=false
    props.item.content= newContent.value
}
</script>

<template>
    <div  class="taskItem">
        <el-checkbox type="checkbox" v-model="item.isDone" />
        <template v-if="isEditMode">
            <el-input class="grow" v-model="newContent"/>
            <el-button type="primary" size="small" @click="onOk">确定</el-button>
            <el-button type="danger" size="small" @click="isEditMode=false">取消</el-button>
        </template>
        <template v-else>
            <div :class="{isTaskDone: item.isDone}" class="grow">{{item.content}}</div>
            <el-button type="primary" size="small" @click="onEdit">修改</el-button>
            <el-button type="danger" size="small" @click="todoListService.deleteTask(itemIndex)"><i class="i-ant-design-delete-outlined"></i> 删除</el-button>
        </template>
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
