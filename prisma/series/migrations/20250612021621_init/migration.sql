-- CreateTable
CREATE TABLE "Series" (
    "id" SERIAL NOT NULL,
    "seasons" INTEGER NOT NULL,
    "contentId" INTEGER NOT NULL,

    CONSTRAINT "Series_pkey" PRIMARY KEY ("id")
);
