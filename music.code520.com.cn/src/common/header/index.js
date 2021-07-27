import { ZoomInOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
	HeaderFireBox,
	HeaderWapper,
	HeaderWapperLogo,
	HeaderWapperSearch,
} from './style';

class Header extends PureComponent {
	render() {
		return (
			<Fragment>
				<HeaderWapper>
					<HeaderWapperLogo>
						<div></div>
						<p>音乐</p>
					</HeaderWapperLogo>
					<HeaderWapperSearch>
						<Input
							placeholder='请输入要搜索的内容'
							onFocus={this.props.handleInputFocus}
							onBlur={this.props.handleInputBlur}
						/>
						<ZoomInOutlined
							style={{ marginLeft: '-24px', lineHeight: '32px' }}
						/>
						<HeaderFireBox
							className={this.props.focused ? 'focused' : ''}
						></HeaderFireBox>
					</HeaderWapperSearch>
				</HeaderWapper>
			</Fragment>
		);
	}
}

const MapStateToProps = (state) => {
	return {
		focused: state.getIn(['header', 'focused']),
	};
};

const MapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus() {
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur());
		},
	};
};

export default connect(MapStateToProps, MapDispatchToProps)(Header);
