import React, { useEffect } from "react";
import { Button, Container } from 'reactstrap';

function Home() {

    useEffect(()=>{
        document.title = "Home";
    }, []);

    return(
    <div className="text-center">   
        <h3>Home Page</h3>
        <p>Some contents for the home page</p>

        <Container>
            <Button color="primary">Start Using</Button>
        </Container>
    </div>
    );
};

export default Home;