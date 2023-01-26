
import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const post1 = await prisma.movie.upsert({
    where: { title: 'Avatar' },
    update: {},
    create: {
      title: 'Avatar',
      image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
    },
  });

  const post2 = await prisma.movie.upsert({
    where: { title: 'I Am Legend' },
    update: {},
    create: {
      title: 'I Am Legend',
      image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZTYwMDA0Nzc4._V1_.jpg',
    },
  });

  const post3 = await prisma.movie.upsert({
    where: { title: '300' },
    update: {},
    create: {
      title: '300',
      image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNTg5MzMwMV5BMl5BanBnXkFtZTcwMzA2NTIyMw@@._V1_SX1777_CR0,0,1777,937_AL_.jpg',
    },
  });

  const post4 = await prisma.movie.upsert({
    where: { title: 'The Avengers' },
    update: {},
    create: {
      title: 'The Avengers',
      image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0NjY0NzE4OTReQTJeQWpwZ15BbWU3MDczODg2Nzc@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
    },
  });

  const post5 = await prisma.movie.upsert({
    where: { title: 'The Wolf of Wall Street' },
    update: {},
    create: {
      title: 'The Wolf of Wall Street',
      image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNDIwMDIxNzk3Ml5BMl5BanBnXkFtZTgwMTg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
    },
  });

  const post6 = await prisma.movie.upsert({
    where: { title: 'Interstellar' },
    update: {},
    create: {
      title: 'Interstellar',
      image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NTEwOTMxMV5BMl5BanBnXkFtZTgwMjMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
    },
  });

  const post7 = await prisma.movie.upsert({
    where: { title: 'Game of Thrones' },
    update: {},
    create: {
      title: 'Game of Thrones',
      image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNDc1MGUyNzItNWRkOC00MjM1LWJjNjMtZTZlYWIxMGRmYzVlXkEyXkFqcGdeQXVyMzU3MDEyNjk@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
    },
  });

  const post8 = await prisma.movie.upsert({
    where: { title: 'Vikings' },
    update: {},
    create: {
      title: 'Vikings',
      image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNDc1MGUyNzItNWRkOC00MjM1LWJjNjMtZTZlYWIxMGRmYzVlXkEyXkFqcGdeQXVyMzU3MDEyNjk@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
    },
  });

  const post9 = await prisma.movie.upsert({
    where: { title: 'Gotham' },
    update: {},
    create: {
      title: 'Gotham',
      image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNDI3ODYyODY4OV5BMl5BanBnXkFtZTgwNjE5NDMwMDI@._V1_SY1000_SX1500_AL_.jpg',
    },
  });

  const post10 = await prisma.movie.upsert({
    where: { title: 'Power' },
    update: {},
    create: {
      title: 'Power',
      image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTc2ODg0MzMzM15BMl5BanBnXkFtZTgwODYxODA5NTE@._V1_SY1000_SX1500_AL_.jpg',
    },
  });

  const post11 = await prisma.movie.upsert({
    where: { title: 'Narcos' },
    update: {},
    create: {
      title: 'Narcos',
      image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2MDMzMTc0MF5BMl5BanBnXkFtZTgwMTAyMzA1OTE@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
    },
  });

  const post12 = await prisma.movie.upsert({
    where: { title: 'Breaking Bad' },
    update: {},
    create: {
      title: 'Breaking Bad',
      image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgyMzI5NDc5Nl5BMl5BanBnXkFtZTgwMjM0MTI2MDE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg',
    },
  });

  const post13 = await prisma.movie.upsert({
    where: { title: 'Doctor Strange' },
    update: {},
    create: {
      title: 'Doctor Strange',
      image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3ODc1ODI5Ml5BMl5BanBnXkFtZTgwODMzMDY3OTE@._V1_.jpg',
    },
  });

  const post14 = await prisma.movie.upsert({
    where: { title: 'Rogue One: A Star Wars Story' },
    update: {},
    create: {
      title: 'Rogue One: A Star Wars Story',
      image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3MzA4Nzk3NV5BMl5BanBnXkFtZTgwNjAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg',
    },
  });

  const post15 = await prisma.movie.upsert({
    where: { title: `Assassin's Creed` },
    update: {},
    create: {
      title: `Assassin's Creed`,
      image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BN2EyYzgyOWEtNTY2NS00NjRjLWJiNDYtMWViMjg5MWZjYjgzXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg',
    },
  });

  const post16 = await prisma.movie.upsert({
    where: { title: 'Luke Cage' },
    update: {},
    create: {
      title: 'Luke Cage',
      image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjc1NjI0NV5BMl5BanBnXkFtZTgwNzA0NzY0ODE@._V1_SY1000_CR0,0,1497,1000_AL_.jpg',
    },
  });

  

  console.log({ post1, post2, post3, post4, post5, post6, post7, post8, post9, post10, post11, post12, post13, post14, post15, post16 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });