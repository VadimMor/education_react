import React from 'react';
import PropTypes from 'prop-types';

class Burger extends React.Component {
	static propTypes = {
		details: PropTypes.shape({
			image: PropTypes.string,
			name: PropTypes.string,
			price: PropTypes.number,
			desc: PropTypes.string,
			status: PropTypes.string
		}),
		index: PropTypes.string,
		addToOrder: PropTypes.func
	};

	render() {
		const isAvailable = this.props.details.status ==='available'

		return (
			<li className='menu-burger'>
				<div className='image-container'>
					<img src={this.props.details.image} alt='img_food' />
				</div>

				<div className='burger-details'>
					<h3 className='burger-name'>
						{this.props.details.name}
						<span className='price'>{this.props.details.price} ₽</span>
					</h3>

					<p>{this.props.details.desc}</p>

					<button
					className='buttonOrder'
					disabled={!isAvailable}
					onClick={() => this.props.addToOrder(this.props.index)}
					>
						{isAvailable ? 'Заказать' : 'Временно нет'}
					</button>
				</div>
			</li>
		)
	}
}


export default Burger;