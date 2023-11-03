import { useEffect, useState } from "react";
import { getReviews } from "../../services/ReviewServices";
import { Box, UnorderedList, Text } from "@chakra-ui/react";
import Review from "../Review/Review";

export default function ReviewsList(props) {
    const { target, id } = props;
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        getReviews(target, id).then((res) => setReviews(res));
    }, [id]);

    return (
        <Box>
            <Text as='b' fontSize='3xl' py='4'>Valoraciones</Text>
            <UnorderedList listStyleType={"none"}>
                {reviews.map((review, key) => (
                    <Review key={key} review={review} />
                ))}
            </UnorderedList>
        </Box>
    );
}