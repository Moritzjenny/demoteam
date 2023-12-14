<template>
  <SubPageHeaderComponent title="Unser Team" header-image="../team.jpg"/>
  <div class="row justify-evenly">
    <TeamComponent/>
  </div>
</template>

<script setup lang="ts">
import TeamComponent from 'components/TeamComponent.vue';
import SubPageHeaderComponent from 'components/SubPageHeaderComponent.vue';


</script>
