import React from 'react';
import {PrivateRouter} from "../core/router/privateRouter";
import {MembersList} from "../pods/members/membersList";

export const SearchPage = () => {
    return (
        <>
            <MembersList organization={'orangecode'} />
            <h1>Search Page</h1>
        </>
    )
}