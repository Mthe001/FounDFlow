// src/provider/AuthProvider.js
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

const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                const updatedUser = {
                    uid: currentUser.uid,
                    email: currentUser.email,
                    displayName: currentUser.displayName || 'User',
                    photoURL: currentUser.photoURL || 'https://via.placeholder.com/150',
                };
                setUser(updatedUser);
                setIsLoggedIn(true);
            } else {
                setUser(null);
                setIsLoggedIn(false);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const updateUserProfile = async (updatedProfile) => {
        try {
            const currentUser = auth.currentUser;
            if (currentUser) {
                await updateProfile(currentUser, {
                    displayName: updatedProfile.displayName,
                    photoURL: updatedProfile.photoURL,
                });
                // Update the user state with the new profile data
                setUser({
                    ...user,
                    displayName: updatedProfile.displayName,
                    photoURL: updatedProfile.photoURL,
                });
            }
        } catch (error) {
            console.error("Error updating profile:", error.message);
        }
    };

    const signUp = async (email, password, displayName, photoURL) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const currentUser = userCredential.user;
            await updateProfile(currentUser, { displayName, photoURL });
            setUser({
                uid: currentUser.uid,
                email: currentUser.email,
                displayName,
                photoURL,
            });
            return currentUser;
        } catch (error) {
            throw new Error(error.message);
        }
    };

    const signIn = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const currentUser = userCredential.user;
            setUser({
                uid: currentUser.uid,
                email: currentUser.email,
                displayName: currentUser.displayName || 'User',
                photoURL: currentUser.photoURL || 'https://via.placeholder.com/150',
            });
            return currentUser;
        } catch (error) {
            throw new Error(error.message);
        }
    };

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const currentUser = result.user;
            setUser({
                uid: currentUser.uid,
                email: currentUser.email,
                displayName: currentUser.displayName || 'User',
                photoURL: currentUser.photoURL || 'https://via.placeholder.com/150',
            });
            return currentUser;
        } catch (error) {
            throw new Error(error.message);
        }
    };

    const sendPasswordReset = async (email) => {
        try {
            await sendPasswordResetEmail(auth, email);
        } catch (error) {
            throw new Error(error.message);
        }
    };

    const logOut = async () => {
        try {
            await signOut(auth);
            setUser(null);
            setIsLoggedIn(false);
        } catch (error) {
            throw new Error(error.message);
        }
    };

    const authInfo = {
        user,
        isLoggedIn,
        signUp,
        signIn,
        signInWithGoogle,
        sendPasswordReset,
        logOut,
        updateUserProfile,
        loading,
    };

    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
