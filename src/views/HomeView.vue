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
        <div class="profile-interaction-wrapper">
          <div class="profile-pic-border">
            <img id="profile-picture" src="../assets/dario.jpeg" alt="Dario Ostuni" />
          </div>
          <div class="ellipses">
            <div class="ellipse ellipse-1"></div>
            <div class="ellipse ellipse-2"></div>
            <div class="ellipse ellipse-3"></div>
          </div>
        </div>
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
    var(--accent-color),
    #5260ff,
    #ffda37,
    #ff3d8e,
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

.profile-interaction-wrapper {
  position: relative;
  width: 240px;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.profile-interaction-wrapper:hover {
  transform: scale(1.1);
}

.profile-pic-border {
  padding: 4px;
  border-radius: 50%;
  background: linear-gradient(
    45deg,
    var(--accent-color),
    #5260ff,
    #ffda37,
    #ff3d8e,
    var(--accent-color)
  );
  background-size: 200% 200%;
  animation: shimmer 8s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

#profile-picture {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
}

.profile-interaction-wrapper:hover .profile-pic-border {
  transform: scale(1.05);
}

/* Ellipses styles */
.ellipses {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.ellipse {
  position: absolute;
  top: 50%;
  left: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0.8);
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.ellipse-1 {
  width: 280px;
  height: 140px;
  border-color: var(--accent-color);
  transform: translate(-50%, -50%) rotate(45deg) scale(0.8);
}

.ellipse-2 {
  width: 300px;
  height: 150px;
  border-color: #5260ff;
  transform: translate(-50%, -50%) rotate(-30deg) scale(0.8);
  transition-delay: 0.1s;
}

.ellipse-3 {
  width: 260px;
  height: 130px;
  border-color: #ff3d8e;
  transform: translate(-50%, -50%) rotate(110deg) scale(0.8);
  transition-delay: 0.2s;
}

.profile-interaction-wrapper:hover .ellipse {
  opacity: 0.6;
}

.profile-interaction-wrapper:hover .ellipse-1 {
  transform: translate(-50%, -50%) rotate(225deg) scale(1.1);
}

.profile-interaction-wrapper:hover .ellipse-2 {
  transform: translate(-50%, -50%) rotate(150deg) scale(1.1);
}

.profile-interaction-wrapper:hover .ellipse-3 {
  transform: translate(-50%, -50%) rotate(290deg) scale(1.1);
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

  .profile-interaction-wrapper {
    width: 200px;
    height: 200px;
    margin-bottom: 2rem;
  }

  #profile-picture {
    width: 160px;
    height: 160px;
  }
}
</style>
