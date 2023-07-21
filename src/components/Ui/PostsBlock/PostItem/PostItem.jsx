import React from "react";
// import "./styles/main.css";
import Mybutton from "../../button/MyButton/Mybutton";
import { useLocation, useNavigate } from "react-router-dom";
import style from "../Post.module.css";
import {
  Button,
  Card,
  CardContent,
  Typography,
  Box,
  ButtonGroup,
  Stack,
} from "@mui/material";

function PostItem(props) {
  const router = useNavigate();

  // const router = useLocation()
  // console.log(router.pathname)

  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          p: 1,
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h8" component="div">
            {props.post.id}. {props.post.title}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {props.post.body}
          </Typography>
        </CardContent>

        <Stack direction="row" spacing={2}>
          <Button
            size="small"
            onClick={() => router("/posts/" + props.post.id)}
          >
            {" "}
            Open{" "}
          </Button>
          <Button size="small" onClick={() => props.remove(props.post)}>
            {" "}
            Delete{" "}
          </Button>
        </Stack>
      </Card>

      {/* <div className={style.post_content}>
        <div className={style.post_head}>
          {props.post.id}. {props.post.title}
        </div>
        <div className={style.post_content}> {props.post.body} </div>
      </div> */}
      {/* <div className="post-btns"> */}
      {/* <Mybutton onClick={() => console.log(router.pathname +"/"+ props.post.id)}>Открыть</Mybutton> */}
      {/* <Mybutton onClick={() => router("/posts/" + props.post.id)}>
          Открыть
        </Mybutton>
        <Mybutton onClick={() => props.remove(props.post)}>Удалить</Mybutton>
      </div> */}
    </>
  );
}

export default PostItem;
