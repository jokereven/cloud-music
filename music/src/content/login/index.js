import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { actionCreators } from '../../content/login/store';
import { LoginWapper } from './style';

class Login extends PureComponent {
	render() {
		const { tologin, loginstatus } = this.props;
		if (!loginstatus) {
			return (
				<Fragment>
					<LoginWapper>
						<div className='form'>
							<label htmlFor='account'>手机号:</label>
							<input
								id='account'
								required
								ref={(input) => {
									this.account = input;
								}}
							></input>
							<br />
							<label htmlFor='password'>密码:</label>
							<input
								id='password'
								required
								type='password'
								ref={(input) => {
									this.password = input;
								}}
							></input>
							<br />
							<button onClick={() => tologin(this.account, this.password)}>
								提交
							</button>
						</div>
					</LoginWapper>
				</Fragment>
			);
		} else {
			return (
				<Fragment>
					<Redirect to='/individuation' />;
				</Fragment>
			);
		}
	}
}
export const MapStateToProps = (state) => {
	return {
		loginstatus: state.getIn(['login', 'login']),
	};
};
export const MapDispatchToProps = (dispatch) => {
	return {
		tologin(accountElem, passwordElem) {
			dispatch(actionCreators.login(accountElem.value, passwordElem.value));
		},
	};

};
export default connect(MapStateToProps, MapDispatchToProps)(Login);
