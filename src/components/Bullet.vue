<template>
<div class="bullet" style=""></div>
</template>
  
<script setup lang="ts">
import { ref, computed } from 'vue';

const props = defineProps({
top: Number,
left: Number
});

</script>

<style scoped>
.bullet {}
</style>