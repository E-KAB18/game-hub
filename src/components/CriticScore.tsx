import { Badge } from "@chakra-ui/react";

interface props {
	score: number;
}

const CriticScore = ({ score }: props) => {
	let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
	return (
		<Badge fontSize="14px" padding={2} borderRadius="4px" colorScheme={color}>
			{score}
		</Badge>
	);
};

export default CriticScore;
