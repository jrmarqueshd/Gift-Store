import React from "react";

import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

import { Figure, Image, Description, Title } from "./styles";

export default function Card({ title, destachImage, seeMoreLink }) {
	return (
		<Figure>
			<Image src={destachImage} />
			<Description>
				<Link to={seeMoreLink}>
					<Title>{title}</Title>
					<div>
						See More <IoIosArrowForward />
					</div>
				</Link>
			</Description>
		</Figure>
	);
}
