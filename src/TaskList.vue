<script setup lang="ts">
import TaskItem from '@/TaskItem.vue'

const props = defineProps(['tasklist'])
function deleteTask(index: number){
    props.tasklist.splice(index,1);
}

</script>

<template>
    <div v-auto-animate>
        <task-item v-for="(item, index) in tasklist"
                   :item="item"
                   :item-index="index"
                   @delete-task="deleteTask"
        ></task-item>
    </div>
</template>

<style scoped>

</style>
