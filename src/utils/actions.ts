'use server'

import { redirect } from "next/navigation"
import { createClient } from "./supabase/server"

import { Provider } from "@supabase/auth-js"

const signInWith = async (provider: Provider) => {
    const supabase = await createClient()

    const auth_callback_url = `${process.env.SITE_URL}/auth/callback`

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
            redirectTo: auth_callback_url,
        }
    })

    // console.log(data)

    if(error) {
        console.log(error)
    }

    if (data?.url) {
        redirect(data.url)
    }
}

const signOut = async () => {
    const supabase = await createClient()
    await supabase.auth.signOut()
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const signInWithGoogle = async (formData: FormData) => {
    await signInWith('google')
}

export {signOut}