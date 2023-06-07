<template>
  <section class="p-5 py-7 mx-auto !-z-10">
    <!-- <div class="font-devanagari text-brandGreen font-bold text-4xl m-5 text-center !rounded-2xl">
      What our customers say
    </div> -->
    <Title :title="' What Our Customers Say'" />
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 gap-2">
      <div class="swiper-container !overflow-hidden">
        <div class="swiper-wrapper">
          <div style="height: 500px;" class="swiper-slide bg-[#ECF8E5]  " v-for="item in slideItems">
            <blockquote class="p-8 flex flex-col items-center h-full justify-between">
              <p class="relative mt-4 text-[#347571]">
                <span class="text-xl text-[#347571]">&ldquo;</span>

                {{ item.desc }}

                <span class="text-xl">&rdquo;</span>
              </p>

              <figcaption class="flex items-center justify-center mt-6 space-x-3">
                <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div class="pr-3 font-medium text-gray-900 dark:text-white">{{ item.name }}</div>
                  <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">{{ item.company }}</div>
                </div>
              </figcaption>
            </blockquote>
          </div>
        </div>

        <div class="swiper-pagination !relative !bottom-0 mt-12"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Title from "./Title.vue";
const slideItems = [
  {

    name: "Ravikant",
    company: "Whitefield Farms",
    desc: "Bharatrath Digital Platform has revolutionized our dairy operations.Its robust inventory and orders management systems have streamlined our business, saving us countless hours.The insightful analytics coupled with a modern e- commerce website and mobile POS have enhanced customer satisfaction, boosting sales.Plus, its user - friendly interface and responsive support make it a breeze for our entire team.Highly recommended for any dairy business!",
  },
  {

    name: "Sandeep Biswal ",
    company: "The Mishti Box",
    desc: "Bharatrath’s all in one retail platform has transformed Mishti Box business. Its advanced inventory and order management features have simplified operations remarkably. The intuitive analytics, e-commerce site, and mobile POS system have led to better customer engagement and increased sales. User-friendly and easy for everyone, Alok and his team is excellent to onboard and post-sales support. A must-have solution for small shops, especially mithai waalas, to turbocharge their businesses!",
  },
  {
    name: "Gurpreet Singh",
    company: "Fitcitti",
    desc: "Bharatrath’s retail management software has been a game-changer for Fitcitti. Its deployment within hours and user-friendly interface along with superb support makes it a no-brainer for any shop that wants to go digital super quick. The software is continually evolving with new features hence it gets better with time. It's a revolution in retail management. An absolute gem!",
  },
  {
    name: "Priyanka Singh",
    company: "Anka’s Cakes",
    desc: "Bharatrath has been a boon for our new cake shop. From a sleek e-commerce website to easy billing on our mobile phones, this retail management software is a must have. For a smooth, efficient, and profitable retail business, Bharatrath is the ultimate solution!",
  },
  {
    name: "Chandan Gaikwad",
    company: "Zero Budget Natural Farming",
    desc: "Implementing Bharatrath in our ZBNF shops has been transformative. Its feature-rich software simplifies inventory and order management, while its intuitive analytics, mobile POS, and modern e-commerce site have enhanced customer engagement and sales. With responsive support and ease of use for all team members, Bharatrath is truly a comprehensive digital solution for any retail business.",
  },
  {
    name: "Yogesh Patil ",
    company: "Krushidhan",
    desc: "We have a large number of distributors spread across Maharashtra. Bharatrath’s retail platform has helped us really setup a digital solution for managing our business – from supplier management, to manufacturing, to sales and analytics. Userfriendly mobile POS, and modern e-commerce site have boosted customer interaction and sales. Bharatrath is the ideal partner for any rapidly growing business",
  },
  {
    name: "Yogesh Attal ",
    company: "Goratna Organics",
    desc: "We were looking for a retail software that could take care of our B2C shops as well as B2B distribution of multi-brand organic products. Bharatrath digital platform has not only helped us meet both our targets, but has exceeded in expectations with best-in-class features packaged into one product.  It is truly an ideal solution for any retailer/distributor, which only gets better with time, continuous stream of new features."
  },
  {
    name: "Shivaji Patil ",
    company: "Agro Naturals",
    desc: "To digitize our small operation, Bharatrath’s retail software has become indispensable. It is not just cost effective, but also feature rich – that Alok and his team could make live for us within hours. Highly recommend it for any retail shop that wants to modernize and go digital",
  },
  {
    name: "Ajay Waghmare ",
    company: "Sarovar Masale",
    desc: "We are a new brand in authentic masales. Bharatrath’s retail software has really made life easy for us by taking out all the manual work of managing our B2B operations of inventory management, account payables and receivables. It’s a must have software for meeting all your retail/distribution needs in an easy to use and easy to deploy package."
  },
  {
    name: "Adinath Chaudhary ",
    company: "Radiant",
    desc: "I have been using Bharatrath’s inventory and supplier management software for our distribution of multi brand products to retailers. It has taken away the tasks of operations from me, so that I can focus more on business development. Small entrepreneurs cannot understand the utility of such a feature rich software at such an affordable cost, until they use it. A must have! "
  },
  {
    name: "Datta Ghadage ",
    company: "Hello Thanekars",
    desc: "Bharatrath's digital platform has empowered us to build an engaging Thane City community to showcase the best of the city and also provide multiple citizen services. Its comprehensive features and ease of use have simplified service delivery, leading to improved citizen engagement and satisfaction. Bharatrath's responsive support has been exceptional, ensuring a smooth transition and continuous operation."
  },
  {
    name: "Sahil Uttekar",
    company: "Virbike",
    desc: "Bharatrath's retail software is a game-changer for any new business to quickly build their digital infrastructure at the most affordable cost. Using Bharatrath digital platform, Virbike has effortlessly launched our nationwide e-commerce business. The platform's comprehensive features, ease of use, and exceptional support have streamlined our operations, driving a substantial boost in sales"
  }
];
document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".swiper-container", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 8,
    autoplay: {
      delay: 8000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1.5,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
});
</script>
