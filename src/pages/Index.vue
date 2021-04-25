<template>
  <Layout>
    <section>
      <div
        class="absolute h-screen py-30 lg:inset-0 opacity-100"
        style="z-index: -1"
      >
        <img
          class="object-cover w-full h-full bg-black"
          src="../asset/asphalt-road.png"
          alt="asphalt road"
        />
      </div>
    </section>

    <div class="container mx-auto lg:mt-48 lg:mb-10 lg:px-16 px-4 py-4">
      <div>
        <h1 class="uppercase text-white font-bold text-6xl tracking-wide">
          Indonesia's Leading <br />
          Asphalt & LPG Specialists
        </h1>
        <h2 class="uppercase text-red-600 font-bold text-3xl">Delivered.</h2>
        <h2 class="uppercase text-red-600 font-bold text-3xl">Innovative.</h2>
        <h2 class="uppercase text-red-600 font-bold text-3xl">Satisfied.</h2>
      </div>
    </div>

    <section class="bg-white pb-6">
      <div
        class="bg-red-600 py-10 sm:py-8 container mx-auto my-6 lg:px-16 px-4"
      >
        <div class="container md:container-inner mx-auto text-white">
          <div class="w-full sm:w-1/2">
            <h1 class="text-4xl font-bold py-1">Aspindo Mutual Group</h1>
            <p class="text-justify text-xl font-light py-2">
              Founded in 1980, Aspindo Mutual Group has grown into an
              industry-leading Asphalt manufacturer in Indonesia. Our services
              include providing solution to infrastructure requirements and
              shipment across the nation.
            </p>
          </div>
        </div>

        <div
          class="justify-center items-center absolute hidden lg:block"
          style="bottom: -15rem; right: 10rem"
        >
          <div class="bg-white p-10 shadow-md">
            <h1 class="text-3xl font-bold text-center">OUR CORE VALUES</h1>
            <div class="mt-4 mb-10">
              <p class="text-gray-600 py-2">
                <span class="text-black font-bold">EXCELLENT SERVICE</span> is
                our COMMITMENT.
              </p>
              <p class="text-gray-600 py-2">
                <span class="text-black font-bold">CUSTOMER SATISFACTION</span>
                is our VALUE.
              </p>
              <p class="text-gray-600 py-2">
                <span class="text-black font-bold">EXPANSION</span> is our
                MISSION.
              </p>
            </div>
            <a
              href="https://wa.me/6281938191551?text=I'm%20interested%20to%20know%20about%20your%20products"
            >
              <button
                class="bg-red-600 text-white py-3 px-8 mt-4 rounded text-lg font-semibold hover:bg-opacity-75"
              >
                Call us on Whatsapp
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Selection
    <section class="bg-white py-10">
      <div class="container-inner mx-auto">
        <div class="text-center border-b">
          <h2 class="font-bold mb-6 text-4xl">PRODUCT SELECTION</h2>
        </div>
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            
            <article class="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img
                  alt="Placeholder"
                  class="block h-auto w-full"
                  src="https://picsum.photos/600/400/?random"
                />
              </a>

              <header
                class="flex items-center justify-between leading-tight p-2 md:p-4"
              >
                <h1 class="text-lg">
                  <a class="no-underline hover:underline text-black" href="#">
                    Asphalt
                  </a>
                </h1>
              </header>

              <a
                class="bg-red-400 hover:bg-red-600 flex items-center justify-between leading-none p-2 md:p-4"
                href="#"
              >
                <div
                  class="flex items-center no-underline hover:underline text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:bsean@aspindogroup.com?subject=Asphalt web Inquiry&body=Tell me more about your Asphalt industry!"
                  >
                    <p class="ml-2 text-sm font-bold">Send Inquiries</p>
                  </a>
                </div>
              </a>

              <a
                class="bg-gray-400 hover:bg-gray-600 text-black hover:text-gray-100 flex items-center justify-between leading-none p-2 md:p-4"
                href="#"
              >
                <div class="flex items-center no-underline hover:underline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <p class="ml-2 text-sm font-bold">Download Catalog</p>
                </div>
              </a>
            </article>

          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            
            <article class="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img
                  alt="Placeholder"
                  class="block h-auto w-full"
                  src="https://picsum.photos/600/400/?random"
                />
              </a>

              <header
                class="flex items-center justify-between leading-tight p-2 md:p-4"
              >
                <h1 class="text-lg">
                  <a class="no-underline hover:underline text-black" href="#">
                    LPG
                  </a>
                </h1>
              </header>

              <a
                class="bg-red-400 hover:bg-red-600 flex items-center justify-between leading-none p-2 md:p-4"
                href="#"
              >
                <div
                  class="flex items-center no-underline hover:underline text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:bsean@aspindogroup.com?subject=LPG Web Inquiry&body=Tell me more about your LPG industry!"
                  >
                    <p class="ml-2 text-sm font-bold">Send Inquiries</p>
                  </a>
                </div>
              </a>

              <a
                class="bg-gray-400 hover:bg-gray-600 text-black hover:text-gray-100 flex items-center justify-between leading-none p-2 md:p-4"
                href="#"
              >
                <div class="flex items-center no-underline hover:underline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <p class="ml-2 text-sm font-bold">Download Catalog</p>
                </div>
              </a>
            </article>

          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            
            <article class="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img
                  alt="Placeholder"
                  class="block h-auto w-full"
                  src="https://picsum.photos/600/400/?random"
                />
              </a>

              <header
                class="flex items-center justify-between leading-tight p-2 md:p-4"
              >
                <h1 class="text-lg">
                  <a class="no-underline hover:underline text-black" href="#">
                    BBM
                  </a>
                </h1>
              </header>

              <a
                class="bg-red-400 hover:bg-red-600 flex items-center justify-between leading-none p-2 md:p-4"
                href="#"
              >
                <div
                  class="flex items-center no-underline hover:underline text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:bsean@aspindogroup.com?subject=BBM Web Inquiry&body=Tell me more about your BBM industry!"
                  >
                    <p class="ml-2 text-sm font-bold">Send Inquiries</p>
                  </a>
                </div>
              </a>

              <a
                class="bg-gray-400 hover:bg-gray-600 text-black hover:text-gray-100 flex items-center justify-between leading-none p-2 md:p-4"
                href="#"
              >
                <div class="flex items-center no-underline hover:underline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <p class="ml-2 text-sm font-bold">Download Catalog</p>
                </div>
              </a>
            </article>

          </div>
          <div
            class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 opacity-50"
          >
            
            <article class="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img
                  alt="Placeholder"
                  class="block h-auto w-full"
                  src="https://picsum.photos/600/400/?random"
                />
              </a>

              <header
                class="flex items-center justify-between leading-tight p-2 md:p-4"
              >
                <h1 class="text-lg">
                  <a class="no-underline hover:underline text-black" href="#">
                    Seafood !Upcoming
                  </a>
                </h1>
              </header>

              <a
                class="bg-red-400 hover:bg-red-600 flex items-center justify-between leading-none p-2 md:p-4"
                href="#"
              >
                <div
                  class="flex items-center no-underline hover:underline text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:bsean@aspindogroup.com?subject=Seafood Web Inquiry&body=Tell me more about your seafood industry!"
                  >
                    <p class="ml-2 text-sm font-bold">Send Inquiries</p>
                  </a>
                </div>
              </a>

              <a
                class="bg-gray-400 hover:bg-gray-600 text-black hover:text-gray-100 flex items-center justify-between leading-none p-2 md:p-4"
                href="#"
              >
                <div class="flex items-center no-underline hover:underline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <p class="ml-2 text-sm font-bold">Download Catalog</p>
                </div>
              </a>
            </article>

          </div>
        </div>
      </div>
    </section> -->

    <section class="bg-white py-16">
      <div class="container mx-auto my-6 lg:px-16 px-4">
        <h2
          class="flex items-center leading-normal text-black font-bold text-4xl uppercase"
        >
          Product Selection
        </h2>
      </div>

      <div
        class="flex items-stretch justify-between mb-10 px-4 overflow-x-auto relative"
      >
        <a href="#" class="relative group block mr-4 flex-shrink-0">
          <div
            class="absolute inset-0 bg-black opacity-75 hidden group-hover:flex flex-col justify-end text-white px-4 py-4 cursor-pointer"
          >
            <div>
              <span
                class="mt-2 font-normal text-sm text-red-800 font-mono inline px-2 align-top float-right animate-pulse"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  /></svg
              ></span>
              <h3 class="text-lg mb-2">ASPHALT</h3>
              <p class="leading-normal text-xs">
                We are one of the biggest Asphalt Suppliers in Indonesia. With
                31 years of experience, we are committed to provide better
                experience and services to our business partners.
                <br />
                <br />
                Our products are shipped in :
                <br />
                Drums | Bulk | Platinum Bag
              </p>
              <a href="#" class="sm:px-4">
                <button
                  class="uppercase bg-red-600 text-white py-2 px-4 mt-4 rounded text-xs font-semibold hover:bg-opacity-75"
                >
                  submit inquiry
                </button>
              </a>
              <a href="">
                <button
                  class="uppercase bg-gray-600 text-white py-2 px-4 mt-4 rounded text-xs font-semibold hover:bg-opacity-75"
                >
                  Download Catalog
                </button>
              </a>
            </div>
          </div>
          <img src="../asset/asphalt.png" alt="" />
        </a>

        <a href="#" class="relative group block mr-4 flex-shrink-0">
          <div
            class="absolute inset-0 bg-black opacity-75 hidden group-hover:flex flex-col justify-end text-white px-4 py-4 cursor-pointer"
          >
            <div>
              <span
                class="mt-2 font-normal text-sm text-red-800 font-mono inline px-2 align-top float-right animate-pulse"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  /></svg
              ></span>
              <h3 class="text-lg mb-2">LPG</h3>
              <p class="leading-normal text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Maiores facilis inventore tempore reprehenderit a totam ullam
                autem dignissimos suscipit aliquam quam voluptatum qui nihil
                magnam reiciendis ducimus aspernatur, necessitatibus quaerat!
              </p>
              <a href="#" class="sm:px-4">
                <button
                  class="uppercase bg-red-600 text-white py-2 px-4 mt-4 rounded text-xs font-semibold hover:bg-opacity-75"
                >
                  submit inquiry
                </button>
              </a>
              <a href="">
                <button
                  class="uppercase bg-gray-600 text-white py-2 px-4 mt-4 rounded text-xs font-semibold hover:hidden"
                >
                  Download Catalog
                </button>
              </a>
            </div>
          </div>
          <img src="../asset/lpg.png" alt="" />
        </a>

        <a href="#" class="relative group block mr-4 flex-shrink-0">
          <div
            class="absolute inset-0 bg-black opacity-75 hidden group-hover:flex flex-col justify-end text-white px-4 py-4 cursor-pointer"
          >
            <div>
              <span
                class="mt-2 font-normal text-sm text-red-800 font-mono inline px-2 align-top float-right animate-pulse"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  /></svg
              ></span>
              <h3 class="text-lg mb-2">BBM</h3>
              <p class="leading-normal text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Maiores facilis inventore tempore reprehenderit a totam ullam
                autem dignissimos suscipit aliquam quam voluptatum qui nihil
                magnam reiciendis ducimus aspernatur, necessitatibus quaerat!
              </p>
              <a href="#" class="sm:px-4">
                <button
                  class="uppercase bg-red-600 text-white py-2 px-4 mt-4 rounded text-xs font-semibold hover:bg-opacity-75"
                >
                  submit inquiry
                </button>
              </a>
              <a href="">
                <button
                  class="uppercase bg-gray-600 text-white py-2 px-4 mt-4 rounded text-xs font-semibold hover:bg-opacity-75"
                >
                  Download Catalog
                </button>
              </a>
            </div>
          </div>
          <img src="../asset/bbm.png" alt="" />
        </a>

        <a href="#" class="relative group block mr-4 flex-shrink-0">
          <div
            class="absolute inset-0 bg-black opacity-75 hidden group-hover:flex flex-col justify-end text-white px-4 py-4 cursor-pointer"
          >
            <div>
              <span
                class="mt-2 font-normal text-sm text-red-800 font-mono inline px-2 align-top float-right animate-pulse"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  /></svg
              ></span>
              <h3 class="text-lg mb-2">SEAFOOD</h3>
              <p class="leading-normal text-sm">
                With the help of KML Group, We are expanding our business to
                seafood export and import.
              </p>
              <p class="text-red-600 font-bold">Stay Tune for more</p>
              <a href="#" class="sm:px-4">
                <button
                  class="uppercase bg-red-600 text-white py-2 px-4 mt-4 rounded text-xs font-semibold hover:bg-opacity-75"
                >
                  submit inquiry
                </button>
              </a>
              <a href="">
                <button
                  class="uppercase bg-gray-600 text-white py-2 px-4 mt-4 rounded text-xs font-semibold hover:bg-opacity-75"
                >
                  Download Catalog
                </button>
              </a>
            </div>
          </div>
          <img src="../asset/seafood.png" alt="" />
        </a>
      </div>
    </section>

    <div class="inset-0 opacity-100 fixed" style="z-index: -2">
      <img
        class="object-cover w-screen h-screen"
        src="../asset/industry.jpg"
        alt="industry-bg"
      />
    </div>

    <section
      class="bg-brown-dark py-10 sm:py-8 containermy-6 lg:px-16 px-4 bg-opacity-75"
    >
      <div class="container mx-auto flex justify-between py-8">
        <div class="w-1/3 text-center" style="text-align: -webkit-center">
          <h1 class="text-4xl font-bold py-1 uppercase"></h1>
          <button
            class="text-white py-3 px-8 mt-4 sm:text-sm md:text-xl lg:text-3xl font-semibold hover:bg-opacity-75"
          >
            <span class="sm:text-lg md:text-3xl lg:text-6xl"> 4</span> <br />
            Asphalt Terminal
          </button>
        </div>
        <div class="w-1/3 text-center" style="text-align: -webkit-center">
          <h1 class="text-4xl font-bold py-1 uppercase"></h1>
          <button
            class="text-white py-3 px-8 mt-4 sm:text-sm md:text-xl lg:text-3xl font-semibold hover:bg-opacity-75"
          >
            <span class="sm:text-lg md:text-3xl lg:text-6xl"> 200</span> <br />
            Tanker Truck
          </button>
        </div>
        <div class="w-1/3 text-center" style="text-align: -webkit-center">
          <h1 class="text-4xl font-bold py-1 uppercase"></h1>
          <button
            class="text-white py-3 px-8 mt-4 sm:text-sm md:text-xl lg:text-3xl font-semibold hover:bg-opacity-75"
          >
            <span class="sm:text-lg md:text-3xl lg:text-6xl"> 2</span> <br />
            Tanker Ship
          </button>
        </div>
      </div>
    </section>

    <section class="bg-white py-16 sm:py-8 text-black">
      <div class="container mx-auto my-6 lg:px-16 px-4">
        <h2
          class="flex items-center leading-normal text-black font-bold text-4xl uppercase"
        >
          artillery
        </h2>
      </div>
      <div class="flex flex-wrap">
        <div class="md:px-32 w-full lg:w-1/2">
          <h1 class="text-3xl font-bold py-1">Truck</h1>
          <p class="text-justify text-xl font-light py-2">
            In enabling a mobile transportation on land, PT.Aspindo has
            dedicated itself to legally own 200 trucks available to increase
            mobility and provide better customer experience.
          </p>
        </div>
        <div
          class="w-full lg:w-1/2 md:px-32 hidden lg:block"
          style="text-align: -webkit-center"
        >
          <img src="../asset/ship.png" alt="ship" />
        </div>
      </div>

      <div class="flex flex-wrap lg:pt-32">
        <div
          class="w-full lg:w-1/2 md:px-32 hidden lg:block"
          style="text-align: -webkit-center"
        >
          <img src="../asset/ship.png" alt="ship" />
        </div>
        <div class="md:px-32 w-full lg:w-1/2">
          <h1 class="text-3xl font-bold py-1">Ship</h1>
          <p class="text-justify text-xl font-light py-2">
            As our business expands from 1980, PT.Aspindo has managed to legally
            own 2 tangker ships to give better services to our business partners
            as well a drastic cost reduction.
          </p>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home",
  },
};
</script>

<style scoped>
.card-header {
  height: 18rem;
  background-image: url("https://images.unsplash.com/photo-1516562309708-05f3b2b2c238?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80");
  background-position-y: 50%;
}

.card-header:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: -10%;
  height: 50px;
  width: 120%;
  transform: translateY(50%) rotate(5deg);
}

.container-inner {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

@media (min-width: 640px) {
  .container-inner {
    max-width: 640px;
  }
}

@media (min-width: 768px) {
  .container-inner {
    max-width: 768px;
  }
}

@media (min-width: 1024) {
  .container-inner {
    max-width: 1024;
  }
}

@media (min-width: 1320) {
  .container-inner {
    max-width: 1320;
  }
}

.image {
  height: 80vh;
  /* width: 100vw; */
  background: rgba(0, 0, 0, 0.4);
  overflow: hidden;
}
</style>