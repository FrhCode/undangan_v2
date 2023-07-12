import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.message.create({
    data: {
      name: "Mohammad Farhan",
      content:
        "Barakallahu lakuma ✨Semoga Rizqi dan pasangan menjadi keluarga yang bisa mengarungi samudra Mawaddah dan meniti tangga Rohmah, supaya bermukim dipuncak Sakinah ✨🤍",
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
