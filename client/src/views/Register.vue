<template>
    <div>
        <h2>Register</h2>
        <input type="email" v-model="email" name="email" placeholder="Enter Your Email..">
        <br>
        <input type="password" v-model="password" name="password" placeholder="Enter Your PassWord..">
        <br>
        <button type="submit">Register</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            email:'',
            password:''
        }
    }
}
</script>