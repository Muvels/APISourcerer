<template>
    <div class="px-6">
        <div class="space-y-6 text-left my-5">
            <div>
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Endpoint Name:</label>
                <input type="text" name="name" id="name" v-model="displayname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Just some internal Name" required>
            </div>
            <div>
                <label for="path" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Path:</label>
                <input type="text" name="path" id="path" v-model="pathname" :placeholder="displayname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
            </div>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Is part of existing Path?:</label>
            <div class="flex items-center border border-gray-200 rounded dark:border-gray-700">
                <div class="text-center w-full py-4">
                    <input id="bordered-checkbox-1" type="radio" :value="true" v-model="isChild" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="bordered-checkbox-1" class="w-full text-center py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
                </div>
                <div class="text-center w-full py-4">
                    <input checked id="bordered-checkbox-2" type="radio" :value="false" v-model="isChild" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="bordered-checkbox-2" class="w-full text-center py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                </div>
            </div>
            <div v-if="isChild">
                <label for="path" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Parent Path:</label>
                <input type="text" name="path" id="path" v-model="pathname" :placeholder="displayname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
            </div>
            <button type="submit" @click="onSubmit" class="w-full text-white bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600">Next Step</button>
        </div>
    </div>
</template>

<script lang="ts">
import { GlobalStorage } from '../services/GlobalStorage';
import { PathsObject, PathItemObject } from 'interfaces/OpenAPI';
export default {
    data() {
        return {
            isChild: false,
            displayname: '',
            pathname: '',
            PathDefinitionObject : {} as PathsObject
        }
    },
    methods : {
        onSubmit(): void{
            let localPathItemObject : PathItemObject = {} as PathItemObject;
            this.PathDefinitionObject[this.pathname] = localPathItemObject;
            GlobalStorage.getInstance().set('NewPath', this.PathDefinitionObject);
            GlobalStorage.getInstance().set('PathName', this.pathname);
            console.log(JSON.stringify(this.PathDefinitionObject));
            this.$emit('nextStep');
        }
    }
}
</script>

<style scoped>

</style>