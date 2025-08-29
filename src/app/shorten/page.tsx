'use client'

import PocketBase from "pocketbase";
import { useEffect, useMemo } from "react";

export default function Shorten() {
  const pb = useMemo(() => new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL), []);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_POCKETBASE_URL}/auth`, {
        "credentials": "include"
      })
      const { record, token } = await res.json();
      pb.authStore.save(token, record);
    }

    fetchData();
  }, [pb]);

  return (
    <div>
      <p>User: {pb.authStore.record?.email}</p>
    </div>
  );
}
