import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  Text,
  VStack,
} from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import { useEffect, useState } from "react";
const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading ? (
        <>
          {[0, 1, 2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21].map((_, idx) => (
            <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
              <Flex gap="2">
                <SkeletonCircle size="10" />
                <VStack gap={2} alignItems={"flex-start"}>
                  <Skeleton height="10px" w={"200px"} />
                  <Skeleton height="10px" w={"200px"} />
                </VStack>
              </Flex>
              <Skeleton w={"full"}>
                <Box h={"400px"}/> 
              </Skeleton>
            </VStack>
          ))}
        </>
      ) : (
        <>
          <VStack gap={4} alignItems={"flex-start"} mb={10}>
            <FeedPost img={"/img1.jpg"} name={"Minisha"} />
          </VStack>
          <VStack gap={4} alignItems={"flex-start"} mb={10}>
            <FeedPost img={"img2.jpg"} name={"Suryansh"}/>
          </VStack>
          <VStack gap={4} alignItems={"flex-start"} mb={10}>
            <FeedPost img={"img3.jpg"}name={"Abhinay"} />
          </VStack>
          <VStack gap={4} alignItems={"flex-start"} mb={10}>
            <FeedPost img={"/img1.jpg"} name={"Minisha"} />
          </VStack>
          <VStack gap={4} alignItems={"flex-start"} mb={10}>
            <FeedPost img={"img2.jpg"} name={"Suryansh"}/>
          </VStack>
          <VStack gap={4} alignItems={"flex-start"} mb={10}>
            <FeedPost img={"img3.jpg"}name={"Abhinay"} />
          </VStack>
          <VStack gap={4} alignItems={"flex-start"} mb={10}>
            <FeedPost img={"/img1.jpg"} name={"Minisha"} />
          </VStack>
          <VStack gap={4} alignItems={"flex-start"} mb={10}>
            <FeedPost img={"img2.jpg"} name={"Suryansh"}/>
          </VStack>
          <VStack gap={4} alignItems={"flex-start"} mb={10}>
            <FeedPost img={"img3.jpg"}name={"Abhinay"} />
          </VStack>
          <VStack gap={4} alignItems={"flex-start"} mb={10}>
            <FeedPost img={"/img1.jpg"} name={"Minisha"} />
          </VStack>
          <VStack gap={4} alignItems={"flex-start"} mb={10}>
            <FeedPost img={"img2.jpg"} name={"Suryansh"}/>
          </VStack>
          <VStack gap={4} alignItems={"flex-start"} mb={10}>
            <FeedPost img={"img3.jpg"}name={"Abhinay"} />
          </VStack>
          <VStack gap={4} alignItems={"flex-start"} mb={10}>
            <FeedPost img={"/img1.jpg"} name={"Minisha"} />
          </VStack>
          <VStack gap={4} alignItems={"flex-start"} mb={10}>
            <FeedPost img={"img2.jpg"} name={"Suryansh"}/>
          </VStack>
          <VStack gap={4} alignItems={"flex-start"} mb={10}>
            <FeedPost img={"img3.jpg"}name={"Abhinay"} />
          </VStack>
          <VStack gap={4} alignItems={"flex-start"} mb={10}>
            <FeedPost img={"/img1.jpg"} name={"Minisha"} />
          </VStack>
          <VStack gap={4} alignItems={"flex-start"} mb={10}>
            <FeedPost img={"img2.jpg"} name={"Suryansh"}/>
          </VStack>
          <VStack gap={4} alignItems={"flex-start"} mb={10}>
            <FeedPost img={"img3.jpg"}name={"Abhinay"} />
          </VStack>
          <VStack gap={4} alignItems={"flex-start"} mb={10}>
            <FeedPost img={"/img1.jpg"} name={"Minisha"} />
          </VStack>
          <VStack gap={4} alignItems={"flex-start"} mb={10}>
            <FeedPost img={"img2.jpg"} name={"Suryansh"}/>
          </VStack>
          <VStack gap={4} alignItems={"flex-start"} mb={10}>
            <FeedPost img={"img3.jpg"}name={"Abhinay"} />
          </VStack>
        </>
      )}

      {
        <>
          <Text fontSize={"md"} color={"white.500"}>
             Want to learn more about coding and software development?
          </Text>
          <Text color={"white.500"}>Stop scrolling and follow more!!</Text>
        </>
      }
    </Container>
  );
};

export default FeedPosts;
