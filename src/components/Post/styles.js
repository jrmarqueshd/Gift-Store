import styled from "styled-components";

export const Figure = styled.figure`
	display: flex;
	padding: 15px;

	@media (max-width: 492px) {
		flex-wrap: wrap;
		text-align: center;
	}

	@media (min-width: 768px) {
		width: ${props => (props.first ? "100%" : "50%")};
	}
`;

export const Image = styled.img`
	object-fit: cover;
	object-position: center;

	@media (max-width: 492px) {
		width: 100%;
	}

	@media (min-width: 493px) and (max-width: 767px) {
		width: 50%;
	}
`;

export const Description = styled.figcaption`
	background-color: ${props => (props.first ? "#231f20" : "transparent")};
	color: ${props => (!props.first ? "#231f20" : "#fff")};
	padding: 15px;
	transition: box-shadow 98.7ms ease-in-out;
	width: 100%;

	&:hover {
		box-shadow: 5pt 5pt 5pt 5pt rgba(0, 0, 0, 0.1);
	}

	a {
		&:hover {
			& > * {
				color: #f7941e;
			}
		}
	}

	@media (max-width: 492px) {
		div {
			margin-top: ${props => (!props.first ? "15px" : "0")};
			margin-bottom: 15px;
		}
	}

	@media (min-width: 493px) and (max-width: 767px) {
		padding-top: 30px;
		width: ${props => (!props.first ? "100%" : "50%")};

		div {
			@media (min-width: 493px) and (max-width: 767px) {
				padding-top: ${props => (!props.first ? "30px" : "0")};
			}
		}
	}

	@media (min-width: 768px) {
		a {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			height: 100%;
			padding: 40px;
		}

		div {
			padding-top: ${props => (!props.first ? "30px" : "0")};
		}
	}
`;

export const Author = styled.mark`
	background-color: transparent;
	font-size: 0.875rem;
`;

export const Title = styled.h4`
	font-size: ${props => (props.first ? "2.66rem" : "1.33rem")};
	font-weight: ${props => (!props.first ? "700" : "400")};
	margin-top: 40px;
	margin-bottom: ${props => (props.first ? "60px" : "15px")};
	max-width: 474px;

	@media (max-width: 492px) {
		margin-top: 15px;
		margin-bottom: ${props => (props.first ? "30px" : "15px")};
	}

	@media (min-width: 493px) and (max-width: 767px) {
		margin-top: 25px;
		margin-bottom: ${props => (props.first ? "25px" : "15px")};
	}

	@media (min-width: 768px) {
		font-size: ${props => (props.first ? "3rem" : "1.33rem")};
	}
`;

export const Content = styled.p``;
