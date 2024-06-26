import styled from "styled-components";
import PostTweeterForm from "../components/Board/post_tweet_form";
import Timeline from "../components/Board/timeline";

const Wrapper = styled.div`
display:grid;
gap: 50px;
overflow-y:scroll;
grid-template-rows:1fr 5fr;
`;

export default function Board()
{
    return(
        <Wrapper>
        <PostTweeterForm/>
        <Timeline/>
        </Wrapper>
    )
}