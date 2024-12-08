import { db } from "@/utils/db";
import { GRADES } from "@/utils/schema";
import { desc } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(req) {
  const result = await db.select().from(GRADES);
  return NextResponse.json(result);
}
