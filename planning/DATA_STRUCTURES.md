CREATE TABLE "users" (
"id" SERIAL PRIMARY KEY,
"full_name" varchar,
"email" varchar,
"password" varchar,
"created_at" timestamp
);

CREATE TABLE "projects" (
"id" SERIAL PRIMARY KEY,
"name" varchar,
"description" text,
"created_at" timestamp
);

CREATE TABLE "users_projects" (
"id" SERIAL PRIMARY KEY,
"project_id" int > project.id
"user_id" int > user.id
"owner_stretch" boolean,
"created_at" timestamp
);

CREATE TABLE "files" (
"id" SERIAL PRIMARY KEY,
"project_id" int > project.id
"name" varchar,
"location" varchar,
"description" text,
"created_at" timestamp
);

CREATE TABLE "comments_stretch" (
"id" SERIAL PRIMARY KEY,
"user_id" int > users.id
"file_id" int > files.id
"created_at" timestamp
);
