import axios from "axios";

export default {
    saveReview: function(ReviewData) {
      return axios.post("/api/reviews", ReviewData);
    }
  };