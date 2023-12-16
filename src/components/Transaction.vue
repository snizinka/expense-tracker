<template>
    <div>
        Cash <span> {{ isTransactionPositive ? '+' : '-' }} $ {{ props.transaction.amountOfMoney }}</span>
        <button>Delete</button>
    </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'

export interface ITransaction {
    id: number,
    text: string,
    amountOfMoney: number,
    transactionType: string
}

const props = defineProps<{
    transaction: ITransaction
}>()
const isTransactionPositive = computed(() => props.transaction.transactionType === 'income')
</script>