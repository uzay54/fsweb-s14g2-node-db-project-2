// ESNEK

const cars = [
    {
        vin: '101',
        make: 'toyota',
        model: 'prius',
        mileage: 1000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '102',
        make: 'toyota',
        model: 'corrolla',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '103',
        make: 'ford',
        model: 'pfocus',
        mileage: 5000,
    },
]


exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}