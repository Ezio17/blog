<template>
  <Layout>
    <h1>Snaga solutions</h1>
    <div class="posts" v-for="post of $page.posts.edges" :key="post.id">
      <h3>
        <g-link :to="`/post/${post.node.id}`">
          {{ post.node.attributes.Title }}
        </g-link>
      </h3>
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: allPost {
    edges {
      node {
        id
        attributes {
          Title
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Snaga solution - blog",
  },
};
</script>

<style>
a {
  margin-right: 1rem;
  color: black;
  text-decoration: none;
}
</style>
