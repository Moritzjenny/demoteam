<template>
  <div class="text-container-text-image">
    <div class="large-text q-mx-auto">
      {{ title }}
    </div>
      <div :class="'front-page-container q-mb-xl q-mx-md' + (column ? ' column' : '')">
        <div v-if="textLeft" class="column">
          <div v-if="text" class="small-text-next-to-image q-mx-lg" v-html="text"></div>
          <q-btn
            v-if="requestButton"
            aria-label="Menu"
            class="bg-primary q-ml-md text-white menu front-page-button"
            label="Anfragen"
            style="border-radius: 20px;"
            @click="openDialog($q)"
          />
        </div>
        <div
          v-if="images" class="image-beside-text">
          <q-carousel
            v-model="slide4"
            transition-prev="jump-right"
            transition-next="jump-left"
            swipeable
            animated
            control-color="white"
            prev-icon="arrow_left"
            next-icon="arrow_right"
            navigation
            arrows
            infinite
            autoplay
            class="bg-secondary text-white"
            no-crop="true"
          >
            <q-carousel-slide
              v-for="(image, index) in images"
              :key="index"
              :name="`${index + 1}`"
              :img-src="image"
              alt="Festinstallationen"
            />
          </q-carousel>
        </div>


        <div v-if="image" class="image-beside-text" :style="column ? 'margin: auto; max-width: 650px; margin-bottom: 30px' : ''">
          <a :href="iconLink" target="_blank" :style="iconLink ? 'cursor: pointer' : ''">
          <img style="width: 100%" :src="image" alt="welcome"/>
          </a>

          <!-- Add the small image -->
          <div v-if=icon class="small-image-container">
            <a :href="iconLink" target="_blank" :style="iconLink ? 'cursor: pointer' : ''">
            <img class="small-image" :src="icon" alt="Small Image">
            </a>
          </div>
        </div>
          <div v-if="!textLeft" class="column" :style="centerText? 'margin: auto;' : ''">
            <div v-if="text" class="small-text-next-to-image q-mx-lg" v-html="text"></div>
            <div v-if="texts" class="small-text-next-to-image q-mx-lg">
              <div v-for="(bulletpoint, index) in texts" :key="index">
                <q-icon name="done" size="30px" style="margin-bottom: 5px; margin-right: 5px; color: #C89C33"/> {{bulletpoint}}
              </div>
            </div>
            <q-btn
              v-if="requestButton"
              aria-label="Menu"
              class="bg-primary q-ml-md text-white menu front-page-button"
              label="Anfragen"
              style="border-radius: 20px;"
              @click="openDialog($q)"
            />
          </div>
      </div>
    </div>
</template>

<script setup lang="ts">

import {PropType, ref} from 'vue';
import {openDialog} from 'src/helper/dialog-helper';
import {useQuasar} from 'quasar';

defineProps({
  title: {
    type: String as PropType<string>,
    required: true,
  },
  image: {
    type: String as PropType<string>,
    required: false,
  },
  images: {
    type: Array as PropType<string[]>,
    required: false,
    elementType: String,
  },
  text: {
    type: String as PropType<string>,
    required: false,
  },
  texts: {
    type: Array as PropType<string[]>,
    required: false,
  },
  requestButton: {
    type: Boolean as PropType<boolean>,
    required: false,
    default: true,
  },
  icon: {
    type: String as PropType<string>,
    required: false,
  },
  iconLink: {
    type: String as PropType<string>,
    required: false,
  },
  column: {
    type: Boolean as PropType<boolean>,
    required: false,
    default: false,
  },
  textLeft: {
    type: Boolean as PropType<boolean>,
    required: false,
    default: false,
  },
  centerText: {
    type: Boolean as PropType<boolean>,
    required: false,
    default: false,
  }
});

const $q = useQuasar()

const slide4 = ref('1');

</script>
<style>


.text-container-text-image {
  font-family: 'Urbanist', sans-serif;
  font-size: 18px;
  color: white;
  max-width: 1300px;
  margin-top: 0;
}

.front-page-container {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 30px;
}

.small-text-next-to-image {
  font-family: 'Urbanist', sans-serif;
  font-weight: 400;
  font-size: clamp(16px, 2vw, 20px);
  color: white;
  max-width: 1500px;
  margin-top: 0;
  margin-bottom: 30px;
}

.image-beside-text {
  position: relative;
  width: clamp(520px, 60vw, 900px);
  margin-top: 0;
  object-fit: cover; /* This line will maintain the aspect ratio */
}

.front-page-button {
  width: 130px;
}

/* Add this style to position the small image in the top right corner */
.small-image-container {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 20px; /* Adjust the top position as needed */
  right: 20px; /* Adjust the right position as needed */
  width: 60px;
  z-index: 3; /* Place the small image above other content */
}

.small-image {
  transform-origin: center;
  width: 100%;
  height: 130%;
  object-fit: cover;
  filter: saturate(0.8);
  transition: filter 0.5s;
}

.small-image:hover {
  filter: saturate(1.5);
}


@media (max-width: 900px) {

  .front-page-container {
    flex-direction: column;
  }

  .image-beside-text {
    width: clamp(220px, 90vw, 800px);
    margin-left: auto;
    margin-right: auto;
  }

  .front-page-button {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  .small-text-next-to-image {
    margin-top: 30px;
  }

}


</style>
