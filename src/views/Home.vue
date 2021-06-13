<template>
    <div class="home">
        <Carousels></Carousels>
        <Timelines></Timelines>
    </div>
</template>

<script>
import Carousels from '@/components/Carousels.vue'
import Timelines from "@/components/Timelines.vue"

export default {
    name: 'home',
    components: {
        Carousels,
        Timelines
    }
}

</script>


<style>

</style>