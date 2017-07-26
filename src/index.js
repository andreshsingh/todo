import axios from 'axios';
import * as httpUtil from './httpUtil';
import Table from './Table'
import Form from './Form'

const BASE_URL = 'https://todo-simple-api.herokuapp.com';

const TODO_URL = `${BASE_URL}/todos`;

let table = new Table;
let form = new Form;
let responseid;
let newd;
class Index{
  constructor(){
    document.getElementsByTagName('body')[0].appendChild(table.divouter);
    httpUtil.get(TODO_URL).then(response=>{
    	
      response.data.data.forEach((todo) => {
      	// console.log(todo.title);
      	this.createDiv(todo);
      })

      document.getElementsByTagName('body')[0].appendChild(form.divouterform);


    })

    form.submitButton.onclick = (e)=>{
    	e.preventDefault();
    	alert('press ok to submit');
    	httpUtil.post(TODO_URL,{
			title: form.formtitle.value,
			description: form.formdescription.value,
			isComplete: false
		}).then(response =>{
			// console.log(response.data.data.id);
			responseid = response.data.data.id;
			console.log(responseid);
			newd = {
				id : responseid,
				title : form.formtitle.value,
				isComplete : false
			}

			this.createDiv(newd);
		})

    }

  }


  createDiv(todo){
  	/*
		todo = {
			id: '',
			title: '',
			completed: true,
			description: ''
		}
  	*/
    // console.log(todo.title);
    this.div = document.createElement('div');
    this.div.setAttribute('class','main-div clearfix');
    this.div.setAttribute('id',todo.id);

    this.divleft = document.createElement('div');
    this.divleft.setAttribute('class','main-div-left')
    this.divleft.style.marginRight='50px';
    this.divleft.innerHTML = todo.title;
    
    this.divid = document.createElement('div');
    this.divid.setAttribute('class','main-div-left');
    this.divid.innerHTML = todo.id;
    this.divid.style.marginRight = 10;

    this.divright = document.createElement('button');
    this.divright.setAttribute('class','main-div-right')
    this.divright.innerHTML = 'delete';

    this.divright.onclick = ()=>{

      this.delete(todo.id);
      table.divouter.removeChild(document.getElementById(todo.id));
    }

    this.div.appendChild(this.divid);
    this.div.appendChild(this.divleft);
    this.div.appendChild(this.divright);

    table.divouter.appendChild(this.div);
  }

  delete(id){
  	alert('delete');
  	httpUtil.remove(TODO_URL,id);
  }
}




let index = new Index;



