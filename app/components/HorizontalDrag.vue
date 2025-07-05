<script setup lang="ts">
import { useEventListener } from '@vueuse/core'

defineProps<{ label: string }>()
const emit = defineEmits<{
	(e: 'unlocked'): void
}>()

// 要素参照
const dragArea = ref<HTMLElement | null>(null)
// ドラッグ状態とロジック用変数
const dragging = ref(false)
const startX = ref(0)
const deltaX = ref(0)
const threshold = 200 // この px 以上ドラッグされたら切替

// ドラッグ開始
const onDragStart = (e: MouseEvent) => {
	e.preventDefault()
	dragging.value = true
	// 開始位置を記録
	startX.value = e.clientX
	deltaX.value = 0
}

// ドラッグ中s
const onDragging = (e: MouseEvent) => {
	if (!dragging.value) return
	const clientX = e.clientX
	deltaX.value = clientX - startX.value
	// 閾値を超えたら emit してドラッグ終了
	if (deltaX.value >= threshold) {
		emit('unlocked')
		cancelDrag()
	}
}

// ドラッグ終了・キャンセル
const cancelDrag = () => {
	dragging.value = false
	deltaX.value = 0
}

onMounted(() => {
	if (!dragArea.value) return
	// Mouse
	/* ドラッグ開始 */
	useEventListener(dragArea, 'mousedown', onDragStart, { passive: false })
	/* ドラッグ中 */
	useEventListener(window, 'mousemove', onDragging, { passive: false })
	/* 終了時 */
	useEventListener(window, 'mouseup', cancelDrag)
	// TODO: Implement TouchEvent if needed
})
</script>

<template>
  <div
    ref="dragArea"
    class="drag-area"
  >
    <!-- ドラッグ対象のアイコンやテキスト -->
    <div class="drag-handle">
      {{ label }}
    </div>
  </div>
</template>

<style scoped>
.drag-area {
  user-select: none;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 1rem;
}
.drag-handle {
  cursor: grab;
  display: inline-block;
  font-size: 1.25rem;
  font-weight: bold;
  /* pointer-events を無効にせずにドラッグを許可 */
  pointer-events: auto;  /* デフォルト */
}
</style>
