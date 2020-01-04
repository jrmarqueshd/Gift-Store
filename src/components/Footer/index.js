import React from "react";

import { Link } from "react-router-dom";
import {
	TiSocialFacebook,
	TiSocialTwitter,
	TiSocialInstagram,
	TiSocialYoutube,
	TiSocialPinterest
} from "react-icons/ti";

import { Logo } from "../Logo/styles";
import { Container } from "../Wrapper/styles";
import {
	FooterWrapper,
	Menu,
	List,
	Item,
	SocialWrapper,
	Icon,
	Copyrights
} from "./styles";

export default function Footer() {
	function setReleaseYear(since) {
		let date = new Date();
		let year = date.getUTCFullYear(-3);

		return since === year ? `${year} ` : `${since} - ${year} `;
	}

	return (
		<FooterWrapper>
			<Container>
				<Menu>
					<List>
						<Item>
							<Link to="/">Home</Link>
						</Item>
						<Item>
							<Link to="/about">About</Link>
						</Item>
						<Item>
							<Link to="/">
								<Logo>Logo</Logo>
							</Link>
						</Item>
						<Item>
							<Link to="/service">Service</Link>
						</Item>
						<Item>
							<Link to="/blog">Blog</Link>
						</Item>
					</List>

					<SocialWrapper>
						<Icon href="#">
							<TiSocialFacebook />
						</Icon>
						<Icon href="#">
							<TiSocialTwitter />
						</Icon>
						<Icon href="#">
							<TiSocialInstagram />
						</Icon>
						<Icon href="#">
							<TiSocialYoutube />
						</Icon>
						<Icon href="#">
							<TiSocialPinterest />
						</Icon>
					</SocialWrapper>
				</Menu>

				<Copyrights>&copy; {setReleaseYear(2010)} Privacy - Terms</Copyrights>
			</Container>
		</FooterWrapper>
	);
}
