<template>
    <div class="">
      <Navbar/>
      <div class="flex">
      <Sidebar :isRight="false">
        <!-- Content for the sidebar goes here -->
        Content
      </Sidebar>

      <!-- Rest of your page content -->
      <div class="flex-grow">
        <CreateModal v-show="showEndpointModal" @close-modal="showEndpointModal = false"/>
        <Content/>
      </div>

      <Sidebar :isRight="true" :defaultwidth="200">
        <!-- Content for the sidebar goes here -->
        <TreeShowcase/>
      </Sidebar>
    </div>

    </div>

</template>

<script lang="ts">
import { ShortcutManager } from '../services/ShortcutHandler';

export default {
  data() {
    return {
      showEndpointModal: true,
    }
  },
  mounted() {
      const shortcutManager = new ShortcutManager();
      shortcutManager
        .register("Ctrl+G", () => this.showEndpointModal = true)
  },
}
</script>