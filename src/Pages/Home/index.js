import React from "react";

import SectionAbout from "./SectionAbout";
import SectionServices from "./SectionServices";
import SectionCalltoaction from "./SectionCalltoaction";
import SectionBlog from "./SectionBlog";

export default function Home() {
	return (
		<>
			<SectionAbout />
			<SectionServices />
			<SectionCalltoaction />
			<SectionBlog />
		</>
	);
}
