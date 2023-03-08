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
	padding-right: 15px;
	padding-left: 15px;
	text-align: center;
	width: 100%;
`;

export const CardWrapper = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	padding-top: 60px;
	padding-bottom: 60px;
	width: 100%;
`;
