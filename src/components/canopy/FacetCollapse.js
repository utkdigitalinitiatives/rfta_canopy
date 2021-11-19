import React, { useContext } from 'react'
import {
  Accordion,
  AccordionContext,
  Card,
  useAccordionButton,
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

const FacetCollapse = ({ label, renderContentForLabel }) => (
  <Accordion>
    <Card>
      <Card.Header className="d-flex justify-content-between">
        <div>{label}</div>
        <ContextAwareToggle eventKey="0">
          <FontAwesomeIcon icon={faPlus} />
        </ContextAwareToggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
        <Card.Body>
        {renderContentForLabel}
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
)

const ContextAwareToggle = ({ eventKey, callback }) => {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button
      type="button"
      onClick={decoratedOnClick}
      className="plus-button"
    >
      {isCurrentEventKey ? (
        <FontAwesomeIcon icon={faMinus} />
      ) : (
        <FontAwesomeIcon icon={faPlus} />
      )}
    </button>
  );
}

export default FacetCollapse;
