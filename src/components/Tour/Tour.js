import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose, faCaretSquareDown } from '@fortawesome/free-solid-svg-icons';

import './Tour.scss';

export default class Tour extends Component {
	state = {
		showInfo: false
	};

	handleInfo = () => {
		this.setState({
			showInfo: !this.state.showInfo
		});
	};

	render() {
		const { id, city, img, name, info } = this.props.tour;
		const { removeTour } = this.props;

		return (
			<article className="tour">
				<div className="img-container">
					<img src={img} alt="gambar" />
					<span className="close-btn" onClick={() => removeTour(id)}>
						<FontAwesomeIcon icon={faWindowClose} />
					</span>
				</div>
				<div className="tour-info">
					<h3>{city}</h3>
					<h4>{name}</h4>
					<h5>
						info
						<span onClick={this.handleInfo}>
							<FontAwesomeIcon icon={faCaretSquareDown} />
						</span>
						{this.state.showInfo && <p>{info}</p>}
					</h5>
				</div>
			</article>
		);
	}
}
