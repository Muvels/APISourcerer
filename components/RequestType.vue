<template>
    <div class="px-6">
        <p class="leading-5 text-sm text-gray-500 dark:text-gray-400 my-5 mb-7 "> By selecting the appropriate request type, such as GET, POST, PUT, DELETE, or others, you can accurately describe your API. This allows clear documentation and communication for other developers.</p>
        <ul class="my-4 space-y-3">
            <li>
                <button @click="$emit('nextStep', 'GET'); setRequestType('GET');" class="w-full flex items-center p-3 text-sm font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    <span class="w-10 px-2 inline-flex items-center justify-center  ml-3 text-[0.5rem] font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">GET</span>
                    <span class="w-full ml-3 whitespace-nowrap">GET Endpoint</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-7 inline-flex items-center justify-center px-2 mr-1 text-gray-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>                       
                </button>
            </li>
            <li>
                <button @click="$emit('nextStep', 'POST'); setRequestType('POST');" class="w-full flex items-center p-3 text-sm font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    <span class="w-10 px-2 inline-flex items-center justify-center  ml-3 text-[0.5rem] font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">POST</span>
                    <span class="w-full ml-3 whitespace-nowrap">POST Endpoint</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-7 inline-flex items-center justify-center px-2 mr-1 text-gray-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>                       
                </button>
            </li>
            <li>
                <button @click="$emit('nextStep', 'PUT'); setRequestType('PUT');" class="w-full flex items-center p-3 text-sm font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    <span class="w-10 px-2 inline-flex items-center justify-center  ml-3 text-[0.5rem] font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">PUT</span>
                    <span class="w-full ml-3 whitespace-nowrap">PUT Endpoint</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-7 inline-flex items-center justify-center px-2 mr-1 text-gray-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>                       
                </button>
            </li>
            <li>
                <button @click="$emit('nextStep', 'PATCH'); setRequestType('PATCH');" class="w-full flex items-center p-3 text-sm font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    <span class="w-10 px-2 inline-flex items-center justify-center ml-3 text-[0.5rem] font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">PATCH</span>
                    <span class="w-full ml-3 whitespace-nowrap">PATCH Endpoint</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-7 inline-flex items-center justify-center px-2 mr-1 text-gray-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>                       
                </button>
            </li>
            <li>
                <button @click="$emit('nextStep', 'DELETE'); setRequestType('DELETE');" class="w-full flex items-center p-3 text-sm font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    <span class="w-10 px-2 inline-flex items-center justify-center ml-3 text-[0.5rem] font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">DELETE</span>
                    <span class="w-full ml-3 whitespace-nowrap">DELETE Endpoint</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-7 inline-flex items-center justify-center px-2 mr-1 text-gray-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>                       
                </button>
            </li>
        </ul>
        <div class="">
            <span class="inline-flex items-center mb-5 text-xs font-normal text-gray-500 hover:underline dark:text-gray-400">
                <svg aria-hidden="true" class="w-3 h-3 mr-2"  focusable="false" data-prefix="far" data-icon="question-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"></path></svg>
                You can even open this Page with Shortcut "Ctrl+G"</span>
        </div>
    </div>
</template>
<script lang="ts">
import { PathItemObject } from 'interfaces/OpenAPI';
import { GlobalStorage } from '../services/GlobalStorage'
export default {
    data(){
        return {}
    },
    methods : {
        setRequestType(value : string){
            const currentPath = GlobalStorage.getInstance().get('NewPath');
            const currentPathName = GlobalStorage.getInstance().get('PathName');
            const pathItem : PathItemObject = {} as PathItemObject;
            (currentPath as any)[currentPathName][value as any] = pathItem;
            GlobalStorage.getInstance().set('RequestType', value);
            GlobalStorage.getInstance().set('NewPath', currentPath);
            console.log(JSON.stringify(currentPath));
        }
    }
}

</script>