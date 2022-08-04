
import React from 'react';
<<<<<<<< HEAD:src/pods/members/useMembersApiByOrganization.jsx
========

>>>>>>>> dev:src/pods/members/UseMembersApiByOrganization.jsx
import {useEffect} from "react";

// Ejemplo de cómo obtener los datos de una organización -->
// Los datos están una API en la url de github

<<<<<<<< HEAD:src/pods/members/useMembersApiByOrganization.jsx
export const useMembersApiByOrganization = (organization ) => {
========
export const UseMembersApiByOrganization = (organization ) => {
>>>>>>>> dev:src/pods/members/UseMembersApiByOrganization.jsx
    const gitHubMembersUrl =  `https://api.github.com/orgs/${organization}/members`;

    const [ members, setMembers ] = React.useState([]);


    useEffect(() => {
        fetch(gitHubMembersUrl)
            .then(response => response.json())
            .then(data => {
                setMembers(data);
            }).catch(error => {
                console.log(error);
            }
            );
    }, [organization]);

    return members;
}