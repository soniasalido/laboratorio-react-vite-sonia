import React from 'react';
import {MembersList} from "../pods/members/membersList";


export const MembersPage = () => {
    return (
        <>
            <MembersList organization={'lemoncode'} />
            <h1>Members Page Details</h1>
        </>
    )
}