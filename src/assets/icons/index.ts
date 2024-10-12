import auth from './auth';
import app from './app';
import tabs from './tabs';
import common from './common';
import notifications from './notifications';

export default {
  ...auth,
  ...app,
  ...tabs,
  ...common,
  ...notifications,
};
