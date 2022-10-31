import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import jwtDecode from 'ember-cli-jwt-decode';

module('Unit | decode', function (hooks) {
  setupTest(hooks);

  test('jwtDecode works', function (assert) {
    const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ',
      { sub, name, admin } = jwtDecode(token);

    assert.deepEqual(sub, '1234567890');
    assert.deepEqual(name, 'John Doe');
    assert.ok(admin);
  });

  test('invalid token type', function (assert) {
    const token = { not: 'a string' };

    assert.throws(function () {
      jwtDecode(token);
    }, 'Invalid token specified');
  });

  test('invalid token format', function (assert) {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';

    assert.throws(function () {
      jwtDecode(token);
    }, 'Invalid token specified');
  });
});
