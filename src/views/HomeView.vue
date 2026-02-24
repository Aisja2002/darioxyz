<script setup></script>

<template>
  <main class="home">
    <div class="welcome-card">
      <div class="welcome-card-left">
        <h1 class="main-title">Dario Ostuni</h1>
        <p class="subtitle">I write a lot of code!</p>
        <p class="description">
          Welcome to my professional portfolio. Explore my work, research, and career.
        </p>
      </div>
      <div class="welcome-card-right">
        <img id="profile-picture" src="../assets/dario.jpeg" alt="" />
      </div>
    </div>
  </main>
</template>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - var(--nav-height) - 100px);
}

.main-title {
  font-size: 4rem;
  font-weight: 800;
  margin: 0;
  letter-spacing: -2px;
  background: linear-gradient(135deg, #ffffff 0%, #42b883 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: inline-block;
  cursor: default;
}

@keyframes shimmer {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.welcome-card {
  width: 100%;
  background-color: var(--glass-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 12px;
  border: 1px solid var(--border-color);
  padding: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  display: flex;
  gap: 3rem;
  align-items: center;
}

.welcome-card-left {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.welcome-card-right {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 768px) {
  .welcome-card {
    flex-direction: column-reverse;
    text-align: center;
    padding: 2rem;
  }
}

#profile-picture {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}

h1 {
  font-size: 4rem;
  font-weight: 800;
  margin: 0;
  letter-spacing: -2px;
  background: linear-gradient(135deg, #ffffff 0%, #888888 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  font-size: 1.2rem;
  color: var(--accent-color);
  margin: 0.5rem 0 2rem;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-weight: 600;
}
.description {
  color: var(--secondary-text);
  font-size: 1.1rem;
  line-height: 1.6;
}
</style>
