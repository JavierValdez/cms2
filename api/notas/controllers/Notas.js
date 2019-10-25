'use strict';

/**
 * Notas.js controller
 *
 * @description: A set of functions called "actions" for managing `Notas`.
 */

module.exports = {

  /**
   * Retrieve notas records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.notas.search(ctx.query);
    } else {
      return strapi.services.notas.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a notas record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.notas.fetch(ctx.params);
  },

  /**
   * Count notas records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.notas.count(ctx.query);
  },

  /**
   * Create a/an notas record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.notas.add(ctx.request.body);
  },

  /**
   * Update a/an notas record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.notas.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an notas record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.notas.remove(ctx.params);
  }
};
