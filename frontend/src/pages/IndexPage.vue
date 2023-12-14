<template>
  <SubPageHeaderComponent title="Demoteam Zuoz" header-image="../skier.jpg"/>
  <div class="row justify-evenly">

    <PageEntryContainer color="#383838" :shadowed="false" class="flex column" style="align-content:center">
      <div style="max-width: 900px" class="text q-ma-xl">

        In unserem Demoteam sind Gian Cla (Coach), Florian, Freddi, Giancarlo, Sean, Liam, Sam, Elisa und Mevina.



        Das Demoteam nimmt an der Snow-Show in Celerina teil und am Swiss Snow Happening. Das Swiss Snow Happening findet jedes Jahr Ende der Wintersaison statt und ist ein schweizweiter Wettkampf zwischen Schneesportlehrern und Skischulen.



        Schaut doch auf der Instagramseite des Demoteams vorbei. Dort findet ihr viele Infos, Fotos und Videos. </div>
    </PageEntryContainer>

  </div>
</template>

<script setup lang="ts">
import PageEntryContainer from 'components/containers/PageEntryContainer.vue';
import SubPageHeaderComponent from 'components/SubPageHeaderComponent.vue';


</script>

<style>


.text {
  font-family: 'Urbanist', sans-serif;
  font-weight: 400;
  font-size: min(16px, 3vw);
  color: white;
  text-align: center;
}

</style>
