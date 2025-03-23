
import Button from "@/components/ui/Button";
import { signOut } from "@/utils/actions";
import { createClient } from "@/utils/supabase/server";
import Image from "next/image";

export default async function Home() {
  const supabase = await createClient();
  const session = await supabase.auth.getUser();

  if (!session.data.user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl md:text-8xl text-zinc-100/20 font-bold mb-6">
          Not logged in
        </h1>
        <Button variant="redirect" href="/login">
          Login
        </Button>
      </div>
    );
  }

  const {
    data: {
      user: { user_metadata, app_metadata },
    },
  } = session;

  const { name, email, user_name, avatar_url } = user_metadata;
  const username = user_name ? `@${user_name}` : "Username not set";

  return (
    <main className="min-h-screen py-12">
      <div className="container px-4 flex flex-col items-center justify-center">
        {/* Greeting Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            Welcome, {name}!
          </h1>
          <p className="mt-2 text-lg">{username}</p>
        </div>

        {/* User Details Card */}
        <div className="max-w-sm flex flex-col justify-center items-center bg-[#1b1b1b] rounded-lg p-8 space-y-4">
          {avatar_url && (
            <div className="">
              <Image
                src={avatar_url}
                alt="Avatar"
                width={150}
                height={150}
                className="rounded-full size-16"
                quality={100}
              />
            </div>
          )}
          <div className="text-center">
            <p>
              <span className="font-semibold">Email:</span> {email}
            </p>
            <p className="">
              <span className="font-semibold">Provider:</span> {app_metadata.provider}
            </p>
          </div>
          {/* Logout Button */}
          <div className="">
            <form action={signOut}>
              <button
                className="cursor-pointer px-4 py-2 rounded-md border transition-all duration-200 focus:outline-none w-full sm:w-auto border-red-500 text-red-500 hover:bg-red-500/30 hover:text-white"
                type="submit">logout</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
