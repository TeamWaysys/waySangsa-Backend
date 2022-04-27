-- CreateTable
CREATE TABLE "OrderHistory" (
    "id" SERIAL NOT NULL,
    "orderUser" TEXT NOT NULL,
    "orderSiteAddr" TEXT NOT NULL,
    "siteChiefName" TEXT NOT NULL,
    "siteChiefPhoneNum" TEXT NOT NULL,
    "siteChiefEmail" TEXT NOT NULL,
    "orderWantDate" TEXT NOT NULL,
    "orderList" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OrderHistory_pkey" PRIMARY KEY ("id")
);
