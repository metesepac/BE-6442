-- CreateTable
CREATE TABLE "public"."Category" (
    "categoryid" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "Category_pkey" PRIMARY KEY ("categoryid")
);

-- CreateTable
CREATE TABLE "public"."Comment" (
    "commentid" SERIAL NOT NULL,
    "postid" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "commenter_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("commentid")
);

-- CreateTable
CREATE TABLE "public"."Post" (
    "postid" SERIAL NOT NULL,
    "categoryid" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "published_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "Post_pkey" PRIMARY KEY ("postid")
);

-- CreateTable
CREATE TABLE "public"."Tag" (
    "tagid" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("tagid")
);

-- CreateTable
CREATE TABLE "public"."Post_tag" (
    "postid" INTEGER NOT NULL,
    "tagid" INTEGER NOT NULL,

    CONSTRAINT "Post_tag_pkey" PRIMARY KEY ("postid","tagid")
);
