import React from 'react';
import { Row, Col } from 'react-bootstrap';



const ExperienceCard = ({ data }) => {
  return (
    <div className="pb-5">
      <Row className="align-items-center"> {/* align-items-center ensures that the items are vertically aligned to the center */}
        
        {/* Image Column */}
        <Col className="text-center">
          <img className="bg-white mb-3" src={data.companylogo} alt={data.company} style={{ maxWidth: '50%' }} />
        </Col>
        <Col>
          <p className="lead text-center">
            {data.role}
            <br />
            {data.company}
            <br />
            {data.date}
            <br />
            <ul className="text-center">
              {data.description.map((item, index) => (
                <li>{item.line}</li>
              ))}
            </ul>
            </p>
        </Col>
      </Row>
    </div>
  );
}

export default ExperienceCard;