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
        <AddTransaction />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import Balance from './components/Balance.vue';
import IncomeExpenses from './components/IncomeExpenses.vue';
import AddTransaction from './components/AddTransaction.vue';
import TransactionList from './components/TransactionList.vue';
import { ref, computed } from 'vue'
import { ITransaction } from './components/Transaction.vue';

const transactions = ref([
  { id: 1, text: 'Book', amountOfMoney: -12, transactionType: 'expanse' },
  { id: 2, text: 'Coffee', amountOfMoney: -4, transactionType: 'expanse' },
  { id: 3, text: 'Friend returned my money back', amountOfMoney: 52, transactionType: 'income' },
  { id: 4, text: 'Salad', amountOfMoney: -4, transactionType: 'expanse' },
  { id: 5, text: 'Tooth paste', amountOfMoney: -11, transactionType: 'expanse' },
])

const total = computed(() => {
  return transactions.value.reduce((accumulator: number, transaction: ITransaction) => {
    return accumulator + transaction.amountOfMoney
  }, 0)
})

const income = computed(() => {
  return transactions.value.filter((transaction: ITransaction) => transaction.amountOfMoney > 0).
    reduce((accumulator: number, transaction: ITransaction) => {
      return accumulator + transaction.amountOfMoney
    }, 0).toFixed(2)
})

const expanses = computed(() => {
  return transactions.value.filter((transaction: ITransaction) => transaction.amountOfMoney < 0).
    reduce((accumulator: number, transaction: ITransaction) => {
      return accumulator + transaction.amountOfMoney
    }, 0).toFixed(2)
})
</script>