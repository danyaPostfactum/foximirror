﻿/**----------------------------------------**\
 | Basic comment block based on             |
 | source code found at jslib.mozdev.org    |
\**----------------------------------------**/

/*⨭⨮⫷⫸✓✑✎ ✏ ✐✘✳✯❖➺⟳⟲Ͼ ✓Ͽ߷௵෴༒ↂ⊰ ⊱▒▢ ⚶▣⚜*/

/*
Copyright (C) 2011 by Angus Croll
http://javascriptweblog.wordpress.com
Available under MIT license <http://mths.be/mit>
*/

;(function(){
  var traverse = function(util, searchTerm, options) {
	var options = options || {};
	var obj = options.obj || window;
	var path = options.path || ((obj==window) ? "window" : "");
	var props = Object.keys(obj);
	props.forEach(function(prop) {
	  if ((tests[util] || util)(searchTerm, obj, prop)){
		jn.say([path, ".", prop].join(""), "->",["(", typeof obj[prop], ")"].join(""), obj[prop]);
	  }
	  if(Object.prototype.toString.call(obj[prop])=="[object Object]" && (obj[prop] != obj) && path.split(".").indexOf(prop) == -1) {
		traverse(util, searchTerm, {obj: obj[prop], path: [path,prop].join(".")});
	  }
	});
  }

  var dealWithIt = function(util, expected, searchTerm, options) {
	(!expected || typeof searchTerm == expected) ?
	  traverse(util, searchTerm, options) :
	  jn.say([searchTerm, 'must be', expected].join(' '));
  }

  var tests = {
	'name': function(searchTerm, obj, prop) {return searchTerm == prop},
	'nameContains': function(searchTerm, obj, prop) {return prop.indexOf(searchTerm)>-1},
	'type': function(searchTerm, obj, prop) {return obj[prop] instanceof searchTerm},
	'value': function(searchTerm, obj, prop) {return obj[prop] === searchTerm},
	'valueCoerced': function(searchTerm, obj, prop) {return obj[prop] == searchTerm}
  }

  jn.find={
	byName: function(searchTerm, options) {dealWithIt('name', 'string', searchTerm, options);},
	byNameContains: function(searchTerm, options) {dealWithIt('nameContains', 'string', searchTerm, options);},
	byType: function(searchTerm, options) {dealWithIt('type', 'function', searchTerm, options);},
	byValue: function(searchTerm, options) {dealWithIt('value', null, searchTerm, options);},
	byValueCoerced: function(searchTerm, options) {dealWithIt('valueCoerced', null, searchTerm, options);},
	custom: function(fn, options) {traverse(fn, null, options);}
  }
})();

/*
Copyright (C) 2011 by Angus Croll and John-David Dalton
http://javascriptweblog.wordpress.com
http://allyoucanleet.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

/*alternate version by John-David Dalton <http://allyoucanleet.com/>
//1) works in IE 8
//2) allows repeating prop names in path
//3) does not risk exceeding stack limit
//4) logs circular/shared references w/ indicator
*/
;(function(window) {

  function dealWithIt(util, expected, searchTerm, options) {
	// integrity check arguments
	(!expected || typeof searchTerm == expected)
	  ? traverse(util, searchTerm, options)
	  : jn.say(searchTerm + ' must be ' + expected);
  }

  function traverse(util, searchTerm, options) {
	util = tests[util] || util;
	options || (options = {});

	var data;
	var pool;
	var pooled;
	var prevPath;

	var obj = options.obj || window;
	var ownProp = options.hasOwnProperty;
	var path = options.path || ((obj == window) ? 'window' : '');
	var queue = [{ 'obj': obj, 'path': path }];

	// a non-recursive solution to avoid call stack limits
	// http://www.jslab.dk/articles/non.recursive.preorder.traversal.part4
	while ((data = queue.pop())) {
	  obj = data.obj;
	  path = data.path;
	  pooled = false;

	  // clear pool when switching root properties
	  path.indexOf(prevPath) && (pool = [data]);
	  prevPath = path;

	  for (var prop in obj) {
		// IE may throw errors when accessing/coercing some properties
		try {
		  if (ownProp.call(obj, prop)) {
			// inspect objects
			if ([obj[prop]] == '[object Object]') {
			  // check if already pooled (prevents circular references)
			  for (var i = -1; pool[++i] && !(pooled = pool[i].obj == obj[prop] && pool[i]); ) { }
			  // add to stack
			  if (!pooled) {
				data = { 'obj': obj[prop], 'path': path + '.' + prop };
				pool.push(data);
				queue.push(data);
			  }
			}
			// if match detected, log it
			if (util(searchTerm, obj, prop)) {
			  jn.say(path + '.' + prop, '->', '(' + (pooled ? '<' + pooled.path + '>' : typeof obj[prop]) + ')', obj[prop]);
			}
		  }
		} catch(e) { }
	  }
	}
  }

  var tests = {
	'propName': function(searchTerm, obj, prop) {
	  return searchTerm == prop;
	},
	'type': function(searchTerm, obj, prop) {
	  return obj[prop] instanceof searchTerm;
	},
	'value': function(searchTerm, obj, prop) {
	  return obj[prop] === searchTerm;
	},
	'valueCoerced': function(searchTerm, obj, prop) {
	  return obj[prop] == searchTerm;
	}
  };

  // expose
  jn.find2 = {
	'byPropName': function(searchTerm, options) {
	  dealWithIt('propName', 'string', searchTerm, options);
	},
	'byType': function(searchTerm, options) {
	  dealWithIt('type', 'function', searchTerm, options);
	},
	'byValue': function(searchTerm, options) {
	  dealWithIt('value', null, searchTerm, options);
	},
	'byValueCoerced': function(searchTerm, options) {
	  dealWithIt('valueCoerced', null, searchTerm, options);
	},
	'custom': function(fn, options) {
	  traverse(fn, null, options);
	}
  };
}(this));
