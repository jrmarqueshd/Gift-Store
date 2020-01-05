import styled from "styled-components";

export const Button = styled.button`
	background-color: #f7941e;
	border: 1px solid #f7941e;
	border-radius: 5px;
	color: #fff;
	text-transform: uppercase;
	transition: all 98.7ms ease-in-out;

	&:hover {
		background-color: transparent;
		border-color: #f7941e;
		color: #f7941e;
	}

	&.inverse {
		background-color: #231f20;
		border-color: #231f20;

		&:hover {
			background-color: transparent;
			color: #231f20;
		}
	}

	&.outline {
		background-color: transparent;
		border-color: #f7941e;
		color: #f7941e;

		&:hover {
			background-color: #f7941e;
			color: #fff;
		}

		&.outline-inverse {
			border-color: #231f20;
			color: #231f20;

			&:hover {
				background-color: #231f20;
				color: #fff;
			}
		}
	}
`;
