// Server / Models / Tweet

import Orm from '../configs/orm';
import User from './user';

export default Orm.Model.extend({
    tableName: 'tweets',

    user: function() {
        return this.belongsTo(User, 'user_id');
    },
});