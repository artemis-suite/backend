import { auth } from "firebase-admin";


type ListParams = {
    pageSize?: number,
    pageToken?: string
}

export default async function list({ pageSize = 25, pageToken }: ListParams) {
    const result = await auth().listUsers(pageSize, pageToken);
    return {
        members: result.users.map(u => ({
            uid: u.uid,
            displayName: u.displayName,
            photoURL: u.photoURL,
            role: u.customClaims && u.customClaims["role"],
            lastLoginDate: u.metadata.lastRefreshTime,
        })),
        pageToken: result.pageToken,
    }
}