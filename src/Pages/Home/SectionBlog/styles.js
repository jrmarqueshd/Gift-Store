import styled from "styled-components";

export const Title = styled.h2`
	padding-top: 100px;
	padding-right: 15px;
	padding-left: 15px;
	text-align: center;
	width: 100%;

	@media screen {
		padding-top: 80px;
	}
`;

export const Content = styled.p`
	margin-bottom: 60px;
	padding-right: 15px;
	padding-left: 15px;
	text-align: center;
	width: 100%;
`;

export const PostWrapper = styled.section`
	display: flex;
	flex-wrap: wrap;
	margin: 0 auto;
	width: 100%;
	max-width: 1170px;
`;
