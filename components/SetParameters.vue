<template>
    <div class="px-6">
        <div class="space-y-6 text-left my-5">
            <div>
                <label for="Function" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Function Name:</label>
                <input type="text" name="Function" id="Function" v-model="EndpointDefinitionObject.operationId" placeholder="codeFileName.helloWorld" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
            </div>
            <div>
                <label for="Function" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description:</label>
                <textarea type="text" name="Function" v-model="EndpointDefinitionObject.description" id="Function" rows="5" placeholder="Will be used to generate more accurate Documentations for you API" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"></textarea>
            </div>
            
            <div class="px-1 w-full" v-if="requestType == 'POST'">
                <input id="bordered-checkbox-2" type="checkbox" :value="false" v-model="isChild" name="bordered-checkbox" class="w-3 h-3 bg-blue-900 text-blue-500 ">
                <label for="bordered-checkbox-2" class="w-full text-center py-4 ml-2 text-sm font-medium dark:text-gray-300">Add a request body this route?</label>
            </div>

            <div class="px-1 w-full" v-if="requestType == 'GET'">
                <input id="bordered-checkbox-2" type="checkbox" :value="false" v-model="isChild" name="bordered-checkbox" class="w-3 h-3 bg-blue-900 text-blue-500 ">
                <label for="bordered-checkbox-2" class="w-full text-center py-4 ml-2 text-sm font-medium dark:text-gray-300">Add url parameters to this route?</label>
            </div>

            <JsonValidator/>
            <button type="submit" @click="onSubmit" class="w-full text-white bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600">Next Step</button>
        </div>
    </div>
</template>

<script lang="ts">
import { GlobalStorage } from '../services/GlobalStorage';
import { EndpointObject } from 'interfaces/OpenAPI';
export default {
    data() {
        return {
            EndpointDefinitionObject : {} as EndpointObject,
            requestType: "",
            isChild : true
        }
    },
    mounted() {
        this.requestType = GlobalStorage.getInstance().get('RequestType');
        
    },
    methods : {
        onSubmit(): void{
            const currentObj = GlobalStorage.getInstance().get('NewPath');
            const requestType = GlobalStorage.getInstance().get('RequestType');
            const currentPathName = GlobalStorage.getInstance().get('PathName');
            currentObj[currentPathName][requestType] = this.EndpointDefinitionObject
            GlobalStorage.getInstance().set('NewPath', currentObj);
            console.log(JSON.stringify(currentObj));
        }
    }
}
</script>

<style scoped>

</style>