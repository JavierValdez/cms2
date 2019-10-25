'use strict';

/**
 * Alumno.js controller
 *
 * @description: A set of functions called "actions" for managing `Alumno`.
 */

module.exports = {

  /**
   * Retrieve alumno records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.alumno.search(ctx.query);
    } else {
      return strapi.services.alumno.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a alumno record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.alumno.fetch(ctx.params);
  },

  /**
   * Count alumno records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.alumno.count(ctx.query);
  },

  /**
   * Create a/an alumno record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.alumno.add(ctx.request.body);
  },

  /**
   * Update a/an alumno record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.alumno.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an alumno record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.alumno.remove(ctx.params);
  }
};
