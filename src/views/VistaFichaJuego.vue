<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { obtenerJuegoPorId } from '../juegos.js'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const router = useRouter()
const juego = ref(null)
const cargando = ref(true)
const error = ref(false)

function cargarJuego(idActual) {
  cargando.value = true
  error.value = false
  juego.value = null

  obtenerJuegoPorId(idActual).then((res) => {
    cargando.value = false
    if (!res) {
      error.value = true
    } else {
      juego.value = res
    }
  })
}

watch(
  () => props.id,
  (nuevoId) => {
    cargarJuego(nuevoId)
  },
  { immediate: true }
)

function volver() {
  router.push('/juegos')
}
</script>

<template>
  <section class="ficha-container">
    <div v-if="cargando" class="cargando-box">
      <h2>Cargando información del juego...</h2>
    </div>

    <div v-else-if="error" class="error-box">
      <h2>¡Ups! El juego solicitado no existe</h2>
      <p>No pudimos encontrar ningún juego con el identificador recibido.</p>
      <button @click="volver">Volver al catálogo</button>
    </div>

    <div v-else-if="juego" class="ficha-content">
      <div class="ficha-header">
        <img :src="juego.img" :alt="juego.nombre" />
        <div class="ficha-title-data">
          <h1>{{ juego.nombre }}</h1>
          <p class="badge-info">Año: {{ juego.anio }} | Clasificación: {{ juego.clasificacion }}</p>
        </div>
      </div>

      <nav class="tabs-nav">
        <router-link :to="`/juegos/${id}/data`" exact-active-class="active-tab">Data General</router-link>
        <router-link :to="`/juegos/${id}/autor`" exact-active-class="active-tab">Desarrollador</router-link>
        <router-link :to="`/juegos/${id}/opinion`" exact-active-class="active-tab">Opinión y Requisitos</router-link>
      </nav>

      <div class="tab-body">
        <router-view :juego="juego" />
      </div>

      <button class="btn-back" @click="volver">Volver a la lista</button>
    </div>
  </section>
</template>

<style scoped>
.ficha-container {
  width: 90%;
  max-width: 900px;
  margin: 2rem auto;
  box-sizing: border-box;
}

.cargando-box, .error-box {
  background-color: indigo;
  color: lightpink;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
}

.error-box button, .btn-back {
  background-color: lightpink;
  color: indigo;
  border: none;
  padding: 0.6rem 1.2rem;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 1rem;
}

.ficha-content {
  background-color: indigo;
  color: lightpink;
  padding: 1.5rem;
}

.ficha-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.ficha-header img {
  width: 140px;
  height: 140px;
  object-fit: cover;
  border: 2px solid white;
}

.ficha-title-data h1 {
  margin: 0 0 0.5rem 0;
}

.badge-info {
  font-size: 0.9rem;
  opacity: 0.9;
}

.tabs-nav {
  display: flex;
  gap: 0.5rem;
  border-bottom: 2px solid lightpink;
  margin-bottom: 1rem;
}

.tabs-nav a {
  text-decoration: none;
  color: lightpink;
  padding: 0.6rem 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-weight: bold;
}

.tabs-nav a.active-tab {
  background-color: lightpink;
  color: indigo;
}

.tab-body {
  padding: 1rem 0;
  min-height: 120px;
}
</style>
