import * as functions from 'firebase-functions';

import membersListFunc from "./features/members/list";
import membersInviteFunc from "./features/members/invite";
import membersReassignFunc from "./features/members/reassign";
import membersRemoveFunc from "./features/members/remove";

//#region [members]

export const membersList = functions.https.onCall(membersListFunc);
export const membersInvite = functions.https.onCall(membersInviteFunc);
export const membersReassign = functions.https.onCall(membersReassignFunc);
export const membersRemove = functions.https.onCall(membersRemoveFunc);

//#endregion