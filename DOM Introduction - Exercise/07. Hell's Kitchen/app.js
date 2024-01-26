function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {

      let restaurants = {};
      let input = document.querySelector('textarea').value;

      input = JSON.parse(input);

      for (let restaurantData of input) {

         let [name, workers] = restaurantData.split(" - ")
         let workersArr = workers.split(", ")

         if (restaurants.hasOwnProperty(name)) {

            for (let worker of workersArr) {
               let [workerName, salary] = worker.split(" ");
               restaurants[name].count++
               restaurants[name]['totalSalary'] += Number(salary);
               restaurants[name]['workers'][workerName] = Number(salary);
            }
            continue;
         }
         restaurants[name] = {};
         restaurants[name]['workers'] = {};
         restaurants[name].count = 0;
         restaurants[name].totalSalary = 0


         for (let worker of workersArr) {
            let [workerName, salary] = worker.split(" ");
            restaurants[name]['count']++
            restaurants[name]['totalSalary'] += Number(salary)
            restaurants[name]['workers'][workerName] = Number(salary);
         }
         restaurants[name]['avgSalary'] = restaurants[name]['totalSalary'] / restaurants[name]['count'];
      }
      //sort by restaurant with the highest average salary
      let bestRestaurantArr = Object.entries(restaurants);
      bestRestaurantArr.sort((a, b) => b[1].avgSalary - a[1].avgSalary);
      let bestWorkersObj = bestRestaurantArr[0][1].workers;

      let bestWorkersArr = Object.entries(bestWorkersObj).sort((a, b) => b[1] - a[1]);

      console.log(bestWorkersArr);

      //fill the HTML
      let bestRestaurant = document.querySelector('#bestRestaurant p');
      bestRestaurant.textContent = `Name: ${bestRestaurantArr[0][0]} Average Salary: ${bestRestaurantArr[0][1].avgSalary.toFixed(2)} Best Salary: ${bestWorkersArr[0][1].toFixed(2)}`

      let workerRef = document.querySelector('#workers p');
      let buff = "";
      for (let worker of bestWorkersArr) {
         buff += `Name: ${worker[0]} With Salary: ${worker[1]} `;
      }

      workerRef.textContent = buff;
   }

}