-- CreateTable
CREATE TABLE "Movie" (
    "id" SERIAL NOT NULL,
    "duration" INTEGER NOT NULL,
    "contentId" INTEGER NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);
