<script setup lang="ts">
import Button from "./Button.vue";
import { locale } from "../i18n/store";
import { changeLocale } from "../i18n/utils/locale";

const handleLangSwitch = () => {
  const current = locale.value ?? "en";
  if (current === "en") changeLocale("de");
  else if (current === "de") changeLocale("es");
  else changeLocale("en");
};
</script>

<template>
  <Button
    variant="border"
    size="sm"
    @click="handleLangSwitch"
    data-cursor="circle-white"
    data-sound="click"
    data-hoversound="hover"
    >{{ { en: "DE", de: "ES", es: "EN" }[locale as string] ?? "EN" }}</Button
  >
</template>
