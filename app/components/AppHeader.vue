<script setup lang="ts">
</script>

<template>
  <header class="app-header">
    <nav>
      <ul class="nav-list">
        <li><a href="#about">About me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.app-header {
  width: 100%;
  padding: 1rem 2rem;
  background-color: transparent; /* Or a specific color/blur */
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end; /* Align to right? or center? User didn't specify, default to standard or right */
  z-index: 10;
}

.nav-list {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-list a {
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  font-size: 1.1rem;
  transition: opacity 0.2s;
}

.nav-list a:hover {
  opacity: 0.7;
}
@media (max-width: 768px) {
  .app-header {
    justify-content: center;
    padding: 0.5rem;
    width: 100%;
    box-sizing: border-box; /* パディングを含めた幅計算 */
  }
  
  .nav-list {
    gap: 0.5rem; /* 間隔をさらに詰める */
    flex-wrap: wrap; /* 必要なら折り返し */
    justify-content: center;
  }

  .nav-list a {
    font-size: 0.8rem;
  }
}
</style>
