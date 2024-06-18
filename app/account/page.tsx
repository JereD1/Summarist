"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { initFirebase } from "../firebase";
import { getAuth } from "firebase/auth";


export default function AccountPage() {

    const app = initFirebase();
    const auth = getAuth(app);

    const signOut = () => {
        auth.signOut();
        
      };

      const signOutButton = (
        <button
          onClick={signOut}
          className="hover:underline text-slate-500 hover:text-slate-300 text-lg text-center"
        >
          <div className="flex gap-2 items-center align-middle justify-center">
            Sign Out
          </div>
        </button>
      );

  return (
    <div>
      hello from login page
    </div>
  )
}
