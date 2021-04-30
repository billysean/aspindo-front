<template>
  <Layout>
    <section>
      <div class="h-10">
        <div class="image">
        <img
          class="absolute sm:h-auto w-screen"
          style="z-index: -1;"
          src="../asset/blueprint.jpg"
          alt=""
        />
        </div>
      </div>
      <div
        class="container md:container-inner mx-auto flex flex-col sm:flex-row justify-between py-16"
      >
        <div
          class="text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left"
        >
          <div class="uppercase text-white">About Aspindo</div>
        </div>
      </div>
    </section>

    <section class="bg-white">
      <div class="mx-auto">
        <div class="flex flex-wrap">
          <div class="md:px-32 w-full lg:w-1/2">
            <h1 class="text-3xl font-bold py-1">
              Our Company - Aspindo Mutual Group
            </h1>
            <p class="text-justify text-xl font-light py-2">
              Founded in 1980, Aspindo Mutual Group has grown into an
              industry-leading Asphalt manufacturer in Indonesia. Our services
              include providing solution to infrastructure requirements and
              shipment across the nation.
            </p>

            <p class="text-justify text-xl font-light py-2">
              Aspindo Mutual Group head office is located in Surabaya, having a
              land in Gresik as a warehouse for all operational and manpower to
              operate and conduct various task concerning making and mixing
              Asphalt.
            </p>

            <p class="text-justify text-xl font-light py-2">
              Planning to expand its reach, Aspindo has placed a branch office
              in SCBD area, Jakarta in 2021.
            </p>
          </div>
          <div class="w-full lg:w-1/2" style="text-align: -webkit-center;">
            <img
              src="../asset/hq.png"
              alt="headoffice"
              class="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>

    <section id="artillery"
      class="bg-gray-700 py-10 sm:py-8 containermy-6 lg:px-16 px-4"
    >
      <div class="container mx-auto flex justify-between py-8">
        <div class="w-1/3 text-center" style="text-align: -webkit-center">
          <h1 class="text-4xl font-bold py-1 uppercase"></h1>
          <button
            class="text-white py-3 px-8 mt-4 sm:text-sm md:text-xl lg:text-3xl font-semibold hover:bg-opacity-75"
          >
            <span class="sm:text-3xl lg:text-6xl"> 18</span> <br />
            Asphalt Awards
          </button>
        </div>
        <div class="w-1/3 text-center" style="text-align: -webkit-center">
          <h1 class="text-4xl font-bold py-1 uppercase"></h1>
          <button
            class="text-white py-3 px-8 mt-4 sm:text-sm md:text-xl lg:text-3xl font-semibold hover:bg-opacity-75"
          >
            <span class="sm:text-3xl lg:text-6xl"> </span> <br />
            
          </button>
        </div>
        <div class="w-1/3 text-center" style="text-align: -webkit-center">
          <h1 class="text-4xl font-bold py-1 uppercase"></h1>
          <button
            class="text-white py-3 px-8 mt-4 sm:text-sm md:text-xl lg:text-3xl font-semibold hover:bg-opacity-75"
          >
            <span class="sm:text-3xl lg:text-6xl"> 1</span> <br />
            LPG Awards
          </button>
        </div>
      </div>
    </section>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About",
  },
};
</script>

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

.image {
    height: 100vh;
    /* width: 100vw; */
    background: rgba(0,0,0,.4);
    overflow: hidden;
}
</style>