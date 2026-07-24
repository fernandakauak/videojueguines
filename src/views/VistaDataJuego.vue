<script setup>
defineProps({
  juego: {
    type: Object,
    default: null
  }
})
</script>

<template>
  <div v-if="juego" class="tab-data">
    <h3>Ficha Técnica</h3>
    <p><strong>Género:</strong> {{ Array.isArray(juego.genero) ? juego.genero.join(', ') : juego.genero }}</p>
    <p><strong>Plataformas:</strong> {{ Array.isArray(juego.plataforma) ? juego.plataforma.join(', ') : juego.plataforma }}</p>
    <p><strong>Descripción:</strong> {{ juego.descripcion }}</p>
  </div>
</template>

<style scoped>
.tab-data {
  text-align: left;
  line-height: 1.6;
}

.tab-data h3 {
  margin-top: 0;
}
</style>