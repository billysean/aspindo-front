<template>
  <Layout>
    <section>
      <div
        class="absolute inset-0 lg:opacity-100 opacity-75"
        style="z-index: -1"
      >
        <img
          class="object-cover w-full h-full bg-black"
          src="../../../asset/asphalt.jpg"
          alt="asphalt"
        />
      </div>

      <div
        class="container md:container-inner mx-auto flex flex-col sm:flex-row justify-between py-16"
      >
        <div
          class="text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left"
        >
          <div class="uppercase text-white">All about asphalt</div>
        </div>
      </div>
    </section>

    <section class="bg-white py-10">
      <div class="container mt-4 mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div
            class="card m-2 cursor-pointer border border-gray-400 hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200"
          >
            <span
              class="mt-2 font-normal text-sm text-red-800 font-mono bg-red-100 inline px-2 align-top float-right animate-pulse"
              >Asphalt</span
            >
            <div class="m-3 pt-16">
              <h2
                class="pb-6 text-xl text-center mb-2 font-bold border-b border-gray-700 uppercase"
              >
                Drum Asphalt
              </h2>
              <p
                class="font-normal text-lg text-gray-700 hover:text-gray-900 hover:font-medium transition-all duration-200 px-8"
              >
                Aspal Pen 60/70 <br />
                <br />
                155kg nett weight <br />
                <br />
                International Quality <br />
                <br />
                Ship Nationwide <br />
                <br />
              </p>

              <div class="text-center">
                <button
                  class="bg-red-600 text-white py-3 px-3 mt-4 rounded text-sm font-semibold hover:bg-opacity-75"
                >
                  Download Catalog
                </button>
              </div>
            </div>
          </div>

          <div
            class="card m-2 cursor-pointer border border-gray-400 hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200"
          >
            <span
              class="mt-2 font-normal text-sm text-red-800 font-mono bg-red-100 inline px-2 align-top float-right animate-pulse"
              >Asphalt</span
            >
            <div class="m-3 pt-16">
              <h2
                class="pb-6 text-xl text-center mb-2 font-bold border-b border-gray-700 uppercase"
              >
                Bag Asphalt
              </h2>
              <p
                class="font-normal text-lg text-gray-700 hover:text-gray-900 hover:font-medium transition-all duration-200 px-8"
              >
                Aspal Pen 60/70 <br />
                <br />
                30 & 50kg nett weight <br />
                <br />
                International Quality <br />
                <br />
                Ship Nationwide <br />
                <br />
              </p>

              <div class="text-center">
                <button
                  class="bg-red-600 text-white py-3 px-3 mt-4 rounded text-sm font-semibold hover:bg-opacity-75"
                >
                  Download Catalog
                </button>
              </div>
            </div>
          </div>

          <div
            class="card m-2 cursor-pointer border border-gray-400 hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200"
          >
            <span
              class="mt-2 font-normal text-sm text-red-800 font-mono bg-red-100 inline px-2 align-top float-right animate-pulse"
              >Asphalt</span
            >
            <div class="m-3 pt-16">
              <h2
                class="pb-6 text-xl text-center mb-2 font-bold border-b border-gray-700 uppercase"
              >
                Bulk Asphalt
              </h2>
              <p
                class="font-normal text-lg text-gray-700 hover:text-gray-900 hover:font-medium transition-all duration-200 px-8"
              >
                Aspal Pen 60/70 <br />
                <br />
                15 tonnes nett weight <br />
                <br />
                International Quality <br />
                <br />
                Ship Java Island <br />
                <br />
              </p>

              <div class="text-center">
                <button
                  class="bg-red-600 text-white py-3 px-3 mt-4 rounded text-sm font-semibold hover:bg-opacity-75"
                >
                  Download Catalog
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white py-10">
      <div class="container mt-4 mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div class="justify-self-center sm:col-span-2">
            <img src="../../../asset/pertamina.png" alt="" class=" h-24">
          </div>
          <div class="justify-self-center sm:col-span-2">
            <img src="../../../asset/esso.png" alt="" class="h-24">
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white py-10">
      <div class="container mt-4 mx-auto">
        <h1>Partnering With Pertamina</h1>
        <p align="justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, vel ducimus beatae modi minima, 
          culpa quasi nobis quo nihil delectus distinctio dolore, sed quas! Laudantium corporis quo cum aliquid ad.
        </p>
      </div>
    </section>
  </Layout>
</template>

<style scoped>
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
</style>