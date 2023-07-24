import {
	Button,
	HStack,
	Image,
	List,
	ListItem,
	Spinner,
	Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCropedImageUrl from "../services/image-url";
import GenreItemSkeleton from "./GenreItemSkeleton";

interface props {
	onSelectGenre: (genre: Genre) => void;
}
const GenreList = ({ onSelectGenre }: props) => {
	const { data, isLoading, error } = useGenres();
	const skeletons = [1, 2, 3, 4, 5, 6];

	if (error) return null;
	// if (isLoading) return <Spinner />;
	return (
		<List>
			{isLoading &&
				skeletons.map((skeleton) => <GenreItemSkeleton key={skeleton} />)}

			{data.map((genre) => (
				<ListItem key={genre.id} paddingY="5px">
					<HStack>
						<Image
							boxSize="32px"
							borderRadius={8}
							src={getCropedImageUrl(genre.image_background)}
						/>
						<Button
							fontSize="lg"
							variant="link"
							onClick={() => onSelectGenre(genre)}
						>
							{genre.name}
						</Button>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
