
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.integer('VIN' , 17)
            .unique()
            .notNullable();
        tbl.string('make', 128)
            .notNullable();
        tbl.string('model', 128)
            .notNullable();
        tbl.integer('mileage')
            .notNullable();
        tbl.string('transmission_type', 128);
        tbl.strng('title_status', 128);
        tbl.integer('year');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
