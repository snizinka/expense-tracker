<template>
    <span class="magic-letter">
       <slot />
    </span>
</template>

<script setup lang="ts">
import { defineProps } from 'vue' 
defineProps({
    index: {
        type: Number,
        required: true
    }
})

function prevPeerHover (index: number) {
    return 'peer-hover/' + (index - 1)
}
</script>