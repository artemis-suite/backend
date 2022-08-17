import { auth } from "firebase-admin";

type RemoveParams = {
    uid: string
}

export default async function invite({ uid }: RemoveParams) {
    await auth().deleteUser(uid);
}