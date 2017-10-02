<template>
  <div class="container">

    <!-- Heading Row -->
    <div class="row my-4">
      <div class="col-lg-2">

      </div>
      <!-- /.col-md-4 -->
      <div class="col-lg-8 ">
        <div v-html="contact"></div>
        <p>
          <a class="btn btn-large btn-primary" href="http://join.g0v.today/">Join us on Slack!</a>
        </p>
      </div>
      <!-- /.col-lg-8 -->
      <div class="col-lg-4">

      </div>
      <!-- /.col-md-4 -->
    </div>
    <!-- /.row -->

  </div>
</template>


<script>
import axios from 'axios'
export default {
  name: 'contact',
  data () {
    return {
      contact: ''
    }
  }
  ,
  created: function() {
    axios.get('https://talk.pdis.nat.gov.tw/t/join-us/3957.json').then(res => {
      this.contact = res.data.post_stream.posts[0].cooked
    })
  }
}
</script>
