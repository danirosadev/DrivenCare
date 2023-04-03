CREATE TABLE "users" (
	"id" serial NOT NULL,
	"name" varchar(100) NOT NULL,
	"email" varchar(100) NOT NULL UNIQUE,
	"password" varchar(100) NOT NULL,
	"created_at" TIMESTAMP NOT NULL DEFAULT 'now ()',
	CONSTRAINT "users_pk" PRIMARY KEY ("id")
);
/* 2023-04-02 17:06:35 [135 ms] */ 
CREATE TABLE "specialities" (
	"id" serial NOT NULL,
	"name" varchar(100) NOT NULL,
	CONSTRAINT "specialities_pk" PRIMARY KEY ("id")
);
/* 2023-04-02 17:06:41 [106 ms] */ 
CREATE TABLE "doctors" (
	"id" serial NOT NULL,
	"name" varchar(100) NOT NULL,
	"email" varchar(100) NOT NULL,
	"password" varchar(100) NOT NULL,
	"speciality_id" integer NOT NULL,
	"created_at" TIMESTAMP NOT NULL DEFAULT 'now ()',
	CONSTRAINT "doctors_pk" PRIMARY KEY ("id")
);
/* 2023-04-02 17:06:45 [161 ms] */ 
CREATE TABLE "sessions" (
	"id" serial NOT NULL,
	"user_id" integer,
	"doctor_id" integer,
	"token" varchar(255) NOT NULL,
	"created_at" TIMESTAMP NOT NULL DEFAULT 'now ()',
	CONSTRAINT "sessions_pk" PRIMARY KEY ("id")
);
/* 2023-04-02 17:06:51 [95 ms] */ 
CREATE TABLE "appointments" (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"doctor_id" integer NOT NULL,
	"date" DATE NOT NULL,
	"status_id" integer NOT NULL,
	"created_at" TIMESTAMP NOT NULL DEFAULT 'now ()',
	CONSTRAINT "appointments_pk" PRIMARY KEY ("id")
);
/* 2023-04-02 17:06:54 [102 ms] */ 
CREATE TABLE "status" (
	"id" serial NOT NULL,
	"name" varchar(100) NOT NULL,
	CONSTRAINT "status_pk" PRIMARY KEY ("id")
);
/* 2023-04-02 17:06:57 [50 ms] */ 
ALTER TABLE "doctors" ADD CONSTRAINT "doctors_fk0" FOREIGN KEY ("speciality_id") REFERENCES "specialities"("id");
/* 2023-04-02 17:07:01 [54 ms] */ 
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");
/* 2023-04-02 17:07:02 [44 ms] */ 
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_fk1" FOREIGN KEY ("doctor_id") REFERENCES "doctors"("id");
/* 2023-04-02 17:07:04 [253 ms] */ 
ALTER TABLE "appointments" ADD CONSTRAINT "appointments_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");
/* 2023-04-02 17:07:04 [62 ms] */ 
ALTER TABLE "appointments" ADD CONSTRAINT "appointments_fk1" FOREIGN KEY ("doctor_id") REFERENCES "doctors"("id");
/* 2023-04-02 17:07:06 [96 ms] */ 
ALTER TABLE "appointments" ADD CONSTRAINT "appointments_fk2" FOREIGN KEY ("status_id") REFERENCES "status"("id");
