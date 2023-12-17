<template>
  <main class="p-12">
    <div class="w-1/3 mx-auto mt-10">
      <Balance :total="total" class="mb-4" />
      <IncomeExpenses :income="income" :expanses="expanses" class="mb-5" />
      <div class="mb-5">
        <h3 class="text-lg font-semibold border-b-2 border-stone-400 mb-2">History</h3>
        <TransactionList :transactions="transactions" />
      </div>
      <div>
        <h3 class="text-lg font-semibold border-b-2 border-stone-400 mb-2">Add new transaction</h3>
        <AddTransaction @transactionSubmitted="onTransactionSubmitted" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import Balance from './components/Balance.vue';
import IncomeExpenses from './components/IncomeExpenses.vue';
import AddTransaction from './components/AddTransaction.vue';
import TransactionList from './components/TransactionList.vue';
import { ref, computed, watch } from 'vue'
import type { ITransaction } from './components/Transaction/types';
import { useToast } from 'vue-toastification'

const toast = useToast()
const transactions = ref<ITransaction[]>([
  { id: 1, text: 'Book', amountOfMoney: -12, transactionType: 'expanse' },
  { id: 2, text: 'Coffee', amountOfMoney: -4, transactionType: 'expanse' },
  { id: 3, text: 'Friend returned my money back', amountOfMoney: 52, transactionType: 'income' },
  { id: 4, text: 'Salad', amountOfMoney: -4, transactionType: 'expanse' },
  { id: 5, text: 'Tooth paste', amountOfMoney: -11, transactionType: 'expanse' },
])

const prevTransactionsLength = ref<number>(transactions.value.length)

const total = computed((): number => {
  return transactions.value.reduce((accumulator: number, transaction: ITransaction): number => {
    return accumulator + transaction.amountOfMoney
  }, 0)
})

const income = computed((): number => {
  return parseFloat(
    transactions.value.filter((transaction: ITransaction): boolean => transaction.amountOfMoney > 0).
    reduce((accumulator: number, transaction: ITransaction): number => {
      return accumulator + transaction.amountOfMoney
    }, 0).toFixed(2)
  )
})

const expanses = computed((): number => {
  return parseFloat(
    transactions.value.filter((transaction: ITransaction): boolean => transaction.amountOfMoney < 0).
    reduce((accumulator: number, transaction: ITransaction): number => {
      return accumulator + transaction.amountOfMoney
    }, 0).toFixed(2)
  )
})

const onTransactionSubmitted = (transaction: ITransaction): void => {
  transactions.value.push({
    id: transaction.id,
    text: transaction.text,
    amountOfMoney: transaction.amountOfMoney,
    transactionType: transaction.transactionType
  })
}

watch(transactions, (newTransactionsState: ITransaction[]): void => {
  if (prevTransactionsLength.value < newTransactionsState.length) {
    toast.success('Transaction added successfuly')
    prevTransactionsLength.value = newTransactionsState.length
  }
}, { deep: true })
</script>