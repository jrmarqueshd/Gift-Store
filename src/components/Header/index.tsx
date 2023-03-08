import { useState } from "react";

import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import { Logo } from "../Logo/styles";
import { Container } from "../Wrapper/styles";
import { Button } from "../Button/styles";
import { HeaderWrapper, Menu, List, Item, MenuToggle } from "./styles";

export default function Header() {
	const [toggle, setToggle] = useState(false);

	function toggleMenu() {
		setToggle(!toggle);
	}

	return (
		<HeaderWrapper>
			<Container
				style={{
					alignItems: "center",
					justifyContent: "space-between"
				}}
			>
				<Logo className="inverse">Logo</Logo>
				<Menu style={toggle ? { left: "0" } : { left: "-100%" }}>
					<List>
						<Item>
							<Link
								onClick={() => {
									toggleMenu();
								}}
								to="/"
							>
								Home
							</Link>
						</Item>
						<Item>
							<Link
								onClick={() => {
									toggleMenu();
								}}
								to="/about"
							>
								About Us
							</Link>
						</Item>
						<Item>
							<Link
								onClick={() => {
									toggleMenu();
								}}
								to="/services"
							>
								Services
							</Link>
						</Item>
						<Item>
							<Link
								onClick={() => {
									toggleMenu();
								}}
								to="/blog"
							>
								Blog
							</Link>
						</Item>
					</List>
					<Button className="outline">
						<Link
							onClick={() => {
								toggleMenu();
							}}
							to="/"
						>
							Gift Finder
						</Link>
					</Button>
				</Menu>
			</Container>

			<MenuToggle
				onClick={() => {
					toggleMenu();
				}}
			>
				{toggle ? <AiOutlineClose /> : <AiOutlineMenu />}
			</MenuToggle>
		</HeaderWrapper>
	);
}
