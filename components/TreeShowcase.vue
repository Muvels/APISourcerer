<template>
    <div>
        <h3>Overview Tree</h3>
        <TreeView :node="treeData" />
    </div>
</template>

<script lang="ts">
import TreeView from './TreeView.vue';
export default {
    data() {
        return {
            treeData: {
                name: "Server",
                children: [
                    { name: "/read" },
                    { name: "/delete" },
                    {
                        name: "/update",
                        children: [
                            {
                                name: "body",
                                children: [{ name: "id : Number" }, { name: "type : String" }]
                            },
                            { name: "Sub Child 2" },
                            { name: "Sub Child 3" },
                            {
                                name: "Sub Child 4",
                                children: [{ name: "Inner Sub Child 3" }, { name: "Inner Sub Child 4" }]
                            }
                        ]
                    },
                    { name: "/write" },
                ]
            }
        };
    },
    components: { TreeView }
}
</script>