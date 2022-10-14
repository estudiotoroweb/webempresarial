import React from 'react';
import { Container, Grid, Header, Image } from 'semantic-ui-react';

const PorfolioBanner = () => {
	return (
		<Container fluid className='portafoliobanner'>
			<Container>
				<Grid columns={16}>
					<Grid.Row>
						<Grid.Column computer={16}>
							<Header className='portafoliobanner__subtitle subtitle'>
								PROYECTOS
							</Header>
							<Header className='portafoliobanner__title title'>
								Por qué explicartelo,
								cuando te lo podemos enseñar.
							</Header >
							<p className='portafoliobanner__description'>
								Llevamos más de 10 años especializados en crear diseños web personalizados y adaptados a las necesidades de cada uno de nuestros clientes. Trabajamos con todo tipo de clientes y sectores.
							</p>
						</Grid.Column>
						<Grid.Column computer={16}>
							<Grid columns={16}>
								<Grid>
									<Grid.Row>
										<Grid.Column computer={4}>
											<Image className='portafoliobanner__item-img' src="/projects/portafolio1.png" alt="" />
											<h5>Goiko Grill</h5>
										</Grid.Column>
										<Grid.Column computer={4}>
											<Image className='portafoliobanner__item-img' src="/projects/portafolio1.png" alt="" />
											<h5>Goiko Grill</h5>
										</Grid.Column>
										<Grid.Column computer={4}>
											<Image className='portafoliobanner__item-img' src="/projects/portafolio1.png" alt="" />
											<h5>Goiko Grill</h5>
										</Grid.Column>
										<Grid.Column computer={4}>
											<Image className='portafoliobanner__item-img' src="/projects/portafolio1.png" alt="" />
											<h5>Goiko Grill</h5>
										</Grid.Column>
										
									</Grid.Row>
								</Grid>
							</Grid>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</Container>
	);
};

export default PorfolioBanner;