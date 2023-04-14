import { PrismaClient, User } from "@prisma/client";
import { create } from "domain";
const prisma = new PrismaClient();

// await createUser({
// 	name: "Chandler",
// 	age: 34,
// 	email: "chandler@gmail.com",
// });

async function main() {
	const users =  await findAllUsers();
	console.log(users[0]);
}

const createUser = async ({ name, age, email }: any) => {
	const user = await prisma.user.create({
		data: {
			name,
			age,
			email,
		},
	});
	return user;
};

const createPost = async ({ title, averageRating, authorId }: any) => {
	const post = await prisma.post.create({
		data: {
			title,
			averageRating,
			authorId,
		},
	});
	return post;
};

const findAllUsers = async () => {
	return await prisma.user.findMany({
		include: {
			posts: true
		}
	});
};

const findAllPosts = async () => {
	return await prisma.post.findMany();
};

const deleteAllUsers = async () => {
	await prisma.user.deleteMany();
};

const deleteAllPosts = async () => {
	await prisma.post.deleteMany();
};

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
