import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex
            align="center"
        >
            <Box mr="4" textAlign="right">
                <Text>Raul Sigoli</Text>
                <Text color="gray.300" fontSize="small">
                    raul_sigoli@hotmail.com
                        </Text>
            </Box>
            <Avatar size="md" name="Raul Sigoli" src="https://github.com/rauzola.png" />

        </Flex>
    );
}