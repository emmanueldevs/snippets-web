// This snippet file was generated by processing the source file:
// ./firestore-next/test.firestore.js
//
// To make edits to the snippets in this file, please edit the source

// [START subcollection_reference_modular]
import { doc, collection } from "firebase/firestore"; 

const messageRef = doc(collection(doc(collection(db, "rooms"), "roomA"), "messages"), "message1");
// [END subcollection_reference_modular]