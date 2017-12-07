# ember-cli-jwt-decode
This ember-cli addon decodes a JWT and returns the payload object. (Visit [https://jwt.io/introduction/](https://jwt.io/introduction/) for an intro to JSON Web Tokens.)

## Installation
* ember install ember-cli-jwt-decode

## Demo site
Check out https://smashweaver.github.io/ember-cli-jwt-decode/.

## Usage
<pre>
<code>
import EmberObject from "@ember/object"
import jwtDecode from 'ember-cli-jwt-decode';

export default EmberObject.extend({
  decodeJWT(token){
    return jwtDecode(token);
  }
});
</code>
</pre>

## Acknowledgement
This is a repackaging of [autho/jwt-decode](https://github.com/auth0/jwt-decode) to simplify  integration with ember-cli apps.
