<template>
  <div class="services-container flex flex-col justify-center items-center m-8 bg-primary-200 rounded">

    <h2 class="text-4xl text-primary-900 uppercase font-medium mt-8">Services</h2>

    <div class="services flex justify-evenly flex-col md:flex-row items-center m-8">
      <div class="service-modal text-lg mx-8 bg-white">
        <img class="overflow-hidden rounded" src="../assets/img/elock2.jpeg">
        <p class="p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, sed?</p>
        <p class="text-2xl py-4 font-medium bg-primary-600 text-primary-900 text-center">Installation</p>
      </div>

      <div class="service-modal text-lg mx-8 bg-white">
        <img class="overflow-hidden rounded" src="../assets/img/elock3.jpeg">
        <p class="p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, odio.</p>
        <p class="text-2xl py-4 font-medium bg-primary-600 text-primary-900 text-center">Maintenance</p>
      </div>

      <div class="service-modal text-lg mx-8 bg-white">
        <img class="overflow-hidden rounded" src="../assets/img/elock.jpeg">
        <p class="p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, vitae.</p>
        <p class="text-2xl py-4 font-medium bg-primary-600 text-primary-900 text-center">Emergency Service</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Services'
}
</script>

<style>

</style>