import React from 'react';
import { Container, Grid, Header, Image } from 'semantic-ui-react';
import { SERVICES_TEXT } from '../constants/main';

const Services = () => {
	return (
		<Container className="services">
			<Grid columns="16">
				<Grid.Row className="services__align">
					<Grid.Column computer={16}>
						<Header subheader textAlign="center" className="subtitle">
						¿QUÉ HACEMOS?
						</Header>
						<Header textAlign="center" className="services__title title">
							Diseño web y marketing digital para empresas que quieren sobresalir.
						</Header>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row className="services__align">
					{
						SERVICES_TEXT.map((entry,key) => (
							<Grid.Column computer={4} key={key}>
								<Image src={entry.image} alt={entry.title} />
								<h4>{entry.title}</h4>
								<p>{entry.description}</p>
								<span>Ir a nombre servivcio</span>
							</Grid.Column>
						))
					}
				</Grid.Row>
			</Grid>
		</Container>
	);
};

export default Services;