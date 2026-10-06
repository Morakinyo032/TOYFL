import * as migration_20260929_210934_initial_schema from './20260929_210934_initial_schema';
import * as migration_20261001_035812_add_homepage_global from './20261001_035812_add_homepage_global';
import * as migration_20261005_235919_add_homepage_enrichment from './20261005_235919_add_homepage_enrichment';

export const migrations = [
  {
    up: migration_20260929_210934_initial_schema.up,
    down: migration_20260929_210934_initial_schema.down,
    name: '20260929_210934_initial_schema',
  },
  {
    up: migration_20261001_035812_add_homepage_global.up,
    down: migration_20261001_035812_add_homepage_global.down,
    name: '20261001_035812_add_homepage_global',
  },
  {
    up: migration_20261005_235919_add_homepage_enrichment.up,
    down: migration_20261005_235919_add_homepage_enrichment.down,
    name: '20261005_235919_add_homepage_enrichment'
  },
];
