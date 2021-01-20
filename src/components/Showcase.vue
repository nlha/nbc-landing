<template>
  <div class="showcase-container flex justify-evenly bg-primary-200 m-8 p-8 rounded">

    <div class="showcase p-8 rounded overflow-hidden">
      <div class="bg bg-bighouse bg-cover bg-center mb-6 transform hover:scale-105 transition ease-in-out duration-500 rounded-lg overflow-hidden">
        <span class="">Project X</span>
      </div>
      <div class="bg bg-doorkeep bg-cover bg-center mb-6 transform hover:scale-105 transition ease-in-out duration-500 rounded-lg overflow-hidden">
        <span class="">Project X</span>
      </div>
      <div class="bg bg-doorwing bg-cover bg-center mb-6 transform hover:scale-105 transition ease-in-out duration-500 rounded-lg overflow-hidden">
        <span class="">Project X</span>
      </div>
      <div class="bg bg-lamp bg-cover bg-center mb-6 transform hover:scale-105 transition ease-in-out duration-500 rounded-lg overflow-hidden">
        <span class="">Project X</span>
      </div>
    </div>

    <div class="showcase p-8 rounded overflow-hidden">
      <div class="bg bg-mountain bg-cover bg-center mb-6 transform hover:scale-105 transition ease-in-out duration-500 rounded-lg overflow-hidden">
        <span class="">Project X</span>
      </div>
      <div class="bg bg-elock3 bg-cover bg-center mb-6 transform hover:scale-105 transition ease-in-out duration-500 rounded-lg overflow-hidden">
        <span class="">Project X</span>
      </div>
      <div class="bg bg-wires bg-cover bg-center mb-6 transform hover:scale-105 transition ease-in-out duration-500 rounded-lg overflow-hidden">
        <span class="">Project X</span>
      </div>
      <div class="bg bg-elock2 bg-cover bg-center mb-6 transform hover:scale-105 transition ease-in-out duration-500 rounded-lg overflow-hidden">
        <span class="">Project X</span>
      </div>
    </div>

    <div class="showcase p-8 rounded overflow-hidden">
      <div class="bg bg-lamp bg-cover bg-center mb-6 transform hover:scale-105 transition ease-in-out duration-500 rounded-lg overflow-hidden">
        <span class="">Project X</span>
      </div>
      <div class="bg bg-elock2 bg-cover bg-center mb-6 transform hover:scale-105 transition ease-in-out duration-500 rounded-lg overflow-hidden">
        <span class="">Project X</span>
      </div>
      <div class="bg bg-cat bg-cover bg-center mb-6 transform hover:scale-105 transition ease-in-out duration-500 rounded-lg overflow-hidden">
        <span class="">Project X</span>
      </div>
      <div class="bg bg-mountain bg-cover bg-center mb-6 transform hover:scale-105 transition ease-in-out duration-500 rounded-lg overflow-hidden">
        <span class="">Project X</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Showcase'
}
</script>

<style>
  span {
    margin: auto;
    display: none;
    font-size: 2rem;
    color: #DCB26A;
    font-weight: bold;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 50px;
    text-align: center;
    text-shadow: 0 0 7px #000;
  }
  .bg {
    background-repeat: no-repeat;
  }
  .bg:hover span, .bg:focus span {
    display: block;
    color: #DCB26A;
  }
  .bg:hover .bg::before, .bg:focus .bg::before {
    display: block;
  }
  .bg::before {
    content: "";
    display: none;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(52,73,94,0.75);
  }
  .bg-bighouse {
    background-image: url('../assets/img/bighouse.jpeg');
    width: 350px;
    height: 300px;
  }
  .bg-mountain {
    background-image: url('../assets/img/mountain.jpeg');
    width: 350px;
    height: 300px;
  }
  .bg-lamp {
    background-image: url('../assets/img/lamp.jpeg');
    width: 350px;
    height: 450px;
  }
  .bg-wires {
    background-image: url('../assets/img/wires.jpeg');
    width: 350px;
    height: 450px;
  }
  .bg-doorkeep {
    background-image: url('../assets/img/doorkeep.jpeg');
    width: 350px;
    height: 450px;
  }
  .bg-doorwing {
    background-image: url('../assets/img/doorwing.jpeg');
    width: 350px;
    height: 300px;
  }
  .bg-doorgate {
    background-image: url('../assets/img/doorgate.jpeg');
    width: 350px;
    height: 300px;
  }
  .bg-cat {
    background-image: url('../assets/img/cat.jpeg');
    width: 350px;
    height: 450px;
  }
  .bg-elock3 {
    background-image: url('../assets/img/elock3.jpeg');
    width: 350px;
    height: 300px;
  }
  .bg-elock2 {
    background-image: url('../assets/img/elock2.jpeg');
    width: 350px;
    height: 300px;
  }
</style>