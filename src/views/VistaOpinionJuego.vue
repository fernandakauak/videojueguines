<script setup>
defineProps({
  juego: {
    type: Object,
    default: null
  }
})
</script>

<template>
  <div v-if="juego" class="tab-opinion">
    <h3>Reseña y Requisitos</h3>
    <p><strong>Opinión del Crítico:</strong> {{ juego.opinion }}</p>
    <p><strong>Requisitos del Sistema:</strong> {{ juego.requisitos }}</p>
  </div>
</template>

<style scoped>
.tab-opinion {
  text-align: left;
  line-height: 1.6;
}

.tab-opinion h3 {
  margin-top: 0;
}
</style>
