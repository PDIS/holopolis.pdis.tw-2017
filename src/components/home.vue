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
    <!-- /.row -->

  </div>
</template>

<script>
import description from './description.vue'
export default {
  name: 'hello',
  components: {
    description
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
-->