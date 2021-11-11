import React from 'react';
import { Accordion , Card, useAccordionButton } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <button
      type="button"
      onClick={decoratedOnClick}
      className="plus-button">
      {children}
    </button>
  );
}

function Collapse(props) {
  return (
    <Accordion>
      <Card>
        <Card.Header className="d-flex justify-content-between">
          <div>[Label]</div>
          <CustomToggle eventKey="0">
            <FontAwesomeIcon icon={faPlus} className="plus-icon"/>
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
          [content]<br/>
          [content]<br/>
          [content]<br/>
          [content]<br/>
          [content]<br/>
          [content]<br/>
          [content]<br/>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

function FacetCollapse(props) {
  return(<Collapse props={props}/>)
};

export default FacetCollapse;