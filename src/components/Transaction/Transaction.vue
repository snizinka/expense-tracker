<template>
    <div class="shadow-3xl flex">
        <div class="p-2 w-full h-full flex">
            <span class="flex justify-between w-full">
                {{ props.transaction.text }} <span>${{ props.transaction.amountOfMoney }}</span>
            </span>
            <button class="hidden">Delete</button>
        </div>
        <span :class="isTransactionPositive ? 'bg-green-500' : 'bg-rose-700'" class="w-2 block"></span>
    </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import type { ITransaction } from './types';

const props = defineProps({
    transaction: {
        type: Object as () => ITransaction,
        required: true
    }
});

const isTransactionPositive = computed((): boolean => props.transaction.transactionType === 'income')
</script>