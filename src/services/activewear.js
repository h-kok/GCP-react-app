import { db } from "../firebase";

import {
    collection,
    getDocs,
    doc,
    getDoc,
    updateDoc,
    increment,
} from "firebase/firestore";

export const getAllActivewear = async () => {
    const querySnapshot = await getDocs(collection(db, "activewear"));
    // console.log(querySnapshot.docs);

    const data = querySnapshot.docs.map((doc) => {
        // console.log(doc.id, " => ", doc.data());
        const id = doc.id;
        const restOfData = doc.data();
        return { id, ...restOfData };
    });
    // console.log(data);
    return data;
};

export const getActivewearById = async (id) => {
    const docRef = doc(db, "activewear", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        // console.log(docSnap);
        // console.log("Document data:", docSnap.data());
        return { id: docSnap.id, ...docSnap.data() };
    } else {
        throw new Error("Doc not found");
    }
};

export const updateActivewear = async (id, dataObj) => {
    const docRef = doc(db, "activewear", id);
    await updateDoc(docRef, dataObj);
};

export const updateQuantity = async (id, n) => {
    const docRef = doc(db, "activewear", id);
    await updateDoc(docRef, {
        quantity: increment(n),
    });
};
