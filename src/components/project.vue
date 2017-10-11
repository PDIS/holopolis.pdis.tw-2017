<template>
  <div class="row">
    <div class="col-md-4 mb-4" v-for="project in projects">
      <div class="card h-100">
        <div class="card-body">
          <h2 class="card-title">{{project.title}}</h2>
          <p class="card-text"><div v-html="project.content"></div>
        </div>
        <div class="card-footer">
          <a v-bind:href="project.link" class="btn btn-primary">More Info</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'project',
  data() {
    return {
      projects: []
    }
  },
  created: function() {
    axios.get('https://talk.pdis.nat.gov.tw/c/holopolis/project.json').then(res => {
      let topics = res.data.topic_list.topics.map(topic => topic.id)
      topics = topics.slice(1)
      topics.map(topic => {
        axios.get('https://talk.pdis.nat.gov.tw/t/' + topic + ".json").then(res => {
          let project = {}
          project.title = res.data.title
          project.content = res.data.post_stream.posts[0].cooked.split('<hr>')[0]
          project.link = res.data.post_stream.posts[0].link_counts[0].url
          this.projects.push(project)
        })
      })
    }).then()
  }
}
</script>

<style>

</style>
