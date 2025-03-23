"use client"

import Button from "@/components/ui/Button"
import { signInWithGoogle } from "@/utils/actions"

export default function LoginPage() {
    

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <form>
                <Button variant="login"  formAction={signInWithGoogle}>
                    Sign In With Google
                </Button>
            </form>
        </div>
    )
}