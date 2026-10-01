import * as migration_20260929_210934_initial_schema from './20260929_210934_initial_schema';
import * as migration_20261001_035812_add_homepage_global from './20261001_035812_add_homepage_global';

export const migrations = [
  {
    up: migration_20260929_210934_initial_schema.up,
    down: migration_20260929_210934_initial_schema.down,
    name: '20260929_210934_initial_schema',
  },
  {
    up: migration_20261001_035812_add_homepage_global.up,
    down: migration_20261001_035812_add_homepage_global.down,
    name: '20261001_035812_add_homepage_global'
  },
];
