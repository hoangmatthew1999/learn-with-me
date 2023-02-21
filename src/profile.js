import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';

export function Profile(){
    return(
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Linked List</Accordion.Header>
                <Accordion.Body>
                    A collection of data which has a data value and a next node
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )

}