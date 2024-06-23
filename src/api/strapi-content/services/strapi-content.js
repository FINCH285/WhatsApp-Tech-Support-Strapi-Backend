'use strict';

/**
 * strapi-content service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::strapi-content.strapi-content');
