import { auth } from "firebase-admin";


type ReassignParams = {
    uid: string,
    role: string
}

export default async function reassign(params: ReassignParams) {
    const fauth = auth();
    await fauth.setCustomUserClaims(params.uid, {
        role: params.role,
    });
    await fauth.revokeRefreshTokens(params.uid);
}