# JSONTag Types: Tagged JSON Types

This library provides a set of classes that implement the types defined in [JSONTag](https://github.com/poef/jsontag).

The purpose of the type classes provided here is mostly documentary. It is to document in code what the semantics, the workings of each type is supposed to be. So they have been kept purposely small and simple. They are also immutable by default, following the [value object](https://en.wikipedia.org/wiki/Value_object) paradigm from Domain-Driven Design (DDD)

## Install / Usage

```shell
npm install @muze-nl/JSONTagTypes
```

In the browser:

```html
<script src="/node_modules/JSONTagTypes/dist/browser.js"></script>
<script>

</script>
```

In node:
```javascript
import JSONTagTypes from 'JSONTagTypes'

```

## API


### reviver

> `JSONTag.reviver(key, value, meta)`

This method can be supplied to `JSONTag.parse` to instantiate the JSONTag provided classes: `UUID`, `Link`, `Date`, `Time`, `Datetime`, `Decimal` and `Money`. 

```javascript
let s = `{
	"id": <uuid>"03d971b8-1d72-4b52-872d-21bd004d6df8",
	"name": "Joe",
	"dob": <date>"1972-09-20"
}`
let r = JSONTag.parse(s, JSONTag.reviver)
let year = r.dob.getFullYear() // 1972
```

