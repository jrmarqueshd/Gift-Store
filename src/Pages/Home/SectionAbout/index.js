import React from "react";

import { Link } from "react-router-dom";

import { Container } from "../../../components/Wrapper/styles";
import { Button } from "../../../components/Button/styles";
import { Figure, Description, Title, Content, Image } from "./styles";

import bg1 from "../../../assets/images/background-1.png";
import bg2 from "../../../assets/images/background-2.png";

export default function SectionAbout() {
	return (
		<div style={{ backgroundColor: "#F1F1F2" }}>
			<Container className="no-padding">
				<Figure>
					<Description>
						<Title className="destach">
							Find a gift for you wife or girlfriend
						</Title>
						<Content>
							Struggling to find a gift for your wife or girlfriend? No problem!
						</Content>
						<Button>
							<Link to="/">Find gift Now</Link>
						</Button>
					</Description>
					<Image background={bg1} />
				</Figure>
				<Figure>
					<Image background={bg2} />
					<Description>
						<Title>How we work</Title>
						<Content style={{ textAlign: "justify" }}>
							We’ve actually already asked hundreds of women what they want, and
							made a database with the results. All you have to do is take our
							short survey that only takes seconds, and our proprietary
							algorithm will match you with a few perfect gift options.
						</Content>
					</Description>
				</Figure>
			</Container>
		</div>
	);
}
