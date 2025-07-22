import React from "react";
import { ReactGoogleReviews } from "react-google-reviews";
import CardCarousel from "./CompCardCarousel";

let featurableWidgetId = "0e31b189-2b21-4b21-90c2-75f0e27da0d3";

function CompGoogleReviewsWrapper() {
  return (
    <ReactGoogleReviews
      layout="custom"
      featurableId={featurableWidgetId}
      renderer={(reviews) => <CardCarousel reviews={reviews} />}
    />
  );
}

export default CompGoogleReviewsWrapper;
