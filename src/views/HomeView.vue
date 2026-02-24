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
        <img id="profile-picture" src="../assets/dario.jpeg" alt="Dario Ostuni" />
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

.main-title {
  font-size: 4.5rem;
  font-weight: 800;
  margin: 0;
  letter-spacing: -2px;
  display: inline-block;
  background: linear-gradient(
    45deg,
    #ffffff,
    var(--accent-color),
    #5260ff,
    #ffda37,
    var(--accent-color)
  );
  background-size: 300% 300%;
  animation: shimmer 8s linear infinite;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
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

#profile-picture {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid var(--border-color);
}

@media (max-width: 768px) {
  .welcome-card {
    flex-direction: column-reverse;
    text-align: center;
    padding: 2rem;
  }
  .main-title {
    font-size: 3rem;
  }
}
</style>
