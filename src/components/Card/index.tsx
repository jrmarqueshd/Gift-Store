import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

import { Figure, Image, Description, Title } from "./styles";
import { CardProps } from "./interfaces";

export default function Card({ title, destachImage, seeMoreLink }: CardProps) {
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
