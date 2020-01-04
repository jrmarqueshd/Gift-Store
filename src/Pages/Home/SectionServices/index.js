import React from "react";

import { Container } from "../../../components/Wrapper/styles";
import { Title, Content, CardWrapper } from "./styles";
import Card from "../../../components/Card/index";

import birthday from "../../../assets/images/birthday.png";
import anniversary from "../../../assets/images/anniversary.png";
import valentine from "../../../assets/images/valentine.png";
import christmas from "../../../assets/images/christmas.png";

export default function Home() {
	return (
		<>
			<Container className="no-padding">
				<Title>Gifts for all Occasions</Title>
				<Content>
					“Try our web app to find the best gifts for all occasions”
				</Content>
				<CardWrapper>
					<Card title="Birthday" destachImage={birthday} seeMoreLink="/" />
					<Card
						title="Anniversary"
						destachImage={anniversary}
						seeMoreLink="/"
					/>
					<Card
						title="Valentine's Day"
						destachImage={valentine}
						seeMoreLink="/"
					/>
					<Card title="Christmas" destachImage={christmas} seeMoreLink="/" />
				</CardWrapper>
			</Container>
		</>
	);
}
