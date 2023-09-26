<template>
    <div class="">
        <vue-tree 
            class="h-full"
            style="width: 100%;"
            :dataset="sampleData"
            :config="treeConfig"
        />
    </div>

</template>
<script lang="ts">
import VueTree from "../components/d3tree.vue";
export default {
  components: { VueTree },
  data() {
    return {
      showTree: false,
      sampleData: {
        value: "Server",
        children: [
          { value: "/v1", children: [{ value: "/read" }, { value: "/write" }] },
          { value: "/v2" },
        ],
      },
      treeConfig: { nodeWidth: 120, nodeHeight: 80, levelHeight: 200 },
    };
  }
}
</script>
<style scoped>
.h-full {
  height: calc(100vh - 65px); /* Adjust 64px to your actual navbar height */
}

</style>
