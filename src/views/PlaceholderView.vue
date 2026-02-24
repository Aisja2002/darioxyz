<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <div class="placeholder">
    <h1>{{ route.name }}</h1>
    <p>This is a placeholder for the {{ route.name }} page.</p>
  </div>
</template>

<style scoped>
.placeholder {
  padding: 4rem 2rem;
  text-align: center;
}

h1 {
  color: var(--accent-color);
  margin-bottom: 1rem;
}

p {
  color: var(--secondary-text);
}
</style>
