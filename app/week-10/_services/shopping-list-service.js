import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, deleteDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
    const items = [];
    const q = query(collection(db, 'users', userId, 'items'));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
    });

    return items;
};

export const addItem = async (userId, item) => {
    const docRef = await addDoc(collection(db, 'users', userId, 'items'), item);
    return docRef.id;
};

export const deleteItem = async (userId, itemId) => {
    try {
        const itemRef = doc(db, "users", userId, "items", itemId);
        await deleteDoc(itemRef);
        console.log(`Item with id ${itemId} deleted successfully`);
    } catch (error) {
        console.error("Error deleting item: ", error);
    }
};
