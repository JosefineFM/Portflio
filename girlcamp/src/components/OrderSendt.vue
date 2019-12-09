<template>
    <div>
        <h1>Your order is sendt to us. You will resive a order... end we will contact you in 2 workdays</h1>
    <h3> We will send Information to you and some question to your child so we can be best preperde to ther arivale </h3>
    <button @click="goHome()"> Home </button>
    </div>
</template>
<script>
export default {
    methods:{
           goHome(){
      this.$router.push("/");

    }
    }
}
</script>
<style>
h1{
    font-size: 30px;
}
h3{
   font-size:  20px;
}
    h1, h3{
        text-align: center;
    }
</style>