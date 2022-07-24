import React from 'react';
import {MembersList} from "../pods/members/membersList";


export const MembersPage = () => {
    return (
        <>
            <div className="container">
                <h1>Miembros de Lemoncode</h1>
                <MembersList organization={'orangecode'} />
                <MembersList organization={'lemoncode'} />
            </div>

        </>
    )
}