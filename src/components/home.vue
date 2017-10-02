<template>
  <div class="container">

    <!-- Heading Row -->
    <div class="row my-4">
      <div class="col-lg-12">
        <img class="img-fluid rounded" src="../assets/img/mitch-rosen-188054.jpg" alt="">
      </div>
    </div>
<description></description>
    <!-- /.row -->

    <!-- Call to Action Well -->
    <!--       <div class="card text-white bg-secondary my-4 text-center">
           

            <div class="card-body">

              <p class="text-white m-0">When we see “internet of things”, let’s make it an internet of beings.<br>
              When we see “virtual reality”, let’s make it a shared reality.<br>
              When we see “machine learning”, let’s make it collaborative learning.<br>
              When we see “user experience”, let’s make it about human experience.<br>
              When we hear “the singularity is near”, let us remember: the Plurality is here.<br>
               - Audrey tang
              </p>


            </div>
          </div>
     -->

    <!-- Flexisldies Well -->

    <div class="flexslider">
      <ul class="slides">
        <li>
          <div class="card text-white bg-secondary my-4 text-center">
            <div class="card-body">
              <p class="m-0">When we see “internet of things”, let’s make it an internet of beings.<br> When we see “virtual reality”, let’s make it a shared reality.<br> When we see “machine learning”, let’s make it collaborative learning.<br> When we see “user experience”, let’s make it about human experience.<br> When we hear “the singularity is near”, let us remember: the Plurality is here.<br> - Audrey Tang
              </p>
            </div>
          </div>
        </li>
        <li>
          <div class="card text-white bg-secondary my-4 text-center">
            <div class="card-body">
              <p class="m-0">Machine learning can be used in representative democracy, <br> to bring more people's voice, <br> and more diversed voices in to our regulation and policy,<br> making policies more human,<br> because ther are instructed by a greater session of society.<br> - Colin Megill
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <!-- Content Row -->
    <project></project>
    <!-- /.row -->

  </div>
</template>

<script>
import description from './description.vue'
import project from './project.vue'
export default {
  name: 'hello',
  components: {
    description,
    project
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>