<template>
    <div>
      <h2 class="uppercase text-ts font-semibold text-gray-400 mb-6">FEATURED PROJECTS</h2>
      <div class="space-y-4">
        <AppProjectCard
          v-for="(project, id) in projects"
          :key="id"
          :project="project"
        />
      </div>
      <div class="flex items-center justify-center mt-6 text-sm">
        <UButton
          label="All Projects &rarr;"
          to="/projects"
          variant="link"
          color="gray"
        />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">

const { data: projects } = await useAsyncData("projects-all", () =>
  queryContent("/projects").find()
);



  </script>
  