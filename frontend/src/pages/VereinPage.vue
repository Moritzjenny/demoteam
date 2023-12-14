<template>
  <SubPageHeaderComponent title="Verein" header-image="../verein.jpg" />
  <div class="row justify-evenly">

    <PageEntryContainer color="#383838" :shadowed="false" class="flex column" style="align-content:center">

      <div style="max-width: 900px" class="text q-ma-xl">

        In unserem Demoteam sind Gian Cla (Coach), Florian, Freddi, Giancarlo, Sean, Liam, Sam, Elisa und Mevina.



        Das Demoteam nimmt an der Snow-Show in Celerina teil und am Swiss Snow Happening. Das Swiss Snow Happening findet jedes Jahr Ende der Wintersaison statt und ist ein schweizweiter Wettkampf zwischen Schneesportlehrern und Skischulen.



        Schaut doch auf der Instagramseite des Demoteams vorbei. Dort findet ihr viele Infos, Fotos und Videos.
      </div>



      <div class="image-container q-mt-lg q-mb-lg">
        <img src="zuozLogo.jpg" alt="Image description" />
      </div>


      <div class="row q-mx-auto q-mt-xl" style="max-width: 500px; justify-content: center">
        <q-btn
          aria-label="Menu"
          class="bg-primary q-mr-lg text-white menu q-mx-auto q-mb-xl"
          label="Statuten"
          style="border-radius: 20px; max-width: 200px"
          @click="downloadDocument"
        />
        <div style="width: 50px;"></div>
        <q-btn
          aria-label="Menu"
          class="bg-primary q-mr-lg text-white menu q-mx-auto q-mb-xl"
          label="Mitglied Werden"
          style="border-radius: 20px; max-width: 200px"
          @click="openDialog($q)"
        />
      </div>
    </PageEntryContainer>

  </div>
</template>


<script setup lang="ts">
import PageEntryContainer from 'components/containers/PageEntryContainer.vue';
import SubPageHeaderComponent from 'components/SubPageHeaderComponent.vue';
import { openDialog } from 'src/helper/dialog-helper';

const downloadDocument = () => {
  // Replace 'your-document.pdf' with the actual name of your PDF file
  const pdfFileName = 'verein_muster_statuten.pdf';

  // Construct the relative path to the PDF file in the public folder
  const pdfPath = `/public/${pdfFileName}`;

  // Create an invisible link element
  const link = document.createElement('a');
  link.href = pdfPath;
  link.download = pdfFileName; // Set the suggested file name for the download

  // Trigger a click on the link to start the download
  link.click();
};

</script>


<style scoped>
.text {
  font-family: 'Urbanist', sans-serif;
  font-weight: 400;
  font-size: min(16px, 4vw);
  color: white;
  text-align: center;
}

.image-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px; /* Set the desired height */
}

.image-container img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; /* Adjust as needed */
}
</style>
