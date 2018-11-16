/* eslint-disable no-mixed-spaces-and-tabs,indent */
import PropsType from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { initialize } from 'redux-form';
import { Button, Col, Modal, Row } from 'antd';

import UserForm from './UserForm';

class Home extends Component {
	static propTypes = {
	}

	static defaultProps = {
	}

	state = {
	    visible: false,
	}

	toggleModal = () => {
	    this.setState({ visible: !this.state.visible });
	}

	render() {
		return (
			<div>
				<Row gutter={16}>
					<Col span={22}>
						<h1>Home</h1>
					</Col>
					<Col span={2} style={{ }}>
						<Button
							type="primary"
							onClick={() => {
							    this.toggleModal();
                                this.props.initForm('UserForm', {});
                            }}
						>
                        Add User
						</Button>
					</Col>
				</Row>
				<Modal
					title="Vertically centered modal dialog"
					centered
					visible={this.state.visible}
					onOk={this.toggleModal}
					onCancel={this.toggleModal}
				>
					<UserForm />
				</Modal>
			</div>
		);
	}
}

Home.propTypes = {
    initForm: PropsType.func.isRequired,
};


function mapDispatchToProps(dispatch) {
    return {
        initForm: (formName, values) => dispatch(initialize(formName, values)),
    };
}

export default connect(null, mapDispatchToProps)(Home);
