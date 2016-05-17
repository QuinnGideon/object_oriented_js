function Person(name, age){
	this.name = name;
	this.age = age;
}

function Teacher(){
	this.lecture = arguments['2'];
	this.salary = arguments['3'];
	Person.apply(this, arguments);
}

Teacher.prototype = new Person();

function Student(){
	this.grade = arguments['2'];
	this.hoursStudying = arguments['3'];
	Person.apply(this, arguments);
}

Student.prototype = new Person();

function School(){
	this.teachers = []
	this.students = []
	this.addTeacher = function(teacher){
		this.teachers.push(teacher)
	}
	this.addStudent = function(student){
		this.students.push(student)
	}

}

var janet = new Teacher('Janet', 32, 'very long', 'not enough')