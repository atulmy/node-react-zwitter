// Server / Configs / Database

/*
 * Reference
 * Knex (Migration & Seed Data): http://knexjs.org/
 *
 * Migrations
 *
 * Create Migration
 *     knex --knexfile server/configs/database.js --cwd server/ migrate:make filename
 *
 * Run Migrations
 *     knex --knexfile server/configs/database.js --cwd server/ migrate:latest
 */

module.exports = {

    development: {
        client: 'mysql',
        connection: {
            database: 'zwitter',
            user: 'root',
            password: 'root'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'migrations'
        }
    },

    staging: {
        client: 'mysql',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'migrations'
        }
    },

    production: {
        client: 'mysql',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'migrations'
        }
    }

};
