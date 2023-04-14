import { PrismaClient, User } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
	// const user = await createUser({
	// 	name: "Chandler",
	// 	email: "chandler@gmail.com",
	// 	isAdmin: false,
	// });
	const users = await findAllUsers();
	console.log(users );
}

const createUser = async ({
	name,
	email,
	isAdmin,
}: {
	name: string;
	email: string;
	isAdmin: boolean;
}) => {
	try {
		const user = await prisma.user.create({
			data: {
				name,
				email,
				isAdmin,
			},
		});
		return user;
	} catch (error) {
		console.log(error);
	}
};

const findAllUsers = async() => {
	return await prisma.user.findMany();
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
