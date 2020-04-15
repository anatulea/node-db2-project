
// exports.seed = function(knex) {
//   // Deletes ALL existing entries
//   return knex('cars').truncate()
//     .then(function () {
//       // Inserts seed entries
//       return knex('cars').insert([
//         {"VIN":"WXY23958","mileage":5490232,"make":"Smart","model":"Fortwo","year":2009},
//         {"VIN":"WXY25398","mileage":5493032,"make":"Audi","model":"4000CS Quattro","year":1987},
//         {"VIN":"WXY239y8","mileage":5495032,"make":"Ford","model":"Windstar","year":1996},
//         {"VIN":"WXY2y398","mileage":5749032,"make":"Mercedes-Benz","model":"E-Class","year":2000},
//         {"VIN":"WXY239888","mileage":8549032,"make":"Infiniti","model":"G35","year":2004},
//         {"VIN":"WXY23918","mileage":149032,"make":"Lotus","model":"Esprit","year":2004},
//         {"VIN":"1WXY2398","mileage":5249032,"make":"Chevrolet","model":"Cavalier","year":1997},
//       ]);
//     });
// };

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {"id": 1,
        "VIN": "WXY23958",
        "make": "Smart",
        "model": "Fortwo",
        "mileage": 5490232,
        "transmission_type": "5-speed automatic",
        "title_status": "sold",
        "year": 2009
        },
        
        {
        "id": 2,
        "VIN": "WXY25398",
        "make": "Audi",
        "model": "4000CS Quattro",
        "mileage": 5493032,
        "transmission_type": "5-speed manual, 3-speed automatic",
        "title_status": "on sale",
        "year": 1987
        },
        
        {
        "id": 3,
        "VIN": "WXY239y8",
        "make": "Ford",
        "model": "Windstar",
        "mileage": 5495032,
        "transmission_type": "4-speed automatic",
        "title_status": "sold",
        "year": 1996
        },
        
        {
        "id": 4,
        "VIN": "WXY2y398",
        "make": "Mercedes-Benz",
        "model": "E-Class",
        "mileage": 5749032,
        "transmission_type": "9-speed automatic",
        "title_status": "on sale",
        "year": 2000
        },
        
        {
        "id": 5,
        "VIN": "WXY239888",
        "make": "Infiniti",
        "model": "G35",
        "mileage": 8549032,
        "transmission_type": "5-speed automatic, 6-speed manual",
        "title_status": "on sale",
        "year": 2004
        },
        
        {
        "id": 6,
        "VIN": "www14",
        "make": "Audi",
        "model": "Q7",
        "mileage": 1200934,
        "transmission_type": "8-speed automatic",
        "title_status": "sold",
        "year": 2012
        },
        
        {
        "id": 7,
        "VIN": "UB39LM",
        "make": "Lincoln",
        "model": "Navigator",
        "mileage": 200934,
        "transmission_type": "6-speed automatic",
        "title_status": "sold",
        "year": 2009
        },
        
        {
        "id": 8,
        "VIN": "98UB39LM",
        "make": "Mazda",
        "model": "Miata MX-5",
        "mileage": 100934,
        "transmission_type": "4-speed automatic, 5 & 6-speed manual",
        "title_status": "sold",
        "year": 2001
        }
      ]);
    });
};