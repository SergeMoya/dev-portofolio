.timeline-container {
  /* Existing styles remain unchanged */
}

.timeline-item {
  /* Existing styles remain unchanged */
}

.timeline-icon {
  /* Existing styles remain unchanged */
}

.timeline-content {
  width: 100%;
  max-width: 1000px;
  background: rgb(180, 177, 177);
  border-radius: 8px;
  padding: 20px;
  margin-left: 60px;
  position: relative;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  text-align: left;
  overflow: hidden; /* Hide content initially for smooth expansion */
  transition: max-height 0.3s ease; /* Animate max-height for smooth expansion/collapse */
}

.timeline-content:before {
  /* Existing styles remain unchanged */
}

.timeline-content h3 {
  /* Existing styles remain unchanged */
}

.timeline-content h4 {
  /* Existing styles remain unchanged */
}

.timeline-content h5 {
  /* Existing styles remain unchanged */
}

.timeline-content p {
  color: #666;
  font-size: 14px;
  line-height: 1.6; /* Improves readability of longer descriptions */
}

.timeline-content:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 25px rgba(0,0,0,0.15);
}

.timeline-content.expanded {
  max-height: 100%; /* Show full content when expanded */
}

@keyframes fadeInUp {
  /* Existing styles remain unchanged */
}

@media screen and (max-width: 600px) {
  .timeline-container {
    /* Existing styles remain unchanged */
  }

  .timeline-icon {
    /* Existing styles remain unchanged */
  }

  .timeline-content {
    /* Existing styles remain unchanged */
  }
}
