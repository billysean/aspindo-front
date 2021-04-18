<template>
  <Layout>
    <section>
      <img
        class="absolute sm:h-auto w-screen"
        style="z-index: -1"
        src="../asset/asphalt-road.png"
        alt=""
      />
      <div
        class="hero container md:container-inner mx-auto flex flex-col sm:flex-row justify-between py-16"
      >
        <div
          class=" text-6xl font-bold w-full sm:w-4/5 text-center sm:text-left"
        >
          <div class="uppercase text-white">
            Indonesia's Leading <br> Asphalt & LPG Specialists
          </div>
          <div class="uppercase text-red-600">Delivered.</div>
          <div class="uppercase text-red-600">Innovative.</div>
          <div class="uppercase text-red-600">Satisfied.</div>
        </div>
      </div>
    </section>

    <section class="bg-brown-dark py-16 sm:py-8">
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
        class="flex justify-center items-center absolute hidden lg:block"
        style="bottom: -15rem; right: 10rem"
      >
        <div class="bg-white p-10 shadow-md">
          <h1 class="text-3xl font-bold text-center">OUR CORE VALUES</h1>
          <div class="mt-4 mb-10">
            <p class="text-gray-600 py-2">
              <span class="text-black font-bold">EXCELLENT SERVICE</span> is our
              COMMITMENT.
            </p>
            <p class="text-gray-600 py-2">
              <span class="text-black font-bold">CUSTOMER SATISFACTION</span> is
              our VALUE.
            </p>
            <p class="text-gray-600 py-2">
              <span class="text-black font-bold">EXPANSION</span> is our
              MISSION.
            </p>
          </div>
          <button
            class="bg-red-600 text-white py-3 px-8 mt-4 rounded text-lg font-semibold hover:bg-opacity-75"
          >
            Call us on Whatsapp
          </button>
        </div>
      </div>
    </section>

    <section class="bg-white py-10">
      <div class="container-inner mx-auto">
        <div class="text-center border-b">
          <h2 class="font-bold mb-6 text-4xl">PRODUCT SELECTION</h2>
        </div>
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <!-- Article -->
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
                <!-- <p class="text-grey-darker text-sm">Rp 300.000,-</p> -->
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
                  <p class="ml-2 text-sm font-bold">Send Inquiries</p>
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
            <!-- END Article -->
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <!-- Article -->
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
                <!-- <p class="text-grey-darker text-sm">Rp 300.000,-</p> -->
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
                  <p class="ml-2 text-sm font-bold">Send Inquiries</p>
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
            <!-- END Article -->
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <!-- Article -->
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
                <!-- <p class="text-grey-darker text-sm">Rp 300.000,-</p> -->
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
                  <p class="ml-2 text-sm font-bold">Send Inquiries</p>
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
            <!-- END Article -->
          </div>
           <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 opacity-50">
            <!-- Article -->
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
                <!-- <p class="text-grey-darker text-sm">Rp 300.000,-</p> -->
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
                  <p class="ml-2 text-sm font-bold">Send Inquiries</p>
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
            <!-- END Article -->
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="bg-white py-10">
      <div class="container-inner mx-auto">
        <div class="text-center border-b">
          <h2 class="font-bold mb-6 text-4xl">OUR SERVICES</h2>
        </div>
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
          <div class="w-1/4">
            <img
              alt="Placeholder"
              class="block h-auto w-full"
              src="https://picsum.photos/600/400/?random"
            />
          </div>
          <div class="2/4">
            <h2>Shipping</h2>
            <p align="left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laudantium minus soluta voluptate, perferendis consequatur
              praesentium magni beatae ipsum ex! Deleniti dolore dicta
              asperiores, tempore molestiae ab ducimus reprehenderit nisi
              eligendi.
            </p>
          </div>
        </div>
      </div>
    </section> -->

    <section class="bg-white py-16 sm:py-8 text-black">
      <div class="container md:container-inner mx-auto text-white">
        <div class="w-full sm:w-1/2">
          <h1 class="text-2xl bottom-b-2 font-bold py-1">Our Services</h1>
          <p class="text-justify text-xl font-light py-2">
            Founded in 1980, Aspindo Mutual Group has grown into an
            industry-leading Asphalt manufacturer in Indonesia. Our services
            include providing solution to infrastructure requirements and
            shipment across the nation.
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
  padding-left: 1rem;
  padding-right: 1rem;
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
    background: rgba(0,0,0,.4);
    overflow: hidden;
}
</style>