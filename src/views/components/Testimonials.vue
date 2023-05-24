<template>
  <section class="p-5 py-7 mx-auto !-z-10">
    <!-- <div class="font-devanagari text-brandGreen font-bold text-4xl m-5 text-center !rounded-2xl">
      What our customers say
    </div> -->
    <Title :title="' What our customers say'" />
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="swiper-container !overflow-hidden">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in slideItems">
            <blockquote class="bg-gray-100 p-8">
              <p class="relative mt-4 text-gray-500">
                <span class="text-xl">&ldquo;</span>

                {{ item.desc }}

                <span class="text-xl">&rdquo;</span>
              </p>

              <!-- <img alt="pic" :src="item.img" class="h-16 w-16 rounded-full object-cover" /> -->

              <div class="text-center">
                <p class="text-base font-semibold text-brandGreen">{{ item.title }}</p>
                <p class="mt-1 text-sm">{{ item.subTitle }}</p>
              </div>
            </blockquote>
          </div>
        </div>

        <div class="swiper-pagination !relative !bottom-0 mt-12"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Title from './Title.vue'
const slideItems = [
  {
    img: 'https://images.unsplash.com/photo-1508280756091-9bdd7ef1f463?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1832&q=80',
    title: 'test',
    subTitle: 'subTitle',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
  },
  {
    img: 'https://images.unsplash.com/photo-1508280756091-9bdd7ef1f463?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1832&q=80',
    title: 'test',
    subTitle: 'subTitle',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
  },
  {
    img: 'https://images.unsplash.com/photo-1508280756091-9bdd7ef1f463?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1832&q=80',
    title: 'test',
    subTitle: 'subTitle',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
  }
]
document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 8,
    autoplay: {
      delay: 8000
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      640: {
        slidesPerView: 1.5
      },
      1024: {
        slidesPerView: 3
      }
    }
  })
})
</script>
