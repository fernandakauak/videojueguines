<script setup>
defineProps({
  juego: {
    type: Object,
    default: null
  }
})
</script>

<template>
  <div v-if="juego" class="tab-autor">
    <h3>Información del Creador</h3>
    <p><strong>Desarrollador / Estudio:</strong> {{ juego.desarrollador }}</p>
    <p><strong>Año de Publicación:</strong> {{ juego.anio }}</p>
  </div>
</template>

<style scoped>
.tab-autor {
  text-align: left;
  line-height: 1.6;
}

.tab-autor h3 {
  margin-top: 0;
}
</style>