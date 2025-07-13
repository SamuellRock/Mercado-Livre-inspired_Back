-- CreateTable
CREATE TABLE "Produto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "precoDesconto" REAL NOT NULL,
    "precoParcelado" REAL NOT NULL,
    "caracteristicas" TEXT NOT NULL,
    "imagens" TEXT NOT NULL,
    "estoque" INTEGER NOT NULL,
    "freteGratis" BOOLEAN NOT NULL DEFAULT false,
    "full" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "Pedido" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "valorTotal" REAL NOT NULL,
    "itensVenda" TEXT NOT NULL
);
