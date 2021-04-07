<!-- Using experimental <script setup> syntax -->
<script setup>
  import { defineProps } from 'vue'
  import { Size } from '~/model/size'

  const props = defineProps({
    size: {
      type: String,
      default: 'NORMAL',
      validator: function (value) {
        return Object.values(Size).includes(value)
      },
    },
    text: String,
  })
</script>

<template>
  <button
    type="button"
    class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  >
    <div v-if="$slots.leadingIcon" class="mr-2">
      <slot name="leadingIcon"></slot>
    </div>
    <slot>
      <span v-if="text">{{ text }}</span>
    </slot>
    <div v-if="$slots.trailingIcon" class="ml-2">
      <slot name="trailingIcon"></slot>
    </div>
  </button>
</template>
