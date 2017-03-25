Vue.component('task',{
  template: '<li><slot></slot></li>'

});
Vue.component('task-list',{
  template: '<div><task v-for="task in tareas">{{task.description}}</task></div>',
  data(){
    return {
      tareas:[
        {description:'Hacer la compra', completed:false},
        {description:'Acabar el tutorial', completed:false},
        {description:'Aprender Vue js', completed:true},
        {description:'Leer las noticias', completed:false},
        {description:'Hacer la cena', completed:false},

      ]
    };

  }

});

new Vue({
  el:'#root',
  data : {
    message : 'Hola mundo',
    names : ['Ricardo','Maria','Manuel','Francisco'],
    newName : '',
    titleNow: 'Título alterado por javascript',
    buttonState: false,
    disText:'Deshabilitar',
    tasks: [
      {description:'Hacer la compra', completed:false},
      {description:'Acabar el tutorial', completed:false},
      {description:'Aprender Vue js', completed:true},
      {description:'Leer las noticias', completed:false},
      {description:'Hacer la cena', completed:false},
    ],

  },
  methods:{
    addName: function() {
      if(this.newName!=''){
        this.names.push(this.newName);
        this.newName='';
      }else{
        alert('Introduce un nombre!');
      }
    },
    toggleButton: function(){
      this.buttonState=!(this.buttonState);

      if (this.buttonState){
        this.disText='Habilitar';
      }else{
        this.disText='Deshabilitar';
      }

    },


    toggleTask: function(task){
      task.completed= !(task.completed);
    }

  },
  computed:{
    reversedMessage(){
      return this.message.split('').reverse().join('');
    },
    incompleteTasks(){
      return this.tasks.filter(task => !task.completed);
      // ES6 ^
      // Para navegadores antiguos.
      // En esta funcion devolvemos la lista tasks filtrada por el
      // paramentro task.completed;
      // this.tasks.filter(function(task){
      //   return ! task.completed;
      // })
    },
    completeTasks(){
      return this.tasks.filter(task => task.completed);
    }

  }
  // Utilizaremos mounter para hacer referencia al momento en que nuestro
  // DOM ha cargado completamente.
  // mounted(){
  //   alert('Ready')
  // },


});
