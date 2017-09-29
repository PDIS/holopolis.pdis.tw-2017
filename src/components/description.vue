<template>
  <div class="row">
    <!-- /.col-lg-8 -->
    <div class="col-lg-12">
      <div v-html="post.content"></div>
      <a class="btn btn-primary btn-lg" href="joinus.html">Join us!</a>
    </div>
    <!-- /.col-md-4 -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'description',
  data () {
    return {
      post: {content: ''}
    }
  },
  created: function () {
    axios.get('https://talk.pdis.nat.gov.tw/t/description/3961.json').then(res => {
      this.post.content = res.data.post_stream.posts[0].cooked
      console.log(this.post.content)
    })
  }
}
</script>

<style>

</style>
