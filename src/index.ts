import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
  const res = await prisma.user.create({
    data: {
        email :username,
        password,
        firstName,
        lastName
    }
  })
  console.log(res);
}

// insertUser("admin1", "123456", "harkirat", "singh")


interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {
  const res = await prisma.user.update({
    where: { email:username },
    data: {
      firstName,
      lastName
    }
  });
  console.log(res);
}

// updateUser("admin1", {
//     firstName: "new name",
//     lastName: "singh"
// })


async function getUser(username: string) {
  const user = await prisma.user.findFirst({
    where: {
        email: username
    }
  })
  console.log(user);
}

getUser("admin1");