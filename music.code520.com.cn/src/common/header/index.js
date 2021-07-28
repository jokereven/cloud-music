import { ZoomInOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from './store';
import {
	HeaderFireBox,
	HeaderFireBoxWare,
	HeaderWapper,
	HeaderWapperLogo,
	HeaderWapperSearch,
} from './style';

class Header extends PureComponent {
	render() {
		const {
			handleInputFocus,
			handleInputBlur,
			focused,
			firelist,
			handleKeyDown,
			handleChange,
			onchange,
			handleOver,
			handleOut,
			searchenter,
		} = this.props;
		return (
			<Fragment>
				<HeaderWapper>
					<Link to='/individuation'>
						<HeaderWapperLogo>
							<div></div>
							<p>音乐</p>
						</HeaderWapperLogo>
					</Link>
					<HeaderWapperSearch>
						<Input
							placeholder='请输入要搜索的内容'
							onFocus={() => handleInputFocus(firelist)}
							onChange={handleChange}
							onBlur={handleInputBlur}
							onKeyDown={handleKeyDown}
						/>
						<ZoomInOutlined
							style={{ marginLeft: '-24px', lineHeight: '32px' }}
						/>
						<HeaderFireBox
							onMouseOver={handleOver}
							onMouseOut={handleOut}
							className={
								`${focused ? 'focused' : ''} + '' + ${searchenter ? 'searchenter' : ''}`
							}
							id={onchange ? 'onchange' : ''}
						>
							{firelist.map((item, index) => {
								return (
									<HeaderFireBoxWare key={index}>
										<span>{index + 1}</span>
										<div>
											<h3>{item.get('searchWord')}</h3>
											<p className='number'>{item.get('score')}</p>
											<p className='content'>{item.get('content')}</p>
										</div>
									</HeaderFireBoxWare>
								);
							})}
						</HeaderFireBox>
					</HeaderWapperSearch>
				</HeaderWapper>
			</Fragment>
		);
	}
}

const MapStateToProps = (state) => {
	return {
		focused: state.getIn(['header', 'focused']),
		firelist: state.getIn(['header', 'firelist']),
		changelist: state.getIn(['header', 'changlist']),
		onchange: state.getIn(['header', 'onchange']),
		searchenter: state.getIn(['header', 'searchenter']),
	};
};

const MapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus(firelist) {
			if (firelist.size === 0) {
				dispatch(actionCreators.GetFireList());
			}
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur());
		},
		handleKeyDown(event) {
			if (event.keyCode === 13) {
				dispatch(actionCreators.SearchList(event.target.defaultValue));
			}
		},
		handleChange(event) {
			if (event.target.value === '') {
				dispatch(actionCreators.NotOnChange());
			}
			if (event.target.value !== '') {
				dispatch(actionCreators.OnChange());
			}
			dispatch(actionCreators.ChangeList(event.target.defaultValue));
		},
		handleOver() {
			console.log('over');
			dispatch(actionCreators.searchOver());
		},
		handleOut() {
			console.log('out');
			dispatch(actionCreators.searchOut());
		},
	};
};

export default connect(MapStateToProps, MapDispatchToProps)(Header);
