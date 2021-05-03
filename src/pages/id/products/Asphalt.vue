<template>
  <ID>
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
          <div class="uppercase text-white">Tentang Aspal</div>
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
              >Aspal</span
            >
            <div class="m-3 pt-16">
              <h2
                class="pb-6 text-xl text-center mb-2 font-bold border-b border-gray-700 uppercase"
              >
                Aspal Drum
              </h2>
              <p
                class="font-normal text-lg text-gray-700 hover:text-gray-900 hover:font-medium transition-all duration-200 px-8"
              >
                Aspal Pen 60/70 <br />
                <br />
                Berat Neto 155kg <br />
                <br />
                Kualitas Internasional <br />
                <br />
                Pengiriman ke seluruh Indonesia<br />
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
              >Aspal</span
            >
            <div class="m-3 pt-16">
              <h2
                class="pb-6 text-xl text-center mb-2 font-bold border-b border-gray-700 uppercase"
              >
                Aspal Karung
              </h2>
              <p
                class="font-normal text-lg text-gray-700 hover:text-gray-900 hover:font-medium transition-all duration-200 px-8"
              >
                Aspal Pen 60/70 <br />
                <br />
                Berat Neto 30 & 50kg <br />
                <br />
                Kualitas Internasional <br />
                <br />
                Pengiriman ke Seluruh Indonesia<br />
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
              >Aspal</span
            >
            <div class="m-3 pt-16">
              <h2
                class="pb-6 text-xl text-center mb-2 font-bold border-b border-gray-700 uppercase"
              >
                Aspal Curah
              </h2>
              <p
                class="font-normal text-lg text-gray-700 hover:text-gray-900 hover:font-medium transition-all duration-200 px-8"
              >
                Aspal Pen 60/70 <br />
                <br />
                Berat Neto 15 Ton <br />
                <br />
                Kualitas Internasional <br />
                <br />
                Pengiriman Pulau Jawa<br />
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
            <img src="../../../asset/pertamina.png" alt="" class="h-24" />
          </div>
          <div class="justify-self-center sm:col-span-2">
            <img src="../../../asset/esso.png" alt="" class="h-24" />
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white py-10">
      <div class="container mt-4 mx-auto">
        <h1 class="text-3xl font-bold">Mitra terbaik PT.Pertamina dan Esso</h1>
        <p align="justify">
          PT.Aspindo telah bermitra dengan PT.Pertamina dan Esso, 2 Perusahaan
          besar dalam bidang energi. Kami berkomitmen untuk memberikan kualitas
          terbaik untuk produk aspal. untuk memberikan pelayanan yang terbaik,
          tim kami mengecek kondisi dan spesifikasi yang tertera secara seksama
          sebelum pengiriman.
        </p>
      </div>
    </section>
  </ID>
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