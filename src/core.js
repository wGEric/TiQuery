var TiQuery = function(selector) {
	return new TiQuery.fn.init(selector);
},

_TiQuery = Titanium.TiQuery,
_$ = Titanium.$,

/**
 * Check if a string has a non-whitespace character in it
 */
rnotwhite = /\S/,

/**
 * Used for trimming whitespace
 */
rtrim = /^(\s|\u00A0)+|(\s|\u00A0)+$/g,


// Save a reference to some core methods
toString = Object.prototype.toString,
hasOwnProperty = Object.prototype.hasOwnProperty,
push = Array.prototype.push,
slice = Array.prototype.slice,
indexOf = Array.prototype.indexOf;

TiQuery.fn = {
init: function( selector, context ) {	
	// Handle $(""), $(null), or $(undefined)
	if ( !selector ) {
		return this;
	}
	
	this.context = this[0] = selector;
	this.length = 1;
	return this;
},

/**
 * The number of elements contained in the matched element set
 */
size: function() {
	return this.length;
},

toArray: function() {
	return slice.call( this, 0 );
},

/**
 * Get the Nth element in the matched element set OR
 * Get the whole matched element set as a clean array
 */
get: function( num ) {
	return num == null ?

		// Return a 'clean' array
		this.toArray() :

		// Return just the object
		( num < 0 ? this.slice(num)[ 0 ] : this[ num ] );
},

/**
 * Take an array of elements and push it onto the stack
 * (returning the new matched element set)
 */
pushStack: function( elems, name, selector ) {
	// Build a new TiQuery matched element set
	var ret = TiQuery();

	if ( TiQueryuery.isArray( elems ) ) {
		push.apply( ret, elems );
	
	} else {
		TiQuery.merge( ret, elems );
	}

	// Add the old object onto the stack (as a reference)
	ret.prevObject = this;

	ret.context = this.context;

	if ( name === "find" ) {
		ret.selector = this.selector + (this.selector ? " " : "") + selector;
	} else if ( name ) {
		ret.selector = this.selector + "." + name + "(" + selector + ")";
	}

	// Return the newly-formed element set
	return ret;
},

/**
  * Execute a callback for every element in the matched set.
  * (You can seed the arguments with an array of args, but this is
  * only used internally.)
  */
each: function( callback, args ) {
	return TiQuery.fn.each( this, callback, args );
},

ready: function( fn ) {
	

	return this;
},

eq: function( i ) {
	return i === -1 ?
		this.slice( i ) :
		this.slice( i, +i + 1 );
},

first: function() {
	return this.eq( 0 );
},

last: function() {
	return this.eq( -1 );
},

slice: function() {
	return this.pushStack( slice.apply( this, arguments ),
		"slice", slice.call(arguments).join(",") );
},

map: function( callback ) {
	return this.pushStack( TiQuery.fn.map(this, function( elem, i ) {
		return callback.call( elem, i, elem );
	}));
},

end: function() {
	return this.prevObject || TiQuery(null);
},

// For internal use only.
// Behaves like an Array's method, not like a TiQuery method.
push: push,
sort: [].sort,
splice: [].splice
};

// Give the init function the TiQuery prototype for later instantiation
TiQuery.fn.init.prototype = TiQuery.fn;

TiQuery.extend = TiQuery.fn.extend = function() {
// copy reference to target object
var target = arguments[0] || {}, i = 1, length = arguments.length, deep = false, options, name, src, copy;

// Handle a deep copy situation
if ( typeof target === "boolean" ) {
	deep = target;
	target = arguments[1] || {};
	// skip the boolean and the target
	i = 2;
}

// Handle case when target is a string or something (possible in deep copy)
if ( typeof target !== "object" && !TiQuery.fn.isFunction(target) ) {
	target = {};
}

// extend TiQuery itself if only one argument is passed
if ( length === i ) {
	target = this;
	--i;
}

for ( ; i < length; i++ ) {
	// Only deal with non-null/undefined values
	if ( (options = arguments[ i ]) != null ) {
		// Extend the base object
		for ( name in options ) {
			src = target[ name ];
			copy = options[ name ];

			// Prevent never-ending loop
			if ( target === copy ) {
				continue;
			}

			// Recurse if we're merging object literal values or arrays
			if ( deep && copy && ( TiQuery.fn.isPlainObject(copy) || TiQuery.fn.isArray(copy) ) ) {
				var clone = src && ( TiQuery.fn.isPlainObject(src) || TiQuery.fn.isArray(src) ) ? src
					: TiQuery.fn.isArray(copy) ? [] : {};

				// Never move original objects, clone them
				target[ name ] = TiQuery.fn.extend( deep, clone, copy );

			// Don't bring in undefined values
			} else if ( copy !== undefined ) {
				target[ name ] = copy;
			}
		}
	}
}

// Return the modified object
return target;

};

TiQuery.fn.extend({
noConflict: function( deep ) {
	Titanium.$ = _$;

	if ( deep ) {
		Titanium.TiQuery = _TiQuery;
	}

	return TiQuery;
},

/**
 * See test/unit/core.js for details concerning isFunction.
 * Since version 1.3, DOM methods and functions like alert
 * aren't supported. They return false on IE (#2968).
 */
isFunction: function( obj ) {
	return toString.call(obj) === "[object Function]";
},

isArray: function( obj ) {
	return toString.call(obj) === "[object Array]";
},

isPlainObject: function( obj ) {
	// Must be an Object.
	// Because of IE, we also have to check the presence of the constructor property.
	// Make sure that DOM nodes and window objects don't pass through, as well
	if ( !obj || toString.call(obj) !== "[object Object]" || obj.nodeType || obj.setInterval ) {
		return false;
	}
	
	// Not own constructor property must be Object
	if ( obj.constructor
		&& !hasOwnProperty.call(obj, "constructor")
		&& !hasOwnProperty.call(obj.constructor.prototype, "isPrototypeOf") ) {
		return false;
	}
	
	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.

	var key;
	for ( key in obj ) {}
	
	return key === undefined || hasOwnProperty.call( obj, key );
},

isEmptyObject: function( obj ) {
	for ( var name in obj ) {
		return false;
	}
	return true;
},

error: function( msg ) {
	throw msg;
},

parseJSON: function( data ) {
	if ( typeof data !== "string" || !data ) {
		return null;
	}

	// Make sure leading/trailing whitespace is removed (IE can't handle it)
	data = TiQuery.fn.trim( data );
	
	// Make sure the incoming data is actual JSON
	// Logic borrowed from http://json.org/json2.js
	if ( /^[\],:{}\s]*$/.test(data.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@")
		.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]")
		.replace(/(?:^|:|,)(?:\s*\[)+/g, "")) ) {
		return JSON.parse(data);

	} else {
		TiQuery.fn.error( "Invalid JSON: " + data );
	}
},

noop: function() {},

// args is for internal usage only
each: function( object, callback, args ) {
	var name, i = 0,
		length = object.length,
		isObj = length === undefined || TiQuery.fn.isFunction(object);

	if ( args ) {
		if ( isObj ) {
			for ( name in object ) {
				if ( callback.apply( object[ name ], args ) === false ) {
					break;
				}
			}
		} else {
			for ( ; i < length; ) {
				if ( callback.apply( object[ i++ ], args ) === false ) {
					break;
				}
			}
		}

	// A special, fast, case for the most common use of each
	} else {
		if ( isObj ) {
			for ( name in object ) {
				if ( callback.call( object[ name ], name, object[ name ] ) === false ) {
					break;
				}
			}
		} else {
			for ( var value = object[0];
				i < length && callback.call( value, i, value ) !== false; value = object[++i] ) {}
		}
	}

	return object;
},

trim: function( text ) {
	return (text || "").replace( rtrim, "" );
},

// results is for internal usage only
makeArray: function( array, results ) {
	var ret = results || [];

	if ( array != null ) {
		// The window, strings (and functions) also have 'length'
		// The extra typeof function check is to prevent crashes
		// in Safari 2 (See: #3039)
		if ( array.length == null || typeof array === "string" || TiQuery.fn.isFunction(array) || (typeof array !== "function" && array.setInterval) ) {
			push.call( ret, array );
		} else {
			TiQuery.fn.merge( ret, array );
		}
	}

	return ret;
},

inArray: function( elem, array ) {
	if ( array.indexOf ) {
		return array.indexOf( elem );
	}

	for ( var i = 0, length = array.length; i < length; i++ ) {
		if ( array[ i ] === elem ) {
			return i;
		}
	}

	return -1;
},

merge: function( first, second ) {
	var i = first.length, j = 0;

	if ( typeof second.length === "number" ) {
		for ( var l = second.length; j < l; j++ ) {
			first[ i++ ] = second[ j ];
		}
	
	} else {
		while ( second[j] !== undefined ) {
			first[ i++ ] = second[ j++ ];
		}
	}

	first.length = i;

	return first;
},

grep: function( elems, callback, inv ) {
	var ret = [];

	// Go through the array, only saving the items
	// that pass the validator function
	for ( var i = 0, length = elems.length; i < length; i++ ) {
		if ( !inv !== !callback( elems[ i ], i ) ) {
			ret.push( elems[ i ] );
		}
	}

	return ret;
},

/**
 * arg is for internal usage only
 */
map: function( elems, callback, arg ) {
	var ret = [], value;

	// Go through the array, translating each of the items to their
	// new value (or values).
	for ( var i = 0, length = elems.length; i < length; i++ ) {
		value = callback( elems[ i ], i, arg );

		if ( value != null ) {
			ret[ ret.length ] = value;
		}
	}

	return ret.concat.apply( [], ret );
},

// A global GUID counter for objects
guid: 1,

proxy: function( fn, proxy, thisObject ) {
	if ( arguments.length === 2 ) {
		if ( typeof proxy === "string" ) {
			thisObject = fn;
			fn = thisObject[ proxy ];
			proxy = undefined;

		} else if ( proxy && !TiQuery.fn.isFunction( proxy ) ) {
			thisObject = proxy;
			proxy = undefined;
		}
	}

	if ( !proxy && fn ) {
		proxy = function() {
			return fn.apply( thisObject || this, arguments );
		};
	}

	// Set the guid of unique handler to the same of original handler, so it can be removed
	if ( fn ) {
		proxy.guid = fn.guid = fn.guid || proxy.guid || TiQuery.fn.guid++;
	}

	// So proxy can be declared as an argument
	return proxy;
}
});

function now() {
	return (new Date).getTime();
}
