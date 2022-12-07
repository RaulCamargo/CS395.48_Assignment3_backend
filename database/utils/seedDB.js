// Modified professor's file

const {Employee, Task} = require('../models');

const seedDB = async () =>
{
    const dummyEmployee = await Employee.create
    ({
        firstName: "Scruffy",
        lastName: "Scruffington",
        department: "Maintenance"
    });

    const dummyTask = await Task.create
    ({
        description: "Fix boiling toilet.",
        priority: "HIGH",
        completion: 10
    });

    await dummyTask.setEmployee(dummyEmployee);
}

module.exports = seedDB;