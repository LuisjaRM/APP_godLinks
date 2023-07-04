import React from "react";
import Rating from "@mui/lab/Rating";
// import Typography from "@material-ui/core/Typography";
// import Box from "@material-ui/core/Box";

export default function RatingStars() {
  const [value, setValue] = React.useState(0);

  return (
    <section>
      <fieldset>
        {/* <legend>Controlled</legend> */}
        <Rating
          name="simple-controlled"
          value={value}
          precision={0.5}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </fieldset>
    </section>
  );
}
