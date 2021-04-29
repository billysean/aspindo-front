<template>
  <Layout>
    <section>
      <div
        class="absolute inset-0 lg:opacity-100 opacity-75"
        style="z-index: -1"
      >
        <img
          class="object-cover w-full h-full bg-black"
          src="../../asset/gasoline.jpg"
          alt="asphalt"
        />
      </div>

      <div
        class="container md:container-inner mx-auto flex flex-col sm:flex-row justify-between py-16"
      >
        <div
          class="text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left"
        >
          <div class="uppercase text-white">All about BBM</div>
        </div>
      </div>
    </section>

    <section class="bg-white py-10">
      <div class="container mt-4 mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div
            class="col-start-2 card m-2 cursor-pointer border border-gray-400 hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200"
          >
            <span
              class="mt-2 font-normal text-sm text-red-800 font-mono bg-red-100 inline px-2 align-top float-right animate-pulse"
              >BBM</span
            >
            <div class="m-3 pt-16">
              <h2
                class="pb-6 text-xl text-center mb-2 font-bold border-b border-gray-700 uppercase"
              >
                Bio-Diesel
              </h2>
              <p
                class="font-normal text-lg text-gray-700 hover:text-gray-900 hover:font-medium transition-all duration-200 px-8"
              >
                Local & Import <br />
                <br />
                Low rated Sulfur <br />
                <br />
                MIGAS Standard Quality <br />
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
          <div class="col-span-2 justify-self-center">
            <img src="../../asset/pertamina.png" alt="" class="h-24" />
          </div>
          <div class="col-span-2 justify-self-center">
            <h1 class="lg:text-6xl text-3xl font-bold">Bio-Diesel Supply</h1>
            <p align="justify" class="px-30">
              Industrial business in gasoline is an expansion of the current
              energy business, Utilizing all the current infrastructure we own
              to provide the increasing demand of Industrial gasoline in
              Indonesia. <br /> <br>
              Our business in Bio-Diesel have only just reached 3 years and
              gradually expanding, starting from Java Island.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="bg-white py-10">
      <div class="container mt-4 mx-auto">
        <h1 class="text-3xl font-bold">Bio-Diesel Supply</h1>
        <p align="justify" class="px-30">
          Industrial business in gasoline is an expansion of the current energy
          business, Utilizing all the current infrastructure we own to provide
          the increasing demand of Industrial gasoline in Indonesia
        </p>
      </div>
    </section> -->
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