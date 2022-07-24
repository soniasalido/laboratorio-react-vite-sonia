
import React from 'react';
import { members } from '../../data/members.data.js';


export const GetMembersByOrganization = ( organization ) => {
    const validOrganization = ['lemoncode', 'orangecode'];
    if (!validOrganization.includes(organization)) {
        return null;
    }else {
        return members.filter(member => member.organization === organization);
    }

}