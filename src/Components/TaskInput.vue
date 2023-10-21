<script setup lang="ts">
    import {ref} from 'vue'
    import {inject} from 'vue'
    import type {ITodoListService} from '@/Types/ITodoListService'
    const todoListService = inject<ITodoListService>('todoListService')!

    let taskContent = ref("");
    function onOk(){
        todoListService.addNewTask(taskContent.value);
        taskContent.value = "";
    }
</script>

<template>
    <div class="flex w-20em gap-x-2">
        <el-input type="text" v-model="taskContent" />
        <el-button type="primary" @click="onOk"><i class="i-ant-design:plus-circle-outlined"></i> 添加</el-button>
    </div>

</template>

<style scoped>

</style>
