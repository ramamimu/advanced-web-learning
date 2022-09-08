/* eslint-disable react/no-unknown-property */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState, useEffect } from "react";
import { db } from "../../firebase.config";
import { collection, getDocs, updateDoc, doc, addDoc } from "firebase/firestore";

export default function Firestore() {
  const refCollectionFirebase = collection(db, "datas");
  const [dbFirebase, setDbFirebase] = useState([]);
  const [fireLoading, setFireLoading] = useState(true);

  const addFirestoreData = async (x, y) => {
    try {
      await addDoc(refCollectionFirebase, { x: x, y: y });
      console.log("firestore data added successfully");
    } catch (e) {
      console.error("Error adding firestore data", e);
    }
  };

  const fetchFirestore = async () => {
    setFireLoading(true);
    const data = await getDocs(refCollectionFirebase);
    setFireLoading(false);
    setDbFirebase(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    fetchFirestore();
  }, []);

  return (
    <div>
      <h2 className="text-2xl">Firestore</h2>
      <button
        onClick={() => {
          addFirestoreData(Math.random(), Math.random());
        }}
        className="p-2 bg-white text-black mt-2"
      >
        Add Random data
      </button>{" "}
      <br />
      <button
        onClick={() => {
          fetchFirestore();
        }}
        className="p-2 bg-white text-black mt-2"
      >
        Fetch data
      </button>
      {fireLoading ? (
        <div>
          <br />
        </div>
      ) : (
        dbFirebase.map((data) => (
          <div key={data.id}>
            <h3>Same Root</h3>
            <p>id: {data.id}</p>
            <p>x: {data.x}</p>
            <p>y: {data.y}</p>
          </div>
        ))
      )}
    </div>
  );
}
