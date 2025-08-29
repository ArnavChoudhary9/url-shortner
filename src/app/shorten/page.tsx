import PocketBase from "pocketbase";

export default async function Shorten() {
  const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);

  const res = await fetch(`${process.env.NEXT_PUBLIC_POCKETBASE_URL}/auth`, {
    "credentials": "include"
  })
  const { record, token } = await res.json();
  pb.authStore.save(token, record);

  return (
    <div>
      <p>User: {record?.email}</p>
    </div>
  );
}
