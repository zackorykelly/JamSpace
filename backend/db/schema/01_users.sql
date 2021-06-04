DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS projects CASCADE;
DROP TABLE IF EXISTS users_projects CASCADE;
DROP TABLE IF EXISTS files CASCADE;
DROP TABLE IF EXISTS comments_stretch CASCADE;

CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "full_name" VARCHAR(255) NOT NULL,
  "email" VARCHAR(255) NOT NULL,
  "password" VARCHAR(255) NOT NULL,
  "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "projects" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "description" TEXT, 
  "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "users_projects" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "project_id" INTEGER REFERENCES projects(id) ON DELETE CASCADE,
  "user_id" INTEGER REFERENCES users(id) ON DELETE CASCADE,
  "owner_stretch" BOOLEAN DEFAULT false,
  "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "files" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "project_id" INTEGER REFERENCES projects(id) ON DELETE CASCADE,
  "name" VARCHAR(255) NOT NULL,
  "location" VARCHAR(255) NOT NULL,
  "description" text,
  "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "comments_stretch" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "user_id" INTEGER REFERENCES users(id) ON DELETE CASCADE,
  "file_id" INTEGER REFERENCES files(id) ON DELETE CASCADE,
  "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

