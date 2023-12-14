<template>
  <q-dialog ref="dialogRef" @cancel="onDialogCancel" full-height>
    <q-card
      class="q-pa-sm"
      flat
      style="background-color: #eaeaea; width: 800px; height: 500px; border-radius: 5px"
    >
      <div class="medium-text q-ml-lg q-mr-lg" style="text-align: center; color: black; margin-bottom: 0">
        Unterstützt uns als Vereinsmitglied. Der Mitgliederbeitrag beträgt CHF 25.- pro Person/Jahr.

        Ihr werdet mit einer Rechnung kontaktiert.
      </div>


      <q-card-section class="flex flex-center column content-center justify-center">
        <div class="row flex justify-center">
          <q-input
            class="q-mx-lg q-my-md"
            outlined
            v-model="firstName"
            label="Vorname*"
            :rules="[val => !!val || 'Bitte geben Sie einen Namen ein']"
            style="width: 300px"
          />

          <q-input
            class="q-mx-lg q-my-md"
            outlined
            v-model="name"
            label="Name*"
            :rules="[val => !!val || 'Bitte geben Sie einen Namen ein']"
            style="width: 300px"
          />

          <q-input
            class="q-mx-lg q-my-md"
            outlined
            v-model="mail"
            label="E-Mail*"
            :rules="[val => !!val || 'Bitte geben Sie E-Mail Adresse ein']"
            style="width: 300px"
          />

          <q-input
            class="q-mx-lg q-my-md"
            outlined
            v-model="street"
            label="Strasse & Nr."
            :rules="[]"
            style="width: 300px; margin-bottom: 40px"
          />

          <q-input
            class="q-mx-lg q-my-md"
            outlined
            v-model="plz"
            label="PLZ"
            :rules="[]"
            style="width: 300px; margin-bottom: 40px"
          />

          <q-input
            class="q-mx-lg q-my-md"
            outlined
            v-model="place"
            label="Ort"
            :rules="[]"
            style="width: 300px; margin-bottom: 40px"
          />


          <q-input
            class="q-mx-lg q-my-md"
            outlined
            v-model="message"
            label="Mitteilung"
            type="textarea"
            :rules="[]"
            style="width: 300px"
          />
        </div>
      </q-card-section>

      <div v-if="!isValid">
        <p class="text-red" style="text-align: center; margin-bottom: 0"
        >
          Bitte füllen Sie alle Pflichtfelder aus.
        </p>
      </div>

      <!-- Buttons -->
      <q-card-actions align="center">
        <q-btn
          label="Absenden"
          color="primary"
          :style="`width: 150px; margin: 20px 0 10px 0`"
          @click="onOk"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import {useDialogPluginComponent} from 'quasar';
import {ref} from 'vue';

const {dialogRef, onDialogOK, onDialogCancel} = useDialogPluginComponent();

const firstName = ref('');
const name = ref('');
const mail = ref('');
const street = ref('');
const plz = ref('');
const place = ref('');
const message = ref('');
const isValid = ref(true);

/**
 * Checks if there is already dossier data in the store and if the customer types
 * differ, clears the store to avoid wrong data being passed to the dossier form.
 * @returns {void}
 */
async function onOk() {
  const formData = {
    firstName: firstName.value,
    name: name.value,
    mail: mail.value,
    street: street.value,
    plz: plz.value,
    place: place.value,
    message: message.value,
  };

  if (firstName.value === '' || name.value === '' || mail.value === '' ) {
    isValid.value = false;
    return;
  } else {
    isValid.value = true;
  }

  try {
    const response = await fetch('/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log('Data sent successfully:', responseData);
      onDialogOK(true);
    } else {
      console.error('Failed to send data:', response.statusText);
      onDialogOK(false);
    }
  } catch (error) {
    console.error('Error sending data:', error);
    onDialogOK(false);
  }
}

</script>
<style>
.medium-text {
  font-family: 'Urbanist', sans-serif;
  font-weight: 400;
  font-size: clamp(16px, 1vw, 17px);
  color: white;
  max-width: 1200px;
  margin-top: 30px;
  margin-bottom: 30px;
  justify-content: center;
}
</style>
