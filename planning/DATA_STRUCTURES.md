## Users

CREATE TABLE "users" (
"id" SERIAL PRIMARY KEY,
"full_name" varchar,
"email" varchar,
"password" varchar,
"created_at" timestamp
);

const users = [
{
id: 1,
full_name: "John Joe",
email: "john@joe.com",
password: "1234"
created_at: timestamp
}
]

## Projects

CREATE TABLE "projects" (
"id" SERIAL PRIMARY KEY,
"name" varchar,
"description" text,
"created_at" timestamp
);

const projects = [
{
id: 1,
name: "John Joe Song Soe",
description: "John joe singing a song doe",
created_at: timestamp
}
]

## Users_projects

CREATE TABLE "users_projects" (
"id" SERIAL PRIMARY KEY,
"project_id" int > project.id
"user_id" int > user.id
"owner_stretch" boolean,
"created_at" timestamp
);

const users_projects = [
{
id: 1,
user_id: 1,
project_id: 1
created_at: timestamp
}
]

## Files

CREATE TABLE "files" (
"id" SERIAL PRIMARY KEY,
"project_id" int > project.id
"name" varchar,
"location" varchar,
"description" text,
"created_at" timestamp
);

const files = [
{
id: 1,
project_id: 1,
location: "./assets/song1.mp3",
description: "a cool song I made",
created_at: timestamp
}
]

## Comments

CREATE TABLE "comments_stretch" (
"id" SERIAL PRIMARY KEY,
"user_id" int > users.id
"file_id" int > files.id
"created_at" timestamp
);

const comments = [
{
id: 1,
user_id: 1,
file_id: 1,
message: "Hello!",
created_at: timestamp
}
]
