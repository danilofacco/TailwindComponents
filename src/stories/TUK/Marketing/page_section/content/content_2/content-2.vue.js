<template>
    <body class="flex items-center justify-center px-4">
        <div class="py-8 flex items-stretch justify-center w-full">
            <div class="w-2/3 md:pr-5 md:pt-0">
                <img src="https://i.ibb.co/0mrQW7c/2.png" alt="A blonde girl with glasses and white shirt" role="img" class="w-full" />
                <div class="md:pt-16 pt-6">
                    <h1 class="md:text-6xl text-2xl font-bold md:leading-10 leading-6 text-gray-800" >Purpose and Usage</h1>
                    <p class="md:text-xl text-base md:pt-8 pt-4 leading-normal text-gray-800 hidden sm:block" >Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat. Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat.  </p>
                    <p class="md:text-xl text-base md:pt-8 pt-4 leading-normal text-gray-800 sm:hidden" >Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada.  </p>
                </div>
            </div>
            <div class="w-1/3 overflow-hidden relative ml-2 md:ml-5">
                <img src="https://i.ibb.co/sj4dfWX/1.png" class="w-full absolute inset-0 w-full h-full" alt="A man sitting on a cliff above a big river" role="img"/>
            </div>
        </div>       
    </body>
</template>

<script>
export default {
  name: "component",
  data() {
    return {
        show: null
    };
  },
  methods: {    
  },
  mounted() {},
};
</script>

<style>

</style>    
