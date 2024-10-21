import {
  Box,
  Link,
  Typography
} from "@mui/material";
import React from "react";

const Introduction: React.FC = () => {
  return <Box>
    <Typography variant="h4" gutterBottom>
        Welcome to the GraphRAG Visualizer
      </Typography>

      <Typography variant="h6" gutterBottom>
        Overview
      </Typography>
      <Typography variant="body1" gutterBottom>
        This application visualizes Microsoft{" "}
        <Link
          href="https://microsoft.github.io/graphrag/"
          target="_blank"
          rel="noopener"
        >
          GraphRAG
        </Link>{" "}
        artifacts. Simply upload the parquet files to visualize the data without
        needing additional software like Gephi, Neo4j, or Jupyter Notebook.
      </Typography>

      <Box
        component="img"
        src={process.env.PUBLIC_URL + "/demo.png"}
        alt="Demo"
        sx={{ mt: 2, mb: 2, width: "100%" }}
      />

      <Typography variant="h6" gutterBottom>
        Features
      </Typography>
      <ul>
        <li>
          <Typography variant="body1">
            <strong>Graph Visualization:</strong> View the graph in 2D or 3D in
            the "Graph Visualization" tab.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Data Tables:</strong> Display data from the parquet files in
            the "Data Tables" tab.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Search Functionality:</strong> Fully supports search,
            allowing users to focus on specific nodes or relationships.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Local Processing:</strong> Your artifacts are processed
            locally on your machine. They are not uploaded anywhere, ensuring
            your data remains secure and private.
          </Typography>
        </li>
      </ul>
  </Box>
};

export default Introduction;
