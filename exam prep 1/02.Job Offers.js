class JobOffers {

    constructor(employer, position) {

        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }

    jobApplication(candidates) {

        candidates.map(x => {
            let [name, education, yearsExperience] = x.split("-")
            yearsExperience = Number(yearsExperience)
            let employee = this.jobCandidates.find(x => x.name == name);

            if (employee) {
                if (employee.yearsExperience < yearsExperience) {
                    employee.yearsExperience = yearsExperience;
                }
            } else {
                this.jobCandidates.push({ name, education, yearsExperience })
            }
        });
        let result = [];
        this.jobCandidates.map(x => result.push(x.name))
        return `You successfully added candidates: ${result.join(", ")}.`
    }

    jobOffer(chosenPerson) {

        let [name, minimalExperience] = chosenPerson.split("-");
        minimalExperience = Number(minimalExperience)
        let candidate = this.jobCandidates.find(x => x.name == name);

        if (candidate) {

            if (candidate.yearsExperience < minimalExperience) {
                throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`)
            } else {
                candidate.yearsExperience = 'hired';
            }
        } else {
            throw new Error(`${name} is not in the candidates list!`)
        }
        return `Welcome aboard, our newest employee is ${name}.`;
    }

    salaryBonus(name) {

        let candidate = this.jobCandidates.find(x => x.name == name);

        if (candidate) {
            if (candidate.education == "Bachelor") {
                return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`
            } else if (candidate.education == "Master") {
                return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`
            } else {
                return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`
            }
        } else {
            throw new Error(`${name} is not in the candidates list!`)
        }
    }

    candidatesDatabase() {
        if (this.jobCandidates.length == 0) {
            throw new Error("Candidate Database is empty!");
        } else {
            let sorted = this.jobCandidates.sort((a, b) => a.name.localeCompare(b.name))
            let result = [];
            sorted.map(x => result.push(`${x.name}-${x.yearsExperience}`));

            return `Candidates list:\n${result.join("\n")}`
        }
    }
}


// let Jobs = new JobOffers("Google", "Strategy Analyst");
// console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));


// let Jobs = new JobOffers("Google", "Strategy Analyst");
// console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
// console.log(Jobs.jobOffer("John Doe-8"));
// console.log(Jobs.jobOffer("Peter Parker-4"));
// console.log(Jobs.jobOffer("John Jones-8"));



let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.salaryBonus("John Doe"));
console.log(Jobs.salaryBonus("Peter Parker"));



// let Jobs = new JobOffers("Google", "Strategy Analyst");
// console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
// console.log(Jobs.jobOffer("John Doe-8"));
// console.log(Jobs.jobOffer("Peter Parker-4"));
// console.log(Jobs.jobOffer("Jordan Cole-4"));
// console.log(Jobs.salaryBonus("Jordan Cole"));
// console.log(Jobs.salaryBonus("John Doe"));
// console.log(Jobs.candidatesDatabase());


