import styled from "styled-components";

export const HeaderWrapper = styled.header`
	background-color: #fafafa;
	box-shadow: 0 1pt 5pt rgba(0, 0, 0, 0.1);
	height: 120px;
	position: sticky;
	top: 0;
	left: 0;
	width: 100%;

	@media (max-width: 767px) {
		height: 75px;
	}
`;

export const Menu = styled.nav`
	@media (max-width: 767px) {
		background-color: #f7941e;
		color: #fff;
		height: 100vh;
		position: fixed;
		top: 0;
		width: 100%;
		max-width: 320px;
		transition: left 298.7ms ease-in-out;

		button {
			background-color: #fff !important;
			display: block;
			margin: 15px auto 0 !important;

			&:hover {
				color: #f7941e !important;
			}

			&:active {
				background-color: #e5e4e4;
			}
		}
	}

	@media (min-width: 768px) {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex: 1;
	}
`;

export const List = styled.ul`
	@media (min-width: 768px) {
		display: flex;
		align-items: center;
		justify-content: center;
		flex: 1;
	}
`;

export const Item = styled.li``;

export const MenuToggle = styled.button`
	background-color: #fafafa;
	border: 1px solid #f7941e;
	border-radius: 5px;
	box-shadow: 0 1pt 3pt rgba(0, 0, 0, 0.2);
	color: #f7941e;
	display: none;
	align-items: center;
	justify-content: center;
	padding: 12px;
	transition: all 98.7ms ease-in-out;

	&:active {
		background-color: #e5e4e4;
	}

	svg {
		font-size: 1.2rem;
	}

	@media (max-width: 767px) {
		display: flex;
		position: fixed;
		top: 15px;
		right: 15px;
		z-index: 100;
	}
`;
