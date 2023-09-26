<template>
    <div>
      <textarea v-model="schemasObject" rows="5" cols="60" class="border p-2 mt-2 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-600 dark:border-gray-500 dark:text-white" @input="formatInput">{{ formattedSchemasObject }}</textarea>
      <div v-if="validationError" class="text-red-500">{{ validationError }}</div>
      <pre v-else class="mt-2 p-2 border rounded-lg dark:bg-gray-700 dark:text-white" :class="formattedStyle">{{ formattedSchemasObject }}</pre>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    data() {
      return {
        schemasObject: '',
        validationError: '',
        formattedSchemasObject: '',
      };
    },
    watch: {
      schemasObject(newValue) {
        this.validateSchemasObject(newValue);
        this.formatJson(newValue);
      },
    },
    computed: {
      formattedStyle() {
        if (this.isValidSchemasObject) {
          return 'pretty-json';
        }
        return '';
      },
      isValidSchemasObject() {
        try {
          const schemas = JSON.parse(this.schemasObject);
          return this.validateSchemasProperties(schemas);
        } catch (error) {
          return false;
        }
      },
    },
    methods: {
        formatJson(value: string) {
            try {
                if(value){
                    const jsonObject = JSON.parse(value);
                    this.schemasObject = JSON.stringify(jsonObject, null, 2);
                }
            } catch (error) {
                //Do nothing here
            }
        },
        validateSchemasObject(schemasObject: string) {
            try {
            JSON.parse(schemasObject);
            this.validationError = '';
            } catch (error: any) {
            this.validationError = error.message;
            }
        },
        validateSchemasProperties(schemas: any) {
            // Validate the properties of the schemas object
            // Example validation checks
            if (!schemas || typeof schemas !== 'object') {
            this.validationError = 'Invalid schemas object.';
            return false;
            }
            // Add more validation checks for other properties as needed
            
            // All validation checks passed
            return true;
        },
        formatInput() {
            const indentSize = 2; // Number of spaces for each level of indentation
            const lines = this.schemasObject.split('\n');
            let formattedSchemasObject = '';
            let indentLevel = 0;
            
            lines.forEach((line) => {
            const trimmedLine = line.trim();
            if (trimmedLine.startsWith('}')) {
                indentLevel--;
            }
            
            const indent = ' '.repeat(indentSize * indentLevel);
            formattedSchemasObject += indent + line + '\n';
            
            if (trimmedLine.endsWith('{') || trimmedLine.endsWith(',')) {
                indentLevel++;
            }
            });
            
            this.formattedSchemasObject = formattedSchemasObject;
        },
    },
  };
  </script>
  
  <style>
  .pretty-json {
    white-space: pre-wrap;
    background-color: #f8f8f8;
    color: #333;
  }
  </style>
  