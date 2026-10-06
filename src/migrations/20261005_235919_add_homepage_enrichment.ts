import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "homepage_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_scoring_bands" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"range_label" varchar NOT NULL,
  	"band_name" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_tips" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_faqs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" varchar NOT NULL
  );
  
  ALTER TABLE "homepage" ADD COLUMN "scoring_heading" varchar DEFAULT 'Bí A Ṣe Ń Díwọ̀n Àmì';
  ALTER TABLE "homepage" ADD COLUMN "tips_heading" varchar DEFAULT 'Bí O Ṣe Lè Múra Sílẹ̀';
  ALTER TABLE "homepage" ADD COLUMN "faq_heading" varchar DEFAULT 'Àwọn Ìbéèrè Tí A Sábà Ń Béèrè';
  DO $$ BEGIN
   ALTER TABLE "homepage_stats" ADD CONSTRAINT "homepage_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_scoring_bands" ADD CONSTRAINT "homepage_scoring_bands_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_tips" ADD CONSTRAINT "homepage_tips_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_faqs" ADD CONSTRAINT "homepage_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "homepage_stats_order_idx" ON "homepage_stats" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_stats_parent_id_idx" ON "homepage_stats" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_scoring_bands_order_idx" ON "homepage_scoring_bands" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_scoring_bands_parent_id_idx" ON "homepage_scoring_bands" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_tips_order_idx" ON "homepage_tips" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_tips_parent_id_idx" ON "homepage_tips" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_faqs_order_idx" ON "homepage_faqs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_faqs_parent_id_idx" ON "homepage_faqs" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "homepage_stats" CASCADE;
  DROP TABLE "homepage_scoring_bands" CASCADE;
  DROP TABLE "homepage_tips" CASCADE;
  DROP TABLE "homepage_faqs" CASCADE;
  ALTER TABLE "homepage" DROP COLUMN IF EXISTS "scoring_heading";
  ALTER TABLE "homepage" DROP COLUMN IF EXISTS "tips_heading";
  ALTER TABLE "homepage" DROP COLUMN IF EXISTS "faq_heading";`)
}
