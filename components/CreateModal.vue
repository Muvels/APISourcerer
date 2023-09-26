<template>
    <div class="modal-overlay" @click="$emit('close-modal'); activeStep = 2">
    <div class="modal"  @click.stop>
        <!-- Main modal -->
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg  dark:bg-gray-700 h-full">
            <!-- Modal header -->
            <div class="px-6 pb-4 border-b rounded-t dark:border-gray-600">
                <ProgressBar
                  :steps="steps"
                  :active-step=activeStep
                  :is-reactive="false"
                />
                <h3 class="text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
                    {{ steps[activeStep] }}
                </h3>
            </div>
            <!-- Modal body -->

            <DefineEndpoint @nextStep="nextPage" v-if="activeStep == 0"/>
            <RequestType @nextStep="nextPage" v-if="activeStep == 1"/>
            <SetParameters @nextStep="nextPage" v-if="activeStep == 2"/>

        </div>
    </div>
</div>
</template>
  
  <script lang="ts">
    import ProgressBar from './StepIndicator.vue';
    import RequestType from './RequestType.vue';
    import { ShortcutManager } from '../services/ShortcutHandler';
    export default {
    components: { ProgressBar, RequestType },
    data(){
        return {
            steps : [
                'Define Endpoint',
                'Choose Request Type',
                'Define Parameters',
                'Send Invitations',
                'Done',
                
            ],
            activeStep : 2,
            requestType : ''
        }
    },
    methods : {
        nextPage(){
            this.activeStep += 1;
        }
    },
    mounted(){
      const shortcutManager = new ShortcutManager();
      shortcutManager
        .register("Escape", () => {this.$emit('close-modal'); this.activeStep = 0})
    },
    
}
  </script>

<style scoped>

.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000a1;
  z-index: 10;
}
.modal {
  text-align: center;
  background-color: white;
  max-height: 700px;
  width: 500px;
  padding: 10px 0;
  border-radius: 10px;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;}
.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

.close-img {
  width: 25px;
}

.check {
  width: 150px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

button {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
}
</style>