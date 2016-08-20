import knex from 'knex';
import bookshelf from 'bookshelf';

import databaseConfig from './database';

/*
 * Reference
 * Bookshelf (ORM): http://bookshelfjs.org/
 */

export default bookshelf(knex(databaseConfig.development));
