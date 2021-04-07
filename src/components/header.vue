<!-- Using experimental <script setup> syntax -->
<script setup>
  import { LinkIcon, PuzzleIcon, TemplateIcon } from '@heroicons/vue/outline'
  import imgLogo from '~/assets/images/logo.svg'

  ref: isExpandableMenuVisible = false

  const toggleExpandableMenu = () => {
    isExpandableMenuVisible = !isExpandableMenuVisible
    console.debug(isExpandableMenuVisible)
  }
</script>

<template>
  <header>
    <div class="relative bg-white">
      <div class="relative z-20 shadow">
        <div class="max-w-7xl mx-auto flex justify-between items-center px-5 py-4 space-x-10">
          <div>
            <router-link to="/" class="flex">
              <span class="sr-only">Workflow</span>
              <img class="h-10 w-auto transform transition-transform hover:scale-110 active:scale-95" :src="imgLogo" alt="" />
            </router-link>
          </div>
          <div class="flex-1 flex items-center justify-between">
            <nav class="flex space-x-10">
              <div class="relative">
                <button
                  type="button"
                  class="group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  :class="isExpandableMenuVisible ? 'text-gray-900' : 'text-gray-500'"
                  @click="toggleExpandableMenu"
                >
                  <span>Template features</span>
                  <!--
                  Heroicon name: solid/chevron-down
                  -->
                  <svg
                    class="ml-2 h-5 w-5 group-hover:text-gray-500 transition ease-out duration-200 transform"
                    :class="isExpandableMenuVisible ? 'text-gray-600 rotate-180' : 'text-gray-400 rotate-0'"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <router-link to="/about" class="text-base font-medium text-gray-500 hover:text-gray-900">About</router-link>
            </nav>
            <div class="flex items-center md:ml-12">
              <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900"> Sign in </a>
              <a
                href="#"
                class="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Expandable menu -->
      <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 translate-y-1"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-1"
      >
        <div v-show="isExpandableMenuVisible" class="hidden md:block absolute z-10 inset-x-0 transform shadow-lg">
          <div class="bg-white">
            <div class="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
              <!-- Action : Blank layout -->
              <router-link to="/blank" class="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50">
                <div class="flex md:h-full lg:flex-col">
                  <div class="flex-shrink-0">
                    <span class="inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                      <TemplateIcon class="h-6 w-6" />
                    </span>
                  </div>
                  <div class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                    <div>
                      <p class="text-base font-medium text-gray-900">Blank layout</p>
                      <p class="mt-1 text-sm text-gray-500">Demonstrates how a blank layout renders.</p>
                    </div>
                    <p class="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">Learn more <span aria-hidden="true">&rarr;</span></p>
                  </div>
                </div>
              </router-link>

              <!-- Action : Fake link -->
              <router-link to="/fake" class="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50">
                <div class="flex md:h-full lg:flex-col">
                  <div class="flex-shrink-0">
                    <span class="inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                      <LinkIcon class="h-6 w-6" />
                    </span>
                  </div>
                  <div class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                    <div>
                      <p class="text-base font-medium text-gray-900">Fake link</p>
                      <p class="mt-1 text-sm text-gray-500">Fake link that leads to a 404 error page.</p>
                    </div>
                    <p class="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">Learn more <span aria-hidden="true">&rarr;</span></p>
                  </div>
                </div>
              </router-link>

              <!-- Action : Composition API -->
              <!-- Don't forget to toggle the menu once clicked on the menu that leads to a new page -->
              <router-link to="/composition" class="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50" @click="toggleExpandableMenu">
                <div class="flex md:h-full lg:flex-col">
                  <div class="flex-shrink-0">
                    <span class="inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                      <PuzzleIcon class="h-6 w-6" />
                    </span>
                  </div>
                  <div class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                    <div>
                      <p class="text-base font-medium text-gray-900">Composition API</p>
                      <p class="mt-1 text-sm text-gray-500">Page demonstrating how to use vue 3 composition API.</p>
                    </div>
                    <p class="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">Learn more <span aria-hidden="true">&rarr;</span></p>
                  </div>
                </div>
              </router-link>

              <!-- Action : Integrations -->
              <a href="#" class="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50">
                <div class="flex md:h-full lg:flex-col">
                  <div class="flex-shrink-0">
                    <span class="inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                      <!-- Heroicon name: outline/view-grid -->
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                    <div>
                      <p class="text-base font-medium text-gray-900">Integrations</p>
                      <p class="mt-1 text-sm text-gray-500">Connect with third-party tools that you&#039;re already using.</p>
                    </div>
                    <p class="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">Learn more <span aria-hidden="true">&rarr;</span></p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <!-- Expandable menu footer -->
          <div class="bg-gray-50">
            <div class="max-w-7xl mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
              <div class="flow-root">
                <a href="#" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                  <!-- Heroicon name: outline/play -->
                  <svg
                    class="flex-shrink-0 h-6 w-6 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="ml-3">Watch Demo</span>
                </a>
              </div>

              <div class="flow-root">
                <a href="#" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                  <!-- Heroicon name: outline/check-circle -->
                  <svg
                    class="flex-shrink-0 h-6 w-6 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="ml-3">View All Products</span>
                </a>
              </div>

              <div class="flow-root">
                <a href="#" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                  <!-- Heroicon name: outline/phone -->
                  <svg
                    class="flex-shrink-0 h-6 w-6 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span class="ml-3">Contact Sales</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>
