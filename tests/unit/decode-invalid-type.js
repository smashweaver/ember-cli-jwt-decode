import { test } from 'ember-qunit';
import jwtDecode from 'ember-cli-jwt-decode';

const token = { not: 'a string' };

test("invalid token type", function(assert) {
  assert.throws(
    function() {
      jwtDecode(token);
    },
    'Invalid token specified'
  );
});
