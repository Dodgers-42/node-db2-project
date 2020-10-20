
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('cars').truncate()
    
      // Inserts seed entries
      await knex('cars').insert([
        {vin: "3490JFEROID", make: "Ford", model: "Explorer", mileage: 11453.80, automatic_transmission: true, title: "clean"},
        {vin: 'ANEF34OI5F4O', make: "Handi", model: "Celontra", mileage: 29847.38, automatic_transmission: true, title: "clean"},
        {vin: "KKEF0409FOJF034", make: "Jeep", model: "Chereke", mileage: 8347}
      ])
   
};
