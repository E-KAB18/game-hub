import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import getCropedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import PlatfromsIconList from "./PlatfromsIconList";

interface props {
	game: Game;
}
const GameCard = ({ game }: props) => {
	return (
		<Card>
			<Image src={getCropedImageUrl(game.background_image)} />
			<CardBody>
				<HStack justifyContent="space-between" marginBottom={3}>
					<PlatfromsIconList
						platforms={game.parent_platforms.map((p) => p.platform)}
					/>
					<CriticScore score={game.metacritic} />
				</HStack>
				<Heading fontSize="2xl">{game.name}</Heading>
			</CardBody>
		</Card>
	);
};

export default GameCard;
