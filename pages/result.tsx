import { CheckCircleIcon, CloseIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetchGetJSON } from "../utils/api-helpers";

export default function ResultPage() {
  const router = useRouter();

  // Fetch CheckoutSession from static page via
  // https://nextjs.org/docs/basic-features/data-fetching#static-generation
  const { data, error } = useSWR(
    router.query.session_id
      ? `/api/checkout_sessions/${router.query.session_id}`
      : null,
    fetchGetJSON
  );
  let icon;

  if (error) {
    icon = (
      <Box display="inline-block">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bg={"red.500"}
          rounded={"50px"}
          w={"55px"}
          h={"55px"}
          textAlign="center"
        >
          <CloseIcon boxSize={"20px"} color={"white"} />
        </Flex>
      </Box>
    );
  } else {
    <CheckCircleIcon boxSize={"50px"} color={"green.500"} />;
  }

  if (error) return <div>failed to load</div>;

  return (
    <Box textAlign="center" py={10} px={6}>
      {icon}
      <Heading as="h2" size="xl" mt={6} mb={2}>
        This is the headline
      </Heading>
      <Text color={"gray.500"}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </Text>
    </Box>
  );
}
