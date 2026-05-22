import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.createMany({
    data: [
      { name: "Alice", email: "alice@example.com" },
      { name: "Bob", email: "bob@example.com" },
    ],
    skipDuplicates: true,
  });

  const products = await prisma.product.createMany({
    data: [
      { name: "Notebook", description: "14-inch", priceCents: 350000 },
      { name: "Mouse", description: "Wireless", priceCents: 12000 },
    ],
    skipDuplicates: true,
  });

  // eslint-disable-next-line no-console
  console.log({ usersInserted: users.count, productsInserted: products.count });
}

main()
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.error(e);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
