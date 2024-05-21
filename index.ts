import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  //   //create user
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "Babina",
  //       email: "babina@gmail.com",
  //     },
  //   });

  //get users
  const users = await prisma.user.findMany({ include: { articles: true } });

  //create an article and associate it with users
  //   const article = await prisma.article.create({
  //     data: {
  //       title: "John First Article",
  //       body: "This is john first article",
  //       author: {
  //         connect: {
  //           id: 1,
  //         },
  //       },
  //     },
  //   });

  //get all articles
//   const articles = await prisma.article.findMany();

  //create user and article  and associate them
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "Sam",
  //       email: "sam@gmail.com",
  //       articles: {
  //         create: {
  //           title: "Sam first article",
  //           body: "This is Sam's first article",
  //         },
  //       },
  //     },
  //   });

  //   create another article
  //   const article = await prisma.article.create({
  //     data: {
  //       title: "Sample Article",
  //       body: "This is a sample  article",
  //       author: {
  //         connect: {
  //           id: 2,
  //         },
  //       },
  //     },
  //   });

  //   // loop over saras articles
  //   users.forEach((user) => {
  //     console.log(`user name : ${user.name},email : ${user.email}`);
  //     console.log("Articles:");
  //     user.articles.forEach((article) => {
  //       console.log(`-Title: ${article.title}, Body: ${article.body}`);
  //     });
  //     console.log("\n");
  //   });

  //update data
  //   const user = await prisma.user.update({
  //     where: {
  //       id: 1,
  //     },
  //     data: {
  //       name: "Sabina",
  //     },
  //   });

  //remove data
//   const article = await prisma.article.delete({
//     where: {
//       id: 2,
//     },
//   });

  console.log(users);
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
