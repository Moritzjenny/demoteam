<template>

<div style="height: 100px"></div>

  <PageEntryContainer color="#383838" :shadowed="false" style="justify-content: center; align-content: center" class="flex column">
     <div class="team-component-card-container q-my-xl">
    <TeamCardComponent image-url="1.png" name="Gian Cla" sub-title="a.k.a Gianci (Coach)"
                       description="10. Saison/Season

Somit ist er der erfahrenste im Demofahren und gleichzeitig im Bier trinken.

"/>
    <TeamCardComponent image-url="2.png" name="Frederik " sub-title="a.k.a Fredi (Social Media Manager)"
                       description="Seine stärken: Ass to the grass, Videos schneiden und Social Media betreuen
Seine schwächen: Uhrzeit lesen und pünktlich sein."/>
    <TeamCardComponent image-url="3.png" name="Mevina" sub-title="a.k.a. Mevi"
                       description="
Zu unserer Erleichterung lacht sie ab den (oft dummen) Sprüchen ihrer 7 männlichen Teamkollegen und legt selbst noch einen besseren Spruch obendrauf.
"/>
    <TeamCardComponent image-url="4.png" name="Giancarlo" sub-title="a.k.a. GC"
                       description="Er kommt zu den Trainings nie mit seinen eigenen Stöcken, mit einem Riesenslalomski und zu spät."/>
    <TeamCardComponent image-url="5.png" name="Liam" sub-title="a.k.a. Lungo"
                       description="Ab und zu ein paar Minuten zu spät dran, liegt der Grund dafür in seinen aussergewöhnlich langen Duschzeremonien."/>

    <TeamCardComponent image-url="6.png" name="Florian" sub-title="a.k.a. Flo"
                       description="Trotz seines Alters kann er den Buchstaben R noch nicht richtig aussprechen. Dafür weiss er was zu tun ist, wenn der Beamer kaputt geht."/>
   <TeamCardComponent image-url="7.png" name="Samuel" sub-title="a.k.a Sam"
                      description="Bester Trick auf den Skiern: 360 pants drop."/>
   <TeamCardComponent image-url="8.png" name="Sean" sub-title="a.k.a Das Schaf"
                      description="Seine Hüfte macht sogar Kim Kardashian Konkurrenz und schafft dadurch auch Ass to the Grass ohne viel Knick."/>
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
