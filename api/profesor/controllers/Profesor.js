'use strict';

/**
 * Profesor.js controller
 *
 * @description: A set of functions called "actions" for managing `Profesor`.
 */

module.exports = {

  /**
   * Retrieve profesor records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.profesor.search(ctx.query);
    } else {
      return strapi.services.profesor.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a profesor record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.profesor.fetch(ctx.params);
  },

  /**
   * Count profesor records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.profesor.count(ctx.query);
  },

  /**
   * Create a/an profesor record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.profesor.add(ctx.request.body);
  },

  /**
   * Update a/an profesor record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.profesor.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an profesor record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.profesor.remove(ctx.params);
  }
};
