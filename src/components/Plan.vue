<template>
  <div ref="planEl" :style="myPlan?.baseStyle()"></div>
</template>

<script setup lang="ts">
import { Plan } from "@/js/plan/plan";
import { onMounted, ref, watch } from "vue";
import PlanModel from "@/models/Plan";

const planEl = ref(null);
const myPlan = ref<Plan>();

onMounted(() => {
  myPlan.value = new Plan(planEl, { health: 100, attack: 10, size: 35, speed: 10 });
});
</script>

<style scoped lang="scss"></style>
