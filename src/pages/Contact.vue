<template>
  <Layout>
    <section class="bg-brown-dark py-10 sm:py-8 containermy-6 lg:px-16 px-4">
      <div class="container md:container-inner mx-auto text-white">
        <div class="w-full sm:w-1/2">
          <h1 class="text-4xl font-bold py-1 uppercase">
            Have COVID-19 Question?
          </h1>
        </div>
        <div class="justify-end sm:w-1/2">
        <a href="to:bsean@aspindogroup.com?subject=COVID-19 Question&body=I have question in regards to your service in this current COVID condition">
          <button
            class="bg-red-600 text-white py-3 px-8 mt-4 text-lg font-semibold hover:bg-opacity-75"
          >
            Email Us Now
          </button>
        </a>
        </div>
      </div>
    </section>

    <section class="">
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1
              class="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900"
            >
              Contact Us
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Put your name and email, we will surely get back to you.
            </p>
          </div>
              <form @submit.prevent="sendEmail">
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-600"
                    >Name</label
                  >
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-600"
                    >Email</label
                  >
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-gray-600"
                    >Message</label
                  >
                  <textarea
                    id="message"
                    name="message"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div class="p-2 w-full">
                <button
                  class="flex mx-auto text-white bg-red-600 border-0 py-2 px-8 focus:outline-none hover:bg-red-400 text-lg"
                >
                  Submit
                </button>
              </div> 
              <div
                class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"
              >
                <a class="text-gray-500">example@aspindogroup.com</a>
              </div>
              <div class="p-2 w-1/2 border-gray-200 text-center">
                <p class="leading-normal my-5">
                  Head Office <br />
                  Kertajaya 94 <br />Surabaya
                </p>
              </div>
              <div class="p-2 w-1/2 border-gray-200 text-center">
                <p class="leading-normal my-5">
                  Jakarta <br />
                  Treasury Tower, District 8 <br />SCBD, Jakarta Selatan
                </p>
              </div>
              
            </div>
          </div>
          </form>
        </div>
      </section>
    </section>
  </Layout>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  methods: {
    sendEmail: (e) => {
      emailjs.sendForm('service_2ba1p0e', 'template_wpewr8t', e.target, 'user_u2gM4HbzaCEFMf93EE07C')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
    }
  }
}
</script>