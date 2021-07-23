/*
  Warnings:

  - You are about to alter the column `value` on the `accessory` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Int`.
  - You are about to alter the column `value` on the `figure` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Int`.

*/
-- AlterTable
ALTER TABLE `accessory` MODIFY `value` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `figure` MODIFY `value` INTEGER NOT NULL;
