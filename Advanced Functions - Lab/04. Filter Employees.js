function filterEmployees(data, criteria) {

    data = JSON.parse(data)

    let [key, value] = criteria.split("-")

    function findMatch(data) {

        let counter = 0;
        for (let obj of data) {
            if (criteria == 'all') {
                console.log(`${counter}. ${obj["first_name"]} ${obj["last_name"]} - ${obj["email"]}`)
                counter++
            } else {
                if (obj[key] == value) {
                    console.log(`${counter}. ${obj["first_name"]} ${obj["last_name"]} - ${obj["email"]}`)
                    counter++
                }
            }
        }
    }
    return findMatch(data)
}


filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female');

// filterEmployees(`[{
//     "id": "1",
//     "first_name": "Kaylee",
//     "last_name": "Johnson",
//     "email": "k0@cnn.com",
//     "gender": "Female"
//   }, {
//     "id": "2",
//     "first_name": "Kizzee",
//     "last_name": "Johnson",
//     "email": "kjost1@forbes.com",
//     "gender": "Female"
//   }, {
//     "id": "3",
//     "first_name": "Evanne",
//     "last_name": "Maldin",
//     "email": "emaldin2@hostgator.com",
//     "gender": "Male"
//   }, {
//     "id": "4",
//     "first_name": "Evanne",
//     "last_name": "Johnson",
//     "email": "ev2@hostgator.com",
//     "gender": "Male"
//   }]`,
//     'last_name-Johnson'
// );