import { Link } from "react-router-dom";
import { PostProps } from "./interfaces";

import { Figure, Image, Description, Title, Author, Content } from "./styles";

export default function Post({
	author,
	title,
	first,
	destachImage,
	description,
	readMoreLink
}: PostProps) {
	return (
		<Figure first={first}>
			{destachImage ? <Image src={destachImage} /> : ""}
			<Description first={first}>
				<Link to={readMoreLink || ""}>
					<Author>{author ? author : ""}</Author>
					<Title first={first}>{title}</Title>
					<Content>{description ? description : ""}</Content>
					<div>Read More</div>
				</Link>
			</Description>
		</Figure>
	);
}
