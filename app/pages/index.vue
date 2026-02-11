<script setup lang="ts">
import HorizontalDrag from '@/components/HorizontalDrag.vue'
import AppHeader from '@/components/AppHeader.vue'

const unlocked = ref(false)

const handleUnlock = () => {
	unlocked.value = true
}
</script>

<template>
  <div class="container">
    <transition name="fade">
      <AppHeader v-if="unlocked" />
    </transition>

    <div
      v-if="!unlocked"
      class="locked-content"
    >
      <HorizontalDrag
        label="A Takaki Miyajima"
        @unlocked="handleUnlock"
      />
      <!-- コンテンツ切替 -->
      <!-- ロック解除前の表示 -->
      <div class="intro-text">
        <h1>こんにちは！こちらは私のホームページです。</h1>
        <p>左から右へドラッグしてください。</p>
      </div>
    </div>

    <transition name="fade">
      <div
        v-if="unlocked"
        class="unlocked-content"
      >
        <!-- アンロック後の表示 -->
        <HorizontalDrag
          label="A Takaki Miyajima"
          class="fixed-logo"
        />
        <div class="main-content">
          <h1>🎉 アンロック成功！</h1>
          <p>別のコンテンツが表示されます。</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<style>
/* フェードトランジション */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.container {
  min-height: 100vh;
  position: relative;
  /* Remove flex centering on container to allow absolute positioning of header/content logic if needed,
     but let's keep it and override for inner parts */
  display: flex;
  flex-direction: column;
}

.locked-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
}

.unlocked-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px; /* Space for header */
  text-align: center;
  width: 100%;
}

.intro-text {
    margin-top: 2rem;
    max-width: 90%; /* テキストが画面幅を超えないように */
    word-break: break-word;
}
</style>

<style>
/* グローバルスタイル */
*, *::before, *::after {
  box-sizing: border-box;
}

body, html {
  overflow-x: hidden;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
