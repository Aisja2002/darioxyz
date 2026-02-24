<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const openDropdown = ref(null)

const toggleDropdown = (name) => {
  if (openDropdown.value === name) {
    openDropdown.value = null
  } else {
    openDropdown.value = name
  }
}

const closeDropdowns = (event) => {
  if (!event.target.closest('.dropdown')) {
    openDropdown.value = null
  }
}

onMounted(() => {
  window.addEventListener('click', closeDropdowns)
})

onUnmounted(() => {
  window.removeEventListener('click', closeDropdowns)
})
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>

        <div class="dropdown" :class="{ 'is-open': openDropdown === 'work' }">
          <button class="dropbtn" @click.stop="toggleDropdown('work')">
            Work <span class="chevron">▾</span>
          </button>
          <div class="dropdown-content">
            <RouterLink to="/work/experience" @click="openDropdown = null"
              >Work Experience</RouterLink
            >
            <RouterLink to="/work/projects" @click="openDropdown = null">Projects</RouterLink>
          </div>
        </div>

        <div class="dropdown" :class="{ 'is-open': openDropdown === 'education' }">
          <button class="dropbtn" @click.stop="toggleDropdown('education')">
            Education <span class="chevron">▾</span>
          </button>
          <div class="dropdown-content">
            <RouterLink to="/education/diplomas" @click="openDropdown = null">Diplomas</RouterLink>
            <RouterLink to="/education/research" @click="openDropdown = null">Research</RouterLink>
          </div>
        </div>

        <div class="dropdown" :class="{ 'is-open': openDropdown === 'competitive' }">
          <button class="dropbtn" @click.stop="toggleDropdown('competitive')">
            Competitive Programming <span class="chevron">▾</span>
          </button>
          <div class="dropdown-content">
            <RouterLink to="/competitive-programming/career" @click="openDropdown = null"
              >Career</RouterLink
            >
            <RouterLink to="/competitive-programming/events" @click="openDropdown = null"
              >Events</RouterLink
            >
          </div>
        </div>

        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.dropbtn {
  background: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  padding: 0.5rem 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: color 0.3s ease;
}

.dropbtn:hover {
  color: #42b883;
}

.chevron {
  font-size: 0.8em;
  transition: transform 0.3s ease;
}

.is-open .chevron {
  transform: rotate(180deg);
}
</style>
