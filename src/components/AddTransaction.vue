<template>
    <form @submit.prevent="addTransaction">
        <div class="mb-2">
            <label class="text-md font-semibold">Comment</label>
            <input class="w-full block border-2 border-stone-400 rounded px-2 py-1" v-model="text" type="text" placeholder="Enter a comment ...">
        </div>
        <div class="mb-2">
            <label class="text-md font-semibold">Amount</label>
            <input class="w-full block border-2 border-stone-400 rounded px-2 py-1" v-model="amount" type="text" placeholder="Enter amount ...">
        </div>
        <div class="mb-2">
            <label class="text-md font-semibold">Transaction Type</label>
            <select class="w-full block border-2 border-stone-400 rounded px-2 py-1" v-model="transactionType">
                <option selected value="expanse">Expanse</option>
                <option value="income">Income</option>
            </select>
        </div>
        <button class="w-full px-2 py-1 bg-indigo-500 text-white">Add Transaction</button>
    </form>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import { useToast } from 'vue-toastification'
import type { ITransaction } from './Transaction/types';

const transactionTypeByDefault = 'expanse'
const toast = useToast()
const emit = defineEmits(['transactionSubmitted'])
const text = ref('')
const amount = ref('')
const transactionType = ref(transactionTypeByDefault)

const addTransaction = (): void => {
    if (!text.value || !amount.value) {
        toast.error('Need all inputs to be filled')
        return
    }
    
    const transaction: ITransaction = {
        id: generateUniqueId(),
        text: text.value,
        amountOfMoney: parseFloat(amount.value),
        transactionType: transactionType.value
    }

    emit('transactionSubmitted', transaction)
    resetForm()
}

const resetForm = (): void => {
    text.value = ''
    amount.value = ''
    transactionType.value = transactionTypeByDefault
}

const generateUniqueId = (): number => {
  return Math.floor(Math.random() * 11111)
}
</script>