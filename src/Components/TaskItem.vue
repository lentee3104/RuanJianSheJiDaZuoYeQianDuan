<script setup lang="ts">
import {inject} from 'vue'
import type {ITodoListService} from '@/Types/ITodoListService'

defineProps(['item','itemIndex'])
defineEmits(['deleteTask'])

const todoListService = inject<ITodoListService>('todoListService')!
</script>

<template>
    <div  class="taskItem">
        <el-checkbox type="checkbox" v-model="item.isDone" />
        <div :class="{isTaskDone: item.isDone}" class="grow">{{item.content}}</div>
        <el-button type="danger" size="small" @click="todoListService.deleteTask(itemIndex)"><i class="i-ant-design-delete-outlined"></i> 删除</el-button>
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
