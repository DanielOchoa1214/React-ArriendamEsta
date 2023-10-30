import { useEffect, useState } from "react";
import { getReviewsFromUser } from "../../services/ReviewServices";
import { Box, UnorderedList } from "@chakra-ui/react";
import Review from "../Review/Review";

export default function ReviewsList() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        getReviewsFromUser("3").then((res) => setReviews(res));
    }, []);

    return (
        <Box>
            <UnorderedList listStyleType={"none"}>
                {reviews.map((review, key) => (
                    <Review key={key} review={review}/>
                ))}
            </UnorderedList>
        </Box>
    );
}