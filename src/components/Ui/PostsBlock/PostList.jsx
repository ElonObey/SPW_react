import React from "react";
import PostItem from "./PostItem/PostItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import style from "./Post.module.css";
import { Box, Container, Stack, Typography, Grid } from "@mui/material";
import { ContactEmergency } from "@mui/icons-material";

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <div>Посты не найдены</div>;
  }

  return (
    <div>
      <Container>
        <Stack alignItems="center" spacing={5} sx={{mb: 5}}>
          <Typography color={"text.main"} variant="h4">
            {title}
          </Typography>
          <hr style={{ width: "80%" }} />
        </Stack>

        <Grid container columns={4} justifyContent="center" sx={{gap: 1}}>
          {posts.map((post, index) => (
            <CSSTransition key={post.id} timeout={500}>
              <PostItem remove={remove} number={index + 1} post={post} />
            </CSSTransition>
          ))}
        </Grid>
      </Container>

      {/* <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500}>
            <PostItem remove={remove} number={index + 1} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup> */}
    </div>
  );
};

export default PostList;
