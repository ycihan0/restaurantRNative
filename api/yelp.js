import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer CxK_j3Y9EkVWGBxNzFIe_B0t3ygcOaqey88p3nZfOwXz3mdqcRNvDRxe8HJHO3PebSwjAFzWk9kVe1iMRQxGtMiNq4MUoEVe9JrB8zMRtkIZ8VnbpBi8-p9WRrQbZ3Yx",
  },
});
