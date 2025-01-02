import { NextResponse, NextRequest } from "next/server";
import { MongoClientSingleton } from "./MongoClientSingleton";
import { MongoError } from "mongodb";

export async function GET(req: NextRequest) {
    const dbName = process.env.MONGODB_DB_NAME;
    const collectionName = process.env.MONGODB_COLLECTION_NAME;

    if (!dbName || !collectionName) {
        return NextResponse.json(
            { error: "Missing database or collection name" },
            { status: 400 }
        );
    }

    try {
        const client = await MongoClientSingleton.getClient();
        const collection = client.db(dbName).collection(collectionName);

        const url = new URL(req.url);
        const chunkSize = parseInt(url.searchParams.get("chunkSize") || "0");
        const maxRow = parseInt(url.searchParams.get("maxRow") || "0");
        const maxColumn = parseInt(url.searchParams.get("maxColumn") || "0");

        // Validate chunking parameters
        if (chunkSize <= 0 || maxRow <= 0 || maxColumn <= 0) {
            return NextResponse.json(
                { error: "Invalid chunking parameters" },
                { status: 400 }
            );
        }

        // Apply chunking logic
        const documents = await collection
            .find({})
            .skip(chunkSize * maxRow) // Pagination logic
            .limit(chunkSize) // Limit the number of documents
            .toArray();

        return NextResponse.json({ documents, chunkSize, maxRow, maxColumn }, { status: 200 });
    }
    catch (err) {
        if (err instanceof MongoError) {
            return NextResponse.json(
                { error: "Database error", details: err.message },
                { status: 500 }
            );
        }
        return NextResponse.json(
            { error: "Internal server error", details: err.message as typeof Error },
            { status: 500 }
        );
    }
}
