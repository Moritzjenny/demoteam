<template>

<div style="height: 100px"></div>

  <PageEntryContainer color="#575757" :shadowed="true" style="justify-content: center; align-content: center" class="flex column">
     <div class="team-component-card-container q-my-xl">
    <TeamCardComponent image-url="1.png" name="Gian Cla" sub-title="a.k.a Gianci (Coach)"
                       description="10. Saison/Season

Somit ist er der Erfahrenste im Demofahren und gleichzeitig im Bier trinken.

Thus, he is the most experienced in demo skiing and drinking beer at the same time.
"/>
    <TeamCardComponent image-url="2.png" name="" sub-title=""
                       description=""/>
    <TeamCardComponent image-url="3.png" name=" " sub-title=" "
                       description=""/>
    <TeamCardComponent image-url="4.png" name=" " sub-title=""
                       description=""/>
    <TeamCardComponent image-url="5.png" name=" " sub-title=""
                       description=" "/>
    <TeamCardComponent image-url="6.png" name=" " sub-title=""
                       description=""/>
    <TeamCardComponent image-url="7.png" name=" " sub-title=" "
                       description=""/>
    <TeamCardComponent image-url="8.png" name=" " sub-title=" "
                       description=""/>
  </div>
  </PageEntryContainer>
</template>

<script setup lang="ts">
import TeamCardComponent from 'components/TeamCardComponent.vue'
import PageEntryContainer from 'components/containers/PageEntryContainer.vue';
</script>

<style scoped>

.team-component-card-container {
  display: flex;
  flex-wrap: wrap;
  max-width: 1100px;
  justify-content: center;
  align-items: center;
}

</style>
