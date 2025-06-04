import { z } from "zod";

export const postValidation = z.object({
	title: z.string().trim().min(3).max(100),
	content: z.string().trim().min(10).max(1000),
});
