.PHONY: babel typescript closure rollup traceur size rollup-babel-plugin webpack babelify

all:
	make babel
	make size
	make babelify
	make size
	make rollup-babel-plugin
	make size
	make rollup
	make size
	make webpack
	make size

typescript:
	cd typescript; npm i; npm run compile;

babel:
	cd babel; npm i; npm run compile

babelify:
	cd babelify; npm i; npm run compile

rollup:
	cd rollup; npm i; npm run compile

rollup-babel-plugin:
	cd rollup-babel-plugin; npm i; npm run compile

closure:
	cd closure; java -jar compiler.jar --language_in=ECMASCRIPT6_STRICT --js_output_file='../backbone.marionette/lib/core/backbone.marionette.js' '../backbone.marionette/src/**.js'

traceur:
	cd traceur; npm i; npm run compile

webpack:
	cd webpack; npm i; npm run compile

size:
	@echo -----------------------------------------
	stat -f%z backbone.marionette/lib/core/backbone.marionette.js
	gzip -c backbone.marionette/lib/core/backbone.marionette.js | wc -c
	@echo -----------------------------------------

