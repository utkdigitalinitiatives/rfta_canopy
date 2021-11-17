import React from 'react';
import { Accordion , Card, useAccordionButton } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const FacetCollapse = ({ label, renderContentForLabel }) => (
  <Accordion>
    <Card>
      <Card.Header className="d-flex justify-content-between">
        <div>{label}</div>
        <CustomToggle eventKey="0">
          <FontAwesomeIcon icon={faPlus} className="plus-icon"/>
        </CustomToggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
        <Card.Body>
        {renderContentForLabel}
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
)

const CustomToggle = ({ children, eventKey }) => {
  const decoratedOnClick = useAccordionButton(eventKey)

  return (
    <button
      type="button"
      onClick={decoratedOnClick}
      className="plus-button">
      {children}
    </button>
  );
}

export default FacetCollapse;
