-- DropForeignKey
ALTER TABLE `accessory` DROP FOREIGN KEY `accessory_ibfk_1`;

-- DropForeignKey
ALTER TABLE `accessory` DROP FOREIGN KEY `accessory_ibfk_2`;

-- DropForeignKey
ALTER TABLE `figure` DROP FOREIGN KEY `figure_ibfk_1`;

-- DropForeignKey
ALTER TABLE `figure` DROP FOREIGN KEY `figure_ibfk_2`;

-- DropForeignKey
ALTER TABLE `figure` DROP FOREIGN KEY `figure_ibfk_3`;

-- DropForeignKey
ALTER TABLE `figure` DROP FOREIGN KEY `figure_ibfk_4`;

-- DropForeignKey
ALTER TABLE `set` DROP FOREIGN KEY `set_ibfk_1`;

-- DropIndex
DROP INDEX `User.password_unique` ON `user`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `permission` VARCHAR(191) NOT NULL DEFAULT 'read';

-- AddForeignKey
ALTER TABLE `Set` ADD CONSTRAINT `Set_gameId_fkey` FOREIGN KEY (`gameId`) REFERENCES `Game`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Figure` ADD CONSTRAINT `Figure_characterId_fkey` FOREIGN KEY (`characterId`) REFERENCES `Character`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Figure` ADD CONSTRAINT `Figure_elementId_fkey` FOREIGN KEY (`elementId`) REFERENCES `Element`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Figure` ADD CONSTRAINT `Figure_gameId_fkey` FOREIGN KEY (`gameId`) REFERENCES `Game`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Figure` ADD CONSTRAINT `Figure_setId_fkey` FOREIGN KEY (`setId`) REFERENCES `Set`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Accessory` ADD CONSTRAINT `Accessory_gameId_fkey` FOREIGN KEY (`gameId`) REFERENCES `Game`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Accessory` ADD CONSTRAINT `Accessory_setId_fkey` FOREIGN KEY (`setId`) REFERENCES `Set`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `character` RENAME INDEX `Character.name_unique` TO `Character_name_key`;

-- RenameIndex
ALTER TABLE `game` RENAME INDEX `Game.title_unique` TO `Game_title_key`;

-- RenameIndex
ALTER TABLE `user` RENAME INDEX `User.email_unique` TO `User_email_key`;

-- RenameIndex
ALTER TABLE `user` RENAME INDEX `User.username_unique` TO `User_username_key`;
