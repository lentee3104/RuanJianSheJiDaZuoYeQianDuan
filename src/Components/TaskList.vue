<script setup lang="ts">
import TaskItem from '@/Components/TaskItem.vue'
import {inject} from 'vue'
import type {ITodoListService} from '@/Types/ITodoListService'

const todoListService = inject<ITodoListService>('todoListService')!

</script>

<template>
    <div v-auto-animate>
        <task-item v-for="(item, index) in todoListService.getList()"
                   :item="item"
                   :item-index="index"
        ></task-item>
    </div>
</template>

<style scoped>

</style>
