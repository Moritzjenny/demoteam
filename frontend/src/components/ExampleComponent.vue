<template>
  <div>
    <button @click="handleBackendCall">Call backend function</button>
    <p v-if="backendResponse">{{ backendResponse }}</p>
  </div>

</template>

<script setup lang="ts">

import {ref} from 'vue';

const backendResponse = ref('');

function handleBackendCall() {
  fetch('/api/data')
    .then(response => response.json())
    .then(data => {
      backendResponse.value = data.message;
    })
    .catch(error => {
      console.error(error);
    });
}


</script>
