<template>
    <div class="flex w-full p-3 shadow-3xl justify-center gap-10">
        <div>
            <h4 class="text-sm font-semibold uppercase">Income</h4>
            <span class="text-green-500 font-bold">+${{ income }}</span>
        </div>
        <div>
            <h4 class="text-sm font-semibold uppercase">Expanse</h4>
            <span class="text-rose-700 font-bold">-${{ -expanses }}</span>
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