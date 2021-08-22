// Import FirebaseAuth and firebase.
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { auth, firebaseEmailAuthProvider } from '../firebase/firebase'
import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext'
import { FavouritesContext } from '../contexts/FavouritesContext'
import { db } from '../firebase/firebase'

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/signedIn',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebaseEmailAuthProvider.PROVIDER_ID,
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
};

function SignInScreen() {
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  const [user, setUser] = useContext(UserContext)


  const [favouriteState, favouriteDispatch] = useContext(FavouritesContext)

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = auth.onAuthStateChanged( async user => {
      setIsSignedIn(!!user)
      setUser(user)

      if (user) {
        // setup a user collection in the firestore database
        db.collection("users").doc(user.uid).set({
          displayName: user.displayName
        }) 
        // retrieve the pokemon collection of the logged in user
        const pokemonCollection = await db.collection("users").doc(user.uid).collection("pokemon").get()

        console.log("USER: ", user.uid)

        // add each pokemon to the favourites context
        pokemonCollection.docs.forEach(pokemon => favouriteDispatch({
          type: "ADD_POKEMON",
          payload: {
            pokemon: {
              uid: pokemon.id,
              ...pokemon.data()
            },
            user
          }
        }))  
      } else {
        favouriteDispatch({ type: "CLEAR_POKEMON" })
      }

    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  if (!isSignedIn) {
    return (
      <div>
        <h1>My App</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
      </div>
    );
  }
  return (
    <div>
      <h1>My App</h1>
      <p>Welcome {auth.currentUser.displayName}! You are now signed-in!</p>
      <a onClick={() => auth.signOut()}>Sign-out</a>
    </div>
  );
}

export default SignInScreen