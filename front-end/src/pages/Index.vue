<template>
  <Layout>
    <h1>Snaga solutions</h1>
    <div v-for="post of $page.posts.edges" :key="post.id" class="posts">
      <h3>
        <g-link :to="`/post/${post.node.id}`">
          {{ post.node.attributes.Title }}
        </g-link>
        <g-image />
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
    title: 'Snaga solution - blog',
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
