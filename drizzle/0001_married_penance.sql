CREATE TABLE `settings` (
	`key` text PRIMARY KEY NOT NULL,
	`value` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tryons` (
	`id` text PRIMARY KEY NOT NULL,
	`user` text NOT NULL,
	`prediction` text,
	`created` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_tryons_user_created` ON `tryons` (`user`,`created`);