-- CreateTable
CREATE TABLE "account" (
    "id" TEXT NOT NULL,
    "bank" TEXT NOT NULL,
    "agency" INTEGER NOT NULL,
    "digit" INTEGER NOT NULL,
    "wallet" DOUBLE PRECISION NOT NULL,
    "accountType" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "account_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "account_userId_key" ON "account"("userId");

-- CreateIndex
CREATE INDEX "account_id_idx" ON "account"("id");

-- CreateIndex
CREATE INDEX "user_id_idx" ON "user"("id");

-- AddForeignKey
ALTER TABLE "account" ADD CONSTRAINT "account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
