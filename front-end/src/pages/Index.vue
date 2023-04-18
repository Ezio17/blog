<template>
  <Layout>
    <h1>Snaga solutions</h1>
    <div v-for="post of $page.posts.edges" :key="post.id" class="posts">
      <h2>
        <g-link :to="`/post/${post.node.id}`">
          {{ post.node.attributes.Title }}
        </g-link>
      </h2>
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
    link: [
      {
        rel: 'canonical',
        href: 'https://blog.snaga-solutions.online/',
      },
    ],
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
