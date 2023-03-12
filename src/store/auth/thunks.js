import { checkingCredentials } from "./authSlice"

export const startChekingAuth = ( email, password ) => {

    return async ( dispatch ) => {
        dispatch( checkingCredentials( "checking" ) )

    }
}

export const startGoogleSigIn = ( ) => {

    return async ( dispatch ) => {
        dispatch( checkingCredentials( "checking" ) )
    }
}