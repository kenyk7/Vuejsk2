/**
 * Mixins vuejs.
 */
import env from './../../app.env.js'
import api from './../config/endpoints.js'
import * as roles from './../config/roles.js'
import $ from 'jquery'

const ls = window.localStorage

export default {
  methods: {
    log (...params) {
      if (!env.logs) return
      for (let i = 0; i < params.length; i++) {
        console.log(params[i])
      }
    },
    // For use role in CONST var
    isRole (rolConst) {
      return roles[rolConst]
    },
    /**
     * Get from local storage the auth token
     */
    getLocalToken () {
      return ls.getItem('default-auth-token')
    },
    /**
     * Get from local storage key
     */
    getLStorage (key) {
      return ls.getItem(key)
    },
    /**
     * Set from local storage key
     */
    setLStorage (key, value) {
      return ls.setItem(key, value)
    },
    /**
     * Remove from local storage key
     */
    removeLStorage (key) {
      return ls.removeItem(key)
    },
    /**
     * Return api root config in $http root
     * @params: endpoint search api
     */
    getSearchApi (endPoint) {
      return this.$http.options.root + '/search/' + endPoint
    },
    /**
     * Mixin easy names endpoints
     */
    Endpoint (entity, method) {
      return api[entity][method]
    },
    /**
     * Preload imgs
     * @params array links imgs: arguments all
     * @arguments example(link1, link2, link3)
     */
    preloadImg () {
      for (let i = 0; i < arguments.length; i++) {
        $('<img/>').attr('src', arguments[i])
      }
    },
    /**
     * Helper simple pluralize
     * @params: example, number, 'hora', 'horas'
     * @return 1 hora, 2 horas, 3 horas,
     */
    pluralize (n, singular, plural) {
      return n === 1 ? singular : plural
    },
    assetsPath () {
      return {
        img: 'static/img/',
        imgIcons: 'static/img/icons-motivos/',
        extSvg: '.svg'
      }
    }
  }
}
