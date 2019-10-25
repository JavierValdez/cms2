'use strict';

/**
 * Curso.js controller
 *
 * @description: A set of functions called "actions" for managing `Curso`.
 */

module.exports = {

  /**
   * Retrieve curso records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.curso.search(ctx.query);
    } else {
      return strapi.services.curso.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a curso record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.curso.fetch(ctx.params);
  },

  /**
   * Count curso records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.curso.count(ctx.query);
  },

  /**
   * Create a/an curso record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.curso.add(ctx.request.body);
  },

  /**
   * Update a/an curso record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.curso.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an curso record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.curso.remove(ctx.params);
  }
};
