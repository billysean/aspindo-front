<template>
  <div
    class="font-sans text-gray-800 leading-normal flex flex-col min-h-screen"
  >
    <header class="bg-white z-10">
      <nav
        class="container mx-auto flex flex-col sm:flex-row justify-between items-center py-8"
      >
        <div class="mb-4 sm:mb-0">
          <a href="/id/">
            <img
              src="../asset/aspindo_logo.png"
              alt=""
              class="lg:h-16 sm:h-10 h-16"
            />
          </a>
        </div>
        <ul class="uppercase tracking-wide font-bold flex items-center text-xs md:text-lg">
          <li class="mr-8 hidden md:block">
            <a href="/id/" class="text-gray-800 hover:text-gray-600">Menu Utama</a>
          </li>
          <li class="mr-8">
            <div class="dropdown inline-block relative">
              <button
                class="text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
              >
              <a href="/id/#products">
                <span class="uppercase text-gray-800 hover:text-gray-600 mr-1"
                  >Produk</span
                >
              </a>
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </button>
              <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
                <li class="">
                  <a
                    class="rounded-t bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="/id/products/asphalt"
                    >Aspal</a
                  >
                </li>
                <li class="">
                  <a
                    class="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="/id/products/lpg"
                    >LPG</a
                  >
                </li>
                <li class="">
                  <a
                    class="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="/id/products/bbm"
                    >BBM</a
                  >
                </li>

                <li class="">
                  <a
                    class="rounded-b bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap disabled"
                    href="/id/products/seafood"
                    >Seafood !Upcoming</a
                  >
                </li>
              </ul>
            </div>
          </li>
          <li class="mr-8">
            <a href="/id/blog" class="text-gray-800 hover:text-gray-600">Berita</a>
          </li>
          <li class="mr-8">
            <a href="/id/about" class="text-gray-800 hover:text-gray-600">Tentang Kami</a>
          </li>
          <li class="mr-8">
            <a href="/id/contact" class="text-gray-800 hover:text-gray-600"
              >Kontak</a
            >
          </li>
        </ul>
        <a href="/" class="text-red-600 hover:text-red-400"
              >EN</a
            >
      </nav>
    </header>

    <div class="fixed bottom-0 right-0 w-10 sm:mb-3 sm:mr-1">
      <a
        href=" https://wa.me/6281938191551?text=I'm%20interested%20to%20know%20about%20your%20products"
      >
        <img
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
          alt=""
        />
      </a>
    </div>

    <!-- Page Content -->
    <main class="flex-grow">
      <slot />
    </main>

    <footer class="bg-brown-dark text-white">
      <div class="container mx-auto flex flex-wrap justify-between py-8">
        <div class="w-full md:w-2/4">
          <img
            src="../asset/aspindo_logo.png"
            alt=""
            class="lg:h-16 sm:h-10 h-16"
          />
          <a class="text-2xl font-bold" href=""> Aspindo Mutual Group </a>
        </div>
        <div class="w-1/2 pt-10 md:w-1/4 md:pt-0">
          <h2 class="uppercase text-2xl font-bold">Tentang Kami</h2>
          <a href="#products">
            <h3
              class="uppercase text-red-600 hover:text-red-500 font-bold text-lg py-2"
            >
              Produk
            </h3>
          </a>
          <a href="/id/blog">
            <h3
              class="uppercase text-red-600 hover:text-red-500 font-bold text-lg py-2"
            >
              Berita
            </h3>
          </a>
          <a href="/id/about">
            <h3
              class="uppercase text-red-600 hover:text-red-500 font-bold text-lg py-2"
            >
              Tentang Kami
            </h3>
          </a>
          <!-- <a href="#">
            <h3
              class="uppercase text-red-600 hover:text-red-500 font-bold text-lg py-2"
            >
              Privacy Policy
            </h3>
          </a> -->
        </div>
        <div class="w-1/2 pt-10 md:w-1/4 md:pt-0">
          <h2 class="uppercase text-2xl font-bold">Kontak</h2>
          <h3 class="uppercase font-bold text-lg py-2">Head Office</h3>
          <p>
            Jl. Kertajaya 94 <br />
            Surabaya, East Java
          </p>

          <h3 class="uppercase font-bold text-lg py-2">Jakarta</h3>
          <p>
            Treasury Building #17-30, SCBD lot28, District 8<br />
            Jakarta, Jakarta Selatan
          </p>
        </div>
      </div>
      <div class="container mx-auto flex text-center justify-between py-8">
        <h2>Copyright 2021. All rights reserved.</h2>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style scoped>
/* Add any Global Styles Here */

.active--exact {
  /* Active Nav Link */
  @apply text-gray-900;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

.whatsapp {
  max-width: 4rem;
  min-width: 1rem;
}
</style>