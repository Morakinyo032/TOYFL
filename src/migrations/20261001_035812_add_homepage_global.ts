import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "homepage_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"body" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_notes" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "homepage" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_title" varchar DEFAULT 'Ìdánwò Yorùbá',
  	"hero_subtitle" varchar DEFAULT 'Ìdánwò kíkọ́ èdè Yorùbá tí a ṣe gẹ́gẹ́ bí ìlànà TOEFL, fún àwọn tí ń kọ́ èdè náà tàbí tí ó ti mọ̀ ọ́ dáadáa.',
  	"hero_full_name" varchar DEFAULT 'YPCE ni Yoruba Proficiency Certificate Examination, orúkọ kíkún ìdánwò yìí.',
  	"intro_heading" varchar DEFAULT 'Kí ni ìdánwò yìí?',
  	"intro_body" varchar DEFAULT 'Ìdánwò yìí ń díwọ̀n bí ẹnikẹ́ni ṣe mọ èdè Yorùbá dáadáa, láti kíkàwé dé kíkọ̀wé. Ó ní àpá mẹ́rin tí ó yàtọ̀ síra, olúkúlùkù ń díwọ̀n ìmọ̀ tí ó yàtọ̀.',
  	"notes_heading" varchar DEFAULT 'Kí ni o yẹ kí o mọ̀ kí o tó bẹ̀rẹ̀',
  	"cta_text" varchar DEFAULT 'Wo Àwọn Ìdánwò',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  DO $$ BEGIN
   ALTER TABLE "homepage_sections" ADD CONSTRAINT "homepage_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_notes" ADD CONSTRAINT "homepage_notes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "homepage_sections_order_idx" ON "homepage_sections" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_sections_parent_id_idx" ON "homepage_sections" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_notes_order_idx" ON "homepage_notes" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_notes_parent_id_idx" ON "homepage_notes" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "homepage_sections" CASCADE;
  DROP TABLE "homepage_notes" CASCADE;
  DROP TABLE "homepage" CASCADE;`)
}
