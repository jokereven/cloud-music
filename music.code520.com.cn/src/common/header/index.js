import {
	GithubOutlined,
	ReadOutlined,
	RedditOutlined,
	UserOutlined,
	ZoomInOutlined,
	GooglePlusOutlined,
} from '@ant-design/icons';
import { Input } from 'antd';
import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
	HeaderFireBox,
	HeaderFireBoxWare,
	HeaderLoginWapper,
	HeaderSearchBox,
	HeaderSearchBoxWare,
	HeaderWapper,
	HeaderWapperLogo,
	HeaderWapperSearch,
	LoginWapperGitee,
	LoginWapperGithub,
	LoginWapperWarp,
	HeaderCenter
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
			changelist_songs,
			inputvalue,
			changelist_songer,
			changelist_albums,
		} = this.props;
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
							className={`${focused ? 'focused' : ''} + '' + ${
								searchenter ? 'searchenter' : ''
							}`}
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
						<HeaderSearchBox id={onchange ? 'onchange' : ''}>
							<span>搜索"{inputvalue}"相关结果&gt;</span>
							<HeaderSearchBoxWare>
								<div id='songs'>
									<RedditOutlined
										style={{
											lineHeight: '32px',
											float: 'left',
										}}
									/>
									<p className='songs'>单曲</p>
								</div>
								<span className='songs_box'>
									{changelist_songs
										? changelist_songs.map((item, index) => {
												return (
													<div id='songs_box'>
														<div className='songs_name' key={index}>
															-{item.get('name')}
															{
																<span className='songs_songer'>
																	{item.getIn(['artists']).map((content) => {
																		return <div>{content.get('name')}</div>;
																	})}
																</span>
															}
														</div>
													</div>
												);
										  })
										: ''}
								</span>
								<div id='songer'>
									<UserOutlined
										style={{
											lineHeight: '32px',
											float: 'left',
										}}
									/>
									<p className='songs'>歌手</p>
								</div>
								<span className='songer_box'>
									{changelist_songer
										? changelist_songer.map((item) => {
												return (
													<div className='songer_name'>{item.get('name')}</div>
												);
										  })
										: ''}
								</span>
								<div id='albums'>
									<ReadOutlined
										style={{
											lineHeight: '32px',
											float: 'left',
										}}
									/>{' '}
									<p className='songs'>专辑</p>
								</div>
								<span className='albums'>
									{changelist_albums
										? changelist_albums.map((item) => {
												return (
													<div className='albums_name'>{item.get('name')}</div>
												);
										  })
										: ''}
								</span>
							</HeaderSearchBoxWare>
						</HeaderSearchBox>
					</HeaderWapperSearch>
					<HeaderLoginWapper>
						<a href='/individuation/login' target="_self">
							<LoginWapperWarp className='son'>
								<UserOutlined
									style={{
										color: '#fff',
										lineHeight: '32px',
										display: 'block',
										textAlign: 'center',
									}}
								/>
							</LoginWapperWarp>
						</a>
						<a
							href='http://github.com/jokereven/code520'
							target='_new'
							title='github'
						>
							<LoginWapperGithub className='son'>
								<GithubOutlined
									style={{
										color: '#fff',
										lineHeight: '32px',
										display: 'block',
										textAlign: 'center',
									}}
								/>
							</LoginWapperGithub>
						</a>
						<a
							href='http://gitee.com/jokereven/code520'
							target='_new'
							title='gitee'
						>
							<LoginWapperGitee className='son'>
								<GooglePlusOutlined
									style={{
										color: '#fff',
										lineHeight: '32px',
										display: 'block',
										textAlign: 'center',
									}}
								/>
							</LoginWapperGitee>
						</a>
					</HeaderLoginWapper>
					<HeaderCenter>
						生活到处是磨难，为难我的人多了，你算老几。
					</HeaderCenter>
				</HeaderWapper>
			</Fragment>
		);
	}
}

const MapStateToProps = (state) => {
	return {
		focused: state.getIn(['header', 'focused']),
		firelist: state.getIn(['header', 'firelist']),
		changelist_songs: state.getIn(['header', 'changelist', 'songs']),
		onchange: state.getIn(['header', 'onchange']),
		searchenter: state.getIn(['header', 'searchenter']),
		inputvalue: state.getIn(['header', 'inputvalue']),
		changelist_songer: state.getIn(['header', 'changelist', 'artists']),
		changelist_albums: state.getIn(['header', 'changelist', 'albums']),
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
			dispatch(
				actionCreators.ChangeList(event.target.defaultValue, event.target.value)
			);
		},
		handleOver() {
			dispatch(actionCreators.searchOver());
		},
		handleOut() {
			dispatch(actionCreators.searchOut());
		},
	};
};

export default connect(MapStateToProps, MapDispatchToProps)(Header);
