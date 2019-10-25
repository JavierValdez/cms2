'use strict';

/**
 * Alpro.js controller
 *
 * @description: A set of functions called "actions" for managing `Alpro`.
 */

module.exports = {

  /**
   * Retrieve alpro records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.alpro.search(ctx.query);
    } else {
      return strapi.services.alpro.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a alpro record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.alpro.fetch(ctx.params);
  },

  /**
   * Count alpro records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.alpro.count(ctx.query);
  },

  /**
   * Create a/an alpro record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.alpro.add(ctx.request.body);
  },

  /**
   * Update a/an alpro record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.alpro.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an alpro record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.alpro.remove(ctx.params);
  }
};
