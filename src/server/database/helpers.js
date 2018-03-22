const { ObjectId } = require('mongodb');

/**
 * @typedef {{
 *  items: T[],
 *  next: *,
 *  count: number
 * }} Pagination<T>
 */


/**
 * Create pagination
 *
 * @param {Collection} collection
 * @param filter
 */
async function pageableCollection(collection, {
  lastId, order, limit = 10, ...query
} = {}) {
  const count = await collection.find(query).count();

  if (lastId) {
    // eslint-disable-next-line no-param-reassign
    query._id = {
      // eslint-disable-next-line no-undef
      $gt: ObjectId(_id),
    };
  }

  let queryBuilder = collection.find(query, { limit });

  if (order) {
    queryBuilder = queryBuilder.sort(order);
  }

  if (query._id) {
    // eslint-disable-next-line no-param-reassign
    query._id = ObjectId(query._id.toString());
  }

  // eslint-disable-next-line one-var,prefer-const
  let cursor = await queryBuilder,
    // eslint-disable-next-line prefer-const
    items = await cursor.toArray(),
    next = null;

  if (items.length === limit) {
    next = {
      limit,
      order,
      lastId: items[items.length - 1]._id,
      ...query,
    };
  }

  return {
    count,
    items,
    next,
  };
}

/**
 * Create pagination
 *
 * @param {Collection} collection
 * @param {*} data
 *
 * @return {Promise<*>}
 */
// eslint-disable-next-line consistent-return
async function insertOrUpdateEntity(collection, data) {
  if (data._id) {
    const result = await collection.findOneAndUpdate(
      { _id: data._id },
      data,
    );
    // eslint-disable-next-line no-console
    console.log(result);
  } else {
    const result = await collection.insertOne(data);
    // eslint-disable-next-line no-param-reassign
    data._id = result.insertedId;

    return data;
  }
}

module.exports = {
  pageableCollection,
  insertOrUpdateEntity,
};
