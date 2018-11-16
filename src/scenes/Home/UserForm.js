/* eslint-disable indent,react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import { Form, Row, Col, Button } from 'antd';
import { AInput } from '../../InputTypes';
import { isValidEmail } from '../../utils/utils';

export class UserForm extends React.Component {
    render() {
        const { submitting, handleSubmit } = this.props;
        return (
            <Form onSubmit={handleSubmit}>
                <Row gutter={16}>
                    <Col span={12}>
                        <Field
                            hasFeedback
                            component={AInput}
                            name="name"
                            placeholder="User Name"
                        />
                    </Col>
                    <Col span={12}>
                        <Field
                            hasFeedback
                            component={AInput}
                            name="email"
                            placeholder="User Email"
                        />
                    </Col>
                </Row>
                <Row gutter={16} style={{ marginTop: 10 }}>
                    <Col span={12}>
                        <Field
                            hasFeedback
                            component={AInput}
                            name="role"
                            placeholder="User Role"
                        />
                    </Col>
                    <Col span={12}>
                        <Field
                            hasFeedback
                            component={AInput}
                            name="observation"
                            placeholder="Observation"
                        />
                    </Col>
                </Row>
                <Row gutter={16} style={{ marginTop: 20 }}>
                    <Button
                        type="primary"
                        size="default"
                        loading={submitting}
                        disabled={submitting}
                        htmlType="submit"
                        style={{ float: 'right', marginRight: 10 }}
                    >
                        Create
                    </Button>
                </Row>
            </Form>
        );
    }
}

UserForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
};

// const validate = (values) => {
//     const errors = {};
//
//     const name = values.get('name');
//     if (!name || name === 'User Name') {
//         errors.name = 'Required';
//     }
//
//     const email = values.get('email');
//     if (!email || isValidEmail(email)) {
//         errors.email = 'Required';
//     }
//
//     return errors;
// };

export default reduxForm({
    form: 'UserForm',
    // validate,
})(UserForm);
