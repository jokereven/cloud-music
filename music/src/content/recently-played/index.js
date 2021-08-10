import { CaretRightOutlined, PlusOutlined } from '@ant-design/icons';
import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators as FooteractionCreators } from '../../common/footer/store';
import { actionCreators } from './store';
import { RecentlyPlayedWapper } from './style';

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
								? historydata.map((item, index) => {
										return (
											<tr
												className='content'
												key={index}
												onClick={() => addtoplay(item.get('id'))}
											>
												<td key={index}>{item.get('name')}</td>
												{item.getIn(['ar']).map((val, index) => {
													return <td key={index + 1}>{val.get('name')}</td>;
												})}
											</tr>
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
			dispatch(FooteractionCreators.AddMusic(musicid));
			dispatch(FooteractionCreators.BannerMusicPlay());
		},
	};
};

export default connect(MapState, MapDispatch)(RecentlyPlayed);
