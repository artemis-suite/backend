import { auth } from "firebase-admin";

type InviteParams = {
    phoneNumber: string,
    displayName: string,
    role: string
}

export default async function invite(params: InviteParams) {
    const fauth = auth();
    const user = await fauth.createUser({
        displayName: params.displayName,
        phoneNumber: params.phoneNumber,
    });
    await fauth.setCustomUserClaims(user.uid, {
        role: params.role,
    });
}