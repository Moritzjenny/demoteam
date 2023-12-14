<template>
  <SubPageHeaderComponent title="Impressum" header-image="../impressum.jpg" />
  <div class="row justify-evenly">

    <PageEntryContainer color="#383838" :shadowed="false" class="flex column" style="align-content:center">

      <div style="max-width: 1100px" class="agb-text q-mb-xl q-mx-md">
        <h4>Impressum</h4>
        <b>Kontakt Adresse</b><br>
        Schneesportzentrum Purtum<br>
        Somvih 27<br>
        7524 Zuoz<br><br>

        <b>Vertretungsberechtigte Person(en)</b><br>
        Gian Cla Haller, Vereinspräsident<br><br>

      </div>

    </PageEntryContainer>

  </div>
</template>

<script setup lang="ts">
import PageEntryContainer from 'components/containers/PageEntryContainer.vue';
import SubPageHeaderComponent from 'components/SubPageHeaderComponent.vue';
</script>

<style scoped>

.agb-text {
  font-family: 'Urbanist', sans-serif;
  font-weight: 400;
  font-size: clamp(15px, 3vw, 17px);
  color: white;
  text-align: left;
}


.image-container img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; /* Adjust as needed */
}
</style>
