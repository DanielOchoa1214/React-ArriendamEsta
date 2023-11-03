import { useEffect, useState } from "react";
import { getReviews } from "../../services/ReviewServices";
import { Box, UnorderedList } from "@chakra-ui/react";
import Review from "../Review/Review";

export default function ReviewsList(props) {
    const { target, id } = props;
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        getReviews(target, id).then((res) => setReviews(res));
    }, []);

    return (
        <Box>
            <UnorderedList listStyleType={"none"}>
                {reviews.map((review, key) => (
                    <Review key={key} review={review} />
                ))}
            </UnorderedList>
        </Box>
    );
}