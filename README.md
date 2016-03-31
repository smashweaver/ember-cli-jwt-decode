# ember-cli-jwt-decode
This ember-cli addon decodes a JWT and returns the payload object. (Visit [https://jwt.io/introduction/](https://jwt.io/introduction/) for an intro to JSON Web Tokens.)

## Installation
* npm install --save-dev ember-cli-jwt-decode 

## Usage
<pre>
<code>
import Ember from 'ember';
import { jwt_decode } from 'ember-cli-jwt-decode';

export default Ember.Object.extend({
  decodeJWT(token){
    return jwt_decode(token);
  }
});
</code>
</pre>

## Running
* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests
* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building
* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).


## Acknowledgement
This is a repackaging of [autho/jwt-decode](https://github.com/auth0/jwt-decode) to simplify  integration with ember-cli apps.
