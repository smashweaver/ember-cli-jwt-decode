import Component from '@ember/component';
import layout from '../templates/components/jwt-decode';
import jwtDecode from 'ember-cli-jwt-decode';
import { get, set } from '@ember/object';

export default Component.extend({
  layout,

  error: null,

  token: null,

  classNames: ['container'],

  actions: {
    updatedToken(value) {
      set(this, 'error', null);
      try {
        let jwt = jwtDecode(value);
        set(this, 'jwt', jwt);
      } catch(e) {
        set(this, 'error', e.message);
      }
    }
  }
});
