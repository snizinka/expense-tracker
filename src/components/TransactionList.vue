<template>
    <ul class="flex flex-col gap-2">
        <li v-for="transaction in transactions" :key="transaction.id">
            <Transaction :transaction="transaction" />
        </li>
    </ul>
</template>

<script setup lang="ts">
import Transaction from './Transaction/Transaction.vue';
import { defineProps } from 'vue'
import type { ITransaction } from './Transaction/types';

defineProps({
    transactions: {
        type: Array as () => ITransaction[],
        required: true
    }
})
</script>