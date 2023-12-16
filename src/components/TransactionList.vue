<template>
    <ul class="flex flex-col gap-2">
        <li v-for="transaction in transactions" :key="transaction.id">
            <Transaction :transaction="transaction" />
        </li>
    </ul>
</template>

<script setup lang="ts">
import Transaction from './Transaction.vue';
import { defineProps } from 'vue'

defineProps({
    transactions: {
        type: [],
        required: true
    }
})
</script>