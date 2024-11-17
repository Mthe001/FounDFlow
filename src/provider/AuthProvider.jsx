

import React, { createContext, useState, useEffect } from 'react';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    updateProfile,
} from 'firebase/auth';
import app from '../firebase/firebase.config';

// Initialize Firebase Authentication
const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // User state
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Login status state
    const [loading, setLoading] = useState(true); // Loading state to handle async state changes

    const googleProvider = new GoogleAuthProvider(); // Google Auth Provider

    // Monitor authentication state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                // Check and update user data if displayName or photoURL are missing
                const updatedUser = {
                    uid: currentUser.uid,
                    email: currentUser.email,
                    displayName: currentUser.displayName || 'User',
                    photoURL: currentUser.photoURL || 'https://via.placeholder.com/150', // Default image if missing
                };

                setUser(updatedUser);
                setIsLoggedIn(true);
            } else {
                // User is logged out, clear state
                setUser(null);
                setIsLoggedIn(false);
            }
            setLoading(false); // Loading completed
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    const fetchSignInMethods = async (email) => {
        try {
            const methods = await fetchSignInMethodsForEmail(auth, email);
            return methods;
        } catch (error) {
            console.error("Error fetching sign-in methods: ", error.message);
            throw new Error(error.message);
        }
    };

    // Register function (create new user)
    const signUp = async (email, password, displayName, photoURL) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const currentUser = userCredential.user;

            // Update the profile with displayName and photoURL
            await updateProfile(currentUser, {
                displayName,
                photoURL,
            });

            // Refresh user data in state
            setUser({
                uid: currentUser.uid,
                email: currentUser.email,
                displayName,
                photoURL,
            });

            console.log('User signed up and profile updated:', currentUser);
            return currentUser;
        } catch (error) {
            console.error('Error during sign-up:', error.message);
            throw new Error(error.message);
        }
    };

    // Login function (sign in existing user)
    const signIn = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const currentUser = userCredential.user;

            // Set the user info (default displayName if missing)
            setUser({
                uid: currentUser.uid,
                email: currentUser.email,
                displayName: currentUser.displayName || 'User',
                photoURL: currentUser.photoURL || 'https://via.placeholder.com/150',
            });

            console.log('User signed in:', currentUser);
            return currentUser;
        } catch (error) {
            console.error('Error during sign-in:', error.message);
            throw new Error(error.message);
        }
    };

    // Google Sign-In function
    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const currentUser = result.user;

            // Set the user info (default displayName if missing)
            setUser({
                uid: currentUser.uid,
                email: currentUser.email,
                displayName: currentUser.displayName || 'User',  // Google profile name if available
                photoURL: currentUser.photoURL || 'https://via.placeholder.com/150', // Default placeholder if missing
            });

            console.log('User signed in with Google:', currentUser);
            return currentUser;
        } catch (error) {
            console.error('Error during Google sign-in:', error.message);
            throw new Error(error.message);
        }
    };

    // Password Reset function
    const sendPasswordReset = async (email) => {
        try {
            await sendPasswordResetEmail(auth, email);
            console.log('Password reset email sent');
        } catch (error) {
            console.error('Error during password reset:', error.message);
            throw new Error(error.message);
        }
    };

    // Logout function
    const logOut = async () => {
        try {
            await signOut(auth);
            setUser(null);
            setIsLoggedIn(false);
            console.log('User logged out');
        } catch (error) {
            console.error('Error during logout:', error.message);
            throw new Error(error.message);
        }
    };

    // Context value to provide to children components
    const authInfo = {
        user,
        isLoggedIn,
        signUp,
        signIn,
        signInWithGoogle,
        sendPasswordReset,
        logOut,
        loading,
    };

    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
