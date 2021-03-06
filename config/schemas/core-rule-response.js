/**
 * @fileoverview Schema of the latest Solium core rule response object.
 * @author Raghav Dua <duaraghav8@gmail.com>
 */

'use strict';

// A fully qualified object for this Schema is:
/*
{
	"Literal": function (context) {
		// ...
	},

	"Program": function (context) {
		// ...
	}
}
*/

var Ajv = require ('ajv'),
	SchemaValidator = require ('./core-rule').SchemaValidator;

var Schema = {
	type: 'object',

	patternProperties: {
		'^.+$': {
			shouldBeOfTypeFunction: true	// This custom attribute is defined in SchemaValidator of ./core-rule.js
		}
	},

	additionalProperties: false
};


module.exports = { Schema: Schema, SchemaValidator: SchemaValidator };