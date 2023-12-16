<template>
    <h3>Your Balance</h3>
    <strong>${{ total }}</strong>
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