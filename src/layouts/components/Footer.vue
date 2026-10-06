<script setup>
/* global __APP_VERSION__, __BUILD_TIME__ */
const appVersion = __APP_VERSION__
const buildTime = __BUILD_TIME__
</script>

<template>
  <div class="h-100 d-flex flex-wrap align-center justify-space-between gap-2">
    <!-- 👉 Footer: left content -->
    <span class="d-flex align-center">
      &copy;
      {{ new Date().getFullYear() }}
      Criado por
      <!--
        <VIcon
        icon="mdi-heart-outline"
        color="error"
        size="1.25rem"
        class="mx-1"
        />
        By <a
        href="https://themeselection.com"
        target="_blank"
        rel="noopener noreferrer"
        class="text-primary ms-1"
        >
      -->
      <a>Johny
        Freitas</a>
    </span>
    <span
      class="text-caption text-medium-emphasis"
      :title="`Build ${buildTime}`"
    >v{{ appVersion }} • build {{ buildTime.slice(0, 16).replace('T', ' ') }} UTC</span>
    <!--
      👉 Footer: right content 
      <span class="d-md-flex gap-x-4 text-primary d-none">
      <a
      href="https://themeselection.com/license/"
      target="noopener noreferrer"
      >License</a>
      <a
      href="https://themeselection.com/"
      target="noopener noreferrer"
      >More Themes</a>
      <a
      href="https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/documentation/"
      target="noopener noreferrer"
      >Documentation</a>
      </span>
    -->
  </div>
</template>
