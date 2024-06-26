import {
  Avatar,
  Box,
  Button,
  Flex,
  Skeleton,
  SkeletonCircle,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const PostHeader = ({ img, name }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 3000);
  }, []);

  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
      my={2}
    >
      <Flex alignItems={"center"} gap={2}>
        {isLoading ? (
          <SkeletonCircle size="10" />
        ) : (
          <Avatar size="xs" name={name} src={img} />
        )}
        {isLoading ? (
          <Flex fontSize={12} fontWeight={"bold"} gap="2">
            <Skeleton w={"100px"} h={"10px"} />
          </Flex>
        ) : (
          <Flex fontSize={12} fontWeight={"bold"} gap="2">
            <h6>{name}</h6>
            <Box color={"gray.500"}>• 1m ago</Box>
          </Flex>
        )}
      </Flex>
      <Box cursor={"pointer"}>
        <Button
          size={"xs"}
          bg={"transparent"}
          fontSize={12}
          color={"blue.500"}
          fontWeight={"bold"}
          _hover={{
            color: "white",
          }}
          transition={"0.2s ease-in-out"}
          onClick={() => setIsFollowing((prev) => !prev)}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </Button>
      </Box>
    </Flex>
  );
};

export default PostHeader;
