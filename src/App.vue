<script setup lang="ts">
import {provide} from 'vue'
import TaskInput from '@/Components/TaskInput.vue'
import TaskList from '@/Components/TaskList.vue'
import {TodoListService} from '@/Services/TodoListService'

provide('todoListService', new TodoListService())

</script>

<template>
    <h1 class="text-red text-2xl">Todo List</h1>

    <task-input></task-input>

    <task-list></task-list>

</template>

<style scoped>
</style>
