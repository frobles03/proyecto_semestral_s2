import mongoose from "mongoose";
import { MONGO_URI } from "./environment.js";

export default function connectDB() {
	return mongoose
		.connect(MONGO_URI)
		.then(async () => {
			console.log("MongoDB connected successfully");
			await registerModels();
			return true;
		})
		.catch((error) => {
			console.log(`MongoDB not connected. Error: ${error}`);
			return false;
		});
}

/**
 * Optional: In this method u can import all models in order to force register collections in database
 */
async function registerModels() {
	await import("../models/product.model.js");
	await import("../models/address.model.js");
	await import("../models/job.model.js");
	await import("../models/user.model.js");
}