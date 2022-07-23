import { useMemo } from "react";
import { GetMembersByOrganization } from "./getMembersByOrganization.jsx";
import { MemberCard } from "./memberCard.jsx";

export const MembersList = ({ organization }) => {


    // Usamos el hook useMemo para memorizar el valor de members. Si el padre cambia, pide otro tipo de organization,
    // entonces se vuelve a hacer una nueva petición. En caso contrario, se usa el valor que ya tenía memorizado.
    const members = useMemo( () => GetMembersByOrganization( organization ), [ organization ]);


    return (
        <div className="container mt-5">
          <h1>Members</h1>
          <hr />
          <div className="row rows-cols-1 row-cols-md-3 g-3">
            {members.map(member => (
                <MemberCard key={member.id} {...member} />
            ))}
          </div>
        </div>
      );
}