<template>
  <div class="">
    <form v-on:submit=this.postToAN>
      <input type="email" name="email" v-model=email placeholder=Email>
      <input type="submit" value="Sign up" class="Button">
    </form>
    <p :class="status.classes">{{ status.text }}</p>
  </div>

</template>

<style lang=scss scoped>
  form {
    display: flex;
    gap: $padding-unit;
    input[type=email] {
      flex-grow: 2;
      padding: $padding-unit;
    }
    input[type=submit] {
      flex-grow: 1;
      border: none;
    }
  }
  .hide {
    display: none;
  }
  .show {
    display: block;
  }
</style>

<script>
  import axios from 'axios';

  export default {
    props: ['blok'],
    data() {
      return {
        email: "",
        status: {
          classes: ['hide'],
          text: ''
        }
      }
    },
    methods: {
      postToAN(e){
        e.preventDefault()
        let url = this.blok.endpoint + "submissions"
        let body = {
          person: {
            email_addresses: [{address:this.email}]
          },
          add_tags:[
            "Website"
          ],
          triggers: {
            autoresponse: {
              enabled: true
            }
          }
        }
        axios.post(url,body).then((res) => {
          this.email = "";
          this.status = {
            classes:["show","sucess"],
            text: "Thank you!"
          }
        })
      }
    }
  }
</script>
