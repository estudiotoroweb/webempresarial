import React from 'react';
import { Container, Grid, Button } from 'semantic-ui-react';
import { BANNER_FEATURES } from '../constants/main';

const ToroBanner = () => {
	return (
		<Container fluid className="torobanner">
			<Container>
				<Grid columns="16">
					<Grid.Row>
						<Grid.Column computer={16} className="torobanner__container">
							<section className="torobanner__content">
								<div className="torobanner__hospot">
									<h3>TOROSTUDIOWEB</h3>
									<h4>SU PARTNER IDEAL PARA SU NEGOCIO ONLINE</h4>
									<Button 
										className="button-primary-hot button-black" 
										primary 
										content="Comenzar" 
									/>
								</div>
								<div className="torobanner__hospotsecond">
									<nav>
										{BANNER_FEATURES.map((feature,key) => 
											<li key={key}>{feature}</li>)}
									</nav>
								</div>
							</section>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</Container>
	);
};

export default ToroBanner;