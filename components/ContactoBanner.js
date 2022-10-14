import React from 'react';
import { Button, Container, Grid, Image } from 'semantic-ui-react';

const ContactoBanner = () => {
	return (
		<Container className="contacto-banner" fluid>
			<Container>
				<Grid columns={16}>
					<Grid.Row>
						<Grid.Column computer={2}>
							<Image src="/contactowhite.svg" alt="Contacto icono"/>
						</Grid.Column>
						<Grid.Column computer={8} verticalAlign="middle">
							<article>
								<h4>PIDENOS UN PRESUPUESTO AHORA</h4>
								<p>SIN COMPROMISOS, PRESUPUESTOS EN MENOS DE 24 HORAS</p>
							</article>
						</Grid.Column>
						<Grid.Column className="contacto-banner__action" computer={5} verticalAlign="middle">
							<Button className="button-seconady-hot">
								Pedir presupuesto
							</Button>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</Container>
	);
};

export default ContactoBanner;