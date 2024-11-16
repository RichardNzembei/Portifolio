<template>
  <main class="min-h-screen">
    <AppHeader class="mb-12" title="What's in my bag?" :description="description" />
    <div class="space-y-24">
      <ul class="space-y-8">
        <AppUsesHeader title="Hardware" />
        <AppUsesItem v-for="(item, id) in hardware" :key="id" :item="item" />
      </ul>
      <ul class="space-y-8">
        <AppUsesHeader title="Software" />
        <AppUsesItem v-for="(item, id) in software" :key="id" :item="item" />
      </ul>
    </div>
  </main>
</template>

<script setup>
const description =
  "Software I use, gadgets I love, and other things I recommend. Here’s a big list of all of my favorite stuff.";
useSeoMeta({
  title: "Things I use | R_Nzembei",
  description,
});
const { data: items } = await useAsyncData("uses", () =>
  queryContent("/uses").find()
);
const hardware = items.value.filter((item) => item.category === "hardware");
const software = items.value.filter((item) => item.category === "software");

</script>
