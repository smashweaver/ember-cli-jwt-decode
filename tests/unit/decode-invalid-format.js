import { test } from 'ember-qunit';
import jwtDecode from 'ember-cli-jwt-decode';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';

test("invalid token format", function(assert) {
  assert.throws(
    function() {
      jwtDecode(token);
    },
    'Invalid token specified'
  );
});
