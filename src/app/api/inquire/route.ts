import { NextResponse } from "next/server";

type InquireBody = {
  name?: string;
  email?: string;
  project?: string;
};

export async function POST(request: Request) {
  let body: InquireBody;

  try {
    body = (await request.json()) as InquireBody;
  } catch {
    return NextResponse.json(
      { message: "Invalid request body." },
      { status: 400 },
    );
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const project = body.project?.trim();

  if (!name || !email || !project) {
    return NextResponse.json(
      { message: "Please fill in every field." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { message: "Please enter a valid email." },
      { status: 400 },
    );
  }

  // In production you could forward this to email, Notion, or a database.
  // For a first Vercel deploy, returning a clean JSON response is enough.
  return NextResponse.json({
    message: `Thanks, ${name}. Your note is on its way north.`,
    received: {
      name,
      email,
      projectLength: project.length,
    },
  });
}
