<script setup lang="ts">
import HorizontalDrag from '@/components/HorizontalDrag.vue'

const unlocked = ref(false)

const handleUnlock = () => {
  unlocked.value = true
}
</script>

<template>
  <HorizontalDrag label="Welcome to my homepage" @unlocked="handleUnlock" />
  <!-- コンテンツ切替 -->
  <transition name="fade">
    <div v-if="!unlocked" key="front">
      <!-- ロック解除前の表示 -->
      <h1>こんにちは！こちらは私のホームページです。</h1>
      <p>左から右へドラッグしてください。</p>
    </div>
    <div v-else key="back">
      <!-- アンロック後の表示 -->
      <h1>🎉 アンロック成功！</h1>
      <p>別のコンテンツが表示されます。</p>
    </div>
  </transition>
</template>


<style>
/* フェードトランジション */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;  /* CSSトランジションで滑らかに切替 */
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
