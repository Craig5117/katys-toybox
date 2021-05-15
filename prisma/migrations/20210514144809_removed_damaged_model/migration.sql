/*
  Warnings:

  - You are about to drop the `damaged` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `damaged` to the `Figure` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `damaged` DROP FOREIGN KEY `damaged_ibfk_1`;

-- AlterTable
ALTER TABLE `figure` ADD COLUMN `damaged` INTEGER NOT NULL;

-- DropTable
DROP TABLE `damaged`;
