const Pagination = require('../../pagination')

class FloatingIPActionList extends Pagination {
  constructor (endpoint, params, meta, id, actions) {
    super(endpoint, params, meta)
    this.id = id
    this.actions = actions
  }
}

module.exports = FloatingIPActionList
