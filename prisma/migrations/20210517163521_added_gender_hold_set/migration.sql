/*
  Warnings:

  - Added the required column `gender` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `character` ADD COLUMN `gender` VARCHAR(1) NOT NULL;

-- AlterTable
ALTER TABLE `figure` ADD COLUMN `setId` INTEGER,
    ADD COLUMN `held` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `dmgHeld` INTEGER NOT NULL DEFAULT 0,
    MODIFY `rare` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `stock` INTEGER NOT NULL DEFAULT 0,
    MODIFY `damaged` INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE `Set` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `setName` VARCHAR(30) NOT NULL,
    `gameId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Set` ADD FOREIGN KEY (`gameId`) REFERENCES `Game`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Figure` ADD FOREIGN KEY (`setId`) REFERENCES `Set`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
