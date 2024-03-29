import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../config/Firebase'

export const SignIn = () => {

    const signInWithGoogle = async () => {
        await signInWithPopup(auth, provider)
    }

    return (
        <div>
            <button className="flex flex-row items-center bg-gray-100 hover:shadow-lg text-gray-900 font-bold py-2 px-4 rounded-lg" onClick={signInWithGoogle}>
                <img src="https://raw.githubusercontent.com/dependabot-pr/Static-Files/main/Assets/Logo/Google.svg"
                    className="h-6 w-6 mr-2"
                    alt="google logo" />
                Sign in with Google
            </button>
        </div>
    )
}