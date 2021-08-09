import { CaretRightOutlined, PlusOutlined } from '@ant-design/icons';
import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { RecentlyPlayedWapper } from './style';
import { actionCreators as FooteractionCreators } from '../../common/footer/store';

class RecentlyPlayed extends PureComponent {
	render() {
		const { historylist, historydata, addtoplay } = this.props;
		// console.log(historydata);
		return (
			<Fragment>
				<RecentlyPlayedWapper>
					<div id='title'>
						<h2>最近播放</h2>
						<p>共{historylist.length > 0 ? historylist.length : '0'}首</p>
						<div>清空列表</div>
					</div>
					<div id='add'>
						<CaretRightOutlined className='left' />
						<span>播放全部</span>
						<PlusOutlined className='right' />
					</div>
					<table>
						<thead>
							<tr className='title'>
								<td>音乐标题</td>
								<td>歌手</td>
							</tr>
						</thead>
						<tbody>
							{historydata
								? historydata.map((item) => {
										return (
											<div onClick={() => addtoplay(item.get('id'))}>
												<tr className='content'>
													<td>{item.get('name')}</td>
													{item.getIn(['ar']).map((val) => {
														return <td>{val.get('name')}</td>;
													})}
												</tr>
											</div>
										);
								  })
								: ''}
						</tbody>
					</table>
				</RecentlyPlayedWapper>
			</Fragment>
		);
	}
	componentDidMount() {
		this.props.getPlayHistory();
		this.props.getPlayHistoryData();
	}
}

export const MapState = (state) => {
	return {
		historylist: state.getIn(['history', 'playHistoryList']),
		historydata: state.getIn(['history', 'playHistoryData', 'songs']),
	};
};

export const MapDispatch = (dispatch) => {
	return {
		getPlayHistory() {
			dispatch(actionCreators.GetPlayHistory());
		},
		getPlayHistoryData() {
			dispatch(actionCreators.showHistoricalPlay());
		},
		addtoplay(musicid) {
			dispatch(FooteractionCreators.AddMusic(musicid))
			dispatch(FooteractionCreators.BannerMusicPlay());
		}
	};
};

export default connect(MapState, MapDispatch)(RecentlyPlayed);
