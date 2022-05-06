/*
  Warnings:

  - You are about to drop the column `orderUser` on the `OrderHistory` table. All the data in the column will be lost.
  - You are about to drop the column `orderWantDate` on the `OrderHistory` table. All the data in the column will be lost.
  - Added the required column `deliveryDate` to the `OrderHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderCompany` to the `OrderHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderUserID` to the `OrderHistory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OrderHistory" DROP COLUMN "orderUser",
DROP COLUMN "orderWantDate",
ADD COLUMN     "deliveryDate" TEXT NOT NULL,
ADD COLUMN     "orderCompany" TEXT NOT NULL,
ADD COLUMN     "orderUserID" TEXT NOT NULL;
