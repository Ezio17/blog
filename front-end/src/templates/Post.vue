<template>
  <Layout>
    <p>{{ $page.post.id }}</p>
    <p>{{ $page.post.attributes.Title }}</p>
  </Layout>
</template>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    id
    attributes {
        Title
      }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Snaga solution - blog'
  },

  async mounted() {
    const { id } = this.$route.params
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>