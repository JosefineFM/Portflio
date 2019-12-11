<template>
  <div class="wrapper">

    <div class="main">
      <router-link class="button" to="/">Tilbake</router-link>
      <h2> Om meg </h2>
      <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
      <hr />

      <table style="width:100%">
        <tr class="toppTable">
          <th> Navn </th>
          <th> Kommentar </th>
        </tr>
        <tr v-for="comment in comments">
          <td> {{comment.name}} </td>
          <td> {{comment.comment}} </td>
        </tr>
      </table>

      <div class="comments">
        <p>Navn: </p>
        <input type="text" v-model="comment.name" required />
        <br />
        <p> Gi gerne en kommentar: </p>
        <textarea rows="4" cols="50" v-model="comment.comment"></textarea>
        <br />
        <button class="submit" @click="onclick">Send inn</button>
      </div>
   
    </div>
  </div>
</template>
<script>
  import db from '@/fb'

  export default {
    data() {
      return {
        comments: [],
        comment:{
          comment: '',
          name: ''
        }
      }
    },
    created() {
      db.collection('comments').onSnapshot(res => {
        const changes = res.docChanges();

        changes.forEach(change => {
          if (change.type === 'added') {
            this.comments.push({
              ...change.doc.data()
            })
          }
        })
      })
    },

    methods: {
      consoleClic: function () {
        console.log(this.comments);
      },
    
      onclick: function () {
        console.log('din kommentar: ' + this.comment.comment);
        console.log('din mail: ' + this.comment.name);

        const project = this.comment
        
        db.collection('comments').add(project).then(() => {
          console.log('added to db')
        })
      }
    }
  }

</script>
<style>
  @import "../assets/main.css";
  
  .comments {
    padding-top: 20px;
  }

  .toppTable {
    text-align: left;
    font-size: 20px;
  }

  table, th, td {
    border-bottom: 1px solid #ddd;
    padding: 20px;
  }
  table {
    border-collapse: collapse;
  }

</style>
