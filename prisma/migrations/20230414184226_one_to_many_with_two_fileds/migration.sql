-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "favouratedById" TEXT;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_favouratedById_fkey" FOREIGN KEY ("favouratedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
