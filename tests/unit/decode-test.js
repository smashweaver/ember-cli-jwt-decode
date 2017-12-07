import { test } from 'ember-qunit';
import jwtDecode from 'ember-cli-jwt-decode';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ';

test("it works", function(assert) {
  let { sub, name, admin } = jwtDecode(token);

  assert.equal(sub, '1234567890');
  assert.equal(name, 'John Doe');
  assert.ok(admin);
});
