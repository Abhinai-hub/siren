import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <Card>
        <CardContent>
          <Typography variant="h5">Hello MUI</Typography>
          <Typography variant="body2">This is a Material UI Card.</Typography>
          <Button variant="contained" color="primary">
            Click Me
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;