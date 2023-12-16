<template>
    <div>
        <h3 class="text-xl font-semibold uppercase">Your Balance</h3>
        <strong class="text-3xl font-bold">${{ total }}</strong>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
    total: {
        type: Number,
        required: true
    }
})
</script>