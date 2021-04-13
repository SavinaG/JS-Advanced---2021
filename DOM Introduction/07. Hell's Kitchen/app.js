function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let input = document.querySelector('#inputs>textarea');
   let bestRestaurantP = document.querySelector('#bestRestaurant>p');
   let workersP = document.querySelector('#workers>p');

   function onClick () {
      let arr = JSON.parse(input.value);

      let restaurants = {};

      arr.forEach(line => {
         let tokent = line.split(' - ');
         let name = tokent[0];
         let workersArr = tokent[1].split(', ');
         let workers = [];

         for (let worker of workersArr) {
            let workerTokens = worker.split(' ');
            let salary = Number(workerTokens[1]);
            workers.push({name: workerTokens[0], salary});
         };

         if(restaurants[name]){
            workers = workers.concat(restaurants[name].workers);
         };

         workers.sort((work1, work2) => work2.salary - work1.salary);

         let bestSalary = workers[0].salary;
         let averageSalary = workers.reduce((sum, worker) => sum += worker.salary, 0) / workers.length;

         restaurants[name] = {
            workers,
            averageSalary,
            bestSalary,
         };
      });

      let bestRestaurantSalary = 0;
      let best = undefined;

      for(let name in restaurants){
         if(restaurants[name].averageSalary > bestRestaurantSalary){
            best = {
               name,
               workers: restaurants[name].workers,
               bestSalary: restaurants[name].bestSalary,
               averageSalary: restaurants[name].averageSalary,
            };
            bestRestaurantSalary = restaurants[name].averageSalary;
         };
      };
      
      bestRestaurantP.textContent = `Name: ${best.name} Average Salary: ${best.averageSalary.toFixed(2)} Best Salary: ${best.bestSalary.toFixed(2)}`;

      let workersResult = [];

      best.workers.forEach(worker => {
         workersResult.push(`Name: ${worker.name} With Salary: ${worker.salary}`)
      });
      workersP.textContent = workersResult.join(' ');
   };
}
