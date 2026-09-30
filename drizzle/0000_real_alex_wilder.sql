CREATE TABLE `cart` (
	`user` text NOT NULL,
	`product` text NOT NULL,
	`size` text NOT NULL,
	`quantity` integer NOT NULL,
	PRIMARY KEY(`user`, `product`, `size`)
);
--> statement-breakpoint
CREATE TABLE `orders` (
	`id` text PRIMARY KEY NOT NULL,
	`user` text NOT NULL,
	`customer` text NOT NULL,
	`email` text NOT NULL,
	`address` text NOT NULL,
	`items` text NOT NULL,
	`total` integer NOT NULL,
	`status` text DEFAULT 'Received' NOT NULL,
	`created` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_orders_user_created` ON `orders` (`user`,`created`);--> statement-breakpoint
CREATE TABLE `prices` (
	`product` text PRIMARY KEY NOT NULL,
	`price` integer NOT NULL
);
