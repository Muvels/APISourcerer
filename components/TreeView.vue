<template>
    <div>
    <div
      @click="nodeClicked"
      :style="{'margin-left': `${depth * 20}px`}"
    >
      <span class="indicator" v-if="node!.children && node!.children.length > 0">
        {{ expanded ? ' -' : ' +' }}
      </span>
      <span class="node-name" onclick="this.getSelectedNodeText()">{{ node!.name }}</span>
    </div>
    <div v-if="expanded">
      <Treeview
        v-for="child in node!.children"
        :key="child.name"
        :node="child"
        :depth="depth + 1"
        :selected-node="selectedNode"
        @node-selected="nodeSelected"
      />
    </div>
  </div>
  </template>
  
  <script lang="ts">

export default {
  name: "Treeview",
  props: {
    node: Object,
    depth: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      expanded: false,
      selectedNode : {name: ''},
    };
  },
  methods: {
    nodeClicked() {
      this.expanded = !this.expanded;
    },
    nodeSelected(node : any) {
      this.selectedNode = node;
    },
    getSelectedNodeText() {
      if (this.selectedNode) {
        return this.selectedNode.name;
      } else {
        return "No node selected.";
      }
    },
  },
};
  </script>
  
  <style scoped>
.node {
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 4px 8px;
  transition: background-color 0.3s ease;
}

.node:hover {
  background-color: #f5f5f5;
}



.indicator.expanded {
  transform: rotate(90deg);
}

.node-name {
  font-size: 12px;
  font-weight: lighter;
  margin-left: 8px;
}




  </style>
  