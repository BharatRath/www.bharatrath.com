<template>
  <footer aria-label="Site Footer" class="!bg-brandGreen">
    <div class="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8">
      <div
        class="grid grid-cols-1 pt-8 border-t border-gray-100 gap-20 sm:grid-cols-2 lg:grid-cols-3 lg:pt-16"
      >
        <div v-for="link in footerLinks">
          <p class="font-medium text-white">{{ link.title }}</p>

          <nav aria-label="Footer Navigation - Services" class="mt-6">
            <ul class="space-y-4 text-sm">
              <li v-for="anchor in link.links">
                <a href="#" class="text-gray-700 transition hover:opacity-75">
                  {{ anchor.title }}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <p class="text-xs text-gray-500 text-center">
        &copy; 2022. Company Name. All rights reserved.
      </p>
    </div>
  </footer>
</template>
<script setup lang="js">
const footerLinks = [
  {
    title: 'Navigation Links',
    links: [
      {
        title: 'About'
      },
      {
        title: 'Team'
      },
      {
        title: 'FAQs'
      }
    ]
  },
  {
    title: 'Follow Us',
    links: [
      {
        title: 'Bharatrath'
      },
      {
        title: 'Bharatrath'
      },
      {
        title: 'Bharatrath'
      }
    ]
  },
  {
    title: 'Contact Us',
    links: [
      {
        title: '+91 8530231999'
      },
      {
        title: 'info@bharatrath.com'
      },
      {
        title:
          'Bharatrath, Shop No-2 Dynamic Grandstand II Opposite Forest County Gate No -3 Kharadi 411014'
      }
    ]
  }
]
</script>
