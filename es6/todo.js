class ToDo {

	constructor(text, isDone = false, isEdit = false)	{
		this.text = text.trim();

		this.isDone = isDone;
		this.isEdit = isEdit;
	}

}

export default ToDo;
