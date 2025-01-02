import { MongoClientSingleton } from "./MongoClientSingleton";
import { MongoError } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const dbName = process.env.MONGODB_DB_NAME;
    const collectionName = process.env.MONGODB_COLLECTION_NAME;

    if (!dbName || !collectionName) {
        return NextResponse.json(
            { error: "Missing database or collection name" },
            { status: 400 }
        );
    }

    const client = await MongoClientSingleton.getClient();
    const collection = client.db(dbName).collection(collectionName);

    try {
        const data = await req.json();
        const result = await collection.insertOne(data);

        return NextResponse.json({
            message: "Document inserted successfully",
            insertedId: result.insertedId,
        });
    }
    catch (err) {
        if (err instanceof MongoError) {
            return NextResponse.json(
                { error: "Database error", details: err.message },
                { status: 500 }
            );
        }
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
