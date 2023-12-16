<template>
  <main>
    <Balance :total="total" />
    <IncomeExpenses :income="income" :expanses="expanses"/>
    <TransactionList :transactions="transactions" />
    <AddTransaction />
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