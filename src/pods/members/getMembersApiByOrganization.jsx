
import React from 'react';
import { members } from '../../data/members.MockData.js';

// Ejemplo de cómo obtener los datos de una organización -->
// Los datos están una API en la url de github

export const GetMembersApiByOrganization = (organization ) => {
    const gitHubMembersUrl =  `https://api.github.com/orgs/${organization}/members`;

    fetch(gitHubMembersUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            return data;
        });
}