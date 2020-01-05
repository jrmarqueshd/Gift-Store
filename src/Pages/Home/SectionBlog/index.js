import React from "react";

import { Container } from "../../../components/Wrapper/styles";
import Post from "../../../components/Post/index";
import { Title, Content, PostWrapper } from "./styles";

import postImage from "../../../assets/images/postImage.png";

export default function SectionBlog() {
	return (
		<>
			<Container style={{ paddingBottom: "80px" }} className="no-padding">
				<Title>Our Best Blogs Ever</Title>
				<Content>
					“Try our blog to find the best tips and tricks to select your gift”
				</Content>
				<PostWrapper>
					<Post
						first={true}
						author="Mr. John Doe"
						title="The best way to wish your wife"
						destachImage={postImage}
						readMoreLink="/"
					/>
					<Post
						title="Database to find the gifts for your girlfriend"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore..."
						readMoreLink="/"
					/>
					<Post
						title="How Artificial Intelligence read your mind to find the best gift"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore..."
						readMoreLink="/"
					/>
				</PostWrapper>
			</Container>
		</>
	);
}
