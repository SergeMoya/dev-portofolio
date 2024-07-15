.projects-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; /* Allows wrapping to handle responsiveness */
  justify-content: space-around; /* Ensures even spacing on all sides */
  padding: 20px;
  margin: auto;
}

.project-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 300px; /* Flex-grow, flex-shrink and flex-basis set for adaptive sizing */
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  margin: 10px;
  transition: transform 0.3s ease;
}

.project-image {
  width: 100%;
  height: auto;
  object-fit: cover; /* Ensures the image covers the allocated space without distortion */
}

.project-info {
  padding: 15px;
  text-align: center;
}

.project-info h3, .project-info p {
  margin: 10px 0;
}

.technologies {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Centers technology tags within the card */
  gap: 10px;
}

.technologies li {
  background: #eee;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
}

.project-link {
  display: inline-block;
  background: #4A90E2;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 10px;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}

@media (max-width: 900px) {
  .projects-container {
    justify-content: center; /* Centers cards in the container */
  }
  .project-card {
    width: 90%; /* Cards take up almost full width for better readability */
  }
}

@media (max-width: 400px) {
  .project-card {
    width: 100%; /* Full width for very small devices */
  }
  .technologies li {
    font-size: 12px; /* Smaller font size for technology tags */
  }
}
