<template>
  <div class="map" :style="{ width: `${map.size}px`, height: `${map.size}px`, background: map.color }"><Plan /></div>
</template>

<script setup lang="ts">
import { Map } from "@/js/map/map";
import Plan from "@/components/Plan";

const map = new Map({ color: "black" });
</script>

<style scoped lang="scss">
.map {
  margin: 0 auto;
  position: relative;
}
</style>
