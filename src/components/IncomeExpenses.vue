<template>
    <div>
        <div>
            <h4>Income</h4>
            <span>+$ {{ income }}</span>
        </div>
        <div>
            <h4>Expanse</h4>
            <span>-$ {{ expanses }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
    income: {
        type: Number,
        required: true
    },
    expanses: {
        type: Number,
        required: true
    }
})
</script>