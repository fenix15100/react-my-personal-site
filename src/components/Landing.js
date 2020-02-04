import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'
import Quotes from './Quotes'
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
                    <div className="text-block">
                        {loading
                        ?<Spinner className="spinload" animation="grow" variant="info"/>
                        :
                         <Quotes/>
                        }    
                    </div>       
                </Col>       
            </Row>    
    );
}

export default Landing;