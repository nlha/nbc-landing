<template>
  <div class="w-full">
    <div class="nav-upper bg-primary-600 py-8 text-2xl text-primary-850 font-medium grid grid-cols-5">

      <div class="nav-logo text-4xl font-semibold uppercase col-start-2 col-span-1 flex justify-start">NBC Vungtau</div>

      <!-- <div class="address-container hidden lg:flex items-center col-start-7 col-span-1">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
        <div class="nav-address ml-2">Vungtau Vietnam</div>
      </div> -->

      <div class="phone-container flex justify-center items-center col-start-3 col-span-1">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
        <div class="nav-phone ml-2">0123456789</div>
      </div>

      <div class="email-container flex items-center justify-end col-start-4 col-span-1">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
        <div class="nav-email ml-2">email@here.com</div>
      </div>

    </div>
    <!-- end upper nav -->

    <div class="nav-sticky text-lg bg-primary-900 text-primary-200 grid grid-cols-5 sticky top-0">
      <ul class="flex justify-start py-4 uppercase font-medium col-start-2 col-span-3">
        <li class="px-4 hover:text-primary-600"><a href="#">Giới thiệu</a></li>
        <li class="px-4 hover:text-primary-600"><a href="#">Sản phẩm</a></li>
        <li class="px-4 hover:text-primary-600"><a href="#">Dịch vụ</a></li>
        <li class="px-4 hover:text-primary-600"><a href="#">Dự án</a></li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>

</style>