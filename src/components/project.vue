<template>
  <div class="row">
    <div class="col-md-4 mb-4">
      <div class="card h-100">
        <div class="card-body">
          <h2 class="card-title">Crazy Tree</h2>
          <p class="card-text">Visualizing a polis-facilitated conversation with ... (for some reason) a tree with Unity.</p>
        </div>
        <div class="card-footer">
          <a href="https://www.youtube.com/watch?v=Mkp93iDXNsI" class="btn btn-primary">More Info</a>
        </div>
      </div>
    </div>
    <!-- /.col-md-4 -->
    <div class="col-md-4 mb-4">
      <div class="card h-100">
        <div class="card-body">
          <h2 class="card-title">Realtimeboard</h2>
          <p class="card-text">We use an online ideation canvas to sketch out our most up-to-date ideas.</p>
        </div>
        <div class="card-footer">
          <a href="https://realtimeboard.com/app/board/o9J_k03x7MA=/" class="btn btn-primary">More Info</a>
        </div>
      </div>
    </div>
    <!-- /.col-md-4 -->
    <div class="col-md-4 mb-4">
      <div class="card h-100">
        <div class="card-body">
          <h2 class="card-title">A-frame x Pol.is</h2>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
        </div>
        <div class="card-footer">
          <a href="https://xanxusx.github.io/aframe-polis/" class="btn btn-primary">More Info</a>
        </div>
      </div>
    </div>
    <!-- /.col-md-4 -->

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'project',
  data() {
    return {
      post: []
    }
  },
  created: function() {
    axios.get('https://talk.pdis.nat.gov.tw/c/holopolis/project.json').then(res => {
      let topics = res.data.topic_list.topics.map(topic => topic.id)
      topics = topics.slice(1)
      topics.map(topic => {
        axios.get('https://talk.pdis.nat.gov.tw/t/' + topic + ".json").then(res => {
          let data = {}
          data.title = res.data.title
          data.content = res.data.post_stream.posts[0].cooked.split()
          data.link = res.data.post_stream.posts[0].link_counts[0].url
          this.post.push(data)
        })
      })
    }).then()
  }
}
</script>

<style>

</style>
