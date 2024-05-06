-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "likeCount" INTEGER NOT NULL DEFAULT 0,
    "author" TEXT,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
