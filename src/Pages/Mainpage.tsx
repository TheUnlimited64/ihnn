import { Box } from "@mui/material";
import * as React from "react";
import CreateQuestion from "../Components/CreateQuestion";
import ButtonAppBar from "../Components/Header";
import AboutIHNN from "../Components/AboutIHNN";
import PrepareGame from "./PrepareGame";

export default function Mainpage() {
	return (
		<>
			<Box>
				{/* <AboutIHNN /> */}
				<Box>
					<PrepareGame />
				</Box>
			</Box>
		</>
	);
}
