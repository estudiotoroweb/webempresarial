import React from 'react';
import { Header, Image } from 'semantic-ui-react';
import { ABOUT_TEXT } from '../constants/main';

const About = () => {
	return (
		<section className="about">
			<div className="about__article">
				<article>
					<h3 className='subtitle'>¿QUÉ HACEMOS?</h3>
					<p>
						{ABOUT_TEXT}
					</p>
				</article>
			</div>
			<div className="about__media">
				<Image src="/background-about.png" alt="" />
			</div>
		</section>
	);
};

export default About;