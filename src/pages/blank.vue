<template>
  <div class="relative w-full h-screen">
    <div class="relative p-5 z-10">
      <router-link to="/" class="text-base font-medium text-gray-500 hover:text-gray-900">
        <button
          type="button"
          class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Back to home
        </button>
      </router-link>
    </div>
    <div class="absolute top-0 left-0 h-full w-full flex justify-center items-center p-5">
      <div class="w-72 text-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor">
          <path
            d="M46.165 0H3.835A3.839 3.839 0 000 3.835v42.33A3.84 3.84 0 003.835 50h42.331A3.84 3.84 0 0050 46.165V3.835A3.84 3.84 0 0046.165 0zM3.835 2h42.331C47.178 2 48 2.823 48 3.835v6.415H2V3.835C2 2.823 2.823 2 3.835 2zm42.33 46H3.835A1.836 1.836 0 012 46.165V12.25h46v33.915A1.836 1.836 0 0146.165 48z"
          />
          <path
            d="M14.375 7.166h28.25a1 1 0 100-2h-28.25a1 1 0 000 2zM9.687 7.166h.688a1 1 0 000-2h-.688a1 1 0 000 2zM5.656 7.166h.688a1 1 0 000-2h-.688a1 1 0 000 2z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: blank
</route>
