import { HStack, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreItemSkeleton = () => {
	return (
		<ListItem paddingY="5px">
			<HStack>
				<Skeleton boxSize="32px" borderRadius={8} />
                <SkeletonText/>
			</HStack>
		</ListItem>
	);
};

export default GenreItemSkeleton;
