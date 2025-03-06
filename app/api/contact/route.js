import { NextResponse as res } from "next/server";
import { sendEmail } from "@/lib/db.lib";

export const POST = async (req) => {
  const body = await req.json();

  const isSend = await sendEmail(body);
  if (!isSend) return res.json({ success: false }, { status: 500 });

  return res.json({ success: true });
};
