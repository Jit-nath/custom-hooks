import { MongoClient } from "mongodb";

// MongoClient Singleton class to ensure a single connection across invocations
class MongoClientSingleton {
    private static client: MongoClient | null = null;

    private constructor() { }

    public static async getClient(): Promise<MongoClient> {
        if (!process.env.MONGODB_URI) {
            throw new Error("Missing MONGODB_URI in environment variables");
        }

        // For serverless environments like Vercel, we want to reuse the connection
        if (!MongoClientSingleton.client) {
            MongoClientSingleton.client = new MongoClient(process.env.MONGODB_URI, {
                maxPoolSize: 50
            });
            await MongoClientSingleton.client.connect();
        }

        return MongoClientSingleton.client;
    }

    public static async closeConnection() {
        try {
            if (MongoClientSingleton.client) {
                console.log("Closing MongoDB connection...");
                await MongoClientSingleton.client.close();
                console.log("MongoDB connection closed.");
            }
        } catch (error) {
            console.error(error);
        } finally {
            process.exit(0);
        }
    }
}

// Graceful shutdown on SIGINT or SIGTERM
process.on("SIGINT", () => MongoClientSingleton.closeConnection());
process.on("SIGTERM", () => MongoClientSingleton.closeConnection());

export { MongoClientSingleton };
