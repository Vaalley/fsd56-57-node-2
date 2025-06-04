import { z } from "zod";

export const userRegisterValidation = z.object({
	username: z.string()
		.trim()
		.min(3)
		.max(30),
	email: z.string()
		.trim()
		.email(),
	password: z.string()
		.trim()
		.min(6)
		.max(30)
		.regex(/[0-9]/),
});
