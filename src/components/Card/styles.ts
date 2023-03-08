import styled from "styled-components";

export const Figure = styled.figure`
	margin: 15px;
	width: 100%;
	max-width: 380px;

	@media (min-width: 592px) and (max-width: 820px) {
		max-width: 265px;
	}

	@media (min-width: 1200px) {
		max-width: 270px;
	}
`;

export const Image = styled.img`
	height: 100%;
	object-fit: cover;
	object-position: center;
	width: 100%;
`;

export const Description = styled.figcaption`
	background-color: #fafafa;
	height: 160px;
	transition: all 198.7ms ease-in;

	&:hover {
		background-color: #fff;
		box-shadow: 1pt 1pt 5pt rgba(0, 0, 0, 0.05);

		svg {
			opacity: 1;
		}
	}

	a {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		font-size: 0.875rem;
		height: 100%;
		padding: 15px;
		transition: all 98.7ms ease-in;

		&:hover {
			color: #f7941e;
		}

		div {
			display: flex;
			align-items: center;

			svg {
				font-size: 0.5rem;
			}
		}
	}
`;

export const Title = styled.h4``;
