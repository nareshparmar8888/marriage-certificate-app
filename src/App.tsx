import React from "react";
import "./App.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const App = () => {
  return (
    <div className="scssClass">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <h1> Welcome To React</h1>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
