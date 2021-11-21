const aut = firebase.auth ();
const provider = new firebase.auth.GoogleAuthProvider();

auth.languageCode = "es";

export async function login() {
    try {
        const response = await aut.signInWithPopup(provider);
        console.log(response);
        return response.user;
    } catch (error) {
        throw new Error (error);
    }
}


export function logout() {
    aut.signOut();
}
