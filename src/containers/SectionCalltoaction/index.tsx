import { Link } from "react-router-dom";

import { Container } from "../../components/Wrapper/styles";
import { Button } from "../../components/Button/styles";
import { Title, Wrapper } from "./styles";

export default function SectionCalltoaction() {
	return (
		<div
			style={{
				backgroundColor: "#F7941E",
				paddingTop: "80px",
				paddingBottom: "80px"
			}}
		>
			<Container className="no-padding">
				<Wrapper>
					<Title>
						<strong>Ready to get started?</strong>
						<br />
						Sign up or contact us
					</Title>

					<span
						className="wrapper-button"
						style={{ textAlign: "center", display: "block" }}
					>
						<Button
							style={{
								marginTop: "15px",
								marginRight: "15px",
								marginLeft: "15px"
							}}
							className="inverse"
						>
							<Link to="#">Find gift now</Link>
						</Button>
						<Button
							style={{
								marginTop: "15px",
								marginRight: "15px",
								marginLeft: "15px"
							}}
							className="outline outline-inverse"
						>
							<Link to="#">How it works</Link>
						</Button>
					</span>
				</Wrapper>
			</Container>
		</div>
	);
}
