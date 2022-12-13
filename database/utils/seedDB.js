const { Employee, Task } = require('../models');

const seedDB = async () => {
	const dummyEmployee = await Employee.create({
		firstName: "Scruffy",
		lastName: "Scruffington",
		department: "Plumbing"
	});

	const dummyTask = await Task.create({
		description: 'Fix boiling toilet',
	});

	await dummyTask.setEmployee(dummyEmployee);
	
}

module.exports = seedDB;