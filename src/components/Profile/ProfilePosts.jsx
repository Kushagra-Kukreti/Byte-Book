import { Box, Flex, Grid, Skeleton, Text, VStack } from "@chakra-ui/react";
import ProfilePost from "./ProfilePost";
import { useEffect, useState } from "react";

const ProfilePosts = () => {
  const [loading, setLoading] = useState(true);
  const [noPostsFound, setNoPostsFound] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setNoPostsFound(false);
    }, 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  if (noPostsFound) return <NoPostsFound />;

  return (
    <Grid
      templateColumns={{
        sm: "repeat(1, 1fr)",
        md: "repeat(3, 1fr)",
      }}
      gap={1}
      columnGap={1}
    >
      {loading ? (
        <>
          <VStack alignItems={"flex-start"} gap={4}>
            <Skeleton w={"full"}>
              <Box h="300px">contents wrapped</Box>
            </Skeleton>
          </VStack>
          <VStack alignItems={"flex-start"} gap={4}>
            <Skeleton w={"full"}>
              <Box h="300px">contents wrapped</Box>
            </Skeleton>
          </VStack>
          <VStack alignItems={"flex-start"} gap={4}>
            <Skeleton w={"full"}>
              <Box h="300px">contents wrapped</Box>
            </Skeleton>
          </VStack>
          <VStack alignItems={"flex-start"} gap={4}>
            <Skeleton w={"full"}>
              <Box h="300px">contents wrapped</Box>
            </Skeleton>
          </VStack>
        </>
      ) : (
        <>
          <ProfilePost image={"/img1.jpg"} />
          <ProfilePost image={"/img2.jpg"} />
          <ProfilePost image={"/img3.jpg"} />
          <ProfilePost image={"/img4.jpg"} />
        </>
      )}
    </Grid>
  );
};

export default ProfilePosts;

const NoPostsFound = () => {
  return (
    <Flex flexDir="column" textAlign={"center"} mx={"auto"} mt={10}>
      <Text fontSize={"2xl"}>No Posts Found🤔</Text>
    </Flex>
  );
};
