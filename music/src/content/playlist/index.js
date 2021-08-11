import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { ListListWapper, PlayListHeaderWapper, PlayListWapper } from './style';

const { TabPane } = Tabs;

class PlayList extends PureComponent {
	render() {
		const { songListInformation } = this.props;
		return (
			<Fragment>
				<PlayListWapper>
					<PlayListHeaderWapper>
						{songListInformation ? (
							<Fragment>
								<div className='father'>
									<img
										src={songListInformation.getIn(['playlist', 'coverImgUrl'])}
									></img>
									<div className='right'>
										<h3>{songListInformation.getIn(['playlist', 'name'])}</h3>
										<div className='user'>
											<img
												src={songListInformation.getIn([
													'playlist',
													'creator',
													'avatarUrl',
												])}
											></img>
											<span>
												{songListInformation.getIn([
													'playlist',
													'creator',
													'nickname',
												])}
											</span>
											<span className='create'>
												{new Date(
													songListInformation.getIn(['playlist', 'createTime'])
												).toLocaleDateString()}
												创建
											</span>
										</div>
										<div className='label'>
											<span>标签:</span>
											{songListInformation.getIn(['playlist', 'tags'])
												? songListInformation
														.getIn(['playlist', 'tags'])
														.map((val, index) => {
															return <p key={index}>{val}</p>;
														})
												: ''}
										</div>
										<div className='introduce'>
											<span>介绍:</span>
											<span className='txt'>
												{songListInformation.getIn(['playlist', 'description'])}
											</span>
										</div>
									</div>
								</div>
								<Fragment>
									<Tabs defaultActiveKey='1' className='content'>
										<TabPane tab='歌曲列表' key='1'>
											<ListListWapper>
												<table>
													<thead>
														<tr>
															<td>音乐标题</td>
															<td>歌手</td>
															<td>专辑</td>
														</tr>
													</thead>
													{songListInformation
                            ? songListInformation.getIn(['playlist', 'tracks']).map((item,index) => {
                              return (
																<tbody>
																	<tr key={index}>
																		<td>{item.get('name')}</td>
																	</tr>
																</tbody>
															);
                            })
														: ''}
												</table>
											</ListListWapper>
										</TabPane>
										<TabPane tab='评论' key='2'>
											Content of Tab Pane 2
										</TabPane>
										<TabPane tab='收藏者' key='3'>
											Content of Tab Pane 3
										</TabPane>
									</Tabs>
								</Fragment>
							</Fragment>
						) : (
							''
						)}
					</PlayListHeaderWapper>
				</PlayListWapper>
			</Fragment>
		);
	}
	componentDidMount() {
		this.props.getTheSongListInformation(this.props.match.params.id);
	}
}

export const MapState = (state) => {
	return {
		songListInformation: state.getIn(['songList', 'songListInformation']),
	};
};

export const MapDispatch = (dispatch) => {
	return {
		getTheSongListInformation(songoneid) {
			dispatch(actionCreators.getTheSongListInformation(songoneid));
		},
	};
};

export default connect(MapState, MapDispatch)(PlayList);
