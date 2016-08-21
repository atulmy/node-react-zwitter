// Server / Models / User

import Orm from '../configs/orm';
import Tweet from './tweet';

export default Orm.Model.extend({
    tableName: 'users',

    tweets: function() {
        return this.hasMany(Tweet, 'user_id');
    }
});