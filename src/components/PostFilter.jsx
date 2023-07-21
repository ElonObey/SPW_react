import React from "react";
import MySelect from "./Ui/select/MySelect";
import Myinput from "./Ui/input/Myinput";
import { Box, Stack } from "@mui/material";

const PostFilter = ({ filter, setFilter }) => {
  return (
    
      <Stack direction="row" spacing={5}>
        <Box width={"80%"}>
          <Myinput
            placeholder="Поиск"
            value={filter.query}
            onChange={(e) => setFilter({ ...filter, query: e.target.value })}
          />
        </Box>
        <Box width={"20%"}>
          <MySelect
            value={filter.sort}
            onChange={(selectedSort) =>
              setFilter({ ...filter, sort: selectedSort })
            }
            defaultValue="Сортировка по"
            options={[
              { value: "title", name: "По названию" },
              { value: "body", name: "По описанию" },
            ]}
          />
        </Box>
      </Stack>
   
  );
};

export default PostFilter;
