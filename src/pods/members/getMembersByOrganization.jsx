
import React from 'react';
import { members } from '../../data/members.data.js';


export const GetMembersByOrganization = ( organization ) => {
    const validOrganization = ['lemoncode', 'orangecode'];
    if (!validOrganization.includes(organization)) {
        throw new Error(`${organization} is not a valid organization`);
    }

    return members;
}