<template>
  <SubPageHeaderComponent title="" header-image="../skier1.jpg" />
  <div class="row justify-evenly">

    <PageEntryContainer color="#383838" :shadowed="false" class="flex column" style="align-content:center">


      <div style="max-width: 900px" class="text q-ma-xl">

        Acht leidenschaftliche Skifahrerinnen und Skifahrer meistern einen Hang von 300-400 Metern, während sie kunstvolle Formationen und verschiedene choreografische Elemente perfekt synchronisieren. Mit intensivem Training bereitet sich das Team auf verschiedene Events vor, darunter das Swiss Snow Happening 2024, wo ihre beeindruckenden Darbietungen das Publikum fesseln.
  <br><br>
        Das Team agiert als Verein und bildet eine Gemeinschaft.
      </div>

      <div style="max-width: 1140px" class="center-content column">
        <image-text-component title="" image="instateam.jpg" text="" :request-button="false" icon="insta.png" icon-link="https://www.instagram.com/demoteam_zuoz/" column/>
      </div>


      <q-btn
        aria-label="Menu"
        class="bg-primary q-mr-lg text-white menu q-mx-auto q-mb-xl"
        label="Mitglied Werden"
        style="border-radius: 20px; max-width: 200px"
        @click="openDialog($q)"
      />

    </PageEntryContainer>

  </div>
</template>

<script setup lang="ts">
import PageEntryContainer from 'components/containers/PageEntryContainer.vue';
import SubPageHeaderComponent from 'components/SubPageHeaderComponent.vue';
import {openDialog} from 'src/helper/dialog-helper';
import ImageTextComponent from 'components/ImageTextComponent.vue';
</script>

<style scoped>
.text {
  font-family: 'Urbanist', sans-serif;
  font-weight: 400;
  font-size: min(17px, 4vw);
  color: white;
  text-align: center;
}

.center-content {
  align-items: center;
  justify-content: center;
}


.image-container img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; /* Adjust as needed */
}
</style>
