import {
    template
} from 'lodash';
import ConfigRegistry from './ConfigRegistry';

/**
 * @private
 * @type {RegExp}
 */
const DEFAULT_INTERPOLATE = /\[([\s\S]+?)]/g;

/**
 * @private
 * @type {WeakMap}
 */
const INTERPOLATE = new WeakMap();

/**
 * @class
 * @extends {Map}
 */
class ConfigPatternCache extends Map {
    /**
     * @constructor
     * @param {RegExp} [interpolate=/\[([\s\S]+?)]/g]
     */
    constructor(interpolate = DEFAULT_INTERPOLATE) {
        super();

        this.interpolate = interpolate;
    }

    /**
     * @type {RegExp}
     */
    get interpolate() {
        return INTERPOLATE.get(this);
    }

    /**
     * @param {RegExp} value
     */
    set interpolate(value) {
        INTERPOLATE.set(this, value);
    }

    /**
     * @param {*} key
     * @returns {RegExp}
     */
    getOrSet(key) {
        if (!this.has(key)) {
            this.set(key, key);
        }

        return this.get(key);
    }

    /**
     * @override
     * @param {*} key
     * @param {String} value
     * @returns {RegExp}
     */
    set(key, value) {
        return super.set(key, this.compile(value));
    }

    /**
     * @param {String} value
     * @param {Object} options
     * @returns {String}
     */
    eval(value, options = {}) {
        const compiledTemplate = this.getOrSet(value);

        return compiledTemplate(options);
    }

    /**
     * @param {String} value
     * @returns {Function}
     */
    compile(value) {
        return template(value, {
            interpolate: this.interpolate
        });
    }

    /**
     * @readonly
     * @type {ConfigPatternCache}
     */
    static get INSTANCE() {
        return ConfigRegistry.INSTANCE.getOrSet(this, () => new ConfigPatternCache());
    }
}

export default ConfigPatternCache;