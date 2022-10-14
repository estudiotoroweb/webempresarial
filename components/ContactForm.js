import React from 'react';
import { Button, Container, Grid, Image, Input, TextArea } from 'semantic-ui-react';

const ContactForm = () => {
	return (
		<Container fluid className='contacto'>
			<Container>
				<Grid columns={16}>
					<Grid.Row>
						<Grid.Column computer={8}>
							<Image src="/dude2.svg" alt="Formulario de contacto" />
						</Grid.Column>
						<Grid.Column computer={8} verticalAlign="middle">
							<form>
								<h4>¿Alguna duda?</h4>
								<p>Rellena el formulario y envíanos tu consulta</p>
								<Input className='contacto__input' fluid name="email" placeholder="Correo electronico" />
								<Input className='contacto__input' fluid name="name" placeholder="Nombre" />
								<Input className='contacto__input' fluid name="asunto" placeholder="Asunto" />
								<TextArea className='contacto__textarea' placeholder="Mensaje" />

								<Button className='contacto__send' type="submit">
									Enviar
								</Button>
							</form>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</Container>
	);
};

export default ContactForm;