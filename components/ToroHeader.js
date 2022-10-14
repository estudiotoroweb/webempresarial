import React from 'react';
import { Button, Container, Grid, Image } from 'semantic-ui-react';
import { LOGO_URL , LOGO_DESCRIPTION} from '../constants/assets';
import { SECONDARY_MENU, MAIN_MENU } from '../constants/navigation';

const ToroHeader = () => {
	return (
		<Container fluid className="toroheader">
				<Grid columns={16}>
					<Grid.Row className="toroheader__secondary">
						<Grid.Column computer={16}>
							<nav>
								{SECONDARY_MENU.map(({ title }, key) => <li key={key}>{title}</li>)}
							</nav>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row className="toroheader__primary">
						<Grid.Column computer={3}>
							<Image className="toroheader__logo" src={LOGO_URL} alt={LOGO_DESCRIPTION} />
						</Grid.Column>
						<Grid.Column computer={10} className="fr-center">
							<nav>
								{MAIN_MENU.map(({ title }, key) => <li key={key}>{title}</li>)}
							</nav>
						</Grid.Column>
						<Grid.Column computer={3} className="fr-center">
							<Button className="button-primary-hot" primary content="COMIENZA YA" />
						</Grid.Column>
					</Grid.Row>
				</Grid>
		</Container>
	);
};

export default ToroHeader;