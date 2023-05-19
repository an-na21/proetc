<template>
        <!-- sidebar -->
      <div class="allll">
        <div>
        <p >Todo List</p>
       
       
        <div class="font-normal mt-24">
            <p><router-link to="/">Гистограммы эффективности</router-link></p>
            <p class="mt-6"><router-link to="/ann">Анна</router-link></p>
            <p class="mt-6"><router-link to="/tam">Тамара</router-link></p>
            <p class="mt-6"><router-link to="/sanya">Александр</router-link></p>
            <p class="mt-6"><router-link to="/step">Степан</router-link></p>
            <p class="mt-6"><router-link to="/alex">Алексей</router-link></p>
            <p class="mt-6">Настройки</p>
        </div>
        </div>

        <div class="flex items-center px-6 py-4 mb-4 rounded-2xl w-max mx-auto" >
            <img src="/asset/book.png" alt="">
            <div class="ml-3">
                <p class="font-normal">User Guide</p>
                <p class="font-light text-sm">Documentation</p>
            </div>
        </div>

      </div>
      <!-- end sidebar -->
      
</template>

<script>
export default {
    computed: {
        sidebarmobile(){
            return this.$store.state.sidebarmobile
        }
    },
    methods: {
        tutupside(){
            this.$store.state.sidebarmobile = false
        }
    },
}
</script>

<style>
.allll{
background-image: url(/asset/side.jpg);
background-repeat: no-repeat;
    width: 300px;
    padding-left: 20px;

}
</style>

