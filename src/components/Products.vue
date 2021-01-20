<template>
  <div class="products-container flex flex-col justify-center items-center m-8 bg-primary-200 rounded">

    <h2 class="text-4xl text-primary-900 uppercase font-medium mt-8">Products</h2>

    <div class="services flex flex-col md:flex-row justify-evenly items-center m-8">
      <div class="service-modal text-lg mx-8 bg-white">
        <img class="overflow-hidden rounded" src="../assets/img/doorgate.jpeg">
        <p class="p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, porro.</p>
        <p class="text-2xl py-4 font-medium bg-primary-600 text-primary-900 text-center">Product A</p>
      </div>

      <div class="service-modal text-lg mx-8 bg-white">
        <img class="overflow-hidden rounded" src="../assets/img/elock.jpeg">
        <p class="p-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, corporis.</p>
        <p class="text-2xl py-4 font-medium bg-primary-600 text-primary-900 text-center">Product B</p>
      </div>

      <div class="service-modal text-lg mx-8 bg-white">
        <img class="overflow-hidden rounded" src="../assets/img/doorgate.jpeg">
        <p class="p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quod.</p>
        <p class="text-2xl py-4 font-medium bg-primary-600 text-primary-900 text-center">Product C</p>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: 'Product'
}
</script>

<style>

</style>