import { signInWithGoogle } from "../../firebase/providers"
import { checkingCredentials, login, logout } from "./authSlice"

export const startChekingAuth = ( email, password ) => {

    return async ( dispatch ) => {
        dispatch( checkingCredentials( "checking" ) )

    }
}

export const startGoogleSigIn = ( ) => {

    return async ( dispatch ) => {
        dispatch( checkingCredentials( "checking" ) );
        const result = await signInWithGoogle();
        if( !result.ok ) dispatch( logout( result.errorMessage ) )
        dispatch( login( result ) )
        

    }
}