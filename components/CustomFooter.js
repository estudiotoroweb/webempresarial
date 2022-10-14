import React from 'react';
import { Button, Container, Grid, Image } from 'semantic-ui-react';
import { LOGO_URL , LOGO_DESCRIPTION, FOOTER_DATA} from '../constants/assets';
import { SOCIAL } from "../constants/social";

const CustomFooter = () => {
	return (
		<>
			<Container fluid className="customfooter">
				<Container>
					<Grid columns={16} >
						<Grid.Row>
							<Grid.Column computer={4}>
								<Image className="logo" src={LOGO_URL} alt={LOGO_DESCRIPTION} />
							</Grid.Column>
							<Grid.Column computer={4}>
								<p>Plaza musico espi 10</p>
								<p>hola@estudiok.com</p>
								<p>+34 654470578</p>

								<h5>Datos fiscales</h5>

								<p>Kevin Rivera Ramirez</p>
								<p>Plaza musico espi 10</p>
								<p>España</p>
								<p>+34 654 47 05 78</p>
								<p>hola@estudiok.com</p>

								<div className="social-container">
									{ SOCIAL.map(({ ref },key) => <Image className="icon-social" src={ref} key={key} />)}
								</div>
							</Grid.Column>
							<Grid.Column computer={4}>
								<p>Contacta con nosotros</p>
								<p>Términos y condiciones</p>
								<p>Políticas de privacidad</p>
								<p>FAQ</p>
								<p>Politica de cookies</p>
							</Grid.Column>
							<Grid.Column computer={4}>
								<h5>¿No encuentras lo que buscas? ¿Quieres hacer realidad un producto diferente?</h5>
								<p className="textsimple">
									En la tienda de Cosastudio hemos intentado estandarizar todos nuestros diseños con la posibilidad 
									de personalizarlos. Pero, también puedes utilizar nuestro catálogo como inspiración para diseñar 
									cualquier producto a medida a través de nuestro estudio Archicercle.
								</p>
								<Button className="button-primary-hot">
									Contactar
								</Button>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Container>
			</Container>
			<Container fluid className="secondarycustomfooter">
				<Container>
					<Grid columns={16}>
						<Grid.Row>
							<Grid.Column computer={16}>
								<div className="social-container centered">
									{
										FOOTER_DATA.map((entry,key) => (
											<p className="social-container__mg" key={key}>{entry}</p>
										))
									}
								</div>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Container>
			</Container>
		</>
	);
};

export default CustomFooter;