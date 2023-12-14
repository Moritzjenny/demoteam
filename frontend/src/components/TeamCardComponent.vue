<template>
  <section>
    <div class="row">
      <div class="col-lg-4 mb-4">
        <div>
          <div class="my-flip-inner my-flip-right">
            <div class="my-flip-inner-wrapper">
              <div class="my-flip-side my-flip-front">
                <div class="my-flip-image my-flip-image--1">
                  <img class="q-pt-md" :src="imageUrl" alt="">
                </div>
                <div class="my-flip-details">
                  <h4 class="my-flip-heading">{{name}}</h4>
                  <div class="my-flip-text">
                    <p>{{ subTitle }}</p>
                  </div>
                </div>
              </div>
              <div class="my-flip-side my-flip-back">
                <div class="my-flip-back-inner">
                  <div class="my-flip-price">
                    <div>{{ name }}</div>
                  </div>
                  <div class="my-flip-back-text">
                    <p>{{ description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {defineProps, onMounted, ref} from 'vue';

defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true
  },
  subTitle: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const isTouchDevice = ref('ontouchstart' in window || navigator.maxTouchPoints > 0);

onMounted(() => {
  if (isTouchDevice.value) {
    const flipWrappers = document.querySelectorAll('.my-flip-inner-wrapper');

    flipWrappers.forEach(wrapper => {
      let isFlipped = false;

      wrapper.addEventListener('touchend', () => {
        isFlipped = !isFlipped;

        const flipFront = wrapper.querySelector('.my-flip-front') as HTMLElement;
        const flipBack = wrapper.querySelector('.my-flip-back') as HTMLElement;

        if (flipFront && flipBack) {
          if (isFlipped) {
            flipFront.style.transform = 'rotateY(-180deg)';
            flipBack.style.transform = 'rotateY(0)';
          } else {
            flipFront.style.transform = 'rotateY(0)';
            flipBack.style.transform = 'rotateY(180deg)';
          }
        }
      });
    });
  }
});

</script>

<style scoped>


a:hover {
  text-decoration: none;
}

.my-flip-front {
  height: 400px;
}

.my-flip-inner-wrapper {
  font-family: 'Urbanist', sans-serif;
  perspective: 150rem;
  position: relative;
  width: 250px;
  background-color: transparent;
  border-radius: 10px;
  padding: 10px;
}

.my-flip-side {
  display: block;
  top: 0;
  right: 0;
  left: 0;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.4);
  transition: all .8s ease;
  backface-visibility: hidden;
  border-radius: 10px;
  background-color: #070707;
}

.my-flip-back {
  transform: rotateY(180deg);
  color: #fff;
  position: absolute;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 1);
  height: 400px;
  top: 10px;
  margin-left: 10px;
  margin-right: 10px;
}




.my-flip-inner-wrapper:hover .my-flip-front {
  transform: rotateY(-180deg);
}

.my-flip-inner-wrapper:hover .my-flip-back {
  transform: rotateY(0);
}

.my-flip-image {
  height: 15rem;
  background-blend-mode: screen;
}

.my-flip-image img {
  width: 100%;
  height: 100%;
  margin-top: 0;
  object-fit: contain;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-image: radial-gradient(#abb4b9, #76858e, #3d4f5d);
}

.my-flip-heading {
  margin: 0 0 0;
  color: #fff;
  font-weight: 800;
  font-size: 20px;
  text-align: center;
}

.my-flip-details {
  padding: 2rem;
  text-align: center;
}

.my-flip-details p {
  font-size: 15px;
  margin: 0;
  line-height: 2;
  color: #848484;
}

.my-flip-back-inner{
  list-style: none;
  padding: 20px;
}

.my-flip-back-text {
  color: #fff;
  font-size: 1rem;
  padding: 0.8rem 0;
}

.my-flip-price {
  margin-bottom: 10px;
  font-family: 'Urbanist', sans-serif;
  font-size: 25px;
  font-weight: 800;
  text-align: center;
}


.text {
  font-family: 'Urbanist', sans-serif;
  font-weight: 800;
  font-size: min(16px, 3vw);
  color: white;
  text-align: center;
}


</style>
