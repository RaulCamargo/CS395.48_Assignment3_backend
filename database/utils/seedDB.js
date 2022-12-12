const { Employee, Task } = require('../models');

const seedDB = async () => {
	const dummyEmployee = await Employee.create({
		firstName: "Melissa",
		lastName: "Lynch",
		department: "Computer Science"
	});
	const dummyEmployee2 = await Employee.create({
		firstname: "Kim",
		lastname: "Kardashian",
        department: "Engineering"
	});

	const dummyTask = await Task.create({
		description: 'Fix boiling toilet',
	});

	await dummyTask.setEmployee(dummyEmployee);
	
}

module.exports = seedDB;