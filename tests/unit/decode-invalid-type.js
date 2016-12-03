import { test } from 'ember-qunit';
import { jwt_decode } from 'ember-cli-jwt-decode';

const token = { not: 'a string' };

test("invalid token type", function(assert) {
  assert.throws(
    function() {
      jwt_decode(token);
    },
    'Invalid token specified'
  );
});
