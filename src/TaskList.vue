<script setup lang="ts">
import TaskItem from '@/TaskItem.vue'
import {inject} from 'vue'

const todoListService = inject('todoListService')

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
