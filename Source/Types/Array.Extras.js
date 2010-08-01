/*
---

script: Array.Extras.js

name: Array.Extras

description: Extends the Array native object to include useful methods to work with arrays.

license: MIT-style license

authors:
  - Christoph Pojer

requires:
  - Core/Array

provides: [Array.Extras]

...
*/
Array.implement({

	min: function(){
		return Math.min.apply(null, this);
	},

	max: function(){
		return Math.max.apply(null, this);
	},

	average: function(){
		return this.length ? this.sum() / this.length : 0;
	},

	sum: function(){
		var result = 0, l = this.length;
		if (l){
			while(l--) result += this[l];
		}
		return result;
	},

	unique: function(){
		return [].combine(this);
	},

	shuffle: function(){
		for (var i = this.length; i && --i;){
			var temp = this[i], r = Math.floor(Math.random() * ( i + 1 ));
			this[i] = this[r];
			this[r] = temp;
		}
		return this;
	},
	
	reduce: function(fn, value){
		var undefined;
		for (var i = 0, l = this.length; i < l; i++)
			if (i in this)
				value = value === undefined ? this[i] : fn.call(null, value, this[i], i, this);
		return value;
	},
	
	reduceRight: function(fn, value){
		var i = this.length, undefined;
		while (i--)
			if (i in this)
				value = value === undefined ? this[i] : fn.call(null, value, this[i], i, this);
		return value;
	}

});
