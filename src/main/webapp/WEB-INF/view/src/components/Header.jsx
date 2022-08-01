import React from "react";
import { Card, CardBody } from "reactstrap";

function Header() {
    return (
        // This will manually center and width half
        // <div className="m-auto align-self-center" style={{ width: '50%', boxShadow: '3px 6px 3px #ccc' }}> 
        <div>
            <Card className="my-2 text-light bg-dark text-center">
                <CardBody>
                    <h3 className="text-center my-4">This is a basic project with react and spring boot</h3>
                </CardBody>
            </Card>
        </div>
    );
};

export default Header;