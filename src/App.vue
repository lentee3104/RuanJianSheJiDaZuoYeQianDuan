<script setup lang="ts">
import {provide} from 'vue'
import TaskInput from '@/TaskInput.vue'
import TaskList from '@/TaskList.vue'
import {TodoListService} from '@/TodoListService'

provide('todoListService', new TodoListService())

</script>

<template>
    <h1 class="text-red text-2xl">Todo List</h1>

    <task-input @newTask="addNewTask"></task-input>

    <task-list></task-list>

</template>

<style scoped>
</style>
