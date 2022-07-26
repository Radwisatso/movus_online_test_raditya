import styled from "styled-components";
import { Colors } from "../common/Colors";

function MainTitle({
    text
}) {
    return (
        <Text>
            {text}
        </Text>
    )
};

export default MainTitle;

const Text = styled.p`
    font-size: 22px;
    font-weight: 700;
    color: ${Colors.blackText};
`