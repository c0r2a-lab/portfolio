import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import img_bcwdkc from "../../Assets/Projects/breast-cancer-wisconsin-diagnosis-knn-crossvalidation.PNG";
import img_cccsl from "../../Assets/Projects/cancer-cell-classify-scikit-learn.PNG";
import img_dr from "../../Assets/Projects/diet-recommendor.PNG";
import img_fi from "../../Assets/Projects/food-identifier.PNG";
import img_sda from "../../Assets/Projects/stats-data-analysis.PNG";
import img_spp from "../../Assets/Projects/stock-price-prediction.PNG";
import img_fd from "../../Assets/Projects/face-detection.PNG"
import img_x64_rustdesk from "../../Assets/Projects/re-resolution.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Previous <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some projects I've worked before.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img_bcwdkc}
              isBlog={false}
              title="Breast Cancer Wisconsin Diagnosis"
              description="Utilized KNN(K-nearest neighbor algorithm) to predict whether patient is having cancer(Malignant Tumour) or not(Benign tumour). Breast Cancer Wisconsin has been diagnosed by not only KNN but also Cross Validation in this stuff."
              ghLink="https://github.com/c0r2a-lab/BreastCancerWisconsinDiagnosisByKNNAndCrossValidation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img_dr}
              isBlog={false}
              title="Diet Recommendation System"
              description="People from all around the world are getting more concerned in their health and way of life in today's modern environment. However, avoiding junk food and exercising alone are insufficient; we also need to eat a balanced diet. We can live a healthy life with a balanced diet based on our height, weight, and age."
              ghLink="https://github.com/c0r2a-hub/diet-recommender"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img_spp}
              isBlog={false}
              title="Stock Price Prediction"
              description="The input file data.csv contains the stock-price values for 3 hours prior to run-time; this acts as the history data and helps estimate market volatility. The output file opt.csv contains the output (most likely outcome) price-vector from our code. You can use Excel or gnuplot to plot the resulting line graph of the predicted stock pricing."
              ghLink="https://github.com/c0r2a-lab/stock-predict"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img_fi}
              isBlog={false}
              title="Food Identifier"
              description="An Interactive web application for identifying food names based on the images, providing nutritional facts (For eg: calculating calories of the food you're eating) for diet advice and predicting the recipes based on the predicted food names."
              ghLink="https://github.com/c0r2a-hub/food-identifier"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img_sda}
              isBlog={false}
              title="Statistical Data Analysis"
              description="This project implements in Python some common statistical analysis methods used in data analysis, including Entropy, Mutual Information, Kolmogorov–Smirnov test, Kullback-Leibler divergence (KLD), AB tests (Mann-Whitney U and t-tests)"
              ghLink="https://github.com/c0r2a-hub/stats_data_analysis"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img_x64_rustdesk}
              isBlog={false}
              title="Vulnerability Research"
              description="Found vulnerability from x64 RustDesk app and reported it to Joseph Jacks' Team(https://rustdesk.com/team.html) who owns this application."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img_cccsl}
              isBlog={false}
              title="Cancer Cell Classification"
              description="Classified whether it is Malignant or Benign using Scikit-learn library."
              ghLink="https://github.com/c0r2a-lab/CancerCellClassificationByScikitLearn"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img_fd}
              isBlog={false}
              title="Face Detection by C++"
              description="detect faces in video display red box around face during video playing"
              ghLink="https://github.com/InnovativeAI/Simple_Face_Detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
