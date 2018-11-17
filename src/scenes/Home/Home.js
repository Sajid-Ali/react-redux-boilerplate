/* eslint-disable no-mixed-spaces-and-tabs,indent,react/forbid-prop-types,react/require-default-props */
import PropsType from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { initialize } from 'redux-form';
import { Button, Col, Modal, Row, Table } from 'antd';

import UserForm from './UserForm';
import { columns } from '../TableCompnents/columns';
import * as actions from '../../store/home/actions';

class Home extends Component {
	static propTypes = {
	}

	static defaultProps = {
	}

	state = {
	    visible: false,
	}

	onSubmit = (values) => {
		if (values)	this.props.create(values);
	};

  	toggleModal = () => {
    	this.setState({ visible: !this.state.visible });
  	}

	render() {
    const { users } = this.props;
    console.log(users);
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
				  <br />
				  <br />
				  <br />
				<Row gutter={24}>
					<Table
						rowKey="id"
						size="small"
						pagination={false}
						scroll={{ y: 500 }}
						columns={columns(this)}
						dataSource={(users && users) || []}
					/>
				</Row>
				<Modal
					title="Create User Modal"
					centered
					visible={this.state.visible}
					onOk={this.toggleModal}
					onCancel={this.toggleModal}
					footer={[null]}
				>
					<UserForm onSubmit={this.onSubmit} />
				</Modal>
			</div>
		);
	}
}

Home.propTypes = {
    initForm: PropsType.func.isRequired,
  	create: PropsType.func.isRequired,
    users: PropsType.any,
};

const mapStateToProps = state => ({
  users: state.users,
});


function mapDispatchToProps(dispatch) {
    return {
      initForm: (formName, values) => dispatch(initialize(formName, values)),
      create: values => dispatch(actions.create(values)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
