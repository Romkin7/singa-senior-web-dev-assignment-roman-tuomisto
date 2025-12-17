<script setup lang="ts">
import type { AboutPage } from "~/@types/aboutPage";

const { data: aboutData, pending } = await useAsyncData(
  "about-page-data",
  async () => {
    try {
      return $fetch("/api/about");
    } catch (error: any) {
      if (error.value) {
        createError({
          statusCode: error.value.statusCode || 500,
          statusMessage: "About page date fetch error",
        });
      }
    }
  }
);
// Set Seo title and description
useSeoMeta({
  title: "Singa - About",
  description:
    "Learn more about the Singa Genres App, built with Nuxt 3 and TypeScript.",
  robots: "index, follow", // Allow indexing for about page
});
</script>
<template>
  <main>
    <section v-if="pending">
      <h1>Loading data...</h1>
    </section>
    <section v-else-if="aboutData">
      <h1>{{ aboutData.title }}</h1>
      <p>
        {{ aboutData.body }}
      </p>
      <p>
        Developed by Roman Tuomisto as part of the Singa Senior Web Developer
        assignment.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
        excepturi maxime ipsa nihil, mollitia id repellendus molestias non dicta
        quod itaque nemo delectus doloribus quos officia quia eaque. Maiores
        corporis eligendi repellat iusto soluta eos eius placeat illo. Facilis
        quis aut voluptatem ipsa deleniti architecto maxime, totam vitae quod
        obcaecati debitis placeat natus delectus eos distinctio ipsum labore
        consequatur ex magnam nostrum perspiciatis. Quo fuga quas facilis
        officiis recusandae repellat maiores ex, id suscipit facere vitae quae
        iusto dolore laborum, nisi animi molestias autem dolores eveniet vero
        iure! Consequuntur cupiditate recusandae tenetur sapiente placeat
        voluptas? Neque est vero, ex nesciunt aut aliquam mollitia obcaecati
        odit esse, eius enim inventore impedit quibusdam. Ullam sapiente
        consequuntur ducimus? Atque odio reiciendis illo optio vel aperiam
        eaque, fuga eos explicabo voluptate totam maxime eum, iure voluptatem
        minus recusandae corporis facere voluptatibus rem praesentium, aut id
        consectetur est. Id quasi quae facere quisquam cum possimus consequatur
        modi eos? Aut voluptatibus ducimus modi numquam magni corrupti a
        consectetur inventore voluptate. Iste, ea voluptatibus pariatur repellat
        deleniti amet et ipsum labore adipisci totam officia consequatur
        asperiores dolorum quis fugiat, maiores iure cumque consequuntur
        excepturi dolor officiis repudiandae? Suscipit quas iusto ex recusandae
        tenetur assumenda quis. Dolorum, blanditiis?
      </p>
    </section>
  </main>
</template>

<style scoped>
main {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
  text-align: center;
}
h1 {
  margin-bottom: 1rem;
}
p {
  margin-bottom: 1rem;
  line-height: 1.6;
}
</style>
