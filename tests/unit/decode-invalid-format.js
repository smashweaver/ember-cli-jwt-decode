import { test } from 'ember-qunit';
import { jwt_decode } from 'ember-cli-jwt-decode';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";

test("invalid token format", function(assert) {
  assert.throws(
    function() {
      jwt_decode(token);
    },
    'Invalid token specified'
  );
});
