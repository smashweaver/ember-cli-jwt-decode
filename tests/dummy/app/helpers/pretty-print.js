import { helper } from '@ember/component/helper';

export function prettyPrint([obj]) {
  return JSON.stringify(obj, null, 2);
}

export default helper(prettyPrint);
