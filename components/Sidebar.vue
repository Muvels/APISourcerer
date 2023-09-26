<template>
  <div :class="`flex h-full ${isRight ? 'justify-end' : 'justify-start'}`">
    <div
      ref="sidebar"
      :class="`flex-none p-5 min-w-[100px] max-w-[300px] ${isRight ? 'border-l' : 'border-r'} overflow-x-hidden`"
      :style="{ width: sidebarWidth + 'px' }"
      @mousedown="startDrag"
    >
      <div class="">
        <slot></slot>
      </div>
    </div>
    <div class="flex-grow bg-white"></div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    isRight: {
      type: Boolean,
      default: false,
    },
    defaultwidth: {
      type: Number,
      default: 100,
    },
  },
  data() {
    return {
      sidebarWidth: this.defaultwidth, // Initial width of the sidebar
      isDragging: false, // Flag to track if the sidebar is being dragged
      startX: 0, // Initial mouse position when starting the drag
    };
  },
  methods: {
    startDrag(event : MouseEvent) {
      this.isDragging = true;
      this.startX = event.clientX;
      document.addEventListener('mousemove', this.drag);
      document.addEventListener('mouseup', this.stopDrag);
    },
    drag(event : MouseEvent) {
      if (this.isDragging) {
        let deltaX : number = 0
        if (this.isRight){
          deltaX = this.startX - event.clientX;
        }
        else {
          deltaX = event.clientX - this.startX;
        }
        this.sidebarWidth += deltaX;
        this.startX = event.clientX;
      }
    },
    stopDrag() {
      this.isDragging = false;
      document.removeEventListener('mousemove', this.drag);
      document.removeEventListener('mouseup', this.stopDrag);
    },
  },
};
</script>

<style scoped>
.resize-x {
  resize: horizontal;
}

.overflow-y-auto {
  overflow-y: auto;
}

.flex {
  display: flex;
}

.justify-start {
  justify-content: flex-start;
}

.justify-end {
  justify-content: flex-end;
}

.h-full {
  height: calc(100vh - 65px); /* Adjust 64px to your actual navbar height */
}
</style>