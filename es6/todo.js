class ToDo {

	constructor(text, isDone = false, isEdit = false, dueDate = new Date())	{
		this.text = text.trim();

		this.isDone = isDone;
		this.isEdit = isEdit;
		this.dueDate = dueDate;
	}
}

export default ToDo;
