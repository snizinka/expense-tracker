<template>
    <main class="bg-sky-moon bg-cover" :style="{filter: `brightness(${-(moveLeft / 100) + 1})`}">
        <div class="h-screen w-screen" ref="moonSkyContainer">
            <Header />
            <h1 class="mx-auto text-center w-3/4 absolute left-1/2 top-1/2 -translate-x-1/2 text-5xl font-nunito">
                <MagicLetter v-for="(letter, index) in centralTextLetters" :index="index">
                    {{ letter }}
                </MagicLetter>
            </h1>
            <span ref="rock" :style="{bottom: moveTop + '%', right: moveLeft + '%'}" class="absolute -right-12">
                <img src="../assets/images/asteroid1.png" :style="{width: (48 * (moveTop / 10)) + 'px'}" />
            </span>
        </div>
        <div class="h-screen w-screen">
            
        </div>
    </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Header from "../components/Header.vue";
import MagicLetter from "../components/MagicLetter.vue";

const centralText = "Am I everything you need ? "
const centralTextLetters = centralText.split('')

const moonSkyContainer = ref(null)
const rock = ref(null)
const moveTop = ref(-1)
const moveLeft = ref(-1)

onMounted(() => {
    addEventListener('scroll', onMoonSkyContainerScroll)
})

function onMoonSkyContainerScroll () {
    const htmlElement = document.documentElement
    const movementDelta = (htmlElement.scrollTop / htmlElement.clientHeight) * 100
    moveTop.value = movementDelta
    moveLeft.value = movementDelta
}
</script>