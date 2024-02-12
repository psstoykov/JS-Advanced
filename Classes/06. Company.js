class Company {

    departments = {};

    addEmployee(name, salary, position, department) {

        if (!name ||
            salary < 0 ||
            !salary ||
            !position ||
            !department) {
            throw new Error("Invalid input!");
        }

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = {};
        }

        this.departments[department][name] = {};
        this.departments[department][name]['position'] = position;
        this.departments[department][name]['salary'] = salary;
        return `New employee is hired. Name: ${name}. Position: ${position}`
    }

    bestDepartment() {
        let resultObj = {}
        let companyEntries = Object.entries(this.departments);

        for (let department of companyEntries) {
            let departName = department[0]
            let employeeEntries = Object.entries(department[1])
            let totalSalary = 0;
            let avgSalary = 0;
            let count = 0;

            for (let employee of employeeEntries) {
                count++
                totalSalary += employee[1]['salary']

            }
            avgSalary = totalSalary / count;
            resultObj[departName] = avgSalary;
        }
        let resultEntries = Object.entries(resultObj)
        resultEntries.sort((a, b) => b[1] - a[1])

        let bestCompanyEmployees = Object.entries(this.departments[resultEntries[0][0]])
        bestCompanyEmployees.sort((a, b) => b[1]['salary'] - a[1]['salary'] || a[0].localeCompare(b[0]));

        let resultStr = `Best Department is: ${resultEntries[0][0]}\nAverage salary: ${resultEntries[0][1].toFixed(2)}`
        for (let employee of bestCompanyEmployees) {
            let str = `\n${employee[0]} ${employee[1]['salary']} ${employee[1]['position']}`;
            resultStr += str;
        }
        return resultStr
    }
}



let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
