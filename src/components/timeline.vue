<template>
  <section id="cd-timeline" class="cd-container">
    <div class="cd-timeline-block" v-for="timeline in timelines">
      <div class="cd-timeline-img cd-picture">
        <img src="../assets/img/cd-icon-picture.svg" alt="Picture">
      </div>
      <!-- cd-timeline-img -->

      <div class="cd-timeline-content">
        <h2>{{timeline.title}}</h2>
        <div v-html="timeline.content"></div>
        <a v-bind:href="timeline.link" class="cd-read-more">Read more</a>
        <span class="cd-date">{{timeline.date}}</span>
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
//import Popper from '../assets/vendor/popper/popper's
import Popper from 'popper.js'
//import Bootstrap from '../assets/vendor/bootstrap/js/bootstrap'
import main from '../assets/js/main'
import axios from 'axios'
export default {
  name: 'timeline',
  data() {
    /*  async function gettopics() {
       let response = await fetch('https://talk.pdis.nat.gov.tw/c/holopolis/timeline.json');
       let data = await response.json();
       let topics = data.topic_list.topics.map(topic => topic.id)
       topics = topics.slice(1)
       return topics
     }
 
     async function getcontent(topic) {
       let response = await fetch('https://talk.pdis.nat.gov.tw/t/' + topic + '.json');
       let data = await response.json();
       return data
       let timeline = {}
       timeline.title = data.title
       let ct = data.post_stream.posts[0].cooked.split('<hr>')
       timeline.content = ct[0]
       timeline.link = data.post_stream.posts[0].link_counts[0].url
       timeline.date = new Date(data.post_stream.posts[0]['created_at'].toString()).toISOString().substring(0, 10);
       return timeline
       //console.log(this.timelines)
       //this.timelines.push(timeline)
     }
     gettopics().then(topics => {
       topics.map(topic => {
         getcontent(topic).then(timeline => {
           this.timelines.push(timeline)
         })
       })
     }) */
    return {
      timelines: []
    }
  },
  created: function() {
    axios.get('https://talk.pdis.nat.gov.tw/c/holopolis/timeline.json').then(res => {
      let topics = res.data.topic_list.topics.map(topic => topic.id)
      topics = topics.slice(1)
      topics.map(topic => {
        if (topic != '3960') {
          axios.get('https://talk.pdis.nat.gov.tw/t/' + topic + ".json").then(res => {
            let timeline = {}
            timeline.id = res.data.id
            timeline.title = res.data.title
            let ct = res.data.post_stream.posts[0].cooked.split('<hr>')
            timeline.content = ct[0]
            timeline.link = res.data.post_stream.posts[0].link_counts[0].url
            timeline.date = new Date(res.data.post_stream.posts[0]['created_at'].toString()).toISOString().substring(0, 10);
            this.timelines.push(timeline)
            this.timelines = this.timelines.sort(function(a,b) {
              return b.id > a.id ? 1:-1
            })
          })
        }
      })
    })
  }
}
</script>


<style src="../assets/css/style.css"></style>