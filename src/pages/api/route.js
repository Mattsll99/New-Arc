import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/dist/client/components/headers";
import { NextResponse } from "next/server";

export async function GET(req) {
  const supabase = createRouteHandlerClient({cookies})
  const {searchParams} = new URL(req.url)
  const code = searchParams.get('code')

  if (code) {
    await supabase.auth.exchangeCodeForSession(code)
  }

  return NextResponse.redirect(new URL('/MuseEditorPage', req.url))
}