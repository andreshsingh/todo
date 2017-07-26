class Form{
  constructor(){
    this.divouterform = document.createElement('div');
    this.divouterform.setAttribute('class','main-div-form');

    this.formtitle = document.createElement('input');
    this.formtitle.setAttribute('type','text');
    this.formtitle.setAttribute('placeholder','title');
    this.divouterform.appendChild(this.formtitle);

    this.formdescription = document.createElement('input');
    this.formdescription.setAttribute('class','formdescription')
    this.formdescription.setAttribute('type','text');
    this.formdescription.setAttribute('placeholder','Description');
    this.divouterform.appendChild(this.formdescription);

    this.submitButton = document.createElement('button');
    this.submitButton.innerHTML = 'SUBMIT';
  //   this.submitButton.onclick = (e)=>{
  //   	e.preventDefault();
  //   	alert('press ok to submit');
  //   	httpUtil.post(TODO_URL,{
		// 	title: formtitle.value,
		// 	description: formdescription.value,
		// 	isComplete: false
		// })

  //   }
    this.divouterform.appendChild(this.submitButton);
  }
}

export default Form;
