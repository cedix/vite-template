<script setup>
  import imgAbout from '~/assets/images/about.svg'
</script>
<template>
  <div class="relative flex flex-col max-w-7xl mx-auto">
    <div class="absolute w-full h-full flex">
      <img class="justify-center m-auto opacity-40" :src="imgAbout" alt="" />
    </div>
    <div class="relative max-w-3xl mx-auto px-4 py-5">
      <h1 class="text-2xl mb-4">About</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue nibh augue, vitae cursus nulla rhoncus sed. Morbi tincidunt eros vel
        pharetra lobortis. Proin a mi nibh. Quisque pellentesque consequat lorem ut venenatis. Vestibulum a tincidunt risus. In ac cursus justo, in
        bibendum velit. In faucibus ante odio, eget convallis mi fringilla a. Donec mollis ligula quis lorem blandit eleifend.
      </p>
      <p class="mt-8">
        Donec et eros et lectus luctus tristique molestie vitae erat. Curabitur at viverra neque. Duis vestibulum sit amet libero nec luctus. Integer
        interdum ex sed dui dictum gravida. Aliquam tempus iaculis massa, ut molestie purus luctus sit amet. Nullam fermentum ex quis felis finibus
        facilisis. Aenean et ligula gravida, sagittis justo eget, mattis augue. Nulla eget massa in justo consequat porttitor. Suspendisse rhoncus, ex
        at placerat cursus, turpis magna eleifend justo, sit amet aliquam sapien justo in lorem.
      </p>
      <p class="mt-8">
        Aliquam imperdiet tortor ligula, eget ultrices lacus mollis ut. Vivamus eleifend dolor tellus, sed tristique ex congue eget. Pellentesque ac
        lacus sem. Vivamus est metus, pharetra sit amet eleifend sed, facilisis vitae sapien. Phasellus urna quam, pharetra vitae luctus ut, facilisis
        a nibh. Fusce sit amet volutpat risus. Aliquam rhoncus fringilla neque, a hendrerit lacus semper id. Suspendisse pharetra lorem feugiat,
        eleifend lorem eget, fringilla odio.
      </p>
    </div>
  </div>
</template>
