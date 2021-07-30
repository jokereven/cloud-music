import { Button, Form, Input } from 'antd';
import 'antd/dist/antd.css';
import React, { Fragment, PureComponent } from 'react';
import {LoginWapper} from './style'

class Login extends PureComponent {
	render() {
		const onFinish = (values) => {
			console.log('Success:', values);
		};

		const onFinishFailed = (errorInfo) => {
			console.log('Failed:', errorInfo);
		};
		return (
			<Fragment>
				<LoginWapper>
					<Form
						style={{
							border: '1px solid #ddd',
							margin: '45px auto',
							width: '275px',
							height: '250px',
							boxShadow: '0 0 1px #ddd',
							borderRadius: '4px',
						}}
						name='basic'
						labelCol={{
							span: 8,
						}}
						wrapperCol={{
							span: 16,
						}}
						initialValues={{
							remember: true,
						}}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
					>
						<Form.Item
							style={{ marginTop: '12px', marginRight: '16px' }}
							label='手机号'
							name='username'
							rules={[
								{
									required: true,
									message: '请输入手机号',
								},
							]}
						>
							<Input />
						</Form.Item>

						<Form.Item
							style={{ marginTop: '12px', marginRight: '16px' }}
							label='密码'
							name='password'
							rules={[
								{
									required: true,
									message: '请输入密码',
								},
							]}
						>
							<Input.Password />
						</Form.Item>

						<Button
							type='primary'
							htmlType='submit'
							style={{ margin: '12px auto', display: 'block' }}
						>
							提交
						</Button>
					</Form>
				</LoginWapper>
			</Fragment>
		);
	}
}

export default Login;
