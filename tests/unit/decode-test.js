import { test } from 'ember-qunit';
import { jwt_decode } from 'ember-cli-jwt-decode';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ";

test("it works", function(assert) {
  let result = jwt_decode(token);
  assert.equal(result['sub'], "1234567890");
  assert.equal(result['name'], "John Doe");
  assert.ok(result['admin']);
});
