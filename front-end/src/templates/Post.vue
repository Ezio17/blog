<template>
  <Layout>
    <p>{{ $page.post.id }}</p>
    <p>{{ $page.post.attributes.Title }}</p>
    <p>{{ $page.post.attributes.Description }}</p>
  </Layout>
</template>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    id
    attributes {
        Title
        Description
      }
  }
}
</page-query>

<script>
export default {
  name: 'Post',
  metaInfo() {
    return {
      title: this.$page.post.attributes.Title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.attributes.Description,
        },
      ],
    };
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
