/*
  Warnings:

  - You are about to drop the column `condition` on the `accessory` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `accessory` DROP COLUMN `condition`,
    ADD COLUMN `setId` INTEGER,
    ADD COLUMN `modelNo` VARCHAR(20),
    ADD COLUMN `excellent` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `good` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `acceptable` INTEGER NOT NULL DEFAULT 0,
    MODIFY `value` DECIMAL(10, 2) NOT NULL,
    MODIFY `stock` INTEGER NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE `Accessory` ADD FOREIGN KEY (`setId`) REFERENCES `Set`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
