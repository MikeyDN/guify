import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import { eel } from '../../App'

export default function TestList() {
  const [tests, setTests] = useState([])
  useEffect(() => {
    eel.all_tests()(({ tests }) => setTests(tests))
  }, [])

  return (
    <Container id="test-list">
      <ListGroup>
        <form id="test-list-form">
          {tests.map(({ name, requiredParams, description, verbose_name }) => (
            <ListGroup.Item key={name}>
              <Form.Check type="switch" id={name}>
                <Form.Check.Label>
                  <Form.Check.Input
                    type="checkbox"
                    className="test-checkbox"
                    name={name}
                  />
                  <span>
                    {verbose_name ? verbose_name : name}
                    <small className="d-block text-body-secondary">
                      {description}
                    </small>
                  </span>
                </Form.Check.Label>
              </Form.Check>
            </ListGroup.Item>
          ))}
        </form>
      </ListGroup>
    </Container>
  )
}
