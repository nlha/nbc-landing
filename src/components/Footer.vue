<template>
	<div class="footer-container w-full relative">

		<div class="footer-upper py-4 bg-primary-600 text-primary-850 font-medium text-2xl grid grid-cols-5">

			<div class="footer-address flex items-center justify-start col-start-2 col-span-1">
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
				<div class="ml-2">Vungtau Vietnam</div>
			</div>

			<div class="footer-phones flex items-center justify-center col-start-3 col-span-1">
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
				<div class="ml-2">0123456789</div>
			</div>

			<div class="footer-mail flex items-center justify-end col-start-4 col-span-1">
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
				<div class="ml-2">email@here.com</div>
			</div>
		</div>

		<div class="footer-lower bg-primary-900 text-white text-lg grid grid-cols-5 items-center py-8 px-10">
			<div class="footer-logo uppercase text-4xl font-semibold ml-14 col-start-2 col-span-2">NBC Vungtau</div>
			<div class="footer-copyright col-start-4 col-span-1">
				&copy; 2021 All Rights Reserved.
			</div>
		</div>

	</div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>

</style>