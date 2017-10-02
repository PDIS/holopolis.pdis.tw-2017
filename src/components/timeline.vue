<template>
  <section id="cd-timeline" class="cd-container" >
    <div class="cd-timeline-block" v-for="timeline in timelines">
      <div class="cd-timeline-img cd-picture">
        <img src="../assets/img/cd-icon-picture.svg" alt="Picture">
      </div>
      <!-- cd-timeline-img -->

      <div class="cd-timeline-content">
        <h2>{{timeline.title}}</h2>
        <div v-html="timeline.content"></div>
        <a href="#0" class="cd-read-more">Read more</a>
        <span class="cd-date">Jan 14</span>
      </div>
      <!-- cd-timeline-content -->
    </div>
    <!-- cd-timeline-block -->

    <!-- cd-timeline-block -->
  </section>
  <!-- cd-timeline -->
</template>

<script>
import jQuery from '../assets/vendor/jquery/jquery'
import Popper from '../assets/vendor/popper/popper'
//import Bootstrap from '../assets/vendor/bootstrap/js/bootstrap'
import main from '../assets/js/main'
import axios from 'axios'
export default {
  name: 'timeline',
  data() {
    return {
      timelines: []
    }
  },
  created: function() {
    axios.get('https://talk.pdis.nat.gov.tw/c/holopolis/timeline.json').then(res => {
      let topics = res.data.topic_list.topics.map(topic => topic.id)
      topics.map(topic => {
        if (topic != '3960') {
          axios.get('https://talk.pdis.nat.gov.tw/t/' + topic + ".json").then(res => {
            let timeline = {}
            let data = res
            //console.log(data)
            timeline.title = data.data.title
            timeline.content = data.data.post_stream.posts[0].cooked
            timeline.link = data.data.post_stream.posts[0].link_counts[0].url
            this.timelines.push(timeline)
            console.log(this.timelines)
          })
        }
      })
    })
  }
}
</script>


<style src="../assets/css/style.css"></style>