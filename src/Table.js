class Table{
	constructor(){
		this.divouter = document.createElement('div');
		this.divouter.setAttribute('class','outer');

		this.topic = document.createElement('div');
		this.topic.innerHTML = 'List of Todos';

		this.divouter.appendChild(this.topic);
		
	}
}

export default Table;