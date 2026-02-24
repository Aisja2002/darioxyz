<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const subtitles = [
  'I write a lot of code!',
  'I have a PhD in Computer Science!',
  'I do research!',
  'I like building cool stuff!',
  "I'm a teacher!",
  'I do competitive programming!',
  "I'm an event organizer!",
  "I'm a backend developer!",
  "I'm a network engineer!",
  'I do embedded systems!',
  'I make software!',
]

const currentIndex = ref(0)
let timer = null

onMounted(() => {
  timer = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % subtitles.length
  }, 3000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <main class="home">
    <div class="welcome-card-outer-border">
      <div class="welcome-card">
        <div class="welcome-card-left">
          <div class="title-wrapper">
            <h1 class="main-title">Dario Ostuni</h1>
          </div>
          <div class="subtitle-container">
            <Transition name="flip" mode="out-in">
              <div :key="currentIndex" class="subtitle-text">
                {{ subtitles[currentIndex] }}
              </div>
            </Transition>
          </div>
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
    </div>
  </main>
</template>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - var(--nav-height) - 100px);
  perspective: 2000px;
}

.welcome-card-outer-border {
  width: 100%;
  padding: 3px;
  border-radius: 20px;
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.276),
    #0a5865,
    #262d7d,
    #a28b25,
    #89214d,
    rgba(255, 255, 255, 0.267)
  );
  background-size: 300% 300%;
  animation: shimmer 8s linear infinite;
  box-shadow: 0 15px 45px rgba(0, 0, 0, 0.4);
  backdrop-filter: brightness(0.2);
}

.welcome-card {
  width: 100%;
  background: linear-gradient(135deg, rgba(20, 20, 20, 0.8) 0%, rgba(10, 10, 10, 0.9) 100%);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border-radius: 18px;
  padding: 5rem;
  display: flex;
  gap: 4rem;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.welcome-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  opacity: 0.03;
  pointer-events: none;
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
  background: linear-gradient(45deg, white, var(--accent-color), #5260ff, #ffda37, #ff3d8e, white);
  background-size: 300% 300%;
  animation: shimmer 8s linear infinite;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: default;
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
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

.main-title:hover {
  transform: scale(1.02);
}

.title-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 0.5rem;
}

.subtitle-container {
  height: 2.5rem;
  overflow: hidden;
  margin: 0.5rem 0 2rem;
  perspective: 1000px;
}

.subtitle-text {
  font-size: 1.5rem;
  color: var(--text-color);
  text-transform: uppercase;
  letter-spacing: 4px;
  font-weight: 600;
  height: 100%;
  display: flex;
  align-items: center;
}

.flip-enter-active,
.flip-leave-active {
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.flip-enter-from {
  opacity: 0;
  transform: rotateX(-90deg) translateY(20px);
}

.flip-leave-to {
  opacity: 0;
  transform: rotateX(90deg) translateY(-20px);
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
