## Bits2Bytes
Convert various units from bits to petabytes.

## Installation
use npm:

  Local Install :<br/>
  `npm install bits2bytes`

  Globall Install:<br/>
  `npm install -g bits2bytes`

## Using

After complete installation, you can include `./bits2bytes/index.js`
in your script by using `var bits2bytes = require(./bits2bytes/index.js);`

If you install bits2bytes globally, you can just use `var bits2bytes = require('bits2bytes');`

Bits2Bytes calculate all data units to each other, by just enter one unit and a value.then it return you an array or [json](https://wikipedia.org/json) of converted data.

For convert use `convert()` function.this function have tree parameters:
`convert(value,unit,format)`
* **value**: value for conversion  (integer)
* **unit**: unit of previous value (string - case sensitive)
  * `b` bite
  * `B` Byte
  * `kb` killobit
  * `kB` killobyte
  * `mb` megabit
  * `mB` megabyte
  * `gb` gigabit
  * `gB` gigabyte
  * `tb` terabit
  * `tB` terabyte
  * `pb` petabit
  * `pB` petabyte

* **format**: format of return (string)
  * `array` return array of conversion.
  * `json` return strigify json.
    * You can return strigified json to JSON Object by using *var jsonObject = JSON.parse( RETURN_VALUE )*

#### Example
````javascript
var bits2bytes = require('bis2bytes');//or if install local use require('./bits2bytes/index.js')

//return
console.log(bits2bytes.convert(16,'b','json'));

//
console.log(bits2bytes.convert(16,'b','array'));

//return array like above line
console.log(bits2bytes.convert(16,'b'));

````

## Other apps

I previously created another platform app...if you enjoy Bits2Bytes you can use it on other platform.<br/>
* [Firefox Addon](https://addons.mozilla.org/en-US/firefox/addon/bits2bytes)
* [Wordpress Plugin](https://wordpress.org/plugins/bits2bytes)
* You can convert Bits2Bytes for using on browser with [Browserify](http://npmjs.org/package/browserify).`browserify index.js -o browseify_bits2bytes.js`

## Found a bug?

If you find a bug or need a feature Open a [github issue](https://github.com/mostafazs/bits2bytes_node/issues).

## License

MIT License ( [https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT) )
