<template>
    <div>
        <h2>Register</h2>
        <input type="email" v-model="email" name="email" placeholder="Enter Your Email..">
        <br>
        <input type="password" v-model="password" name="password" placeholder="Enter Your PassWord..">
        <br>
        <button type="submit" @click="register">Register</button>
    </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';
export default {
    data(){
        return {
            email:'',
            password:''
        }
    },
    methods:{
        async register(){
            //console.log(`\tEmail ==> ${this.email}\n\tPassword ==> ${this.password}`);
            const response=await AuthenticationService.register({
                email:this.email,
                password:this.password
            });
            console.log(response.data);
        }
    }
}
</script>