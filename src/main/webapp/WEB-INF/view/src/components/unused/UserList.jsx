//will not use this

import React, { useState } from "react";
import User from "./User";

function UserList() {

    const [userList, setUser] = useState([
        { id: 1, name: "Dipto", age: 25 },
        { id: 2, name: "Aunabil", age: 35 },
        { id: 3, name: "Aubinal", age: 45 }
    ]);

    return (
        <div>
            {userList.length > 0
                ? userList.map((user) => <User user={user} />) : 'No user'
            }
        </div>
    );
}

export default UserList;