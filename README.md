### ES6 => ES5 -- a performance exploration.

#### Results


| Tools                        | File Size (bytes) | gzip size (bytes) |
| -----------------------------|-------------------|-------------------|
| webpack + babel + uglify     | 47444             | 11173             |
| babel + rollup + uglify      | 47402             | 11161             |
| rollup-babel-plugin + uglify | 47256             | 10850             |
| closure                      | Unknown           | Unknown           |
| typescript + uglify          | Unknown           | Unknown           |
| babelify + uglify            | 75443             | 14439             |
| babel + browserify + uglify  | 74139             | 13910             |
| traceur + browserify + uglify| Unknown           | Unknown           |

--------------------------------


#### Contributing

##### Building Samples

`make <babel | closure | typescript | rollup | traceur | ...>`

##### Generating sizes

* `make <example-name>`
* `make size`
* open demo in chrome... save timeline trace
* `npm i -g bigrig`
* `bigrig <path-to-trace> --pp`

##### View Demo

`cd src && python -m SimpleHTTPServer`

visit localhost:8000/
