<template>
  <Layout>
    <section>
      <div class="h-10">
        <div class="image">
          <img
            class="absolute sm:h-auto w-screen"
            style="z-index: -1"
            src="../../../asset/newspaper.jpg"
            alt=""
          />
        </div>
      </div>
      <div
        class="hero container md:container-inner mx-auto flex flex-col sm:flex-row justify-between py-16"
      >
        <div
          class="text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left"
        >
          <div class="uppercase text-white">Blog</div>
        </div>
      </div>
    </section>
    <h1 class="text-xl mb-2">Blog site is on the way! Please wait patiently</h1>

    <div class="space-y-4">
      <BlogFeedPost
        v-for="edge in $page.allPost.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
    </div>
  </Layout>
</template>

<page-query>
query {
  allPost {
    edges {
      node {
        id
        title
        date (format: "D MMMM YYYY")
        path
        description
      }
    }
  }
}
</page-query>

<script>
import BlogFeedPost from "@/components/BlogFeedPost";

export default {
  components: {
    BlogFeedPost,
  },
  metaInfo: {
    title: "Blog",
  },
};
</script>
