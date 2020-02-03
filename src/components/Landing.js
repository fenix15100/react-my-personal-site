import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'
import './css/Landing.css'


const Landing = () => {
    const [loading,isLoading] = useState(true);

    useEffect(()=>{
        setTimeout(() => {
            isLoading(false)
            
        }, 3500);

    },[])
    

    return (
            <Row className="landing-grid">
                <Col sm={12}>
                    <section className="text-block">
                        {loading
                        ?<Spinner className="spinload" animation="grow" variant="info"/>
                        :<h2>Hi, my name is Francisco</h2>
                        }    
                    </section>       
                </Col>       
            </Row>    
    );
}

export default Landing;