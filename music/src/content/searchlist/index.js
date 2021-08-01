import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
// 获取路由参数
import { withRouter } from 'react-router-dom';
import {
	SearchListWapper,
	SearchListWapperAlbum,
	SearchListWapperFlv,
	SearchListWapperPlaylist,
	SearchListWapperSinger,
	SearchListWapperSingle,
	SearchListWapperSingleList,
} from './style';
const { TabPane } = Tabs;

class SearchList extends PureComponent {
	render() {
		const { searchsinglelist } = this.props;
		return (
			<Fragment>
				<SearchListWapper>
					<span className='search_title'>
						搜索"{this.props.match.params.key}", 找到
						{searchsinglelist ? searchsinglelist.size : ''}首单曲
					</span>
					<Tabs defaultActiveKey='1' style={{ marginLeft: '26px' }}>
						<TabPane tab='单曲' key='1'>
							<SearchListWapperSingle>
								{searchsinglelist
									? searchsinglelist.map((item, index) => {
											return (
												<SearchListWapperSingleList>
													<td>{index}</td>
													<td>{item.get('name')}</td>
													{item.getIn(['ar']).map((content) => {
														return <td>{content.get('name')}</td>;
													})}
													<td>{item.getIn(["al", "name"])}</td>
													<td>{item.get("dt")}</td>
												</SearchListWapperSingleList>
											);
									  })
									: ''}
							</SearchListWapperSingle>
						</TabPane>
						<TabPane tab='歌手' key='2'>
							<SearchListWapperSinger></SearchListWapperSinger>
						</TabPane>
						<TabPane tab='歌单' key='3'>
							<SearchListWapperPlaylist></SearchListWapperPlaylist>
						</TabPane>
						<TabPane tab='专辑' key='4'>
							<SearchListWapperAlbum></SearchListWapperAlbum>
						</TabPane>
						<TabPane tab='MV' key='5'>
							<SearchListWapperFlv></SearchListWapperFlv>
						</TabPane>
					</Tabs>
				</SearchListWapper>
			</Fragment>
		);
	}
	componentDidMount() {
		this.props.tosearchlist(this.props.match.params.key);
	}
}

const MapStateToProps = (state) => {
	return {
		searchsinglelist: state.getIn([
			'searchlist',
			'searchsinglelist',
			'result',
			'songs',
		]),
	};
};

const MapDispatchToProps = (dispatch) => {
	return {
		tosearchlist(key) {
			dispatch(actionCreators.ToSearchSingleList(key));
		},
	};
};

export default connect(
	MapStateToProps,
	MapDispatchToProps
)(withRouter(SearchList));
